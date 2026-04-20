import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Bridgemaker Badge — 24px tall pill. Use sparingly (§5.3).
 * More than 3 badges in a single view usually signals a layout problem.
 */
const badgeVariants = cva(
  "inline-flex items-center h-6 px-2.5 rounded-full text-[12px] font-medium leading-none whitespace-nowrap",
  {
    variants: {
      tint: {
        default: "bg-surface-stone text-charcoal",
        purple: "bg-bm-purple-tint text-bm-purple",
        berry: "bg-bm-rose-tint text-bm-deep-berry",
        teal: "bg-bm-teal-tint text-bm-deep-teal",
        sage: "bg-bm-sage-tint text-bm-deep-sage",
        outline: "border border-[rgba(28,28,30,0.15)] text-charcoal bg-transparent",
      },
    },
    defaultVariants: {
      tint: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, tint, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tint, className }))} {...props} />;
}

export { Badge, badgeVariants };
