#!/usr/bin/env node
/* ============================================================
   DECK-GEOMETRIE EXTRAHIEREN — Vorstufe für den nativen
   PPTX-Master (Langdock-File-Template)

   Rendert templates/deck-template.html in Headless Chrome und
   vermisst jede Slide: Textelemente (Position, Größe, Schrift,
   Farbe), Hairlines, Wortmarken-Bilder, Sektions-Hintergründe.
   Ausgabe: geometry.json im 1440x810-Koordinatenraum.

   Mechanik wie deck-lint.js: Mess-Skript wird in eine Temp-Kopie
   injiziert, Chrome --dump-dom liefert das Ergebnis als Base64.

   Nutzung: node langdock/pptx-template/extract-geometry.js
   ============================================================ */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '../..');
const src = path.join(repoRoot, 'templates/deck-template.html');
let html = fs.readFileSync(src, 'utf8');

const probe = `<script>
window.addEventListener('load', () => setTimeout(() => {
  try {
  const out = { slides: [] };
  const ownText = el => [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
  document.querySelectorAll('deck-stage > section').forEach(sec => {
    const sr = sec.getBoundingClientRect();
    const k = 1440 / sr.width;                       // Stage-Skalierung normalisieren
    const rel = r => ({ x: +( (r.left - sr.left) * k ).toFixed(1), y: +((r.top - sr.top) * k).toFixed(1), w: +(r.width * k).toFixed(1), h: +(r.height * k).toFixed(1) });
    const s = {
      label: sec.dataset.label || '',
      moment: sec.classList.contains('dslide-moment'),
      dark: sec.classList.contains('dslide-dark'),
      bg: getComputedStyle(sec).backgroundColor,
      texts: [], lines: [], images: [],
    };
    sec.querySelectorAll('*').forEach(el => {
      if (el.closest('svg, script, style')) return;
      const cs = getComputedStyle(el);
      if (cs.display === 'none') return;
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) return;
      const txt = ownText(el);
      if (txt) {
        const clone = el.cloneNode(true);                  // br wird Zeilenumbruch, unabhängig von Sichtbarkeit
        clone.querySelectorAll('br').forEach(b => b.replaceWith('\\n'));
        s.texts.push({
          text: clone.textContent.trim(),
          own: txt,
          ...rel(r),
          /* fontSize NICHT mit k skalieren: transform-Scale der Stage
             ändert Rechtecke, aber nicht die computed font-size. */
          fs: +parseFloat(cs.fontSize).toFixed(1),
          fw: cs.fontWeight,
          italic: cs.fontStyle === 'italic',
          color: cs.color,
          ls: cs.letterSpacing,
          align: cs.textAlign,
          mono: /JetBrains/i.test(cs.fontFamily),
          caps: cs.textTransform === 'uppercase',
          leaf: [...el.children].every(c => c.tagName === 'BR'),
        });
      }
      /* Hairlines: flache/schmale gefüllte Divs ohne Text */
      if (!txt && el.tagName === 'DIV') {
        const bgc = cs.backgroundColor;
        const flach = r.height * k <= 4 && r.width * k >= 40;
        const schmal = r.width * k <= 4 && r.height * k >= 40;
        if ((flach || schmal) && bgc && bgc !== 'rgba(0, 0, 0, 0)') s.lines.push({ ...rel(r), color: bgc });
      }
      /* Hairlines als Border (häufigster Fall im Template) */
      const rl = rel(r);
      for (const [side, wProp, cProp] of [
        ['top', 'borderTopWidth', 'borderTopColor'],
        ['bottom', 'borderBottomWidth', 'borderBottomColor'],
        ['left', 'borderLeftWidth', 'borderLeftColor'],
        ['right', 'borderRightWidth', 'borderRightColor'],
      ]) {
        const bw = parseFloat(cs[wProp]);
        if (bw >= 0.5 && bw <= 3) {
          const c = cs[cProp];
          if (!c || c === 'rgba(0, 0, 0, 0)') continue;
          if (side === 'top')    s.lines.push({ x: rl.x, y: rl.y, w: rl.w, h: 1, color: c });
          if (side === 'bottom') s.lines.push({ x: rl.x, y: rl.y + rl.h, w: rl.w, h: 1, color: c });
          if (side === 'left')   s.lines.push({ x: rl.x, y: rl.y, w: 1, h: rl.h, color: c, v: true });
          if (side === 'right')  s.lines.push({ x: rl.x + rl.w, y: rl.y, w: 1, h: rl.h, color: c, v: true });
        }
      }
      if (el.tagName === 'IMG') {
        const srcv = el.getAttribute('src') || '';
        const wm = /wordmark-white/.test(srcv) ? 'white' : /wordmark-black/.test(srcv) ? 'black' : (el.dataset.wm === 'w' ? 'white' : el.dataset.wm === 'b' ? 'black' : null);
        if (wm) s.images.push({ kind: 'wordmark-' + wm, ...rel(r) });
      }
    });
    out.slides.push(s);
  });
  const div = document.createElement('div');
  div.id = '__geo_report__';
  div.textContent = btoa(unescape(encodeURIComponent(JSON.stringify(out))));
  document.body.appendChild(div);
  } catch (e) {
    const div = document.createElement('div');
    div.id = '__geo_error__';
    div.textContent = String(e && e.stack || e);
    document.body.appendChild(div);
  }
}, 1500));
<\/script>`;

html = html.replace('</body>', probe + '</body>');
const tmp = path.join(path.dirname(src), '.geo-tmp-' + Date.now() + '.html');
fs.writeFileSync(tmp, html);

try {
  const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const dom = execFileSync(chrome, [
    '--headless', '--disable-gpu', '--window-size=1600,1000',
    '--virtual-time-budget=12000', '--dump-dom', 'file://' + tmp,
  ], { maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] }).toString('utf8');
  const m = dom.match(/id="__geo_report__"[^>]*>([A-Za-z0-9+/=]+)</);
  if (!m) {
    const e = dom.match(/id="__geo_error__"[^>]*>([\s\S]*?)<\/div>/);
    console.error('FEHLER — kein Geometrie-Report im Render.' + (e ? '\nProbe-Fehler: ' + e[1] : ''));
    process.exit(1);
  }
  const json = decodeURIComponent(escape(Buffer.from(m[1], 'base64').toString('binary')));
  const out = path.join(__dirname, 'geometry.json');
  fs.writeFileSync(out, json);
  const data = JSON.parse(json);
  console.log(`OK — ${data.slides.length} Slides vermessen → ${out}`);
  data.slides.forEach((s, i) => console.log(`  ${String(i + 1).padStart(2, '0')} ${s.label}: ${s.texts.length} Texte, ${s.lines.length} Linien, ${s.images.length} Logos`));
} finally {
  fs.rmSync(tmp, { force: true });
}
