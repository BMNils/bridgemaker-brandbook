/* global React */
// Brandbook — Sections: Imagery, Slide Templates, Seitenrhythmus

function BbImagerySection() {
  return (
    <BbSection id="imagery" num="12" title="Imagery"
      desc="Drei Prinzipien: Character people · Discovering moments even in the ordinary · Surprising perspectives. Editorial, dokumentarisch, natürliches Licht.">

      {/* Three principles */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
        {[
          { t: "Character people", d: "Echte Menschen mit Haltung — keine Stock-Lächler, keine Models. Substanz vor Oberfläche." },
          { t: "Discovering moments", d: "Das erzählerische Detail im Alltäglichen. Nicht inszeniert, nicht heroisch — aufmerksam." },
          { t: "Surprising perspectives", d: "Ungewöhnliche Winkel, nahe Ausschnitte, off-center Kompositionen. Nie frontal und brav." },
        ].map(p => (
          <div key={p.t} className="card-clean" style={{ background: "#fff", borderRadius: 16, padding: 24 }}>
            <div style={{ font: "600 15px/1.3 Inter, sans-serif", letterSpacing: "-0.2px" }}>{p.t}</div>
            <p style={{ font: "var(--text-caption)", color: "#6B6B65", margin: "8px 0 0", lineHeight: 1.5 }}>{p.d}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
        {[
          { ratio: "4/3", cap: "Character · off-center · bold accent" },
          { ratio: "3/4", cap: "Portrait · surprising angle · warm grade" },
          { ratio: "4/3", cap: "Venture in situ · real context · color moment" },
        ].map((p, i) => (
          <div key={i} className="bg-stripes-diagonal" style={{
            aspectRatio: p.ratio, borderRadius: 20,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#6B6B65", font: "500 12px/1.5 'JetBrains Mono', Menlo, monospace",
            padding: 20, textAlign: "center",
          }}>{p.cap}</div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#E8E5DF", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#4A5A3C" }}>Do</div>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Dokumentarisch, natürliches Licht</li>
            <li>Leicht entsättigt (~−10%), warme Abstimmung</li>
            <li>Radius-XL (20px) · optional grain-photo-Finish</li>
            <li>Gestreifter Platzhalter mit Mono-Caption, wenn das Asset fehlt</li>
            <li>KI-Bilder erlaubt — mit CD-Freigabe. Maßstab: „fühlt es sich an wie Bridgemaker?"</li>
          </ul>
        </div>
        <div style={{ background: "#F5E0E8", borderRadius: 16, padding: 32 }}>
          <div style={{ font: "500 12px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8A3050" }}>Don't</div>
          <ul style={{ font: "var(--text-small)", color: "#1C1C1E", margin: "12px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Keine Stock-Handshakes, niemand zeigt auf Screens</li>
            <li>Kein AI slop — Default-Ästhetik ersetzt kein Konzept</li>
            <li>Keine Flat-Vector-Charaktere, keine erfundenen SVG-Illus</li>
            <li>Keine Emoji als Bildersatz</li>
          </ul>
        </div>
      </div>
    </BbSection>
  );
}

function BbSlidesSection() {
  const slides = [
    { label: "Cover", bg: "kasane-dark", desc: "Dunkles Kasane · Display-Headline · Eyebrow tiny · kein Body" },
    { label: "Section", bg: "surface-mauve", desc: "Surface-Farbe full-bleed · zentrierte H1 · Kapitel-Zähler" },
    { label: "Content", bg: "white", desc: "2/3 Text + 1/3 Visual · oder 3er-Card-Grid" },
    { label: "Quote", bg: "surface-stone", desc: "Kursive H2-Quote · Attribution im Eyebrow-Stil" },
    { label: "Stats", bg: "white", desc: "Große Zahlen (type-stat-Logik) · Akzentfarbe sparsam" },
    { label: "End", bg: "kasane-vibrant", desc: "Claim + Kontakt · dunkles Kasane" },
  ];
  return (
    <BbSection id="slides" num="13" title="Slide Templates" desc="1920×1080. Mindestens 24px Text — keine Ausnahmen. Kasane nur auf Cover und End.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {slides.map(s => {
          const bgMap = {
            "kasane-dark": { background: "linear-gradient(135deg, #1C1C1E, #4A2D6B 40%, #8A3050)", color: "#fff" },
            "kasane-vibrant": { background: "linear-gradient(135deg, #4A2D6B, #6B4A94, #B84A6F, #3A9E97)", color: "#fff" },
            "surface-mauve": { background: "#E3E0E8", color: "#1C1C1E" },
            "surface-stone": { background: "#E8E5DF", color: "#1C1C1E" },
            "white": { background: "#fff", color: "#1C1C1E" },
          };
          return (
            <div key={s.label}>
              <div style={{
                aspectRatio: "16/9", borderRadius: 16, padding: 24,
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
                ...bgMap[s.bg],
              }}>
                <div style={{ font: "500 10px/1 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.6 }}>{s.label}</div>
                <div style={{ font: "600 22px/1.15 Inter, sans-serif", letterSpacing: "-0.5px", marginTop: 8 }}>
                  {s.label === "Cover" ? "Ergebnis. KI-nativ. Umgesetzt." :
                   s.label === "Section" ? "Innovation braucht Umsetzung." :
                   s.label === "Quote" ? '„Bridgemaker baut mit uns."' :
                   s.label === "Stats" ? "40+ · €180M · 12" :
                   s.label === "End" ? "Let's build." :
                   "Drei Phasen. Ein Handwerk."}
                </div>
              </div>
              <p style={{ font: "var(--text-caption)", color: "#6B6B65", marginTop: 10, lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 40 }}>
        <a href="../examples/deck.html" className="bm-btn bm-btn-secondary" style={{ textDecoration: "none" }}>Beispiel-Deck ansehen →</a>
      </div>
    </BbSection>
  );
}

function BbLandingSection() {
  const sections = [
    { n: "01", label: "Fixe Nav", desc: "64px · transparent → blur-solid beim Scrollen · Wortmarke 20px links · type-nav-Links · CTA-Pill rechts" },
    { n: "02", label: "Hero", desc: "Kasane-Fläche · Display-Headline · Lead in --mid · 1–2 CTAs · optional Glas-Kartenstapel" },
    { n: "03", label: "Proof-Band", desc: "Kundenlogos (Marquee) oder Stats auf ruhiger Fläche" },
    { n: "04", label: "Themen-Sektionen", desc: "Karten mit variierenden Surfaces · ein Thema = eine Farbwelt" },
    { n: "05", label: "Cases", desc: "Grid oder Scheiben mit case-glass-Ergebnisleisten" },
    { n: "06", label: "Stimmen", desc: "Satte Verlaufs-Karten (bg-stimme-*) mit Zitaten" },
    { n: "07", label: "Abschluss-CTA", desc: "Dunkle Kasane-Fläche · eine Headline · ein Button" },
    { n: "08", label: "Footer", desc: "Off-White · border-t surface-stone · Wortmarke + 3 Linkspalten mit Eyebrow-Titeln" },
  ];
  return (
    <BbSection id="landing" num="11" title="Seitenrhythmus"
      desc="Der Bridgemaker-Rhythmus (verallgemeinert von der Website). Sektionen wechseln die Fläche — Weiß ↔ Off-White ↔ Surface/Farbband. Jede Sektion folgt der Anatomie: Eyebrow → Headline (max-w-xl) → Lead (max-w-2xl) → Inhalt → optional EIN CTA.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {sections.map(s => (
          <div key={s.n} className="card-clean" style={{
            background: "#fff", borderRadius: 16,
            padding: 24, display: "flex", gap: 20, alignItems: "flex-start",
          }}>
            <div style={{ font: "600 28px/1 Inter, sans-serif", letterSpacing: "-0.8px", color: "#C4B1DC", minWidth: 48 }}>{s.n}</div>
            <div>
              <div style={{ font: "500 16px/1.3 Inter, sans-serif", color: "#1C1C1E", letterSpacing: "-0.3px" }}>{s.label}</div>
              <p style={{ font: "var(--text-small)", color: "#6B6B65", margin: "6px 0 0" }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>
        <a href="../examples/landing-page.html" className="bm-btn bm-btn-secondary" style={{ textDecoration: "none" }}>Beispiel-Landingpage ansehen →</a>
      </div>
    </BbSection>
  );
}

Object.assign(window, { BbImagerySection, BbSlidesSection, BbLandingSection });
