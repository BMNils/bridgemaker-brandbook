# CLAUDE.dev.md — Next.js technical guide

> Companion to [`CLAUDE.md`](./CLAUDE.md). The main file holds **brand rules**. This file holds **file paths, import conventions, and Tailwind-specific patterns** so Claude Code can write correct TSX without guessing.

---

## Stack

- **Next.js 15** · App Router · Server Components by default
- **React 18** · TypeScript strict
- **Tailwind CSS v4** via `@tailwindcss/postcss` — config lives in `src/app/globals.css` inside `@theme { … }`
- **shadcn/ui** — all primitives pre-patched on Bridgemaker tokens in `src/components/ui/`
- **Radix UI** primitives via shadcn
- **lucide-react** for icons
- **react-hook-form + zod** for forms

No other dependencies without approval.

---

## File layout

```
nextjs-handoff/
├─ CLAUDE.md                       # Brand rules (read first)
├─ CLAUDE.dev.md                   # This file
├─ README.md
├─ package.json
├─ tsconfig.json                   # @/* → src/*
├─ next.config.ts
├─ postcss.config.mjs
├─ components.json                 # shadcn registry
└─ src/
   ├─ app/
   │  ├─ layout.tsx                # loads globals.css + Google fonts
   │  ├─ globals.css               # 🎯 SINGLE SOURCE OF TRUTH — @theme tokens
   │  ├─ page.tsx                  # / — example landing
   │  ├─ components/page.tsx       # /components — shadcn showcase
   │  └─ brandbook/page.tsx        # /brandbook — 14 sections
   ├─ components/
   │  ├─ ui/                       # shadcn primitives (Button, Card, …)
   │  └─ brand/                    # Bridgemaker-specific (Wordmark, Kasane, …)
   ├─ components/brandbook/        # brandbook sections
   └─ lib/
      └─ utils.ts                  # cn() helper (clsx + tailwind-merge)
```

---

## Import paths

Always use the `@/*` alias:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wordmark } from "@/components/brand/wordmark";
import { Kasane } from "@/components/brand/kasane";
import { ImagePlaceholder } from "@/components/brand/image-placeholder";
import { cn } from "@/lib/utils";
```

Never use relative imports (`../../components/...`). Never reach into `node_modules`.

---

## Bridgemaker components (`@/components/brand/*`)

| Component | When |
|---|---|
| `<Wordmark size="xs|sm|md|lg|xl" onDark />` | Logo. Use everywhere the B—M text belongs. Never hand-code. |
| `<Monogram size={40} onDark />` | Square avatar / app-icon context. |
| `<Kasane variant="dark|vibrant|light" animate>` | Atmospheric hero background only. Max one per page. |
| `<ImagePlaceholder caption="…" ratio="4/3" />` | Missing imagery. Never invent SVG illustrations. |
| `<Swatch name hex token usage />` | Brandbook color cards. |
| `<SiteNav />` | Sticky top nav (60px, off-white/55, backdrop-blur). |

---

## shadcn components (`@/components/ui/*`)

All pre-patched on tokens. **Do not re-install from shadcn CLI** without reading the diff — our versions have Bridgemaker defaults baked in (pill buttons, 12px inputs, purple ring).

Available: `button`, `card`, `badge`, `input`, `label`, `textarea`, `dialog`, `sheet`, `dropdown-menu`, `select`, `tabs`, `accordion`, `command`, `form`.

### Button — CVA variants

```tsx
<Button variant="primary">Let's build</Button>   // charcoal-on-off-white
<Button variant="secondary">Mehr erfahren</Button>  // purple outline
<Button variant="ghost">Abbrechen</Button>
<Button variant="link">Text link</Button>
<Button variant="destructive">Löschen</Button>
<Button size="sm | default | lg | icon" />
<Button asChild><Link href="…">Wrap next/link</Link></Button>
```

### Card — surfaces

```tsx
<Card surface="default | stone | mauve | sage | sand | dark">
```

`surface="dark"` automatically adds `.bm-on-dark` so nested `<Button>`, `<Badge>`, and text inherit the dark context.

### Badge — tints

```tsx
<Badge tint="default | purple | berry | teal | sage | outline">
```

---

## Tailwind class conventions

Tailwind v4 reads the `@theme` block in `globals.css`. Every token becomes a utility automatically:

| Token | Utility |
|---|---|
| `--color-bm-purple` | `bg-bm-purple`, `text-bm-purple`, `border-bm-purple`, `ring-bm-purple` |
| `--color-off-white` | `bg-off-white`, `text-off-white` |
| `--color-surface-stone` | `bg-surface-stone` |
| `--color-charcoal` | `bg-charcoal`, `text-charcoal` |
| `--color-mid` | `text-mid` |
| `--font-display` | `font-display` |
| `--font-sans` | `font-sans` (default) |
| `--radius-pill` | `rounded-full` (999px → full is equivalent) |

### Typography — use utility classes, not arbitrary values

```tsx
<h1 className="text-display">We build ventures</h1>         // ✅
<h1 className="text-[64px] font-semibold tracking-tight">…</h1>  // ❌ do not reinvent
```

### Radii

- `rounded-full` — **buttons only** (pill)
- `rounded-[12px]` — inputs, selects, dropdowns
- `rounded-[16px]` — dropdowns, popovers
- `rounded-[20px]` — cards

### `.bm-on-dark` context

Wrap a container in `bm-on-dark` to flip the theme for everything inside. This sets `--color-background`, `--color-foreground`, `--color-primary`, etc. to their dark counterparts — so `<Button>`, `<Card>`, focus rings, and semantic colors all adapt automatically.

```tsx
<section className="bm-on-dark bg-charcoal p-12">
  <Button variant="primary">Primary on dark</Button>   {/* flips to off-white */}
  <Button variant="secondary">Secondary</Button>       {/* purple → lavender-on-dark */}
