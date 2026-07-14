import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full min-h-[120px] px-4 py-3 rounded-[12px] bg-white text-charcoal",
        "border border-[rgba(28,28,30,0.08)]",
        "text-[15px] leading-relaxed placeholder:text-soft",
        "transition-[border-color,box-shadow] duration-150",
        "focus:outline-none focus:border-bm-purple focus:ring-[3px] focus:ring-[rgba(107,74,148,0.12)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "resize-y",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
