# 06 — Layout & Abstände

## 6.1 Das 8px-Raster — verbindlich

Alle Größen, Paddings und Gaps sind **Vielfache von 8px** (4px als halbe
Stufe). Keine krummen Werte wie 28px oder 18px für Abstände. Wer einen
eigenen Pixelwert tippt, sollte sich fragen, warum.

## 6.2 Container & Rhythmus (Stand Website)

- **Container:** max `1200px`, seitliches Padding `16px` mobil /
  `32px` ab `md`. *(Ersetzt die v1-Angabe „48px horizontal padding".)*
- **Sektions-Rhythmus:** Standard-Sektionen tragen `py-24` (96px)
  vertikales Padding.
- **Grid-Gutter:** `24px` Default.
- Weiß-/Farbflächen-Sektionen grenzen sich mit
  `border-surface-stone`-Haarlinien voneinander ab (siehe
  [`02-colors.md`](02-colors.md) §2.3).

## 6.3 Maß — Textbreiten

- **Sektions-Headlines und Lead-Lines / Intro-Copy:** `max-w-2xl`.
  Eine Headline über die vollen 1200px liest sich wie ein Banner,
  nicht wie ein Statement — die 2xl-Kappung hält das Maß und lässt
  lange Headlines trotzdem einzeilig laufen.
- Fließtext-Spalten lesbar halten — Fließtext nie über die volle
  Containerbreite laufen lassen.

## 6.4 Zurückhaltungs-Regeln

- **Farbe ist rationiert** — das neutrale Fundament trägt die Seite;
  Markenfarbe erscheint in bewussten Momenten (siehe
  [`02-colors.md`](02-colors.md) §2.7).
- **Höchstens ein Motion-Moment pro Sektion** (siehe
  [`05-motion.md`](05-motion.md)).
- **Schatten bleiben dezent** — Karten dürfen nicht „vor der Fläche
  schweben" (siehe [`04-surfaces-glass.md`](04-surfaces-glass.md) §4.1).
- **Negativraum ist ein Marken-Asset.** Im Zweifel: mehr davon.
