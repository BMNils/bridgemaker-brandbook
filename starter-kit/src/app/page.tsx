import { SiteNav } from "@/components/brand/site-nav";
import { BookMastHead } from "@/components/brandbook/book-section";
import {
  Section01Logo,
  Section02Story,
  Section03Type,
  Section04Display,
  Section05Colors,
  Section06Kasane,
} from "@/components/brandbook/sections-1-6";
import {
  Section07Components,
  Section08Imagery,
  Section09Slides,
  Section10Landing,
} from "@/components/brandbook/sections-7-10";
import {
  Section11Voice,
  Section12Spacing,
  Section13Tokens,
  Section14Claude,
} from "@/components/brandbook/sections-11-14";

export default function BrandbookPage() {
  return (
    <>
      <SiteNav />
      <BookMastHead />
      <div className="max-w-[1200px] mx-auto px-12">
        <Section01Logo />
        <Section02Story />
        <Section03Type />
        <Section04Display />
        <Section05Colors />
        <Section06Kasane />
        <Section07Components />
        <Section08Imagery />
        <Section09Slides />
        <Section10Landing />
        <Section11Voice />
        <Section12Spacing />
        <Section13Tokens />
        <Section14Claude />
      </div>

      <footer className="border-t border-charcoal mt-20">
        <div className="max-w-[1200px] mx-auto px-12 py-10 flex items-center justify-between text-[12px] text-mid font-mono">
          <span>Bridgemaker Brand · v1.0 — 2026</span>
          <span>end of document</span>
        </div>
      </footer>
    </>
  );
}
