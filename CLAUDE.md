# Bridgemaker Brand — Claude-Instructions (v2)

> **Erst `git pull`, dann gestalten** — der Kanon entwickelt sich
> laufend; wer auf altem Stand arbeitet, baut an den aktuellen
> Regeln vorbei (bei lokalen Änderungen vorher committen/stashen).
>
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
3. **Inter für alles — Mono nur für echten Code.** JetBrains Mono ist
   ausschließlich für Code-Darstellung und Platzhalter-Captions erlaubt;
   UI-Text (Eyebrows, Badges, KPIs, Nummerierungen, Meta-Zeilen,
   Chart-Achsen, Folios) läuft IMMER in Inter. In Next.js via
   `next/font`; statische Artefakte (Decks) laden die lokal
   gehosteten Fonts aus `assets/fonts/` — kein Google-Fonts-Aufruf
   in allem, was Dritte öffnen (DSGVO: der Aufruf überträgt die IP
   des Betrachters an Google; LG München 2022). Ausnahme *(Nils,
   2026-07-20)*: rein interne Entwürfe in Firmen-Tools ohne
   Dateizugriff (z. B. Langdock-Canvas) dürfen Inter per
   Google-Fonts-Link laden — Weitergabe trotzdem nur als PDF oder
   Versand-HTML mit eingebetteten Fonts. Keine
   anderen Fonts ohne Freigabe. Einzige Ausnahme: Print-Display-Grade
   laufen in **Inter Display** (Override im Print-Layer, s. Punkt
   „Print" in Abschnitt 7).
4. **Nur `type-*`-Klassen für Text.** Nie ad-hoc Größen/Gewichte/Tracking.
5. **Pill-Buttons, immer** (`border-radius: 999px`).
6. **Header-Logo = Wortmarke, immer** (20px hoch im 64px-Header; weiße
   Variante auf Dunkel). Browser-Favicon = NUR der Gedankenstrich auf
   schwarzem Quadrat (`assets/logos/favicon-dash.png` + `favicon.ico`
   — das volle B—M ist bei Tab-Größe unlesbar); das B—M-Monogramm
   erst ab App-Icon-Größe (Touch-Icon `app-icon-bm-circle.png`,
   Avatar, Foto-Stempel).
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
- **Voice-Polarität:** sachlich + emotional, ruhig + entschieden,
  schwarz-weiß + mutig in Farbe, tief + glasklar. „Wir bauen" ist das
  operative Verb. Kein Buzzword, kein AI slop.
- **Sprachen:** Deutsch und Englisch, gleichgewichtet; nie im Satz
  mischen. Publikationen grundsätzlich zweisprachig.
- **Die sechs Principles** (Wortlaut = Website): Wirkung vor Aufwand,
  Produkt ist Business, Mensch und Maschine, Build–Measure–Learn,
  Klarheit, Dein Venture.

## 2. Farben

- **Triade:** `--bm-purple` #6B4A94 (primär), `--bm-berry` #B84A6F
  (Akzent, sparsam), `--bm-teal` #3A9E97 (Charts/Tech). Sage ist
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
  `type-display-xl/-l/display` (64–128px, größer = LEICHTER),
  `type-h1…h5`, `type-stat`, `type-card-title`, `type-body-l/body`,
  `type-nav`, `type-small/caption/micro`, `type-eyebrow`
  (12px, Versalien, +0.10em — einzige positive Spationierung).
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
- **Grain-Finish** als Overlay: `.grain` (hell), `.grain-screen`
  (dunkel), `.grain-photo` (unter Glas — ohne Blend-Mode!),
  `.grain-photo-screen`.
- **Kasane-Gradients** (Familienfarben als radiale Ellipsen über Basis):
  ein Hero-Kasane pro Seite; mehrere Gradient-Felder okay, aber im
  Wechsel mit ruhigen Flächen, nie zwei direkt aneinander, nie hinter
  Fließtext. Katalog (31 Flächen, „ein Thema = eine Farbwelt") in
  tokens.css.
- Karten: `radius-xl` (20px). **Tönung braucht Bedeutung:** Dieselbe
  Surface darf sich frei wiederholen — Uniformität ist Ruhe, kein
  Fehler. Unterschiedliche Tönungen nur, wenn der Unterschied etwas
  sagt (Identität, Kategorie, Rolle). **Verboten: Schachbrett-
  Alternanz** zweier Tönungen im Grid und jeder Farbwechsel als
  Deko-Rhythmus. Summen-/Resultat-/Basis-Elemente werden anders
  exponiert als die Reihe darüber (Rolle = Behandlung). **Farbige
  Akzent-Kanten (`border-left`-Callouts) sind verboten.**
  Karten-Reihen: gleiche Höhe nur bei gleicher Rolle — trägt EINE
  Karte mehr Inhalt, bricht sie als Bento aus (kompakte Karten
  gestapelt neben der hohen Detail-Karte), statt dass sich die
  Nachbarn leer aufblähen.

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
- **Hover:** Karten liften (`-translate-y-1` + shadow-md), Buttons
  wechseln die Füllung innerhalb der Markenfamilie (Charcoal→Deep-Plum,
  hell→Soft-Purple) — nie nach Schwarz, Pfeile nudgen
  (`translate-x-0.5`), Textlinks: Farbwechsel; Unterstreichung nur bei
  reinen Textlinks.
- **Dauern:** 150ms Mikro, 240ms Standard, 400ms Seitenebene.
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
- **Buttons:** Pill; Primär = Charcoal→Deep-Plum-Hover; Größen
  36/44/48/52px. Labels verb-first („Jetzt starten"), nie „Hier
  klicken"/„Absenden" nackt.
- **Header:** fix, 64px, transparent → blur-solid beim Scrollen
  (`backdrop-blur-xl bg-white/30`), Dark-Inversion auf dunklen
  Sektionen; Nav-CTA als Charcoal-Pill; Links `type-nav`. Haarlinie
  unten beim Scrollen ist beziffert: `border-charcoal/10` (dunkel:
  `border-white/10`) — nie volles Charcoal oder Schwarz.
- **Badges — eine Bedeutung, eine Gestalt (dokumentweit):**
  1. Semantik-Badge („Quick-Win"): Tint-Hintergrund + Deep-Text
  (purple-tint+deep-plum etc.), Inter — dieselbe Aussage trägt immer
  dieselbe Farbe. 2. Themen-Tag: Outline in Familienfarbe, max. 3
  pro Einheit, nie als Listenersatz. 3. Werte/Ziele: NIE als Badge —
  Meta-Zeile (Label links, Wert rechts). 4. Arbeitsstände („folgt
  nach Freigabe"): nie als Layout-Element. Badges nur auf Sand/Weiß;
  >3 pro View = Layout-Problem.
- **Charts & Diagramme:** eine Aussage, keine Ausstattung. Erst die
  Typografie-Frage (tragen zwei, drei Zahlen die Aussage? → freie
  Stats statt Chart). Vergleichs-Charts: EINE farbige Reihe,
  Vergleich grau/gepunktet, Direktbeschriftung statt Legende, eine
  Baseline, keine Gitter. Struktur-Diagramme (Gantt, Kategorien):
  Familienfarben als Kategorien-Code, konsistent, mit Legende.
  Beschriftung Inter, nie Mono. Ein Chart, das eine Methodik-
  Fußnote braucht, ist gescheitert. Stilisierung vereinfacht die
  Mittel, nie die Substanz (Details: `guidelines/07 §7.11`).
- **Formulare:** Outline-Inputs (`radius-md`, nie Pill), Ruhezustand
  transparent — **weiß erst bei Fokus**; Labels über dem Feld.
  Selects nur als `.bm-select` — das Chevron steckt im Rezept
  (16px vom Rand), nie das native Browser-Chevron.
- **Bildsprache: WORK IN PROGRESS.** Das alte Editorial-Foto-Konzept
  gilt nicht mehr; die Website arbeitet heute ohne Fotografie (feine
  topografische Linien auf Gradients, konstruierte Vektor-Icons). Bis
  das neue Konzept steht: KEINE Bildentscheidungen ohne CD-Freigabe.
  Fehlendes **Bild-Asset** (Foto, freie Illustration, CD-pflichtige
  Bildwelt, fehlendes Logo) → gestreifter Platzhalter mit
  Monospace-Caption. **Informationsgrafiken** — Diagramme, Timelines,
  Prozess-Schaubilder, Charts aus der Marken-Formensprache (Linien,
  Kreise, Typo, Familienfarben, Material Symbols) — sind kein
  Bild-Asset: Sie werden IMMER gebaut, als erster Draft, der
  gemeinsam iteriert wird. Nie als Platzhalter mit Text-Idee ablegen.
- **Decks:** immer als Kopie von `templates/deck-template.html`
  (1440×810-Stage, Web-Typoskala, statisch, Weitergabe nur als PDF).
  Kopfzeile „NN / Kapitel" links, Fußzeile Wortmarke + Kunde +
  Seitenzahl (jede Slide außer Cover, Zitat und Schluss);
  Headlines max. zwei
  Zeilen, ohne Gedankenstrich (redigieren statt schrumpfen); max.
  drei Textgrößen pro Seite (Headline/Content/Meta).
  **Serien-Slides** (ein Inhalt über mehrere Seiten, z. B. ein
  Tabellen-Inventar): EINE konstante einzeilige Headline (kein
  „Fortsetzung"-Wechsel), festes Spaltenraster (`table-layout:
  fixed` + th-Breiten, identisch auf allen Seiten), `.deck-body`
  auf `flex-start` — beim Blättern steht ALLES. Die 72px-Reserve
  über der Fußzeile (`--deck-pad-b`) ist Sperrzone für Content;
  deck-lint misst Serie, Sperrzone und Cover-Brücken-Naht
  *(Nils, 2026-07-24)*. Cover-Kopf:
  Logo-Brücke nur bei Kundendecks, interne Decks nur Wortmarke
  (`.cover-head-intern`). Layouts ausschließlich aus dem
  Template; Regeln + Sehpflicht: `guidelines/07 §7.8` und Repo-Skill
  `bridgemaker-slides`. Vor der Sehpflicht die messbaren Regeln
  maschinell prüfen: `node ../templates/deck-lint.js <deck>.html`
  (Exit 0 = weiter zum Ansehen). Kundenarbeit entsteht NIE in
  diesem Repo (auch nicht lokal/gitignored) — Projektordner
  außerhalb legt `node templates/new-deck.js <ordner> --kunde
  "Name"` an (komplettes Kit + startklare Template-Kopie).
- **Print (DIN A4):** `tokens/print-tokens.css` als Layer NACH tokens.css
  laden. mm/pt statt px, Baseline-Grid 14pt, Großziffer→Headline 18mm,
  Eyebrow→Headline 12mm, Hairlines 0.4pt statt 1px, Print-Kasane mit
  +15 % Sättigung (Naturpapier), Display-Grade in Inter Display
  (Override im Layer; Laden via rsms.me/inter). Regeln:
  `guidelines/07 §7.9`.
- **Ventures haben eigene Marken** — Bridgemaker-Identität nie ohne
  CD-Freigabe für Ventures nutzen.

## 8. Texte

Vor jeder Textarbeit `guidelines/08-voice.md` (Bridgemaker Tone of
Voice v1.2, verbindlich). Kurzfassung der härtesten Regeln: Per Du / „you";
aktive Verben, kein Konjunktiv; konkret vor abstrakt; belastbare
Zahlen oder keine; Schmuck-Adjektive raus; max. ein Reframe
(„nicht X, sondern Y") pro Text; ein Stilbruch pro Text; verbotene
Phrasen (leverage, unlock, next-gen, game-changer, 🚀 …) tabu;
Headlines ohne Schlusspunkt, sentence-case, keine Ausrufezeichen
außerhalb expliziter UI-Bestätigungen; Aufzählungen als normaler
Satz mit Komma und „und" — das Middot-Zeichen kommt nirgends vor,
Gedankenstriche sparsam (max. einer pro Absatz).

## 9. Produkt-/App-UIs — Material Design 3

Digitale Produkte bauen auf **MD3** mit Bridgemaker-Theming
(`guidelines/09-md3-mapping.md`):

- Farbrollen **explizit mappen, NIE seed-generieren** (primary =
  bm-purple, surface = off-white, dark-primary = lavender-dark …).
- Type-Scale auf `type-*` mappen; Inter, nie Roboto.
- Icons: **Material Symbols Outlined** — einzige Icon-Quelle, auch in
  Decks; einfarbig in der Textfarbe des Kontexts (hell: Charcoal),
  nie in Markenfarben (Regeln: `guidelines/09 §9.8`).
- Pill = MD3 full radius; Inputs `radius-md`.
- Bridgemaker-Elevation statt MD3-Tonal-Elevation; Motion gedeckelt.
- MD3 liefert Anatomie, States, A11y — Bridgemaker liefert Farbe, Typo,
  Shape, Zurückhaltung.
- **Vorrang-Regel:** Bridgemaker-Rezepte (type-*, bm-btn, bm-input,
  Karten, Badges) gelten auch in Produkt-UIs — MD3 füllt NUR die
  Lücken (Dialoge, Menüs, Tabs, Loader, Slider, Switches …).
- **Produkt-Projekte entstehen NIE in diesem Repo:**
  `node templates/new-app.js <ordner> --projekt "Name"` legt den
  Projektordner außerhalb an — Brandbook live als `brand/`
  (Clone statt Kopie, Kopien driften), Session-Start-Hook pullt
  den Kanon und meldet neue Regel-Commits als Vorschlag
  *(Workflow Nils, 2026-07-24; Howto: `howto/produkt-projekte.md`)*.

## 10. Do's & Don'ts

**Do:** tokens.css zuerst laden ✓ Flächenrhythmus nutzen ✓ Wortmarke im
Header ✓ Pill-Buttons ✓ `type-*`-Klassen ✓ Karten sitzen lassen ✓
Grain auf Glas/Gradient ✓ Tone of Voice vor Textarbeit ✓ Platzhalter
statt erfundener Assets ✓ Negativraum atmen lassen ✓ Fragen, wenn unklar.

**Don't:** ganze Seiten in sterilem Reinweiß ❌ Monogramm im Header ❌
Rechtecke statt Pills ❌ farbige Akzent-Kanten ❌ Hover nach Schwarz ❌
rohes Purple auf Dunkel ❌ drei Markenfarben gleichgewichtet ❌
Schachbrett-Alternanz zweier Tönungen ❌ Kasane als Tapete oder hinter
Fließtext ❌ ad-hoc-Typografie ❌ dekorative Illustrationen erfinden ❌
(konstruierte Informationsgrafiken sind Pflicht, kein Verstoß)
Emoji als Bildersatz/in Headlines ❌ AI slop
(Bild wie Text) ❌ Ton oder Headlines improvisieren ❌.

## 11. Wann stoppen und fragen

Vor: anderer Schriftwahl, neuer Markenfarbe, Headline-Copy für
Außenauftritte (Nav, Hero, CTA), KI-Bildern (immer CD-Freigabe),
Stock-Fotos oder Illustrationen, Abweichung von der Pill-Form,
Kasane außerhalb von Hero-/Moment-Flächen, Venture-Projekten.

Alles andere: selbstbewusst aus den Tokens bauen.

---

*Bridgemaker Brand v2.0 — Juli 2026. Destillat aus `guidelines/01–09`;
bei Widerspruch gewinnen die Guidelines, deren Quelle die Website ist.*
