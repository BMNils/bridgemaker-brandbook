/* global React */
// Brandbook — Section: Typography + Display (fluide Skala, Stand Website)

function BbTypeSection() {
  return (
    <BbSection id="type" num="05" title="Typography"
      desc="Inter für alles — auch Display-Größen. Die großen Stufen sind fluide via clamp(): fixe Pixel brechen auf Mobile. Typografie wird AUSSCHLIESSLICH über die type-*-Klassen gesetzt — nie ad-hoc.">
      <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginBottom: 48 }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ font: "500 11px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87", marginBottom: 12 }}>Alle Größen</div>
          <div style={{ font: "600 32px/1 Inter, sans-serif", color: "#1C1C1E", letterSpacing: "-0.9px" }}>Inter</div>
          <p style={{ font: "var(--text-small)", color: "#6B6B65", marginTop: 12, maxWidth: 420 }}>
            Eine Familie für Display, Headings, Body und UI. In Next.js via next/font laden. Größer = leichter — bewusst gesetzt.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ font: "500 11px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87", marginBottom: 12 }}>Code / Daten</div>
          <div style={{ font: "400 32px/1 'JetBrains Mono', Menlo, monospace", color: "#1C1C1E" }}>JetBrains Mono</div>
          <p style={{ font: "var(--text-small)", color: "#6B6B65", marginTop: 12, maxWidth: 420 }}>
            Für Code, Daten und technische Captions (auch Mono-Badges).
          </p>
        </div>
      </div>

      <div style={{ background: "#EDE3F5", borderRadius: 16, padding: "20px 28px", marginBottom: 40, font: "var(--text-small)", color: "#4A2D6B", lineHeight: 1.6 }}>
        <strong>Regel:</strong> nur <code>type-*</code>-Klassen — nie ad-hoc Größen, Gewichte oder Tracking.
        Fehlt eine Textrolle, wird eine Klasse im System ergänzt. Tracking der fluiden Stufen in <code>em</code> (skaliert mit der Größe).
      </div>

      {window.bbTypeScale.slice().reverse().map((t, i, arr) => (
        <div key={t.name} style={{
          display: "grid", gridTemplateColumns: "120px 1fr auto",
          alignItems: "baseline", padding: "20px 0",
          borderBottom: i < arr.length - 1 ? "1px solid #C5C0B8" : "none", gap: 24,
        }}>
          <div>
            <div style={{ font: "500 11px/1 Inter, sans-serif", color: "#6B6B65" }}>{t.name}{t.fluid ? ", fluide" : ""}</div>
            <div style={{ font: "400 10px/1.3 'JetBrains Mono', Menlo, monospace", color: "#918F87", marginTop: 4 }}>.{t.cls}</div>
          </div>
          <div className={t.cls} style={{ color: "#1C1C1E", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }}>
            {t.name === "Eyebrow" ? "Was wir bauen" : "Wir entwerfen Geschäftsmodelle."}
          </div>
          <div style={{ textAlign: "right", minWidth: 200 }}>
            <div style={{ font: "400 11px/1.4 'JetBrains Mono', Menlo, monospace", color: "#6B6B65" }}>{t.size}</div>
            <div style={{ font: "400 11px/1.4 'JetBrains Mono', Menlo, monospace", color: "#918F87" }}>{t.weight}, {t.tracking}, {t.lh}</div>
            <div style={{ font: "400 11px/1.4 Inter, sans-serif", color: "#918F87", marginTop: 2 }}>{t.usage}</div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: 28 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#4A5A3C" }}>Deutsch in Display</div>
          <p style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "12px 0 0", lineHeight: 1.7 }}>
            Umlaute in Display-Headlines sind <strong>willkommen</strong> — sie geben deutschen Headlines Charakter.
            Lange Komposita brechen lassen (<code>overflow-wrap: break-word</code>), nicht die Schrift schrumpfen.
          </p>
        </div>
        <div style={{ background: "#fff", borderRadius: 16, padding: 28 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8A3050" }}>Tracking</div>
          <p style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "12px 0 0", lineHeight: 1.7 }}>
            Headlines laufen mit negativem Tracking. Nie positiv spationieren — einzige Ausnahme ist das Eyebrow (+0.08em, Versalien).
          </p>
        </div>
      </div>
    </BbSection>
  );
}

function BbDisplaySection() {
  return (
    <BbSection id="display" num="06" title="Display Typography"
      desc="Für Hero-Sektionen und Kampagnen. Bigger = Lighter. Fluide via clamp() — die Werte hier atmen mit dem Viewport.">
      {window.bbDisplayScale.map((d, i) => (
        <div key={d.name} style={{ marginBottom: i < window.bbDisplayScale.length - 1 ? 72 : 0 }}>
          <div className={d.cls} style={{ color: "#1C1C1E", marginBottom: 20, whiteSpace: "pre-line" }}>
            {d.name === "Display" ? "Wir entwerfen.\nWir bleiben." :
             d.name === "Display L" ? "Die Zukunft\nwartet nicht." : "We go deep."}
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <span className="bm-badge bm-badge-purple">{d.name}</span>
            <code style={{ font: "400 12px/1 'JetBrains Mono', Menlo, monospace", color: "#6B6B65" }}>{d.size}</code>
            <span style={{ font: "var(--text-caption)", color: "#6B6B65" }}>
              {d.weight === 600 ? "SemiBold" : d.weight === 500 ? "Medium" : "Regular"} ({d.weight}), {d.tracking}, {d.lh}
            </span>
          </div>
          <p style={{ font: "var(--text-small)", color: "#6B6B65", marginTop: 12 }}>{d.desc}</p>
        </div>
      ))}
    </BbSection>
  );
}

Object.assign(window, { BbTypeSection, BbDisplaySection });
