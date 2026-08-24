# Bridgemaker Deck-Projekt — Claude-Instructions

> Dieser Ordner ist ein Projekt-Kit aus dem Bridgemaker-Brandbook.
> Das Deck lebt in `deck/*.html`. Dieses File ist das Destillat für
> Sessions, die nur den Projektordner sehen — die vollständigen
> Regeln (Guidelines, Skill `bridgemaker-slides`) liegen im
> Brandbook-Repo: `github.com/bridgemaker/bridgemaker-brandbook`.

## Nicht verhandelbar

1. **Template-Struktur ist unantastbar.** Das Deck ist eine Kopie
   von `deck-template.html` aus dem Brandbook: `<deck-stage>` mit
   `<section>`-Slides, 1440×810. Neue Layouts erfinden ist
   verboten — nur die im Deck vorhandenen Layout-Rezepte
   duplizieren, umsortieren und füllen. Fehlt ein Layout: stoppen
   und fragen.
2. **Alle Werte aus `tokens/tokens.css`.** Keine eigenen Farben,
   Schriftgrößen, Radien oder Klassen. Typografie NUR über die
   vorhandenen `type-*`-Klassen (plus die `deck-*`-Helfer der
   Template-Kopie). Nie `font-size` ad hoc setzen — auch nicht
   „nur diesmal, damit es passt": Passt der Text nicht, wird
   redigiert, nicht geschrumpft.
3. **Inter für alles; Mono nur für echten Code und
   Platzhalter-Captions.** Fonts liegen lokal in `assets/fonts/` —
   NIE Google Fonts oder andere externe Quellen nachladen (DSGVO).
4. **Farben nur als Token-Familien:** bm-purple (primär), bm-berry
   (Akzent, sparsam), bm-teal (Charts). Eine dominante Farbe pro
   Slide. Grund immer Off-White; Farbfläche nur auf Cover,
   Kapiteltrenner, Zitat und Schluss.
5. **Pro Slide:** eine Aussage; Headline max. zwei Zeilen und ohne
   Gedankenstrich (redigieren, nicht schrumpfen); max. drei Textgrößen
   (Headline/Content/Meta); Kopfzeile „NN / Kapitel" links und
   Fußzeile Wortmarke + Kunde + Seitenzahl auf jeder Slide außer
   Cover, Zitat und Schluss — Positionen stehen wie angenagelt.
6. **Sprache:** per Du/ihr (Englisch: you), aktive Verben, kurze
   Sätze; belastbare Zahlen oder keine; keine Buzzwords (leverage,
   unlock, next-gen, game-changer, Raketen-Emoji); kein Middot;
   Headlines ohne Schlusspunkt und ohne Ausrufezeichen.
7. **Grafiken werden gebaut, nicht gewünscht:** Diagramme,
   Timelines und Prozess-Schaubilder entstehen aus der
   Marken-Formensprache (Linien, Typo, Familienfarben) als erster
   Draft. Der gestreifte Platzhalter ist nur für Bild-Assets
   (Fotos, CD-pflichtige Bildwelt, fehlende Logos).

## Prüfen und abgeben

Vor jeder Abgabe, ausgeführt im Ordner `deck/`:

```bash
node ../templates/deck-lint.js <deck>.html    # muss ohne FEHLER sein
node ../templates/deck-pack.js <deck>.html --pdf
```

Nach dem Lint das gerenderte PDF seitenweise ansehen (Sehpflicht:
Layout erklärt das Argument, nichts springt beim Blättern, kein
Schachbrett aus Tönungen, Kontrast lesbar). Weitergegeben wird nur
das PDF oder die Versand-HTML — nie die rohe Deck-HTML, nie dieser
Ordner.

## Wenn etwas fehlt oder unklar ist

Fehlendes Layout, Bildwünsche, neue Farben, unklare Regeln →
stoppen und fragen; im Zweifel gilt das Brandbook-Repo. Nie
improvisieren — ein Deck, das die Regeln bricht, ist kein
Bridgemaker-Deck, egal wie gut es aussieht.
