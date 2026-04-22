# Bridgemaker Brand — CLAUDE.md

> **Read this file before generating anything for Bridgemaker.**
> You are building on behalf of Bridgemaker. Every artifact must feel unmistakably Bridgemaker — direct, ambitious, pragmatic, confident.
>
> 👉 **Next.js / TSX-specific rules live in [`CLAUDE.dev.md`](./CLAUDE.dev.md)** — file paths, component imports, Tailwind class conventions.

---

## 0. Start-of-project checklist

Every time you begin a Bridgemaker project:

1. **Tokens first.** The Tailwind `@theme` in `src/app/globals.css` is the single source of truth. Never redefine colors, radii, or font sizes inline.
2. **Default background is `bg-off-white` (#F5F1EB)**. Never use pure `#FFFFFF` or `bg-white` for the page itself. Cards and inputs may use white.
3. **Inter + Inter Display.** Loaded in `layout.tsx`. No other fonts without approval.
4. **Pill buttons only.** The `Button` component is pill-shaped. Never change the radius.
5. **If anything is ambiguous — ASK.** Do not improvise brand-critical decisions (tone, headline copy, imagery).

---

## 1. Brand essence

### 1.1 Purpose & Mission

- **Purpose:** We are driven by the desire to make our German and European economies future-proof.
- **Mission:** We build commercially and socially valuable ventures together with corporates.

### 1.2 The logo as an idea — "Bindestrich"

The Bridgemaker logo is **B—M**. The dash between B and M IS the logo. It represents the most direct connection between two worlds (Corporate ↔ Startup). Render it with the `<Wordmark />` component — never hand-code.

### 1.3 Voice — Duality

> "We are matter-of-fact, but know how to express our emotions. Calm and wise, yet fierce and brave. We go deep — but we are crystal clear."

- **Direct & precise** — no buzzwords, no "synergy", no "leverage", no AI-Geschwätz
- **Ambitious & visionary** — we're here to build the future
- **Pragmatic & craft-oriented** — "we build" is the verb
- **Confident, never arrogant** — state-of-fact, not chest-pounding

Primary languages: **German and English, equally weighted.** Pick based on audience; never mix mid-sentence.

### 1.4 B—M Principles

1. **Wirkung vor Aufwand** — Wir rechnen in Ergebnissen.
2. **Product ist Business** — Business, Produkt, Technologie an einen Tisch.
3. **Mensch und Maschine** — Automatisieren, was sich wiederholt.
4. **Build–Measure–Learn** — Unfertig ist akzeptiert. Ungetestet nicht.
5. **Klarheit** — Unklare Sprache zeigt unklares Denken.
6. **Dein Venture** — Handle wie ein Eigentümer.

---

## 2. Colors — the hierarchy

### 2.1 Brand triad

| Role | Tailwind class | Hex | When |
|---|---|---|---|
| **Primary** | `bg-bm-purple` / `text-bm-purple` | `#6B4A94` | Links, accents, brand moments |
| **Accent** | `bg-bm-berry` | `#B84A6F` | Tags, highlights, sparingly |
| **Secondary** | `bg-bm-teal` | `#3A9E97` | Charts, tech contexts |

### 2.2 Neutrals

- **Foreground:** `text-charcoal` (`#1C1C1E`)
- **Background:** `bg-off-white` (`#F5F1EB`)
- **Body-secondary:** `text-mid` (`#6B6B65`)
- **Eyebrow:** `text-light` (`#918F87`)

### 2.3 Surfaces

Use the `bg-surface-*` classes for muted section backgrounds:

- `bg-surface-stone` — default
- `bg-surface-mauve` — purple-tinted
- `bg-surface-sage` — tech context
- `bg-surface-sand` — ventures

Or use `<Card surface="stone | mauve | sand | dark">`.

### 2.4 On-dark mode

Wrap dark sections in `.bm-on-dark` — the background automatically becomes charcoal, foreground flips to off-white, and components (Button, Card) adapt. Links and secondary buttons switch to `text-bm-lavender-on-dark`. Never use raw `text-bm-purple` on dark — it fails contrast.

### 2.5 Don'ts

- ❌ Pure `#FFFFFF` / `bg-white` as a main background
- ❌ `text-bm-purple` on dark backgrounds
- ❌ Three brand colors competing in one section
- ❌ Inventing new colors. If you need one, ask.

### 2.6 Borders & dividers

Default: **`border-border-subtle`** — maps to `#C5C0B8`, 1px. Use for outline boxes, dividers, table lines, card outlines. It carries enough weight on off-white to read without feeling heavy.

- `border-border-hairline` — very soft inner splits only
- `border-border-strong` — 1.5px purple for focus rings and active outlines (built into `<Input />`, secondary `<Button />`)

Never use surface tints (`#E8E5DF` etc.) as borders — those are fills.

---

## 3. Typography

### 3.1 Scale

Use the pre-defined utility classes. Never hard-code font sizes.

| Class | Size | Weight | When |
|---|---|---|---|
| `text-display-xl` | 128px | 400 | Monumental hero (rare) |
| `text-display-l` | 96px | 500 | Bold campaign |
| `text-display` | 64px | 600 | Standard hero |
| `text-h1` | 48px | 600 | Page titles |
| `text-h2` | 32px | 600 | Section headlines |
| `text-h3` | 24px | 500 | Subheads |
| `text-h4` | 20px | 500 | Card titles |
| `text-eyebrow` | 12px | 500 | UPPERCASE + tracking |

**Display rule:** bigger = lighter weight.

### 3.2 Tracking

Negative tracking on all display/heading sizes (already built in). Never positive tracking on headlines.

### 3.3 Umlauts in display

Umlauts (ä, ö, ü) in Display-size German headlines are welcome — they give the copy character.

### 3.4 Copy rules

- Headlines: no full stops unless multiple sentences
- Body: sentence-case, not Title Case
- Numbers: figures from 10 upwards; spell out below 10 in body
- No exclamation marks outside explicit UI affirmations

---

## 4. Kasane Gradients — use with restraint

Signature atmospheric background. **Moment-makers, not wallpaper.**

### 4.1 When to use

- Hero sections (one per page, max)
- Section starters that need atmospheric weight
- Cover slides of a deck

### 4.2 When NOT to use

- ❌ As a generic page background
- ❌ Behind body text
- ❌ On more than one module per page

### 4.3 Variants

Use the `<Kasane variant="dark | vibrant | light" animate>` component. Copy never regenerated by hand — the component carries the approved gradients.

---

## 5. Components

### 5.1 Buttons

**Shape:** Pill. Always.

```tsx
<Button variant="primary | secondary | ghost | link | destructive"
        size="sm | default | lg | icon">
```

**Label voice:** Verb-first. "Let's build together", "Jetzt starten", "Ventures entdecken". Never "Click here" or "Submit" alone.

### 5.2 Cards

```tsx
<Card surface="default | stone | mauve | sage | sand | dark">
```

Never stack three cards of the same surface in a row — vary the fill.

### 5.3 Badges

```tsx
<Badge tint="default | purple | berry | teal | sage | outline">
```

Use sparingly. More than 3 in a view usually signals a layout problem.

### 5.4 Forms

Inputs are **12px radius** — only buttons are pill. Labels above inputs, never placeholder-as-label. Focus: purple border + soft purple ring (built into `<Input />`).

### 5.5 Navigation

Use `<SiteNav />` — sticky, 60px tall, 55% off-white, 16px backdrop blur.

---

## 6. Spacing & layout

- **4pt scale** (Tailwind default). Use `p-4`, `gap-6`, `mt-12` etc.
- **Container:** `max-w-[1200px] mx-auto px-12`.
- **Section rhythm:** `py-30` (120px) between major sections on landing pages, `py-20` (80px) on denser pages.
- **Grid gutter:** `gap-6` (24px) default.

Negative space is a brand asset. When in doubt, add more.

---

## 7. Imagery

Three principles:

1. **Character people** — real presence, conviction. Not models.
2. **Discovering moments even in the ordinary** — the telling detail in everyday scenes. Not staged.
3. **Surprising perspectives to achieve the unmatched** — unusual angles, tight crops, off-center.

### 7.1 When you don't have the asset

Use `<ImagePlaceholder caption="…" ratio="4/3" />`. Never invent an SVG illustration.

### 7.2 What to avoid

- ❌ Stock photography with pointing-at-screens smiles
- ❌ AI-generated illustrations
- ❌ Flat vector characters
- ❌ Emoji as imagery

---

## 8. Motion

- **Transitions:** 150–240ms for UI, 400ms for page-level
- **Easing:** `ease-out` for entrances, `ease-in-out` for swaps
- **No scroll-jacking.** No horizontal-on-vertical tricks.

---

## 9. Do's & Don'ts

### Do

- ✅ Import from `@/components/ui` and `@/components/brand`
- ✅ Default to `bg-off-white`
- ✅ Use pill buttons everywhere
- ✅ Ask when unsure
- ✅ Use placeholders when assets are missing
- ✅ Let negative space breathe

### Don't

- ❌ Use `bg-white` for page backgrounds
- ❌ Invent SVG illustrations
- ❌ Use emoji as imagery
- ❌ Use `text-bm-purple` on dark
- ❌ Deviate from pill-shape on buttons
- ❌ Apply Kasane to anything other than a hero moment

---

## 10. When Claude should stop and ask

Ask before:

- Choosing an alternative font
- Adding a new brand color
- Writing headline copy for external-facing material
- Using imagery (stock, AI, or illustration)
- Deviating from pill-button shape
- Applying Kasane to anything other than a hero
- Building for a venture (ventures have their own brands)

Everything else: build confidently from the tokens.

---

*Bridgemaker Brand v1.0 — April 2026 · See CLAUDE.dev.md for Next.js specifics.*
