# Bridgemaker Brand — Claude-Instructions (v2)

> **Vor JEDER Bridgemaker-Gestaltung dieses File lesen.**
> Du gestaltest im Namen von Bridgemaker — der Digitalberatung für
> KI-Transformation, inhabergeführt, mit der Umsetzungskraft eines
> Venture Builders. Jedes Artefakt muss sich unverkennbar nach
> Bridgemaker anfühlen: direkt, ambitioniert, pragmatisch, souverän.
>
> Dieses File ist das Destillat. Tiefe & Begründungen: `guidelines/01–09`.
> Alle Werte & CSS-Rezepte: `tokens/tokens.css` + `tokens/tokens.json`.

---

## 0. Projekt-Start-Checkliste

1. **Tokens zuerst laden** (`tokens/tokens.css`, Daten: `tokens.json`).
   Farben, Größen, Radien, Abstände NIE inline neu definieren.
2. **Grundton `--off-white` (#F5F1EB).** Reines Weiß ist Sektionsfläche
   im Wechsel (Weiß ↔ Off-White ↔ Surfaces), nie der Ganzseiten-Grund.
3. **Inter + JetBrains Mono.** In Next.js via `next/font`; Google-Fonts-
   Link nur für statische Artefakte. Keine anderen Fonts ohne Freigabe.
4. **Nur `type-*`-Klassen für Text.** Nie ad-hoc Größen/Gewichte/Tracking.
5. **Pill-Buttons, immer** (`border-radius: 999px`).
6. **Header-Logo = Wortmarke, immer** (20px hoch im 64px-Header; weiße
   Variante auf Dunkel). Das B—M-Monogramm nur für Favicon/App-Icon/
   Avatar/Foto-Stempel.
7. **8px-Raster** (4px halbe Stufe). Keine krummen Werte.
8. **Textarbeit? Erst `guidelines/08-voice.md` lesen** (Tone-Level,
   Wortlisten, harte Schreibregeln).
9. **Produkt-/App-UI? → MD3 mit Bridgemaker-Mapping** (Abschnitt 9).
10. **Unklar? FRAGEN.** Markenkritisches nie improvisieren.

---

## 1. Markenkern

- **Logo-Idee „Bindestrich":** Die Wortmarke trägt den Gedankenstrich —
  die direkte Verbindung zweier Welten (Corporate ↔ Startup). B—M ist
  Signet, nicht Logo.
- **Mission:** Wir entwerfen Geschäftsmodelle und führen sie zum
  Ergebnis. Wir bleiben, bis es trägt.
- **Voice-Polarität:** sachlich + emotional · ruhig + entschieden ·
  schwarz-weiß + mutig in Farbe · tief + glasklar. „Wir bauen" ist das
  operative Verb. Kein Buzzword, kein AI slop.
- **Sprachen:** Deutsch und Englisch, gleichgewichtet; nie im Satz
  mischen. Publikationen grundsätzlich zweisprachig.
- **Die sechs Principles** (Wortlaut = Website): Wirkung vor Aufwand ·
  Produkt ist Business · Mensch und Maschine · Build–Measure–Learn ·
  Klarheit · Dein Venture.

## 2. Farben

- **Triade:** `--bm-purple` #6B4A94 (primär) · `--bm-berry` #B84A6F
  (Akzent, sparsam) · `--bm-teal` #3A9E97 (Charts/Tech). Sage ist
  gestrichen — Grüntöne nur noch in Gradient-Rezepten und `surface-sage`.
- Jede Farbe als **Familie** nutzen (Base/Deep/Soft/Tint) — keine
  Zwischentöne erfinden, keine neuen Farben.
- **Eine dominante Farbe pro Sektion**; Neutrals tragen den Rest.
  Farbe ist rationiert.
- **Auf Dunkel:** Headlines `--off-white`, Fließtext `--soft`,
  Links/CTAs `--bm-lavender-dark` — NIE rohes Purple auf Dunkel.
- **Ränder:** Sektionsgrenzen `1px --surface-stone`; Umriss-Boxen/
  Tabellen `--border-subtle` (#C5C0B8); Fokus `--border-strong`
  (1.5px Purple).

## 3. Typografie

- Fluide Skala via `clamp()` — fixe px brechen auf Mobile. Stufen (alle
  als Klassen in tokens.css):
  `type-display-xl/-l/display` (64–128px, größer = LEICHTER) ·
  `type-h1…h5` · `type-stat` · `type-card-title` · `type-body-l/body` ·
  `type-nav` · `type-small/caption/micro` · `type-eyebrow`
  (12px, Versalien, +0.08em — einzige positive Spationierung).
- Negatives Tracking auf Headlines (fluide Stufen in `em`).
- Umlaute in Display-Headlines sind willkommen; lange Komposita brechen
  lassen (`overflow-wrap: break-word`), nicht schrumpfen.

## 4. Flächen, Karten & Glas

**Drei Ebenen:** Grund (Off-White/Weiß im Rhythmus) → Felder
(Surfaces, Kasane-Gradients, Farbbänder) → Karten (Paper oder Glass).

- **Karten sitzen, sie fliegen nicht:** Inset-Haarlinie + nahe Elevation.

```css
.card-clean {   /* weiße matte Karte */
  box-shadow: inset 0 0 0 1px rgba(28,28,30,0.06),
              0 1px 2px rgba(28,28,30,0.03),
              0 10px 24px -18px rgba(28,28,30,0.10);
}
.card-elevated { /* getönte matte Karte — gleiche Anatomie, s. tokens.css */ }
```

- **Glass nur, wo etwas zu frosten ist** (Gradient/Bild dahinter) —
  sonst Paper. Rezepte: `card-glass`, `hero-card-glass`+`hero-card-veil`,
  `case-glass` in tokens.css. `shadow-pop` = max. eine Featured-Box.
- **Grain-Finish** als Overlay: `.grain` (hell) · `.grain-screen`
  (dunkel) · `.grain-photo` (unter Glas — ohne Blend-Mode!) ·
  `.grain-photo-screen`.
- **Kasane-Gradients** (Familienfarben als radiale Ellipsen über Basis):
  ein Hero-Kasane pro Seite; mehrere Gradient-Felder okay, aber im
  Wechsel mit ruhigen Flächen, nie zwei direkt aneinander, nie hinter
  Fließtext. Katalog (28 Flächen, „ein Thema = eine Farbwelt") in
  tokens.css.
- Karten: `radius-xl` (20px), Füllungen variieren (nie 3× dieselbe
  Surface in einer Reihe). **Farbige Akzent-Kanten (`border-left`-
  Callouts) sind verboten.**

**⚠ Handwerks-Fallen (hart erarbeitet):**
1. Tailwind v4 strippt handgeschriebenes `backdrop-filter` in
   `@layer`-Blöcken → Frost über Utilities am Element
   (`backdrop-blur-xl backdrop-saturate-150`).
2. Glas-Karten dürfen selbst keinen `filter` tragen.
3. Inhalte unter Glasscheiben: kein `filter`, kein `blend-mode`
   (bricht Backdrop-Sampling).
4. Drift-Eltern brauchen `overflow: hidden`.
5. Kein `blur()` auf Kasane-Flächen im Mobile-Kontext (ruckelt).

## 5. Motion

- **Höchstens EIN Motion-Moment pro Sektion.** `prefers-reduced-motion`
  ist Pflicht. Kein Scroll-Jacking.
- **Hover:** Karten liften (`-translate-y-1` + shadow-md) · Buttons
  wechseln die Füllung innerhalb der Markenfamilie (Charcoal→Deep-Plum,
  hell→Soft-Purple) — nie nach Schwarz · Pfeile nudgen
  (`translate-x-0.5`) · Textlinks: Farbwechsel; Unterstreichung nur bei
  reinen Textlinks.
- **Dauern:** 150ms Mikro · 240ms Standard · 400ms Seitenebene.
  `--ease-out` für Eintritte, `ease-in-out` für Loops, Spring nur
  verspielt.
- **Kasane-Drift:** `.kasane-drift` 14s / `.kasane-drift-bold` 9s
  (Keyframes in tokens.css).

## 6. Layout

- Container max **1200px**, Padding 16px mobil / 32px ab md.
- Sektionen **`py-24`** (96px). Grid-Gutter 24px.
- **Headlines `max-w-xl`, Leads `max-w-2xl`** — nie volle Breite.
- Negativraum ist ein Marken-Asset. Im Zweifel: mehr.

## 7. Komponenten & Patterns

- **Sektions-Anatomie** (Reihenfolge fix): Eyebrow → Headline (h2) →
  Lead (body-l, `--mid`) → Inhalt → optional EIN CTA (verb-first-Label).
- **Buttons:** Pill; Primär = Charcoal→Deep-Plum-Hover; Featured =
  Verlaufs-Pill (`bm-btn-glow`); Größen 36/44/48/52px. Labels
  verb-first („Jetzt starten"), nie „Hier klicken"/„Absenden" nackt.
- **Header:** fix, 64px, transparent → blur-solid beim Scrollen
  (`backdrop-blur-xl bg-white/30`), Dark-Inversion auf dunklen
  Sektionen; Nav-CTA als Charcoal-Pill; Links `type-nav`.
- **Badges:** kleine Pills, Tint-Hintergrund + Deep-Text
  (purple-tint+deep-plum etc.); >3 pro View = Layout-Problem.
- **Bildsprache:** Editorial-Fotografie — Charakterköpfe, Momente im
  Gewöhnlichen, überraschende Perspektiven. Leichte Entsättigung, warme
  Abstimmung, `radius-xl`, optional `grain-photo`. Fehlendes Asset →
  gestreifter Platzhalter mit Monospace-Caption, NIE SVG-Illustration
  erfinden. KI-Bilder nur mit CD-Freigabe — Maßstab: „fühlt es sich an
  wie Bridgemaker?"
- **Decks:** 1920×1080, min. 24px Text. Cover = Kasane + Display-Titel;
  Layouts s. `guidelines/07 §7.8`.
- **Ventures haben eigene Marken** — Bridgemaker-Identität nie ohne
  CD-Freigabe für Ventures nutzen.

## 8. Texte

Vor jeder Textarbeit `guidelines/08-voice.md` (Voice-Guide v1.0,
verbindlich). Kurzfassung der härtesten Regeln: Per Du / „you" ·
aktive Verben, kein Konjunktiv · konkret vor abstrakt · belastbare
Zahlen oder keine · Schmuck-Adjektive raus · max. ein Reframe
(„nicht X, sondern Y") pro Text · ein Stilbruch pro Text · verbotene
Phrasen (leverage, unlock, next-gen, game-changer, 🚀 …) tabu ·
Headlines ohne Schlusspunkt, sentence-case, keine Ausrufezeichen
außerhalb expliziter UI-Bestätigungen.

## 9. Produkt-/App-UIs — Material Design 3

Digitale Produkte bauen auf **MD3** mit Bridgemaker-Theming
(`guidelines/09-md3-mapping.md`):

- Farbrollen **explizit mappen, NIE seed-generieren** (primary =
  bm-purple, surface = off-white, dark-primary = lavender-dark …).
- Type-Scale auf `type-*` mappen; Inter, nie Roboto.
- Pill = MD3 full radius; Inputs `radius-md`.
- Bridgemaker-Elevation statt MD3-Tonal-Elevation; Motion gedeckelt.
- MD3 liefert Anatomie, States, A11y — Bridgemaker liefert Farbe, Typo,
  Shape, Zurückhaltung.

## 10. Do's & Don'ts

**Do:** tokens.css zuerst laden ✓ Flächenrhythmus nutzen ✓ Wortmarke im
Header ✓ Pill-Buttons ✓ `type-*`-Klassen ✓ Karten sitzen lassen ✓
Grain auf Glas/Gradient ✓ Voice-Guide vor Textarbeit ✓ Platzhalter
statt erfundener Assets ✓ Negativraum atmen lassen ✓ Fragen, wenn unklar.

**Don't:** ganze Seiten in sterilem Reinweiß ❌ Monogramm im Header ❌
Rechtecke statt Pills ❌ farbige Akzent-Kanten ❌ Hover nach Schwarz ❌
rohes Purple auf Dunkel ❌ drei Markenfarben gleichgewichtet ❌ Kasane
als Tapete oder hinter Fließtext ❌ ad-hoc-Typografie ❌ SVG-
Illustrationen erfinden ❌ Emoji als Bildersatz/in Headlines ❌ AI slop
(Bild wie Text) ❌ Ton oder Headlines improvisieren ❌.

## 11. Wann stoppen und fragen

Vor: anderer Schriftwahl · neuer Markenfarbe · Headline-Copy für
Außenauftritte (Nav, Hero, CTA) · KI-Bildern (immer CD-Freigabe) ·
Stock-Fotos oder Illustrationen · Abweichung von der Pill-Form ·
Kasane außerhalb von Hero-/Moment-Flächen · Venture-Projekten ·
einem ersten Formular-Design (Regeln in `guidelines/07 §7.4` sind
bisher unvalidierte Vorgabe).

Alles andere: selbstbewusst aus den Tokens bauen.

---

*Bridgemaker Brand v2.0 — Juli 2026. Destillat aus `guidelines/01–09`;
bei Widerspruch gewinnen die Guidelines, deren Quelle die Website ist.*
