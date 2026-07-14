# Bridgemaker Starter-Kit

Referenz-Code für digitale Bridgemaker-Produkte: Next.js 15 + React 19 +
Tailwind v4 + Material Design 3 (`@material/web`), gebrandet über das
Token-Mapping aus `../guidelines/09-md3-mapping.md`.

## Quickstart

```bash
npm install
npm run dev        # http://localhost:3000
```

- `/` — Überblick
- `/components` — MD3-Komponenten im Bridgemaker-Theming + Marketing-Bausteine
- `/landing-demo` — Flächenrhythmus einer Marketing-Seite

## Aufbau

```
src/
├─ app/
│  ├─ tokens.css       ← Kanon-Kopie (Quelle: ../tokens/tokens.css)
│  ├─ md3-theme.css    ← MD3-System-Tokens ← Bridgemaker-Mapping
│  ├─ globals.css      ← Tailwind-Verdrahtung (@theme) + next/font
│  └─ …                ← Demo-Routen
├─ components/
│  ├─ md3/             ← Web-Component-Registrierung + Provider
│  └─ brand/           ← Wortmarke, Kasane, Header, Platzhalter, Swatch
└─ types/md3.d.ts      ← JSX-Typen für md-*-Tags
```

## Regeln

Verbindlich sind `../CLAUDE.md` und `../guidelines/01–09`;
Kit-Spezifisches steht in [`CLAUDE.md`](./CLAUDE.md). Kurzform:
Produkt-UI = MD3, Marketing = Bridgemaker-Handwerk, Text nur über
`type-*`-Klassen, Farben nur über Tokens.

## Deploy

Statisch exportierbar oder als Next.js-App — z. B. `vercel deploy`
aus diesem Verzeichnis. Keine Env-Variablen nötig.
