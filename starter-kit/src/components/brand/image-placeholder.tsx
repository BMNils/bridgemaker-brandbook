import { cn } from "@/lib/utils";

/**
 * Gestreifter Bild-Platzhalter mit Monospace-Caption — der Standard,
 * wenn ein Asset fehlt (guidelines/07 §7.7). NIE stattdessen eine
 * SVG-Illustration erfinden.
 */
export function ImagePlaceholder({
  caption,
  ratio = "4/3",
  className,
}: {
  caption: string;
  ratio?: "1/1" | "4/3" | "16/9" | "3/2" | "2/3" | string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-stripes-diagonal",
        className,
      )}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={caption}
    >
      <span
        className="absolute bottom-3 left-3 bg-off-white px-2.5 py-1 text-charcoal"
        style={{ font: "500 12px/1.4 var(--font-mono)" }}
      >
        {caption}
      </span>
    </div>
  );
}
