import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImagePlaceholder } from "@/components/brand/image-placeholder";
import { BookSection } from "./book-section";

/* ============================================================
   §07 COMPONENTS (overview — full playground is /components)
   ============================================================ */
export function Section07Components() {
  return (
    <BookSection
      id="components"
      num="07"
      title="Components"
      desc="Buttons sind immer pill-shape. Inputs haben 12px-Radius. Cards haben 20px. Jede Komponente nutzt Token-Defaults. Der vollständige Komponenten-Katalog liegt unter /components."
    >
      {/* Buttons */}
      <h3 className="text-h4 mb-4">Buttons</h3>
      <Card className="p-10 mb-4">
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Text link</Button>
        </div>
      </Card>
      <Card surface="dark" className="p-10 mb-12">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>

      {/* Badges */}
      <h3 className="text-h4 mb-4">Badges</h3>
      <Card className="p-10 mb-12">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge tint="purple">Purple</Badge>
          <Badge tint="berry">Berry</Badge>
          <Badge tint="teal">Teal</Badge>
          <Badge tint="sage">Sage</Badge>
        </div>
      </Card>

      {/* Form */}
      <h3 className="text-h4 mb-4">Form</h3>
      <Card className="p-10">
        <div className="grid md:grid-cols-2 gap-6 max-w-[640px]">
          <div>
            <Label htmlFor="bb-name">Name</Label>
            <Input id="bb-name" placeholder="Dein Name" />
          </div>
          <div>
            <Label htmlFor="bb-email">E-Mail</Label>
            <Input id="bb-email" placeholder="you@company.com" />
          </div>
        </div>
      </Card>
    </BookSection>
  );
}

/* ============================================================
   §08 IMAGERY — "Alex"
   ============================================================ */
export function Section08Imagery() {
  return (
    <BookSection
      id="imagery"
      num="08"
      title='Imagery — "Alex"'
      desc={'Bildkonzept „Alex“. Drei Prinzipien: Character people · Surprising perspectives · Bold color presence. Editorial, documentary, natürliches Licht. Kein Stock, keine AI-Illustrations.'}
    >
      <div className="grid md:grid-cols-3 gap-4">
        <ImagePlaceholder ratio="3/4" caption="Portrait — off-center, natural light, -10% desat" />
        <ImagePlaceholder ratio="3/4" caption="Working context — documentary, one colour accent" />
        <ImagePlaceholder ratio="3/4" caption="Unusual angle — tight crop, real texture" />
      </div>
      <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-6 items-start">
        <p className="text-[15px] leading-[1.6] text-mid max-w-[540px]">
          Bei fehlenden Assets: <strong className="text-charcoal font-medium">gestreifter Placeholder-Block</strong> mit
          Monospace-Caption. Niemals SVG-Illustrationen erfinden, um die Lücke zu füllen.
        </p>
        <code className="font-mono text-[12px] bg-white border border-[rgba(28,28,30,0.06)] px-4 py-2 rounded-[8px] text-mid">
          &lt;ImagePlaceholder caption=&quot;...&quot; /&gt;
        </code>
      </div>
    </BookSection>
  );
}

/* ============================================================
   §09 SLIDE TEMPLATES
   ============================================================ */
export function Section09Slides() {
  const templates = [
    ["Cover", "kasane-dark"],
    ["Section divider", "surface-sand"],
    ["Content 2/3", "bg-white"],
    ["Quote", "bg-white"],
    ["Full-bleed image", "surface-stone"],
    ["End slide", "kasane-dark"],
  ] as const;

  return (
    <BookSection
      id="slides"
      num="09"
      title="Slide Templates"
      desc="1920×1080. Mindest-Schriftgröße: 24px. Kasane nur auf Cover und End. Text und Visual im 2/3-1/3 oder 1/2-Split."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {templates.map(([name, bg]) => (
          <div key={name} className="space-y-3">
            <div className={`aspect-[16/9] rounded-[12px] overflow-hidden ${bg.startsWith("kasane") ? bg : `bg-${bg.replace("bg-", "")}`}`}>
              <div className="h-full w-full flex items-end p-6">
                <div className={`text-[12px] font-medium ${bg.startsWith("kasane") ? "text-off-white" : "text-charcoal"}`}>
                  {name}
                </div>
              </div>
            </div>
            <div className="font-mono text-[11px] text-light">{name}</div>
          </div>
        ))}
      </div>
    </BookSection>
  );
}

/* ============================================================
   §10 LANDING PATTERNS
   ============================================================ */
export function Section10Landing() {
  const sections = [
    ["Sticky nav", "60px, 55% off-white, 16px blur"],
    ["Hero", "Kasane (Dark/Vibrant), Display headline, 2 buttons"],
    ["Value band", "Logos oder Stats auf surface-stone"],
    ["Feature trio", "3 Cards, mixed surfaces"],
    ["Deep-dive", "2/3 editorial + 1/3 supporting visual"],
    ["Ventures", "3-up grid oder horizontal scroll"],
    ["Secondary CTA", "Charcoal card mit Kasane accent"],
    ["Footer", "off-white, 3 columns, 'powered by Bridgemaker'"],
  ];
  return (
    <BookSection
      id="landing"
      num="10"
      title="Landingpage Patterns"
      desc="Der Bridgemaker-Rhythmus. Acht Sections, in dieser Reihenfolge."
    >
      <div className="grid md:grid-cols-2 gap-3">
        {sections.map(([name, desc], i) => (
          <div
            key={name}
            className="flex items-baseline gap-6 border border-[rgba(28,28,30,0.06)] rounded-[12px] px-6 py-5 bg-white"
          >
            <div className="font-mono text-[11px] text-light w-6">{String(i + 1).padStart(2, "0")}</div>
            <div className="flex-1">
              <div className="text-[15px] font-medium">{name}</div>
              <div className="text-[13px] text-mid mt-1">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </BookSection>
  );
}
