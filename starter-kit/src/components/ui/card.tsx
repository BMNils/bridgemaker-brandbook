import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Bridgemaker Card — radius-xl (20px), space-8 (32px) padding.
 * Surface variants carry brand DNA (§2.3 CLAUDE.md).
 * Never stack three cards of the same surface in a row.
 */
const cardVariants = cva(
  "rounded-[20px] border transition-colors",
  {
    variants: {
      surface: {
        default: "bg-white border-[rgba(28,28,30,0.06)]",
        stone: "bg-surface-stone border-transparent",
        mauve: "bg-surface-mauve border-transparent",
        sage: "bg-surface-sage border-transparent",
        sand: "bg-surface-sand border-transparent",
        dark: "bg-charcoal text-off-white border-transparent bm-on-dark",
      },
    },
    defaultVariants: {
      surface: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, surface, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ surface, className }))} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-2 p-8 pb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-h3 font-medium tracking-[-0.5px]", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[15px] leading-relaxed text-mid", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8 pt-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 p-8 pt-4", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
