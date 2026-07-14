import Link from "next/link";
import { SiteNav } from "@/components/brand/site-nav";
import { Kasane } from "@/components/brand/kasane";
import { ImagePlaceholder } from "@/components/brand/image-placeholder";
import { Wordmark } from "@/components/brand/wordmark";

/**
 * Landing-Demo — Marketing-Flächen sind Bridgemaker-Eigenbau
 * (guidelines/07), kein MD3. Zeigt den Flächenrhythmus:
 * Kasane-Hero → Weiß → Off-White → dunkles CTA-Kasane.
 */
export default function LandingDemo() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero — der eine Kasane-Moment dieser Seite */}
        <Kasane variant="hero" drift grain className="pt-16">
          <section className="mx-auto max-w-[1200px] px-4 py-24 md:px-8">
            <p className="type-eyebrow text-light">KI-Transformation</p>
            <h1 className="type-display mt-6 max-w-xl text-charcoal">
              KI dort, wo Umsatz entsteht
            </h1>
            <p className="type-body-l mt-6 max-w-2xl text-mid">
              Wir bauen KI-Lösungen an der Kundenschnittstelle — vom ersten
              Workshop bis zu dem Tag, an dem die Zahlen stehen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#kontakt" className="bm-btn bm-btn-primary bm-btn-lg">
                Jetzt starten
              </Link>
              <Link href="#hebel" className="bm-btn bm-btn-ghost bm-btn-lg">
                Hebel ansehen
              </Link>
            </div>
          </section>
        </Kasane>

        {/* Sektion Weiß — Karten mit variierenden Füllungen */}
        <section
          id="hebel"
          className="border-t border-surface-stone bg-white"
        >
          <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-8">
            <p className="type-eyebrow text-light">Unsere Hebel</p>
            <h2 className="type-h2 mt-6 max-w-xl">
              Wo KI dein Geschäft trägt
            </h2>
            <p className="type-body-l mt-4 max-w-2xl text-mid">
              Kein Prototyp zum Wegwerfen — wir bauen produktionsnah und
              bleiben, bis es trägt.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="card-clean rounded-xl bg-white p-8">
                <span className="bm-badge bm-badge-purple">Vertrieb</span>
                <h3 className="type-card-title mt-5">
                  Mehr Abschluss pro Kontakt
                </h3>
                <p className="type-body mt-3 text-mid">
                  Angebote, Nachfassen, Priorisierung — KI übernimmt die
                  Wiederholung, dein Team den Abschluss.
                </p>
              </div>
              <div className="bm-card-mauve rounded-xl p-8">
                <span className="bm-badge bm-badge-teal">Service</span>
                <h3 className="type-card-title mt-5">
                  Antworten, bevor die Warteschleife beginnt
                </h3>
                <p className="type-body mt-3 text-mid">
                  Kundenanfragen verstehen, beantworten und weiterleiten — im
                  Ton deiner Marke.
                </p>
              </div>
              <div className="bm-card-sand rounded-xl p-8">
                <span className="bm-badge bm-badge-berry">Neue Felder</span>
                <h3 className="type-card-title mt-5">
                  Vom Datenschatz zum Geschäftsmodell
                </h3>
                <p className="type-body mt-3 text-mid">
                  Wir entwerfen Geschäftsmodelle und führen sie zum Ergebnis —
                  mit der DNA eines Venture Builders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial-Sektion — Off-White, Bild + Text */}
        <section className="border-t border-surface-stone">
          <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="type-eyebrow text-light">Arbeitsweise</p>
                <h2 className="type-h2 mt-6 max-w-xl">
                  Business, Produkt und Technologie an einem Tisch
                </h2>
                <p className="type-body-l mt-4 max-w-2xl text-mid">
                  Wir rechnen in Ergebnissen, nicht in Folien. Unfertig ist
                  akzeptiert — ungetestet nicht.
                </p>
                <Link
                  href="#kontakt"
                  className="bm-btn bm-btn-secondary mt-8 inline-flex"
                >
                  Lerne uns kennen
                </Link>
              </div>
              <ImagePlaceholder
                caption="workshop-berlin_12.jpg"
                ratio="4/3"
                className="grain-photo"
              />
            </div>
          </div>
        </section>

        {/* Abschluss-CTA — dunkles Kasane */}
        <Kasane variant="cta" grain>
          <section
            id="kontakt"
            className="mx-auto max-w-[1200px] px-4 py-24 md:px-8"
          >
            <p className="type-eyebrow">Nächster Schritt</p>
            <h2 className="type-h2 mt-6 max-w-xl">
              Lass uns über deinen ersten Use Case sprechen
            </h2>
            <p className="type-body-l mt-4 max-w-2xl">
              Ein Gespräch, ein konkreter Hebel, ein Plan für die ersten
              Wochen.
            </p>
            <Link
              href="mailto:hello@bridgemaker.com"
              className="bm-btn bm-btn-glow bm-btn-lg mt-10 inline-flex"
            >
              Termin vereinbaren
            </Link>
          </section>
        </Kasane>

        {/* Footer */}
        <footer className="border-t border-surface-stone">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-4 py-12 md:px-8">
            <Wordmark height={16} />
            <p className="type-small text-mid">
              Demo-Seite aus dem Bridgemaker Starter-Kit
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
