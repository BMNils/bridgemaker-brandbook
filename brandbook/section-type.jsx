/* global React */
// Brandbook — Section: Typography + Display

function BbTypeSection() {
  return (
    <BbSection id="type" num="03" title="Typography" desc="Inter + Inter Display, aus Google Fonts. Display ab 24px automatisch über --font-display.">
      <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginBottom: 48 }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ font: "500 11px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87", marginBottom: 12 }}>Display / Headings</div>
          <div style={{ font: "600 32px/1 Inter, sans-serif", color: "#1C1C1E", letterSpacing: "-0.9px" }}>Inter Display</div>
          <p style={{ font: "var(--text-small)", color: "#6B6B65", marginTop: 12, maxWidth: 420 }}>
            Ab 24px. Tight Tracking. Je größer, desto leichter das Gewicht — bewusst gesetzt.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ font: "500 11px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87", marginBottom: 12 }}>Body / UI</div>
          <div style={{ font: "400 32px/1 Inter, sans-serif", color: "#1C1C1E" }}>Inter</div>
          <p style={{ font: "var(--text-small)", color: "#6B6B65", marginTop: 12, maxWidth: 420 }}>
            Unter 24px. Für Body, Navigation, Buttons, Formulare.
          </p>
        </div>
      </div>

      {window.bbTypeScale.map((t, i) => (
        <div key={t.name} style={{
          display: "grid", gridTemplateColumns: "100px 1fr auto",
          alignItems: "baseline", padding: "20px 0",
          borderBottom: i < window.bbTypeScale.length - 1 ? "1px solid #C5C0B8" : "none", gap: 24,
        }}>
          <div>
            <div style={{ font: "500 11px/1 Inter, sans-serif", color: "#6B6B65" }}>{t.name}</div>
            <div style={{ font: "400 11px/1 Inter, sans-serif", color: "#918F87", marginTop: 4 }}>{t.size}px</div>
          </div>
          <div style={{
            fontSize: Math.min(t.size, 40), fontWeight: t.weight,
            letterSpacing: t.tracking, color: "#1C1C1E", lineHeight: t.lh,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {t.size >= 32 ? "We build tomorrow" : "Bridgemaker builds ventures that matter."}
          </div>
          <div style={{ textAlign: "right", minWidth: 160 }}>
            <div style={{ font: "400 11px/1.4 'JetBrains Mono', Menlo, monospace", color: "#6B6B65" }}>{t.weight} / {t.tracking} / {t.lh}</div>
            <div style={{ font: "400 11px/1.4 Inter, sans-serif", color: "#918F87", marginTop: 2 }}>{t.usage}</div>
          </div>
        </div>
      ))}
    </BbSection>
  );
}

function BbDisplaySection() {
  return (
    <BbSection id="display" num="04" title="Display Typography" desc="Für Hero-Sections und Kampagnen. Bigger = Lighter.">
      {window.bbDisplayScale.map((d, i) => (
        <div key={d.name} style={{ marginBottom: i < window.bbDisplayScale.length - 1 ? 72 : 0 }}>
          <div style={{
            fontSize: Math.min(d.size * 0.7, 88), fontWeight: d.weight,
            letterSpacing: d.tracking, lineHeight: d.lh, color: "#1C1C1E", marginBottom: 20, whiteSpace: "pre-line",
          }}>
            {d.name === "Display" ? "We build ventures\nthat matter." :
             d.name === "Display L" ? "Die Zukunft\nwartet nicht." : "We go deep."}
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <span className="bm-badge bm-badge-purple">{d.name} · {d.size}px</span>
            <span style={{ font: "var(--text-caption)", color: "#6B6B65" }}>
              {d.weight === 600 ? "SemiBold" : d.weight === 500 ? "Medium" : "Regular"} ({d.weight}) · {d.tracking} · {d.lh}
            </span>
          </div>
          <p style={{ font: "var(--text-small)", color: "#6B6B65", marginTop: 12 }}>{d.desc}</p>
        </div>
      ))}
    </BbSection>
  );
}

Object.assign(window, { BbTypeSection, BbDisplaySection });
