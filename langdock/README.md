# Langdock-Paket

Hier liegen die Quellen für die Bridgemaker-Skills in Langdock. Die
Venture-Architekten arbeiten mit Langdock; dort entsteht die
**Schreibhälfte** der Slide-Pipeline (Rohinhalte → Inhalts-Master),
das **Setzen** (HTML, Lint, Sehpflicht, PDF) bleibt bei den
Claude-Code-Nutzern. Übergabeformat zwischen beiden Welten ist der
Inhalts-Master.

## Inhalt

- `slide-writing/` — Skill „Bridgemaker Slide Writing":
  `SKILL.md` (Regeln und Ausgabeformat) plus `layout-katalog.md`
  (die freigegebenen Layouts in Prosa).
- `bridgemaker-slide-writing.zip` — das Upload-Bundle, generiert
  aus `slide-writing/`. Nach jeder Änderung neu packen:

  ```bash
  cd langdock/slide-writing && zip -j ../bridgemaker-slide-writing.zip SKILL.md layout-katalog.md
  ```

## Hochladen

In Langdock: **Skills → Add Skill → Upload a skill**, das ZIP
hineinziehen. Danach prüfen:

1. Verweist die SKILL.md-Passage „Bridgemaker-Sprachstil (eigener
   Skill)" sinngemäß auf den vorhandenen Sprach-Skill? Ggf. dessen
   genauen Namen eintragen.
2. Skill mit dem Team teilen (Workspace-Skill) oder an den
   Slides-Agenten bzw. ein Projekt anhängen.

## Pflege

Quelle der Wahrheit ist dieses Repo. Ändert sich der Kanon
(Layouts, Voice-Regeln, Slide-Regeln), werden die Dateien hier
nachgezogen und das ZIP neu hochgeladen — Langdock zieht nichts
automatisch.
