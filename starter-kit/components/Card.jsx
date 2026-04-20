/* global React */
// Bridgemaker Starter Kit — Cards, Badges

const _bmCardSurfaces = {
  white:   { background: "#FFFFFF", color: "#1C1C1E", border: "1px solid #E8E5DF" },
  stone:   { background: "#E8E5DF", color: "#1C1C1E" },
  mauve:   { background: "#E3E0E8", color: "#1C1C1E" },
  sage:    { background: "#DDE4E0", color: "#1C1C1E" },
  sand:    { background: "#E5E0D8", color: "#1C1C1E" },
  dark:    { background: "#1C1C1E", color: "#F5F1EB" },
};

function BmCard({ surface = "white", style, children, ...rest }) {
  return (
    <div {...rest} style={{
      ..._bmCardSurfaces[surface],
      borderRadius: 20, padding: 32,
      ...style,
    }}>{children}</div>
  );
}

const _bmBadgeTints = {
  neutral: { background: "#E8E5DF", color: "#1C1C1E" },
  purple:  { background: "#EDE3F5", color: "#6B4A94" },
  berry:   { background: "#F5E0E8", color: "#8A3050" },
  teal:    { background: "#E0F2F0", color: "#1D6B66" },
  sage:    { background: "#E2E8DC", color: "#4A5A3C" },
};

function BmBadge({ tint = "neutral", style, children, ...rest }) {
  return (
    <span {...rest} style={{
      display: "inline-flex", alignItems: "center",
      height: 24, padding: "0 10px", borderRadius: 999,
      font: "500 12px/1.4 Inter, sans-serif",
      ..._bmBadgeTints[tint], ...style,
    }}>{children}</span>
  );
}

function BmEyebrow({ children, color = "#918F87", style }) {
  return (
    <div style={{
      font: "500 12px/1.4 Inter, sans-serif",
      textTransform: "uppercase", letterSpacing: "0.08em",
      color, ...style,
    }}>{children}</div>
  );
}

Object.assign(window, { BmCard, BmBadge, BmEyebrow });
