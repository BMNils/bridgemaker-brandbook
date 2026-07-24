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

**Vorrang-Regel** *(Nils, 2026-07-14)*: Hat Bridgemaker ein eigenes
Rezept — Typo (`type-*`), Buttons (`bm-btn`-Familie), Formulare
(`bm-input`, outline-only), Karten, Badges, Header —, dann gilt das
Rezept auch in Produkt-UIs. **MD3 füllt nur die Lücken:** Dialoge,
Menüs, Tabs, Progress/Loader, Slider, Switches/Checkboxen, Sheets,
Chips und ähnliche nicht definierte Elemente.

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

**⚠ Handwerks-Falle (hart erarbeitet):** CSS-Reset-Regeln der Seite
(z. B. Tailwind-Preflight `* { padding: 0 }`) überschreiben per
CSS-Spec immer die `:host`-Styles von Web Components — die
MD3-Komponenten verlieren dann ihr Box-Modell (Buttons ohne
Innen-Padding). Lösung im Starter-Kit: Preflight-Kopie, die alle
`md-*`-Tags per `:where(:not(…))` vom Universal-Reset ausnimmt
(`starter-kit/src/app/preflight-md3.css`).

## 9.10 Dashboard-Basics

*(Neu 2026-07-24 — Befunde aus dem ersten Mitarbeiter-Dashboard,
das mit dem Style Guide gebaut wurde. Drei Punkte, die dort
schiefgingen, als Regeln:)*

1. **Header-Haarlinie beziffert:** Beim Scrollen trennt
   `border-charcoal/10` (`rgba(28,28,30,0.10)`; dunkle Sektionen
   `border-white/10`), Ruhezustand transparent — nie volles
   Charcoal oder Schwarz (Werte und Verhalten: `07 §7.5`,
   Referenz-Code: `starter-kit/src/components/brand/site-nav.tsx`).
2. **Selects nur als `.bm-select`:** Das Chevron steckt im Rezept
   (tokens.css: `appearance: none` + SVG-Chevron 16px vom Rand).
   Wer ein nacktes `<select>` stylt, bekommt das native
   Browser-Dreieck an der Kante — darum immer die Klasse nutzen,
   auch in MD3-Kontexten (Vorrang-Regel: Bridgemaker-Rezepte
   schlagen MD3-Defaults).
3. **KPI-Karten-Reihen — gleiche Höhe nur bei gleicher Rolle:**
   Gleichrangige Stat-Karten laufen uniform (Weiß, `card-clean`,
   gemeinsame Unterkante). Trägt EINE Karte mehr Inhalt (z. B.
   eine Aufschlüsselung als Meta-Zeilen), bricht sie bewusst aus:
   Bento-Split (kompakte Karten gestapelt neben der hohen
   Detail-Karte) statt Nachbarn, die sich leer aufblähen — Karten
   umschließen ihren Inhalt eng, Leerraum lebt auf Seitenebene.
   Tönung bleibt an Bedeutung gebunden: KPIs gleicher Art nicht
   einfärben; höchstens die Detail-Karte, wenn ihre Rolle das
   trägt.

## 9.8 Icons

**Material Symbols Outlined** ist die einzige freigegebene Icon-Quelle —
für Produkt-UIs und für Decks (Beschluss 16.07.2026; schließt die
bisherige Icon-Lücke dieses Mappings).

- Stil ausschließlich **Outlined**, `FILL 0`; **Weight 300** (passt zur
  Inter-Strichstärke), `GRAD 0`, `opsz 48` — via
  `font-variation-settings`.
- **Einfarbig in der Textfarbe des Kontexts** — auf Hell `--charcoal`,
  auf Dunkel `--off-white` —, nie in Markenfarben und nie mehrfarbige
  Icon-Reihen *(Nils, 2026-07-23 — ersetzt den Deep-Plum-Default und
  „Farben aus einer Familie": ein einzelnes farbiges Icon in einer
  neutralen Reihe liest sich als Bedeutung, wo keine ist)*.
- **Funktional statt dekorativ:** Icons geben Orientierung (ein Icon
  pro Karte/Aspekt) — nie als Zeilenschmuck vor jedem Bullet, nie als
  Bildersatz.
- Laden: Google-Fonts-Link für statische Artefakte (Decks), Paket im
  Starter-Kit für Produkt-UIs. Icon-Namen: fonts.google.com/icons.
- MD3-Komponenten-Slots (Dialoge, Menüs, Tabs …) verwenden dieselben
  Symbols — keine Library-eigenen Icon-Sets durchsickern lassen.

## 9.9 Favicon & App-Icon

Jedes Produkt-UI führt die fertigen Icons, keine selbst gebauten
(Regel und Begründung: `guidelines/01 §1.2`):

- **Browser-Favicon:** NUR der Gedankenstrich auf schwarzem Quadrat —
  `assets/logos/favicon-dash.png` (72 px) bzw. `favicon.ico`. Das
  volle B—M ist bei Tab-Größe unlesbar.
- **App-/Touch-Icon (ab ~120 px):** B—M im Kreis,
  `assets/logos/app-icon-bm-circle.png`.
- Im Starter-Kit liegen beide fertig verdrahtet: `src/app/icon.png`,
  `src/app/favicon.ico` und `src/app/apple-icon.png` — Next serviert
  sie über die Datei-Konvention automatisch, kein `icons`-Metadata
  nötig.
