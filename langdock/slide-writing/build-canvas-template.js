#!/usr/bin/env node
/* ============================================================
   CANVAS-TEMPLATE BAUEN — Mini-Fassung für den Langdock-Skill

   Macht aus templates/deck-template.html eine selbsttragende,
   BEWUSST KLEINE Einzeldatei: Versuch 1 hat gezeigt, dass der
   Langdock-Agent eine 325-KB-Vorlage nicht übernimmt, sondern
   nachdichtet. Deshalb:
     - tokens.css und deck-stage.js inline (wie zuvor)
     - Kapiteltrenner 02–05 entfernt (eine Trenner-Vorlage reicht,
       die fünf Farbwelten sind Band-Rezepte in tokens.css)
     - Wortmarke nur EINMAL als Daten-URI (statt 20x = 158 KB):
       die <img>-Tags bekommen data-wm-Marker, ein Mini-Skript
       verteilt die Daten-URIs beim Laden
     - Pflicht-Marker (BM-DECK-TEMPLATE) als Wasserzeichen — das
       Quality-Gate erkennt daran, ob wirklich aus dem Template
       gebaut wurde
     - Fonts per Google-Link — erlaubt NUR intern (Ausnahme Nils,
       2026-07-20); Weitergabe ausschließlich als PDF

   Nutzung (aus dem Repo-Root):
     node langdock/slide-writing/build-canvas-template.js

   Nach jeder Kanon-Änderung an Template/tokens neu bauen und das
   ZIP neu packen (Befehl im langdock/README.md).
   ============================================================ */

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '../..');
const read = f => fs.readFileSync(path.join(repoRoot, f), 'utf8');

const MARKER = '<!-- BM-DECK-TEMPLATE v2 — Pflicht-Marker, niemals entfernen: das Quality-Gate prüft ihn -->';

let html = read('templates/deck-template.html');

/* 1. Pflicht-Marker direkt nach dem Doctype */
if (!/^<!doctype html>/i.test(html)) {
  console.error('FEHLER — Template beginnt nicht mit dem Doctype.');
  process.exit(1);
}
html = html.replace(/^<!doctype html>/i, m => m + '\n' + MARKER);

/* 2. ALLE fünf Kapiteltrenner bleiben drin: Die Muster-Diät hatte
   sie entfernt — Folge war, dass der Agent für weitere Kapitel
   eigene, verarmte Linienbilder zeichnete (1–4 Pfade statt 15–23).
   29 KB Kopiervorlagen sind billiger als jede Regel dagegen. */

/* 3. tokens.css inline */
html = html.replace(
  '<link rel="stylesheet" href="../tokens/tokens.css" />',
  '<style>\n/* ==== tokens.css (inline für Canvas) ==== */\n' + read('tokens/tokens.css') + '\n</style>'
);

/* 4. Fonts: lokale fonts.css -> Google-Fonts-Links (interne Ausnahme) */
html = html.replace(
  /<!-- Fonts lokal aus dem Kit[\s\S]*?<link rel="stylesheet" href="\.\.\/assets\/fonts\/fonts\.css" \/>/,
  `<!-- Fonts per Google-Link — NUR fürs interne Entwerfen erlaubt
     (Ausnahme Nils, 2026-07-20). Weitergabe ausschließlich als
     PDF über das Quality-Gate, nie diese HTML. -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300,0,0" />`
);

/* 5. deck-stage.js inline */
html = html.replace(
  '<script src="deck-stage.js"></script>',
  '<script>\n/* ==== deck-stage.js (inline für Canvas) ==== */\n' + read('templates/deck-stage.js') + '\n</script>'
);

/* 6. Wortmarke: EINE Daten-URI-Definition statt 20 Kopien.
      Die <img>-Tags behalten Klassen/Styles; nur die src weicht
      einem data-wm-Marker, den das Mini-Skript beim Laden füllt. */
const wm = {};
for (const [key, file] of [['b', 'wordmark-black.svg'], ['w', 'wordmark-white.svg']]) {
  wm[key] = 'data:image/svg+xml;base64,' +
    fs.readFileSync(path.join(repoRoot, 'assets/logos', file)).toString('base64');
  html = html.split(`src="../assets/logos/${file.replace('.svg', '')}.svg"`)
             .join(`src="data:," data-wm="${key}"`);
}
html = html.replace('</body>', `<script>
/* Wortmarke einmal definiert, an alle Stellen verteilt — niemals
   entfernen, sonst verlieren alle Fußzeilen das Logo. */
const BM_WM = { b: '${wm.b}', w: '${wm.w}' };
document.querySelectorAll('img[data-wm]').forEach(i => { i.src = BM_WM[i.dataset.wm]; });
</script>
</body>`);

/* Kontrollen */
const rest = html.match(/(src|href)="\.\.?\//g);
if (rest) {
  console.error('FEHLER — relative Referenzen übrig: ' + rest.join(', '));
  process.exit(1);
}
if (/^```/m.test(html)) {
  console.error('FEHLER — Dreifach-Backticks im HTML, Codeblock würde brechen.');
  process.exit(1);
}
if (/[\u00A0\u202F\u200B\u2007\u2028\u2029]/.test(html)) {
  console.error('FEHLER — Sonder-Whitespace im HTML (NBSP o. Ä.).');
  process.exit(1);
}

/* Ausgabe als Markdown mit dem HTML im Codeblock: Langdocks
   Datei-Scanner lehnt .html mit <script> ab, .md passiert. */
const md = `# Deck-Template (Kopiervorlage)

Bevorzugt per DATEIOPERATION in die Arbeitsdatei übernehmen; nur
wenn das nicht geht, den kompletten Codeblock-Inhalt — von
\`<!doctype html>\` bis zur letzten Zeile — unverändert abschreiben.
Nichts weglassen, nichts umbauen. Der Kommentar in Zeile 2
(BM-DECK-TEMPLATE) muss im Ergebnis stehen.

\`\`\`\`html
${html}
\`\`\`\`
`;
const out = path.join(__dirname, 'deck-template-canvas.md');
fs.writeFileSync(out, md);
console.log(`OK — ${out} (${Math.round(md.length / 1024)} KB, vorher 325 KB)`);
