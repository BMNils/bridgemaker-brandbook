/* global React */
// Bridgemaker Starter Kit — Buttons
const { forwardRef } = React;

const _bmBtnBase = {
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
  borderRadius: 999, border: "none", fontFamily: "Inter, sans-serif",
  fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap",
  transition: "background 150ms cubic-bezier(0.22,1,0.36,1), color 150ms, transform 150ms",
};
const _bmSize = {
  sm: { height: 36, padding: "0 20px", fontSize: 13 },
  md: { height: 44, padding: "0 28px", fontSize: 15 },
  lg: { height: 52, padding: "0 36px", fontSize: 16 },
};

const BmButton = forwardRef(function BmButton(
  { variant = "primary", size = "md", onDark = false, style, children, ...rest }, ref
) {
  let variantStyle = {};
  if (variant === "primary") {
    variantStyle = onDark
      ? { background: "#F5F1EB", color: "#1C1C1E" }
      : { background: "#1C1C1E", color: "#F5F1EB" };
  } else if (variant === "secondary") {
    variantStyle = onDark
      ? { background: "transparent", color: "#AF94D2", boxShadow: "inset 0 0 0 1.5px #AF94D2" }
      : { background: "transparent", color: "#6B4A94", boxShadow: "inset 0 0 0 1.5px #6B4A94" };
  } else if (variant === "ghost") {
    variantStyle = { background: "transparent", color: onDark ? "#F5F1EB" : "#1C1C1E" };
  }
  return (
    <button ref={ref} {...rest}
      style={{ ..._bmBtnBase, ..._bmSize[size], ...variantStyle, ...style }}>
      {children}
    </button>
  );
});

const BmLink = ({ onDark = false, style, children, ...rest }) => (
  <a {...rest} style={{
    color: onDark ? "#AF94D2" : "#6B4A94", fontWeight: 500,
    textDecoration: "none", cursor: "pointer", ...style,
  }}>{children}</a>
);

Object.assign(window, { BmButton, BmLink });
