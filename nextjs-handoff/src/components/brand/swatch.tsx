"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

/**
 * Color swatch — copy-on-click. Used in the brandbook.
 */
export function Swatch({
  name,
  hex,
  token,
  usage,
  light,
  className,
}: {
  name: string;
  hex: string;
  token?: string;
  usage?: string;
  light?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator === "undefined") return;
    navigator.clipboard?.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "group relative flex flex-col items-stretch text-left rounded-[16px] overflow-hidden cursor-pointer transition-transform duration-150 hover:-translate-y-0.5",
        className,
      )}
      aria-label={`Copy ${hex}`}
    >
      <div
        className="h-24 relative"
        style={{ backgroundColor: hex }}
      >
        <span
          className={cn(
            "absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 h-6 text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity",
            light ? "bg-charcoal/10 text-charcoal" : "bg-white/15 text-white backdrop-blur-sm",
          )}
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied" : hex}
        </span>
      </div>
      <div className="bg-white p-4 border border-t-0 border-[rgba(28,28,30,0.06)] rounded-b-[16px]">
        <div className="text-[15px] font-medium text-charcoal">{name}</div>
        <div className="font-mono text-[12px] text-mid mt-0.5">{hex}</div>
        {token && (
          <div className="font-mono text-[11px] text-light mt-1.5">{token}</div>
        )}
        {usage && (
          <div className="text-[13px] text-mid mt-2 leading-snug">{usage}</div>
        )}
      </div>
    </button>
  );
}
