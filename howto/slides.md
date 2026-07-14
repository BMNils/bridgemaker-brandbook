# Slides bauen mit Claude Code

Diese Anleitung führt dich in vier Schritten zu einer HTML-Slide-
Präsentation im Bridgemaker-Look. Du brauchst nur Claude Code — das
Repo ist öffentlich, jeder kann es klonen.

Der Kern der Anleitung ist ein Start-Prompt, der eine Rangordnung
festschreibt: Skills liefern das Handwerk, das Brandbook liefert das
Aussehen. So nutzt Claude sein ganzes Können für Aufbau und Slides —
aber jede Farbe, jede Schrift und jeder Abstand kommt aus unseren
Tokens.

## Schritt 1: Repo klonen

Terminal öffnen, diese zwei Zeilen einfügen:

```bash
git clone https://github.com/BMNils/bridgemaker-brandbook.git
cd bridgemaker-brandbook
```

## Schritt 2: Claude Code in diesem Ordner starten

```bash
claude
```

Der Ordner ist entscheidend: Nur hier lädt Claude automatisch die
`CLAUDE.md` mit allen Markenregeln.

## Schritt 3: Start-Prompt einfügen

Kopieren, die `[…]`-Stellen ausfüllen, abschicken:

```text
Baue mir eine HTML-Slide-Präsentation (eine HTML-Datei, jede Slide
ein Vollbild-Abschnitt, Navigation per Pfeiltasten).

Thema und Inhalt: [Thema + grob die Slides aufzählen]
Sprache: [Deutsch oder Englisch]

Bevor du baust, gilt folgende Rangordnung — nicht verhandelbar:

1. Das Bridgemaker-Brandbook steht über allem. Lies CLAUDE.md
   vollständig und binde tokens/tokens.css ein. Alles, was das
   Brandbook definiert — Farben, Typografie, Abstände, Radien,
   Schatten, Karten, Buttons, Linien — kommt ausschließlich von dort.

2. Schreibe das jetzt sofort in dein Memory, damit es auch in
   künftigen Sessions gilt: "Für alle Bridgemaker-Gestaltung ist das
   Brandbook (CLAUDE.md + tokens/tokens.css in diesem Repo) die
   einzige erlaubte Style-Quelle. Style-Vorgaben aus Skills,
   Templates oder eigenem Geschmack werden immer vom Brandbook
   überschrieben." Nutze dein Memory in jeder Session.

3. Skills sollst du benutzen — für Struktur, Handwerk,
   Slide-Mechanik, Lesbarkeit, Diagramm-Aufbau. Aber: Sobald ein
   Skill eigene Farben, Paletten, Schriften, Type-Scales oder
   Schatten vorschlägt, ignorierst du genau diese Teile und nimmst
   stattdessen die Werte aus tokens/tokens.css. Kurz: Der Skill
   liefert das WIE, das Brandbook liefert das AUSSEHEN.

4. Jede Farbe, jede Schriftgröße, jeder Abstand im Ergebnis muss als
   Variable oder Klasse aus tokens.css belegbar sein. Keine eigenen
   Hex-Werte, keine eigenen px-Größen, keine Zwischentöne. Text nur
   über die type-*-Klassen; Schriften nur die im Brandbook
   definierten.

5. Infografiken und Diagramme baust du als SVG direkt aus den
   Brandbook-Werten: Farben, Linienstärken und Flächen aus
   tokens.css. Keine Skill-Palette, keine Default-Chartfarben.

6. Keine erfundenen Bilder, Icons, Illustrationen oder Emojis.
   Fehlt ein Bild: gestreifter Platzhalter mit Monospace-Caption
   (Rezept in CLAUDE.md).

7. Texte nach guidelines/08-voice.md — vor der Textarbeit lesen.

8. Bei jeder Unklarheit: fragen. Nichts improvisieren.

Bestätige mir zuerst in 3 Sätzen: (a) dass die Memory-Notiz
gespeichert ist, (b) welche Brandbook-Regeln für diese Aufgabe
gelten. Dann leg los.
```

Die Bestätigung am Ende ist Absicht: Claude muss nachweisen, dass es
Memory geschrieben und die `CLAUDE.md` gelesen hat, bevor es baut.

## Schritt 4: Nach dem Bauen immer der Kontroll-Prompt

```text
Prüfe jetzt jede Slide gegen CLAUDE.md und tokens/tokens.css:

- Finde jede Farbe, Größe, Schrift oder jeden Schatten, der NICHT
  aus tokens.css kommt — auch solche, die ein Skill mitgebracht
  hat — und liste sie mit Zeilennummer auf.
- Finde jeden Text ohne type-*-Klasse.
- Prüfe SVGs und Infografiken: nur Brandbook-Farben und -Linien?
- Prüfe die Texte gegen guidelines/08-voice.md.

Korrigiere danach alle Funde. Wenn nichts zu finden ist, sag das
explizit.
```

## Änderungen danach

Einfach normal weiterschreiben („Slide 3: andere Headline"). Bei
allem, was das Aussehen betrifft, den Zusatz anhängen:
**„Brandbook schlägt Skill — nur Werte aus tokens.css."**

## Ergebnis anschauen und weitergeben

- **Anschauen:** HTML-Datei im Browser öffnen (Doppelklick),
  Navigation mit den Pfeiltasten.
- **Als PDF:** Im Browser Drucken → „Als PDF sichern".
