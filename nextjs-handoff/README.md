# Bridgemaker Brand — Next.js Handoff

Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui, pre-patched on Bridgemaker tokens.

**Read first:** [`CLAUDE.md`](./CLAUDE.md) — brand rules · [`CLAUDE.dev.md`](./CLAUDE.dev.md) — technical guide.

---

## Quick start

```bash
pnpm install          # or npm / yarn / bun
pnpm dev              # → http://localhost:3000
```

Node 20+ recommended.

### Pages

| Route | What |
|---|---|
| `/` | Example landing page — full Bridgemaker rhythm: Hero (Kasane), value band, principles, deep dive, CTA, footer. |
| `/` | The complete brand book — 14 sections covering logo, type, colors, Kasane, components, imagery, slides, voice, spacing, tokens, Claude instructions. |
| `/components` | Interactive showcase of every shadcn primitive (Button, Card, Badge, Input, Dialog, Sheet, Dropdown, Select, Tabs, Accordion, Command, Form), already styled on Bridgemaker tokens. |

---

## What's in here

```
src/
├─ app/
│  ├─ globals.css          # 🎯 Tokens — edit here, everything cascades
│  ├─ layout.tsx           # Google Fonts (Inter + Inter Display)
│  ├─ page.tsx             # /
│  ├─ brandbook/page.tsx   # /brandbook
│  └─ components/page.tsx  # /components
├─ components/
│  ├─ ui/                  # shadcn/ui primitives — pre-patched
│  │  ├─ button.tsx        # Pill, CVA variants (primary/secondary/ghost/link)
│  │  ├─ card.tsx          # 20px radius, surface variants
│  │  ├─ badge.tsx         # 24px pills, tint variants
│  │  ├─ input.tsx         # 12px radius, purple focus ring
│  │  ├─ label.tsx
│  │  ├─ textarea.tsx
│  │  ├─ dialog.tsx
│  │  ├─ sheet.tsx
│  │  ├─ dropdown-menu.tsx
│  │  ├─ select.tsx
│  │  ├─ tabs.tsx
│  │  ├─ accordion.tsx
│  │  ├─ command.tsx
│  │  └─ form.tsx
│  ├─ brand/               # Bridgemaker-specific
│  │  ├─ wordmark.tsx      # <Wordmark /> · <Monogram />
│  │  ├─ kasane.tsx        # <Kasane variant="dark|vibrant|light" />
│  │  ├─ image-placeholder.tsx
│  │  ├─ swatch.tsx
│  │  └─ site-nav.tsx
│  └─ brandbook/           # the 14 sections
└─ lib/utils.ts            # cn() — clsx + tailwind-merge
```

---

## Design tokens

All tokens live in `src/app/globals.css` inside the Tailwind v4 `@theme { … }` block. Every token becomes a Tailwind utility automatically — e.g. `--color-bm-purple` is available as `bg-bm-purple`, `text-bm-purple`, `border-bm-purple`.

The key tokens:

- **Brand:** `bm-purple` (#6B4A94), `bm-berry` (#B84A6F), `bm-teal` (#3A9E97)
- **Neutrals:** `charcoal` (#1C1C1E), `off-white` (#F5F1EB — **never** use `#FFFFFF` for backgrounds), `mid`, `light`
- **Surfaces:** `surface-stone`, `surface-mauve`, `surface-sage`, `surface-sand`
- **Radii:** `radius-md` (12px — inputs), `radius-xl` (20px — cards), `radius-pill` (999px — buttons only)
- **Fonts:** `font-display` (Inter Display), `font-sans` (Inter)

Editing a token in `globals.css` cascades to every component.

---

## Three golden rules

1. **Pill buttons, always.** Never change the `rounded-full` on `<Button>`.
2. **Off-white, never pure white.** `bg-off-white` is the default page background. `bg-white` is for cards and inputs only.
3. **Kasane is a moment, not wallpaper.** One `<Kasane>` per page, hero-only.

The full rulebook is in `CLAUDE.md`.

---

## Extending

### Adding a new page

1. Create `src/app/<route>/page.tsx`
2. Wrap with `<SiteNav />` and a `<section className="max-w-[1200px] mx-auto px-12">`
3. Compose with existing `@/components/ui/*` and `@/components/brand/*`

### Adding a new component

Read `CLAUDE.dev.md` § "Adding a new shadcn component" — the short version: copy from shadcn docs, swap radii for Bridgemaker values, swap colors for tokens, test on `/components`.

### Adding a new token

Add to `src/app/globals.css` inside `@theme { … }`. It's immediately available as a Tailwind utility.

---

## Scripts

```bash
pnpm dev        # dev server
pnpm build      # production build
pnpm start      # run production build
pnpm lint       # next lint
pnpm typecheck  # tsc --noEmit
```

---

## License

Internal Bridgemaker project. Not for external distribution without approval.

---

*Bridgemaker Brand v1.0 — April 2026*
