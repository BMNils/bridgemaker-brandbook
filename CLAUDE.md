# Bridgemaker Brand — Claude Instructions

> **Read this file before generating anything for Bridgemaker.**
> You are designing on behalf of Bridgemaker, a venture-building firm. Every artifact you produce must feel unmistakably Bridgemaker — direct, ambitious, pragmatic, confident.

---

## 0. Start-of-project checklist

Every time you begin a Bridgemaker project:

1. **Stack.** Interactive products and internal web apps **must** use **Next.js (App Router) + TypeScript + Tailwind + shadcn/ui** — bootstrap from `starter-kit-next/`. Brandbook examples, slide decks, and static one-pagers may stay vanilla (consume `tokens.css` directly). See the "Stack" section below.
2. **Load tokens first.** Reference `tokens/tokens.css` (or `tokens/tokens.json` for pure data). Never redefine colors, font sizes, radii, or spacing inline — pull from the tokens.
3. **Default background is `--off-white` (#F5F1EB)**. Never use pure `#FFFFFF` for a main canvas. Cards and inputs may use white; the page itself must not.
4. **Inter + Inter Display**. Import from Google Fonts. No other font families without explicit approval.
5. **Pill buttons only.** `border-radius: 999px`. No rectangles, no `4px` corners.
6. **If anything is ambiguous — ASK.** Do not improvise brand-critical decisions (tone, headline copy, venture positioning, imagery choice).

---

## Stack · Defaults for new interactive projects

Every internal product Bridgemaker builds for itself runs on the same foundation. Consistency of stack = consistency of look & feel + speed to ship.

### Required for every new interactive project

- **Next.js** (App Router, latest stable) — the default framework
- **TypeScript** (`strict: true`) — no JavaScript in new products
- **Tailwind CSS** — layout + styling utility layer
- **shadcn/ui** — component layer
- **pnpm** — package manager
- **Node 20+** — runtime

### Token bridges — how the brand reaches the stack

The canonical source of truth is `tokens/tokens.css`. Two thin bridges let Tailwind and shadcn consume it without duplicating values:

- **`tokens/tailwind.preset.ts`** — Tailwind preset that re-exports brand colors, spacing, radii, typography, shadows, and easings as Tailwind theme extensions. Also maps shadcn's semantic colors (`primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `ring`) to Bridgemaker tokens via HSL triplets, so `bg-primary/50` opacity modifiers work.
- **`tokens/shadcn.css`** — CSS-variable bridge that sets shadcn's expected variables (`--primary`, `--radius`, etc.) from Bridgemaker tokens. Include once in your app's `globals.css`. Ships with `.bm-on-dark` overrides for dark sections.

In every new project:

```ts
// tailwind.config.ts
import preset from "../../tokens/tailwind.preset";
export default { presets: [preset], content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"] };
```

```css
/* app/globals.css */
@import "../../tokens/tokens.css";
@import "../../tokens/shadcn.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Never define brand colors, spacing, or radii in Tailwind config directly.** If a value is missing, add it to `tokens.css` first — the bridges pick it up automatically.

### shadcn/ui rules

- Run `npx shadcn@latest add <component>` to install a component. `starter-kit-next/` ships with `Button`, `Card`, `Badge`, `Input`, `Label` pre-wired.
- **The `Button` component in the starter is already pill-shaped** (`rounded-full`) and sized to brand spec (`h-11` default, `h-9` sm, `h-[52px]` lg). Don't override with `rounded-md` etc. unless the user explicitly asks.
- Button variants map 1:1 to the brand pattern:
  - `variant="default"` → bm-btn-primary (charcoal on off-white)
  - `variant="outline"` → bm-btn-secondary (transparent with purple stroke)
  - `variant="ghost"` → bm-btn-ghost
- Use `className="bm-on-dark"` on any section with `--charcoal` background. It flips all shadcn semantic colors (primary inverts, muted darkens, ring switches to lavender-on-dark) so nested shadcn components render correctly without per-component overrides.

### Kasane gradients

Ported to `starter-kit-next/components/kasane.tsx` as a typed React component. Signature: `<Kasane variant="dark" | "vibrant" | "light" />`. Respects `prefers-reduced-motion`. Do not regenerate the gradient CSS; use the component.

### When vanilla CSS is acceptable (no Tailwind/shadcn required)

- Brandbook itself (`examples/*.html`, `starter-kit/*.jsx` legacy)
- Slide decks rendered from `deck.html`
- Static one-pagers hosted on Cloudflare Pages with no real interactivity
- Any Figma plugin or tool that runs outside a Next.js build

These artifacts still consume `tokens/tokens.css` directly and use the `bm-btn` / `bm-card` / `bm-badge` utility classes it provides.

### Bootstrap command

```bash
cp -r starter-kit-next my-new-product
cd my-new-product
pnpm install
pnpm dev
```

Replace the demo page in `app/page.tsx` with the actual product. The token imports in `globals.css` and `tailwind.config.ts` reference `../../tokens/` relative to the sibling project location — adjust if you move the project outside the brandbook repo (typically to a dedicated repo with the tokens copied in or installed as a local npm package).

### Linting / formatting

Use `eslint-config-next` (already in the starter) and Prettier with default Tailwind plugin ordering. Non-negotiable.

### What not to introduce without an explicit conversation

- Other React frameworks (Remix, Vite+React, Astro)
- Other styling systems (styled-components, emotion, CSS Modules beyond shadcn's internal use)
- Other component libraries (MUI, Chakra, Radix naked — shadcn already wraps Radix)
- Other state libraries unless the app genuinely needs them (prefer server components + URL state first)

If a project has a good reason to deviate (e.g., a pure-static marketing site), bring it up and we'll document the exception.

---

## 1. Brand essence

### 1.1 Purpose & Mission

- **Purpose:** We are driven by the desire to make our German and European economies future-proof.
- **Mission:** We build commercially and socially valuable ventures together with corporates.

### 1.2 The logo as an idea — "Bindestrich"

The Bridgemaker logo is **B—M**. The dash between B and M IS the logo. It represents a direct, uncomplicated connection between two worlds (Corporate ↔ Startup) — straight to the point, der direkteste Weg. Whenever you render the wordmark, the dash must feel deliberate, strong, and central.

### 1.3 Voice — Duality

> "We are matter-of-fact, but know how to express our emotions. Calm and wise, yet fierce and brave. We go deep — but we are crystal clear."

- **Direct & precise** — no buzzwords, no "synergy", no "leverage", no AI-Geschwätz
- **Ambitious & visionary** — we're here to build the future, not tweak the present
- **Pragmatic & craft-oriented** — "we build" is the operative verb
- **Confident, never arrogant** — state-of-fact, not chest-pounding
- **Matter-of-fact + emotional** — state facts, but don't be robotic
- **Calm + fierce** — quiet confidence, with conviction when it matters
- **Black & white + bold in colors** — neutral foundation, moments of bold color

Primary languages: **German and English, equally weighted.** Pick based on audience; don't mix mid-sentence.

### 1.4 B—M Principles (how we work)

1. **Wirkung vor Aufwand** — Wir rechnen in Ergebnissen. Stunden, Slides und Meetings sind keine Währung für Erfolg.
2. **Product ist Business** — Eine gute Idee ohne Produkt bleibt Wunschdenken. Business, Produkt und Technologie gehören an einen Tisch.
3. **Mensch und Maschine** — Was sich wiederholt, wird automatisiert, damit Menschen Zeit für das haben, was nur sie können: Urteilen, Beziehungen aufbauen, Entscheidungen treffen.
4. **Build–Measure–Learn** — Bauen und Messen schlägt Vermutungen. Unfertig ist akzeptiert. Ungetestet nicht.
5. **Klarheit** — Kein Jargon, keine Fassade, kein KI-Geschwätz. Unklare Sprache zeigt unklares Denken.
6. **Dein Venture** — Handle wie ein Eigentümer. Entscheiden, umsetzen, Verantwortung für das Ergebnis übernehmen.

Use these principles to guide copy, CTAs, and prioritisation decisions. They are not decorative — they should show up in what we say and how we say it.

---

## 2. Colors — the hierarchy

### 2.1 Brand triad

| Role | Token | Hex | When |
|---|---|---|---|
| **Primary** | `--bm-purple` | `#6B4A94` | Secondary CTAs, links, brand moments, hover accents |
| **Accent** | `--bm-berry` | `#B84A6F` | Tags, highlights, sparing emphasis |
| **Secondary** | `--bm-teal` | `#3A9E97` | Charts, infographics, tech contexts |

Sage (`#7A8B6A`) is an extra chart color — not a brand color. Do not use Sage as an accent on landing pages or slides.

### 2.2 Neutrals — the workhorses

- **Foreground:** `--charcoal` (`#1C1C1E`)
- **Background:** `--off-white` (`#F5F1EB`)
- **Body-secondary text:** `--mid` (`#6B6B65`)
- **Eyebrow text:** `--light` (`#918F87`)

### 2.3 Surfaces — muted card fills with brand DNA

Use the `surface-*` tokens for section backgrounds and cards when plain off-white feels flat. They carry subtle brand undertones:

- `surface-stone` — default
- `surface-mauve` — purple-tinted section
- `surface-sage` — tech/security context
- `surface-sand` — ventures context
- `surface-dark` — high-contrast dark block within a light page

### 2.4 On-dark mode

When placing content on `--charcoal` backgrounds:
- Headings: `--off-white`, body: `--soft` (`#A8A69E`)
- Links and secondary buttons: `--bm-lavender-on-dark` (`#AF94D2`) — **never** raw `--bm-purple` on dark; it fails contrast.
- Primary CTA becomes white-on-charcoal.

### 2.5 Don'ts

- ❌ Pure `#FFFFFF` as a main background
- ❌ `--bm-purple` text on dark backgrounds (use lavender-on-dark)
- ❌ Three brand colors competing in one section — pick one dominant, one accent, neutrals for everything else
- ❌ Inventing new colors. If you need one, ask.

### 2.6 Borders & dividers

Outline boxes, dividers, table lines, card outlines → use **`--border-subtle`** (`1px solid #C5C0B8`). This is the default; it carries enough weight on off-white to read clearly without feeling heavy.

- `--border-hairline` — only for very soft inner splits on calm backgrounds (e.g. inside a card)
- `--border-strong` — `1.5px solid --bm-purple` for focus rings, active outlines, secondary button stroke

Never hardcode `#E8E5DF` or similar stone tints as a border — those are surface fills. Borders come from the border tokens.

---

## 3. Typography

### 3.1 Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

`Inter Display` is automatically used above 24px via the `--font-display` token; `Inter` for everything below.

### 3.2 Scale

Always use tokens; never hard-code font sizes.

| Token | Size | Weight | When |
|---|---|---|---|
| `--text-display-xl` | 128px | **400** | Monumental hero. Rarely used. |
| `--text-display-l`  | 96px  | **500** | Bold campaign statements |
| `--text-display`    | 64px  | **600** | Standard hero |
| `--text-h1`         | 48px  | 600 | Page titles |
| `--text-h2`         | 32px  | 600 | Section headlines |
| `--text-h3`         | 24px  | 500 | Section subheads |
| `--text-h4`         | 20px  | 500 | Card titles |
| `--text-body`       | 16px  | 400 | Body text |
| `--text-small`      | 14px  | 400 | Nav, meta |
| `--text-caption`    | 12px  | 400 | Labels, timestamps |
| `--text-eyebrow`    | 12px  | 500 | UPPERCASE + 0.08em tracking |

**Display rule:** bigger = lighter weight. It looks more elegant and carries more air.

### 3.3 Tracking

All display and heading sizes use negative tracking (see tokens). Never positive tracking on headlines — it reads like a 2005 PowerPoint.

### 3.4 Umlauts in display

Umlauts (ä, ö, ü) in Display-size headlines are **welcome** when the copy genuinely calls for them — they give German headlines character. Don't force English where German reads more honestly.

### 3.5 Copy rules

- Headlines: no full stops unless there are multiple sentences
- Body: sentence-case, not Title Case
- Numbers: use figures (3, not "three") from 10 upwards; below 10, spell out in body copy
- No exclamation marks outside of explicit UI affirmations

---

## 4. Kasane Gradients — use with restraint

Kasane gradients (層ね — "layered") are Bridgemaker's signature atmospheric background treatment: multiple semi-transparent radial gradients stacked and blurred. They are **moment-makers**, not wallpaper.

### 4.1 When to use

- Hero sections (one per page, max)
- Section starters that need atmospheric weight
- Cover slides of a deck

### 4.2 When NOT to use

- ❌ As a generic page background
- ❌ Behind body text (contrast fails and it looks like 2012 Windows Phone)
- ❌ On more than one module per page
- ❌ Behind other gradients or imagery

### 4.3 The three approved variants

**Dark Kasane** — on `#1C1C1E`, purple + berry + teal at low opacity, heavy blur.
**Vibrant Kasane** — linear base (plum → purple → berry → teal), radial highlights layered.
**Light Kasane** — on `#F5F1EB`, soft-purple + rose + teal tints, very heavy blur (50px+).

Copy the exact CSS from the brandbook; do not regenerate from scratch.

### 4.4 Animation

Kasane can drift slowly (18–24s loops) via the `kasane1/2/3` keyframes. Respect `prefers-reduced-motion`.

---

## 5. Components

### 5.1 Buttons

**Shape:** Pill. Always. `border-radius: 999px`.

**Three variants:**
- `bm-btn-primary` — charcoal-on-off-white (or white-on-charcoal via `.bm-on-dark`)
- `bm-btn-secondary` — transparent with 1.5px purple outline (lavender on dark)
- `bm-btn-ghost` — transparent text only

**Sizes:** `bm-btn-sm` (36px), default (44px), `bm-btn-lg` (52px).

**Label voice:** Verb-first. "Let's build together", "Jetzt starten", "Mehr erfahren", "Ventures entdecken". Never "Click here", "Submit", "Learn more" in isolation without a subject.

### 5.2 Cards

- Default: white background, `--border-subtle`, `radius-xl` (20px), `space-8` padding.
- Surface variants: `bm-card-surface/mauve/sage/sand/dark` — use these to group content thematically.
- Never stack three cards of the same surface color in a row — vary the fill or break to neutrals.

### 5.3 Badges / Tags

Small pills, 24px tall, `radius-pill`. Tint variants match the brand triad (purple/berry/teal) plus sage for chart legends. Use sparingly — more than 3 badges in a single view usually signals a layout problem.

### 5.4 Forms

- Inputs are `radius-md` (12px), **not** pill. Only buttons are pill.
- Focus state: purple border + soft purple ring (see tokens).
- Labels above inputs, never placeholders-as-labels.

### 5.5 Navigation

- Sticky header: 60px tall, off-white at 55% opacity, 16px backdrop blur.
- Active-state nav items: pill background in charcoal.

---

## 6. Spacing & layout

- **4pt scale.** Use `--space-*` tokens. If you're writing a custom pixel value, ask yourself why.
- **Container:** max `1200px`, `48px` horizontal padding.
- **Section rhythm:** `120px` between major sections on landing pages, `80px` on denser pages.
- **Grid gutter:** `24px` default.

Negative space is a brand asset. When in doubt, add more.

---

## 7. Imagery

Our image concept rests on three principles:

1. **Character people** — real people with presence and conviction. Not models, not stock-smile. Substance over surface.
2. **Discovering moments even in the ordinary** — the telling detail in an everyday scene. Not staged, not heroic. The image earns attention by what it notices, not by what it arranges.
3. **Surprising perspectives to achieve the unmatched** — unusual angles, tight crops, off-center compositions. Never frontal and polite.

Execution style: **editorial photography** — documentary, natural light, real working contexts. No stock-photo handshakes, no 3D abstract shapes, no AI-generated illustrations.

### 7.1 When you don't have the asset

Use a **striped placeholder block** with a monospace caption describing what belongs there. Never invent an SVG illustration to fill the gap.

```html
<div class="bm-placeholder" data-caption="Team portrait — natural light, desaturated"></div>
```

See the brandbook for the exact placeholder pattern.

### 7.2 Treatment

- Slight desaturation (~-10%) and a warm grade to match off-white canvas
- `radius-xl` (20px) on embedded images
- Full-bleed imagery is allowed in hero sections and cover slides; otherwise contain within grid

### 7.3 What to avoid

- ❌ Stock photography with visible people pointing at screens
- ❌ AI-generated illustrations
- ❌ Flat vector characters
- ❌ Emoji as imagery

---

## 8. Slide decks

Use `copy_starter_component` with `deck_stage.js`. Apply these layouts from the brandbook:

- **Cover** — Kasane Dark/Vibrant, Display size title, tiny eyebrow, no body
- **Section divider** — surface color full-bleed, H1 centered, single-line
- **Content** — 2/3 text + 1/3 visual OR 1/2 split
- **Quote** — large italic quote, attribution in eyebrow style
- **End slide** — "We build ventures that matter." + contact, Kasane Dark

Slide dimensions: **1920×1080**. Minimum text size on slides: **24px**. No exceptions.

---

## 9. Landing-page patterns

Standard landing-page rhythm (top to bottom):

1. **Sticky nav** — logo left, 3–5 links center, one CTA right
2. **Hero** — Kasane background (Dark or Vibrant), Display headline, subhead in `--mid`, two buttons
3. **Value/proof band** — logos or stats on `surface-stone`
4. **Feature trio** — 3 cards, mixed surface colors for rhythm
5. **Deep-dive section** — 2/3 editorial text + 1/3 supporting visual
6. **Ventures showcase** — horizontal scroll or 3-up grid
7. **Secondary CTA block** — Charcoal card with Kasane accent, one headline, one button
8. **Footer** — off-white, three columns, "powered by Bridgemaker" baseline

---

## 10. Motion

- **Transitions:** 150–240ms for UI, 400ms for page-level transitions
- **Easing:** `--ease-out` for entrances, `--ease-in-out` for swaps, `--ease-spring` for playful micro-interactions only
- **Kasane drift:** 18–24s loops, `ease-in-out`, pause on `prefers-reduced-motion`
- **Scroll:** never hijack. No scroll-jacking, no horizontal-on-vertical-scroll tricks.

---

## 11. Do's & Don'ts (the short list)

### Do

- ✅ Load `tokens.css` first
- ✅ Default to `--off-white` background
- ✅ Use pill buttons everywhere
- ✅ Ask when unsure
- ✅ Use placeholders when assets are missing
- ✅ Let negative space breathe

### Don't

- ❌ Use `#FFFFFF` for page backgrounds
- ❌ Put rectangles where pills belong
- ❌ Use Kasane gradients as generic backgrounds
- ❌ Invent SVG illustrations
- ❌ Use emoji as imagery or in headlines
- ❌ Use `--bm-purple` text on dark (use `--bm-lavender-on-dark`)
- ❌ Mix three brand colors at equal weight in one section
- ❌ Improvise brand tone or headline copy — ask

---

## 12. Venture projects

For venture-validation projects (landing pages for Bridgemaker-internal startups), the current rule is:

> **Bridgemaker's venture brands are defined separately.** Do not reuse Bridgemaker's visual identity for ventures without explicit direction from the Creative Director. When asked to build for a venture, ask for the venture's brand assets or confirm it should use Bridgemaker directly.

---

## 13. When Claude should stop and ask

Ask before:

- Choosing an alternative font
- Adding a new brand color
- Writing headline copy for external-facing material (nav, hero, CTA)
- Using imagery (stock, AI, or illustration)
- Deviating from pill-button shape
- Applying Kasane to anything other than a hero/moment section
- Building for a venture

Everything else: build confidently from the tokens.

---

*Bridgemaker Brand v1.0 — April 2026*