</section>
```

---

## Server vs client components

- Default to **Server Components**. No `"use client"` unless you need state, effects, or browser APIs.
- Components that require client: anything using `useState`, `useEffect`, `onClick` directly on DOM, Radix primitives that need interactivity (Dialog, Sheet, Dropdown, Select, Tabs, Accordion, Command). These are already marked in `@/components/ui/*`.
- Pages are Server Components by default. Only mark `"use client"` when the page itself needs state.

---

## Adding a new shadcn component

Don't use `npx shadcn add <name>` blindly — it may overwrite the Bridgemaker-patched version.

Instead:
1. Copy the raw source from shadcn/ui docs
2. Replace hard-coded radii: `rounded-md` → `rounded-[12px]` for inputs, `rounded-full` for button-like elements
3. Replace hard-coded colors: `bg-primary` → `bg-charcoal`, `text-primary-foreground` → `text-off-white`
4. Replace focus ring: `ring-ring` → `ring-bm-purple`
5. Test on `/components` page

Or ask first.

---

## Forms

```tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({ email: z.string().email() });

export function SignupForm() {
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { email: "" } });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)} className="space-y-4">
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>E-Mail</FormLabel>
            <FormControl><Input {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit">Senden</Button>
      </form>
    </Form>
  );
}
```

---

## Pages & layout

- **Page wrapper:** `<> <SiteNav /> <section>…</section> </>` — no extra wrapper div.
- **Container:** `max-w-[1200px] mx-auto px-12` — the Bridgemaker container.
- **Section rhythm:** `py-[120px]` between major sections, `py-20` on denser pages.

---

## Icons

Use `lucide-react`. Size is controlled by the parent or the `[&_svg]:size-4` pattern in Button. Default to `size-4` (16px) for inline icons, `size-5` (20px) for standalone.

```tsx
import { ArrowRight, Check, X } from "lucide-react";

<Button>Let's build <ArrowRight /></Button>
```

---

## What to never do

- ❌ `className="bg-white text-black"` on a page root
- ❌ Inline styles for colors, radii, or font sizes — use utilities
- ❌ `rounded-md` on buttons — buttons are pill
- ❌ Reach into `node_modules` or bypass `@/` alias
- ❌ Edit `components/ui/*` without updating both light and `.bm-on-dark` contexts
- ❌ Add new global CSS outside `@theme` or `@layer utilities` in `globals.css`
- ❌ Install a UI library other than the one already here

---

## When in doubt

Read `CLAUDE.md` for brand rules. Read `/components` in the running app to see every primitive. Read `/` to see the system applied.

If still unsure — ask.
