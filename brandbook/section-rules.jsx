/* global React */
// Brandbook — Sections: Story, Voice, Layout, Tokens, Claude (v2 — Stand Website)

function BbStorySection() {
  const principles = [
    { t: "Wirkung vor Aufwand", d: "Wir rechnen in Ergebnissen. Stunden, Slides und Meetings sind keine Währung für Erfolg." },
    { t: "Produkt ist Business", d: "Eine gute Idee ohne Produkt bleibt Wunschdenken. Business, Produkt und Technologie gehören an einen Tisch." },
    { t: "Mensch und Maschine", d: "Was sich wiederholt, automatisieren wir. Damit Menschen tun, was nur Menschen können: urteilen, Beziehungen pflegen, entscheiden." },
    { t: "Build–Measure–Learn", d: "Bauen und Messen schlägt Vermutungen. Unfertig ist akzeptiert. Ungetestet nicht." },
    { t: "Klarheit", d: "Kein Jargon, keine Fassade, kein KI-Geschwätz. Unklare Sprache zeigt unklares Denken." },
    { t: "Dein Venture", d: "Handle wie ein Eigentümer. Entscheiden, umsetzen, Verantwortung für das Ergebnis übernehmen." },
  ];
  return (
    <BbSection id="story" num="01" title="Positionierung · Mission · Principles"
      desc='Die Bridgemaker-DNA in Worten — Wortlaut der Website. Das Logo ist der „Bindestrich": die direkteste Brücke zwischen zwei Welten.'>

      {/* Positionierung */}
      <div className="bm-on-dark" style={{ background: "#1C1C1E", borderRadius: 20, padding: 48, marginBottom: 16 }}>
        <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#AF94D2" }}>Positionierung</div>
        <div style={{ font: "600 34px/1.2 Inter, sans-serif", letterSpacing: "-0.8px", marginTop: 20, color: "#F5F1EB", maxWidth: 900 }}>
          Die Digitalberatung für KI-Transformation — inhabergeführt, mit der Umsetzungskraft eines Venture Builders.
        </div>
        <p style={{ font: "400 16px/1.6 Inter, sans-serif", color: "#A8A69E", marginTop: 16, marginBottom: 0 }}>
          Seit 2016. Verantwortlich bis zum Ergebnis.
        </p>
      </div>

      {/* Mission + Vision */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 56 }}>
        <div style={{ background: "#E3E0E8", borderRadius: 20, padding: 40 }}>
          <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B4A94" }}>Mission</div>
          <div style={{ font: "600 26px/1.25 Inter, sans-serif", letterSpacing: "-0.6px", marginTop: 20, color: "#1C1C1E" }}>
            Wir entwerfen Geschäftsmodelle und führen sie zum Ergebnis.
          </div>
          <p style={{ font: "400 15px/1.55 Inter, sans-serif", color: "#3D3D3A", marginTop: 12, marginBottom: 0 }}>Wir bleiben, bis es trägt.</p>
        </div>
        <div style={{ background: "#DDE4E0", borderRadius: 20, padding: 40 }}>
          <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#1D6B66" }}>Vision</div>
          <div style={{ font: "600 26px/1.25 Inter, sans-serif", letterSpacing: "-0.6px", marginTop: 20, color: "#1C1C1E" }}>
            KI wird zum Wachstumshebel etablierter Unternehmen.
          </div>
          <p style={{ font: "400 15px/1.55 Inter, sans-serif", color: "#3D3D3A", marginTop: 12, marginBottom: 0 }}>Messbar. Im laufenden Betrieb.</p>
        </div>
      </div>

      {/* Principles */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Die sechs Principles</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 560 }}>
        Wie wir arbeiten — Wortlaut = Website (Principles-Seite & Karriere), das ist die kanonische Fassung.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 56 }}>
        {principles.map((p, i) => (
          <div key={p.t} className="card-clean" style={{ background: "#fff", borderRadius: 16, padding: 28, display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ font: "600 28px/1 Inter, sans-serif", letterSpacing: "-0.8px", color: "#C4B1DC", minWidth: 36 }}>0{i + 1}</div>
            <div>
              <div style={{ font: "600 17px/1.3 Inter, sans-serif", letterSpacing: "-0.3px", color: "#1C1C1E" }}>{p.t}</div>
              <p style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "8px 0 0", lineHeight: 1.6 }}>{p.d}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bindestrich narrative */}
      <div style={{ background: "#F5F1EB", borderRadius: 20, padding: 48, border: "1px solid #E8E5DF" }}>
        <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#918F87", marginBottom: 16 }}>
          Das Logo als Idee
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <div style={{ font: "600 88px/0.9 Inter, sans-serif", letterSpacing: "-3px", color: "#1C1C1E" }}>B—M</div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ font: "400 17px/1.55 Inter, sans-serif", color: "#1C1C1E", margin: 0, maxWidth: 580 }}>
              Der „Bindestrich" zwischen B und M ist das Logo. Eine direkte Verbindung zwischen zwei Seiten — wie wir: <strong>straight to the point, uncomplicated, der direkteste Weg</strong> zwischen Corporate und Startup.
            </p>
          </div>
        </div>
      </div>
    </BbSection>
  );
}

