# Slides bauen mit Claude Code

Diese Anleitung führt dich zu einer HTML-Slide-Präsentation im
Bridgemaker-Look. Du brauchst nur Claude Code — Layouts, Markenregeln
und Qualitätskontrolle bringt das Brandbook mit.

## Schritt 1: Brandbook auf deinen Rechner holen

Öffne das Terminal und kopiere diese zwei Zeilen hinein:

```bash
git clone https://github.com/BMNils/bridgemaker-brandbook.git
cd bridgemaker-brandbook
```

Sie holen den Brandbook-Ordner auf deinen Rechner und wechseln
hinein. Hast du den Ordner schon? Dann reicht `git pull` — die
Regeln entwickeln sich weiter.

## Schritt 2: Claude Code im Brandbook-Ordner starten

```bash
claude
```

Der Ordner ist entscheidend: Nur hier kennt Claude die
Bridgemaker-Regeln und den kompletten Ablauf.

## Schritt 3: Start-Prompt

Kopieren, nur den Ansprechpartner eintragen, abschicken — **die
Inhalte kommen bewusst noch nicht mit:**

```text
Baue mir ein Slide-Deck nach dem bridgemaker-slides-Skill.

Ansprechpartner für die Schluss-Slide: Name, Rolle, geprüfte E-Mail.

Richte zuerst alles ein. Wenn du bereit bist, frag mich nach den
Inhalten — ich liefere sie dann als Nachricht oder als Datei.
```

Mehr steht da nicht, mit Absicht: Den kompletten Ablauf — Layout,
Texte, Grafiken, Qualitätskontrolle — kennt Claude schon.

## Schritt 4: Inhalte liefern — als letzte Aktion

Claude richtet erst alles ein und fragt dann nach den Inhalten.
Jetzt lieferst du — auf einem von zwei Wegen:

- **Direkt als Nachricht:** Deinen kompletten Content einfach
  einfügen, auch wenn es mehrere Seiten sind. Nichts kürzen, nichts
  in Klammern quetschen.
- **Als Datei:** Inhaltsdokument (z. B. `inhalts-master.md`) in den
  Projektordner legen und Claude den Pfad nennen.

Die Sprache erkennt Claude aus deinen Inhalten. Dann baut Claude
das Deck: jede Slide mit einer klaren Aussage, deine Inhalte im
Bridgemaker-Ton, Grafiken als ersten Entwurf, den ihr gemeinsam
verfeinert. Zum Schluss prüft Claude jede Seite gegen die
Qualitäts-Checkliste und sagt dir, wenn alles sauber ist.

## Ergebnis anschauen und weitergeben

- **Anschauen:** HTML-Datei im Browser öffnen (Doppelklick; die
  Datei bleibt dafür in ihrem Projektordner), Navigation per
  Pfeiltasten. Oder direkt das PDF.
- **Weitergeben:** Sag Claude „Mach das Deck versandfertig" — du
  bekommst beides: das PDF (eine Seite pro Slide) und eine einzelne
  Versand-HTML, in der alles steckt, auch die Schriften. Die kannst
  du gefahrlos verschicken: keine Ordner, keine Assets, kein
  Internet nötig. Schnellweg: In Chrome funktioniert auch Drucken →
  „Als PDF speichern" — aber nur mit „Hintergrundgrafiken" an,
  Kopf- und Fußzeilen aus und Skalierung auf Standard, und nie in
  Safari oder Firefox (die zerschneiden die Slides auf
  Papierformate). Die rohe Deck-HTML bleibt tabu zum Verschicken.
- **Wichtig — Kundenarbeit gehört nie in den Brandbook-Ordner:**
  Claude legt für jedes Kundenprojekt automatisch einen eigenen
  Ordner an und kopiert alles Nötige hinein. Deck und
  Inhaltsdokumente legst du nur dort ab.

## Änderungen danach

Einfach normal weiterschreiben („Slide 3: andere Headline"). Wirkt
etwas plötzlich nicht mehr nach Bridgemaker, reicht ein Satz:
**„Halt dich ans Brandbook."**
