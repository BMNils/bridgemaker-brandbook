"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — Bridgemaker brand-aligned.
 *
 *   - Default shape is pill (`rounded-full`) per brandbook.
 *   - Sizes map to brand button heights (36/44/52 px).
 *   - Variants mirror the three brand button styles:
 *       default  → bm-btn-primary   (charcoal fill)
 *       outline  → bm-btn-secondary (purple stroke)
 *       ghost    → bm-btn-ghost     (transparent)
 *
 * On `.bm-on-dark` sections the semantic tokens flip automatically —
 * no per-component overrides needed.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "bg-transparent text-bm-purple shadow-[inset_0_0_0_1.5px_var(--bm-purple)] hover:bg-bm-purple-tint",
        ghost:
          "bg-transparent text-charcoal hover:bg-surface-stone",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link:
          "text-bm-purple underline-offset-4 hover:underline",
      },
      size: {
        sm:      "h-9 px-btn-px-sm text-[13px]",
        default: "h-11 px-btn-px text-[15px]",
        lg:      "h-btn-lg px-btn-px-lg text-base",
        icon:    "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
