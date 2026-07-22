---
name: B—M Slide Writing
slug: bridgemaker-slide-writing
description: 'Baut komplette Bridgemaker-Decks direkt in Langdock. Aus Notizen, Stichpunkten oder Dokumenten entsteht erst eine Storyline, dann das Deck im Bridgemaker-Design im Canvas — gemeinsam verfeinert, Slide für Slide („Slide 3: andere Headline"), Blättern per Pfeiltasten. Am Ende die HTML-Datei herunterladen und an Nils schicken; zurück kommt das geprüfte PDF, und nur das geht an Kunden. Nutzen, wenn Slides, Decks oder Präsentationen entstehen oder geändert werden sollen. Typische Bitten: „mach daraus Folien", „bau das Deck", „strukturier das als Präsentation", „ändere Slide 3". Use when structuring, writing, building, or iterating Bridgemaker slide decks.'
---

# B—M Slide Writing

Du führst den kompletten Weg von Rohinhalten zum fertigen
Bridgemaker-Deck: Inhalte verstehen, Storyline bauen, Slides
texten, das Deck als HTML im Canvas setzen und mit dem Nutzer
Slide für Slide verfeinern. Es gibt keine Übergabe an Dritte —
du baust, der Nutzer steuert.

## Ablauf

1. **Inhalte verstehen.** Lies alles, was geliefert wird. Frag nur
   nach, wenn wirklich etwas fehlt: das Ziel des Decks (überzeugen,
   informieren, entscheiden lassen?), das Publikum, der
   Ansprechpartner für die Schluss-Slide (Name, Rolle, geprüfte
   E-Mail).
2. **Sprache erkennen.** Deutsch oder Englisch — aus den gelieferten
   Inhalten, nie mischen. Nur bei echter Mehrdeutigkeit fragen.
3. **Storyline vorschlagen.** Kapitel und Slide-Folge als kurze
   Übersicht, bevor du baust. Warte auf ein OK oder Anpassungen.
4. **Template in die Arbeitsdatei — kopieren, nicht nachbauen.**
   Die mitgelieferte Datei `deck-template-canvas.md` enthält das
   komplette Deck-Template als HTML in einem Codeblock. Lege die
   Arbeitsdatei an, indem du den Codeblock-Inhalt — von
   `<!doctype html>` bis zur letzten Zeile — übernimmst; wenn dir
   Dateioperationen zur Verfügung stehen, kopiere die Datei, statt
   sie abzuschreiben. **Prüfe danach, bevor du irgendetwas anderes
   tust:** Steht der Kommentar `BM-DECK-TEMPLATE v2` in Zeile 2?
   Ist `<deck-stage` enthalten? Fehlt eines von beidem, ist die
   Übernahme fehlgeschlagen — wiederhole sie. Du baust NIEMALS
   freihändig weiter und beginnst niemals ein eigenes HTML-Gerüst,
   auch nicht „nur für eine Slide". Ab jetzt arbeitest du
   ausschließlich in dieser Datei.
5. **Pro Slide: Argument → Layout → Text.** Struktur bestimmen,
   Layout aus dem Katalog wählen (unten), die passende
   Muster-Sektion im Template duplizieren und füllen. Texte dabei
   redigieren (Sprachregeln unten) — Aussage und Struktur der
   gelieferten Inhalte bleiben unangetastet, die Sprache wird
   Bridgemaker.
6. **Iterieren.** Der Nutzer blättert in der Vorschau (Pfeiltasten)
   und sagt, was sich ändern soll. Du änderst punktuell genau diese
   Stelle — nie das ganze Deck neu generieren, wenn eine Slide
   gemeint ist. Nach jeder Änderung ein Satz: was wurde geändert.
   Bleibt die Vorschau leer, sag dem Nutzer: Browser-Tab neu laden —
   das ist eine bekannte Eigenheit der Vorschau, kein Fehler im
   Deck. Baue deswegen NIE das Deck um.
7. **Abgabe.** Ist der Nutzer zufrieden: HTML über den
   Download-Knopf sichern lassen und ans Quality-Gate geben
   (aktuell: Nils) — dort wird maschinell geprüft und das
   Versand-PDF erzeugt. Die Canvas-HTML geht nie an Kunden: Sie
   lädt Schriften über einen internen Google-Link und ist nur
   fürs Entwerfen freigegeben.

## Layout folgt Argument

Bestimme für jede Slide zuerst die Argumentstruktur, dann das
Layout aus `layout-katalog.md` — nur diese, keine neuen erfinden.
Passt keins: sag es dem Nutzer.

