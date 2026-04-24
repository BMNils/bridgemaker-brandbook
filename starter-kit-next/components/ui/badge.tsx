import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge — small pills. Brand triad variants plus default stone.
 * Use sparingly; more than 3 in a single view usually signals a layout problem.
 */
const badgeVariants = cva(
  "inline-flex items-center h-6 px-[10px] rounded-full text-bm-caption font-medium",
  {
    variants: {
      variant: {
        default: "bg-surface-stone text-charcoal",
        purple:  "bg-bm-purple-tint text-bm-purple",
        berry:   "bg-bm-rose-tint text-bm-deep-berry",
        teal:    "bg-bm-teal-tint text-bm-deep-teal",
        sage:    "bg-bm-sage-tint text-bm-deep-sage",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
