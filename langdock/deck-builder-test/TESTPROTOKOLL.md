# Testprotokoll — Kann Langdock Bridgemaker-Decks bauen?

Der Test beantwortet eine Frage: Baut ein Langdock-Agent mit dem
Skill „B—M Deck Builder (Test)" Decks, die unsere Qualitätslatte
halten — über mehrere Iterationsrunden, mit echtem Material? Die
Latte ist messbar: null Fehler im maschinellen Deck-Check plus
bestandene Sichtprüfung, beides OHNE Nacharbeit außerhalb von
Langdock.

## Einmalig: Skill hochladen

1. In Langdock: **Skills → Add Skill → Upload a skill**, die Datei
   `bm-deck-builder-test.zip` hineinziehen.
2. Den Skill für den Test NICHT mit dem Workspace teilen — er ist
   noch nicht freigegeben. Nur du (und ggf. ein Test-VA) nutzt ihn.

## Pro Testlauf (drei Läufe, unterschiedliche Inhalte)

1. Neuen Chat öffnen. Echte Rohinhalte oder einen fertigen
   Inhalts-Master einfügen und schreiben:
   „@B—M Deck Builder (Test) — bau daraus das Deck."
2. Das Deck entstehen lassen, im Canvas durchblättern
   (Pfeiltasten).
3. **Mindestens fünf gezielte Änderungen** verlangen, z. B.:
   eine Headline umformulieren, bei einer Slide das Layout
   wechseln, eine Slide ergänzen, die Farbwelt eines
   Kapiteltrenners ändern, einen Text kürzen, eine Grafik
   anpassen.
4. Dabei auf drei Dinge achten (frei notieren reicht):
   - Bleibt es erkennbar unser Template — oder fängt er an,
     eigene Gestaltung zu erfinden?
   - Ändert er punktuell — oder baut er ungefragt das ganze Deck
     um?
   - Wird das Canvas bei 10+ Slides träge oder instabil?
5. Am Ende die HTML-Datei über den Download-Knopf sichern und
   durchnummerieren: `deck-test-01.html`, `-02`, `-03`.

## Auswertung (macht Claude Code)

Die drei Dateien gehen an Nils. Dort läuft jede durch den
maschinellen Deck-Check (deck-lint) und die Sichtprüfung
(Sehpflicht). **Bestanden heißt:** alle drei Läufe ohne
Lint-Fehler und ohne rote Sichtbefunde — dann wird der Skill zum
Standardweg für alle VAs ausgebaut. Fällt er durch, wissen wir
genau, woran es liegt, und entscheiden auf Fakten statt Gefühl.
