"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Bridgemaker Button — Pill-shape ALWAYS (radius-pill / 999px).
 * Never change the corner radius. See CLAUDE.md §5.1.
 *
 * Variants:
 *   primary   — Charcoal-on-off-white; flips on .bm-on-dark
 *   secondary — Transparent + 1.5px purple outline (lavender on dark)
 *   ghost     — Text only
 *   link      — Plain text link, purple
 *
 * Sizes: sm (36px) · default (44px) · lg (52px)
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full",
    "font-medium transition-[background,color,transform] duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bm-purple focus-visible:ring-offset-2 focus-visible:ring-offset-off-white",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:translate-y-px",
    "[&_svg]:shrink-0 [&_svg]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-charcoal text-off-white hover:bg-black bm-on-dark:bg-off-white bm-on-dark:text-charcoal bm-on-dark:hover:bg-white",
        secondary:
          "bg-transparent text-bm-purple shadow-[inset_0_0_0_1.5px_var(--color-bm-purple)] hover:bg-bm-purple-tint bm-on-dark:text-bm-lavender-on-dark bm-on-dark:shadow-[inset_0_0_0_1.5px_var(--color-bm-lavender-on-dark)] bm-on-dark:hover:bg-[rgba(175,148,210,0.1)]",
        ghost:
          "bg-transparent text-charcoal hover:bg-surface-stone bm-on-dark:text-off-white bm-on-dark:hover:bg-[rgba(245,241,235,0.08)]",
        link:
          "bg-transparent text-bm-purple underline-offset-4 hover:underline px-0 h-auto bm-on-dark:text-bm-lavender-on-dark",
        destructive:
          "bg-bm-berry text-white hover:bg-bm-deep-berry",
      },
      size: {
        default: "h-11 px-7 text-[15px]",
        sm: "h-9 px-5 text-[13px]",
        lg: "h-[52px] px-9 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
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
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
