# Bridgemaker Starter-Kit — Claude-Instructions (v2)

> **Markenregeln zuerst:** `../CLAUDE.md` (Destillat) und `../guidelines/01–09`
> sind verbindlich. Dieses File ergänzt nur, was am Kit selbst hängt.

## Architektur

- **Next.js 15 + React 19 + Tailwind v4 + `@material/web` (MD3).**
- **Zwei Welten, klare Grenze:** Produkt-UI (Formulare, Dialoge, Tabs …)
  läuft auf MD3-Komponenten. Marketing-Flächen (Hero, Sektionen, CTAs)
  sind Bridgemaker-Eigenbau aus `tokens.css`-Klassen. Nie mischen.
- **Tokens:** `src/app/tokens.css` ist die Kanon-Kopie (Quelle:
  `../tokens/tokens.css`) — bei Updates neu kopieren, nie hier editieren.
  Einzige beabsichtigte Abweichung: `--font-sans`/`--font-mono` zeigen in
  `globals.css` auf die next/font-Variablen.
- **MD3-Theming:** `src/app/md3-theme.css` mappt die MD3-System-Tokens
  explizit (guidelines/09). NIE seed-generieren, keine Library-Defaults
  durchsickern lassen. Dark Scheme über `.bm-on-dark`.

## MD3 verwenden

- `Md3Provider` (im Root-Layout) registriert die Web Components
  clientseitig — `md-*`-Tags danach überall direkt im JSX verwenden
  (React 19 rendert Custom Elements nativ, Typen in `src/types/md3.d.ts`).
- Neue MD3-Komponente? Import in `src/components/md3/register.ts`
  ergänzen + Tag in `md3.d.ts` deklarieren.
- Web Components brauchen den Browser: Seiten mit Interaktion
  (Dialog-State etc.) als Client Components.
- Inputs tragen `radius-md` (12px) via Theme — nicht pro Element stylen.

## Bausteine

- `brand/wordmark` — Wortmarke als SVG-Asset (20px im Header); Monogramm
  nur Favicon/Avatar/Stempel.
- `brand/kasane` — Gradient-Katalog-Varianten (hero/cta/plum/band-*),
  Drift + Grain als Props. Ein Hero-Kasane pro Seite.
- `brand/site-nav` — fixer 64px-Header, transparent → blur-solid.
- `brand/image-placeholder` — gestreifter Platzhalter mit
  Monospace-Caption. Nie Illustrationen erfinden.

## Harte Regeln (Kurzfassung)

- Text NUR über `type-*`-Klassen — nie `text-sm`/`font-semibold` ad hoc.
- Farben NUR über Token-Utilities (`bg-bm-purple`, `text-mid`, …).
- Grundton Off-White; Weiß ist Sektionsfläche im Wechsel.
- Buttons Pill, immer. Marketing: `bm-btn`-Familie; Produkt: MD3-Buttons.
- Karten sitzen: `card-clean`/`bm-card-*`; keine Akzent-Kanten.
- Höchstens ein Motion-Moment pro Sektion; `prefers-reduced-motion` gilt.
- Unklar? Fragen — Markenkritisches nie improvisieren.
