import Link from "next/link";
import { SiteNav } from "@/components/brand/site-nav";
import { Kasane } from "@/components/brand/kasane";
import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/brand/image-placeholder";

export default function HomePage() {
  return (
    <>
      <SiteNav />

      {/* ===== HERO — Kasane Dark moment ===== */}
      <Kasane variant="dark" animate className="bm-on-dark -mt-[60px] pt-[60px]">
        <section className="max-w-[1200px] mx-auto px-12 py-[140px] relative z-10">
          <span className="text-eyebrow !text-soft">Bridgemaker · Venture Builder · 2026</span>
          <h1 className="text-display mt-8 max-w-[900px]">
            Wir bauen Ventures,<br />die wirken.
          </h1>
          <p className="mt-10 text-[20px] leading-[1.55] text-soft max-w-[580px]">
            Wir entwickeln gemeinsam mit Corporates kommerziell und gesellschaftlich wertvolle
            Ventures — und machen deutsche und europäische Wirtschaft zukunftsfähig.
          </p>
          <div className="mt-12 flex gap-4 flex-wrap">
            <Button asChild size="lg" variant="primary">
              <Link href="/">Let&rsquo;s build together</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/components">Komponenten ansehen</Link>
            </Button>
          </div>
        </section>
      </Kasane>

      {/* ===== VALUE BAND — stone surface ===== */}
      <section className="bg-surface-stone">
        <div className="max-w-[1200px] mx-auto px-12 py-[80px]">
          <div className="flex items-baseline justify-between flex-wrap gap-6 mb-12">
            <h2 className="text-h2">In Zahlen</h2>
            <p className="text-[15px] text-mid max-w-[420px]">
              Seit 2016 gemeinsam mit Corporates gebaut, validiert, skaliert.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["42", "Ventures gegründet"],
              ["18", "Corporate Partner"],
              ["120+", "Team Mitglieder"],
              ["3", "Standorte — Berlin, München, Zürich"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-display-l font-medium tracking-[-2.9px] text-charcoal">{n}</div>
                <div className="mt-3 text-[15px] text-mid max-w-[200px] leading-snug">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRINCIPLES — 3 cards, mixed surfaces ===== */}
      <section className="max-w-[1200px] mx-auto px-12 py-[120px]">
        <div className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-12 items-start mb-16">
          <h2 className="text-h1">Wie wir arbeiten.</h2>
          <p className="text-[17px] leading-[1.6] text-mid max-w-[520px] mt-3">
            Sechs Prinzipien. Keine Deko. Sie zeigen sich in dem, was wir sagen — und vor allem
            darin, was wir bauen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card surface="default" className="p-10">
            <Badge tint="purple">Nr. 1</Badge>
            <h3 className="text-h3 mt-6">Wirkung vor Aufwand</h3>
            <p className="mt-4 text-[15px] leading-[1.6] text-mid">
              Wir rechnen in Ergebnissen. Stunden, Slides und Meetings sind keine Währung für Erfolg.
            </p>
          </Card>
          <Card surface="mauve" className="p-10">
            <Badge tint="purple">Nr. 2</Badge>
            <h3 className="text-h3 mt-6">Product ist Business</h3>
            <p className="mt-4 text-[15px] leading-[1.6] text-charcoal/75">
              Eine gute Idee ohne Produkt bleibt Wunschdenken. Business, Produkt und Technologie
              gehören an einen Tisch.
            </p>
          </Card>
          <Card surface="sand" className="p-10">
            <Badge tint="berry">Nr. 3</Badge>
            <h3 className="text-h3 mt-6">Mensch und Maschine</h3>
            <p className="mt-4 text-[15px] leading-[1.6] text-charcoal/75">
              Was sich wiederholt, wird automatisiert. Menschen urteilen, bauen Beziehungen,
              entscheiden.
            </p>
          </Card>
        </div>
      </section>

      {/* ===== DEEP DIVE — editorial 2/3 + visual 1/3 ===== */}
      <section className="max-w-[1200px] mx-auto px-12 py-[120px]">
        <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">
          <div>
            <span className="text-eyebrow">Unser Logo</span>
            <h2 className="text-h1 mt-4">Das Bindestrich-Prinzip.</h2>
            <p className="mt-8 text-[18px] leading-[1.6] text-charcoal/85 max-w-[620px]">
              Der Strich zwischen <Wordmark size="xs" className="align-baseline" /> ist kein
              Ornament — er <em>ist</em> das Logo. Er steht für die direkteste Verbindung zwischen
              Corporate und Startup. Der kürzeste Weg von Idee zu Wirkung.
            </p>
            <p className="mt-6 text-[17px] leading-[1.6] text-mid max-w-[580px]">
              Deshalb halten wir auch in der Sprache nicht um den Brei: klar, präzise,
              matter-of-fact. Kein Jargon. Kein KI-Geschwätz. Unklare Sprache zeigt unklares Denken.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Button asChild variant="secondary">
                <Link href="/#voice">Voice &amp; Tone</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/#logo">Logo-Spec →</Link>
              </Button>
            </div>
          </div>
          <ImagePlaceholder
            caption="Portrait — Gründer, natürliches Licht, desaturiert"
            ratio="3/4"
          />
        </div>
      </section>

      {/* ===== SECONDARY CTA — charcoal card with Kasane accent ===== */}
      <section className="max-w-[1200px] mx-auto px-12 pb-[120px]">
        <Card surface="dark" className="relative overflow-hidden p-16 md:p-20">
          <Kasane variant="dark" className="absolute inset-0 opacity-70" />
          <div className="relative z-10 max-w-[640px]">
            <h2 className="text-h1">Bereit, etwas zu bauen, das wirkt?</h2>
            <p className="mt-6 text-[17px] leading-[1.6] text-soft">
              Erzähl uns von deiner Hypothese. Wir kommen mit Team, Methode und Ergebnis-Orientierung.
            </p>
            <div className="mt-10 flex gap-3 flex-wrap">
              <Button asChild size="lg" variant="primary">
                <Link href="/">Jetzt starten</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/">Case Studies</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-off-white border-t border-[rgba(28,28,30,0.08)]">
        <div className="max-w-[1200px] mx-auto px-12 py-20 grid md:grid-cols-3 gap-12">
          <div>
            <Wordmark size="md" />
            <p className="mt-6 text-[14px] text-mid max-w-[280px] leading-relaxed">
              We build ventures that matter. Berlin · München · Zürich.
            </p>
          </div>
          <div>
            <div className="text-eyebrow">Kompass</div>
            <ul className="mt-4 space-y-2.5">
              {[
                ["/", "Brandbook"],
                ["/components", "Components"],
                ["/#claude", "CLAUDE.md"],
              ].map(([h, l]) => (
                <li key={h}>
                  <Link href={h} className="text-[15px] text-charcoal hover:text-bm-purple">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-eyebrow">Kontakt</div>
            <ul className="mt-4 space-y-2.5 text-[15px] text-charcoal">
              <li>hello@bridgemaker.com</li>
              <li>bridgemaker.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgba(28,28,30,0.06)]">
          <div className="max-w-[1200px] mx-auto px-12 py-6 flex items-center justify-between text-[12px] text-mid">
            <span>© 2026 Bridgemaker</span>
            <span className="font-mono">powered by Bridgemaker</span>
          </div>
        </div>
      </footer>
    </>
  );
}
