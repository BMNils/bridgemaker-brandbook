/* global React */
// Bridgemaker Starter Kit — Navigation + Placeholder

const { useState } = React;

function BmNav({ items = [], cta, brand = "B—M", onDark = false }) {
  const [active, setActive] = useState(items[0]?.id);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: onDark ? "rgba(28,28,30,0.55)" : "rgba(245,241,235,0.55)",
      backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
      borderBottom: onDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.04)",
      padding: "0 48px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{
          font: "600 15px/1 Inter, sans-serif", letterSpacing: "-0.3px",
          color: onDark ? "#F5F1EB" : "#1C1C1E", cursor: "pointer",
        }}>{brand}</div>
        <nav style={{ display: "flex", gap: 4 }}>
          {items.map(n => (
            <a key={n.id} href={n.href || `#${n.id}`}
              onClick={() => setActive(n.id)}
              style={{
                background: active === n.id
                  ? (onDark ? "#F5F1EB" : "#1C1C1E") : "transparent",
                color: active === n.id
                  ? (onDark ? "#1C1C1E" : "#F5F1EB")
                  : (onDark ? "#A8A69E" : "#6B6B65"),
                borderRadius: 999, padding: "6px 14px",
                font: "500 13px/1 Inter, sans-serif",
                textDecoration: "none", transition: "all 200ms",
              }}>{n.label}</a>
          ))}
        </nav>
        {cta}
      </div>
    </header>
  );
}

function BmPlaceholder({ caption = "Image placeholder", ratio = "16 / 9", style }) {
  return (
    <div style={{
      width: "100%", aspectRatio: ratio,
      borderRadius: 20,
      background: `repeating-linear-gradient(135deg, #E8E5DF 0 12px, #DDD9D2 12px 24px)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "#6B6B65", font: "500 12px/1.4 'JetBrains Mono', Menlo, monospace",
      letterSpacing: "0.02em",
      padding: 16, textAlign: "center",
      ...style,
    }}>{caption}</div>
  );
}

Object.assign(window, { BmNav, BmPlaceholder });