function BbVoiceSection() {
  const polarities = [
    ["Matter-of-fact", "Emotional"],
    ["Calm & wise", "Fierce & brave"],
    ["Black & white", "Bold in colors"],
    ["Deep", "Crystal clear"],
  ];

  const dimensions = [
    { title: "Direkt & präzise", body: "Klarer Satz, klares Verb, klares Subjekt. Kein Jargon, kein KI-Geschwätz." },
    { title: "Ambitioniert & visionär, mit Substanz", body: "Wir bauen Zukunft. Headlines dürfen groß denken — aber das Versprechen muss tragen." },
    { title: "Pragmatisch & handwerklich", body: '„Wir bauen" ist das Verb. Substanz vor Oberfläche.' },
    { title: "Selbstbewusst, nicht arrogant", body: "Matter-of-fact-Ton. Selbstbewusst, nie laut." },
  ];

  const notWeAre = [
    { title: "Nicht buzzwordy", body: "Keine austauschbaren Marketingwörter." },
    { title: "Nicht naiv", body: "Wir kennen die Realität in etablierten Unternehmen." },
    { title: "Nicht techie", body: "Business kommt zuerst, Technik dient. Kein Dev-Shop, kein KI-Lab." },
    { title: "Nicht unverbindlich", body: "Klare Aussagen, keine Konjunktive." },
    { title: "Nicht reine Umsetzung", body: "Wir verbinden Strategie und Umsetzung." },
    { title: "Nicht laut", body: "Lautstärke kompensiert fehlende Substanz." },
  ];

  return (
    <BbSection id="voice" num="03" title="Voice & Tone"
      desc='„We are matter-of-fact, but know how to express our emotions. Calm and wise, yet fierce and brave. We go deep — but we are crystal clear."'>

      <div style={{ background: "#EDE3F5", borderRadius: 16, padding: "20px 28px", marginBottom: 40, font: "var(--text-small)", color: "#4A2D6B", lineHeight: 1.6 }}>
        <strong>Verbindlich für jede Textarbeit:</strong> der Voice & Style Guide v1.0 —{" "}
        <a href="../guidelines/08-voice.md" style={{ color: "#6B4A94", textDecoration: "underline", textUnderlineOffset: 3 }}>guidelines/08-voice.md</a>.
        Er trägt Tone-Level (Standard / Empathisch / Visionär), Wortlisten, verbotene Phrasen und die Selbst-Checks.
        Diese Sektion zeigt nur die Polaritäten und Dimensionen.
      </div>

      {/* Block 1 — Polaritäten */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Vier Polaritäten</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 28px", maxWidth: 620, lineHeight: 1.6 }}>
        Bridgemaker steht nicht an einem Ende eines Spektrums. Wir leben in Spannungen. Jede Polarität hat zwei Pole, die wir gleichzeitig halten.
      </p>
      <div className="card-clean" style={{ background: "#fff", borderRadius: 20, padding: 40, marginBottom: 56, display: "grid", gap: 18 }}>
        {polarities.map(([a, b]) => (
          <div key={a} style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: 24,
          }}>
            <div style={{ font: "600 22px/1.2 Inter, sans-serif", letterSpacing: "-0.4px", color: "#1C1C1E", textAlign: "right" }}>{a}</div>
            <div aria-hidden="true" style={{ width: 56, height: 1, background: "#C5C0B8" }} />
            <div style={{ font: "600 22px/1.2 Inter, sans-serif", letterSpacing: "-0.4px", color: "#1C1C1E", textAlign: "left" }}>{b}</div>
          </div>
        ))}
      </div>

      {/* Block 2 — Dimensionen */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 20px" }}>Vier Dimensionen</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 56 }}>
        {dimensions.map(v => (
          <div key={v.title} className="card-clean" style={{ background: "#fff", borderRadius: 16, padding: 28 }}>
            <div style={{ font: "600 17px/1.3 Inter, sans-serif", letterSpacing: "-0.3px", color: "#1C1C1E" }}>{v.title}</div>
            <p style={{ font: "var(--text-small)", color: "#3D3D3A", marginTop: 10, lineHeight: 1.6 }}>{v.body}</p>
          </div>
        ))}
      </div>

      {/* Block 3 — Was wir nicht sind */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Was wir nicht sind</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 620, lineHeight: 1.6 }}>
        Sechs Sätze, die unsere Stimme durch Ausschluss schärfen.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 28px", marginBottom: 56 }}>
        {notWeAre.map(n => (
          <div key={n.title} style={{ paddingTop: 14, borderTop: "1px solid #C5C0B8" }}>
            <div style={{ font: "600 15px/1.3 Inter, sans-serif", letterSpacing: "-0.2px", color: "#1C1C1E" }}>{n.title}</div>
            <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "6px 0 0", lineHeight: 1.55 }}>{n.body}</p>
          </div>
        ))}
      </div>

      {/* Block 4 — Do / Don't */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#E8E5DF", borderRadius: 16, padding: 32 }}>
          <span className="bm-badge bm-badge-teal">Do</span>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "16px 0 0", paddingLeft: 20, lineHeight: 1.9 }}>
            <li>„Wir bauen Geschäftsmodelle, die im Markt bestehen."</li>
            <li>„Vom ersten Workshop bis zum Tag, an dem die Zahlen stimmen."</li>
            <li>„Faster than traditional consulting."</li>
            <li>„Innovation ist unser Geschäft."</li>
          </ul>
        </div>
        <div style={{ background: "#F5E0E8", borderRadius: 16, padding: 32 }}>
          <span className="bm-badge bm-badge-berry">Don't</span>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "16px 0 0", paddingLeft: 20, lineHeight: 1.9 }}>
            <li>„Synergies leveragen"</li>
            <li>„Disruptive Innovation unlocken"</li>
            <li>„AI-powered Transformation"</li>
            <li>
              „MVP in 8 Wochen"
              <span style={{ color: "#918F87", font: "400 12px/1.4 Inter, sans-serif", marginLeft: 6 }}>(erfundene Zeitangaben)</span>
            </li>
            <li>
              „Eine innovative Lösung für die Zukunft"
              <span style={{ color: "#918F87", font: "400 12px/1.4 Inter, sans-serif", marginLeft: 6 }}>(Schmuck-Adjektiv ohne Substanz)</span>
            </li>
          </ul>
        </div>
      </div>
    </BbSection>
  );
}

