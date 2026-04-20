# Bridgemaker Brandbook — Roadmap

> Status: April 2026
> Besitzer: Creative Director
> Zweck: Das Brandbook so vervollständigen, dass **jeder Mitarbeiter mit Claude Code brand-konforme digitale Produkte bauen kann — ohne Design-Team-Loop**.

---

## Was heute steht (v1.0)

- `CLAUDE.md` + `nextjs-handoff/CLAUDE.md` — Brand-Regeln als Instructions
- Tokens (CSS + JSON) mit Farben, Typo, Spacing, Radii, Borders
- Brandbook-HTML mit 14 Sections (Logo, Story, Type, Colors, Kasane, Components, Patterns, Voice, Motion, Spacing, Tokens, Claude)
- Starter-Kit: Button, Card, Form, Kasane, Nav (als JSX)
- Next.js-Handoff: TS + Tailwind v4 + shadcn, alle 14 Sections portiert, Landing + Components-Page
- Beispiel-Landingpage (HTML) und Beispiel-Deck (deck-stage)
- Logo-Assets in SVG (Wordmark + Monogram-Varianten)

**Lücke:** Das System ist eine Referenz, aber noch keine Anleitung. Und es fehlen die Bausteine/Templates für reale Apps.

---

## Roadmap — nach Priorität

### Phase 1 · Handlungsfähig machen (schnellster Hebel)

**1.1 Start-here-Kapitel im Brandbook**
- "Ich will X bauen — wie gehe ich vor?" als erste Section nach dem Hero
- Decision-Tree: wann Kasane, wann flache Surface, wann Dark-Section, welche Brand-Farbe als Akzent
- Einstiegs-Checkliste für neue Projekte

**1.2 Prompt-Rezepte**
- Sammlung konkreter Claude-Code-Prompts für typische Aufgaben:
  - "Baue eine Landingpage für Venture X"
  - "Baue ein internes Tool mit Dashboard"
  - "Baue ein Pitch-Deck zu Thema Y"
  - "Erstelle eine Microsite zu Z"
- Je Rezept: erwartetes Ergebnis + Varianten + Gotchas

**1.3 Venture Landing Template**
- Next.js, ready-to-fork
- Enthält: Hero (Kasane), Problem/Solution, Feature-Trio, Deep-Dive, Team, CTA, Footer
- Eigenes `CLAUDE.md` drin — zum Venture-Brand-Hinweis
- Ziel: „Claude, forke das Template und bau draus eine Seite für Projekt X" → 80% brand-konform out-of-the-box

---

### Phase 2 · Bausteine für reale Apps

**2.1 Data Display Components**
- Tables (sortable, filterable)
- Stats-Blocks, KPI-Cards
- Charts — Brand-Farben als dokumentierte Chart-Palette (Purple, Berry, Teal, Sage)
- Empty States, Loading States, Error States

**2.2 App-Patterns**
- Dashboard-Shell (Sidebar + Topbar + Content)
- Auth-Flows (Sign-In, Sign-Up, Password-Reset)
- Onboarding (Stepper, Progress)

**2.3 Internal Tool Template**
- Dashboard-Shell mit Auth-Gate
- Sample-Pages: Übersicht, Detail, Settings
- Als separates ZIP/Repo mit eigenem `CLAUDE.md`

---

### Phase 3 · Venture- und Content-Patterns

**3.1 Marketing-Patterns**
- Pricing-Tables
- FAQ-Sections
- Testimonials / Case-Studies
- Blog / Article Layout

**3.2 Weitere Templates**
- Microsite (Single-Scroll)
- Pitch-Deck Template (HTML + PPTX-Export-ready)
- Prototype Template (React-SPA für Click-Dummies)

---

### Phase 4 · Langfrist-Hebel

**4.1 Anti-Pattern-Galerie**
- "So sieht falsch aus, so sieht richtig aus" — mit Screenshots
- Deckt die häufigsten Brand-Verstöße ab (falsche Radii, Gradient-Overuse, Icon-Slop, etc.)

**4.2 Claude-Code-Workflow-Docs**
- Wie importiere ich das Brandbook in ein neues Claude-Code-Projekt?
- Wie halte ich mehrere Ventures mit unterschiedlichen Sub-Brands konsistent?
- Review-Checkliste für den Creative Director vor Go-Live

**4.3 Imagery-Bibliothek**
- Kuratierte Alex-Imagery für interne Nutzung
- Platzhalter-Patterns, wenn noch kein Bild existiert

---

## Nächster konkreter Schritt

Empfehlung zum Starten: **Phase 1.1 + 1.2 + 1.3 parallel** — weil sie sich gegenseitig referenzieren. Das Start-here-Kapitel verweist auf die Prompts, die Prompts verweisen auf die Templates.

Aber — nicht jetzt. Dieser Plan ist festgehalten, wir machen weiter, wenn du bereit bist.
