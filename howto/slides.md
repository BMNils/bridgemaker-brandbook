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

Mehr brauchst du nicht: Auch die drei Handwerks-Skills für
Story-Aufbau und Diagramme liegen im Repo und kommen beim Klonen
automatisch mit. Die Rangordnung bleibt immer: **Skills liefern das
WIE, das Brandbook liefert das Aussehen.** Das erzwingt der
Repo-Skill automatisch.

## Schritt 2: Claude Code im Repo-Ordner starten

```bash
claude
```

Der Ordner ist entscheidend: Nur hier lädt Claude automatisch die
`CLAUDE.md` mit den Markenregeln und alle Skills — `bridgemaker-slides`
mit Template-Pflicht und Qualitäts-Workflow plus die drei
Handwerks-Skills.

## Schritt 3: Start-Prompt

Kopieren, nur den Ansprechpartner eintragen, abschicken — **die
Inhalte kommen bewusst noch nicht mit:**

```text
Baue mir ein Slide-Deck nach dem bridgemaker-slides-Skill.

Ansprechpartner für die Schluss-Slide: Name, Rolle, geprüfte E-Mail.

Richte zuerst alles ein. Wenn du bereit bist, frag mich nach den
Inhalten — ich liefere sie dann als Nachricht oder als Datei.
```

Mehr steht da nicht, mit Absicht: Der komplette Prozess (Template,
Grafiken bauen, Voice-Redigat, Sehpflicht-Checkliste) steckt im
Skill und veraltet damit nie im Prompt.

## Schritt 4: Inhalte liefern — als letzte Aktion

Claude richtet erst alles ein und fragt dann nach den Inhalten.
Jetzt lieferst du — auf einem von zwei Wegen:

- **Direkt als Nachricht:** Deinen kompletten Content einfach
  einfügen, auch wenn es mehrere Seiten sind. Nichts kürzen, nichts
  in Klammern quetschen.
- **Als Datei:** Inhaltsdokument (z. B. `inhalts-master.md`) in den
  Projektordner legen und Claude den Pfad nennen.

Die Sprache erkennt Claude aus deinen Inhalten. Danach läuft die
Pipeline: Argumentstruktur pro Slide, Texte im Bridgemaker-Ton
(deine Aussagen bleiben, die Sprache wird Marke), Grafiken werden
wirklich gebaut (erster Draft, ihr iteriert gemeinsam), am Ende die
Sehpflicht mit Checkliste — Claude sagt dir explizit, wenn der
Durchgang ohne Befund war.

## Ergebnis anschauen und weitergeben

- **Anschauen:** HTML-Datei im Browser öffnen (Doppelklick, Datei muss
  im Repo liegen), Navigation per Pfeiltasten. Oder direkt das PDF.
- **Weitergeben: nur als PDF.** Im Browser Drucken → „Als PDF sichern"
  (eine Seite pro Slide). Die HTML-Datei allein ist außerhalb des
  Repos kaputt — nie einzeln verschicken.
- **Wichtig — Kundenarbeit nie im Brandbook-Repo:** Das Repo ist
  öffentlich und projektübergreifend. Für jedes Kundenprojekt legt
  Claude einen Projektordner außerhalb an und kopiert das Kit hinein
  (tokens, deck-stage.js, Logos — macht der Skill automatisch);
  Deck und Inhaltsdokumente leben nur dort.

## Änderungen danach

Einfach normal weiterschreiben („Slide 3: andere Headline"). Bei
allem, was das Aussehen betrifft, gilt der Kurzbefehl:
**„Brandbook schlägt Skill — nur Werte aus tokens.css."**
