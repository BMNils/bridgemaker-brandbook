import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card — Bridgemaker brand.
 *
 *   - Default: white background on off-white canvas, `rounded-xl` (20px), no visible border.
 *   - Use `variant="surface"` + the `surface` prop for tinted section cards (stone, mauve, sand, sage).
 *   - Use `variant="dark"` for charcoal hero blocks (auto-applies `bm-on-dark` for nested components).
 */
type Surface = "stone" | "mauve" | "sand" | "sage";

const surfaceClass: Record<Surface, string> = {
  stone: "bg-surface-stone",
  mauve: "bg-surface-mauve",
  sand:  "bg-surface-sand",
  sage:  "bg-surface-sage",
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "surface" | "dark";
  surface?: Surface;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", surface = "stone", ...props }, ref) => {
    const base = "rounded-xl p-space-8";
    const byVariant =
      variant === "dark"
        ? "bg-charcoal text-off-white bm-on-dark"
        : variant === "surface"
        ? surfaceClass[surface]
        : "bg-card text-card-foreground";
    return (
      <div ref={ref} className={cn(base, byVariant, className)} {...props} />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-space-2", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-bm-h3 font-display tracking-[-0.5px]", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-bm-body text-mid", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-space-4", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-space-6 flex items-center gap-space-3", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
