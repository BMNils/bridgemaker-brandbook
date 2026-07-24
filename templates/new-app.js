#!/usr/bin/env node
/* ============================================================
   BRIDGEMAKER APP — PROJEKT-KIT ANLEGEN

   Legt für ein Produkt-/App-Projekt einen Projektordner AUSSERHALB
   des Brandbook-Repos an — mit dem Brandbook LIVE als brand/
   (Clone, kein Kopieren: Kopien driften) und einem
   SessionStart-Hook, der den Kanon bei jedem Sitzungsbeginn
   aktualisiert und die neuen Regel-Commits seit dem letzten
   Arbeitsstand meldet (Workflow-Beschluss Nils, 2026-07-24).

   Nutzung (aus dem Brandbook-Repo):
     node templates/new-app.js <zielordner> [--projekt "Name"]

   Ergebnis:
     <zielordner>/
       brand/                  (Brandbook, live — Session-Sync pullt)
       CLAUDE.md               (Regel-Destillat + Update-Protokoll)
       .claude/settings.json   (SessionStart-Hook → brand-sync.sh)
       .claude/brand-sync.sh   (Pull + Delta-Meldung)
       README.md

   Das Skript verweigert Ziele INNERHALB des Brandbook-Repos —
   Projektarbeit entsteht nie im Repo.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const projIdx = args.indexOf('--projekt');
const projekt = projIdx !== -1 ? args[projIdx + 1] : null;
const target = args.find((a, i) => !a.startsWith('--') && (projIdx === -1 || i !== projIdx + 1));

if (!target) {
  console.error('Nutzung: node templates/new-app.js <zielordner> [--projekt "Name"]');
  process.exit(1);
}

const dest = path.resolve(target.replace(/^~(?=\/|$)/, process.env.HOME || '~'));

if ((dest + path.sep).startsWith(repoRoot + path.sep) || dest === repoRoot) {
  console.error('FEHLER — Zielordner liegt im Brandbook-Repo. Projektarbeit');
  console.error('entsteht nie im Repo; wähle einen Ordner außerhalb, z. B.:');
  console.error('  node templates/new-app.js ~/Projekte/' + path.basename(dest));
  process.exit(1);
}
if (fs.existsSync(dest) && fs.readdirSync(dest).length > 0) {
  console.error(`FEHLER — ${dest} existiert und ist nicht leer.`);
  console.error('Bestehende Projektordner nicht überschreiben; anderen Namen wählen.');
  process.exit(1);
}

const name = projekt || path.basename(dest);
fs.mkdirSync(path.join(dest, '.claude'), { recursive: true });

/* brand/ als lokaler Clone (schnell), origin auf das echte Remote
   umgebogen — damit der Session-Sync gegen GitHub pullt, nicht
   gegen den lokalen Checkout. */
execFileSync('git', ['clone', '--quiet', repoRoot, path.join(dest, 'brand')]);
let originUrl = null;
try {
  originUrl = execFileSync('git', ['-C', repoRoot, 'remote', 'get-url', 'origin']).toString().trim();
  if (originUrl) execFileSync('git', ['-C', path.join(dest, 'brand'), 'remote', 'set-url', 'origin', originUrl]);
} catch { /* kein Remote: Sync pullt dann gegen den lokalen Checkout */ }

/* Projekt-CLAUDE.md aus der Vorlage — die CLAUDE.md des
   brand/-Ordners wird von Claude Code NICHT automatisch geladen
   (nur die des Projekt-Roots); deshalb braucht das Projekt eine
   eigene, die auf den Kanon zeigt. */
const claudeMd = fs.readFileSync(path.join(__dirname, 'app-kit-claude.md'), 'utf8')
  .replaceAll('{{PROJEKT}}', name);
fs.writeFileSync(path.join(dest, 'CLAUDE.md'), claudeMd);

/* Session-Sync: Instruktionen sind Hoffnung, Hooks sind Zwang. */
const syncSh = `#!/bin/bash
# Kanon-Sync bei Session-Start (verdrahtet in .claude/settings.json):
# brand/ pullen und die neuen Regel-Commits seit dem letzten
# Arbeitsstand melden — die Commit-Messages erklären jede Änderung.
cd "$(dirname "$0")/.." || exit 0
[ -d brand/.git ] || { echo "brand/ fehlt — Brandbook neu einbinden (siehe README)."; exit 0; }
OLD=$(cat .claude/brand-stand 2>/dev/null || git -C brand rev-parse HEAD)
git -C brand pull --ff-only --quiet 2>/dev/null || echo "Hinweis: brand/-Pull fehlgeschlagen (offline?) — Arbeitsstand bleibt $(git -C brand log -1 --format=%h)."
NEW=$(git -C brand rev-parse HEAD)
echo "$NEW" > .claude/brand-stand
if [ "$OLD" != "$NEW" ]; then
  echo "KANON-UPDATE — neue Brandbook-Commits seit dem letzten Arbeitsstand:"
  git -C brand log --oneline "$OLD..$NEW" | cat
  echo "Diese Commits lesen (Details: git -C brand log $OLD..$NEW) und prüfen, ob sie Regeln betreffen, die dieses Projekt nutzt — betroffene Stellen als Vorschlag auflisten, nach OK einbauen."
else
  echo "Brandbook-Kanon unverändert (Stand $(git -C brand log -1 --format=%h))."
fi
`;
fs.writeFileSync(path.join(dest, '.claude', 'brand-sync.sh'), syncSh, { mode: 0o755 });

fs.writeFileSync(path.join(dest, '.claude', 'settings.json'), JSON.stringify({
  hooks: {
    SessionStart: [
      { hooks: [{ type: 'command', command: 'bash .claude/brand-sync.sh' }] },
    ],
  },
}, null, 2) + '\n');

fs.writeFileSync(path.join(dest, 'README.md'), `# ${name}

Bridgemaker-Produkt-Projekt. Der Marken-Kanon lebt in \`brand/\`
(das Brandbook, live) und aktualisiert sich bei jedem
Claude-Session-Start selbst — neue Regeln werden als Vorschlag
gemeldet, nie stumm eingebaut.

- Regeln: \`CLAUDE.md\` (hier) → \`brand/CLAUDE.md\` (Kanon)
- Werte & Rezepte: \`brand/tokens/tokens.css\` (einbinden, nie kopieren)
- Produkt-UI: \`brand/guidelines/09-md3-mapping.md\` (inkl. Dashboard-Basics)
- Next.js-Basis gefällig? \`brand/starter-kit/\` als Startpunkt kopieren.

Brandbook neu einbinden, falls \`brand/\` fehlt:
\`git clone ${originUrl || '<brandbook-repo-url>'} brand\`
`);

console.log(`OK — Projekt-Kit in ${dest}`);
console.log(`     brand/ live eingebunden (origin: ${originUrl || 'lokal'})`);
console.log('     Session-Start-Sync verdrahtet (.claude/settings.json).');
console.log('     Nächster Schritt: Claude im Projektordner starten.');
