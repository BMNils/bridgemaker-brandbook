/* global React */
// Brandbook — Hero, Nav, Section wrapper, Footer

const { useState, useEffect } = React;

function BbNav({ sections, active, onJump }) {
  const [open, setOpen] = useState(false);
  const activeLabel = sections.find(s => s.id === active)?.label ?? "Sections";

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (!e.target.closest?.("[data-bb-nav]")) setOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(245,241,235,0.72)", backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,0,0,0.04)",
      padding: "0 var(--space-16, 64px)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="../assets/logos/wordmark-black.svg" alt="Bridgemaker" style={{ height: 16, display: "block" }} />
        </div>

        <div data-bb-nav style={{ position: "relative" }}>
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(o => !o); }}
            aria-haspopup="menu"
            aria-expanded={open}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "transparent", color: "#1C1C1E",
              border: "1.5px solid #1C1C1E", borderRadius: 999,
              padding: "0 16px", height: 36,
              font: "500 13px/1 Inter, sans-serif",
              cursor: "pointer",
            }}
          >
            <span>{activeLabel}</span>
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "block" }}>
              <path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {open && (
            <div role="menu" style={{
              position: "absolute", top: "calc(100% + 8px)", right: 0,
              background: "#fff",
              borderRadius: 16, padding: 8,
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              minWidth: 220, maxHeight: "70vh", overflowY: "auto",
            }}>
              {sections.map(n => (
                <button
                  key={n.id}
                  role="menuitem"
                  onClick={() => { onJump(n.id); setOpen(false); }}
                  style={{
                    display: "block", width: "100%", textAlign: "left",
                    background: active === n.id ? "#F5F1EB" : "transparent",
                    color: active === n.id ? "#1C1C1E" : "#3D3D3A",
                    border: "none", borderRadius: 10,
                    padding: "10px 14px",
                    font: active === n.id ? "600 13px/1 Inter, sans-serif" : "500 13px/1 Inter, sans-serif",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { if (active !== n.id) e.currentTarget.style.background = "#F5F1EB"; }}
                  onMouseLeave={(e) => { if (active !== n.id) e.currentTarget.style.background = "transparent"; }}
                >
                  {n.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function BbHero() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 48px 72px" }}>
      <div style={{ font: "500 12px/1.4 Inter, sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", color: "#918F87", marginBottom: 32 }}>
        Bridgemaker · Brand & Style · v1.0 — 2026
      </div>
      <h1 style={{
        font: "600 88px/1.05 Inter, sans-serif", letterSpacing: "-2.8px",
        color: "#1C1C1E", margin: 0, maxWidth: 900,
      }}>We build ventures<br/>that matter.</h1>
      <p style={{ font: "400 19px/1.55 Inter, sans-serif", color: "#3D3D3A", marginTop: 32, maxWidth: 620 }}>
        Das vollständige Brandbook für Bridgemaker: Logo, Typografie, Farbe, Komponenten, Bildsprache, Slide-Templates, Landingpage-Patterns — und eine <code>CLAUDE.md</code>, die Claude bei jedem Projekt als Grundlage lädt.
      </p>
      <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
        <a href="../CLAUDE.md" className="bm-btn bm-btn-primary" style={{ textDecoration: "none" }}>CLAUDE.md öffnen</a>
        <a href="../tokens/tokens.css" className="bm-btn bm-btn-secondary" style={{ textDecoration: "none" }}>tokens.css</a>
        <a href="../starter-kit/index.html" className="bm-btn bm-btn-ghost" style={{ textDecoration: "none" }}>Starter Kit →</a>
      </div>
    </section>
  );
}

function BbSection({ title, id, children, desc, num }) {
  return (
    <section id={id} style={{
      scrollMarginTop: 80,
      paddingTop: 120,
      paddingBottom: 120,
      borderTop: "1px solid #1C1C1E",
      position: "relative",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 280px) 1fr",
        gap: 48,
        marginBottom: 72,
        alignItems: "start",
      }}>
        <div style={{ position: "sticky", top: 84 }}>
          <div style={{ font: "500 11px/1 'JetBrains Mono', Menlo, monospace", color: "#918F87", marginBottom: 16, letterSpacing: "0.05em" }}>
            {num ? `§ ${num}` : ""}
          </div>
          <h2 style={{
            font: "600 44px/1.05 Inter, sans-serif", letterSpacing: "-1.2px",
            color: "#1C1C1E", margin: 0,
          }}>{title}</h2>
        </div>
        <div>
          {desc && <p style={{ font: "400 17px/1.55 Inter, sans-serif", color: "#3D3D3A", margin: "8px 0 0", maxWidth: 620 }}>{desc}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

function BbSwatch({ name, hex, usage, token, light }) {
  const [copied, setCopied] = useState(false);
  const isLight = light !== undefined ? light : ["#E","#F","#A","#D","#C","#B","#9"].some(p => hex.startsWith(p));
  return (
    <div onClick={() => { navigator.clipboard?.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
      style={{ cursor: "pointer", minWidth: 140, flex: "1 1 140px" }}>
      <div style={{
        background: hex, borderRadius: 12, height: 96,
        display: "flex", alignItems: "flex-end", padding: 12,
        border: "none",
      }}>
        <span style={{ font: "400 11px/1 'JetBrains Mono', Menlo, monospace", color: isLight ? "#1C1C1E" : "#fff", opacity: 0.8 }}>
          {copied ? "Copied!" : hex}
        </span>
      </div>
      <div style={{ marginTop: 8 }}>
        <div style={{ font: "500 13px/1.3 Inter, sans-serif", color: "#1C1C1E" }}>{name}</div>
        {token && <div style={{ font: "400 11px/1.3 'JetBrains Mono', Menlo, monospace", color: "#918F87", marginTop: 2 }}>{token}</div>}
        {usage && <div style={{ font: "400 11px/1.3 Inter, sans-serif", color: "#6B6B65", marginTop: 2 }}>{usage}</div>}
      </div>
    </div>
  );
}

Object.assign(window, { BbNav, BbHero, BbSection, BbSwatch });
