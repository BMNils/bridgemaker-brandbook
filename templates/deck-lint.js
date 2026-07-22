#!/usr/bin/env node
/* ============================================================
   BRIDGEMAKER DECK-LINT — die messbare Hälfte der Sehpflicht
   (guidelines/07 §7.8, Skill bridgemaker-slides)

   Rendert das Deck in Headless Chrome und prüft im ECHTEN Layout
   alles, was messbar ist:

   - Headline: max. zwei Zeilen, kein Schlusspunkt, exakt gleiche
     Y-Position auf jeder Content-Slide (nichts springt)
   - Kopf-/Fußzeilen-System: Content-Slides tragen beides,
     Kapiteltrenner nur die Fußzeile, Cover/Zitat/Schluss nichts —
     und die Fußzeile steht überall an derselben Position
   - Max. drei Textgrößen pro Seite (Headline / Content / Meta)
   - Grund Off-White auf Content-Slides; kein rohes Purple auf Dunkel
   - Kein Mono außerhalb von Code und Platzhalter-Captions,
     keine fremden Schriften
   - Kein Überlauf: Inhalt bleibt in der 1440×810-Stage
   - Zeichen & Voice-Basics: kein Middot/Bullet, keine Emoji,
     kein „→" im Fließtext, verbotene Phrasen, Arbeitsstände
   - Wortmarke auf Cover und Schluss

   Nutzung (im Deck-Ordner oder mit Pfad):
     node ../templates/deck-lint.js <deck>.html
     node ../templates/deck-lint.js <deck>.html --json

   Exit-Code 1 bei Fehlern — gedacht als erster Durchgang VOR der
   Sehpflicht. Der Lint ersetzt das Ansehen nicht: Layout-folgt-
   Argument, Grafik-Geometrie und Ton prüft weiterhin dein Auge.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const args = process.argv.slice(2);
const deckPath = args.find(a => !a.startsWith('--'));
const asJson = args.includes('--json');
if (!deckPath || !fs.existsSync(deckPath)) {
  console.error('Nutzung: node deck-lint.js <deck>.html [--json]');
  process.exit(1);
}

/* ------------------------------------------------------------
   Der Prüf-Code, der IM Browser läuft. Er wird per toString()
   in eine Temp-Kopie des Decks injiziert, misst nach Font-Load
   im ungescalten Layout (noscale) und legt den Befund als
   Base64-JSON in den DOM, den --dump-dom dann ausgibt.
   ------------------------------------------------------------ */
