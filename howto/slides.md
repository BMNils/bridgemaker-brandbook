# Slides bauen mit Claude Code

Diese Anleitung führt dich zu einer HTML-Slide-Präsentation im
Bridgemaker-Look. Du brauchst nur Claude Code — das Handwerk steckt
im Repo: ein Deck-Template mit den freigegebenen Layouts und ein
Skill, der Claude durch die Regeln und die Qualitätskontrolle führt.

## Schritt 1: Repo klonen

```bash
git clone https://github.com/BMNils/bridgemaker-brandbook.git
cd bridgemaker-brandbook
```

Schon geklont? Dann reicht `git pull` — Template und Regeln
entwickeln sich weiter.

## Schritt 2: Skills installieren (einmalig)

Drei geprüfte Skills fürs Handwerk — Story-Aufbau und Diagramme:

```bash
npx -y skills add wshobson/agents@data-storytelling -g -y
npx -y skills add anthropics/knowledge-work-plugins@data-visualization -g -y
npx -y skills add antvis/chart-visualization-skills@chart-visualization -g -y
```

Die Rangordnung bleibt immer: **Skills liefern das WIE, das Brandbook
liefert das Aussehen.** Das erzwingt der Repo-Skill automatisch.

## Schritt 3: Claude Code im Repo-Ordner starten

```bash
claude
```

Der Ordner ist entscheidend: Nur hier lädt Claude automatisch die
`CLAUDE.md` mit den Markenregeln und den Skill `bridgemaker-slides`
mit Template-Pflicht und Qualitäts-Workflow.

## Schritt 4: Start-Prompt

Kopieren, die `[…]`-Stellen ausfüllen, abschicken:

```text
Baue mir ein Slide-Deck nach dem bridgemaker-slides-Skill.

Thema und Inhalt: [Thema + grob die Slides aufzählen]
Sprache: [Deutsch oder Englisch]
Ansprechpartner für die Schluss-Slide: [Name, Rolle, geprüfte E-Mail]

Nutze templates/deck-template.html als Ausgangspunkt. Wo dir eine
Grafik oder ein Diagramm helfen würde, setze den gestreiften
Platzhalter mit deinem Vorschlag. Führe am Ende die Sehpflicht durch:
PDF rendern, jede Seite selbst ansehen, gegen die Checkliste prüfen
und korrigieren — sag mir explizit, wenn der Durchgang ohne Befund war.
```

Ein zweiter Kontroll-Prompt ist nicht mehr nötig — die Prüfung ist
Teil des Workflows.

## Ergebnis anschauen und weitergeben

- **Anschauen:** HTML-Datei im Browser öffnen (Doppelklick, Datei muss
  im Repo liegen), Navigation per Pfeiltasten. Oder direkt das PDF.
- **Weitergeben: nur als PDF.** Im Browser Drucken → „Als PDF sichern"
  (eine Seite pro Slide). Die HTML-Datei allein ist außerhalb des
  Repos kaputt — nie einzeln verschicken.
- **Wichtig:** Kundendecks nie ins Repo committen — das Repo ist
  öffentlich. Sie bleiben lokal (`examples/detax-*` u. Ä. sind per
  .gitignore geschützt).

## Änderungen danach

Einfach normal weiterschreiben („Slide 3: andere Headline"). Bei
allem, was das Aussehen betrifft, gilt der Kurzbefehl:
**„Brandbook schlägt Skill — nur Werte aus tokens.css."**
