import { cn } from "@/lib/utils";

/**
 * Bridgemaker Wordmark — "B—M".
 * The em-dash IS the logo. It represents the direct connection between
 * two worlds (Corporate ↔ Startup). See CLAUDE.md §1.2.
 *
 * size: xs (16px) · sm (20px) · md (28px, default) · lg (44px) · xl (72px)
 */
export function Wordmark({
  size = "md",
  className,
  onDark = false,
}: {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  onDark?: boolean;
}) {
  const sizes = {
    xs: "text-[16px]",
    sm: "text-[20px]",
    md: "text-[28px]",
    lg: "text-[44px]",
    xl: "text-[72px]",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center font-display font-semibold tracking-[-0.04em] select-none",
        sizes[size],
        onDark ? "text-off-white" : "text-charcoal",
        className,
      )}
      aria-label="Bridgemaker"
    >
      B
      <span aria-hidden className="mx-[0.12em] inline-block h-[0.08em] w-[0.45em] bg-current rounded-full align-middle" />
      M
    </span>
  );
}

/**
 * Monogram — for avatars, app icons, favicons. Square with radius.
 */
export function Monogram({
  size = 40,
  className,
  onDark = false,
}: {
  size?: number;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.22) }}
      className={cn(
        "inline-grid place-items-center font-display font-semibold tracking-[-0.05em]",
        onDark ? "bg-off-white text-charcoal" : "bg-charcoal text-off-white",
        className,
      )}
      aria-label="Bridgemaker"
    >
      <span style={{ fontSize: Math.round(size * 0.42) }} className="inline-flex items-center">
        B
        <span aria-hidden className="mx-[0.1em] inline-block h-[0.08em] w-[0.4em] bg-current rounded-full" />
        M
      </span>
    </span>
  );
}
