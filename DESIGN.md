# Brandbook v2 — Design-Dokument

Stand: 2026-07-14, beschlossen mit Nils, ersetzt `ROADMAP.md` (v1.0)

## Kontext & Ziel

Das Brandbook v1.0 war die Basis für die Bridgemaker-Website. Seitdem hat die
Website das Design-System deutlich weiterentwickelt (Glass-System, fluide
Typo-Skala, Karten-Familie, Motion-Regeln, Layout-Raster). Das Brandbook wird
jetzt auf diesen Stand gebracht und gleichzeitig von einer Referenz zu einer
**Anleitung** ausgebaut, damit zukünftige Arbeiten an digitalen
Bridgemaker-Produkten darauf aufsetzen können.

**Quelle der Wahrheit für alle Inhalte:** `globals.css`, `AGENTS.md` und die
gelebten Komponenten der Website (`bridgemaker-website`-Repo). Bei jedem
Widerspruch zum alten Brandbook gewinnt die Website.

## Entscheidungen (2026-07-14)

1. **Alles synchron:** Guidelines, Tokens, HTML-Brandbook UND Starter-Kit
   werden aktualisiert — nicht nur die Instructions.
2. **Sync + Produkt-Anleitung:** Nicht nur Website-Stand dokumentieren,
   sondern verallgemeinerte Regeln für digitale Produkte ableiten
   (die „Referenz statt Anleitung"-Lücke aus der alten ROADMAP schließen).
3. **Eigenes Repo:** Das Brandbook zieht nach der Aktualisierung in ein
   eigenes Repo um. Es soll von dort in mehrere Ziele fließen
   (Claude Design, Langdock). Deshalb ist der Kern **portables Markdown +
   Tokens** — das HTML-Brandbook ist nur eine Ansicht davon.
   Der Ordner wird NICHT ins Website-Repo committet.
4. **Ein Regelwerk, drei Ausspielungen:** Jede Regel lebt genau einmal in
   `guidelines/`. CLAUDE.md, HTML-Book und Starter-Kit werden daraus
   abgeleitet. Die Doppelpflege von v1.0 (Regeln in CLAUDE.md UND im
   HTML-Book) hat das Brandbook veralten lassen — das stellen wir ab.
5. **MD3 für Produkt-UIs:** Zukünftige digitale Produkte (Apps, Tools)
   arbeiten mit Google Material Design 3 als Komponenten-Grundlage,
   gebrandet über ein Bridgemaker-Token-Mapping. Das Starter-Kit wird von
   shadcn/ui auf MD3 umgestellt. **Scope-Abgrenzung (Annahme, im Review
   bestätigen):** Marketing-Oberflächen (Website, Landingpages, Decks)
   bleiben Bridgemaker-Eigenbau wie heute; MD3 gilt für Produkt-/App-UIs.
6. **Voice-Guide wird Kapitel:** Der Voice & Style Guide v1.0 lebt
   wortgleich als `guidelines/08-voice.md` (Änderungen verlangen
   Leadership-Review). Die Duplikate (`uploads/`, `voice/`) sind gelöscht.
7. **Sprache Deutsch** *(Nils, 2026-07-14)*: Die Guidelines sind auf
   Deutsch — Muttersprache der Organisation; Publikationen entstehen
   grundsätzlich zweisprachig DE/EN. Nur der Voice-Guide bleibt wortgleich
   Englisch.
8. **Nichts ungeprüft aus Alt-Dateien** *(Nils, 2026-07-14)*: Kein Inhalt
   aus v1.1 oder anderen alten Brand-Dateien übernehmen, ohne gegen die
   Website abzugleichen — sie ist die Source of Truth. Die Prüfung hat
   mehrere v1.1-Regeln gekippt (siehe erweiterte Konfliktliste).
9. **Site-Gradients gehören in den Kanon** *(Nils, 2026-07-14)*: Die auf
   der Website entstandenen Gradient-Flächen (Hebel-, Case-, Stimmen-,
   Band-Gradients) sind Teil des Regelwerks und dürfen in zukünftigen
   Publikationen eingesetzt werden — als Katalog in Kapitel 04.
10. **Phase 6 vor Phase 5** *(Nils, 2026-07-14)*: Erst eigenes Repo mit
    v2-Basis-Commit (Git-Netz), dann der Starter-Kit-Umbau in kleinen
    Commits. Historie macht Git — keine Backup-Dateien.
11. **MD3-Library: `@material/web`** *(Nils, 2026-07-14)*: Googles
    offizielle MD3-Web-Components als Basis des Starter-Kits; Theming
    ausschließlich über das explizite Mapping aus Kapitel 09.
12. **Sage gestrichen** *(Nils, 2026-07-14)*: Sage ist keine benannte
    Marken-/Chart-Farbe mehr (Familie, Tokens, Badge entfernt); ein
    Nachfolger ist noch nicht definiert. Es bleiben nur die faktisch
    genutzten Reste der Website: `surface-sage` als Fläche und Grüntöne
    als namenlose rgba-Bestandteile der Gradient-Rezepte. Bekannte
    Website-Restnutzung der alten Familie: Principles-Seite färbt
    Prinzip 4 mit `bm-soft-sage` (Aufräum-Kandidat im Website-Repo).

## Zielstruktur

```
brandbook-repo/
├─ guidelines/                  ← KANON (portables Markdown)
│  ├─ 01-essence.md
│  ├─ 02-colors.md
│  ├─ 03-typography.md
│  ├─ 04-surfaces-glass.md      ← NEU
│  ├─ 05-motion.md
│  ├─ 06-layout.md              ← NEU
│  ├─ 07-product-patterns.md    ← NEU
│  ├─ 08-voice.md               ← aus uploads/ eingegliedert
│  └─ 09-md3-mapping.md         ← NEU
├─ tokens/
│  ├─ tokens.css
│  └─ tokens.json
├─ CLAUDE.md                    ← Destillat aus guidelines/ (für KI-Arbeit)
├─ brandbook/                   ← HTML-Ansicht (menschenlesbar)
├─ starter-kit/                 ← Next.js-Referenz-Code (MD3-basiert)
└─ assets/                      ← Logo-SVGs
```

## Kapitelplan

### Übernommen & aufgefrischt

- **01-essence** — Purpose, „Bindestrich"-Idee (B—M), Voice-Dualität,
  B—M-Prinzipien. Substanz bleibt, Sprache glätten.
- **02-colors** — Token-für-Token-Abgleich mit `globals.css`
  (Purple-Triade, Berry, Teal, Neutrals, Surfaces, Borders).
  Website-Ergänzungen wie `bm-lavender-dark` aufnehmen.
  Die Farb-Hierarchie-Regeln (ein dominanter Farbton pro Sektion,
  lavender-on-dark, keine neuen Farben erfinden) bleiben.
- **08-voice** — Inhalt aus `BM_Voice_Style_Guide_v1.md`, plus die
  Copy-Regeln aus dem alten Typography-Kapitel (Headlines ohne Punkt,
  sentence-case, Zahlen-Regel, keine Ausrufezeichen).

### Grundlegend neu geschrieben

- **03-typography** — Die fluide `clamp()`-Skala ersetzt die fixen
  px-Werte (Lektion: fixe px brechen auf Mobile). Alle heutigen Stufen
  dokumentieren, inkl. der neuen: `type-h5`, `type-card-title`,
  `type-stat`, `type-nav`, `type-micro`, `type-body-l`.
  Tracking in `em` statt px (skaliert mit). Regel: NUR `type-*`-Klassen,
  nie ad-hoc `text-sm`/`font-semibold`/`tracking-*`.
  „Bigger = lighter weight" bleibt.
- **04-surfaces-glass** *(neu — das Herzstück)* — Die komplette
  Karten-Familie mit Entscheidungsbaum (wann Glass, wann Paper):
  - `card-glass`, `hero-card-glass` + `hero-card-veil`, `case-glass`
  - `card-elevated`, `card-clean`, `shadow-pop`
  - Grain-Varianten: `grain`, `grain-photo`, `grain-photo-screen`
  - Handwerkswissen explizit festhalten: backdrop-filter-Build-Falle
    (handgeschriebenes `backdrop-filter` wird von Tailwind v4/Lightning
    gestrippt → Frost über Tailwind-Utilities am Element), Glas-Karten
    dürfen selbst keinen `filter` tragen (bricht Backdrop-Sampling),
    Milchigkeit-Stellschrauben.
  - Schatten-Philosophie: „Karten sitzen auf der Seite, sie fliegen
    nicht" — mehrlagige dezente Schatten, `shadow-pop` als bewusste
    Ausnahme.
- **05-motion** — Konkrete Rezepte statt generischer Regeln:
  Kasane-Drift-Keyframes (14s Standard / 9s bold), Dauern & Easings,
  **höchstens ein Motion-Moment pro Sektion**, `prefers-reduced-motion`
  als Pflicht, kein Scroll-Jacking.
- **06-layout** *(neu)* — 8px-Raster verbindlich (4px als halbe Stufe,
  keine krummen Werte), 1200px-Rahmen, Section-Headlines und
  Lead-Lines `max-w-2xl`, „Farbe rationiert".
- **07-product-patterns** *(neu — die Anleitungs-Lücke)* —
  Verallgemeinerte Regeln für digitale Produkte: Sektions-Anatomie
  (Eyebrow → Headline → Lead → Inhalt), Landing-Patterns,
  App-UI-Guidance (Formulare, Navigation, Buttons inkl. Pill-Regel und
  „lift, never darken"), Ventures-Regeln und Slide-Deck-Regeln aus den
  alten Kapiteln 8/9/12 hier eingegliedert.
- **09-md3-mapping** *(neu)* — Wie Bridgemaker auf MD3 abgebildet wird:
  - Farbrollen: `bm-purple` → primary, Surfaces → surface-Container-Rollen,
    on-dark-Regeln → dark scheme. Explizites Mapping, KEIN
    seed-generiertes Theme (sonst verfälscht MD3 die Brand-Farben).
  - Type-Scale: MD3 display/headline/title/body/label ↔ `type-*`-Stufen.
  - Shape: Pill-Buttons = MD3 full corner radius; Karten-Radii aus Tokens.
  - Elevation: unsere zurückhaltende Schatten-Philosophie überschreibt
    MD3-Default-Elevation.
  - Was von MD3 übernommen wird (Interaktions-States, Komponenten-Anatomie,
    A11y-Verhalten) vs. was Bridgemaker überschreibt (Farbe, Typo, Shape,
    Elevation, Motion-Zurückhaltung).

## Konfliktauflösungen (alt → neu)

| Thema | Brandbook v1.0/v1.1 | v2 (= Website-Stand, verifiziert) |
|---|---|---|
| Cards | „borderless", nur Surface-Fills | Inset-Haarlinie + nahe Elevation (`card-elevated`/`card-clean`) |
| Typo-Skala | fixe px (128/96/64/48/32/…) | fluide `clamp()`-Skala |
| Tracking | fixe px-Werte | `em`-Werte (skalieren mit der Größe) |
| Klassen-Namen | `text-display-xl`, `text-h1`, … | `type-display-xl`, `type-h1`, … |
| Kasane-Drift | „18–24s loops" (generisch) | konkrete Keyframes: 14s Standard, 9s bold |
| Komponenten-Basis (Produkte) | shadcn/ui | MD3 mit Bridgemaker-Theming |
| Glass | existiert nicht | eigenes Kapitel 04 |
| Positionierung | „venture-building firm" | „Digitalberatung für KI-Transformation" (Über-uns); Mission/Vision von der Website |
| Reines Weiß | als Haupthintergrund verboten | Weiß ist Sektionsfläche im Flächenrhythmus (Weiß ↔ Off-White ↔ Surfaces), Haarlinien-Abgrenzung |
| Button-Hover | „lift, never darken" | Karten liften; Buttons wechseln Füllung innerhalb der Markenfamilie (Charcoal→Deep-Plum), nie nach Schwarz |
| Header | sticky, 60px, Wordmark 16px, aktive Nav-Pille | fix, 64px, transparent→blur-solid, Wordmark 20px, Dark-Inversion via `data-nav-dark` |
| Container-Padding | 48px | 16px mobil / 32px ab md; Sektionen `py-24` |
| Principles-Wortlaut | v1.1-Fassung („Product ist Business", „AI slop") | Website-Fassung („Produkt ist Business", „KI-Geschwätz") |
| Fonts | Inter Display > 24px, Google-Fonts-Link | nur Inter, via next/font (Link nur für statische Artefakte) |
| Stone als Randfarbe | verboten („Flächenfüllung") | `border-surface-stone` ist DIE Sektions-/Flächengrenze der Website |
| Kasane-Frequenz | max. ein Modul pro Seite | mehrere Gradient-Felder pro Seite, im Wechsel mit ruhigen Flächen; ein Hero-Kasane |
| Badge-Farben | Tint-BG + Basisfarbe-Text | Tint-BG + **Deep**-Text (z. B. purple-tint + deep-plum) |
| Sekundär-/Ghost-Button, Formular-Regeln | als gelebte Komponenten beschrieben | als Systemvarianten/Vorgaben markiert — auf der Website derzeit ungenutzt (kein Formular vorhanden) |

## Die drei Ausspielungen

1. **`CLAUDE.md`** — neu destilliert aus `guidelines/`: kompakt, imperativ,
   mit Copy-Paste-CSS-Rezepten. Das File, das Claude Design und jedes neue
   Projekt bekommt. Die bewährten Abschnitte „Start-of-project checklist"
   und „When Claude should stop and ask" bleiben erhalten (aktualisiert).
2. **HTML-Brandbook** (`brandbook/`) — Sections an die neue Kapitelstruktur
   angleichen: neue Sections für Surfaces/Glass und Layout, Type-Section
   auf die fluide Skala umgebaut, Components-Section auf Karten-Familie +
   MD3-Hinweis. Bestehender JSX-Ansatz bleibt (kein Framework-Umbau).
3. **Starter-Kit** (`nextjs-handoff/` → `starter-kit/`) — Umstellung von
   shadcn/ui auf MD3, Komponenten auf heutigen Stand: Karten-Familie inkl.
   Glass, `type-*`-Klassen, Grain, aktualisierte `tokens.css`/`tokens.json`.
   **Library-Entscheidung** (zu Beginn von Phase 5 mit Nils festmachen):
   Empfehlung `@material/web` (Googles offizielle MD3-Implementierung,
   React 19 kann Web Components nativ); Alternative MUI, falls
   SSR-Komfort/React-Ökosystem schwerer wiegen.

## Vorgehen (Phasen mit Review-Gates)

1. **Guidelines schreiben** (Kanon, Kapitel 01–09) — Review-Gate mit Nils
2. **Tokens abgleichen** (`tokens.css` + `tokens.json` gegen `globals.css`)
3. **CLAUDE.md destillieren**
4. **HTML-Brandbook umbauen** — Review-Gate im Browser
5. **Starter-Kit auf MD3 umstellen** (nach Library-Entscheidung) —
   Review-Gate auf localhost
6. **Umzug ins eigene Repo**; `AGENTS.md` der Website bekommt einen
   Verweis auf das Brandbook-Repo als Design-Referenz

## Nicht-Ziele / später

- Export-Mechanik nach Langdock / Claude Design (erst wenn v2 steht;
  die Markdown+Tokens-Struktur ist dafür bereits die Vorbereitung).
- Entscheidung über das alte Cloudflare-Pages-Deployment
  (`bridgemaker-brandbook.pages.dev`) — fällt beim Repo-Umzug.
- Keine Änderungen an der Website selbst (außer dem AGENTS.md-Verweis
  in Phase 6).
