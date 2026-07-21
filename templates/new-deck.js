#!/usr/bin/env node
/* ============================================================
   BRIDGEMAKER DECK — PROJEKT-KIT ANLEGEN (Skill bridgemaker-slides)

   Legt für ein Kundenprojekt einen Projektordner AUSSERHALB des
   Brandbook-Repos an und kopiert das komplette Kit hinein:
   tokens, Deck-Werkzeuge, Logos, Fonts und eine startklare
   Template-Kopie. Die Ordnerstruktur spiegelt das Repo, dadurch
   funktionieren alle relativen Pfade unverändert.

   Nutzung (aus dem Brandbook-Repo):
     node templates/new-deck.js <zielordner> [--kunde "Name"]

   Beispiel:
     node templates/new-deck.js ~/Projekte/detax-workshop --kunde "DETAX"

   Ergebnis:
     <zielordner>/
       tokens/tokens.css
       templates/deck-stage.js, deck-topo-konturen.js,
                 deck-pack.js, deck-lint.js
       assets/logos/wordmark-*.svg
       assets/fonts/…            (lokal, kein Google-Fonts-Aufruf)
       deck/<ordnername>.html    (Template-Kopie, Pfade angepasst)
       CLAUDE.md                 (Regel-Destillat — bindet auch
                                  Sessions, die nur diesen Ordner
                                  sehen; Quelle: deck-kit-claude.md)
       README.md                 (die drei Befehle des Alltags)

   Das Skript verweigert Ziele INNERHALB des Brandbook-Repos —
   Kundenarbeit entsteht nie im Repo (öffentlich, projektübergreifend).
   ============================================================ */

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const kundeIdx = args.indexOf('--kunde');
const kunde = kundeIdx !== -1 ? args[kundeIdx + 1] : null;
const target = args.find((a, i) => !a.startsWith('--') && (kundeIdx === -1 || i !== kundeIdx + 1));

if (!target) {
  console.error('Nutzung: node templates/new-deck.js <zielordner> [--kunde "Name"]');
  process.exit(1);
}

const dest = path.resolve(target.replace(/^~(?=\/|$)/, process.env.HOME || '~'));

if ((dest + path.sep).startsWith(repoRoot + path.sep) || dest === repoRoot) {
  console.error('FEHLER — Zielordner liegt im Brandbook-Repo. Kundenarbeit');
  console.error('entsteht nie im Repo; wähle einen Ordner außerhalb, z. B.:');
  console.error('  node templates/new-deck.js ~/Projekte/' + path.basename(dest));
  process.exit(1);
}
if (fs.existsSync(dest) && fs.readdirSync(dest).length > 0) {
  console.error(`FEHLER — ${dest} existiert und ist nicht leer.`);
  console.error('Bestehende Projektordner nicht überschreiben; anderen Namen wählen.');
  process.exit(1);
}

/* Kit-Inventar — muss der Liste im Skill bridgemaker-slides entsprechen. */
const kit = [
  'tokens/tokens.css',
  'templates/deck-stage.js',
  'templates/deck-topo-konturen.js',
  'templates/deck-pack.js',
  'templates/deck-lint.js',
  'assets/logos/wordmark-black.svg',
  'assets/logos/wordmark-white.svg',
];
fs.readdirSync(path.join(repoRoot, 'assets/fonts')).forEach(f => kit.push('assets/fonts/' + f));

const fehlt = kit.concat(['templates/deck-kit-claude.md']).filter(f => !fs.existsSync(path.join(repoRoot, f)));
if (fehlt.length) {
  console.error('FEHLER — im Repo nicht gefunden: ' + fehlt.join(', '));
  console.error('Erst `git pull`, dann erneut versuchen.');
  process.exit(1);
}

kit.forEach(f => {
  const to = path.join(dest, f);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(path.join(repoRoot, f), to);
});

/* Template-Kopie: liegt im Repo neben deck-stage.js, im Kit aber in
   deck/ — der Skript-Pfad wird deshalb auf ../templates/ umgeschrieben. */
const slug = path.basename(dest).toLowerCase().replace(/[^a-z0-9äöüß]+/g, '-').replace(/^-|-$/g, '');
const deckFile = path.join(dest, 'deck', slug + '.html');
let html = fs.readFileSync(path.join(repoRoot, 'templates/deck-template.html'), 'utf8');
html = html.replace('<script src="deck-stage.js"></script>', '<script src="../templates/deck-stage.js"></script>');
if (kunde) {
  html = html.replace(/Kunde Projekttitel/g, kunde);
  html = html.replace(/Kunde × Bridgemaker/g, `${kunde} × Bridgemaker`);
  html = html.replace('<title>Bridgemaker — Deck-Template</title>', `<title>${kunde} × Bridgemaker</title>`);
}
fs.mkdirSync(path.dirname(deckFile), { recursive: true });
fs.writeFileSync(deckFile, html);

/* Regel-Destillat: sorgt dafür, dass auch eine Claude-Session, die
   NUR den Projektordner sieht (nicht das Brandbook-Repo), an die
   Marken- und Deck-Regeln gebunden ist. */
fs.copyFileSync(path.join(repoRoot, 'templates/deck-kit-claude.md'), path.join(dest, 'CLAUDE.md'));

fs.writeFileSync(path.join(dest, 'README.md'), `# ${kunde || path.basename(dest)} — Deck

Projekt-Kit aus dem Bridgemaker-Brandbook (Stand ${new Date().toISOString().slice(0, 10)}).
Das Deck lebt in \`deck/${slug}.html\` — anschauen per Doppelklick,
blättern mit den Pfeiltasten.

Die drei Befehle des Alltags (im Ordner \`deck/\`):

\`\`\`bash
node ../templates/deck-lint.js ${slug}.html          # messbare Regeln prüfen
node ../templates/deck-pack.js ${slug}.html --pdf    # PDF + Versand-HTML
node ../templates/deck-topo-konturen.js cover <seed> # neues Konturen-Linienbild
\`\`\`

Weitergegeben wird nur das PDF oder die Versand-HTML — nie dieser
Ordner, nie die rohe Deck-HTML. Regeln und Sehpflicht: Skill
\`bridgemaker-slides\` im Brandbook-Repo.
`);

console.log(`OK — Projekt-Kit in ${dest}`);
console.log(`     Deck: deck/${slug}.html` + (kunde ? ` (Kunde: ${kunde})` : ''));
console.log(`     ${kit.length} Kit-Dateien kopiert. Nächster Schritt: Inhalte anfordern.`);
