"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/wordmark";
import { cn } from "@/lib/utils";

/**
 * Header — fix, 64px, transparent → blur-solid beim Scrollen
 * (guidelines/07 §7.5). Wortmarke 20px; Nav-CTA als Charcoal-Pill.
 * Frost über Tailwind-Utilities am Element (Handwerks-Falle 1).
 */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex h-16 items-center transition-[background-color,border-color] duration-200",
        scrolled
          ? /* Haarlinie beziffert wie die Website (Nav.tsx: border-charcoal/10) —
               nie volles Charcoal/Schwarz (07 §7.5; Nils, 2026-07-24). */
            "border-b border-charcoal/10 bg-white/30 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center" aria-label="Startseite">
          <Wordmark height={20} />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {[{ href: "/", label: "Komponenten" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="type-nav text-charcoal transition-colors hover:text-bm-purple"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://bridgemaker-brandbook.vercel.app"
          className="bm-btn bm-btn-primary bm-btn-sm"
        >
          Zum Brand-System
        </a>
      </div>
    </header>
  );
}
