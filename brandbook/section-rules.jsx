/* global React */
// Brandbook — Sections: Story (Purpose/Mission/Themes/Principles), Voice, Spacing, Tokens, Claude

function BbStorySection() {
  const principles = [
    { t: "Wirkung vor Aufwand", d: "Wir rechnen in Ergebnissen. Stunden, Slides und Meetings sind keine Währung für Erfolg." },
    { t: "Product ist Business", d: "Eine gute Idee ohne Produkt bleibt Wunschdenken. Business, Produkt und Technologie gehören an einen Tisch." },
    { t: "Mensch und Maschine", d: "Was sich wiederholt, wird automatisiert — damit Menschen Zeit für das haben, was nur sie können: Urteilen, Beziehungen, Entscheidungen." },
    { t: "Build–Measure–Learn", d: "Bauen und Messen schlägt Vermutungen. Unfertig ist akzeptiert. Ungetestet nicht." },
    { t: "Klarheit", d: "Kein Jargon, keine Fassade, kein KI-Geschwätz. Unklare Sprache zeigt unklares Denken." },
    { t: "Dein Venture", d: "Handle wie ein Eigentümer. Entscheiden, umsetzen, Verantwortung für das Ergebnis übernehmen." },
  ];
  return (
    <BbSection id="story" num="02" title="Purpose · Mission · Principles"
      desc='Die Bridgemaker-DNA in Worten. Das Logo ist der „Bindestrich" — die direkteste Brücke zwischen zwei Welten.'>

      {/* Purpose + Mission */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 56 }}>
        <div style={{ background: "#1C1C1E", color: "#F5F1EB", borderRadius: 20, padding: 40 }}>
          <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#AF94D2" }}>Purpose</div>
          <div style={{ font: "600 32px/1.2 Inter, sans-serif", letterSpacing: "-0.8px", marginTop: 20 }}>
            We are driven by the desire to make our German and European economies future-proof.
          </div>
        </div>
        <div style={{ background: "#E3E0E8", borderRadius: 20, padding: 40 }}>
          <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B4A94" }}>Mission</div>
          <div style={{ font: "600 32px/1.2 Inter, sans-serif", letterSpacing: "-0.8px", marginTop: 20, color: "#1C1C1E" }}>
            We build commercially and socially valuable ventures together with corporates.
          </div>
        </div>
      </div>

      {/* Principles */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>B—M Principles</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 24px", maxWidth: 560 }}>
        Wie wir arbeiten — die operativen Leitplanken hinter Purpose und Mission.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 56 }}>
        {principles.map((p, i) => (
          <div key={p.t} style={{ background: "#fff", borderRadius: 16, padding: 28, display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ font: "600 28px/1 Inter, sans-serif", letterSpacing: "-0.8px", color: "#C4B1DC", minWidth: 36 }}>0{i + 1}</div>
            <div>
              <div style={{ font: "600 17px/1.3 Inter, sans-serif", letterSpacing: "-0.3px", color: "#1C1C1E" }}>{p.t}</div>
              <p style={{ font: "var(--text-small)", color: "#3D3D3A", margin: "8px 0 0", lineHeight: 1.6 }}>{p.d}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bindestrich narrative */}
      <div style={{ background: "#F5F1EB", borderRadius: 20, padding: 48 }}>
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
    { title: "Nicht techie", body: "Business kommt zuerst, Technik dient. Wir sind keine Dev-Shop, kein KI-Lab." },
    { title: "Nicht unverbindlich", body: "Klare Aussagen, keine Konjunktive." },
    { title: "Nicht reine Umsetzung", body: "Wir verbinden Strategie und Umsetzung." },
    { title: "Nicht laut", body: "Lautstärke kompensiert fehlende Substanz." },
  ];

  return (
    <BbSection id="voice" num="11" title="Voice & Tone"
      desc='„We are matter-of-fact, but know how to express our emotions. Calm and wise, yet fierce and brave. We go deep — but we are crystal clear."'>

      {/* Block 1 — Polaritäten */}
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", color: "#1C1C1E", margin: "0 0 8px" }}>Vier Polaritäten</h3>
      <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "0 0 28px", maxWidth: 620, lineHeight: 1.6 }}>
        Bridgemaker steht nicht an einem Ende eines Spektrums. Wir leben in Spannungen. Jede Polarität hat zwei Pole, die wir gleichzeitig halten.
      </p>
      <div style={{ background: "#fff", borderRadius: 20, padding: 40, marginBottom: 56, display: "grid", gap: 18 }}>
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
          <div key={v.title} style={{ background: "#fff", borderRadius: 16, padding: 28 }}>
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
            <li>„Wir bauen Ventures, die im Markt bestehen."</li>
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

