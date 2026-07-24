#!/usr/bin/env node
/* ============================================================
   DECK-GEOMETRIE EXTRAHIEREN — Vorstufe für den nativen
   PPTX-Master (Langdock-File-Template)

   Rendert templates/deck-template.html in Headless Chrome und
   vermisst jede Slide: Textelemente (Position, Größe, Schrift,
   Zeilenhöhe, Laufweite, Farbe), Flächen (Karten, Bänder,
   Rahmen — als Rechtecke mit Radius), Grafik-Regionen (SVGs und
   Gradient-Flächen — als Bildausschnitte), Hairlines, Wortmarken,
   Sektions-Hintergründe. Ausgabe: geometry.json im
   1440x810-Koordinatenraum + assets/shots/slide-XX.png
   (2x-Screenshots der Slides mit Grafik-Regionen, aus denen der
   Build die Ausschnitte schneidet).

   Neufassung 23.07.2026 nach Nils' PowerPoint-Befund: Die erste
   Fassung vermaß nur Text und Linien — Karten, Resultat-Band,
   Device-Rahmen und alle SVG-Grafiken fehlten in der PPTX
   komplett.

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
  document.querySelectorAll('deck-stage > section').forEach((sec, si) => {
    const sr = sec.getBoundingClientRect();
    const k = 1440 / sr.width;                       // Stage-Skalierung normalisieren
    const rel = r => ({ x: +( (r.left - sr.left) * k ).toFixed(1), y: +((r.top - sr.top) * k).toFixed(1), w: +(r.width * k).toFixed(1), h: +(r.height * k).toFixed(1) });
    const s = {
      label: sec.dataset.label || '',
      moment: sec.classList.contains('dslide-moment'),
      dark: sec.classList.contains('dslide-dark'),
      bg: getComputedStyle(sec).backgroundColor,
      texts: [], lines: [], images: [], rects: [], pix: [],
    };
    /* Voll-Block-Erfassung: Ein Element, dessen Kinder nur Inline-
       Tags sind („<strong>Lead.</strong> Resttext"), wird EINE Box
       mit dem kompletten Text. Der reine own-Ansatz erzeugte hier
       zwei Boxen an derselben X-Position (Container-Resttext +
       Inline-Kind) — Text-über-Text schon im Master. */
    const INLINE = new Set(['B', 'STRONG', 'EM', 'I', 'SPAN', 'BR', 'SUP', 'SUB', 'U', 'MARK', 'A']);
    const fullCaptured = new Set();
    let zc = 0;                                      // DOM-Reihenfolge für Flächen/Grafiken
    /* Textmaß am TEXT, nicht am Container: Ein td/Band-Container
       bringt sein Padding mit — vermessen an der Box kleben die
       Zeilen beim Zusammenlegen im Build aneinander (Tabellen-
       Befund 23.07.). Range liefert das enge Rechteck der
       Textzeilen. */
    const union = (a, b) => {
      if (!a) return b; if (!b) return a;
      const l = Math.min(a.left, b.left), t = Math.min(a.top, b.top);
      return { left: l, top: t,
               width: Math.max(a.right, b.right) - l, height: Math.max(a.bottom, b.bottom) - t,
               right: Math.max(a.right, b.right), bottom: Math.max(a.bottom, b.bottom) };
    };
    const textRect = (el, ownOnly) => {
      const rng = document.createRange();
      if (!ownOnly) { rng.selectNodeContents(el); const rr = rng.getBoundingClientRect(); return rr.width || rr.height ? rr : null; }
      let u = null;
      [...el.childNodes].forEach(n => {
        if (n.nodeType !== 3 || !n.textContent.trim()) return;
        rng.selectNodeContents(n);
        const rr = rng.getBoundingClientRect();
        if (rr.width || rr.height) u = union(u, rr);
      });
      return u;
    };
    sec.querySelectorAll('*').forEach(el => {
      /* SVGs: die Wurzel wird Grafik-Region (Bildausschnitt),
         ihr Inhalt wird übersprungen. Moment-Slides tragen ihr
         komplettes Render als Hintergrund — dort nichts erfassen. */
      const inSvg = el.closest('svg');
      if (inSvg && inSvg !== el) return;
      if (el.closest('script, style')) return;
      if (inSvg === el) {
        if (!s.moment && !el.classList.contains('kasane-layer')) s.pix.push({ ...rel(el.getBoundingClientRect()), kind: 'svg', z: zc++ });
        return;
      }
      const cs = getComputedStyle(el);
      if (cs.display === 'none') return;
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) return;
      const rl = rel(r);
      /* Flächen und Grafik-Regionen (nur Content-Slides — Moment-
         Slides tragen das gerenderte Vollbild): Gradient-Flächen
         (background-image) werden Bildausschnitte, gefüllte Flächen
         (Karten, Bänder, Rahmen) Rechtecke mit Eck-Radius. */
      if (!s.moment && el !== sec) {
        const bgi = cs.backgroundImage;
        const bgc = cs.backgroundColor;
        const flaechig = rl.w > 8 && rl.h > 8;
        if (bgi && bgi !== 'none' && flaechig && rl.w < 1439) {
          s.pix.push({ ...rl, kind: 'bgimg', z: zc++ });
        } else if (bgc && bgc !== 'rgba(0, 0, 0, 0)' && flaechig) {
          s.rects.push({ ...rl, radius: +(((parseFloat(cs.borderTopLeftRadius) || 0) * k)).toFixed(1), color: bgc, z: zc++ });
        }
      }
      let txt = ownText(el);
      /* Icon-Glyphen (Material Symbols) sind Ligatur-Text — als
         Klartext „arrow_forward" in der PPTX wären sie ein Fehler.
         Statt sie nur zu leeren (so fehlten sie in der PPTX komplett,
         Befund Nils 24.07.), werden sie Grafik-Region: der Build
         schneidet sie als Bildausschnitt aus dem Slide-Screenshot. */
      if (/Material Symbols/i.test(cs.fontFamily)) {
        if (!s.moment && rl.w >= 8 && rl.h >= 8) s.pix.push({ ...rl, kind: 'icon', z: zc++ });
        txt = '';
      }
      if (txt) {
        let anc = el.parentElement, covered = false;
        while (anc && anc !== sec) { if (fullCaptured.has(anc)) { covered = true; break; } anc = anc.parentElement; }
        if (covered) txt = '';
      }
      if (txt) {
        const full = [...el.children].every(c => INLINE.has(c.tagName));
        if (full) fullCaptured.add(el);
        const clone = el.cloneNode(true);                  // br wird Zeilenumbruch, unabhängig von Sichtbarkeit
        clone.querySelectorAll('br').forEach(b => b.replaceWith('⏎'));
        const collapse = t => t.replace(/\\s+/g, ' ').trim();
        const lhv = parseFloat(cs.lineHeight);
        const leafEl = [...el.children].every(c => c.tagName === 'BR');
        const tr = textRect(el, !(full || leafEl));
        s.texts.push({
          full,
          text: collapse(clone.textContent).split('⏎').map(t => t.trim()).join('\\n'),
          own: collapse(txt),
          ...(tr ? rel(tr) : rl),
          /* fontSize/lineHeight NICHT mit k skalieren: transform-Scale
             der Stage ändert Rechtecke, nicht die computed styles. */
          fs: +parseFloat(cs.fontSize).toFixed(1),
          lh: isNaN(lhv) ? null : +lhv.toFixed(1),
          fw: cs.fontWeight,
          italic: cs.fontStyle === 'italic',
          color: cs.color,
          ls: cs.letterSpacing,
          align: cs.textAlign,
          mono: /JetBrains/i.test(cs.fontFamily),
          caps: cs.textTransform === 'uppercase',
          leaf: leafEl,
          /* Rolle fürs Boxen-Sizing im Build: Meta-Zeilen (Kopf-,
             Fußzeile, Eyebrows) sind einzeilig und brauchen
             Designbreite statt Mustertext-Maß. */
          role: el.closest('.slide-head') ? 'head'
              : el.closest('.slide-foot') ? 'foot'
              : el.closest('.cover-head') ? 'foot'
              : el.closest('.type-eyebrow') ? 'eyebrow'
              : null,
        });
      }
      /* Hairlines: flache/schmale gefüllte Divs ohne Text.
         NICHT auf Moment-Slides: dort trägt das Hintergrundbild
         (bg-XX.png) alle Linien bereits — ein zusätzliches Shape
         zeichnet dieselbe Linie minimal versetzt doppelt (Befund
         Nils 24.07., Cover-Brücke/Kapiteltrenner-Fußzeile). */
      if (!txt && !s.moment && el.tagName === 'DIV') {
        const bgc = cs.backgroundColor;
        const flach = r.height * k <= 4 && r.width * k >= 40;
        const schmal = r.width * k <= 4 && r.height * k >= 40;
        if ((flach || schmal) && bgc && bgc !== 'rgba(0, 0, 0, 0)') s.lines.push({ ...rl, color: bgc });
      }
      /* Hairlines als Border (häufigster Fall im Template) —
         wie oben: auf Moment-Slides trägt sie das Hintergrundbild. */
      if (!s.moment) for (const [side, wProp, cProp] of [
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
    /* Seitenzahl: der CSS-Counter (.pagenum::after) hat keinen
       Textknoten und entgeht dem own-Ansatz — als eigene Textbox
       nachmessen, Wert = Slide-Nummer wie decimal-leading-zero. */
    const pn = sec.querySelector('.slide-foot .pagenum');
    if (pn && getComputedStyle(pn).display !== 'none') {
      const pcs = getComputedStyle(pn);
      const num = String(si + 1).padStart(2, '0');
      const plh = parseFloat(pcs.lineHeight);
      s.texts.push({
        text: num, own: num,
        ...rel(pn.getBoundingClientRect()),
        fs: +parseFloat(pcs.fontSize).toFixed(1),
        lh: isNaN(plh) ? null : +plh.toFixed(1),
        fw: pcs.fontWeight,
        italic: false,
        color: pcs.color,
        ls: pcs.letterSpacing,
        align: 'right',
        mono: /JetBrains/i.test(pcs.fontFamily),
        caps: false,
        leaf: true,
        role: 'pagenum',
      });
    }
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

const injected = html.replace('</body>', probe + '</body>');
const tmp = path.join(path.dirname(src), '.geo-tmp-' + Date.now() + '.html');
fs.writeFileSync(tmp, injected);

const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

try {
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
  data.slides.forEach((s, i) => console.log(`  ${String(i + 1).padStart(2, '0')} ${s.label}: ${s.texts.length} Texte, ${s.lines.length} Linien, ${s.rects.length} Flächen, ${s.pix.length} Grafiken, ${s.images.length} Logos`));

  /* ---- Screenshots für Grafik-Ausschnitte -------------------
     Slides mit pix-Regionen werden einzeln in 1440x810 bei 2x
     gerendert (ohne deck-stage, feste Sektionsgröße); der Build
     schneidet daraus die Regionen. */
  const shotsDir = path.join(__dirname, 'assets/shots');
  fs.mkdirSync(shotsDir, { recursive: true });
  const sections = html.match(/<section class="dslide[\s\S]*?<\/section>/g) || [];
  if (sections.length !== data.slides.length) {
    console.error(`FEHLER — ${sections.length} Sektionen im Markup, ${data.slides.length} vermessen.`);
    process.exit(1);
  }
  const headHtml = html.slice(0, html.indexOf('<body>') + '<body>'.length);
  data.slides.forEach((s, i) => {
    if (!s.pix.length) return;
    const shotHtml = headHtml
      + '\n<style>body { margin: 0; } section.dslide { width: 1440px; height: 810px; overflow: hidden; position: relative; }</style>\n'
      + sections[i] + '\n</body>\n</html>\n';
    const shotTmp = path.join(path.dirname(src), `.shot-tmp-${Date.now()}-${i}.html`);
    fs.writeFileSync(shotTmp, shotHtml);
    const png = path.join(shotsDir, `slide-${String(i).padStart(2, '0')}.png`);
    try {
      execFileSync(chrome, [
        '--headless', '--disable-gpu', '--hide-scrollbars',
        '--window-size=1440,810', '--force-device-scale-factor=2',
        '--virtual-time-budget=6000', `--screenshot=${png}`, 'file://' + shotTmp,
      ], { stdio: ['ignore', 'ignore', 'ignore'] });
      console.log(`  Screenshot: ${path.basename(png)} (${s.pix.length} Regionen)`);
    } finally {
      fs.rmSync(shotTmp, { force: true });
    }
  });

  /* ---- Moment-Hintergründe (bg-XX.png) --------------------
     Die Hintergründe der Moment-Slides (Cover, Trenner, Zitat,
     Schluss) entstanden bis 22.07. ad hoc ohne Skript und
     drifteten: Fußzeile/Seitenzahl eingebacken (Text-Doppelung
     in PowerPoint), Grain-Layer fehlte (harte Gradient-Kanten
     im Zitat), Template-Fixes vom 23./24.07. nicht drin (Befund
     Nils 24.07.). Jetzt reproduzierbar: Sektion isoliert rendern,
     ALLE Texte transparent + Wortmarken-IMGs ausgeblendet (beides
     zeichnet der Build als Textboxen/Bilder wieder drauf); Linien,
     Kasane, Grain und Topo-SVGs (explizite Stroke-Farben, kein
     currentColor) bleiben im Bild. */
  const bgDir = path.join(__dirname, 'assets');
  data.slides.forEach((s, i) => {
    if (!s.moment) return;
    const bgHtml = headHtml
      + '\n<style>body { margin: 0; } section.dslide { width: 1440px; height: 810px; overflow: hidden; position: relative; }'
      + '\nsection.dslide, section.dslide * { color: transparent !important; }'
      + '\nsection.dslide img { visibility: hidden !important; }</style>\n'
      + sections[i] + '\n</body>\n</html>\n';
    const bgTmp = path.join(path.dirname(src), `.bg-tmp-${Date.now()}-${i}.html`);
    fs.writeFileSync(bgTmp, bgHtml);
    const png = path.join(bgDir, `bg-${String(i).padStart(2, '0')}.png`);
    try {
      execFileSync(chrome, [
        '--headless', '--disable-gpu', '--hide-scrollbars',
        '--window-size=1440,810', '--force-device-scale-factor=1.5',
        '--virtual-time-budget=6000', `--screenshot=${png}`, 'file://' + bgTmp,
      ], { stdio: ['ignore', 'ignore', 'ignore'] });
      console.log(`  Hintergrund: ${path.basename(png)}`);
    } finally {
      fs.rmSync(bgTmp, { force: true });
    }
  });
} finally {
  fs.rmSync(tmp, { force: true });
}
