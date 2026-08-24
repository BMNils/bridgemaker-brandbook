/* global React */
// Brandbook — Section: Colors (Familien, Flächenrhythmus, Ränder — Stand Website)

function BbColorsSection() {
  const triad = [
    { name: "B—M Purple", hex: "#6B4A94", role: "Primary", desc: "Sekundäre CTAs, Links, Markenmomente, Hover-Akzente",
      shades: [
        { name: "Deep Plum", hex: "#4A2D6B" },
        { name: "Lavender", hex: "#9070B8" },
        { name: "Lavender Dark*", hex: "#AF94D2", light: true },
        { name: "Soft Purple", hex: "#C4B1DC", light: true },
        { name: "Purple Tint", hex: "#EDE3F5", light: true },
      ]},
    { name: "B—M Berry", hex: "#B84A6F", role: "Accent", desc: "Tags, Highlights, sparsame Akzente",
      shades: [
        { name: "Deep Berry", hex: "#8A3050" },
        { name: "Dusty Rose", hex: "#D4809A", light: true },
        { name: "Rose Tint", hex: "#F5E0E8", light: true },
      ]},
    { name: "B—M Teal", hex: "#3A9E97", role: "Secondary", desc: "Charts, Infografiken, Tech-Kontexte",
      shades: [
        { name: "Deep Teal", hex: "#1D6B66" },
        { name: "Soft Teal", hex: "#7EC4BE", light: true },
        { name: "Teal Tint", hex: "#E0F2F0", light: true },
      ]},
  ];

  return (
    <BbSection id="colors" num="04" title="Colors"
      desc="Drei Markenfarben als Familien (Base/Deep/Soft/Tint), Neutrals, Surfaces. Eine dominante Farbe pro Sektion — Farbe ist rationiert. Sage ist gestrichen: Grüntöne nur noch in Gradient-Rezepten und surface-sage.">
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: 0, marginBottom: 8 }}>Marken-Triade</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", marginTop: 0, marginBottom: 24 }}>
        Nie alle drei gleichgewichtet in einer Sektion. Eine dominant, eine als Akzent. Die Familie nutzen — keine Zwischentöne erfinden.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
        {triad.map(b => (
          <div key={b.hex}>
            <div onClick={() => navigator.clipboard?.writeText(b.hex)}
              style={{ cursor: "pointer", background: b.hex, borderRadius: 16, height: 160,
                display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 20 }}>
              <div style={{ font: "500 11px/1 Inter, sans-serif", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{b.role}</div>
              <div style={{ font: "600 22px/1 Inter, sans-serif", color: "#fff", letterSpacing: "-0.4px", marginTop: 6 }}>{b.name}</div>
              <div style={{ font: "400 12px/1 'JetBrains Mono', Menlo, monospace", color: "rgba(255,255,255,0.75)", marginTop: 6 }}>{b.hex}</div>
            </div>
            <p style={{ font: "var(--text-caption)", color: "#6B6B65", marginTop: 10, lineHeight: 1.4 }}>{b.desc}</p>
            <div style={{ display: "flex", gap: 4, marginTop: 12 }}>
              {b.shades.map(s => (
                <div key={s.hex} onClick={() => navigator.clipboard?.writeText(s.hex)} style={{ flex: 1, cursor: "pointer" }}>
                  <div style={{
                    background: s.hex, borderRadius: 8, height: 44,
                    border: s.light ? "1px solid rgba(0,0,0,0.06)" : "none",
                  }} />
                  <div style={{ font: "400 10px/1.2 Inter, sans-serif", color: "#918F87", marginTop: 4 }}>{s.name}</div>
                  <div style={{ font: "400 9px/1.2 'JetBrains Mono', Menlo, monospace", color: "#A8A69E" }}>{s.hex}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p style={{ font: "var(--text-caption)", color: "#918F87", margin: "0 0 72px", lineHeight: 1.5 }}>
        * Lavender Dark (<code>--bm-lavender-dark</code>) ist die Purple-Rolle auf dunklem Grund — rohes Purple fällt dort durch den Kontrast.
      </p>

      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Neutrals & Flächenrhythmus</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 620 }}>
        Off-White ist der Grundton der Seite (body). <strong>Reines Weiß ist eine Sektionsfläche</strong> — der Rhythmus
        lebt vom Wechsel Weiß ↔ Off-White ↔ Surfaces, abgegrenzt mit Stone-Haarlinien. Ganze Seiten in sterilem Weiß: nein.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 72 }}>
        {window.bbColors.neutrals.map(c => <BbSwatch key={c.hex} {...c} />)}
      </div>

      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Surfaces</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 560 }}>
        Gedämpfte Flächenfarben mit Marken-DNA — gruppieren Sektionen thematisch.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 72 }}>
        {window.bbColors.surfaces.map(c => <BbSwatch key={c.hex} {...c} />)}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: 28 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87" }}>Ränder & Trennlinien</div>
          <ul style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li><strong>Sektions-/Flächengrenzen:</strong> 1px <code>--surface-stone</code> — die weichste sichtbare Grenze</li>
            <li><strong>Umriss-Boxen, Tabellen:</strong> <code>--border-subtle</code> (#C5C0B8)</li>
            <li><strong>Fokus, aktive Umrisse:</strong> <code>--border-strong</code> (1.5px Purple)</li>
            <li>Karten tragen ihre Kante als Inset-Ring im Schatten-Rezept — nie als CSS-border (Sektion „Cards & Glass")</li>
          </ul>
        </div>
        <div className="bm-on-dark" style={{ background: "#1C1C1E", borderRadius: 16, padding: 28 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#AF94D2" }}>Auf dunklem Grund</div>
          <ul style={{ font: "var(--text-small)", color: "#F5F4F1", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Headlines <span style={{ color: "#F5F4F1" }}>Off-White</span>, Fließtext <span style={{ color: "#A8A69E" }}>Soft</span></li>
            <li>Links & CTAs <span style={{ color: "#AF94D2" }}>Lavender Dark</span> — nie rohes Purple</li>
            <li>Primär-CTA wird Weiß-auf-Charcoal</li>
          </ul>
        </div>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbColorsSection });
