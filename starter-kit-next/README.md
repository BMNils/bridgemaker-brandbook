# Bridgemaker · Next.js Starter Kit

Boot a new internal product in under five minutes, brand-aligned from the first pixel.

**Stack:** Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS · shadcn/ui · pnpm

---

## Bootstrap

```bash
# From the brandbook repo
cp -r starter-kit-next ../<new-product-name>
cd ../<new-product-name>
pnpm install
pnpm dev
```

Open http://localhost:3000 — you should see the demo page with a vibrant-Kasane hero and three surface-tinted cards.

> The token imports (`app/globals.css` and `tailwind.config.ts`) reference `../tokens/` relative to the sibling brandbook repo. If you move the product into its own repo, copy `tokens/tokens.css`, `tokens/shadcn.css`, and `tokens/tailwind.preset.ts` into the product's own `tokens/` folder and keep the relative path convention.

---

## What's pre-wired

| File | Purpose |
|---|---|
| `app/globals.css` | Imports `tokens.css` → `shadcn.css` → Tailwind layers, in that order. |
| `tailwind.config.ts` | Consumes the brand Tailwind preset from `../tokens/tailwind.preset.ts`. |
| `app/layout.tsx` | Root layout with Inter loaded via `next/font`. |
| `app/page.tsx` | Demo page you replace with your product. |
| `components/ui/button.tsx` | shadcn Button, pill by default, brand size scale. |
| `components/ui/card.tsx` | Card with `default` / `surface` / `dark` variants. |
| `components/ui/badge.tsx` | Small pill with brand-triad color variants. |
| `components/kasane.tsx` | Typed Kasane component (dark / vibrant / light). |
| `lib/utils.ts` | `cn()` Tailwind merge helper. |

---

## Brand rules that are already enforced

- `rounded-full` is the default Button shape — do **not** override to `rounded-md`.
- Canvas is `--off-white`; cards and inputs may be `white`, the page itself must not.
- Default font stack is Inter (display falls back to Inter too — Inter Display is only a naming hint in tokens).
- On-dark sections use `className="bm-on-dark"` — shadcn semantic colors flip automatically (muted darkens, ring switches to lavender-on-dark, primary inverts).
- Kasane is used once per page max, for hero moments.

---

## Adding more shadcn components

```bash
pnpm dlx shadcn@latest add dialog tabs dropdown-menu
```

shadcn will install into `components/ui/`. Because our semantic tokens (`--primary`, `--muted`, `--border`, `--ring`, etc.) are already bridged to Bridgemaker colors in `tokens/shadcn.css`, newly installed components render on-brand without further theming.

**Before merging, check:**
1. No hard-coded colors bypass the semantic tokens.
2. Buttons inside new components still read as pill.
3. Inputs use `rounded-md` (12px, per brand — inputs are **not** pill).

---

## Editing the brand

**All brand values live in one place.** Update `../tokens/tokens.css` (hex values, spacing scale, radii, typography). Both bridges consume from there:

- `tokens/shadcn.css` maps semantic variables (`--primary → var(--charcoal)`, etc.) as HSL triplets.
- `tokens/tailwind.preset.ts` re-exports brand values as Tailwind theme entries.

If you add a new surface color or radius in `tokens.css`, add a line in the preset to surface it as a Tailwind utility.

---

## Deploying

Designed to run on Cloudflare Pages (same as the brandbook) or Vercel.

**Cloudflare Pages:**
```
Build command: pnpm install --frozen-lockfile && pnpm build
Build output: .next
Node version: 20
```

Add env vars in dashboard. If you need server functions, put them under `functions/api/*.ts` at the repo root (outside `app/`) — Cloudflare auto-detects them.

---

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| Buttons are rectangular | You overrode `rounded-full`, or imported the wrong Button. |
| Colors look default Tailwind (blue/gray) | `shadcn.css` didn't load — check the import order in `globals.css`. |
| Type error on `preset` import | Run `pnpm install` first; TypeScript needs the preset's types resolved. |
| Kasane doesn't animate | `prefers-reduced-motion` is set in the OS, or the keyframes didn't inject. |
| `Inter Display` not loading | Expected — we only load Inter. The token falls back to Inter gracefully. |

---

## When NOT to use this starter

- Vanilla HTML one-pagers (a quick landing page on Cloudflare Pages)
- Slide decks / figma-plugin UIs
- Any static artifact that doesn't need React or a build step

Those consume `tokens.css` directly and use the `bm-*` utility classes in `brandbook/`. See `CLAUDE.md` section **"Stack · Defaults for new interactive projects"** for the full rule.
