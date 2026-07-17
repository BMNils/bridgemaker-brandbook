---
name: bridgemaker-slides
description: Use when building or editing Bridgemaker HTML slide decks (Slides, Präsentation, Deck, Pitch). Enforces the deck template, the §7.8 rules, slide writing (layout follows the argument), voice editing, built graphics, and the mandatory per-page checklist (Sehpflicht) before anything is delivered.
---

# Bridgemaker Slides

Du baust ein Slide-Deck im Bridgemaker-Look. Der Weg ist nicht
verhandelbar: **Einrichten → Inhalte anfordern → pro Slide
Argumentstruktur bestimmen → Texte redigieren → bauen (inkl.
Grafiken) → Sehpflicht-Checkliste → als PDF abgeben.**

Der Nordstern: Eine Bridgemaker-Slide ist Typografie auf ruhigem
Grund, gegliedert durch Linien. Boxen sind die Ausnahme mit
Bedeutung. Cool, clean, konsistent — und trotzdem komplex und dicht.
Visuelle Referenz: `assets/referenz/website-2026-07/`.

## 1. Grundlage lesen

Falls in dieser Session noch nicht geschehen: `CLAUDE.md` vollständig
lesen, `guidelines/07 §7.8 + §7.11`, vor Textarbeit
`guidelines/08-voice.md`. Alle Werte kommen aus `tokens/tokens.css` —
keine eigenen Farben, Größen oder Klassen.

## 2. Einrichten — Template kopieren, nie frei bauen

Jedes Deck entsteht als Kopie von `templates/deck-template.html`.

**Ablageort — Kundenarbeit nie im Brandbook-Repo** (das Repo ist
öffentlich und projektübergreifend; Kundendaten gehören auch lokal
nicht hinein). Für jedes Kundenprojekt einen Projektordner außerhalb
anlegen und das Kit hineinkopieren — die Ordnerstruktur spiegelt das
Repo, dadurch funktionieren alle relativen Pfade unverändert:

```bash
mkdir -p <projektordner>/{tokens,templates,assets/logos,deck}
cp tokens/tokens.css <projektordner>/tokens/
cp templates/deck-stage.js templates/deck-topo-konturen.js <projektordner>/templates/
cp assets/logos/wordmark-*.svg <projektordner>/assets/logos/
```

Das Deck liegt dann in `<projektordner>/deck/` — einen Ordner tief,
mit relativen Pfaden auf `../tokens/`, `../templates/` und
`../assets/`. Die Layouts im Template sind die freigegebene Menge:
Cover, Agenda, Kapiteltrenner, Hairline-Kolumnen (mit optionalem
Resultat-Band), Content 2/3 + 1/3 mit Infografik, Zahlen (freie
Stats), Principle-Zeilen, Gegenüberstellung, Objekt-Karten,
nummerierte Objekt-Karten, Tabelle, Zitat, Schluss. Slides
duplizieren und umsortieren ist ausdrücklich okay — **neue Layouts
erfinden ist verboten.** Fehlt ein Layout: CD fragen.

## 3. Inhalte anfordern — als letzte Aktion des Setups

Der Start-Prompt enthält bewusst KEINE Inhalte (nur den
Ansprechpartner). Wenn das Kit steht, meldest du dich mit genau
dieser Frage:

> „Jetzt die Inhalte einfügen: direkt als Nachricht (auch mehrere
> Seiten am Stück) oder als Pfad zu einer Datei (z. B.
> `inhalts-master.md` im Projektordner)."

Die Sprache des Decks erkennst du aus den Inhalten (Deutsch oder
Englisch — nie mischen); nur bei echter Mehrdeutigkeit fragen.

## 4. Slide Writing — Layout folgt Argument

Für JEDE Slide, bevor du ein Layout wählst, die Strukturfrage
beantworten (kurz notieren, nicht nur denken):

- **Gleichrangige Punkte?** → Hairline-Kolumnen oder
  Principle-Zeilen, alle uniform behandelt.
