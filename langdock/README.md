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
- `bm-copywriting/` — Skill „B—M Copywriting": `SKILL.md`
  (Workflow und harte Verbote) plus
  `references/BM_Voice_Style_Guide_v1.md` — eine wortgleiche Kopie
  des Guides aus `guidelines/08-voice.md` (inkl. Anhang
  Copy-Mikroregeln). Ändert sich der Voice-Guide, wird die Kopie
  neu extrahiert, nie von Hand editiert.
- Die beiden ZIPs sind die Upload-Bundles. Nach jeder Änderung neu
  packen:

  ```bash
  cd langdock/slide-writing && zip -j ../bridgemaker-slide-writing.zip SKILL.md layout-katalog.md && cd ..
  zip -r bm-copywriting.zip bm-copywriting
  ```

## Hochladen

In Langdock: **Skills → Add Skill → Upload a skill**, das ZIP
hineinziehen (bestehende Skills: aktualisieren statt doppelt
anlegen). Danach prüfen:

1. Beide Skills vorhanden und aktuell? Der Slide-Writing-Skill
   verweist namentlich auf „B—M Copywriting" (bm-copywriting) —
   ändert sich dessen Name in Langdock, den Verweis in
   `slide-writing/SKILL.md` nachziehen.
2. Skills mit dem Team teilen (Workspace-Skill) oder an den
   Slides-Agenten bzw. ein Projekt anhängen.

## Pflege

Quelle der Wahrheit ist dieses Repo. Ändert sich der Kanon
(Layouts, Voice-Regeln, Slide-Regeln), werden die Dateien hier
nachgezogen und das ZIP neu hochgeladen — Langdock zieht nichts
automatisch.
