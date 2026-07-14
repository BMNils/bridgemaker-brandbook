"use client";

import { useEffect, useRef, useState } from "react";
import { SiteNav } from "@/components/brand/site-nav";
import { ImagePlaceholder } from "@/components/brand/image-placeholder";

/**
 * Komponenten-Showcase — MD3 (@material/web) im Bridgemaker-Theming
 * plus die Bridgemaker-eigenen Bausteine (Karten, Badges, Buttons).
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

export default function ComponentsPage() {
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
      <SiteNav />
      <main className="pt-16">
        <div className="mx-auto max-w-[1200px] px-4 pt-16 md:px-8">
          <p className="type-eyebrow text-light">Starter-Kit</p>
          <h1 className="type-h1 mt-6 max-w-xl">Komponenten</h1>
          <p className="type-body-l mt-4 max-w-2xl text-mid">
            Produkt-UI läuft auf Material Design 3, gebrandet über das
            Token-Mapping. Marketing-Bausteine bleiben Bridgemaker-Handwerk.
          </p>
        </div>

        <Section
          eyebrow="Produkt-UI · MD3"
          title="Buttons"
          lead="MD3-Buttons erben das Farb-Mapping: primary ist bm-purple, Form ist Pill (MD3 full radius)."
        >
          <div className="flex flex-wrap items-center gap-4">
            <md-filled-button>Jetzt starten</md-filled-button>
            <md-filled-tonal-button>Mehr erfahren</md-filled-tonal-button>
            <md-outlined-button>Details ansehen</md-outlined-button>
            <md-text-button>Abbrechen</md-text-button>
            <md-filled-button disabled>Deaktiviert</md-filled-button>
          </div>
        </Section>

        <Section
          eyebrow="Marketing · Bridgemaker"
          title="Marketing-Buttons"
          lead="Für Website, Landingpages und Decks: die bm-btn-Familie. Hover wechselt die Füllung innerhalb der Markenfamilie — nie nach Schwarz."
        >
          <div className="flex flex-wrap items-center gap-4">
            <button className="bm-btn bm-btn-primary">Jetzt starten</button>
            <button className="bm-btn bm-btn-secondary">Mehr erfahren</button>
            <button className="bm-btn bm-btn-ghost">Details ansehen</button>
            <button className="bm-btn bm-btn-glow">Featured-Aktion</button>
          </div>
        </Section>

        <Section
          eyebrow="Produkt-UI · MD3"
          title="Formularfelder"
          lead="Inputs tragen radius-md (12px) — nie Pill. Labels leben im Feld, MD3 übernimmt Fokus- und Fehlerverhalten."
        >
          <div className="grid max-w-2xl gap-6">
            <md-outlined-text-field label="Name" placeholder="Ada Lovelace" />
            <md-outlined-text-field
              label="E-Mail"
              type="email"
              supporting-text="Wir melden uns innerhalb von zwei Werktagen."
            />
            <md-outlined-select label="Thema">
              <md-select-option value="produkt" selected>
                <div slot="headline">Produktentwicklung</div>
              </md-select-option>
              <md-select-option value="ki">
                <div slot="headline">KI an der Kundenschnittstelle</div>
              </md-select-option>
              <md-select-option value="venture">
                <div slot="headline">Venture Building</div>
              </md-select-option>
            </md-outlined-select>
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

        <Section
          eyebrow="Produkt-UI · MD3"
          title="Tabs und Chips"
        >
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
          eyebrow="Produkt-UI · MD3"
          title="Dialog und Fortschritt"
          lead="Schwebende Ebenen dürfen Elevation tragen — Tonal-Tints sind abgeschaltet, Flächen wechseln per Token."
        >
          <div className="flex flex-wrap items-center gap-8">
            <md-filled-button onClick={() => setDialogOpen(true)}>
              Dialog öffnen
            </md-filled-button>
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

        <Section
          eyebrow="Marketing · Bridgemaker"
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
          eyebrow="Marketing · Bridgemaker"
          title="Badges und Platzhalter"
          lead="Badges: Tint-Hintergrund plus Deep-Text, mehr als drei pro View sind ein Layout-Problem. Fehlt ein Bild, kommt der gestreifte Platzhalter — nie eine erfundene Illustration."
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

        <Section
          eyebrow="System"
          title="Typo-Skala"
          lead="Nur type-*-Klassen — fluide über clamp(), größer heißt leichter."
        >
          <div className="space-y-6">
            <p className="type-display-l">Display L</p>
            <p className="type-h1">Headline 1</p>
            <p className="type-h3">Headline 3</p>
            <p className="type-body-l max-w-2xl text-mid">
              Body Large — der Lead-Stil unter Headlines.
            </p>
            <p className="type-eyebrow text-light">Eyebrow · Versalien</p>
          </div>
        </Section>
      </main>
    </>
  );
}
