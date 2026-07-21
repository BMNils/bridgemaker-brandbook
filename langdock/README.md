# Langdock-Paket

Hier liegen die Quellen für die Bridgemaker-Skills in Langdock. Die
Venture-Architekten arbeiten mit Langdock und bauen dort **das
komplette Deck selbst**: Rohinhalte strukturieren, Slides texten,
im Canvas setzen und Slide für Slide iterieren (Entscheidung Nils,
21.07.2026 — keine Übergabe an ein Deck-Team). Am Ende geht die
heruntergeladene Deck-HTML durch das **Quality-Gate** (aktuell:
Nils mit deck-lint + Sehpflicht in Claude Code), das das
Versand-PDF erzeugt — die Canvas-HTML selbst geht nie an Kunden.

## Inhalt

- `slide-writing/` — Skill „B—M Slide Writing"
  (Slug: `bridgemaker-slide-writing`, bleibt bei Umbenennungen
  stabil): der komplette Deck-Skill. `SKILL.md` (Ablauf, Bau- und
  Sprachregeln), `layout-katalog.md` (die freigegebenen Layouts in
  Prosa) und `deck-template-canvas.md` — das Deck-Template als
  Canvas-Einzeldatei, generiert via `build-canvas-template.js` aus
  Template + tokens + Stage-Skript (Wortmarken als Daten-URIs;
  Fonts per Google-Link, gedeckt durch die interne Canvas-Ausnahme
  vom 20.07.2026). Nach Kanon-Änderungen an Template oder tokens
  neu generieren, nie von Hand editieren.
- `bm-copywriting/` — Skill „B—M Copywriting": `SKILL.md`
  (Workflow und harte Verbote) plus
  `references/BM_Voice_Style_Guide_v1.md` — eine wortgleiche Kopie
  des Guides aus `guidelines/08-voice.md` (inkl. Anhang
  Copy-Mikroregeln). Ändert sich der Tone of Voice, wird die Kopie
  neu extrahiert, nie von Hand editiert.
- Die ZIPs sind die Upload-Bundles. Nach jeder Änderung neu
  packen:

  ```bash
  node langdock/slide-writing/build-canvas-template.js
  cd langdock/slide-writing && zip -j ../bridgemaker-slide-writing.zip SKILL.md layout-katalog.md deck-template-canvas.md && cd ..
  zip -r bm-copywriting.zip bm-copywriting
  ```

## In Langdock einspielen

**Erstanlage:** Skills → Add Skill → Upload a skill, das ZIP
hineinziehen. **Pflege danach (gelebte Praxis):** die geänderten
MD-Inhalte händisch in den bestehenden Skill kopieren — den Skill
nie löschen und neu anlegen, sonst verlieren Agenten, Projekte und
Freigaben ihre Verknüpfung. Beide Skills bestehen aus MEHREREN
Dateien: Beim Copywriting-Skill gehört die Referenzdatei
`references/BM_Voice_Style_Guide_v1.md` zur Pflege dazu, beim
Slide-Writing-Skill `layout-katalog.md` und
`deck-template-canvas.md`. Kommt eine Datei neu hinzu oder ist
sie zu groß zum Einfügen: Die Oberfläche kennt KEIN ZIP-Update —
der saubere Weg ist der API-Import mit `mode=upsert` (ersetzt
alle Dateien des Skills, Matching über den Slug; API-Key mit
SKILL_API-Scope nötig):

```bash
curl -X POST https://api.langdock.com/skills/v1/import \
  -H "Authorization: Bearer $LANGDOCK_API_KEY" \
  -F "file=@langdock/<skill>.zip" -F "fileType=zip" -F "mode=upsert"
```

Löschen und neu anlegen ist der letzte Ausweg — dann gehen
Freigaben, Workspace-Status und Installationen verloren und
müssen neu gesetzt werden.
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
