#!/usr/bin/env node
/* ============================================================
   BRIDGEMAKER DECK — VERSANDFERTIG PACKEN (guidelines/07 §7.8)

   Macht aus einem Deck EINE einzelne HTML-Datei, die überall
   läuft: tokens.css, deck-stage.js, Logos und Bilder werden
   inline eingebettet — kein Projektordner, keine relativen
   Pfade, nichts zum Mitschicken.

   Nutzung (im Deck-Ordner oder mit Pfad):
     node ../templates/deck-pack.js <deck>.html          → <deck>-versand.html
     node ../templates/deck-pack.js <deck>.html --pdf    → zusätzlich <deck>.pdf

   --pdf rendert über Headless Chrome (eine Seite pro Slide,
   1440×810, pixelidentisch zum Bildschirm). IMMER diesen Weg
   nehmen — der Drucken-Dialog des Browsers skaliert falsch
   und produziert zerschossene PDFs.

   Die Versand-Datei hat KEINE externen Abhängigkeiten: Auch die
   Fonts (Inter, JetBrains Mono, Material Symbols) liegen lokal
   im Kit (assets/fonts/fonts.css, Compliance: kein Google-
   Aufruf) und werden als Data-URIs mit eingebettet. Die Datei
   funktioniert offline, ohne Ordner, ohne Netz.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const args = process.argv.slice(2);
const deckPath = args.find(a => !a.startsWith('--'));
const wantPdf = args.includes('--pdf');
if (!deckPath || !fs.existsSync(deckPath)) {
  console.error('Nutzung: node deck-pack.js <deck>.html [--pdf]');
  process.exit(1);
}

const deckDir = path.dirname(path.resolve(deckPath));
const base = path.basename(deckPath, '.html');
let html = fs.readFileSync(deckPath, 'utf8');

const MIME = {
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.woff2': 'font/woff2', '.woff': 'font/woff',
};
const isLocal = src => src && !/^(https?:|data:|\/\/)/.test(src);
const read = src => fs.readFileSync(path.resolve(deckDir, src));

let inlined = 0, missing = [];

/* Stylesheets inline — url()-Referenzen darin (Fonts, Bilder)
   werden relativ zur CSS-Datei aufgelöst und mit eingebettet. */
html = html.replace(/<link rel="stylesheet" href="([^"]+)"\s*\/?>/g, (m, href) => {
  if (!isLocal(href)) return m;
  try {
    let css = read(href).toString('utf8');
    const cssDir = path.dirname(path.resolve(deckDir, href));
    css = css.replace(/url\((['"]?)([^)'"]+)\1\)/g, (u, q, ref) => {
      if (!/^(data:|https?:|\/\/)/.test(ref)) {
        const mime = MIME[path.extname(ref).toLowerCase()];
        if (mime) {
          try {
            inlined++;
            return `url(data:${mime};base64,${fs.readFileSync(path.resolve(cssDir, ref)).toString('base64')})`;
          } catch { missing.push(ref); }
        }
      }
      return u;
    });
    inlined++;
    return '<style>\n' + css + '\n</style>';
  }
  catch { missing.push(href); return m; }
});

/* Skripte inline */
html = html.replace(/<script src="([^"]+)"><\/script>/g, (m, src) => {
  if (!isLocal(src)) return m;
  try { inlined++; return '<script>\n' + read(src).toString('utf8') + '\n</script>'; }
  catch { missing.push(src); return m; }
});

/* Bilder als Data-URIs (img src – Fonts/https bleiben unberührt) */
html = html.replace(/src="([^"]+)"/g, (m, src) => {
  if (!isLocal(src)) return m;
  const mime = MIME[path.extname(src).toLowerCase()];
  if (!mime) return m;
  try { inlined++; return `src="data:${mime};base64,${read(src).toString('base64')}"`; }
  catch { missing.push(src); return m; }
});

if (missing.length) {
  console.error('FEHLER — nicht gefunden: ' + [...new Set(missing)].join(', '));
  process.exit(1);
}

const outHtml = path.join(deckDir, base + '-versand.html');
fs.writeFileSync(outHtml, html);
console.log(`OK — ${outHtml} (${(html.length / 1024 / 1024).toFixed(1)} MB, ${inlined} Ressourcen eingebettet)`);

if (wantPdf) {
  const outPdf = path.join(deckDir, base + '.pdf');
  const chromePaths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome', '/usr/bin/chromium',
  ];
  const chrome = chromePaths.find(p => fs.existsSync(p));
  if (!chrome) { console.error('Kein Chrome gefunden — PDF übersprungen.'); process.exit(1); }
  execFileSync(chrome, [
    '--headless', '--disable-gpu', '--no-pdf-header-footer',
    '--virtual-time-budget=8000', `--print-to-pdf=${outPdf}`,
    'file://' + outHtml,
  ], { stdio: 'ignore' });
  console.log(`OK — ${outPdf} (${(fs.statSync(outPdf).size / 1024 / 1024).toFixed(1)} MB)`);
}
