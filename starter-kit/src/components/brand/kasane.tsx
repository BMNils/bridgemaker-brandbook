import { cn } from "@/lib/utils";

/**
 * Kasane Gradient — atmospheric background. Use only for hero-moments (§4).
 * Variants: dark, vibrant, light. Never as generic wallpaper.
 */
export function Kasane({
  variant = "dark",
  animate = false,
  className,
  children,
}: {
  variant?: "dark" | "vibrant" | "light";
  animate?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variant === "dark" && "kasane-dark",
        variant === "vibrant" && "kasane-vibrant",
        variant === "light" && "kasane-light",
        animate && "kasane-animate",
        className,
      )}
    >
      {children}
    </div>
  );
}
