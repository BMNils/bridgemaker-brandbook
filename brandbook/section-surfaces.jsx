/* global React */
// Brandbook — Section: Surfaces, Cards & Glass (NEU in v2 — Stand Website)

function BbSurfacesSection() {
  return (
    <BbSection id="surfaces" num="08" title="Cards & Glass"
      desc="Drei Tiefenebenen: Grund (Off-White/Weiß im Rhythmus) → Felder (Surfaces, Gradients) → Karten. Jede Box kommt aus dieser Familie — Paper (matt) oder Glass (gefrostet). Karten sitzen auf der Seite, sie fliegen nicht.">

      {/* Paper */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Paper — matte Content-Karten</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 620 }}>
        Signature-Treatment: knackige <strong>Inset-Haarlinie rundum + nahe Elevation</strong> — als Schatten-Rezept,
        nie als CSS-border. <code>card-clean</code> auf Weiß, <code>card-elevated</code> auf Tint-Füllungen.
        Verlinkte Karten liften auf Hover. Farbige Akzent-Kanten (border-left-Callouts) sind verboten.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
        {[
          { cls: "bm-card card-clean", label: "card-clean", sub: "Weiße Karte — Haarlinie + nahe Elevation" },
          { cls: "bm-card bm-card-mauve card-elevated", label: "card-elevated", sub: "Getönte Karte — identisches Treatment" },
          { cls: "bm-card bm-card-sand card-elevated shadow-pop", label: "+ shadow-pop", sub: "Max. EINE Featured-Box pro Seite" },
        ].map(c => (
          <div key={c.label} className={c.cls} style={{ padding: 28 }}>
            <code style={{ font: "500 12px/1 'JetBrains Mono', Menlo, monospace", color: "#6B4A94" }}>.{c.label.replace("+ ", "")}</code>
            <div style={{ font: "600 17px/1.35 Inter, sans-serif", marginTop: 14, letterSpacing: "-0.3px", color: "#1C1C1E" }}>{c.label}</div>
            <p style={{ font: "var(--text-caption)", color: "#6B6B65", marginTop: 8, lineHeight: 1.5 }}>{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Glass */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Glass — nur, wo etwas zu frosten ist</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 620 }}>
        Glas braucht einen Gradient oder ein Bild dahinter — auf schlichtem Off-White liest es sich als schmutziges Weiß
        (dann Paper nehmen). Das Grain-Overlay gehört zum Premium-Finish dazu.
      </p>
      <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 16, minHeight: 320 }}>
        <div className="bg-kasane-hero kasane-drift" style={{ position: "absolute", inset: "-10%" }} />
        <div className="grain" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, padding: 48 }}>
          <div className="card-glass" style={{ borderRadius: 20, padding: 32 }}>
            <code style={{ font: "500 12px/1 'JetBrains Mono', Menlo, monospace", color: "#6B4A94" }}>.card-glass</code>
            <div style={{ font: "600 18px/1.35 Inter, sans-serif", marginTop: 14, letterSpacing: "-0.3px", color: "#1C1C1E" }}>Frosted Glass</div>
            <p style={{ font: "var(--text-small)", color: "#3D3D3A", marginTop: 8, lineHeight: 1.6 }}>
              Transluzent — der Gradient dahinter frostet durch. Erst dadurch werden Glasrand, Reflex und Korn sichtbar.
            </p>
          </div>
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden" }}>
            <div className="hero-card-glass hero-card-veil" style={{ position: "absolute", inset: 0, borderRadius: 20 }} />
            <div style={{ position: "relative", padding: 32 }}>
              <code style={{ font: "500 12px/1 'JetBrains Mono', Menlo, monospace", color: "#6B4A94" }}>.hero-card-glass + .hero-card-veil</code>
              <div style={{ font: "600 18px/1.35 Inter, sans-serif", marginTop: 14, letterSpacing: "-0.3px", color: "#1C1C1E" }}>Milchglasscheibe</div>
              <p style={{ font: "var(--text-small)", color: "#3D3D3A", marginTop: 8, lineHeight: 1.6 }}>
                Für Hero-Kartenstapel. Milchigkeit über die letzten Weiß-Werte des Veils steuern.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p style={{ font: "var(--text-caption)", color: "#918F87", margin: "0 0 64px", lineHeight: 1.5 }}>
        Dritte Variante: <code>.case-glass</code> — die Milchglas-Ergebnisleiste über Case-Bildern (Rezept in tokens.css).
      </p>

      {/* Grain */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Grain — das Filmkorn-Finish</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 620 }}>
        Als absolutes Overlay (<code>pointer-events-none</code>). Nach Hintergrund wählen:
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 64 }}>
        {[
          { cls: "grain", bg: "#EDE3F5", dark: false, sub: "multiply, helle Flächen" },
          { cls: "grain-screen", bg: "#4A2D6B", dark: true, sub: "screen, dunkle Flächen" },
          { cls: "grain-photo", bg: "#C4B1DC", dark: false, sub: "ohne Blend-Mode, unter Glas" },
          { cls: "grain-photo-screen", bg: "#1E5E58", dark: true, sub: "screen, dunkel, ohne Glas" },
        ].map(g => (
          <div key={g.cls}>
            <div style={{ position: "relative", background: g.bg, borderRadius: 16, height: 120, overflow: "hidden" }}>
              <div className={g.cls} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
            </div>
            <code style={{ font: "500 11px/1 'JetBrains Mono', Menlo, monospace", color: "#6B4A94", display: "block", marginTop: 8 }}>.{g.cls}</code>
            <div style={{ font: "var(--text-caption)", color: "#6B6B65", marginTop: 4 }}>{g.sub}</div>
          </div>
        ))}
      </div>

      {/* Craft traps */}
      <div className="bm-on-dark" style={{ background: "#1C1C1E", borderRadius: 20, padding: 40 }}>
        <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#AF94D2", marginBottom: 16 }}>
          ⚠ Handwerks-Fallen — hart erarbeitet, nicht neu lernen
        </div>
        <ol style={{ margin: 0, paddingLeft: 20, font: "400 15px/1.9 Inter, sans-serif", color: "#F5F1EB" }}>
          <li>Tailwind v4 strippt handgeschriebenes <code style={{ color: "#AF94D2" }}>backdrop-filter</code> in @layer-Blöcken — Frost dort über Utilities am Element (<code style={{ color: "#AF94D2" }}>backdrop-blur-xl backdrop-saturate-150</code>).</li>
          <li>Glas-Karten dürfen selbst keinen <code style={{ color: "#AF94D2" }}>filter</code> tragen — isoliert sie vom Backdrop-Sampling.</li>
          <li>Inhalte unter Glasscheiben: kein <code style={{ color: "#AF94D2" }}>filter</code>, kein <code style={{ color: "#AF94D2" }}>blend-mode</code> — darum komponiert <code style={{ color: "#AF94D2" }}>.grain-photo</code> normal.</li>
          <li>Drift-Eltern brauchen <code style={{ color: "#AF94D2" }}>overflow: hidden</code>.</li>
          <li>Kein <code style={{ color: "#AF94D2" }}>blur()</code> auf Kasane-Flächen im Mobile-Kontext — ruckelt.</li>
        </ol>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbSurfacesSection });
