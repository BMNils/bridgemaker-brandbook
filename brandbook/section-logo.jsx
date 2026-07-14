/* global React */
// Brandbook — Section: Logo

const _wm = "../assets/logos/wordmark-black.svg";
const _wmW = "../assets/logos/wordmark-white.svg";
const _mg = "../assets/logos/monogram-black.svg";
const _mgW = "../assets/logos/monogram-white.svg";
const _mgBox = "../assets/logos/monogram-blackbox.svg";
const _mgWBox = "../assets/logos/monogram-whitebox.svg";

function BbLogoSection() {
  return (
    <BbSection id="logo" num="02" title="Logo"
      desc="Wordmark als primäres Logo. Monogram als Signet, App-Icon, Avatar, Favicon — überall, wo der Schriftzug nicht funktioniert.">

      {/* Primary wordmark — light + dark */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Wordmark — Primär</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px" }}>Default für Header, Footer, Visitenkarten, Slide-Cover, Pitch-Decks.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 56 }}>
        <div style={{
          background: "#F5F1EB", borderRadius: 20, border: "1px solid #C5C0B8",
          padding: 56, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200,
        }}>
          <img src={_wm} alt="Bridgemaker" style={{ width: "70%", maxWidth: 360 }} />
        </div>
        <div style={{
          background: "#1C1C1E", borderRadius: 20,
          padding: 56, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200,
        }}>
          <img src={_wmW} alt="Bridgemaker" style={{ width: "70%", maxWidth: 360 }} />
        </div>
      </div>

      {/* Monogram */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Monogram — Signet</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 620 }}>
        Für quadratische Anwendungen: App-Icon, Favicon, Social-Avatar, kleine Stempel auf Bildern. Niemals als Ersatz für das Wordmark im Hauptauftritt.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
        <div style={{ background: "#F5F1EB", borderRadius: 20, border: "1px solid #C5C0B8", padding: 32, aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={_mg} alt="B—M" style={{ width: "70%" }} />
        </div>
        <div style={{ background: "#1C1C1E", borderRadius: 20, padding: 32, aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={_mgW} alt="B—M" style={{ width: "70%" }} />
        </div>
        <div style={{ background: "#F5F1EB", borderRadius: 20, border: "1px solid #C5C0B8", padding: 24, aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={_mgBox} alt="B—M Blackbox" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
        </div>
        <div style={{ background: "#1C1C1E", borderRadius: 20, padding: 24, aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={_mgWBox} alt="B—M Whitebox" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 56 }}>
        {[
          { l: "Open · Black", u: "Standard für helle Flächen" },
          { l: "Open · White", u: "Standard für dunkle Flächen" },
          { l: "Blackbox", u: "App-Icon, Favicon, Garantie auf hellem Foto-Untergrund" },
          { l: "Whitebox", u: "Stempel auf dunklen Fotos, wo das Schwarz wegliefe" },
        ].map(c => (
          <div key={c.l}>
            <div style={{ font: "500 12px/1.4 Inter, sans-serif", color: "#1C1C1E" }}>{c.l}</div>
            <p style={{ font: "var(--text-caption)", color: "#6B6B65", margin: "4px 0 0", lineHeight: 1.5 }}>{c.u}</p>
          </div>
        ))}
      </div>

      {/* Construction / clear space */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 24px" }}>Schutzzone & Mindestgrößen</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 32 }}>
        <div style={{ background: "#fff", borderRadius: 20, padding: "64px 56px", position: "relative" }}>
          {/* Clear-space diagram — ElevenLabs style: corner L-markers + X labels + grid guides */}
          <div style={{ position: "relative", display: "inline-block", padding: 40 }}>
            {(() => {
              const X = 40; // clear-space in px (matches padding)
              const stroke = "#C4B1DC"; // soft-purple
              const arm = 14;
              const corner = (top, left, right, bottom) => ({
                position: "absolute", width: arm, height: arm,
                borderStyle: "solid", borderColor: stroke, borderWidth: 0,
                borderTopWidth: top ? 1.5 : 0,
                borderLeftWidth: left ? 1.5 : 0,
                borderRightWidth: right ? 1.5 : 0,
                borderBottomWidth: bottom ? 1.5 : 0,
              });
              return <>
                {/* faint full outline */}
                <div style={{ position: "absolute", inset: 0, border: `1px dashed ${stroke}`, opacity: 0.35, pointerEvents: "none" }} />
                {/* corner L-markers */}
                <div style={{ ...corner(true, true, false, false), top: -1, left: -1 }} />
                <div style={{ ...corner(true, false, true, false), top: -1, right: -1 }} />
                <div style={{ ...corner(false, true, false, true), bottom: -1, left: -1 }} />
                <div style={{ ...corner(false, false, true, true), bottom: -1, right: -1 }} />
                {/* measurement guides — top */}
                <div style={{ position: "absolute", top: -28, left: 0, right: 0, height: 20, pointerEvents: "none" }}>
                  <div style={{ position: "absolute", top: 10, left: 0, right: 0, borderTop: `1px solid ${stroke}` }} />
                  <div style={{ position: "absolute", top: 4, left: 0, height: 12, borderLeft: `1px solid ${stroke}` }} />
                  <div style={{ position: "absolute", top: 4, left: X, height: 12, borderLeft: `1px solid ${stroke}` }} />
                  <div style={{ position: "absolute", top: -4, left: X/2 - 6, font: "500 11px/1 Inter, sans-serif", color: "#6B4A94", background: "#fff", padding: "0 4px" }}>X</div>
                </div>
                {/* measurement guides — left */}
                <div style={{ position: "absolute", left: -28, top: 0, bottom: 0, width: 20, pointerEvents: "none" }}>
                  <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, borderLeft: `1px solid ${stroke}` }} />
                  <div style={{ position: "absolute", left: 4, top: 0, width: 12, borderTop: `1px solid ${stroke}` }} />
                  <div style={{ position: "absolute", left: 4, top: X, width: 12, borderTop: `1px solid ${stroke}` }} />
                  <div style={{ position: "absolute", top: X/2 - 7, left: -1, font: "500 11px/1 Inter, sans-serif", color: "#6B4A94", background: "#fff", padding: "0 4px" }}>X</div>
                </div>
              </>;
            })()}
            <img src={_wm} alt="Bridgemaker" style={{ display: "block", height: 36, position: "relative" }} />
          </div>
          <p style={{ font: "var(--text-small)", color: "#3D3D3A", marginTop: 32, maxWidth: 420 }}>
            Schutzzone <strong>X = Höhe des „B"</strong> auf allen Seiten. Innerhalb dieser Zone keine Texte, Linien, Bildkanten oder andere Logos.
          </p>
        </div>
        <div style={{ background: "#fff", borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ font: "500 12px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87" }}>Mindestgrößen</div>
            <div style={{ marginTop: 20, display: "grid", gap: 14 }}>
              <div>
                <div style={{ font: "500 13px/1.3 Inter, sans-serif", color: "#1C1C1E" }}>Wordmark</div>
                <div style={{ font: "400 12px/1.4 'JetBrains Mono', Menlo, monospace", color: "#6B6B65", marginTop: 2 }}>Digital · 120px Breite · Print · 24mm</div>
              </div>
              <div>
                <div style={{ font: "500 13px/1.3 Inter, sans-serif", color: "#1C1C1E" }}>Monogram (open)</div>
                <div style={{ font: "400 12px/1.4 'JetBrains Mono', Menlo, monospace", color: "#6B6B65", marginTop: 2 }}>Digital · 24px · Print · 8mm</div>
              </div>
              <div>
                <div style={{ font: "500 13px/1.3 Inter, sans-serif", color: "#1C1C1E" }}>Monogram (box)</div>
                <div style={{ font: "400 12px/1.4 'JetBrains Mono', Menlo, monospace", color: "#6B6B65", marginTop: 2 }}>Digital · 32px · Print · 10mm</div>
              </div>
            </div>
          </div>
          <p style={{ font: "var(--text-caption)", color: "#918F87", margin: "20px 0 0", lineHeight: 1.5 }}>
            Darunter verliert das Em-Dash bzw. der Strich Lesbarkeit.
          </p>
        </div>
      </div>

      {/* Color rules */}
      <div style={{ background: "#fff", borderRadius: 20, padding: 32, marginBottom: 32 }}>
        <div style={{ font: "500 12px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87" }}>Farbregeln</div>
        <p style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "12px 0 0", maxWidth: 720 }}>
          Charcoal (#1C1C1E) auf hellem Grund, Off-White (#F5F1EB) auf dunklem. Niemals in Brand-Farben (Purple, Berry, Teal, Sage) eingefärbt — auch nicht als „Highlight". Das Logo bleibt monochrom; Farbe lebt drumherum.
        </p>
      </div>

      {/* Do / Don't */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#E8E5DF", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#4A5A3C" }}>Do</div>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Wordmark als primäre Anwendung — im Website-Header (64px) immer die Wordmark, 20px hoch</li>
            <li>Monogram nur, wenn das Format ein Quadrat erzwingt (Favicon, App-Icon, Avatar, Foto-Stempel)</li>
            <li>Charcoal auf Off-White, Off-White auf Charcoal</li>
            <li>Schutzzone = Höhe des „B" rundherum</li>
            <li>Box-Variante des Monograms auf unruhigem Foto-Untergrund</li>
          </ul>
        </div>
        <div style={{ background: "#F5E0E8", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8A3050" }}>Don't</div>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Keine Farbfüllung im Logo (kein Purple, kein Berry, kein Gradient)</li>
            <li>Monogram nicht als Ersatz für das Wordmark im Hauptauftritt</li>
            <li>Nicht rotieren, schräg stellen, verzerren</li>
            <li>Open-Monogram nicht direkt auf unruhige Fotos — Box-Variante nutzen</li>
            <li>Keine Outline-, Drop-Shadow- oder Glow-Versionen</li>
          </ul>
        </div>
      </div>

      {/* Downloads */}
      <div style={{ marginTop: 32, padding: 24, background: "#1C1C1E", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ font: "500 11px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#AF94D2" }}>Downloads</div>
          <div style={{ font: "500 15px/1.3 Inter, sans-serif", color: "#F5F1EB", marginTop: 4 }}>Alle Logo-Dateien als SVG</div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            ["Wordmark Black", _wm], ["Wordmark White", _wmW],
            ["Monogram Black", _mg], ["Monogram White", _mgW],
            ["Blackbox", _mgBox], ["Whitebox", _mgWBox],
          ].map(([l, h]) => (
            <a key={l} href={h} download style={{
              font: "500 12px/1 Inter, sans-serif", color: "#F5F1EB",
              textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)",
              padding: "8px 14px", borderRadius: 999,
            }}>{l} ↓</a>
          ))}
        </div>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbLogoSection });
