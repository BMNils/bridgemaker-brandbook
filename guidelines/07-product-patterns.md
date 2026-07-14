# 07 — Produkt-Patterns

Wie Bridgemaker-Artefakte zusammengebaut werden — von der einzelnen
Sektion bis zur Landingpage, zum Deck oder App-Screen. Das ist das
„Anleitungs-Kapitel", das dem v1-Brandbook fehlte.

**Scope-Hinweis:** Marketing-Oberflächen (Website, Landingpages, Decks)
entstehen mit dem hier beschriebenen Bridgemaker-Komponenten-Handwerk.
Produkt-/App-UIs entstehen auf **Material Design 3** mit
Bridgemaker-Theming — siehe [`09-md3-mapping.md`](09-md3-mapping.md).

## 7.1 Sektions-Anatomie

Jede Content-Sektion folgt demselben Skelett, von oben nach unten:

1. **Eyebrow** — `type-eyebrow` in `--light` (oder eine Familienfarbe,
   Disziplin: eine dominante Farbe pro Sektion)
2. **Headline** — `type-h2` (Seitenebene: `type-h1`), `max-w-xl`
3. **Lead** — `type-body-l` in `--mid`, `max-w-2xl`
4. **Inhalt** — Karten, Medien oder redaktionelle Spalten auf dem
   8er-Raster
5. optional **CTA** — ein Button, Label verb-first

Nicht jede Sektion braucht alle fünf — aber die Reihenfolge dreht sich
nie.

## 7.2 Seitenrhythmus

Der Rhythmus der Website als Referenz (verallgemeinert):

1. **Fixe Nav** (siehe 7.5)
2. **Hero** — Kasane-Fläche, Display-Headline, Lead in `--mid`, ein bis
   zwei CTAs; optional ein Glas-Kartenstapel über dem Gradient
3. **Proof-Band** — Kundenlogos (Marquee) oder Stats auf ruhiger Fläche
4. **Themen-/Feature-Sektionen** — Karten mit variierenden Surfaces und
   Themen-Farbwelten (ein Thema = eine Farbwelt, siehe
   [`04-surfaces-glass.md`](04-surfaces-glass.md) §4.6)
5. **Cases/Referenzen** — Grid oder Scheiben mit `case-glass`-Leisten
6. **Stimmen** — satte Verlaufs-Karten (`bg-stimme-*`) mit Zitaten
7. **Abschluss-CTA** — dunkle Kasane-Fläche, eine Headline, ein Button
8. **Footer** — Off-White mit `border-t border-surface-stone`;
   Wortmarke + drei Linkspalten (Angebot / Unternehmen / Connect), je mit
   `type-eyebrow`-Spaltentiteln

Sektionen wechseln die Fläche (Weiß ↔ Off-White ↔ Surface-/Farbband) —
der Flächenrhythmus gliedert die Seite, nicht Trennlinien allein.

## 7.3 Buttons

- **Form:** Pill. Immer. `border-radius: 999px`. Keine Rechtecke.
- **Varianten (Stand Website):**
  - **Primär:** Charcoal-Pill mit Off-White-Text; Hover →
    `bg-bm-deep-plum`. Auf Dunkel invertiert: Off-White-Pill, Hover →
    `bg-bm-soft-purple`.
  - **Featured/Glow:** Verlaufs-Pill `from-off-white to-bm-purple-tint`
    mit Inset-Lichtkante, Hover → `to-bm-soft-purple` (für dunkle
    CTA-Flächen).
  - **Sekundär** *(Systemvariante, auf der Website derzeit ungenutzt)*:
    transparent mit 1.5px Purple-Kontur (Lavender auf Dunkel).
  - **Ghost** *(Systemvariante, auf der Website derzeit ungenutzt)*:
    nur Text.
- **Größen:** 36px (`h-9`) / 44px (`h-11`) / 48px (`h-12`) / 52px
  (`h-[52px]`) Höhe — auf dem 8er-Raster mit 52px als
  Featured-Ausnahme.
- **Hover:** Füllungswechsel innerhalb der Markenfamilie, nie nach
  Schwarz (siehe [`05-motion.md`](05-motion.md) §5.2).
- **Label-Voice:** verb-first („Jetzt starten", „Let's build together").
  Nie „Hier klicken" oder ein nacktes „Absenden".

## 7.4 Formulare

- **Outline-only** *(Nils, 2026-07-14)*: Inputs sind reine
  Umriss-Felder — Ruhezustand transparent auf der Fläche, **weiß füllt
  das Feld erst bei Fokus**.
- Inputs sind `radius-md` (12px), **nicht** Pill — nur Buttons sind Pill.
- Fokus: weiße Füllung + Purple-Rand + weicher Purple-Ring
  (`--border-strong` + Tint).
- Labels über den Feldern, nie Placeholder-als-Label.

## 7.5 Navigation & Links

- **Header (Stand Website):** fix, `64px` hoch (`h-16`), startet
  transparent und wird beim Scrollen solide: `backdrop-blur-xl` +
  `bg-white/30` (auf dunklen Sektionen `bg-charcoal/25`), Haarlinie
  unten. Wortmarke links, `20px` hoch; auf dunklen Sektionen
  (`data-nav-dark`) invertiert die Nav (weiße Wortmarke, helle Links).
- Links in `type-nav`; aktiver Link = `--charcoal` (bzw. Off-White auf
  Dunkel), inaktive in `--mid` mit Farbwechsel-Hover. Der Nav-CTA ist
  eine Charcoal-Pill (`h-9`).
- **Mobile:** Vollflächiges Charcoal-Overlay mit `bg-kasane-cta` (60 %
  Opacity, bewusst ohne blur — ruckelt mobil) + `grain-screen`;
  Menüpunkte in `type-h1`.
- Hover-Unterstreichung (`text-underline-offset: 3px`) nur bei **reinen
  Textlinks**. Buttons, Karten-Links und Nav nie unterstreichen — sie
  liften oder wechseln die Füllung.

## 7.6 Badges / Tags

Kleine Pills (~24px). **Farblogik (Stand Website): Tint-Hintergrund +
Deep-Textfarbe** — `purple-tint`+`deep-plum`, `teal-tint`+`deep-teal`,
`rose-tint`+`deep-berry`. Daneben existiert eine Mono-Micro-Variante
(JetBrains Mono, `text-xs`) für technische Labels. Mehr als 3 Badges in
einem View sind meist ein Layout-Problem.

## 7.7 Bildsprache

Drei Prinzipien:

1. **Charakterköpfe** — echte Menschen mit Präsenz und Haltung. Keine
   Models, kein Stock-Lächeln.
2. **Momente im Gewöhnlichen entdecken** — das sprechende Detail in der
   Alltagsszene, nicht gestellt, nicht heroisch.
3. **Überraschende Perspektiven** — ungewöhnliche Winkel, enge Crops,
   außermittige Kompositionen. Nie frontal und brav.

Ausführung: **Editorial-Fotografie** — dokumentarisch, natürliches Licht,
echte Arbeitskontexte. Treatment: leichte Entsättigung (~−10 %), warme
Abstimmung passend zu Off-White; `radius-xl` auf eingebetteten Bildern;
optional `grain-photo`-Finish (siehe
[`04-surfaces-glass.md`](04-surfaces-glass.md) §4.4). Full-bleed nur in
Heroes und Cover-Slides.

- **Asset fehlt?** Gestreiften Platzhalter-Block mit Monospace-Caption
  verwenden, die beschreibt, was dort hingehört. Nie eine
  SVG-Illustration erfinden.
- **KI-generierte Bilder sind erlaubt**, wenn sie den editorialen
  Standard erfüllen und vom Creative Director freigegeben sind. Der
  Maßstab ist nicht „wurde es von KI gemacht?", sondern „fühlt es sich
  an wie Bridgemaker?"
- ❌ Stock-Handshakes, Menschen, die auf Screens zeigen, flache
  Vektor-Figuren, Emoji als Bildersatz, AI slop (Default-KI-Ästhetik als
  Ersatz fürs kreative Konzept).

## 7.8 Slide-Decks

- Format **1920×1080**, Mindest-Textgröße **24px**. Keine Ausnahmen.
- Layouts: **Cover** (dunkles/vibrantes Kasane, Display-Titel, kleines
  Eyebrow, kein Fließtext) · **Kapiteltrenner** (Surface-Farbe
  full-bleed, zentrierte einzeilige H1) · **Content** (2/3 Text + 1/3
  Visual oder 1/2-Split) · **Zitat** (großes kursives Zitat, Attribution
  im Eyebrow-Stil) · **Schluss-Slide** (Claim + Kontakt, dunkles Kasane).

## 7.9 Print-Publikationen (DIN A4)

Für gedruckte Broschüren, Bookazines und Reports gilt ein eigener
Token-Layer: **`tokens/print-tokens.css`**, geladen NACH `tokens.css`.
Validiert am Bookazine v1 (Druck: Pinguin Druck Berlin, 2026).

- **Format:** DIN A4 Hochformat (210×297mm). Einheiten: Format und
  Spacing in **mm**, Typografie in **pt** — nie px im Print.
- **Schrift:** Display-Grade laufen im Print in **Inter Display**
  (`--font-display`-Override im Print-Layer; Ausnahme-Regel in
  Kapitel 03 §3.1). Body/UI bleiben Inter, Mono bleibt JetBrains Mono.
- **Satzspiegel:** symmetrisch, 16mm links/rechts, 14mm oben (Running
  Header), 18mm unten (Folio). Satzbreite 178mm, 12-Spalten-Raster mit
  4mm Gutter (`.pp-grid` + `.pp-col-*`).
- **Baseline-Grid:** 14pt vertikaler Takt; Body 10pt/14pt sitzt exakt
  darauf, Absatzabstand = genau eine Baseline. Headlines dürfen
  pragmatisch brechen.
- **Print-Type-Scale** in pt (`--pp-text-*`): Numeral 220pt (Großziffer
  auf Openern, eigener Block) · Display-XL 96pt (Cover, einmal pro
  Werk) · Display-L 72pt · Display 56pt · H1 36pt · H2 24pt · H3 16pt ·
  H4 12pt · Lead 13pt · Body 10pt · Small 9pt · Caption 8pt · Eyebrow
  8pt Versalien. Tracking-Korrekturen für Großgrade in pt.
- **Die zwei wichtigsten Abstände** (häufigster Print-Fehler):
  Großziffer → Headline **18mm** (`--pp-gap-numeral-head`) und
  Eyebrow → Headline **12mm** (`--pp-gap-eyebrow-head`).
- **Linien sind physisch:** Hairline = **0.4pt**, Standard 0.6pt —
  nicht 1px. Im Print ruhiger als am Bildschirm.
- **Kasane im Druck:** eigene Print-Varianten (`.pp-kasane-dark/
  -vibrant/-light`) mit **+15 % Sättigung** gegen die Dämpfung von
  Naturpapier. Nicht die Bildschirm-Rezepte unverändert drucken.
- **Beschnitt:** 2mm Anschnitt rundum über den Bleed-Modus
  (`<html class="bleed">`, gesetzt vom PDF-Builder; MediaBox 214×301mm,
  TrimBox 210×297mm). Hintergründe auf `.pp-page` bluten automatisch;
  der Satzspiegel bleibt relativ zum Endformat unverändert.
- **Seitenkonstruktion:** jede Seite ist ein `.pp-page`-Element
  (`@page { size: A4; margin: 0 }`); Varianten `.pp-page-bleed`
  (vollflächig, z. B. Cover/Opener) und `.pp-page-dark`. Running
  Header + Folio in Mono-Versalien, Platzhalter wie am Bildschirm
  gestreift mit Monospace-Caption.

## 7.10 Venture-Projekte

**Venture-Marken sind eigenständig definiert.** Bridgemakers visuelle
Identität nicht ohne ausdrückliche Freigabe des Creative Directors für
Ventures wiederverwenden. Bei Venture-Aufträgen: nach den Brand-Assets
des Ventures fragen oder bestätigen lassen, dass Bridgemaker direkt
verwendet werden soll.