- **Ursachen → Resultat / „und die Summe ist"?** → gleichrangige
  Reihe + Resultat-Band (anders exponiert — Rolle = Behandlung).
- **Kontrast/Gegenüberstellung?** → zwei offene Hairline-Spalten.
- **Kennzahlen mit Zielen?** → Tabelle oder Meta-Zeilen (Label
  links, Wert rechts) — Werte NIE als Chips.
- **Zwei, drei tragende Zahlen?** → freie Stats zwischen vertikalen
  Hairlines — kein Chart, keine KPI-Kacheln.
- **Benannte Dinge (Produkte, Cases, Angebote)?** → Objekt-Karten,
  Tönung uniform oder eine je Identität — nie Schachbrett.
- **Zählbare Handlungsaufträge (Risiken, Hebel, Felder)?** →
  nummerierte Objekt-Karten: Display-Ziffer light im
  Familien-Deep-Ton, Surface-Farbcode eine je Identität.
  Musterpaar: Hairlines = Beobachtungen, nummerierte Karten =
  zählbare Handlungsaufträge.
- **Prozess/Zeit?** → Infografik bauen (§7.11) — Substanz erhalten
  (Parallelität, Dauer, Abhängigkeiten), nicht zur Punktlinie
  glätten.

Wenn identische Aussagen sich wiederholen („in Setup zu bestimmen"
an fünf Stellen): einmal als Satz in den Lead, nicht fünf Elemente.

## 5. Texte redigieren — Redigat ist Pflicht

