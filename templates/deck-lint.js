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
   - Cover-Kopf: .cover-head-Zeile mit Wortmarke (kein Ad-hoc-
     Aufbau); cover-head-intern nur auf dem .cover-head-Container
   - Logo-Brücke: die Linie setzt nahtlos und auf Strichhöhe an
     der Wortmarke an (Nils-Review 24.07. — ein Kundenlogo über
     24px hob die ge-stretch-te Linie ab)
   - Fußzeilen-Schutzzone: kein Content-Element dringt in die
     --deck-pad-b-Reserve ein — nicht erst die Seitenkante zählt
   - Serien-Register: läuft dieselbe Tabelle über mehrere Slides,
     stehen Headline, Tabellen-Oberkante und Spaltenraster beim
     Blättern (identische th-Signatur = eine Serie)

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

  const titleTops = [], footBottoms = [], tables = [];

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
      if (/—/.test(t)) err('Gedankenstrich in der Headline — Headlines laufen ohne Geviertstrich (redigieren; Umbruch per <br />).');
    }

    /* Text-Census: Größen, Schriften, Zeichen. */
    const sizes = new Map();          // fontSize → Beispieltext
    let slideText = '';
    let bodyText = '';                // ohne Headline und Eyebrows (Gedankenstrich-Check)
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
      /* Kursive = wörtliche Zitate (O-Ton, unantastbar) — vom
         Gedankenstrich-Check ausgenommen, wie Eyebrows/Headlines. */
      if (!el.closest('.deck-title, .type-eyebrow, h1, h2') && cs.fontStyle !== 'italic') bodyText += ' ' + txt;

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
    if (/—/.test(bodyText)) warn('Gedankenstrich im Slide-Text — in Decks vermeiden (§7.8): als Satz mit Komma formulieren.');
    const phrase = slideText.match(/\b(leverage|unlock|next-gen|game.?changer|state.of.the.art|seamless)\b/i);
    if (phrase) warn(`Verbotene Phrase „${phrase[0]}" — Wortliste in 08-voice.md.`);
    const status = slideText.match(/folgt nach (Freigabe|Abstimmung)|wird nachgereicht|\btbd\b|to be defined/i);
    if (status) warn(`Arbeitsstand auf der Slide („${status[0]}") — gehört in die Speaker Notes.`);

    /* Grund & Überlauf. */
    if (!moment && getComputedStyle(s).backgroundColor !== OFF_WHITE) {
      err('Grund ist nicht Off-White — Farbfläche nur auf Cover, Trenner, Zitat und Schluss.');
    }

    /* Linienbilder auf Moment-Slides sind fertige Assets (Generator
       bzw. Template-Vorlagen, 8–26 Pfade). 1–5 Pfade = verarmte
       Eigenzeichnung — sieht aus wie ein Fehler, nicht wie Topografie. */
    if (moment) {
      s.querySelectorAll('svg').forEach(svg => {
        const n = svg.querySelectorAll('path').length;
        if (n > 0 && n < 6) err(`Linienbild verarmt (${n} Konturpfad${n === 1 ? '' : 'e'}) — Original-SVG aus dem Template bzw. den Trenner-Vorlagen unverändert kopieren, nie selbst zeichnen.`);
      });
    }
    const overX = s.scrollWidth - s.clientWidth, overY = s.scrollHeight - s.clientHeight;
    if (overX > 2 || overY > 2) {
      err(`Inhalt läuft aus der Slide (${overX > 2 ? overX + 'px horizontal' : ''}${overX > 2 && overY > 2 ? ', ' : ''}${overY > 2 ? overY + 'px vertikal' : ''}) — kürzen oder Layout wechseln.`);
    }

    /* Fußzeilen-Schutzzone: --deck-pad-b (Slide-padding-bottom)
       ist Sperrzone. Inhalt, der „noch auf die Seite passt", aber
       in die Reserve läuft, kollidiert optisch mit der Fußzeile —
       der Überlauf-Check oben sieht das nicht (Nils, 24.07.). */
    if (!moment) {
      const padB = parseFloat(getComputedStyle(s).paddingBottom) || 0;
      const limitY = rect.bottom - padB * scale;
      let lowest = 0;
      s.querySelectorAll('.dslide-content, .dslide-content *').forEach(el => {
        if (el.closest('svg') && el.tagName.toLowerCase() !== 'svg') return;
        if (getComputedStyle(el).display === 'none') return;
        const r = el.getBoundingClientRect();
        if (r.height || r.width) lowest = Math.max(lowest, r.bottom);
      });
      const intrude = round((lowest - limitY) / scale);
      if (intrude > 1) {
        err(`Inhalt dringt ${intrude}px in die Fußzeilen-Schutzzone ein (Mindestluft ${round(padB)}px, --deck-pad-b) — kürzen oder auf zwei Slides teilen.`);
      }
    }

    /* Wortmarke auf Cover und Schluss. */
    if ((i === 0 || i === slides.length - 1) && !s.querySelector('img[src*="wordmark"], img[data-wm]')) {
      warn('Wortmarke fehlt — sie gehört auf Cover und Schluss.');
    }

    /* Cover-Kopf ist fertige Struktur: die .cover-head-Zeile
       verankert die Wortmarke oben links. Ad-hoc-Aufbauten
       (Wortmarke frei in einer Flex-Spalte) sind Drift — genau
       so entstehen mittige Logos. */
    if (i === 0) {
      const ch = s.querySelector('.cover-head');
      if (!ch) {
        err('Cover ohne .cover-head-Struktur — die Kopfzeile aus der Muster-Cover-Sektion unverändert übernehmen (Wortmarke links), nie neu bauen.');
      } else if (!ch.querySelector('img[src*="wordmark"], img[data-wm]')) {
        err('Wortmarke fehlt in der .cover-head-Zeile — sie steht dort links, nie frei auf der Slide.');
      }
      /* Logo-Brücke: die Linie setzt nahtlos am Wortmarken-Strich
         an — gleiche Höhe und keine Lücke. Die Strichmitte der
         Wortmarken-SVG liegt bei 24.5/48 ihrer Höhe (Strich y
         21.92–27.08 von 48). Historische Bruchstelle: ein
         Kundenlogo über 24px hebt einen ge-stretch-ten
         .cover-bridge-Container samt Linie an (Nils, 24.07.). */
      const bridgeLine = ch && ch.querySelector('.cover-bridge > div');
      const wmImg = ch && ch.querySelector('img[src*="wordmark"], img[data-wm]');
      /* Interne Decks blenden die Brücke aus (cover-head-intern) —
         eine unsichtbare Linie (width 0) wird nicht geprüft. */
      if (bridgeLine && wmImg && bridgeLine.getBoundingClientRect().width > 1) {
        const wr = wmImg.getBoundingClientRect(), lr = bridgeLine.getBoundingClientRect();
        const dy = round(Math.abs((lr.top + lr.height / 2) - (wr.top + wr.height * (24.5 / 48))) / scale);
        if (dy > 1) err(`Brückenlinie sitzt ${dy}px neben dem Wortmarken-Strich — den .cover-bridge-Container fest 24px hoch und zentriert halten (align-self: center, nie stretch), Linie bei top 10.96px.`);
        const gap = round((lr.left - wr.right) / scale);
        if (gap > 1) err(`Lücke von ${gap}px zwischen Wortmarke und Brückenlinie — die Linie setzt nahtlos an (left: -2px im .cover-bridge).`);
      }
    }
    s.querySelectorAll('.cover-head-intern').forEach(el => {
      if (!el.classList.contains('cover-head')) {
        err('cover-head-intern sitzt auf dem falschen Element — die Klasse gehört auf den .cover-head-Container selbst, sonst ist sie wirkungslos.');
      }
    });

    /* Serien-Signatur: Tabellen-Slides mit identischen
       Spaltenköpfen bilden eine Serie (Blätter-Test unten). */
    const tbl = !moment && s.querySelector('.deck-table');
    if (tbl && title) {
      const ths = [...tbl.querySelectorAll('thead th')];
      tables.push({
        n,
        sig: ths.map(th => th.textContent.trim()).join('|'),
        colX: ths.map(th => round((th.getBoundingClientRect().left - rect.left) / scale)),
        top: relTop(tbl.getBoundingClientRect()),
        title: title.textContent.trim(),
        titleLines: lineCount(title),
      });
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

  /* Serien-Register: aufeinanderfolgende Slides mit derselben
     Tabellen-Signatur sind EINE Serie — beim Blättern stehen
     Headline (Text UND Zeilenzahl), Tabellen-Oberkante und
     Spaltenraster wie angenagelt (Nils, 24.07.). */
  for (let k = 1; k < tables.length; k++) {
    const a = tables[k - 1], b = tables[k];
    if (b.n !== a.n + 1 || a.sig !== b.sig) continue;
    const pair = `Slide ${a.n} → ${b.n}`;
    const derr = msg => report.deck.push({ level: 'error', msg });
    if (Math.abs(a.top - b.top) > 1) {
      derr(`Die Tabellen-Oberkante springt beim Blättern (${pair}: ${a.top}px → ${b.top}px) — deck-body der Serie auf justify-content: flex-start.`);
    }
    const drift = a.colX.length === b.colX.length
      ? a.colX.findIndex((x, idx) => Math.abs(x - b.colX[idx]) > 1) : -2;
    if (drift !== -1) {
      derr(`Das Spaltenraster springt beim Blättern (${pair}${drift >= 0 ? ', ab Spalte ' + (drift + 1) : ', Spaltenzahl wechselt'}) — table-layout: fixed mit festen th-Breiten, identisch auf allen Serien-Slides.`);
    }
    if (a.title !== b.title) {
      derr(`Die Serien-Headline wechselt (${pair}: „${a.title.slice(0, 40)}…" zu „${b.title.slice(0, 40)}…") — eine Serie trägt EINE konstante Headline, ohne Fortsetzungs-Varianten.`);
    } else if (a.titleLines !== b.titleLines) {
      derr(`Die Serien-Headline wechselt die Zeilenzahl (${pair}) — konstant halten, notfalls kürzen.`);
    }
  }

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
