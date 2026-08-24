/* global React */
// Brandbook — Section: MD3-Mapping für Produkt-UIs (NEU in v2)

function BbMd3Section() {
  const colorRoles = [
    ["primary", "--bm-purple", "#6B4A94"],
    ["primary-container", "--bm-purple-tint", "#EDE3F5"],
    ["secondary", "--bm-teal", "#3A9E97"],
    ["tertiary", "--bm-berry", "#B84A6F"],
    ["surface", "--off-white", "#F5F4F1"],
    ["surface-container", "surface-stone → sand → mauve", "#E8E5DF"],
    ["on-surface", "--charcoal", "#1C1C1E"],
    ["outline", "--surface-mid-stone", "#C5C0B8"],
    ["primary (dark scheme)", "--bm-lavender-dark", "#AF94D2"],
  ];
  const typeRoles = [
    ["display-*", "type-display-xl / -l / display"],
    ["headline-*", "type-h1 / h2 / h3"],
    ["title-*", "type-h4 / card-title / h5"],
    ["body-*", "type-body-l / body / small"],
    ["label-*", "type-nav / caption / micro"],
  ];

  return (
    <BbSection id="md3" num="14" title="Produkt-UIs — MD3"
      desc="Digitale Bridgemaker-Produkte (Apps, Tools) bauen auf Google Material Design 3 — gebrandet über ein explizites Token-Mapping. Marketing-Oberflächen (Website, Landingpages, Decks) bleiben Bridgemaker-Handwerk.">

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
        <div className="card-clean" style={{ background: "#fff", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1D6B66" }}>MD3 liefert</div>
          <ul style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Komponenten-Anatomie & -Verhalten</li>
            <li>Interaktions-States (State-Layer, Ripple)</li>
            <li>Accessibility-Verhalten</li>
            <li>Layout-Adaptivität (Window Size Classes)</li>
          </ul>
        </div>
        <div className="card-clean" style={{ background: "#fff", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#6B4A94" }}>Bridgemaker übersteuert</div>
          <ul style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Farbe — explizites Mapping, <strong>nie seed-generieren</strong></li>
            <li>Typografie — Inter + type-*-Skala (nie Roboto)</li>
            <li>Shape — Pill-Buttons, Bridgemaker-Radien</li>
            <li>Elevation — Karten sitzen (statt Tonal-Elevation)</li>
            <li>Motion-Zurückhaltung</li>
          </ul>
        </div>
      </div>

      <div style={{ background: "#F5E0E8", borderRadius: 16, padding: "20px 28px", marginBottom: 48, font: "var(--text-small)", color: "#8A3050", lineHeight: 1.6 }}>
        <strong>Warum kein Seed-Theme:</strong> MD3s HCT-Palettengenerierung verschiebt #6B4A94 in Töne, die kein
        Bridgemaker-Purple mehr sind. Die Rollen werden explizit aus den Token-Familien gemappt.
      </div>

      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 20px" }}>Farbrollen-Mapping</h3>
      <div className="card-clean" style={{ background: "#fff", borderRadius: 16, padding: "12px 28px", marginBottom: 48 }}>
        {colorRoles.map(([role, token, hex], i) => (
          <div key={role} style={{
            display: "grid", gridTemplateColumns: "200px 1fr auto 40px", gap: 16, alignItems: "center",
            padding: "12px 0", borderBottom: i < colorRoles.length - 1 ? "1px solid rgba(28,28,30,0.06)" : "none",
          }}>
            <code style={{ font: "500 12px/1.3 'JetBrains Mono', Menlo, monospace", color: "#1C1C1E" }}>{role}</code>
            <code style={{ font: "400 12px/1.3 'JetBrains Mono', Menlo, monospace", color: "#6B4A94" }}>{token}</code>
            <code style={{ font: "400 11px/1 'JetBrains Mono', Menlo, monospace", color: "#918F87" }}>{hex}</code>
            <div style={{ width: 32, height: 20, borderRadius: 6, background: hex, border: "1px solid rgba(0,0,0,0.06)" }} />
          </div>
        ))}
      </div>

      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 20px" }}>Type-Scale-Mapping</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 48 }}>
        {typeRoles.map(([md3, bm]) => (
          <div key={md3} className="card-clean" style={{ background: "#fff", borderRadius: 12, padding: 20 }}>
            <code style={{ font: "500 12px/1.3 'JetBrains Mono', Menlo, monospace", color: "#918F87" }}>{md3}</code>
            <div style={{ font: "500 13px/1.4 Inter, sans-serif", color: "#1C1C1E", marginTop: 8 }}>{bm}</div>
          </div>
        ))}
      </div>

      <p style={{ font: "var(--text-small)", color: "#6B6B65", maxWidth: 720, lineHeight: 1.7 }}>
        Shape: Pill = MD3 full radius, Karten <code>radius-xl</code>, Inputs <code>radius-md</code>.
        Elevation: <code>card-clean</code>/<code>card-elevated</code> für Ruhezustände, keine Surface-Tint-Overlays.
        Motion: Bridgemaker-Dauern & -Easings, ein Motion-Moment pro View. Vollständiges Mapping inkl.
        Library-Empfehlung: <a href="../guidelines/09-md3-mapping.md" style={{ color: "#6B4A94", textDecoration: "underline", textUnderlineOffset: 3 }}>guidelines/09-md3-mapping.md</a>.
      </p>
    </BbSection>
  );
}

Object.assign(window, { BbMd3Section });