function lintInPage() {
  const OFF_WHITE = 'rgb(245, 241, 235)';
  const RAW_PURPLE = 'rgb(107, 74, 148)';
  const report = { slides: [], deck: [], meta: {} };

  const stage = document.querySelector('deck-stage');
  const slides = stage ? [...stage.children].filter(el => el.tagName === 'SECTION') : [];
  if (!stage || !slides.length) {
    report.deck.push({ level: 'error', msg: 'Keine <deck-stage> mit <section>-Slides gefunden — ist das ein Deck aus dem Template?' });
    return report;
  }
  report.meta.slideCount = slides.length;

  const round = v => Math.round(v * 10) / 10;
  const lineCount = el => {
    const cs = getComputedStyle(el);
    const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2;
    return Math.max(1, Math.round(el.getBoundingClientRect().height / lh));
  };
  const ownText = el => [...el.childNodes]
    .filter(n => n.nodeType === 3).map(n => n.textContent).join('');

  const titleTops = [], footBottoms = [];

  slides.forEach((s, i) => {
    const n = i + 1;
    const findings = [];
    const err = msg => findings.push({ level: 'error', msg });
    const warn = msg => findings.push({ level: 'warn', msg });

    const moment = s.classList.contains('dslide-moment');
    const dark = s.classList.contains('dslide-dark');
    const rect = s.getBoundingClientRect();
    const scale = rect.width / 1440 || 1;
    const relTop = r => round((r.top - rect.top) / scale);

    const head = s.querySelector('.slide-head');
    const foot = s.querySelector('.slide-foot');

    /* Kopf-/Fußzeilen-System: Rolle = Behandlung. */
    if (!moment) {
      if (!head) err('Kopfzeile fehlt — Content-Slides tragen „NN / Kapitel" links (.slide-head).');
      if (!foot) err('Fußzeile fehlt — Wortmarke + Kunde links, Seitenzahl rechts (.slide-foot).');
    } else {
      if (head) err('Kopfzeile auf einer Moment-Slide — Cover, Trenner, Zitat und Schluss laufen ohne .slide-head.');
      if (dark && foot) err('Fußzeile auf einer dunklen Moment-Slide — Cover, Zitat und Schluss laufen ohne .slide-foot.');
      if (!dark && !foot) err('Fußzeile fehlt — Kapiteltrenner tragen die Fußzeile (nur Cover, Zitat und Schluss laufen ohne).');
    }
    if (foot) {
      if (!foot.querySelector('.pagenum')) err('Seitenzahl fehlt in der Fußzeile (.pagenum, CSS-Counter).');
      if (!foot.querySelector('img[src*="wordmark"], img[data-wm]')) err('Wortmarke fehlt in der Fußzeile (.foot-brand).');
      footBottoms.push({ n, v: round((rect.bottom - foot.getBoundingClientRect().bottom) / scale) });
    }

    /* Headline: steht, bleibt zweizeilig, endet ohne Schlusspunkt. */
    const title = s.querySelector('.deck-title') ||
      (moment ? s.querySelector('h1, h2') : null);
    if (!moment && !title) {
      err('Keine Headline mit .deck-title — jede Content-Slide braucht die feste Kopfzone.');
    }
    if (title) {
      if (!moment) titleTops.push({ n, v: relTop(title.getBoundingClientRect()) });
      const lines = lineCount(title);
      if (lines > 2) err(`Headline läuft über ${lines} Zeilen — redigieren, nicht schrumpfen (max. zwei).`);
      const t = title.textContent.trim();
      if (/[.!]$/.test(t)) err('Headline endet mit Schlusspunkt oder Ausrufezeichen — Headlines laufen ohne.');
    }

    /* Text-Census: Größen, Schriften, Zeichen. */
    const sizes = new Map();          // fontSize → Beispieltext
    let slideText = '';
    s.querySelectorAll('*').forEach(el => {
      if (el.closest('svg, script, style')) return;
      const txt = ownText(el).trim();
      if (!txt) return;
      const cs = getComputedStyle(el);
      /* Nur display:none filtert — inaktive Slides stehen als
         Ganzes auf visibility:hidden (deck-stage) und müssen
         trotzdem geprüft werden. */
      if (cs.display === 'none') return;
      slideText += ' ' + txt;

      /* Mono ist legitim für echten Code, Platzhalter-Captions und
         Klammer-Platzhalter wie „[ Zitat folgt ]" (08-voice.md). */
      const ff = cs.fontFamily;
      const istPlatzhalter = el.closest('.placeholder-caption, code, pre') || /^\[.*\]$/.test(txt);
      if (/JetBrains/i.test(ff) && !istPlatzhalter) {
        err(`Mono außerhalb von Code/Platzhalter-Caption: „${txt.slice(0, 40)}" — UI-Text läuft in Inter.`);
      } else if (!/Inter|JetBrains|Material Symbols/i.test(ff)) {
        err(`Fremde Schrift „${ff.split(',')[0]}" bei „${txt.slice(0, 40)}" — nur Inter (und Mono für Code).`);
      }
      if (dark && cs.color === RAW_PURPLE) {
        err(`Rohes Purple auf Dunkel bei „${txt.slice(0, 40)}" — auf Dunkel gilt --bm-lavender-dark.`);
      }
      if (el.closest('.slide-head, .slide-foot, .num, .o-num, .chapter-num, .msym, .placeholder-caption, .pagenum')) return;
      /* ≤14px = Meta-Register (Eyebrow, Captions, type-small,
         Quellen) — gezählt werden nur die Register darüber. */
      const px = Math.round(parseFloat(cs.fontSize));
      if (px > 14 && !sizes.has(px)) sizes.set(px, txt.slice(0, 30));
    });

    if (sizes.size > 3) {
      const list = [...sizes.keys()].sort((a, b) => b - a).join('/');
      err(`${sizes.size} Textgrößen über dem Meta-Register (${list}px) — max. drei pro Seite: Headline, Content, Meta.`);
    }

    /* Zeichen & Voice-Basics (messbare Teilmenge von 08-voice.md). */
    if (/[·•]/.test(slideText)) err('Middot/Bullet-Zeichen im Text — Aufzählungen laufen als Satz mit Komma und „und".');
    const emoji = (slideText.match(/\p{Extended_Pictographic}/gu) || []).filter(c => !'©®™'.includes(c));
    if (emoji.length) err(`Emoji im Text (${[...new Set(emoji)].join(' ')}) — Emoji sind tabu.`);
    if (/→/.test(slideText)) warn('„→" im Text — im Fließtext ausschreiben; Pfeile gehören in Grafiken.');
    const phrase = slideText.match(/\b(leverage|unlock|next-gen|game.?changer|state.of.the.art|seamless)\b/i);
    if (phrase) warn(`Verbotene Phrase „${phrase[0]}" — Wortliste in 08-voice.md.`);
    const status = slideText.match(/folgt nach (Freigabe|Abstimmung)|wird nachgereicht|\btbd\b|to be defined/i);
    if (status) warn(`Arbeitsstand auf der Slide („${status[0]}") — gehört in die Speaker Notes.`);

    /* Grund & Überlauf. */
    if (!moment && getComputedStyle(s).backgroundColor !== OFF_WHITE) {
      err('Grund ist nicht Off-White — Farbfläche nur auf Cover, Trenner, Zitat und Schluss.');
    }
    const overX = s.scrollWidth - s.clientWidth, overY = s.scrollHeight - s.clientHeight;
    if (overX > 2 || overY > 2) {
      err(`Inhalt läuft aus der Slide (${overX > 2 ? overX + 'px horizontal' : ''}${overX > 2 && overY > 2 ? ', ' : ''}${overY > 2 ? overY + 'px vertikal' : ''}) — kürzen oder Layout wechseln.`);
    }

    /* Wortmarke auf Cover und Schluss. */
    if ((i === 0 || i === slides.length - 1) && !s.querySelector('img[src*="wordmark"], img[data-wm]')) {
      warn('Wortmarke fehlt — sie gehört auf Cover und Schluss.');
    }

    report.slides.push({ n, label: s.dataset.label || 'Slide ' + n, findings });
  });

  /* Blätter-Test: nichts springt. */
  const mode = arr => {
    const c = new Map();
    arr.forEach(({ v }) => c.set(v, (c.get(v) || 0) + 1));
    return [...c.entries()].sort((a, b) => b[1] - a[1])[0][0];
  };
  const jitter = (arr, label) => {
    if (arr.length < 2) return;
    const m = mode(arr);
    const off = arr.filter(({ v }) => Math.abs(v - m) > 1);
    if (off.length) {
      report.deck.push({
        level: 'error',
        msg: `${label} springt beim Blättern: Slide ${off.map(o => o.n + ' (' + o.v + 'px)').join(', ')} weicht von ${m}px ab.`,
      });
    }
  };
  jitter(titleTops, 'Die Headline');
  jitter(footBottoms, 'Die Fußzeile');

  return report;
}

