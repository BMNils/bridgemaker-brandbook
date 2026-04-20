/* global React */
// Bridgemaker Starter Kit — Form inputs

function BmField({ label, help, children, style }) {
  return (
    <label style={{ display: "block", ...style }}>
      <span style={{
        display: "block", marginBottom: 6,
        font: "500 14px/1.5 Inter, sans-serif", color: "#1C1C1E",
      }}>{label}</span>
      {children}
      {help && <span style={{
        display: "block", marginTop: 6,
        font: "400 12px/1.4 Inter, sans-serif", color: "#6B6B65",
      }}>{help}</span>}
    </label>
  );
}

const _bmInputStyle = {
  width: "100%", height: 44, padding: "0 16px",
  border: "1px solid #E8E5DF", borderRadius: 12,
  background: "#FFFFFF", color: "#1C1C1E",
  font: "400 16px/1.6 Inter, sans-serif",
  outline: "none",
  transition: "border-color 150ms, box-shadow 150ms",
};

function BmInput({ style, ...rest }) {
  return <input {...rest} style={{ ..._bmInputStyle, ...style }}
    onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 0 3px rgba(107,74,148,0.12)"}
    onBlur={(e) => e.currentTarget.style.boxShadow = "none"} />;
}

function BmTextarea({ style, rows = 5, ...rest }) {
  return <textarea {...rest} rows={rows}
    style={{ ..._bmInputStyle, height: "auto", padding: "12px 16px", resize: "vertical", ...style }}
    onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 0 3px rgba(107,74,148,0.12)"}
    onBlur={(e) => e.currentTarget.style.boxShadow = "none"} />;
}

Object.assign(window, { BmField, BmInput, BmTextarea });
