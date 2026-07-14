import { cn } from "@/lib/utils";

/**
 * Kasane-Gradient — Familienfarben als radiale Ellipsen über Basis.
 * Rezepte aus dem Gradient-Katalog in tokens.css (guidelines/04):
 * ein Hero-Kasane pro Seite; Gradient-Felder im Wechsel mit ruhigen
 * Flächen, nie zwei direkt aneinander, nie hinter Fließtext.
 */
const VARIANTS = {
  /** Light-Kasane für Seiten-Heroes */
  hero: { bg: "bg-kasane-hero", dark: false },
  /** Dark-Kasane für CTA-Flächen und Mobile-Menü */
  cta: { bg: "bg-kasane-cta", dark: true },
  /** Triade auf Deep-Plum — Abschluss-CTA */
  plum: { bg: "bg-kasane-plum", dark: true },
  /** Ruhiges Mauve-Farbband */
  "band-mauve": { bg: "bg-kasane-band-mauve", dark: false },
  /** Ruhiges Sage-Farbband */
  "band-sage": { bg: "bg-kasane-band-sage", dark: false },
} as const;

export function Kasane({
  variant = "hero",
  drift = false,
  grain = false,
  className,
  children,
}: {
  variant?: keyof typeof VARIANTS;
  /** true = 14s Standard-Drift, "bold" = 9s. Höchstens EIN Motion-Moment pro Sektion. */
  drift?: boolean | "bold";
  /** Grain-Finish auflegen (hell: .grain, dunkel: .grain-screen) */
  grain?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const v = VARIANTS[variant];

  return (
    <div
      className={cn(
        // Drift-Eltern brauchen overflow-hidden (Handwerks-Falle, CLAUDE.md §4)
        "relative overflow-hidden",
        v.bg,
        v.dark && "bm-on-dark",
        drift === true && "kasane-drift",
        drift === "bold" && "kasane-drift-bold",
        grain && (v.dark ? "grain-screen" : "grain"),
        className,
      )}
    >
      {children}
    </div>
  );
}