/* ------------------------------------------------------------
   Temp-Kopie im Deck-Ordner (relative Pfade müssen auflösen),
   Render, Befund einsammeln.
   ------------------------------------------------------------ */
const deckDir = path.dirname(path.resolve(deckPath));
const tmp = path.join(deckDir, '.deck-lint-' + process.pid + '.html');
/* Kein requestAnimationFrame: unter --virtual-time-budget feuert
   rAF in Headless Chrome nie — Timer schon. */
const inject = `<script>
window.addEventListener('load', () => {
  const stage = document.querySelector('deck-stage');
  if (stage) stage.setAttribute('noscale', '');
  Promise.resolve(document.fonts ? document.fonts.ready : null).then(() =>
    setTimeout(() => {
      let data;
      try { data = (${lintInPage.toString()})(); }
      catch (e) { data = { slides: [], deck: [{ level: 'error', msg: 'Lint-Laufzeitfehler: ' + e }], meta: {} }; }
      const div = document.createElement('div');
      div.id = '__deck_lint_report__';
      div.style.display = 'none';
      div.textContent = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
      document.body.appendChild(div);
    }, 100));
});
</scr` + `ipt>`;

let html = fs.readFileSync(deckPath, 'utf8');
html = html.includes('</body>') ? html.replace('</body>', inject + '\n</body>') : html + inject;
fs.writeFileSync(tmp, html);

/* Kein process.exit() im try — das überspringt das finally und
   lässt die Temp-Kopie liegen. Fehler setzen nur die Meldung;
   beendet wird NACH dem Aufräumen. */
let report, fatal;
try {
  const chromePaths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome', '/usr/bin/chromium',
  ];
  const chrome = chromePaths.find(p => fs.existsSync(p));
  if (!chrome) {
    fatal = 'Kein Chrome gefunden — Lint braucht Headless Chrome.';
  } else {
    const dom = execFileSync(chrome, [
      '--headless', '--disable-gpu', '--window-size=1600,1000',
      '--virtual-time-budget=10000', '--dump-dom', 'file://' + tmp,
    ], { maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] }).toString('utf8');
    const m = dom.match(/id="__deck_lint_report__"[^>]*>([A-Za-z0-9+/=]+)</);
    if (!m) fatal = 'FEHLER — Render lieferte keinen Befund (Deck lädt nicht?).';
    else report = JSON.parse(Buffer.from(m[1], 'base64').toString('utf8'));
  }
} finally {
  fs.rmSync(tmp, { force: true });
}
if (fatal) { console.error(fatal); process.exit(1); }

if (asJson) { console.log(JSON.stringify(report, null, 2)); }

let errors = 0, warns = 0;
if (!asJson) {
  console.log(`DECK-LINT — ${path.basename(deckPath)} (${report.meta.slideCount || 0} Slides)`);
  report.slides.forEach(s => {
    if (!s.findings.length) return;
    console.log(`\nSlide ${String(s.n).padStart(2, '0')} [${s.label}]`);
    s.findings.forEach(f => {
      console.log(`  ${f.level === 'error' ? 'FEHLER ' : 'HINWEIS'} ${f.msg}`);
    });
  });
  if (report.deck.length) {
    console.log('\nÜbers ganze Deck');
    report.deck.forEach(f => console.log(`  ${f.level === 'error' ? 'FEHLER ' : 'HINWEIS'} ${f.msg}`));
  }
}
[...report.slides.flatMap(s => s.findings), ...report.deck].forEach(f => {
  if (f.level === 'error') errors++; else warns++;
});

if (!asJson) {
  console.log(errors + warns
    ? `\nErgebnis: ${errors} Fehler, ${warns} Hinweise — korrigieren, dann erneut linten.`
    : 'Ohne Befund — weiter zur Sehpflicht: das PDF ansehen bleibt Pflicht.');
}
process.exit(errors ? 1 : 0);
