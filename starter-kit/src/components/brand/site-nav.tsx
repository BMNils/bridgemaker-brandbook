"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Sticky top-nav — 60px tall, 55% off-white, 16px backdrop blur (§5.5 CLAUDE.md).
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
        "sticky top-0 z-40 h-[60px] flex items-center transition-[background,border] duration-200",
        scrolled
          ? "bg-off-white/80 backdrop-blur-[16px] border-b border-[rgba(28,28,30,0.06)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="w-full max-w-[1200px] mx-auto px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Wordmark size="sm" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Brandbook" },
            { href: "/components", label: "Components" },
            { href: "/landing-demo", label: "Landing Demo" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] text-charcoal hover:text-bm-purple transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" variant="primary">
          <Link href="/">Zum Brandbook</Link>
        </Button>
      </div>
    </header>
  );
}
