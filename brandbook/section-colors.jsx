/* global React */
// Brandbook — Section: Colors

function BbColorsSection() {
  const triad = [
    { name: "B—M Purple", hex: "#6B4A94", role: "Primary", desc: "Secondary CTAs, Links, Hover-States",
      shades: [
        { name: "Deep Plum", hex: "#4A2D6B" },
        { name: "Lavender", hex: "#9070B8" },
        { name: "Soft Purple", hex: "#C4B1DC", light: true },
        { name: "Purple Tint", hex: "#EDE3F5", light: true },
      ]},
    { name: "B—M Berry", hex: "#B84A6F", role: "Accent", desc: "Tags, Highlights, sparsame Akzente",
      shades: [
        { name: "Deep Berry", hex: "#8A3050" },
        { name: "Dusty Rose", hex: "#D4809A", light: true },
        { name: "Rose Tint", hex: "#F5E0E8", light: true },
      ]},
    { name: "B—M Teal", hex: "#3A9E97", role: "Secondary", desc: "Charts, Infografiken, Tech",
      shades: [
        { name: "Deep Teal", hex: "#1D6B66" },
        { name: "Soft Teal", hex: "#7EC4BE", light: true },
        { name: "Teal Tint", hex: "#E0F2F0", light: true },
      ]},
  ];

  return (
    <BbSection id="colors" num="05" title="Colors" desc="Drei Brand-Farben, eine Chart-Support-Farbe, Neutrals, Surfaces.">
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: 0, marginBottom: 8 }}>Brand Triade</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", marginTop: 0, marginBottom: 24 }}>
        Nie alle drei gleichgewichtet in einer Section. Eine dominant, eine als Akzent.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 72 }}>
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

      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 16px" }}>
        B—M Sage <span style={{ font: "400 13px/1 Inter, sans-serif", color: "#6B6B65", marginLeft: 8 }}>Chart-Support</span>
      </h3>
      <div style={{ display: "flex", gap: 10, marginBottom: 72, flexWrap: "wrap" }}>
        {[
          { name: "Deep Sage", hex: "#4A5A3C" },
          { name: "Sage", hex: "#7A8B6A" },
          { name: "Soft Sage", hex: "#A8B89A", light: true },
          { name: "Sage Tint", hex: "#E2E8DC", light: true },
        ].map(c => <BbSwatch key={c.hex} {...c} />)}
      </div>

      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 20px" }}>Neutrals</h3>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 72 }}>
        {window.bbColors.neutrals.map(c => <BbSwatch key={c.hex} {...c} />)}
      </div>

      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Surfaces</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 560 }}>
        Gedämpfte Flächenfarben mit Brand-DNA. Nutze sie, um Sections thematisch zu gruppieren.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
        {window.bbColors.surfaces.map(c => <BbSwatch key={c.hex} {...c} />)}
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbColorsSection });
