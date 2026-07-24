# {{PROJEKT}} — Claude-Instructions (Bridgemaker-Produkt-Projekt)

> **Dieses Projekt gestaltet im Namen von Bridgemaker.** Der Kanon
> lebt im Ordner `brand/` (das Brandbook-Repo, live eingebunden) —
> er wird bei jedem Session-Start automatisch aktualisiert
> (`.claude/brand-sync.sh`, als SessionStart-Hook verdrahtet).
> Du musst nichts pullen; du musst nur lesen, was der Sync meldet.

## Pflichten vor jeder Gestaltung

1. **`brand/CLAUDE.md` lesen** — das Destillat aller Regeln.
   Produkt-/App-UI zusätzlich: `brand/guidelines/09-md3-mapping.md`
   (MD3-Mapping inkl. §9.10 Dashboard-Basics — Header-Haarlinie,
   `.bm-select`, KPI-Karten).
2. **Werte NUR aus `brand/tokens/tokens.css`** — einbinden, nie
   kopieren, nie inline neu definieren. Kopien driften; genau
   dagegen ist dieses Kit gebaut.
3. **Rezepte nutzen statt nachbauen:** `type-*`, `bm-btn`,
   `bm-input`/`bm-select` (Chevron eingebaut), `card-clean`,
   Badges nach Vokabular. MD3 füllt nur die Lücken.
4. **Unklar? Fragen.** Markenkritisches nie improvisieren
   (`brand/CLAUDE.md`, Abschnitt 11).

## Kanon-Updates einarbeiten

Der Session-Start-Sync zeigt neue Brandbook-Commits seit deinem
letzten Arbeitsstand. Damit gilt:

- Die gemeldeten Commits **lesen** (die Messages erklären jede
  Regel-Änderung und ihr Warum; Details:
  `git -C brand log <alt>..<neu>`).
- Prüfen, ob eine Änderung Regeln betrifft, die DIESES Projekt
  nutzt — nur diese, kein Voll-Audit.
- Betroffene Stellen **als Vorschlag** auflisten (Datei, Stelle,
  was sich ändert) und nach OK einbauen. Nie stumm
  großflächig refactoren.

## Grenzen

- `brand/` ist read-only: Kanon-Änderungen entstehen nur im
  Brandbook-Repo selbst, nie von hier aus.
- Projektdaten gehören nie ins Brandbook.