function BbLayoutSection() {
  const scale = [["1",4],["2",8],["3",12],["4",16],["5",20],["6",24],["8",32],["10",40],["12",48],["16",64],["20",80],["24",96],["30",120]];
  return (
    <BbSection id="layout" num="07" title="Layout & Motion"
      desc="8px-Raster (4px als halbe Stufe) — verbindlich. Container 1200px, Padding 16/32px. Sektionen py-24 (96px). Headlines max-w-xl, Leads max-w-2xl. Höchstens EIN Motion-Moment pro Sektion.">
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", margin: "0 0 20px" }}>Spacing — 8px-Raster</h3>
      <div style={{ display: "grid", gap: 8, marginBottom: 48 }}>
        {scale.map(([k, v]) => (
          <div key={k} style={{ display: "grid", gridTemplateColumns: "80px 60px 1fr", alignItems: "center", gap: 16 }}>
            <code style={{ font: "400 12px/1 'JetBrains Mono', Menlo, monospace", color: "#6B4A94" }}>--space-{k}</code>
            <span style={{ font: "400 12px/1 'JetBrains Mono', Menlo, monospace", color: "#6B6B65" }}>{v}px</span>
            <div style={{ height: 12, background: "#6B4A94", borderRadius: 2, width: v, maxWidth: "100%" }} />
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
        <div className="card-clean" style={{ background: "#fff", borderRadius: 16, padding: 28 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87" }}>Container & Maße</div>
          <ul style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Container max <strong>1200px</strong> · Padding 16px mobil / 32px ab md</li>
            <li>Sektionen <code>py-24</code> (96px) · Grid-Gutter 24px</li>
            <li>Headlines <code>max-w-xl</code> · Leads <code>max-w-2xl</code> — nie volle Breite</li>
            <li>Negativraum ist ein Marken-Asset — im Zweifel: mehr</li>
          </ul>
        </div>
        <div className="card-clean" style={{ background: "#fff", borderRadius: 16, padding: 28 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87" }}>Hover-Konventionen</div>
          <ul style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Karten <strong>liften</strong>: −4px + shadow-md (200ms)</li>
            <li>Buttons wechseln die Füllung in der Familie — nie nach Schwarz</li>
            <li>Pfeile nudgen (translate-x 2px) · Thumbs skalieren 1.02</li>
            <li>Unterstreichung nur bei reinen Textlinks</li>
          </ul>
        </div>
      </div>

      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", margin: "0 0 20px" }}>Motion-Tokens</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { name: "--ease-out", t: "cubic-bezier(0.22, 1, 0.36, 1)", use: "Eintritte" },
          { name: "ease-in-out (Keyword)", t: "Swaps & Ambient-Loops", use: "z. B. Kasane-Drift" },
          { name: "--ease-spring", t: "cubic-bezier(0.34, 1.56, 0.64, 1)", use: "Nur verspielte Mikro-Interaktionen" },
        ].map(e => (
          <div key={e.name} className="card-clean" style={{ background: "#fff", borderRadius: 16, padding: 24 }}>
            <div style={{ font: "500 14px/1 Inter, sans-serif" }}>{e.name}</div>
            <code style={{ font: "400 11px/1.4 'JetBrains Mono', Menlo, monospace", color: "#6B4A94", display: "block", marginTop: 8, wordBreak: "break-all" }}>{e.t}</code>
            <p style={{ font: "var(--text-caption)", color: "#6B6B65", marginTop: 10 }}>{e.use}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <span className="bm-badge bm-badge-purple">--duration-fast 150ms</span>
        <span className="bm-badge bm-badge-purple">--duration-base 240ms</span>
        <span className="bm-badge bm-badge-purple">--duration-slow 400ms</span>
        <span className="bm-badge bm-badge-purple">kasane-drift 14s · bold 9s</span>
      </div>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", marginTop: 24, maxWidth: 620, lineHeight: 1.6 }}>
        <strong>prefers-reduced-motion ist Pflicht</strong> — jede Animation fällt auf einen ruhigen statischen Zustand
        zurück. Kein Scroll-Jacking. Scroll-Reveals laufen DOM-getrieben ([data-armed]-Muster, siehe guidelines/05).
      </p>
    </BbSection>
  );
}

function BbTokensSection() {
  const lines = [
    { k: "/* Typografie — nur type-*-Klassen */", c: "#6B6B65" },
    ["--font-sans", '"Inter", sans-serif'],
    ["--font-mono", '"JetBrains Mono", monospace'],
    { sp: 12 },
    [".type-display", "clamp(40px, 5.5vw, 64px) · 600 · -0.03em"],
    [".type-h1", "clamp(32px, 4.2vw, 48px) · 600"],
    [".type-h2", "clamp(26px, 3vw, 32px) · 600"],
    [".type-body", "16px · 400 · 1.60"],
    { sp: 18 },
    { k: "/* Farben — Familien */", c: "#6B6B65" },
    ["--charcoal", "#1C1C1E"],
    ["--off-white", "#F5F1EB"],
    ["--bm-purple", "#6B4A94"],
    ["--bm-berry", "#B84A6F"],
    ["--bm-teal", "#3A9E97"],
    ["--bm-lavender-dark", "#AF94D2 (on-dark)"],
    { sp: 18 },
    { k: "/* Karten & Gradients */", c: "#6B6B65" },
    [".card-clean / .card-elevated", "Inset-Haarlinie + nahe Elevation"],
    [".card-glass / .hero-card-glass", "Frost über Gradient"],
    [".bg-kasane-* / .bg-hebel-* / …", "28 Katalog-Flächen"],
  ];
  return (
    <BbSection id="tokens" num="15" title="Design Tokens"
      desc="tokens.css + tokens.json v2.0 — Quelle: globals.css der Website. In jedem Projekt als Erstes laden; Werte nie inline neu definieren.">
      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        <a href="../tokens/tokens.css" className="bm-btn bm-btn-primary" style={{ textDecoration: "none" }}>tokens.css</a>
        <a href="../tokens/tokens.json" className="bm-btn bm-btn-secondary" style={{ textDecoration: "none" }}>tokens.json</a>
        <a href="../guidelines/README.md" className="bm-btn bm-btn-ghost" style={{ textDecoration: "none" }}>Guidelines (Kanon) →</a>
      </div>
      <div style={{
        background: "#1C1C1E", borderRadius: 16, padding: "32px 36px",
        font: "400 12.5px/2 'JetBrains Mono', Menlo, monospace",
        color: "#A8A69E", overflow: "auto",
      }}>
        {lines.map((ln, i) => {
          if (ln.sp) return <div key={i} style={{ height: ln.sp }} />;
          if (ln.k) return <div key={i} style={{ color: ln.c }}>{ln.k}</div>;
          return (<div key={i}><span style={{ color: "#AF94D2" }}>{ln[0]}</span>: {ln[1]};</div>);
        })}
      </div>
    </BbSection>
  );
}

function BbClaudeSection() {
  return (
    <BbSection id="claude" num="16" title="Claude Instructions"
      desc="Die CLAUDE.md (v2) macht dieses Brandbook maschinenlesbar — das Destillat aus den Guidelines. Claude lädt sie bei jedem Projekt.">
      <div style={{ background: "#1C1C1E", color: "#F5F1EB", borderRadius: 20, padding: 48 }}>
        <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#AF94D2", marginBottom: 16 }}>Hard Rules (v2)</div>
        <ul style={{ margin: 0, paddingLeft: 20, font: "400 15px/1.8 Inter, sans-serif", color: "#F5F1EB" }}>
          <li><code style={{ color: "#AF94D2" }}>tokens/tokens.css</code> zuerst laden. Farben und Größen nie hardcoden.</li>
          <li>Grundton <code style={{ color: "#AF94D2" }}>--off-white</code>; reines Weiß ist Sektionsfläche im Flächenrhythmus.</li>
          <li>Header-Logo: <strong>Wortmarke, 20px im 64px-Header</strong>. Das Monogramm nie im Header.</li>
          <li>Buttons: nur Pill. Hover = Füllungswechsel in der Familie — nie nach Schwarz.</li>
          <li>Karten sitzen: Inset-Haarlinie + nahe Elevation. Verlinkte Karten liften. Keine farbigen Akzent-Kanten.</li>
          <li>Nur <code style={{ color: "#AF94D2" }}>type-*</code>-Klassen — nie ad-hoc-Typografie.</li>
          <li>Glas nur über Gradient/Bild; Glas und Inhalte darunter ohne filter/blend-mode.</li>
          <li>Kasane: ein Hero-Kasane pro Seite; Gradient-Felder im Wechsel mit ruhigen Flächen, nie hinter Fließtext.</li>
          <li>Produkt-/App-UIs: MD3 mit explizitem Bridgemaker-Mapping (§ 14) — nie seed-generieren.</li>
          <li>Keine SVG-Illustrationen erfinden — gestreifte Platzhalter. KI-Bilder nur mit CD-Freigabe.</li>
          <li>Voice: matter-of-fact + emotional, calm + fierce, deep + crystal clear. Kein Jargon, kein KI-Geschwätz.</li>
          <li>Wenn etwas unklar ist — <strong>fragen</strong>, nicht improvisieren.</li>
        </ul>
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <a href="../CLAUDE.md" className="bm-btn" style={{ textDecoration: "none", background: "#F5F1EB", color: "#1C1C1E" }}>CLAUDE.md öffnen</a>
          <a href="../guidelines/README.md" className="bm-btn bm-btn-secondary" style={{ textDecoration: "none", color: "#AF94D2", boxShadow: "inset 0 0 0 1.5px #AF94D2" }}>Guidelines (Kanon) →</a>
        </div>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbStorySection, BbVoiceSection, BbLayoutSection, BbTokensSection, BbClaudeSection });
