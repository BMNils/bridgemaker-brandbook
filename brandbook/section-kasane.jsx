/* global React */
// Brandbook — Section: Kasane Gradients (v2: echte Website-Rezepte + Katalog)

function BbKasaneSection() {
  const heroes = [
    { key: "Light — bg-kasane-hero", cls: "bg-kasane-hero", base: "#F5F1EB",
      headline: "Seiten-Hero auf Off-White", textColor: "#1C1C1E", eyebrowColor: "rgba(28,28,30,0.4)", border: true },
    { key: "Dark — bg-contact-cta", cls: "bg-contact-cta", base: "#4A2D6B",
      headline: "Abschluss-CTA: Triade auf Deep-Plum", textColor: "#fff", eyebrowColor: "rgba(255,255,255,0.5)" },
    { key: "Plum — bg-kasane-plum", cls: "bg-kasane-plum", base: "#4A3570",
      headline: "Vollfarbige Moment-Fläche", textColor: "#fff", eyebrowColor: "rgba(255,255,255,0.5)" },
  ];

  const catalog = [
    { cls: "bg-kasane-cta", use: "Dunkle CTA-Flächen, Mobile-Menü", dark: true },
    { cls: "bg-commercial-os", use: "Featured-Band für weiße Typo", dark: true },
    { cls: "bg-kasane-band-sage", use: "Kapitelband — läuft in Off-White aus" },
    { cls: "bg-kasane-band-mauve", use: "Kapitelband — Purple-Welt" },
    { cls: "bg-hebel-kundenschnittstelle", use: "Themen-Karte · Purple/Mauve" },
    { cls: "bg-hebel-vertrieb", use: "Themen-Karte · Teal auf surface-sage" },
    { cls: "bg-hebel-neue-felder", use: "Themen-Karte · Berry/Sand" },
    { cls: "bg-hebel-ventures", use: "Themen-Karte · Stone" },
    { cls: "bg-stimme-plum", use: "Zitat-Karte (mit grain-photo-screen)", dark: true },
    { cls: "bg-stimme-teal", use: "Zitat-Karte, kühle Variante", dark: true },
    { cls: "bg-case-visual-1", use: "Case-Grid-Visual (1 von 6 Rotationen)" },
    { cls: "bg-stripes-diagonal", use: "Grafischer Platzhalter (Streifen)" },
  ];

  return (
    <BbSection id="kasane" num="09" title="Kasane Gradients"
      desc="Signature-Treatment: Familienfarben als radiale Ellipsen über einer Basis. Moment-Macher, keine Tapete — Gradient-Felder wechseln sich immer mit ruhigen Flächen ab. Ein Thema = eine Farbwelt.">

      <div style={{ display: "grid", gap: 16, marginBottom: 48 }}>
        {heroes.map(v => (
          <div key={v.key} style={{
            width: "100%", borderRadius: 20, overflow: "hidden",
            position: "relative", height: 320, background: v.base,
            border: v.border ? "1px solid rgba(0,0,0,0.05)" : "none",
          }}>
            <div className={`${v.cls} kasane-drift`} style={{ position: "absolute", inset: "-8%" }} />
            <div className={v.textColor === "#fff" ? "grain-screen" : "grain"} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 40 }}>
              <div style={{ font: "500 11px/1.4 'JetBrains Mono', Menlo, monospace", letterSpacing: "0.05em", color: v.eyebrowColor, marginBottom: 10 }}>.{v.cls}</div>
              <div style={{ font: "600 clamp(24px,3vw,36px)/1.15 Inter, sans-serif", letterSpacing: "-1px", color: v.textColor }}>{v.headline}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Katalog */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Gradient-Katalog</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 620 }}>
        Die auf der Website entstandenen Flächen gehören zum Kanon und dürfen in Publikationen eingesetzt werden.
        Alle Rezepte in <code>tokens/tokens.css</code>. Farbwelten: Kundenschnittstelle → Purple/Mauve · Vertrieb →
        Teal auf surface-sage · Neue Felder → Berry/Sand · Ventures → Stone. Grüntöne in Rezepten sind namenlose
        Bestandteile — Sage ist keine benannte Farbe mehr.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 48 }}>
        {catalog.map(c => (
          <div key={c.cls}>
            <div className={c.cls} style={{ borderRadius: 12, height: 88, border: "1px solid rgba(0,0,0,0.05)" }} />
            <code style={{ font: "500 10.5px/1.3 'JetBrains Mono', Menlo, monospace", color: "#6B4A94", display: "block", marginTop: 8, wordBreak: "break-all" }}>.{c.cls}</code>
            <div style={{ font: "var(--text-caption)", color: "#6B6B65", marginTop: 2, lineHeight: 1.4 }}>{c.use}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#E8E5DF", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#4A5A3C" }}>Do</div>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Hero (EIN Hero-Kasane pro Seite), Kapitelbänder, Moment-Sektionen, Cover-Slides, CTAs</li>
            <li>Mehrere Gradient-Felder pro Seite — im Wechsel mit ruhigen Flächen</li>
            <li>Drift dezent: <code>kasane-drift</code> 14s / <code>-bold</code> 9s · reduced-motion respektieren</li>
            <li>Farben als eigene Farbräume lesbar halten — kein homogener Lila-Matsch</li>
          </ul>
        </div>
        <div style={{ background: "#F5E0E8", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8A3050" }}>Don't</div>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Zwei Gradient-Sektionen direkt aneinander</li>
            <li>Niemals hinter Fließtext — Kontrast versagt</li>
            <li>Nicht als generischer Seiten-Hintergrund</li>
            <li>Nicht hinter andere Gradients oder Bilder legen</li>
          </ul>
        </div>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbKasaneSection });
