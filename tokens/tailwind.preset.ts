import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * Bridgemaker Tailwind preset.
 *
 * This is a thin bridge that re-exports design tokens from `tokens.css`
 * as Tailwind theme extensions. It does NOT re-declare values — everything
 * references CSS custom properties, so `tokens.css` stays the single source
 * of truth.
 *
 * Usage (in any new Next.js app):
 *   import preset from "../../tokens/tailwind.preset";
 *   export default { presets: [preset], content: [...] } satisfies Config;
 */
const preset: Partial<Config> = {
  darkMode: ["class", ".bm-on-dark"],
  plugins: [animate],
  theme: {
    extend: {
      colors: {
        // ---------- Brand triad ----------
        "bm-purple":          "var(--bm-purple)",
        "bm-deep-plum":       "var(--bm-deep-plum)",
        "bm-lavender":        "var(--bm-lavender)",
        "bm-soft-purple":     "var(--bm-soft-purple)",
        "bm-purple-tint":     "var(--bm-purple-tint)",
        "bm-lavender-on-dark":"var(--bm-lavender-on-dark)",

        "bm-berry":           "var(--bm-berry)",
        "bm-deep-berry":      "var(--bm-deep-berry)",
        "bm-dusty-rose":      "var(--bm-dusty-rose)",
        "bm-rose-tint":       "var(--bm-rose-tint)",

        "bm-teal":            "var(--bm-teal)",
        "bm-deep-teal":       "var(--bm-deep-teal)",
        "bm-soft-teal":       "var(--bm-soft-teal)",
        "bm-teal-tint":       "var(--bm-teal-tint)",

        "bm-sage":            "var(--bm-sage)",
        "bm-deep-sage":       "var(--bm-deep-sage)",
        "bm-soft-sage":       "var(--bm-soft-sage)",
        "bm-sage-tint":       "var(--bm-sage-tint)",

        // ---------- Neutrals ----------
        charcoal:    "var(--charcoal)",
        dark:        "var(--dark)",
        mid:         "var(--mid)",
        soft:        "var(--soft)",
        light:       "var(--light)",
        "off-white": "var(--off-white)",

        // ---------- Surfaces ----------
        "surface-stone":     "var(--surface-stone)",
        "surface-mauve":     "var(--surface-mauve)",
        "surface-sage":      "var(--surface-sage)",
        "surface-sand":      "var(--surface-sand)",
        "surface-mid-stone": "var(--surface-mid-stone)",
        "surface-mid-mauve": "var(--surface-mid-mauve)",
        "surface-mid-sage":  "var(--surface-mid-sage)",
        "surface-dark":      "var(--surface-dark)",

        // ---------- shadcn semantic (HSL triplets — see tokens/shadcn.css) ----------
        // These support opacity modifiers like `bg-primary/50`.
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
      },

      // ---------- Typography ----------
      fontFamily: {
        display: ["Inter Display", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body:    ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono:    ["JetBrains Mono", "Menlo", "Monaco", "monospace"],
      },
      fontSize: {
        "display-xl": ["128px", { lineHeight: "1.00", letterSpacing: "-3.8px", fontWeight: "400" }],
        "display-l":  ["96px",  { lineHeight: "1.05", letterSpacing: "-2.9px", fontWeight: "500" }],
        display:      ["64px",  { lineHeight: "1.10", letterSpacing: "-1.9px", fontWeight: "600" }],
        "bm-h1":      ["48px",  { lineHeight: "1.15", letterSpacing: "-1.2px", fontWeight: "600" }],
        "bm-h2":      ["32px",  { lineHeight: "1.25", letterSpacing: "-0.8px", fontWeight: "600" }],
        "bm-h3":      ["24px",  { lineHeight: "1.30", letterSpacing: "-0.5px", fontWeight: "500" }],
        "bm-h4":      ["20px",  { lineHeight: "1.40", letterSpacing: "-0.3px", fontWeight: "500" }],
        "bm-body":    ["16px",  { lineHeight: "1.60", fontWeight: "400" }],
        "bm-small":   ["14px",  { lineHeight: "1.50", fontWeight: "400" }],
        "bm-caption": ["12px",  { lineHeight: "1.40", fontWeight: "400" }],
        "bm-eyebrow": ["12px",  { lineHeight: "1.40", letterSpacing: "0.08em", fontWeight: "500" }],
      },

      // ---------- Spacing (4pt scale; merged with Tailwind defaults) ----------
      spacing: {
        "space-1":  "var(--space-1)",
        "space-2":  "var(--space-2)",
        "space-3":  "var(--space-3)",
        "space-4":  "var(--space-4)",
        "space-5":  "var(--space-5)",
        "space-6":  "var(--space-6)",
        "space-8":  "var(--space-8)",
        "space-10": "var(--space-10)",
        "space-12": "var(--space-12)",
        "space-16": "var(--space-16)",
        "space-20": "var(--space-20)",
        "space-24": "var(--space-24)",
        "space-30": "var(--space-30)",
        // Button dimensions
        "btn-sm":    "var(--btn-h-sm)",
        btn:         "var(--btn-h)",
        "btn-lg":    "var(--btn-h-lg)",
        "btn-px-sm": "var(--btn-px-sm)",
        "btn-px":    "var(--btn-px)",
        "btn-px-lg": "var(--btn-px-lg)",
      },

      // ---------- Radii ----------
      borderRadius: {
        sm:    "var(--radius-sm)",
        DEFAULT:"var(--radius-md)",
        md:    "var(--radius-md)",
        lg:    "var(--radius-lg)",
        xl:    "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill:  "var(--radius-pill)",
      },

      // ---------- Shadows ----------
      boxShadow: {
        "bm-xs": "var(--shadow-xs)",
        "bm-sm": "var(--shadow-sm)",
        "bm-md": "var(--shadow-md)",
        "bm-lg": "var(--shadow-lg)",
      },

      // ---------- Motion ----------
      transitionTimingFunction: {
        "bm-out":    "var(--ease-out)",
        "bm-in-out": "var(--ease-in-out)",
        "bm-spring": "var(--ease-spring)",
      },
      transitionDuration: {
        "bm-fast": "150ms",
        "bm-base": "240ms",
        "bm-slow": "400ms",
      },

      // ---------- Layout ----------
      maxWidth: {
        "bm-container": "var(--container-max)",
      },
    },
  },
};

export default preset;