Gelieferte Inhalte werden aktiv in Bridgemaker-Sprache umgeschrieben
(`guidelines/08-voice.md`). **Unantastbar sind Aussage und Struktur
— Pflichtzone ist die Sprache:** Satzbau, Wording, Ton, Zeichen.
Konkret: Du/ihr; aktive Verben; Headlines ohne Schlusspunkt; keine
Meta-/Prozesssätze im Slide-Text; kein Middot; Gedankenstriche max.
einer pro Absatz; kein „→" im Fließtext; verbotene Phrasen raus;
belastbare Zahlen oder Mono-Platzhalter („[ Zitat folgt ]").

## 6. Grafiken bauen — nicht ankündigen

Informationsgrafiken (Diagramme, Timelines, Prozess-Schaubilder,
Charts) werden IMMER gebaut — erster Draft reicht, iteriert wird
gemeinsam. Regeln: `guidelines/07 §7.11` (Typografie-Frage,
Direktbeschriftung, eine Farbreihe bzw. Kategorien-Code, Inter,
keine Methodik-Fußnoten-Krücke). **Konstruieren statt zeichnen**
(§7.11 Punkte 9–12): erst die Invarianten benennen (Mittelachsen,
Äquidistanz, gleiche Lücken, Pitch), dann die Koordinaten daraus
berechnen; viewBox croppt eng; Farben inline per `style` (die
SVG-Falle: Klassen-`fill` schlägt das Attribut). Bei unklarer Datenlage EINE
Inhalts-Rückfrage („Ich baue X mit den Dimensionen Y — fehlt
etwas?"), dann bauen. Der gestreifte Platzhalter ist NUR für
Bild-Assets erlaubt (Fotos, CD-pflichtige Bildwelt, fehlende Logos).

Für Diagramm-Handwerk die mitgelieferten Skills nutzen
(`data-storytelling`, `data-visualization`, `chart-visualization` in
`.claude/skills/`) — sie liefern das WIE; sobald ein Skill eigene
Farben, Schriften oder Größen vorschlägt, gilt ausnahmslos das
Brandbook.

## 7. Sehpflicht — Abhak-Checkliste, nicht verhandelbar

Code-Kontrolle reicht nicht; du musst dein Deck ANSEHEN:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --print-to-pdf=/tmp/deck.pdf \
  --no-pdf-header-footer --virtual-time-budget=8000 \
  "file://<absoluter-pfad>/<deck>.html"
```

Das PDF mit Read **seitenweise visuell** durchgehen und **pro Seite
jede Frage explizit beantworten** (abhaken, nicht überfliegen):

**Pro Seite:**
- [ ] Erklärt das Layout die Argumentstruktur — oder ist es nur ein
      gefülltes Raster?
- [ ] Headline max. zwei Zeilen? (Sonst redigieren — nicht
      schrumpfen; Umbruch nach Sinn per `<br />`, Gedankenstrich
      nie am Zeilenanfang)
- [ ] Max. drei Textgrößen — Headline, Content, Meta (12px)?
      Quellen als `.source-note` im Meta-Register?
- [ ] Kopfzeile „NN / Kapitel" links, Fußzeile Wortmarke +
      Kunde/Projekt + Seitenzahl (jede Slide außer den
      Moment-Slides Cover, Zitat und Schluss)?
- [ ] Grund Off-White? (Farbfläche nur Cover/Trenner/Zitat/Schluss)
- [ ] Trägt jede Box ein benanntes Ding, ein Zitat oder eine
      Illustration? Alles andere → Hairlines.
- [ ] Tönungen: Wiederholung okay, Unterschied nur mit Bedeutung —
      **kein Schachbrett?** Resultat-Elemente anders exponiert?
- [ ] Eine Linien-Ebene? (Keine Unterstreichung + Trennlinie
      gemischt, keine Linien-Listen in Karten)
- [ ] Badges gezählt und klassifiziert? (max. 3; Werte als
      Meta-Zeile, nicht als Chip; Arbeitsstände gar nicht)
- [ ] Charts: Direktbeschriftung, eine Farbreihe bzw. Kategorien-
      Code, Inter, groß genug, keine Methodik-Fußnote nötig?
- [ ] Grafik-Geometrie NACHGERECHNET: Symmetrien und Abstände
      stimmen, keine Kollision Linie ↔ Text, ein Label-Register
      pro Ebene, viewBox croppt eng, Balken scharfkantig oder
      4px Lücke?
- [ ] Arbeitsstände („folgt nach Freigabe") von der Slide in die
      Speaker Notes verschoben?
- [ ] Kein Mono außer echtem Code/Platzhalter-Captions? Ziffern in
      Inter?
- [ ] Raum besetzt — unteres Drittel nicht ohne Absicht leer, rechte
      Hälfte nicht leer?
- [ ] Text: Du/ihr, keine Meta-/Prozesssprache, kein Middot, max.
      ein Gedankenstrich pro Absatz, Headlines ohne Schlusspunkt?
- [ ] Kontrast: alles lesbar (kein Tint auf Tint, kein rohes Purple
      auf Dunkel)?
- [ ] Hurenkinder/gequetschte Texte?

**Übers ganze Deck (Blätter-Test):**
- [ ] Alle Seiten schnell durchschalten — springt die Headline, die
      Kopfzeile, die Fußzeile oder die Seitenzahl? (Muss stehen wie
      angenagelt)
- [ ] Kopf- UND Fußzeile auf jeder Slide außer Cover, Zitat und
      Schluss, an derselben Position?
- [ ] Eine Farbwelt pro Kapitel, Trenner kündigt sie an? Mehrere
      Trenner: Band-Farbwelt und Linienbild (Seed) variieren?
- [ ] Gleiche Bedeutung = gleiche Gestalt? (Badges, Zitat-
      Attributionen, Listenanfänge, − vs. -, Chip-Stile)
- [ ] Wortmarke auf Cover und Schluss; Schluss ist Statement + 
      dezente Kontaktzeilen mit VERIFIZIERTER E-Mail?

Funde korrigieren, erneut rendern. Erst abgeben, wenn ein kompletter
Durchgang ohne Befund ist — und das explizit sagen.

## 8. Abgabe

Weitergegeben wird **nur das PDF** (Drucken → als PDF sichern liefert
eine Seite pro Slide). Die HTML-Datei funktioniert nur im Projekt-Kit
bzw. Repo und wird nie einzeln verschickt. **Kundendateien nie ins
Brandbook-Repo legen oder committen** — Kundenarbeit lebt im
Projektordner; `examples/` ist ausschließlich für freigegebene,
neutrale Muster.
