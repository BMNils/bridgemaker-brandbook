"use client";

import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/brand/wordmark";
import { ImagePlaceholder } from "@/components/brand/image-placeholder";

/**
 * Starter-Kit — Komponenten-Referenz.
 *
 * Vorrang-Regel (guidelines/09 §9.1): Wo Bridgemaker ein eigenes Rezept
 * hat (type-*, bm-btn, bm-input, Karten, Badges), gilt das Rezept —
 * auch in Produkt-UIs. MD3 (@material/web) füllt NUR die Lücken:
 * Dialoge, Tabs, Loader, Slider, Switches und ähnliche nicht
 * definierte Elemente. Typo und Farben stehen im Brandbook — hier
 * lebt nur der Code.
 */

function Section({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-surface-stone py-24 first:border-t-0">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <p className="type-eyebrow text-light">{eyebrow}</p>
        <h2 className="type-h3 mt-4 max-w-xl">{title}</h2>
        {lead && <p className="type-body mt-3 max-w-2xl text-mid">{lead}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function ComponentsReference() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialogRef = useRef<HTMLElement | null>(null);

  // md-dialog schließt auch selbst (ESC, Scrim) — State synchron halten
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClosed = () => setDialogOpen(false);
    dialog.addEventListener("closed", onClosed);
    return () => dialog.removeEventListener("closed", onClosed);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center border-b border-border-hairline bg-white/30 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 md:px-8">
          <a
            href="https://bridgemaker-brandbook.vercel.app"
            aria-label="Zum Brand-System"
          >
            <Wordmark height={20} />
          </a>
          <a
            href="https://bridgemaker-brandbook.vercel.app/brandbook/index.html"
            className="type-nav text-charcoal transition-colors hover:text-bm-purple"
          >
            Brandbook
          </a>
        </div>
      </header>

      <main className="pt-16">
        <div className="mx-auto max-w-[1200px] px-4 pt-16 md:px-8">
          <p className="type-eyebrow text-light">Starter-Kit</p>
          <h1 className="type-h1 mt-6 max-w-xl">Komponenten-Referenz</h1>
          <p className="type-body-l mt-4 max-w-2xl text-mid">
            Bridgemaker-Rezepte zuerst — MD3 füllt nur die Lücken. Der Code
            dieser Seite ist die Gebrauchsanweisung; die visuelle Herleitung
            steht im Brandbook.
          </p>
        </div>

        {/* ================= Bridgemaker-Rezepte ================= */}

        <Section
          eyebrow="Bridgemaker"
          title="Buttons"
          lead="Die bm-btn-Familie gilt überall — auch in Produkt-UIs. Pill, immer. Hover wechselt die Füllung innerhalb der Markenfamilie, nie nach Schwarz."
        >
          <div className="flex flex-wrap items-center gap-4">
            <button className="bm-btn bm-btn-primary">Jetzt starten</button>
            <button className="bm-btn bm-btn-secondary">Mehr erfahren</button>
            <button className="bm-btn bm-btn-ghost">Details ansehen</button>
          </div>
          <div className="bm-on-dark mt-6 flex flex-wrap items-center gap-4 rounded-xl bg-charcoal p-8">
            <button className="bm-btn bm-btn-primary">Jetzt starten</button>
            <button className="bm-btn bm-btn-secondary">Mehr erfahren</button>
            <button className="bm-btn bm-btn-glow">Featured-Aktion</button>
            <p className="type-caption w-full text-soft">
              Auf Dunkel: Primary invertiert, Secondary in Lavender — die
              Glow-Verlaufs-Pill gehört NUR auf dunkle CTA-Flächen.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Bridgemaker"
          title="Formulare"
          lead="Outline-only: Ruhezustand transparent, weiß füllt erst bei Fokus. radius-md (12px), nie Pill. Labels über dem Feld."
        >
          <div className="grid max-w-xl gap-6">
            <div>
              <label className="bm-label" htmlFor="demo-name">
                Name
              </label>
              <input
                id="demo-name"
                className="bm-input"
                placeholder="Ada Lovelace"
              />
            </div>
            <div>
              <label className="bm-label" htmlFor="demo-mail">
                E-Mail
              </label>
              <input id="demo-mail" type="email" className="bm-input" />
              <p className="bm-help">
                Wir melden uns innerhalb von zwei Werktagen.
              </p>
            </div>
            <div>
              <label className="bm-label" htmlFor="demo-msg">
                Was möchtest du bauen?
              </label>
              <textarea
                id="demo-msg"
                className="bm-textarea"
                placeholder="Eine kurze Beschreibung …"
              />
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Bridgemaker"
          title="Karten-Familie"
          lead="Karten sitzen, sie fliegen nicht: Inset-Haarlinie plus nahe Elevation. Füllungen variieren — nie dreimal dieselbe Surface in einer Reihe."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-clean rounded-xl bg-white p-8">
              <h3 className="type-card-title">card-clean</h3>
              <p className="type-body mt-3 text-mid">
                Weiße matte Karte — der Default auf Off-White-Grund.
              </p>
            </div>
            <div className="bm-card-stone rounded-xl p-8">
              <h3 className="type-card-title">Stone</h3>
              <p className="type-body mt-3 text-mid">
                Getönte Karte für ruhige Nachbarschaften.
              </p>
            </div>
            <div className="bm-card-sand rounded-xl p-8">
              <h3 className="type-card-title">Sand</h3>
              <p className="type-body mt-3 text-mid">
                Warme Fläche — z. B. für Ventures-Kontexte.
              </p>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Bridgemaker"
          title="Badges und Platzhalter"
          lead="Badges: Tint-Hintergrund plus Deep-Text, mehr als drei pro View sind ein Layout-Problem. Fehlt ein Bild: gestreifter Platzhalter, nie eine erfundene Illustration."
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="bm-badge bm-badge-purple">Produkt</span>
            <span className="bm-badge bm-badge-teal">Tech</span>
            <span className="bm-badge bm-badge-berry">Neu</span>
          </div>
          <div className="mt-10 max-w-md">
            <ImagePlaceholder caption="team-portrait_04.jpg" ratio="16/9" />
          </div>
        </Section>

        {/* ================= MD3 — nur die Lücken ================= */}

        <Section
          eyebrow="MD3 · Lückenfüller"
          title="Dialog und Loader"
          lead="Für alles ohne Bridgemaker-Rezept liefert @material/web die Anatomie — gebrandet über das Token-Mapping aus Kapitel 09, nie über Library-Defaults."
        >
          <div className="flex flex-wrap items-center gap-8">
            <button
              className="bm-btn bm-btn-secondary"
              onClick={() => setDialogOpen(true)}
            >
              Dialog öffnen
            </button>
            <md-circular-progress indeterminate />
            <div className="w-64">
              <md-linear-progress value={0.6} max={1} />
            </div>
          </div>
          <md-dialog ref={dialogRef} open={dialogOpen || undefined}>
            <div slot="headline">Entwurf verwerfen?</div>
            <div slot="content" className="type-body text-mid">
              Deine Änderungen gehen verloren. Das lässt sich nicht rückgängig
              machen.
            </div>
            <div slot="actions">
              <md-text-button onClick={() => setDialogOpen(false)}>
                Behalten
              </md-text-button>
              <md-filled-button onClick={() => setDialogOpen(false)}>
                Verwerfen
              </md-filled-button>
            </div>
          </md-dialog>
        </Section>

        <Section eyebrow="MD3 · Lückenfüller" title="Tabs und Chips">
          <md-tabs>
            <md-primary-tab active>Übersicht</md-primary-tab>
            <md-primary-tab>Auswertung</md-primary-tab>
            <md-primary-tab>Einstellungen</md-primary-tab>
          </md-tabs>
          <md-chip-set className="mt-8">
            <md-assist-chip label="Assist-Chip" />
            <md-filter-chip label="Filter-Chip" selected />
            <md-filter-chip label="Zweiter Filter" />
          </md-chip-set>
        </Section>

        <Section
          eyebrow="MD3 · Lückenfüller"
          title="Auswahl und Regler"
          lead="Checkboxen, Switches, Radios und Slider haben kein Bridgemaker-Rezept — MD3 übernimmt, primary ist bm-purple."
        >
          <div className="grid max-w-2xl gap-6">
            <div className="flex flex-wrap items-center gap-8">
              <label className="flex items-center gap-3 type-body">
                <md-checkbox checked />
                Checkbox
              </label>
              <label className="flex items-center gap-3 type-body">
                <md-switch selected />
                Switch
              </label>
              <label className="flex items-center gap-3 type-body">
                <md-radio name="demo-radio" checked />
                Radio
              </label>
            </div>
            <md-slider min={0} max={100} value={60} labeled />
          </div>
        </Section>

        <footer className="border-t border-surface-stone">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-4 py-12 md:px-8">
            <Wordmark height={16} />
            <p className="type-small text-mid">
              Bridgemaker Starter-Kit — Kanon und Herleitung im Brandbook
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
