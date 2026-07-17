<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/logos/wordmark-white.svg">
  <img src="assets/logos/wordmark-black.svg" alt="Bridgemaker" height="28">
</picture>

# Bridgemaker Brand-System

Alles, was Bridgemaker visuell und sprachlich ausmacht — Regelwerk,
Design-Tokens, Templates und Referenz-Code. Eine Quelle, keine
Kopien: Bei Widerspruch gewinnt immer der Kanon in `guidelines/`.

## Der schnellste Einstieg

**[→ ONBOARDING.md](ONBOARDING.md)** zeigt dir den Weg, der zu
deiner Aufgabe passt. Die zwei häufigsten Abkürzungen:

- **Slides bauen:** [howto/slides.md](howto/slides.md) — vom Klonen
  bis zur versandfertigen Präsentation, mit fertigem Start-Prompt
  für Claude Code.
- **Nachschlagen:** [Visuelles Brandbook](brandbook/index.html) im
  Browser öffnen oder direkt in die
  [Guidelines](guidelines/README.md) springen.

## Was wo liegt

| Ordner | Inhalt |
| --- | --- |
| `guidelines/` | der Kanon in neun Kapiteln, inklusive Voice-Guide |
| `tokens/` | alle Farben, Typo-Stufen und CSS-Rezepte (`tokens.css`) |
| `templates/` | Deck-Template, Stage-Skript, Kontur-Generator und `deck-pack.js` |
| `assets/` | Logos, lokal gehostete Fonts und Referenz-Screenshots |
| `examples/` | freigegebene, neutrale Muster (z. B. das 16-Seiten-Beispieldeck) |
| `howto/` | Schritt-für-Schritt-Anleitungen mit Start-Prompts |
| `brandbook/` | das Regelwerk als erlebbare HTML-Referenz |

## Drei Regeln, die immer gelten

Kundenarbeit lebt nie in diesem Repo, auch nicht lokal — für jedes
Projekt entsteht ein eigener Ordner mit kopiertem Kit. Alle Werte
kommen aus `tokens/tokens.css`, niemand definiert Farben oder
Größen neu. Und vor jeder Textarbeit gilt der
[Voice-Guide](guidelines/08-voice.md).

---

*Arbeitest du mit Claude Code, lädt `CLAUDE.md` automatisch — das
Destillat des Kanons plus alle Skills.*
