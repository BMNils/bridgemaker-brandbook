import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookSection } from "./book-section";

/* ============================================================
   §11 VOICE & TONE
   ============================================================ */
export function Section11Voice() {
  return (
    <BookSection
      id="voice"
      num="11"
      title="Voice &amp; Tone"
      desc={'„We are matter-of-fact, but know how to express our emotions. Calm and wise, yet fierce and brave. We go deep — but we are crystal clear."'}
    >
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {[
          ["Direkt & präzise", "Keine Buzzwords. Kein Jargon. Kein KI-Geschwätz."],
          ["Ambitioniert & visionär", "Wir bauen Zukunft. Nicht an der Gegenwart feilen."],
          ["Pragmatisch", "\"Wir bauen\" ist das Verb."],
          ["Selbstbewusst, nicht arrogant", "Matter-of-fact, nicht brustgeschwellt."],
        ].map(([t, d]) => (
          <Card key={t} surface="default" className="p-8">
            <div className="text-h4">{t}</div>
            <p className="mt-3 text-[14px] leading-[1.55] text-mid">{d}</p>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card surface="sage" className="p-8">
          <Badge tint="teal">Do</Badge>
          <ul className="mt-6 space-y-3 text-[15px] leading-[1.55] text-charcoal">
            <li>&bdquo;Wir bauen Ventures, die wirken.&ldquo;</li>
            <li>&bdquo;In 6 Wochen zum Prototyp.&ldquo;</li>
            <li>&bdquo;Let&rsquo;s build together.&ldquo;</li>
          </ul>
        </Card>
        <Card className="p-8">
          <Badge tint="berry">Don&rsquo;t</Badge>
          <ul className="mt-6 space-y-3 text-[15px] leading-[1.55] text-mid">
            <li>&bdquo;Synergies leveragen&ldquo;</li>
            <li>&bdquo;Disruptive Innovation unlocken&ldquo;</li>
            <li>&bdquo;AI-powered Transformation&ldquo;</li>
          </ul>
        </Card>
      </div>
    </BookSection>
  );
}

/* ============================================================
   §12 SPACING & MOTION
   ============================================================ */
export function Section12Spacing() {
  const scale = [
    ["1", 4], ["2", 8], ["3", 12], ["4", 16], ["5", 20], ["6", 24],
    ["8", 32], ["10", 40], ["12", 48], ["16", 64], ["20", 80], ["24", 96],
  ] as const;
  return (
    <BookSection
      id="spacing"
      num="12"
      title="Spacing &amp; Motion"
      desc="4pt-Scale. Container max 1200px, 48px horizontal padding. Motion kurz und präzise — 150–240ms für UI."
    >
      <h3 className="text-h4 mb-6">Spacing (4pt)</h3>
      <div className="space-y-2 mb-12">
        {scale.map(([n, px]) => (
          <div key={n} className="flex items-center gap-6">
            <div className="font-mono text-[11px] text-light w-24">--space-{n}</div>
            <div className="font-mono text-[11px] text-mid w-12">{px}px</div>
            <div className="bg-bm-purple h-2 rounded-full" style={{ width: px * 2 }} />
          </div>
        ))}
      </div>

      <h3 className="text-h4 mb-6">Motion</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          ["--dur-fast", "150ms", "UI micro"],
          ["--dur-base", "240ms", "UI default"],
          ["--dur-slow", "400ms", "Page transitions"],
        ].map(([tok, val, desc]) => (
          <Card key={tok} className="p-8">
            <div className="font-mono text-[11px] text-light">{tok}</div>
            <div className="text-h3 mt-3">{val}</div>
            <div className="text-[13px] text-mid mt-2">{desc}</div>
          </Card>
        ))}
      </div>
    </BookSection>
  );
}

/* ============================================================
   §13 DESIGN TOKENS
   ============================================================ */
export function Section13Tokens() {
  return (
    <BookSection
      id="tokens"
      num="13"
      title="Design Tokens"
      desc="Single source of truth. In jedem Projekt als erstes laden. Tailwind v4 @theme in src/app/globals.css."
    >
      <div className="flex gap-3 mb-6 flex-wrap">
        <Button asChild variant="primary"><a href="/globals.css">globals.css</a></Button>
        <Button asChild variant="secondary"><a href="https://tailwindcss.com/docs/theme" target="_blank" rel="noreferrer">Tailwind Theme Docs</a></Button>
      </div>

      <Card className="p-0 overflow-hidden bg-charcoal bm-on-dark">
        <div className="border-b border-white/10 px-6 py-3 font-mono text-[12px] text-soft">
          src/app/globals.css
        </div>
        <pre className="font-mono text-[13px] leading-[1.6] p-6 overflow-x-auto text-off-white">
{`@theme {
  /* Brand */
  --color-bm-purple: #6B4A94;
  --color-bm-berry:  #B84A6F;
  --color-bm-teal:   #3A9E97;

  /* Neutrals */
  --color-charcoal:   #1C1C1E;
  --color-off-white:  #F5F1EB;  /* NEVER #FFFFFF */

  /* Radii */
  --radius-md:   12px;   /* inputs */
  --radius-xl:   20px;   /* cards */
  --radius-pill: 999px;  /* buttons — ALWAYS */

  /* Fonts */
  --font-display: "Inter Display", "Inter", system-ui;
}`}
        </pre>
      </Card>
    </BookSection>
  );
}

/* ============================================================
   §14 CLAUDE.md
   ============================================================ */
export function Section14Claude() {
  return (
    <BookSection
      id="claude"
      num="14"
      title="Claude Instructions"
      desc="Die CLAUDE.md macht dieses Brandbook maschinenlesbar. Claude Code lädt sie bei jedem Projekt — und wendet die Regeln automatisch an."
    >
      <Card surface="dark" className="p-12">
        <Badge tint="purple" className="!bg-bm-purple !text-white">CLAUDE.md</Badge>
        <h3 className="text-h2 mt-6 text-off-white">Machine-readable brand.</h3>
        <p className="mt-6 text-[16px] leading-[1.6] text-soft max-w-[620px]">
          Jedes Next.js-Handoff-Projekt enthält eine kurze <code className="font-mono">CLAUDE.md</code> (Purpose,
          Voice, Don’ts) und eine ausführliche <code className="font-mono">CLAUDE.dev.md</code> (Import-Pfade,
          Komponenten-Referenzen, Token-Namen). Claude Code lädt sie beim Start.
        </p>
        <div className="mt-10 flex gap-3 flex-wrap">
          <Button asChild variant="primary"><a href="https://claude.com" target="_blank" rel="noreferrer">Claude Code öffnen</a></Button>
          <Button asChild variant="secondary"><a href="/CLAUDE.md">CLAUDE.md ansehen</a></Button>
        </div>
      </Card>
    </BookSection>
  );
}
