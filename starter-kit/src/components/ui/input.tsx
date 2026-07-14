import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Bridgemaker Input — radius-md (12px). Only buttons are pill-shaped (§5.4).
 * Focus: purple border + soft purple ring.
 */
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full h-11 px-4 rounded-[12px] bg-white text-charcoal",
          "border border-[rgba(28,28,30,0.08)]",
          "text-[15px] placeholder:text-soft",
          "transition-[border-color,box-shadow] duration-150",
          "focus:outline-none focus:border-bm-purple focus:ring-[3px] focus:ring-[rgba(107,74,148,0.12)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          className,
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
