"use client";

import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/brand/wordmark";

/**
 * Starter-Kit — MD3-Integrations-Referenz.
 *
 * Zweck (guidelines/09 §9.1, Vorrang-Regel): MD3 (@material/web) ist
 * die Komponenten-Library für alles, was das Bridgemaker-Design-System
 * NICHT selbst definiert — Dialoge, Loader, Tabs, Chips, Auswahl,
 * Regler. Alles Definierte (Typo, Buttons, Formulare, Karten, Badges)
 * kommt aus dem Design-System und ist im Brandbook dokumentiert,
 * nicht hier.
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

export default function Md3Reference() {
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
          <h1 className="type-h1 mt-6 max-w-xl">MD3-Integration</h1>
          <p className="type-body-l mt-4 max-w-2xl text-mid">
            Material Design 3 füllt die Lücken des Design-Systems: Dialoge,
            Loader, Tabs und Co. — gebrandet über das Token-Mapping aus
            Kapitel 09, nie über Library-Defaults. Alles andere (Typo,
            Buttons, Formulare, Karten) kommt aus dem Design-System und
            steht im Brandbook.
          </p>
        </div>

        <Section
          eyebrow="MD3"
          title="Dialog und Loader"
          lead="Anatomie, Fokus-Handling und A11y von MD3 — die Dialog-Aktionen sind unsere Pill-Buttons (Vorrang-Regel)."
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
            <div slot="actions" className="flex gap-3">
              <button
                className="bm-btn bm-btn-ghost bm-btn-sm"
                onClick={() => setDialogOpen(false)}
              >
                Behalten
              </button>
              <button
                className="bm-btn bm-btn-primary bm-btn-sm"
                onClick={() => setDialogOpen(false)}
              >
                Verwerfen
              </button>
            </div>
          </md-dialog>
        </Section>

        <Section
          eyebrow="MD3"
          title="Tabs und Chips"
          lead="Tabs mit Vollbreiten-Indikator (md-secondary-tab); Chips als kleine Pills, wie Badges."
        >
          <md-tabs>
            <md-secondary-tab active>Übersicht</md-secondary-tab>
            <md-secondary-tab>Auswertung</md-secondary-tab>
            <md-secondary-tab>Einstellungen</md-secondary-tab>
          </md-tabs>
          <md-chip-set className="mt-8">
            <md-assist-chip label="Assist-Chip" />
            <md-filter-chip label="Filter-Chip" selected />
            <md-filter-chip label="Zweiter Filter" />
          </md-chip-set>
        </Section>

        <Section
          eyebrow="MD3"
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
              Bridgemaker Starter-Kit — Design-System und Herleitung im
              Brandbook
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
