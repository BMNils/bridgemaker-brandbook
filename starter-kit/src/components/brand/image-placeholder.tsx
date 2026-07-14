import { cn } from "@/lib/utils";

/**
 * Placeholder block — use when imagery is missing.
 * NEVER invent SVG illustrations to fill the gap. See CLAUDE.md §7.1.
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
      data-caption={caption}
      className={cn("bm-placeholder w-full", className)}
      style={{ aspectRatio: ratio }}
    />
  );
}
