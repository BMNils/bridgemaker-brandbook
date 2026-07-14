import Link from "next/link";
import { SiteNav } from "@/components/brand/site-nav";
import { Kasane } from "@/components/brand/kasane";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero — ein Hero-Kasane pro Seite */}
        <Kasane variant="hero" drift grain className="pt-16">
          <section className="mx-auto max-w-[1200px] px-4 py-24 md:px-8">
            <p className="type-eyebrow text-light">Bridgemaker Starter-Kit</p>
            <h1 className="type-display mt-6 max-w-xl text-charcoal">
              Digitale Produkte, die sich nach Bridgemaker anfühlen
            </h1>
            <p className="type-body-l mt-6 max-w-2xl text-mid">
              Next.js, Tailwind v4 und Material Design 3 — gebrandet über das
              Token-Mapping aus dem Brandbook. Tokens laden, bauen, fertig.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/components" className="bm-btn bm-btn-primary">
                Komponenten entdecken
              </Link>
              <Link href="/landing-demo" className="bm-btn bm-btn-secondary">
                Landing-Demo ansehen
              </Link>
            </div>
          </section>
        </Kasane>

        {/* Was drinsteckt */}
        <section className="border-t border-surface-stone bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-8">
            <p className="type-eyebrow text-light">Was drinsteckt</p>
            <h2 className="type-h2 mt-6 max-w-xl">
              Ein Regelwerk, direkt verbaut
            </h2>
            <p className="type-body-l mt-4 max-w-2xl text-mid">
              Das Kit setzt die Kanon-Guidelines um: Tokens als Single Source
              of Truth, MD3 für Produkt-UIs, Bridgemaker-Handwerk für
              Marketing-Flächen.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="card-clean rounded-xl bg-white p-8">
                <h3 className="type-card-title">Tokens v2</h3>
                <p className="type-body mt-3 text-mid">
                  Farben, fluide Typo-Skala, Radien, Schatten und der
                  Gradient-Katalog — kopiert aus dem Kanon, verdrahtet mit
                  Tailwind v4.
                </p>
              </div>
              <div className="bm-card-stone rounded-xl p-8">
                <h3 className="type-card-title">MD3 mit Mapping</h3>
                <p className="type-body mt-3 text-mid">
                  @material/web-Komponenten, explizit auf die Token-Familien
                  gemappt — nie seed-generiert. Inputs 12px, Buttons Pill.
                </p>
              </div>
              <div className="bm-card-mauve rounded-xl p-8">
                <h3 className="type-card-title">Brand-Bausteine</h3>
                <p className="type-body mt-3 text-mid">
                  Wortmarke, Kasane, Header, Platzhalter — die
                  Marketing-Patterns aus Kapitel 07, einsatzbereit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
