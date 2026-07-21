#!/usr/bin/env node
/* ============================================================
   CANVAS-TEMPLATE BAUEN — für den Langdock-Deck-Builder-TEST

   Macht aus templates/deck-template.html eine selbsttragende
   Einzeldatei für das Langdock-Canvas (kein Dateisystem, keine
   relativen Pfade):
     - tokens.css und deck-stage.js werden inline eingebettet
     - Wortmarken-SVGs werden zu Daten-URIs
     - Fonts kommen per Google-Fonts-Link — erlaubt NUR, weil das
       Canvas ein rein internes Entwurfs-Werkzeug ist (Ausnahme
       Nils, 2026-07-20). Weitergabe weiterhin nur als PDF.

   Nutzung (aus dem Repo-Root):
     node langdock/deck-builder-test/build-canvas-template.js

   Nach jeder Kanon-Änderung an Template/tokens neu bauen und das
   Test-ZIP neu packen (Befehl im langdock/README.md).
   ============================================================ */

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '../..');
const read = f => fs.readFileSync(path.join(repoRoot, f), 'utf8');

let html = read('templates/deck-template.html');

/* 1. tokens.css inline */
html = html.replace(
  '<link rel="stylesheet" href="../tokens/tokens.css" />',
  '<style>\n/* ==== tokens.css (inline für Canvas) ==== */\n' + read('tokens/tokens.css') + '\n</style>'
);

/* 2. Fonts: lokale fonts.css -> Google-Fonts-Links (interne Ausnahme) */
html = html.replace(
  /<!-- Fonts lokal aus dem Kit[\s\S]*?<link rel="stylesheet" href="\.\.\/assets\/fonts\/fonts\.css" \/>/,
  `<!-- Fonts per Google-Link — NUR fürs interne Canvas erlaubt
     (Ausnahme Nils, 2026-07-20). Weitergabe ausschließlich als
     PDF über das Quality-Gate, nie diese HTML. -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300,0,0" />`
);

/* 3. deck-stage.js inline */
html = html.replace(
  '<script src="deck-stage.js"></script>',
  '<script>\n/* ==== deck-stage.js (inline für Canvas) ==== */\n' + read('templates/deck-stage.js') + '\n</script>'
);

/* 4. Wortmarken als Daten-URIs */
for (const logo of ['wordmark-black.svg', 'wordmark-white.svg']) {
  const dataUri = 'data:image/svg+xml;base64,' +
    fs.readFileSync(path.join(repoRoot, 'assets/logos', logo)).toString('base64');
  html = html.split(`src="../assets/logos/${logo}"`).join(`src="${dataUri}"`);
}

/* Kontrolle: keine relativen Referenzen übrig */
const rest = html.match(/(src|href)="\.\.?\//g);
if (rest) {
  console.error('FEHLER — relative Referenzen übrig: ' + rest.join(', '));
  process.exit(1);
}

const out = path.join(__dirname, 'deck-template-canvas.html');
fs.writeFileSync(out, html);
console.log(`OK — ${out} (${Math.round(html.length / 1024)} KB)`);
