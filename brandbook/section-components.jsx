/* global React */
// Brandbook — Section: Components (Buttons, Karten, Badges, Forms — Stand Website)

function BbComponentsSection() {
  return (
    <BbSection id="components" num="10" title="Components" desc="Jede Komponente hat Token-Defaults. Nicht inline überschreiben.">

      {/* Buttons */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Buttons — Pill. Immer.</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 32px", maxWidth: 620 }}>
        <code style={{ font: "400 12.5px/1 'JetBrains Mono', Menlo, monospace", color: "#6B4A94" }}>border-radius: 999px</code>.
        Hover = <strong>Füllungswechsel innerhalb der Markenfamilie</strong>: Charcoal-Pill → Deep-Plum, helle Pill →
        Soft-Purple — nie nach Schwarz. Größen 36/44/48/52px. Labels verb-first („Jetzt starten"), nie „Hier klicken".
        Sekundär und Ghost sind Systemvarianten (auf der Website derzeit ungenutzt).
      </p>

      <div style={{ background: "#fff", borderRadius: 20, padding: 40, marginBottom: 16 }} className="card-clean">
        <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87", marginBottom: 20 }}>Auf hellem Grund</div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <button className="bm-btn bm-btn-primary">Jetzt starten</button>
          <button className="bm-btn bm-btn-secondary">Mehr erfahren</button>
          <button className="bm-btn bm-btn-ghost">Abbrechen</button>
          <a className="bm-link" href="#" style={{ color: "#6B4A94" }}>Alle Cases →</a>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 24 }}>
          <button className="bm-btn bm-btn-primary bm-btn-sm">Small · 36</button>
          <button className="bm-btn bm-btn-primary">Default · 44</button>
          <button className="bm-btn bm-btn-primary bm-btn-lg">Large · 52</button>
        </div>
      </div>

      <div className="bm-on-dark" style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 64 }}>
        <div className="bg-contact-cta" style={{ position: "absolute", inset: 0 }} />
        <div className="grain-screen" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ position: "relative", padding: 40 }}>
          <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>Auf dunklem Grund</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <button className="bm-btn bm-btn-primary">Let's build together</button>
            <button className="bm-btn bm-btn-glow">Featured-CTA (Glow)</button>
            <button className="bm-btn bm-btn-secondary">Mehr erfahren</button>
          </div>
        </div>
      </div>

      {/* Karten */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Karten — sitzen, nicht fliegen</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 620 }}>
        Inset-Haarlinie + nahe Elevation (<code>card-clean</code>/<code>card-elevated</code> — Details in „Cards & Glass").
        Verlinkte Karten <strong>liften</strong> auf Hover (−4px + shadow-md). Füllungen variieren — nie drei gleiche
        Surfaces in einer Reihe. <strong>Verboten:</strong> farbige Akzent-Kanten (border-left-„Klammern").
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 64 }}>
        {[
          { s: "White", cls: "bm-card card-clean", tint: "purple", label: "Standard" },
          { s: "Mauve", cls: "bm-card bm-card-mauve card-elevated", tint: "purple", label: "Purple DNA" },
          { s: "Sage",  cls: "bm-card bm-card-sage card-elevated",  tint: "teal",   label: "Tech" },
          { s: "Sand",  cls: "bm-card bm-card-sand card-elevated",  tint: "berry",  label: "Venture" },
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
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Badges</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 20px", maxWidth: 620 }}>
        Kleine Pills: <strong>Tint-Hintergrund + Deep-Textfarbe</strong>. Mehr als 3 pro View = Layout-Problem.
        Daneben existiert eine Mono-Micro-Variante für technische Labels.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 64, alignItems: "center" }}>
        <span className="bm-badge">Neutral</span>
        <span className="bm-badge bm-badge-purple">Kundenschnittstelle</span>
        <span className="bm-badge bm-badge-berry">Neue Felder</span>
        <span className="bm-badge bm-badge-teal">Vertrieb</span>
        <span style={{ font: "500 10px/1 'JetBrains Mono', Menlo, monospace", background: "#EDE3F5", color: "#4A2D6B", padding: "5px 10px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.1em" }}>Mono-Micro</span>
      </div>

      {/* Forms */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Forms</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 620 }}>
        Inputs sind <code>radius-md</code> (12px), <strong>nicht Pill</strong> — nur Buttons sind Pill. Labels immer über
        dem Feld. <em>(Vorgabe aus v1.1 — die Website hat derzeit kein Formular; beim ersten echten Einsatz validieren.)</em>
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
        <button className="bm-btn bm-btn-primary" style={{ justifySelf: "start" }}>Nachricht senden</button>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbComponentsSection });
