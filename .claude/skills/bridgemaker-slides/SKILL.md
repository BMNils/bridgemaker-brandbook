---
name: bridgemaker-slides
description: Use when building or editing Bridgemaker HTML slide decks (Slides, Präsentation, Deck, Pitch). Enforces the deck template, the §7.8 rules, and the mandatory render-and-look self-check (Sehpflicht) before anything is delivered.
---

# Bridgemaker Slides

Du baust ein Slide-Deck im Bridgemaker-Look. Der Weg ist nicht
verhandelbar: Template kopieren → Inhalte einsetzen → ansehen →
korrigieren → als PDF abgeben.

## 1. Grundlage lesen

Falls in dieser Session noch nicht geschehen: `CLAUDE.md` vollständig
lesen, vor Textarbeit `guidelines/08-voice.md`. Alle Werte kommen aus
`tokens/tokens.css` — keine eigenen Farben, Größen oder Klassen.

## 2. Template kopieren — nie frei bauen

Jedes Deck entsteht als Kopie von `templates/deck-template.html`.

**Ablageort — Kundenarbeit nie im Brandbook-Repo** (das Repo ist
öffentlich und projektübergreifend; Kundendaten gehören auch lokal
nicht hinein). Für jedes Kundenprojekt einen Projektordner außerhalb
anlegen und das Kit hineinkopieren — die Ordnerstruktur spiegelt das
Repo, dadurch funktionieren alle relativen Pfade unverändert:

```bash
mkdir -p <projektordner>/{tokens,templates,assets/logos,deck}
cp tokens/tokens.css <projektordner>/tokens/
cp templates/deck-stage.js <projektordner>/templates/
cp assets/logos/wordmark-*.svg <projektordner>/assets/logos/
```

Das Deck liegt dann in `<projektordner>/deck/` — einen Ordner tief,
mit relativen Pfaden auf `../tokens/`, `../templates/` und
`../assets/`. Nur neutrale, freigegebene Muster dürfen im Repo
selbst liegen. Die Layouts im Template sind die
freigegebene Menge: Cover, Agenda, Kapiteltrenner, Content 2/3 + 1/3,
1/2-Split, Zahlen, Icon-Grid, Zitat, Tabelle, Schluss. Slides
duplizieren und umsortieren ist ausdrücklich okay — **neue Layouts
erfinden ist verboten.** Fehlt ein Layout: gestreiften Platzhalter
setzen und fragen.

## 3. Regeln beim Füllen

Verbindlich ist der Kommentarblock im Template + `guidelines/07 §7.8`.
Die Kurzliste:

- Grund konstant Off-White; dunkles Kasane nur Cover/Schluss,
  Kapitelband nur auf Trennern, max. eine Moment-Slide (Zitat).
- Kopfzeile: Kapitel-Label links, Seitenzahl rechts — auf jeder
  Slide außer dem Cover. Keine Fußzeile.
- Eyebrows neutral (`--mid`), kein Farbcode. Kontrast auf Off-White:
  Fließtext `--dark`, Linien `--border-subtle`.
- Karten: Weiß/Mauve/Sage (kein Sand/Stone auf Off-White), nie
  zweimal dieselbe nebeneinander; Komposition: Ziffer/Icon oben,
  Inhalt unten; feine Linie unter dem Kartenkopf.
- Ab vier Listenpunkten zweispaltig; keine leere rechte Hälfte.
- Eine Farbwelt pro Slide; Diagramm-SVGs in einer Familie.
- Icons nur Material Symbols Outlined über die `.msym`-Klasse.
- Voice: Du/ihr durchgehend, Headlines ohne Schlusspunkt, keine
  Meta-/Prozesssätze, keine Sprachmischung. Belastbare Zahlen oder
  Mono-Platzhalter („[ Zitat folgt ]").
- Wortmarke auf Cover und Schluss; Ansprechpartner-Card nur mit
  **verifizierter** E-Mail — Adressen nie erfinden.
- Fehlende Grafik: `bg-stripes-diagonal`-Platzhalter mit
  Monospace-Caption „Vorschlag: … — lass uns das gemeinsam
  entwerfen." Nichts improvisieren.

## 4. Skills nutzen — Brandbook schlägt Skill

Für Story-Aufbau und Diagramm-Handwerk die installierten Skills
verwenden (z. B. `data-storytelling`, `data-visualization`,
`chart-visualization`). Sie liefern das WIE (Struktur, Dramaturgie,
Chart-Wahl). Sobald ein Skill eigene Farben, Schriften, Größen oder
Schatten vorschlägt, gilt ausnahmslos das Brandbook.

## 5. Sehpflicht — vor jeder Abgabe, nicht verhandelbar

Code-Kontrolle reicht nicht; du musst dein Deck ANSEHEN:

```bash
# im Repo-Root
python3 -m http.server 8123 &
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --print-to-pdf=/tmp/deck.pdf --no-pdf-header-footer \
  --virtual-time-budget=8000 "http://localhost:8123/<pfad>/<deck>.html"
```

Dann das PDF mit Read **seitenweise visuell** durchgehen und jede
Seite gegen die Regeln aus Schritt 3 prüfen — besonders: Kontrast,
leere Flächen, Hurenkinder, Farbwelt, Kopfzeile/Seitenzahl,
Platzhalter statt improvisierter Grafiken. Funde korrigieren, erneut
rendern. Erst abgeben, wenn ein kompletter Durchgang ohne Befund ist.

## 6. Abgabe

Weitergegeben wird **nur das PDF** (Drucken → als PDF sichern liefert
eine Seite pro Slide). Die HTML-Datei funktioniert nur im Projekt-Kit
bzw. Repo und wird nie einzeln verschickt. **Kundendateien nie ins
Brandbook-Repo legen oder committen** — Kundenarbeit lebt im
Projektordner; `examples/` ist ausschließlich für freigegebene,
neutrale Muster.