function BbSpacingSection() {
  const scale = [["1",4],["2",8],["3",12],["4",16],["5",20],["6",24],["8",32],["10",40],["12",48],["16",64],["20",80],["24",96]];
  return (
    <BbSection id="spacing" num="12" title="Spacing & Motion" desc="4pt-Scale. Containers 1200px max. Motion kurz und präzise.">
      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", margin: "0 0 20px" }}>Spacing (4pt)</h3>
      <div style={{ display: "grid", gap: 8, marginBottom: 64 }}>
        {scale.map(([k, v]) => (
          <div key={k} style={{ display: "grid", gridTemplateColumns: "80px 60px 1fr", alignItems: "center", gap: 16 }}>
            <code style={{ font: "400 12px/1 'JetBrains Mono', Menlo, monospace", color: "#6B4A94" }}>--space-{k}</code>
            <span style={{ font: "400 12px/1 'JetBrains Mono', Menlo, monospace", color: "#6B6B65" }}>{v}px</span>
            <div style={{ height: 12, background: "#6B4A94", borderRadius: 2, width: v, maxWidth: "100%" }} />
          </div>
        ))}
      </div>

      <h3 style={{ font: "500 17px/1.3 Inter, sans-serif", margin: "0 0 20px" }}>Motion</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { name: "ease-out", t: "cubic-bezier(0.22, 1, 0.36, 1)", use: "Entrances, snappy exits" },
          { name: "ease-in-out", t: "cubic-bezier(0.65, 0, 0.35, 1)", use: "Balanced swaps" },
          { name: "ease-spring", t: "cubic-bezier(0.34, 1.56, 0.64, 1)", use: "Micro-interactions, sparsam" },
        ].map(e => (
          <div key={e.name} style={{ background: "#fff", borderRadius: 16, padding: 24 }}>
            <div style={{ font: "500 14px/1 Inter, sans-serif" }}>{e.name}</div>
            <code style={{ font: "400 11px/1.4 'JetBrains Mono', Menlo, monospace", color: "#6B4A94", display: "block", marginTop: 8, wordBreak: "break-all" }}>{e.t}</code>
            <p style={{ font: "var(--text-caption)", color: "#6B6B65", marginTop: 10 }}>{e.use}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <span className="bm-badge bm-badge-purple">--dur-fast 150ms</span>
        <span className="bm-badge bm-badge-purple">--dur-base 240ms</span>
        <span className="bm-badge bm-badge-purple">--dur-slow 400ms</span>
        <span className="bm-badge bm-badge-purple">--dur-atmos 18s (Kasane)</span>
      </div>
    </BbSection>
  );
}

function BbTokensSection() {
  const lines = [
    { k: "/* Typography */", c: "#6B6B65" },
    ["--font-display", '"Inter Display", "Inter", sans-serif'],
    ["--font-body", '"Inter", sans-serif'],
    { sp: 12 },
    ["--text-display",    "600 64px/1.10 var(--font-display)"],
    ["--text-h1",         "600 48px/1.15 var(--font-display)"],
    ["--text-h2",         "600 32px/1.25 var(--font-display)"],
    ["--text-body",       "400 16px/1.60 var(--font-body)"],
    { sp: 18 },
    { k: "/* Colors */", c: "#6B6B65" },
    ["--charcoal",    "#1C1C1E"],
    ["--off-white",   "#F5F1EB"],
    ["--bm-purple",   "#6B4A94"],
    ["--bm-berry",    "#B84A6F"],
    ["--bm-teal",     "#3A9E97"],
    { sp: 18 },
    { k: "/* Buttons */", c: "#6B6B65" },
    ["--btn-radius", "999px"],
    ["--btn-h",      "44px"],
  ];
  return (
    <BbSection id="tokens" num="13" title="Design Tokens" desc="Single source of truth. In jedem Projekt als erstes laden.">
      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        <a href="../tokens/tokens.css" className="bm-btn bm-btn-primary" style={{ textDecoration: "none" }}>tokens.css</a>
        <a href="../tokens/tokens.json" className="bm-btn bm-btn-secondary" style={{ textDecoration: "none" }}>tokens.json</a>
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
    <BbSection id="claude" num="14" title="Claude Instructions"
      desc="Die CLAUDE.md macht dieses Brandbook maschinenlesbar. Claude lädt sie bei jedem Projekt.">
      <div style={{ background: "#1C1C1E", color: "#F5F1EB", borderRadius: 20, padding: 48 }}>
        <div style={{ font: "500 11px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#AF94D2", marginBottom: 16 }}>Hard rules</div>
        <ul style={{ margin: 0, paddingLeft: 20, font: "400 15px/1.8 Inter, sans-serif", color: "#F5F1EB" }}>
          <li>Load <code style={{ color: "#AF94D2" }}>tokens/tokens.css</code> first. Never hardcode colors or sizes.</li>
          <li>Default background: <code style={{ color: "#AF94D2" }}>--off-white (#F5F1EB)</code>. Never pure white.</li>
          <li>Header logo: <strong>wordmark, 16px tall</strong>. The B—M monogram never goes in the header.</li>
          <li>Buttons: pill shape only. <code style={{ color: "#AF94D2" }}>border-radius: 999px</code>.</li>
          <li>Hover lifts (<code style={{ color: "#AF94D2" }}>translateY(-1px)</code> + soft shadow) — never darken to black.</li>
          <li>Cards are borderless. No colored accent edges (<code style={{ color: "#AF94D2" }}>border-left</code> callout brackets are banned).</li>
          <li>Kasane gradients only for hero/moment sections. Never as generic backgrounds.</li>
          <li>Never hand-draw SVG illustrations. Use striped placeholders.</li>
          <li>Voice: matter-of-fact + emotional, calm + fierce, deep + crystal clear. No jargon, no AI-Geschwätz.</li>
          <li>When anything is ambiguous — <strong>ask</strong>, don't improvise.</li>
        </ul>
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <a href="../CLAUDE.md" className="bm-btn bm-btn-primary" style={{ textDecoration: "none", background: "#F5F1EB", color: "#1C1C1E" }}>CLAUDE.md öffnen</a>
          <a href="../starter-kit/index.html" className="bm-btn bm-btn-secondary" style={{ textDecoration: "none", color: "#AF94D2", boxShadow: "inset 0 0 0 1.5px #AF94D2" }}>Starter-Kit →</a>
        </div>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbStorySection, BbVoiceSection, BbSpacingSection, BbTokensSection, BbClaudeSection });
