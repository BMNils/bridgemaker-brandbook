/* global React */
// Brandbook — Section: Components (Buttons, Cards, Badges, Forms, Nav)

function BbComponentsSection() {
  return (
    <BbSection id="components" num="07" title="Components" desc="Jede Komponente hat Token-Defaults. Nicht inline überschreiben.">

      {/* Buttons */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Buttons — Pill Shape</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 32px", maxWidth: 560 }}>
        Full-Rounded. Immer. <code style={{ font: "400 12.5px/1 'JetBrains Mono', Menlo, monospace", color: "#6B4A94" }}>border-radius: 999px</code>. Drei Varianten, drei Größen.
      </p>

      <div style={{ background: "#fff", borderRadius: 20, padding: 40, marginBottom: 16 }}>
        <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87", marginBottom: 20 }}>Auf hellem Grund</div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <button className="bm-btn bm-btn-primary">Let's build together</button>
          <button className="bm-btn bm-btn-secondary">Mehr erfahren</button>
          <button className="bm-btn bm-btn-ghost">Abbrechen</button>
          <a className="bm-link" href="#">Alle Ventures →</a>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 24 }}>
          <button className="bm-btn bm-btn-primary bm-btn-sm">Small</button>
          <button className="bm-btn bm-btn-primary">Medium</button>
          <button className="bm-btn bm-btn-primary bm-btn-lg">Large</button>
        </div>
      </div>

      <div className="bm-on-dark" style={{ background: "#1C1C1E", borderRadius: 20, padding: 40, marginBottom: 64 }}>
        <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87", marginBottom: 20 }}>Auf dunklem Grund</div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <button className="bm-btn bm-btn-primary">Let's build together</button>
          <button className="bm-btn bm-btn-secondary">Mehr erfahren</button>
          <a className="bm-link" href="#">Ventures →</a>
        </div>
      </div>

      {/* Cards */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Cards & Surfaces</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 560 }}>
        Surface-Varianten gruppieren Content thematisch. Nicht drei gleiche in einer Reihe.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 64 }}>
        {[
          { s: "White", cls: "bm-card", tint: "purple", label: "Standard" },
          { s: "Mauve", cls: "bm-card bm-card-mauve", tint: "purple", label: "Purple DNA" },
          { s: "Sage",  cls: "bm-card bm-card-sage",  tint: "teal",   label: "Tech" },
          { s: "Sand",  cls: "bm-card bm-card-sand",  tint: "berry",  label: "Venture" },
        ].map(c => (
          <div key={c.s} className={c.cls} style={{ padding: 24 }}>
            <span className={`bm-badge bm-badge-${c.tint}`}>{c.label}</span>
            <div style={{ font: "500 17px/1.3 Inter, sans-serif", marginTop: 16, letterSpacing: "-0.3px" }}>{c.s} Surface</div>
            <p style={{ font: "var(--text-caption)", color: "#6B6B65", marginTop: 8 }}>
              Für thematische Gruppierung von Content.
            </p>
          </div>
        ))}
      </div>

      {/* Badges */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 20px" }}>Badges</h3>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 64 }}>
        <span className="bm-badge">Neutral</span>
        <span className="bm-badge bm-badge-purple">Venture</span>
        <span className="bm-badge bm-badge-berry">Hot</span>
        <span className="bm-badge bm-badge-teal">Tech</span>
        <span className="bm-badge bm-badge-sage">Chart</span>
      </div>

      {/* Forms */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Forms</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 560 }}>
        Inputs sind <code>radius-md</code> (12px), <strong>nicht pill</strong>. Nur Buttons sind pill. Labels immer über dem Input.
      </p>
      <div style={{ maxWidth: 440, display: "grid", gap: 16, marginBottom: 24 }}>
        <div>
          <label className="bm-label">E-Mail</label>
          <input className="bm-input" placeholder="team@bridgemaker.com" defaultValue="" />
          <div className="bm-help">Wir melden uns innerhalb von 24 Stunden.</div>
        </div>
        <div>
          <label className="bm-label">Was möchtest du bauen?</label>
          <textarea className="bm-textarea" placeholder="Eine kurze Beschreibung …"></textarea>
        </div>
        <button className="bm-btn bm-btn-primary" style={{ justifySelf: "start" }}>Absenden</button>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbComponentsSection });
