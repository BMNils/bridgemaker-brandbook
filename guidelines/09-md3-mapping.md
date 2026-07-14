# 09 — Material-Design-3-Mapping (Produkt-UIs)

Zukünftige digitale Bridgemaker-Produkte (Apps, Tools, interne Software)
entstehen auf **Google Material Design 3** als Komponenten- und
Interaktions-Fundament, gebrandet über ein explizites
Bridgemaker-Token-Mapping.

**Scope:** MD3 gilt für Produkt-/App-UIs. Marketing-Oberflächen —
Website, Landingpages, Decks — behalten das Bridgemaker-Handwerk aus
[`07-product-patterns.md`](07-product-patterns.md).

## 9.1 Arbeitsteilung

**MD3 liefert (unverändert übernehmen):**

- Komponenten-Anatomie und -Verhalten (Textfelder, Menüs, Dialoge,
  Sheets, Chips, Navigationsmuster)
- Interaktions-States (Hover-/Focus-/Pressed-State-Layer, Ripple)
- Accessibility-Verhalten (Touch-Targets, Fokus-Reihenfolge,
  Kontrast-Maschinerie)
- Layout-Adaptivität (Window Size Classes, Panes)

**Bridgemaker übersteuert (immer):**

- **Farbe** — explizites Token-Mapping (9.2)
- **Typografie** — Inter + die Bridgemaker-Skala (9.3)
- **Shape** — Pill-Buttons, Bridgemaker-Radien (9.4)
- **Elevation** — zurückhaltende Schatten (9.5)
- **Motion-Zurückhaltung** — Bridgemaker-Motion-Regeln deckeln MD3s
  Default-Expressivität (9.6)

## 9.2 Farbrollen — explizit mappen, nie seed-generieren

**Das Theme NICHT aus einer Seed-Farbe generieren.** MD3s
HCT-Palettengenerierung verschiebt `#6B4A94` in Töne, die kein
Bridgemaker-Purple mehr sind. Die Rollen explizit aus den Token-Familien
mappen:

| MD3-Rolle | Bridgemaker-Token | Wert |
|---|---|---|
| `primary` | `--bm-purple` | `#6B4A94` |
| `on-primary` | `--off-white` | `#F5F1EB` |
| `primary-container` | `--bm-purple-tint` | `#EDE3F5` |
| `on-primary-container` | `--bm-deep-plum` | `#4A2D6B` |
| `secondary` | `--bm-teal` | `#3A9E97` |
| `secondary-container` | `--bm-teal-tint` | `#E0F2F0` |
| `tertiary` | `--bm-berry` | `#B84A6F` |
| `tertiary-container` | `--bm-rose-tint` | `#F5E0E8` |
| `surface` | `--off-white` | `#F5F1EB` |
| `surface-container` (low→high) | `surface-stone` → `surface-sand` → `surface-mauve` | `#E8E5DF` / `#E5E0D8` / `#E3E0E8` |
| `on-surface` | `--charcoal` | `#1C1C1E` |
| `on-surface-variant` | `--mid` | `#6B6B65` |
| `outline` | `--surface-mid-stone` | `#C5C0B8` |
| `outline-variant` | Haarlinien-Ton aus Charcoal | `rgba(28,28,30,0.06)` |
| `error` | MD3-Default | behalten |

**Dark Scheme:** Basis `--charcoal`, `primary` wird `--bm-lavender-dark`
(`#AF94D2`) — die On-Dark-Regel aus [`02-colors.md`](02-colors.md) §2.5
gilt weiter; rohes `--bm-purple` fällt auf Dunkel durch den Kontrast.

## 9.3 Type-Scale-Mapping

MD3-Rollen werden auf die Bridgemaker-Skala gelegt (Inter überall —
Roboto wird nie geladen):

| MD3-Rolle | Bridgemaker-Klasse |
|---|---|
| display-large / -medium / -small | `type-display-xl` / `type-display-l` / `type-display` |
| headline-large / -medium / -small | `type-h1` / `type-h2` / `type-h3` |
| title-large / -medium / -small | `type-h4` / `type-card-title` / `type-h5` |
| body-large / -medium / -small | `type-body-l` / `type-body` / `type-small` |
| label-large / -medium / -small | `type-nav` / `type-caption` / `type-micro` |

Eyebrows (`type-eyebrow`) haben kein MD3-Pendant — sie bleiben ein
Bridgemaker-Muster und dürfen in Produkt-UIs über Seitentiteln stehen.

## 9.4 Shape

- **Buttons: Pill** (`999px`) — deckt sich mit MD3s Full Corner Radius;
  beibehalten.
- **Karten:** `--radius-xl` (20px). **Inputs/Felder:** `--radius-md`
  (12px), nie Pill.
- MD3-Shape-Tokens mappen: extra-small→`--radius-sm`,
  small→`--radius-md`, medium→`--radius-lg`, large→`--radius-xl`,
  extra-large→`--radius-2xl`, full→`--radius-pill`.

## 9.5 Elevation

Bridgemakers Schatten-Philosophie übersteuert MD3-Default-Elevation:
Karten sitzen, sie fliegen nicht. Für Ruhezustände die Karten-Rezepte aus
[`04-surfaces-glass.md`](04-surfaces-glass.md) (`card-clean` /
`card-elevated`); stärkere Elevation nur für echt schwebende Ebenen
(Dialoge, Menüs, Sheets) — und auch dort `--shadow-md`/`--shadow-lg`
statt MD3s Tonal-Elevation-Optik. Keine MD3-Surface-Tint-Overlays zur
Elevation-Darstellung — Bridgemaker-Flächen wechseln per Token, nicht
per Tint-Mathematik.

## 9.6 Motion

MD3-Motion wird durch Bridgemaker-Zurückhaltung gedeckelt: Dauern und
Easings aus [`05-motion.md`](05-motion.md), höchstens ein Motion-Moment
pro View, `prefers-reduced-motion` Pflicht. State-Layer und Ripple dürfen
bleiben (Feedback, keine Dekoration).

## 9.7 Implementierungs-Hinweis

Referenz-Implementierung (Entscheidung zum Start des Starter-Kit-Baus):
Empfehlung **`@material/web`** (Googles offizielle
MD3-Web-Components; React 19 rendert Custom Elements nativ), Alternative
MUI, falls SSR-Ergonomie schwerer wiegt als MD3-Treue. Unabhängig von der
Library: ausschließlich über das obige Mapping themen — keine
Library-Defaults durchsickern lassen.
