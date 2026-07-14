/* global React */
// Brandbook — Sections: Imagery, Slide Templates, Seitenrhythmus

function BbImagerySection() {
  return (
    <BbSection id="imagery" num="12" title="Imagery"
      desc="Das Bildkonzept wird neu gedacht — die alten Editorial-Foto-Regeln gelten nicht mehr.">
      <div style={{ border: "1px solid #C5C0B8", borderRadius: 20, padding: 48, maxWidth: 720 }}>
        <span className="bm-badge bm-badge-purple">Work in progress</span>
        <p style={{ font: "400 17px/1.6 Inter, sans-serif", color: "#1C1C1E", margin: "24px 0 0", maxWidth: 620 }}>
          Die Website arbeitet heute ohne Fotografie: feine Linien im
          topografischen Stil auf Gradients und konstruierte Vektor-Icons.
          Wie das Bildkonzept daraus entsteht, ist in Klärung.
        </p>
        <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "12px 0 0", maxWidth: 620, lineHeight: 1.6 }}>
          Bis dahin: keine Bildentscheidungen ohne Creative-Director-Freigabe.
          Fehlt ein Asset, bleibt der gestreifte Platzhalter mit
          Monospace-Caption das Mittel der Wahl.
        </p>
      </div>
    </BbSection>
  );
}

function BbSlidesSection() {
  return (
    <BbSection id="slides" num="13" title="Slide Templates"
      desc="1920×1080. Mindestens 24px Text — keine Ausnahmen. Kasane nur auf Cover und End.">
      <div style={{ border: "1px solid #C5C0B8", borderRadius: 20, padding: 48, maxWidth: 720 }}>
        <span className="bm-badge bm-badge-purple">Work in progress</span>
        <p style={{ font: "400 17px/1.6 Inter, sans-serif", color: "#1C1C1E", margin: "24px 0 0", maxWidth: 620 }}>
          Die Bridgemaker-Slide-Templates gibt es noch nicht — sie sind der
          nächste Schritt am Brand-System.
        </p>
        <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "12px 0 0", maxWidth: 620, lineHeight: 1.6 }}>
          Bis sie stehen, gelten für Decks nur die Grundregeln oben und
          Kapitel 07 der Guidelines. Keine improvisierten Layouts als
          Vorlage weiterreichen.
        </p>
      </div>
    </BbSection>
  );
}

function BbLandingSection() {
  const sections = [
    { n: "01", label: "Fixe Nav", desc: "64px, transparent → blur-solid beim Scrollen, Wortmarke 20px links, type-nav-Links, CTA-Pill rechts" },
    { n: "02", label: "Hero", desc: "Kasane-Fläche, Display-Headline, Lead in --mid, 1–2 CTAs, optional Glas-Kartenstapel" },
    { n: "03", label: "Proof-Band", desc: "Kundenlogos (Marquee) oder Stats auf ruhiger Fläche" },
    { n: "04", label: "Themen-Sektionen", desc: "Karten mit variierenden Surfaces, ein Thema = eine Farbwelt" },
    { n: "05", label: "Cases", desc: "Grid oder Scheiben mit case-glass-Ergebnisleisten" },
    { n: "06", label: "Stimmen", desc: "Satte Verlaufs-Karten (bg-stimme-*) mit Zitaten" },
    { n: "07", label: "Abschluss-CTA", desc: "Dunkle Kasane-Fläche, eine Headline, ein Button" },
    { n: "08", label: "Footer", desc: "Off-White, border-t surface-stone, Wortmarke + 3 Linkspalten mit Eyebrow-Titeln" },
  ];
  return (
    <BbSection id="landing" num="11" title="Seitenrhythmus"
      desc="Der Bridgemaker-Rhythmus (verallgemeinert von der Website). Sektionen wechseln die Fläche — Weiß ↔ Off-White ↔ Surface/Farbband. Jede Sektion folgt der Anatomie: Eyebrow → Headline (max-w-xl) → Lead (max-w-2xl) → Inhalt → optional EIN CTA.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {sections.map(s => (
          <div key={s.n} className="card-clean" style={{
            background: "#fff", borderRadius: 16,
            padding: 24, display: "flex", gap: 20, alignItems: "flex-start",
          }}>
            <div style={{ font: "600 28px/1 Inter, sans-serif", letterSpacing: "-0.8px", color: "#C4B1DC", minWidth: 48 }}>{s.n}</div>
            <div>
              <div style={{ font: "500 16px/1.3 Inter, sans-serif", color: "#1C1C1E", letterSpacing: "-0.3px" }}>{s.label}</div>
              <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "6px 0 0" }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>
        <a href="../examples/landing-page.html" className="bm-btn bm-btn-secondary" style={{ textDecoration: "none" }}>Beispiel-Landingpage ansehen →</a>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbImagerySection, BbSlidesSection, BbLandingSection });
