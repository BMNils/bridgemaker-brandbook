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
`rose-tint`+`deep-berry`. Die frühere Mono-Micro-Variante für technische
Labels ist gestrichen *(Website, 2026-07-16)* — auch technische Labels
laufen in Inter (`type-caption`/`type-micro`). Mehr als 3 Badges in
einem View sind meist ein Layout-Problem.

**Badge-Vokabular** *(Nordstern-Review, 2026-07-17)* — eine Bedeutung =
eine Gestalt, dokumentweit konsistent:

1. **Semantik-Badge** („Quick-Win", „Neu"): Tint-Hintergrund +
   Deep-Text wie oben, Inter. Dieselbe Aussage trägt im gesamten
   Dokument exakt dieselbe Farbe und Form.
2. **Themen-Tag** (Referenz: Hebel-Chips der Website): Outline in
   einer Familienfarbe, max. 3 pro Einheit, nie als Listenersatz.
3. **Werte und Ziele** („Ziel: < 2 Wochen"): **nie als Badge.**
   Werte gehören in die Meta-Zeile — Label links, Wert rechts.
4. **Arbeitsstände** („folgt nach Freigabe"): **nie als
   Layout-Element.** Gehören auf eine Notizen-Seite oder in eine
   einheitliche Meta-Zeile.

Badges sind für Sand- und Weiß-Grund rezeptiert; auf getönten
Flächen (Tint auf Tint) haben sie nichts verloren.

## 7.7 Bildsprache

> ⚠️ **Work in progress** *(Nils, 2026-07-14)*: Das Editorial-Foto-Konzept
> dieses Abschnitts ist überholt — die Website arbeitet heute ohne
> Fotografie: feine Linien im topografischen Stil auf Gradients und
> konstruierte Vektor-Icons. Das neue Bildkonzept ist in Klärung.
> Bis dahin: keine Bildentscheidungen ohne CD-Freigabe; der gestreifte
> Platzhalter mit Monospace-Caption bleibt der Standard für fehlende
> Assets. Der folgende Alt-Stand dient nur noch als Referenz.

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

- **Bild-Asset fehlt?** (Foto, freie Illustration, CD-pflichtige
  Bildwelt, fehlendes Logo): Gestreiften Platzhalter-Block mit
  Monospace-Caption verwenden, die beschreibt, was dort hingehört.
  Nie eine dekorative Illustration erfinden.
- **Informationsgrafiken sind kein Bild-Asset** *(2026-07-17)*:
  Diagramme, Timelines, Prozess-Schaubilder und Charts aus der
  Marken-Formensprache (Linien, Kreise, Typografie, Familienfarben,
  Material Symbols) werden IMMER gebaut — als erster Draft, der
  gemeinsam iteriert wird. Nie als Platzhalter mit Text-Idee
  abgelegt (Regeln: §7.11).
- **KI-generierte Bilder sind erlaubt**, wenn sie den editorialen
  Standard erfüllen und vom Creative Director freigegeben sind. Der
  Maßstab ist nicht „wurde es von KI gemacht?", sondern „fühlt es sich
  an wie Bridgemaker?"
- ❌ Stock-Handshakes, Menschen, die auf Screens zeigen, flache
  Vektor-Figuren, Emoji als Bildersatz, AI slop (Default-KI-Ästhetik als
  Ersatz fürs kreative Konzept).

## 7.8 Slide-Decks

Decks sind **statische Lese-Artefakte**: gebaut als HTML auf einer
festen **1440×810-Stage** (`templates/deck-stage.js` skaliert verlust-
frei). **Weitergabe nur in zwei Formaten, beide aus
`templates/deck-pack.js`** *(2026-07-17)*: das **PDF** (`--pdf`,
Headless-Chrome-Render, pixelidentisch, eine Seite pro Slide,
ohne Stellschrauben) und bei Bedarf die **versandfertige
Einzeldatei** `<deck>-versand.html` (Tokens, Stage-Skript, Fonts,
Logos und Bilder inline — keine Pfade, die brechen können, keine
externen Aufrufe, läuft offline). Der Projektordner und die rohe
Deck-HTML werden nie verschickt. Schnellweg für Geübte: In
**Chrome** liefert Drucken → „Als PDF speichern" dank der
`@page`-Regel im Stage-Skript dasselbe Ergebnis — Bedingungen:
Hintergrundgrafiken AN, Kopf- und Fußzeilen AUS, Skalierung
Standard. Safari und Firefox sind fürs Deck-PDF tabu (sie
ignorieren die `@page`-Größe und zwängen die Stage auf
Papierformate). **Fonts lokal:** Decks laden Inter,
JetBrains Mono und Material Symbols aus `assets/fonts/`
(Compliance — der Google-Fonts-Link ist in Decks tabu,
*2026-07-17*). Keine Animationen, kein kasane-drift, keine
Hover-Effekte. (Stage-Neufassung 16.07.2026 — ersetzt die frühere
1920×1080-/24px-Regel.)

- **Nordstern** *(2026-07-17)*: Eine Bridgemaker-Slide ist
  Typografie auf ruhigem Grund, gegliedert durch Linien. **Boxen
  sind die Ausnahme mit Bedeutung** — benanntes Ding (Produkt,
  Case, Angebot), Zitat oder Bühne für eine Illustration. Reine
  Information (Listen, Zahlen, Vergleiche, Prozesse, Prinzipien)
  läuft über Hairlines, Spalten und Abstände. Visuelle Referenz:
  `assets/referenz/website-2026-07/`.
- **Slide Writing — Layout folgt Argument:** Vor jedem Layout die
  Strukturfrage: gleichrangige Punkte? Kontrast? Ursachen →
  Resultat? Tabelle? Benannte Dinge? Das Layout bildet genau diese
  Struktur ab — gleichrangig heißt uniform behandelt (dieselbe
  Typo-Stufe, auch im 50/50-Zweispalter), ein Resultat wird anders
  exponiert (Resultat-Band), ein Prozess läuft. Musterpaar:
  Hairline-Kolumnen = Beobachtungen, nummerierte Objekt-Karten =
  zählbare Handlungsaufträge. Ein gefülltes Raster ist noch keine
  Slide.
- **Template-Pflicht:** Jedes Deck entsteht als Kopie von
  `templates/deck-template.html` — einen Ordner tief im Repo oder,
  bei Kundenarbeit, im Projekt-Kit außerhalb des Repos (Kit-Prinzip
  im Skill `bridgemaker-slides`; Kundendaten nie ins Brandbook).
  Die dortigen Layouts — Cover, Agenda, Kapiteltrenner,
  **Hairline-Kolumnen (mit optionalem Resultat-Band)**, Content
  2/3 + 1/3 mit gebauter Infografik, Zahlen (freie Stats),
  Principle-Zeilen, Gegenüberstellung, Objekt-Karten, nummerierte
  Objekt-Karten, Tabelle, Zitat, Schluss — sind die freigegebene
  Menge. Slides duplizieren
  und umsortieren ja; neue Layouts erfinden nein. Fehlt ein
  Layout: CD fragen. Vollbeispiel (16 Seiten, neutralisiert):
  `examples/beispiel-kundendeck.html`.
- **Feste Kopfzone — die Headline steht:** Eyebrow-Kopfzeile und
  Headline beginnen auf jeder Content-Slide an exakt derselben
  Position (`--deck-title-y` im Template); der Inhalt füllt den
  Raum darunter (`.deck-body`), nie umgekehrt. Blätter-Test in der
  Sehpflicht: Beim Durchschalten darf nichts springen.
- **Eine Linien-Ebene pro Fläche:** Die Hairline hat pro Slide
  genau einen Job — Spalten eröffnen ODER Zeilen trennen, nie
  beides ineinander. Sie bindet sich durch Nähe an ihren Inhalt;
  Zwischenüberschriften trennen sich durch Raum, nicht durch
  eigene Striche. Nie Linien-Listen in Karten stapeln (Box ODER
  Linie — ein Inhalt, ein Gliederungsmittel).
- **Typografie = Web:** die normalen `type-*`-Klassen in Web-Größen
  (Basis 16px, Contentbreite 1200px wie der Web-Container). Der
  Deck-Layer pinnt nur die fluiden `clamp()`-Stufen auf feste Werte,
  damit Bildschirm und PDF identisch sind. Keine eigenen Größen.
  Hurenkinder vermeiden: Headlines `text-wrap: balance`, Fließtext
  `pretty` — notfalls umformulieren.
- **Grund konstant Off-White.** Hintergrundwechsel nur mit Bedeutung:
  Kapiteltrenner (Kapitelband `bg-kasane-band-*` + große Ziffer
  light + topografische Konturen in Hellgrau `#C5C0B8`),
  Cover/Schluss (dunkel), max. eine Moment-Slide (Zitat).
- **Moment-Flächen** *(Neufassung 2026-07-17)*: Cover = Charcoal +
  `bg-kasane-cta` (statisch) + topografische Konturen — rechts
  dicht, links offen zum Text, wie der Website-Hero. Schluss =
  Footer-Verlauf (custom, volle Stärke, im Template hinterlegt;
  der Token `bg-contact-cta` entspricht NICHT dem Website-Footer)
  + konzentrische Konturen um den Content. Topo-Linien sind
  Blickführung um den Content, nie Deko-Gewusel; Generator:
  `templates/deck-topo-konturen.js` (cover/schluss). Dazu die
  Kapitelbänder `bg-kasane-band-*` mit hellgrauen Konturen. Bei
  mehreren Kapiteln variieren die Trenner: nächste Band-Farbwelt
  + eigenes Linienbild (Konturen-Seed = Basis + Kapitelnummer) —
  nie zwei identische Trenner hintereinander. Andere vibrante
  Website-Rezepte (`bg-commercial-os`, `bg-kasane-plum` …) sind
  in Decks tabu. Auf Dunkel: Headlines `--off-white`, Fließtext
  `--soft`.
- **Kopf- und Fußzeile als System** *(Neufassung 2026-07-17 —
  ersetzt „keine Fußzeile")*: Kopfzeile = NUR das Kapitel-Label
  „NN / Kapitel" links (`type-eyebrow`, neutral). Fußzeile =
  Wortmarke (14px) + Kunde/Projekt links (4px Gap — halbe
  Rasterstufe, optischer Ausgleich zum Geviertstrich-Innenabstand
  der Wortmarke; der Kundenname im Wortmarken-Schwarz und
  semi-bold — Kunde und Bridgemaker stehen gleichwertig),
  Seitenzahl rechts (12px Inter Regular in `--mid`, CSS-Counter). Beide auf jeder
  Slide außer den Moment-Slides Cover, Zitat und Schluss, immer
  an exakt derselben Position (`--deck-head-y`, `--deck-foot-y`);
  `--deck-pad-b` hält die Mindestluft zwischen Inhalt und
  Fußzeilen-Typo. Auf dunklen Slides mit Fußzeile trägt sie die
  weiße Wortmarke.
- **Headlines: max. zwei Zeilen.** Löst eine Headline die dritte
  Zeile aus, wird redigiert — nicht geschrumpft und nicht mit
  willkürlichen max-widths gequetscht. Umbruch nach Sinn per
  `<br />` (dann `text-wrap: initial`); Gedankenstrich nie am
  Zeilenanfang. Im Fließtext Gedankenstriche ganz vermeiden
  (AI-Slop-Signal); in Headlines als Strukturmittel okay.
- **Max. drei Textgrößen pro Seite:** Headline / Content / Meta
  (12px). Quellen und Fußnoten laufen im Meta-Register
  (`.source-note`: 12px, rechtsbündig, `--mid`; in Karten
  `--light` und per `margin-top: auto` am Boxboden, Sternchen
  verknüpft Label\* ↔ \* Fußnote; Grafik-Fußnoten mittelachsig)
  — nie als eigene Stufe.
- **Kontrast auf Off-White:** Typo eher dunkler (`--dark` statt
  `--mid` für Fließtext, `--mid` statt `--light` für Eyebrows),
  Trennlinien `--border-subtle` — die Haarlinie trennt nur auf Weiß.
- **Karten:** Füllungen Weiß/Mauve/Sage — Sand und Stone sind auf
  Off-White Ton-in-Ton und dort tabu (Ausnahme: der Vierer-
  Farbcode nummerierter Objekt-Karten, dessen `card-clean`-
  Anatomie sie per Inset-Haarlinie vom Grund trennt). Karten
  umschließen ihren Inhalt eng — Leerraum lebt auf Slide-Ebene,
  nicht in aufgeblasenen Boxen; Karten-Reihen mit gemeinsamer
  Unterkante und gleicher Höhe (min-height im 8px-Raster).
  **Tönung braucht Bedeutung**
  *(ersetzt „nie zweimal dieselbe Surface", 2026-07-17)*: Dieselbe
  Surface darf sich frei wiederholen — Uniformität ist Ruhe.
  Unterschiedliche Tönungen nur, wenn der Unterschied etwas sagt
  (Identität, Kategorie, Rolle); Schachbrett-Alternanz zweier
  Tönungen ist verboten. Summen-/Resultat-Elemente werden anders
  exponiert als die Reihe darüber (Rolle = Behandlung — Gestalt
  des Resultat-Bands: Mauve-Tint, Eyebrow und Satz in Deep-Plum,
  Satz als `type-body` bold, nie `type-h4`, nie Charcoal-Kachel).
- **Raum nutzen — auch vertikal:** ab vier Listenpunkten
  zweispaltig denken; keine Slide, deren rechte Hälfte leer bleibt,
  und keine, deren unteres Drittel ohne Absicht leer bleibt — der
  Inhalt verteilt sich über die verfügbare Höhe (macht
  `.deck-body` im Template automatisch), statt oben zu kleben.
- **Farbe rationiert:** eine Farbwelt pro Slide. Farbe kommt aus
  Inhalten — Badges, Zielwerte, Icons, der Gedankenstrich als
  Verbinder (z. B. im Gegenüberstellungs-Ledger) — nie aus Eyebrows
  oder Kapitel-Farbcodes. Einfache Daten-SVGs (Balken, Zeitachsen)
  in EINER Farbfamilie.
- **Badges in Decks:** Semantik-Badges sitzen rechtsbündig am
  Zeilenende (Flex, baseline) — nie im Textfluss; max. 3 pro
  Seite (Vokabular: §7.6).
- **Große Ziffern** (KPIs, Karten-Nummern): `type-display` mit
  `font-weight: 300` — immer light. Nummerierte Objekt-Karten:
  Display-Ziffer im Familien-Deep-Ton der Kartenfarbe (Neutrals:
  Charcoal), Surface-Farbcode eine je Identität
  (mauve/sage/sand/stone).
- **Arbeitsstände nie auf die Slide** („folgt nach Freigabe",
  „wird noch geklärt"): Sie gehören in die Speaker Notes
  (`script#speaker-notes`, liest `deck-stage.js`) — nie ins
  Layout.
- **Referenz-Visuals** (Dashboards, Produkt-Screens) sind
  contentverwoben, nie Showcase-Solo-Slide: Bausteine/Argument
  links, Device-Mockup rechts, Bildunterschrift zentriert unterm
  Bild. Das Bild selbst ist ein Bild-Asset — fehlt es, gilt die
  Platzhalter-Regel (§7.7).
- **Grafiken bauen, nicht ankündigen** *(ersetzt die
  Platzhalter-Regel, 2026-07-17)*: Wo ein Diagramm oder Schaubild
  hilft, wird es als Informationsgrafik gebaut — erster Draft
  reicht, iteriert wird gemeinsam (Regeln: §7.11). Der gestreifte
  Platzhalter bleibt nur für Bild-Assets (Fotos, CD-pflichtige
  Bildwelt, fehlende Logos/Daten).
- **Icons:** nur Material Symbols Outlined (s. `09 §9.8`), Farben aus
  einer Familie, funktional statt dekorativ.
- **Wortmarke** auf Cover und Schluss (`assets/logos/`). Die
  Schluss-Slide ist ein Statement, keine Content-Seite: EIN Satz
  in direkter Anrede („ihr"), bold und fast leer; Ansprechpartner
  klein und dezent als Textzeilen OHNE Eyebrow (Name, Rolle,
  **verifizierte** E-Mail — keine erfundenen Adressen). Keine
  Glass-Karte, kein Foto-Platzhalter, keine To-do-Listen
  *(2026-07-17)*.
- **Voice — Redigat ist Pflicht** *(2026-07-17)*: Gelieferte
  Inhalte werden aktiv in Bridgemaker-Sprache redigiert (Satzbau,
  Wording, Ton nach `08-voice.md`) — die Aussage und die Struktur
  dahinter bleiben unangetastet, die Sprache wird unsere.
  Durchgehend Du/ihr, Headlines ohne Schlusspunkt, keine
  Meta-/Prozesssätze im Slide-Text, kein Middot, Gedankenstriche
  sparsam (max. einer pro Absatz), kein „→" im Fließtext, keine
  Sprachmischung; belastbare Zahlen oder Mono-Platzhalter
  („[ Zitat folgt ]").
- **Sehpflicht:** Vor jeder Abgabe das Deck per Headless-Chrome als
  PDF rendern, jede Seite ansehen und gegen diese Liste prüfen —
  korrigieren und erneut rendern, bis nichts mehr auffällt.
  Workflow im Repo-Skill `bridgemaker-slides`.

## 7.9 Print-Publikationen (DIN A4)

Für gedruckte Broschüren, Bookazines und Reports gilt ein eigener
Token-Layer: **`tokens/print-tokens.css`**, geladen NACH `tokens.css`.
Validiert am Bookazine v1 (Druck: Pinguin Druck Berlin, 2026).

- **Format:** DIN A4 Hochformat (210×297mm). Einheiten: Format und
  Spacing in **mm**, Typografie in **pt** — nie px im Print.
- **Schrift:** Display-Grade laufen im Print in **Inter Display**
  (`--font-display`-Override im Print-Layer; Ausnahme-Regel in
  Kapitel 03 §3.1). Body/UI bleiben Inter. Mono nur noch für echte
  Code-Darstellung und Platzhalter-Captions *(seit 2026-07-16)* —
  Folio, Running Header und TOC-Kapitelnummern laufen in Inter.
  Hinweis: Bookazine v1 wurde noch mit Mono-Folio validiert; die
  Inter-Folios sind beim nächsten Druck zu prüfen.
- **Satzspiegel:** symmetrisch, 16mm links/rechts, 14mm oben (Running
  Header), 18mm unten (Folio). Satzbreite 178mm, 12-Spalten-Raster mit
  4mm Gutter (`.pp-grid` + `.pp-col-*`).
- **Baseline-Grid:** 14pt vertikaler Takt; Body 10pt/14pt sitzt exakt
  darauf, Absatzabstand = genau eine Baseline. Headlines dürfen
  pragmatisch brechen.
- **Print-Type-Scale** in pt (`--pp-text-*`): Numeral 220pt (Großziffer
  auf Openern, eigener Block), Display-XL 96pt (Cover, einmal pro
  Werk), Display-L 72pt, Display 56pt, H1 36pt, H2 24pt, H3 16pt,
  H4 12pt, Lead 13pt, Body 10pt, Small 9pt, Caption 8pt, Eyebrow
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
  Header + Folio in Inter-Versalien (+0.10em), Platzhalter wie am
  Bildschirm gestreift mit Monospace-Caption.

## 7.10 Venture-Projekte

**Venture-Marken sind eigenständig definiert.** Bridgemakers visuelle
Identität nicht ohne ausdrückliche Freigabe des Creative Directors für
Ventures wiederverwenden. Bei Venture-Aufträgen: nach den Brand-Assets
des Ventures fragen oder bestätigen lassen, dass Bridgemaker direkt
verwendet werden soll.

## 7.11 Charts & Diagramme

*(Neu 2026-07-17, Nordstern-Review. Referenz:
`assets/referenz/website-2026-07/was-wir-bauen-06-chart-direktbeschriftung.png`.)*

**Ein Chart ist eine Aussage, keine Ausstattung.**

1. **Erst die Typografie-Frage:** Trägt die Aussage in zwei, drei
   Zahlen? Dann freie Stats zwischen vertikalen Hairlines
   (`type-stat`, Caps-Label, ein Erklärsatz) statt Chart — das
   Track-Record-Muster der Website. Ein Chart muss mehr zeigen als
   drei Werte, sonst ist es Deko.
2. **Selbsterklärungs-Test:** Ein Chart, das eine Methodik-Fußnote
   braucht, um lesbar zu sein, ist gescheitert — Charttyp wechseln
   oder zur Typografie zurückkehren.
3. **Vergleichs-Charts** (Verläufe, Balken, Datenreihen): EINE
   farbige Reihe aus einer Familienfarbe; Vergleichsreihe grau und
   gepunktet; **Direktbeschriftung statt Legende** (Label an der
   Linie/am Balken); eine Baseline-Hairline; keine Gitternetze,
   keine Achsenkästen; nichts in Balken hineinquetschen.
4. **Struktur-Diagramme** (Gantt, Kategorien-Karten, Prozessbilder):
   Familienfarben als Kategorien-Code — eine Farbe pro Kategorie,
   konsistent durchgehalten, mit Legende. Das ist Tönung MIT
   Bedeutung und kein Verstoß gegen die Ein-Familien-Regel (die
   gilt für Datenreihen).
5. **Beschriftung in Inter** (`type-caption`/`type-small`), nie
   Mono. Zahlen im Chart sind Inter wie überall.
6. **Größe:** Ein Chart, das die Slide trägt, bekommt ihre Fläche.
   Kein Briefmarken-Chart auf leerer Seite.
7. **Substanz vor Stil:** Stilisierung vereinfacht die Mittel
   (Linien, Luft, Farben), nie die Substanz. Informations-
   dimensionen, die das Argument tragen — Parallelität, Dauer,
   Abhängigkeiten, Größenverhältnisse — bleiben erhalten. Ein
   Gantt wird veredelt, nicht zur Punktlinie reduziert.
8. **Eine Rückfrage vor dem Bau:** Sind Datenlage, Dimensionen oder
   Aussage unklar, die geplante Grafik in einem Satz ansagen und
   bestätigen lassen („Ich baue X mit den Dimensionen Y — fehlt
   etwas?"). Gefragt wird nach **Inhalt**, nie nach Form (die steht
   im Kanon) — und danach wird in jedem Fall gebaut (§7.7:
   Informationsgrafiken sind kein Bild-Asset).
9. **Konstruieren statt zeichnen** *(2026-07-17)*: Erst die
   Invarianten benennen — Mittelachsen, Äquidistanz, gleiche
   Lücken, Pitch —, dann die Koordinaten daraus BERECHNEN.
   Ausrichtung entsteht übers Koordinatensystem, nie durch
   Pixel-Schieben einzelner Elemente. Symmetrische Formen bleiben
   symmetrisch; weiße Flächen ohne Outline; ein Label-Register
   pro Ebene.
10. **Geometrie-Regeln:** Die `viewBox` croppt eng (kein
    Eigen-Leerraum), `preserveAspectRatio="xMinYMin meet"` — die
    Grafik füllt ihre Spalte über die Geometrie, nicht übers
    Skalieren. Balken treffen Linien scharfkantig ODER mit 4px
    Lücke — nie fast. Die Baseline spannt exakt die
    Balkenspannweite; Balken-Werte mittig über dem Balken
    (`text-anchor: middle` auf Balkenmitte). Legenden: gleiche
    LÜCKEN zwischen den Einträgen, nicht gleicher Pitch.
11. **Timelines und Gantt:** Label-Zone und Chart-Zone strikt
    getrennt — Markerlinien kreuzen nie Labels. Bar-Label am
    Balkenende (+10px) in der Familien-Deep-Farbe seiner
    Kategorie; fehlt rechts der Platz, end-anchored nach links.
    Farbabstufung NUR mit benannter Bedeutung (z. B. kräftig =
    erste Welle, 40 % = Folgewelle — die Regel steht in Legende
    oder Fußnote). Wir sind keine Dekorateure.
12. **SVG-Handwerk:** CSS-Klassen-`fill` schlägt das
    `fill`-Attribut — Farben inline per `style` setzen. Nach dem
    Bau die Geometrie NACHRECHNEN: Symmetrien, Abstände,
    Kollisionsfreiheit Linie ↔ Text, Register, viewBox-Crop
    (Geometrie-Block der Sehpflicht im Skill
    `bridgemaker-slides`).
