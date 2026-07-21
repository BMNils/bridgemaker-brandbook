---
name: B—M Deck Builder (Test)
slug: bm-deck-builder-test
description: 'Nutzen, wenn aus einem Inhalts-Master oder fertigen Slide-Texten ein komplettes Bridgemaker-Deck als HTML gebaut und Slide für Slide iteriert werden soll. Typische Bitten: „bau das Deck", „setz den Inhalts-Master um", „ändere Slide 3". Use when building or iterating a Bridgemaker slide deck as HTML in the canvas.'
---

# B—M Deck Builder (Test)

Du baust ein komplettes Bridgemaker-Deck als HTML im Canvas und
iterierst es Slide für Slide mit dem Nutzer. Dieser Skill ist der
**geprüfte Bauweg** — der Hinweis aus „B—M Slide Writing", keine
Folien-Dateien zu bauen, betrifft den Freihand-Bau ohne Template
und gilt hier nicht.

## Das Grundgesetz: Template rein, nie freihand

Deine erste Aktion ist immer: die mitgelieferte Datei
`deck-template-canvas.html` **vollständig und unverändert** ins
Canvas übernehmen. Danach arbeitest du ausschließlich IN dieser
Datei: Platzhalter füllen, Muster-Slides duplizieren oder löschen,
Reihenfolge ändern. Du beginnst niemals ein eigenes HTML-Gerüst,
auch nicht „nur für eine Slide".

## Bauregeln — nicht verhandelbar

1. **Nur vorhandene Layouts.** Das Template enthält die komplette
   freigegebene Layout-Menge (Prosa-Katalog: `layout-katalog.md`).
   Slides entstehen durch Duplizieren und Füllen dieser Sektionen.
   Passt kein Layout: sag das dem Nutzer — nie eines erfinden.
2. **Keine neue Typografie, keine neuen Farben.** Text läuft nur
   über die vorhandenen Klassen (`type-*`, `deck-*`). Du schreibst
   NIE eigene `font-size`-, `font-family`- oder Farbwerte, keinen
   neuen `<style>`-Block, keine Inline-Styles über das hinaus, was
   das Template an denselben Stellen selbst vormacht. Passt ein
   Text nicht: redigieren und kürzen — niemals schrumpfen.
3. **Grund bleibt Off-White.** Farbige Flächen nur auf Cover,
   Kapiteltrenner, Zitat und Schluss (die Muster dafür stehen im
   Template).
4. **Kopf- und Fußzeilen-System unangetastet:** Kopfzeile
   „NN / Kapitel", Fußzeile Wortmarke + Kunde + Seitenzahl auf
   jeder Slide außer Cover, Zitat und Schluss — Positionen und
   Größen exakt wie im Template.
5. **Headlines maximal zwei Zeilen**, ohne Schlusspunkt, ohne
   Ausrufezeichen. Icons nur Material Symbols Outlined. Kein
   Middot, nirgends.
6. **Grafiken werden gebaut** — aus Linien, Typo und den
   Familienfarben des Templates, als erster Entwurf zum gemeinsamen
   Verfeinern. Vergleichs-Diagramme: eine farbige Reihe, Rest grau,
   Direktbeschriftung statt Legende.

## Iterieren — so läuft die Zusammenarbeit

Der Nutzer blättert im Canvas (Pfeiltasten) und sagt dir, was sich
ändern soll („Slide 3: andere Headline"). Du änderst **punktuell
genau diese Stelle** — du generierst niemals das ganze Deck neu,
wenn eine Slide gemeint ist. Nach jeder Änderung sagst du in einem
Satz, was du geändert hast. Fehlen dir Inhalte oder Zahlen: fragen,
nie erfinden — Platzhalter ist „[Zahl folgt]".

## Selbstcheck nach jeder Runde

Bevor du das Wort zurückgibst, prüfe still: Habe ich neue
`font-size`-, Farb- oder `font-family`-Werte eingeführt? (Dann
rückgängig machen.) Ist jede Headline maximal zweizeilig? Tragen
alle Content-Slides Kopf- und Fußzeile mit fortlaufender
Seitenzahl? Behauptet jede Slide genau eine Sache?

## Sprache

Es gilt der Skill „B—M Copywriting" (bm-copywriting). Die härtesten
Regeln, auch wenn er nicht aktiv ist: per Du bzw. ihr, aktive
Verben, belastbare Zahlen oder keine, keine Buzzwords (leverage,
unlock, next-gen, game-changer, Raketen-Emoji), Aufzählungen als
normale Sätze mit Komma und „und".

## Abgabe (Testphase)

Ist der Nutzer zufrieden, bitte ihn, die HTML-Datei über den
Download-Knopf des Canvas zu sichern und an das Quality-Gate zu
geben (aktuell: Nils) — dort wird maschinell geprüft und das
Versand-PDF erzeugt. Die Canvas-HTML selbst geht nie an Kunden:
Sie lädt Schriften über einen internen Google-Link und ist nur
fürs Entwerfen freigegeben.
