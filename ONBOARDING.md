# Bridgemaker Brand-System — so startest du

Willkommen. Hier liegt alles, was Bridgemaker visuell und sprachlich
ausmacht: Regelwerk, Tokens, visuelles Brandbook und Referenz-Code.
Such dir den Weg, der zu deiner Aufgabe passt.

---

## Anleitungen für konkrete Anwendungsfälle

Der schnellste Weg zum fertigen Ergebnis — Schritt für Schritt, mit
fertigem Start-Prompt zum Copy-pasten:

> **[Slides bauen (HTML-Präsentationen) →](howto/slides.md)**
>
> Vom Klonen bis zur fertigen Präsentation im Bridgemaker-Look.

Anleitungen für Dashboards, Apps, Interfaces und Landingpages folgen.

## Weg 1 — Nachschlagen (Design, Marketing, Text)

Du bist schon am Ziel: Alles liegt auf dieser Seite, nichts zu
installieren.

- **[Visuelles Brandbook](brandbook/index.html):** Farben, Typo, Karten,
  Gradients, Components — als erlebbare Referenz.
- **[Guidelines (Kanon)](guidelines/README.md):** das Regelwerk in neun
  Kapiteln. Bei Widerspruch gewinnt immer der Kanon.
- **[Voice & Style Guide](guidelines/08-voice.md):** verbindlich für jede
  Textarbeit — lies ihn, bevor du eine Zeile für Bridgemaker schreibst.

## Weg 2 — Mit KI gestalten (Claude Code, Langdock & Co.)

1. Repo klonen (öffentlich, kein Zugriff nötig):
   ```bash
   git clone https://github.com/BMNils/bridgemaker-brandbook.git
   ```
2. Claude Code im Repo-Ordner starten. Die `CLAUDE.md` lädt automatisch —
   sie trägt die Start-Checkliste, die harten Regeln und alle
   Handwerks-Fallen.
3. Eigenes Projekt außerhalb dieses Repos? Kopiere `CLAUDE.md` und den
   Ordner `tokens/` hinein — genau dafür sind sie gebaut.

**Eine Regel über allem:** Markenkritisches nie improvisieren.
Wenn etwas unklar ist — fragen.

## Weg 3 — Digitales Produkt bauen (Entwicklung)

Produkt-UIs laufen auf Material Design 3 mit Bridgemaker-Theming.
Das Starter-Kit bringt alles fertig verdrahtet mit:

```bash
git clone https://github.com/BMNils/bridgemaker-brandbook.git
cd bridgemaker-brandbook/starter-kit
npm install
npm run dev        # → http://localhost:3000
```

- Die Startseite ist die Komponenten-Referenz: alle MD3-Komponenten im
  Bridgemaker-Look plus die Marketing-Bausteine — der Code der Seite
  ist die Gebrauchsanweisung.
- Kit-spezifische Regeln stehen in `starter-kit/CLAUDE.md`.
- Marketing-Flächen (Landingpages, Decks) sind Bridgemaker-Eigenbau —
  kein MD3.

---

## Was gerade Work in progress ist

- **Bildsprache:** Das alte Foto-Konzept gilt nicht mehr; das neue
  Konzept (topografische Linien auf Gradients, konstruierte
  Vektor-Icons) ist in Klärung. Bis dahin: keine Bildentscheidungen
  ohne CD-Freigabe.
- **Slide-Templates:** existieren noch nicht — für Decks gelten die
  Grundregeln aus Kapitel 07 der Guidelines.

## Struktur des Repos

```
guidelines/      ← KANON — jede Regel lebt genau einmal hier
tokens/          ← alle Werte: tokens.css, tokens.json, print-tokens.css
howto/           ← Schritt-für-Schritt-Anleitungen mit Start-Prompts
CLAUDE.md        ← Destillat für KI-Arbeit
brandbook/       ← das visuelle Brandbook (HTML-Ansicht)
starter-kit/     ← Next.js + MD3 Referenz-Code
assets/logos/    ← Wortmarke + Monogramm als SVG
```
