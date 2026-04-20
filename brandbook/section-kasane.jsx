/* global React */
// Brandbook — Section: Kasane Gradients

const _bbNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

function BbKasaneSection() {
  const variants = [
    { key: "Dark", base: "#1C1C1E", blur: 40, anim: "kasane1 20s ease-in-out infinite", noise: 0.03,
      layers: `
        radial-gradient(ellipse 80% 60% at 20% 80%, rgba(138,48,80,0.5) 0%, transparent 60%),
        radial-gradient(ellipse 70% 80% at 75% 20%, rgba(107,74,148,0.6) 0%, transparent 55%),
        radial-gradient(ellipse 50% 50% at 50% 50%, rgba(144,112,184,0.3) 0%, transparent 50%),
        radial-gradient(ellipse 60% 70% at 10% 30%, rgba(74,45,107,0.7) 0%, transparent 50%),
        radial-gradient(ellipse 50% 60% at 90% 70%, rgba(58,158,151,0.4) 0%, transparent 50%),
        radial-gradient(ellipse 40% 40% at 60% 85%, rgba(122,139,106,0.3) 0%, transparent 45%)`,
      headline: "We go deep. But we are crystal clear.",
      textColor: "#fff", eyebrowColor: "rgba(255,255,255,0.4)" },
    { key: "Vibrant", base: "linear-gradient(135deg, #4A2D6B 0%, #6B4A94 30%, #B84A6F 60%, #3A9E97 100%)", blur: 30, anim: "kasane3 16s ease-in-out infinite", noise: 0.04, isLinear: true,
      layers: `
        radial-gradient(ellipse 70% 70% at 25% 75%, rgba(184,74,111,0.7) 0%, transparent 55%),
        radial-gradient(ellipse 60% 60% at 70% 25%, rgba(107,74,148,0.8) 0%, transparent 50%),
        radial-gradient(ellipse 50% 50% at 85% 70%, rgba(58,158,151,0.65) 0%, transparent 50%),
        radial-gradient(ellipse 45% 45% at 40% 40%, rgba(122,139,106,0.4) 0%, transparent 40%),
        radial-gradient(ellipse 80% 80% at 50% 50%, rgba(144,112,184,0.3) 0%, transparent 60%)`,
      headline: "We build ventures that matter.",
      textColor: "#fff", eyebrowColor: "rgba(255,255,255,0.5)" },
    { key: "Light", base: "#F5F1EB", blur: 50, anim: "kasane2 24s ease-in-out infinite", noise: 0.02,
      layers: `
        radial-gradient(ellipse 70% 60% at 15% 85%, rgba(196,177,220,0.55) 0%, transparent 55%),
        radial-gradient(ellipse 60% 70% at 80% 15%, rgba(212,128,154,0.3) 0%, transparent 50%),
        radial-gradient(ellipse 50% 50% at 45% 45%, rgba(237,227,245,0.5) 0%, transparent 45%),
        radial-gradient(ellipse 60% 50% at 85% 75%, rgba(126,196,190,0.25) 0%, transparent 45%),
        radial-gradient(ellipse 40% 40% at 30% 20%, rgba(168,184,154,0.25) 0%, transparent 40%)`,
      headline: "Ventures that matter.",
      textColor: "#1C1C1E", eyebrowColor: "rgba(28,28,30,0.35)" },
  ];

  return (
    <BbSection id="kasane" num="06" title="Kasane Gradients" desc="Signature-Background. Nur für Hero-Momente. Nie als generische Füllung.">
      <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
        {variants.map(v => (
          <div key={v.key} style={{
            width: "100%", borderRadius: 20, overflow: "hidden",
            position: "relative", height: 360, background: v.base,
            border: v.key === "Light" ? "1px solid rgba(0,0,0,0.04)" : "none",
          }}>
            <div style={{ position: "absolute", inset: 0, background: v.layers, filter: `blur(${v.blur}px)`, animation: v.anim }} className="kasane-drift" />
            {v.isLinear && <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 35% at 50% 45%, rgba(255,255,255,0.08) 0%, transparent 50%)" }} />}
            <div style={{ position: "absolute", inset: 0, opacity: v.noise, backgroundImage: _bbNoise }} />
            <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 40 }}>
              <div style={{ font: "500 11px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: v.eyebrowColor, marginBottom: 10 }}>Kasane — {v.key}</div>
              <div style={{ font: "600 clamp(24px,3vw,36px)/1.15 Inter, sans-serif", letterSpacing: "-1px", color: v.textColor }}>{v.headline}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#E8E5DF", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#4A5A3C" }}>Do</div>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Hero-Sections, Cover-Slides, Moment-Blocks</li>
            <li>Ein Kasane pro Seite — maximal</li>
            <li>Respektiere prefers-reduced-motion</li>
          </ul>
        </div>
        <div style={{ background: "#F5E0E8", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8A3050" }}>Don't</div>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Niemals hinter Fließtext — Contrast versagt</li>
            <li>Nicht als generischer Seiten-Hintergrund</li>
            <li>Nicht mit anderen Gradients kombinieren</li>
            <li>Keine neuen Varianten erfinden — nutze die drei</li>
          </ul>
        </div>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbKasaneSection });
