import { Wordmark } from "@/components/brand/wordmark";

/**
 * Brandbook section — editorial header with paragraph number.
 * Matches the structure of the HTML brandbook (§BbSection).
 */
export function BookSection({
  id,
  num,
  title,
  desc,
  children,
}: {
  id: string;
  num: string;
  title: string;
  desc?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-[80px] pt-[120px] pb-[120px] border-t border-charcoal first:border-t-0 first:pt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr] gap-12 items-start mb-[72px]">
        <div className="md:sticky md:top-[84px]">
          <div className="font-mono text-[11px] tracking-[0.05em] text-light mb-4">§ {num}</div>
          <h2 className="text-[44px] leading-[1.05] tracking-[-1.2px] font-semibold text-charcoal">
            {title}
          </h2>
        </div>
        <div>
          {desc && (
            <p className="text-[17px] leading-[1.55] text-charcoal/80 max-w-[620px]">{desc}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

/**
 * Small footer/header for brandbook: wordmark + version badge.
 */
export function BookMastHead() {
  return (
    <section className="max-w-[1200px] mx-auto px-12 pt-24 pb-20">
      <div className="font-mono text-[12px] tracking-[0.05em] text-light mb-10 uppercase">
        Bridgemaker · Brand &amp; Style · v1.0 — 2026
      </div>
      <h1 className="text-display tracking-[-1.9px] max-w-[900px]">
        We build ventures<br />that matter.
      </h1>
      <p className="mt-8 text-[19px] leading-[1.55] text-charcoal/75 max-w-[620px]">
        Das Brandbook für Bridgemaker — Logo, Typografie, Farbe, Komponenten, Bildsprache,
        Slide-Templates, Landingpage-Patterns und die <code className="font-mono text-[0.9em]">CLAUDE.md</code>,
        die Claude bei jedem Projekt lädt.
      </p>
      <div className="mt-10 inline-block">
        <Wordmark size="md" />
      </div>
      <div className="mt-14 inline-block h-[3px] w-16 rounded-[2px] bg-bm-purple" />
    </section>
  );
}
