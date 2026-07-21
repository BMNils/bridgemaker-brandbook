# Langdock-Paket

Hier liegen die Quellen für die Bridgemaker-Skills in Langdock. Die
Venture-Architekten arbeiten mit Langdock; dort entsteht die
**Schreibhälfte** der Slide-Pipeline (Rohinhalte → Inhalts-Master),
das **Setzen** (HTML, Lint, Sehpflicht, PDF) bleibt bei den
Claude-Code-Nutzern. Übergabeformat zwischen beiden Welten ist der
Inhalts-Master.

## Inhalt

- `slide-writing/` — Skill „B—M Slide Writing"
  (Slug: `bridgemaker-slide-writing`, bleibt bei Umbenennungen stabil):
  `SKILL.md` (Regeln und Ausgabeformat) plus `layout-katalog.md`
  (die freigegebenen Layouts in Prosa).
- `bm-copywriting/` — Skill „B—M Copywriting": `SKILL.md`
  (Workflow und harte Verbote) plus
  `references/BM_Voice_Style_Guide_v1.md` — eine wortgleiche Kopie
  des Guides aus `guidelines/08-voice.md` (inkl. Anhang
  Copy-Mikroregeln). Ändert sich der Tone of Voice, wird die Kopie
  neu extrahiert, nie von Hand editiert.
- `deck-builder-test/` — Skill „B—M Deck Builder (Test)"
  (Slug: `bm-deck-builder-test`): der Versuch, die Setz-Hälfte
  nach Langdock zu holen — der Agent baut das Deck im Canvas auf
  Basis von `deck-template-canvas.html` (Einzeldatei, generiert
  via `build-canvas-template.js` aus Template + tokens +
  Stage-Skript; Fonts per Google-Link, gedeckt durch die interne
  Canvas-Ausnahme vom 20.07.2026). **Status: TEST** — Ablauf und
  Bestehens-Kriterien in `TESTPROTOKOLL.md`; erst nach bestandenem
  Test teilen.
- Die ZIPs sind die Upload-Bundles. Nach jeder Änderung neu
  packen:

  ```bash
  cd langdock/slide-writing && zip -j ../bridgemaker-slide-writing.zip SKILL.md layout-katalog.md && cd ..
  zip -r bm-copywriting.zip bm-copywriting
  node deck-builder-test/build-canvas-template.js && cd deck-builder-test && zip -j ../bm-deck-builder-test.zip SKILL.md deck-template-canvas.html ../slide-writing/layout-katalog.md && cd ..
  ```

## In Langdock einspielen

**Erstanlage:** Skills → Add Skill → Upload a skill, das ZIP
hineinziehen. **Pflege danach (gelebte Praxis):** die geänderten
MD-Inhalte händisch in den bestehenden Skill kopieren — den Skill
nie löschen und neu anlegen, sonst verlieren Agenten, Projekte und
Freigaben ihre Verknüpfung. Achtung beim Copywriting-Skill: Er
besteht aus zwei Dateien — zur Pflege gehört auch die Referenzdatei
`references/BM_Voice_Style_Guide_v1.md`, nicht nur die SKILL.md.
Danach prüfen:

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