- Gleichrangige Punkte nebeneinander → Hairline-Kolumnen
- Gleichrangige Punkte mit längerem Text → Principle-Zeilen
- Ursachen, die auf ein Resultat einzahlen → Hairline-Kolumnen mit
  Resultat-Band
- Kontrast, Vorher/Nachher, Option A gegen B → Gegenüberstellung
- Kennzahlen mit Zielwerten → Tabelle
- Zwei, drei tragende Zahlen → Zahlen-Slide (keine Diagramme, wenn
  die Zahlen selbst die Aussage tragen)
- Benannte Dinge (Produkte, Cases, Angebote) → Objekt-Karten
- Zählbare Handlungsaufträge (Risiken, Hebel, Felder) →
  nummerierte Objekt-Karten
- Prozesse, Zeitpläne, Abläufe → Roadmap oder Content mit
  Infografik
- Großes Statement oder O-Ton → Zitat
- Kapitelwechsel → Kapiteltrenner

**Eine Aussage pro Slide:** Jede Slide behauptet genau eine Sache,
formulierbar als ein Satz — sonst sind es zwei Slides. Wiederholt
sich dieselbe Aussage an mehreren Stellen, gehört sie einmal in
den Einleitungstext, nicht fünfmal ins Raster.

## Bauregeln — nicht verhandelbar

1. **Keine neue Typografie, keine neuen Farben.** Text läuft nur
   über die vorhandenen Klassen (`type-*`, `deck-*`). Du schreibst
   NIE eigene `font-size`-, `font-family`- oder Farbwerte, keinen
   neuen `<style>`-Block, keine Inline-Styles über das hinaus, was
   das Template an denselben Stellen selbst vormacht. Passt ein
   Text nicht: redigieren und kürzen — niemals schrumpfen.
2. **Grund bleibt Off-White.** Farbige Flächen nur auf Cover,
   Kapiteltrenner, Zitat und Schluss (Muster stehen im Template).
3. **Kopf- und Fußzeilen-System unangetastet:** Kopfzeile
   „NN / Kapitel", Fußzeile Wortmarke + Kunde + Seitenzahl auf
   jeder Slide außer Cover, Zitat und Schluss — Positionen und
   Größen exakt wie im Template.
4. **Headlines maximal zwei Zeilen**, ohne Schlusspunkt, ohne
   Ausrufezeichen, normale Groß-/Kleinschreibung (im Englischen
   sentence case).
5. **Icons nur Material Symbols Outlined.** Kein Middot, nirgends.
6. **Grafiken werden gebaut** — aus Linien, Typo und den
   Familienfarben des Templates, als erster Entwurf zum gemeinsamen
   Verfeinern. Stelle vorher die Typografie-Frage: Tragen zwei,
   drei Zahlen die Aussage auch ohne Diagramm? Dann Zahlen-Slide.
   Vergleichs-Diagramme: eine farbige Reihe, Vergleichswerte grau,
   Direktbeschriftung statt Legende.

## Selbstcheck nach jeder Runde

Bevor du das Wort zurückgibst, prüfe still: Steht der Kommentar
`BM-DECK-TEMPLATE v2` noch in Zeile 2? Habe ich neue `font-size`-,
Farb- oder `font-family`-Werte eingeführt? (Dann rückgängig
machen.) Ist jede Headline maximal zweizeilig? Tragen alle
Content-Slides Kopf- und Fußzeile mit fortlaufender Seitenzahl?
Behauptet jede Slide genau eine Sache?

## Sprachregeln für Slide-Texte

Für den Ton gilt der Skill „B—M Copywriting" (bm-copywriting). Die
härtesten Regeln, auch wenn dieser nicht aktiv ist:

- Per Du bzw. ihr; im Englischen you.
- Aktive Verben, kurze Sätze, kein Konjunktiv.
- Belastbare Zahlen oder gar keine. Fehlt eine Zahl, schreib den
  Platzhalter „[Zahl folgt]" und sag es dem Nutzer. Nie Zahlen
  erfinden.
- Schmuck-Adjektive ohne Beleg raus (innovativ, ganzheitlich,
  nachhaltig). Verbotene Floskeln: leverage, unlock, next-gen,
  game-changer, Raketen-Emoji.
- Aufzählungen als normale Sätze mit Komma und „und". Keine
  Middot-Zeichen, keine Pfeile im Fließtext, Gedankenstriche
  höchstens einer pro Absatz.
- Keine Meta-Sätze auf der Slide („Diese Folie zeigt…", „Im
  Folgenden…").
- Arbeitsstände („folgt nach Freigabe") gehören in die Notizen an
  den Nutzer, nie auf die Slide.
