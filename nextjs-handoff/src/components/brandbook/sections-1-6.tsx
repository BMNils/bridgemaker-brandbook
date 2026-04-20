import { Wordmark, Monogram } from "@/components/brand/wordmark";
import { Swatch } from "@/components/brand/swatch";
import { Kasane } from "@/components/brand/kasane";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookSection } from "./book-section";

/* ============================================================
   §01 LOGO
   ============================================================ */
export function Section01Logo() {
  return (
    <BookSection
      id="logo"
      num="01"
      title="Logo"
      desc="Wordmark als primäres Logo. Der Strich IST das Logo — er repräsentiert die direkteste Verbindung zwischen Corporate und Startup. Monogram für Avatare, App-Icons, Favicons."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-16 grid place-items-center min-h-[280px]">
          <Wordmark size="xl" />
        </Card>
        <Card surface="dark" className="p-16 grid place-items-center min-h-[280px]">
          <Wordmark size="xl" onDark />
        </Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[16, 24, 40, 72].map((s) => (
          <Card key={s} className="p-8 grid place-items-center">
            <Monogram size={s} />
            <div className="font-mono text-[11px] text-mid mt-3">{s}px</div>
          </Card>
        ))}
      </div>
    </BookSection>
  );
}

/* ============================================================
   §02 PURPOSE · MISSION · PRINCIPLES
   ============================================================ */
export function Section02Story() {
  const principles = [
    ["01", "Wirkung vor Aufwand", "Wir rechnen in Ergebnissen. Stunden, Slides und Meetings sind keine Währung für Erfolg."],
    ["02", "Product ist Business", "Eine gute Idee ohne Produkt bleibt Wunschdenken. Business, Produkt und Technologie gehören an einen Tisch."],
    ["03", "Mensch und Maschine", "Was sich wiederholt, wird automatisiert — damit Menschen Zeit haben für das, was nur sie können."],
    ["04", "Build–Measure–Learn", "Bauen und Messen schlägt Vermutungen. Unfertig ist akzeptiert. Ungetestet nicht."],
    ["05", "Klarheit", "Kein Jargon, keine Fassade, kein KI-Geschwätz. Unklare Sprache zeigt unklares Denken."],
    ["06", "Dein Venture", "Handle wie ein Eigentümer. Entscheiden, umsetzen, Verantwortung für das Ergebnis übernehmen."],
  ];

  return (
    <BookSection
      id="story"
      num="02"
      title="Purpose · Mission · Principles"
      desc={'Die Bridgemaker-DNA in Worten. Das Logo ist der „Bindestrich“ — die direkteste Brücke zwischen zwei Welten.'}
    >
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Card surface="mauve" className="p-10">
          <div className="text-eyebrow">Purpose</div>
          <p className="mt-6 text-h3 leading-[1.3] text-charcoal">
            Wir sind getrieben, deutsche und europäische Wirtschaft zukunftsfähig zu machen.
          </p>
        </Card>
        <Card surface="sand" className="p-10">
          <div className="text-eyebrow">Mission</div>
          <p className="mt-6 text-h3 leading-[1.3] text-charcoal">
            Wir bauen kommerziell und gesellschaftlich wertvolle Ventures — gemeinsam mit Corporates.
          </p>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {principles.map(([n, title, desc]) => (
          <Card key={n} className="p-8">
            <div className="font-mono text-[12px] text-light">§ {n}</div>
            <div className="text-h4 mt-4">{title}</div>
            <p className="text-[14px] leading-[1.55] text-mid mt-3">{desc}</p>
          </Card>
        ))}
      </div>
    </BookSection>
  );
}

/* ============================================================
   §03 TYPOGRAPHY
   ============================================================ */
export function Section03Type() {
  const scale = [
    ["display-xl", "128", "400", "text-display-xl"],
    ["display-l", "96", "500", "text-display-l"],
    ["display", "64", "600", "text-display"],
    ["h1", "48", "600", "text-h1"],
    ["h2", "32", "600", "text-h2"],
    ["h3", "24", "500", "text-h3"],
    ["h4", "20", "500", "text-h4"],
  ];
  return (
    <BookSection
      id="type"
      num="03"
      title="Typography"
      desc="Inter + Inter Display — aus Google Fonts. Display-Familie wird ab 24px automatisch verwendet. Bigger = Lighter."
    >
      <div className="space-y-12">
        {scale.map(([name, size, weight, cls]) => (
          <div key={name} className="border-b border-[rgba(28,28,30,0.06)] pb-10 grid grid-cols-[160px_1fr] gap-8 items-baseline">
            <div>
              <div className="font-mono text-[11px] text-light">--text-{name}</div>
              <div className="font-mono text-[11px] text-mid mt-1">{size}px · {weight}</div>
            </div>
            <div className={cls}>Wir bauen.</div>
          </div>
        ))}
      </div>
    </BookSection>
  );
}

/* ============================================================
   §04 DISPLAY — on-dark moments
   ============================================================ */
export function Section04Display() {
  return (
    <BookSection
      id="display"
      num="04"
      title="Display Typography"
      desc="Für Hero-Sections und Kampagnen. Grösser heißt leichter — es wirkt eleganter und trägt mehr Luft."
    >
      <Kasane variant="dark" className="rounded-[20px] p-16 min-h-[400px] bm-on-dark flex flex-col justify-end">
        <div className="text-eyebrow !text-soft">Campaign</div>
        <div className="text-display-l tracking-[-2.9px] mt-6">
          Weil Zukunft nicht wartet.
        </div>
      </Kasane>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <Card surface="default" className="p-12 min-h-[240px] flex items-end">
          <div className="text-display">We build.</div>
        </Card>
        <Card surface="mauve" className="p-12 min-h-[240px] flex items-end">
          <div className="text-display">Wir bauen.</div>
        </Card>
      </div>
    </BookSection>
  );
}

/* ============================================================
   §05 COLORS
   ============================================================ */
export function Section05Colors() {
  return (
    <BookSection
      id="colors"
      num="05"
      title="Colors"
      desc="Drei Brand-Farben, eine Chart-Support-Farbe, Neutrals, Surfaces. Hintergrund ist immer off-white — niemals weiss."
    >
      <h3 className="text-h4 mb-6">Brand Triade</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        <Swatch name="Purple" hex="#6B4A94" token="--bm-purple" usage="Primary · Links · Accents" />
        <Swatch name="Berry" hex="#B84A6F" token="--bm-berry" usage="Accent · Emphasis" />
        <Swatch name="Teal" hex="#3A9E97" token="--bm-teal" usage="Secondary · Charts · Tech" />
      </div>

      <h3 className="text-h4 mb-6">Neutrals</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <Swatch name="Charcoal" hex="#1C1C1E" token="--charcoal" usage="Foreground" />
        <Swatch name="Mid" hex="#6B6B65" token="--mid" usage="Body secondary" light />
        <Swatch name="Light" hex="#918F87" token="--light" usage="Eyebrow" light />
        <Swatch name="Off-white" hex="#F5F1EB" token="--off-white" usage="Default background ⚠️" light />
      </div>

      <h3 className="text-h4 mb-6">Surfaces</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Swatch name="Stone" hex="#E8E5DF" token="--surface-stone" usage="Default" light />
        <Swatch name="Mauve" hex="#E3E0E8" token="--surface-mauve" usage="Purple context" light />
        <Swatch name="Sage" hex="#DDE4E0" token="--surface-sage" usage="Tech" light />
        <Swatch name="Sand" hex="#E5E0D8" token="--surface-sand" usage="Ventures" light />
      </div>
    </BookSection>
  );
}

/* ============================================================
   §06 KASANE GRADIENTS
   ============================================================ */
export function Section06Kasane() {
  return (
    <BookSection
      id="kasane"
      num="06"
      title="Kasane Gradients"
      desc={'層ね — „geschichtet". Signature-Background für Hero-Momente. Niemals als generische Füllung oder hinter Fließtext.'}
    >
      <div className="space-y-4">
        {(["dark", "vibrant", "light"] as const).map((v) => (
          <Kasane key={v} variant={v} className="rounded-[20px] min-h-[260px] p-12 flex items-end">
            <div>
              <div className={`font-mono text-[11px] uppercase tracking-[0.05em] ${v === "light" ? "text-mid" : "text-white/70"}`}>
                Kasane · {v}
              </div>
              <div className={`text-h2 mt-3 ${v === "light" ? "text-charcoal" : "text-off-white"}`}>
                {v === "dark" ? "Der Moment vorm Durchbruch." : v === "vibrant" ? "Weil Zukunft nicht wartet." : "Ventures mit Wirkung."}
              </div>
            </div>
          </Kasane>
        ))}
      </div>
    </BookSection>
  );
}
