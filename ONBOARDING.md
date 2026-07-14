# Bridgemaker Brand-System — so startest du

Willkommen. Hier liegt alles, was Bridgemaker visuell und sprachlich
ausmacht: Regelwerk, Tokens, visuelles Brandbook und Referenz-Code.
Such dir unten den Weg, der zu deiner Aufgabe passt.

**Der schnellste Einstieg für alle:**
👉 https://bridgemaker-brandbook.vercel.app

---

## Weg 1 — Nachschlagen (Design, Marketing, Text)

Du brauchst nichts zu installieren.

- **Visuelles Brandbook:** Farben, Typo, Karten, Gradients, Components —
  als erlebbare Referenz. [bridgemaker-brandbook.vercel.app](https://bridgemaker-brandbook.vercel.app)
- **Guidelines (Kanon):** das Regelwerk in neun Kapiteln. Bei Widerspruch
  gewinnt immer der Kanon.
- **Voice & Style Guide:** verbindlich für jede Textarbeit — lies ihn,
  bevor du eine Zeile für Bridgemaker schreibst.

## Weg 2 — Mit KI gestalten (Claude Code, Langdock & Co.)

1. Repo klonen (Zugriff nötig — frag Nils):
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

- `/components` zeigt alle MD3-Komponenten im Bridgemaker-Look plus die
  Marketing-Bausteine.
- Kit-spezifische Regeln stehen in `starter-kit/CLAUDE.md`.
- Marketing-Flächen (Landingpages, Decks) sind Bridgemaker-Eigenbau —
  kein MD3. Die Landing-Demo unter `/landing-demo` zeigt das Muster.

---

## Was gerade Work in progress ist

- **Bildsprache:** Das alte Foto-Konzept gilt nicht mehr; das neue
  Konzept (topografische Linien auf Gradients, konstruierte
  Vektor-Icons) ist in Klärung. Bis dahin: keine Bildentscheidungen
  ohne Freigabe von Nils.
- **Slide-Templates:** existieren noch nicht — für Decks gelten die
  Grundregeln aus Kapitel 07 der Guidelines.

## Struktur des Repos

```
guidelines/      ← KANON — jede Regel lebt genau einmal hier
tokens/          ← alle Werte: tokens.css, tokens.json, print-tokens.css
CLAUDE.md        ← Destillat für KI-Arbeit
brandbook/       ← das visuelle Brandbook (HTML-Ansicht)
starter-kit/     ← Next.js + MD3 Referenz-Code
assets/logos/    ← Wortmarke + Monogramm als SVG
```

Fragen? → Nils Sanders (nils.sanders@bridgemaker.com)
