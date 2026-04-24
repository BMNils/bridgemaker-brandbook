"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Kasane — layered brand gradient. Use for hero moments (one per page, max).
 *
 * Variants:
 *   - `dark`   — on charcoal, plum/purple/teal highlights
 *   - `vibrant`— full saturated base, linear + radials
 *   - `light`  — on off-white, soft purple/rose/teal tints
 *
 * CSS ported 1:1 from `starter-kit/components/Kasane.jsx` in the brandbook repo.
 * Animation respects `prefers-reduced-motion`.
 */

type Variant = "dark" | "vibrant" | "light";

const variants: Record<
  Variant,
  { base: string; layers: string; blur: number; animation: string; noise: number }
> = {
  dark: {
    base: "#1C1C1E",
    layers: [
      "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(138,48,80,0.5) 0%, transparent 60%)",
      "radial-gradient(ellipse 70% 80% at 75% 20%, rgba(107,74,148,0.6) 0%, transparent 55%)",
      "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(144,112,184,0.3) 0%, transparent 50%)",
      "radial-gradient(ellipse 60% 70% at 10% 30%, rgba(74,45,107,0.7) 0%, transparent 50%)",
      "radial-gradient(ellipse 50% 60% at 90% 70%, rgba(58,158,151,0.4) 0%, transparent 50%)",
      "radial-gradient(ellipse 40% 40% at 60% 85%, rgba(122,139,106,0.3) 0%, transparent 45%)",
    ].join(", "),
    blur: 40,
    animation: "bmKasane1 20s ease-in-out infinite",
    noise: 0.03,
  },
  vibrant: {
    base: "linear-gradient(135deg, #4A2D6B 0%, #6B4A94 30%, #B84A6F 60%, #3A9E97 100%)",
    layers: [
      "radial-gradient(ellipse 70% 70% at 25% 75%, rgba(184,74,111,0.7) 0%, transparent 55%)",
      "radial-gradient(ellipse 60% 60% at 70% 25%, rgba(107,74,148,0.8) 0%, transparent 50%)",
      "radial-gradient(ellipse 50% 50% at 85% 70%, rgba(58,158,151,0.65) 0%, transparent 50%)",
      "radial-gradient(ellipse 45% 45% at 40% 40%, rgba(122,139,106,0.4) 0%, transparent 40%)",
      "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(144,112,184,0.3) 0%, transparent 60%)",
    ].join(", "),
    blur: 30,
    animation: "bmKasane3 16s ease-in-out infinite",
    noise: 0.04,
  },
  light: {
    base: "#F5F1EB",
    layers: [
      "radial-gradient(ellipse 70% 60% at 15% 85%, rgba(196,177,220,0.55) 0%, transparent 55%)",
      "radial-gradient(ellipse 60% 70% at 80% 15%, rgba(212,128,154,0.3) 0%, transparent 50%)",
      "radial-gradient(ellipse 50% 50% at 45% 45%, rgba(237,227,245,0.5) 0%, transparent 45%)",
      "radial-gradient(ellipse 60% 50% at 85% 75%, rgba(126,196,190,0.25) 0%, transparent 45%)",
      "radial-gradient(ellipse 40% 40% at 30% 20%, rgba(168,184,154,0.25) 0%, transparent 40%)",
    ].join(", "),
    blur: 50,
    animation: "bmKasane2 24s ease-in-out infinite",
    noise: 0.02,
  },
};

const noiseSvg =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

interface KasaneProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  children?: React.ReactNode;
}

export function Kasane({ variant = "dark", className, children, style, ...rest }: KasaneProps) {
  const v = variants[variant];
  const isLinearBase = v.base.startsWith("linear-gradient");
  const onDark = variant !== "light";
  return (
    <>
      <KasaneKeyframes />
      <div
        {...rest}
        className={cn("relative overflow-hidden", onDark && "bm-on-dark", className)}
        style={{ background: v.base, ...style }}
      >
        <div
          aria-hidden
          className="bm-kasane-drift absolute inset-0 pointer-events-none"
          style={{
            background: v.layers,
            filter: `blur(${v.blur}px)`,
            animation: v.animation,
          }}
        />
        {isLinearBase && (
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 40% 35% at 50% 45%, rgba(255,255,255,0.08) 0%, transparent 50%)",
            }}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: v.noise, backgroundImage: noiseSvg }}
        />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </>
  );
}

/** Injects keyframes once. Safe to render inside every <Kasane /> — styles are idempotent. */
function KasaneKeyframes() {
  return (
    <style>{`
      @keyframes bmKasane1 { 0%,100% { transform: translate(0,0) scale(1.1); } 33% { transform: translate(3%,2%) scale(1.12); } 66% { transform: translate(-2%,-1%) scale(1.08); } }
      @keyframes bmKasane2 { 0%,100% { transform: translate(0,0) scale(1.1); } 50% { transform: translate(-3%,3%) scale(1.13); } }
      @keyframes bmKasane3 { 0%,100% { transform: translate(0,0) scale(1.05); } 40% { transform: translate(2%,-2%) scale(1.07); } 80% { transform: translate(-1%,2%) scale(1.04); } }
      @media (prefers-reduced-motion: reduce) { .bm-kasane-drift { animation: none !important; } }
    `}</style>
  );
}
