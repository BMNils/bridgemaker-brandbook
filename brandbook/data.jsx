/* global React */
// Brandbook — Datentabellen (Quelle: tokens/tokens.css v2 = Website-Stand)

const bbColors = {
  neutrals: [
    { name: "Charcoal", hex: "#1C1C1E", light: false, token: "--charcoal" },
    { name: "Dark", hex: "#3D3D3A", light: false, token: "--dark" },
    { name: "Mid", hex: "#6B6B65", light: false, token: "--mid" },
    { name: "Light", hex: "#918F87", light: true, token: "--light" },
    { name: "Soft", hex: "#A8A69E", light: true, token: "--soft" },
    { name: "Off-White", hex: "#F5F1EB", light: true, token: "--off-white" },
    { name: "White", hex: "#FFFFFF", light: true, token: "--white" },
  ],
  surfaces: [
    { name: "Stone", hex: "#E8E5DF", usage: "Default", token: "--surface-stone" },
    { name: "Mauve", hex: "#E3E0E8", usage: "Purple-DNA", token: "--surface-mauve" },
    { name: "Sage", hex: "#DDE4E0", usage: "Tech / Security", token: "--surface-sage" },
    { name: "Sand", hex: "#E5E0D8", usage: "Ventures", token: "--surface-sand" },
    { name: "Mid-Stone", hex: "#C5C0B8", usage: "Rand-/Trennlinien-Wert", token: "--surface-mid-stone" },
    { name: "Dark Surface", hex: "#333330", usage: "Kontrast", token: "--surface-dark", light: false },
  ],
};

// Fluide + fixe Stufen — Werte 1:1 aus tokens.css (.type-*)
const bbTypeScale = [
  { name: "Micro", cls: "type-micro", size: "10px", weight: 400, tracking: "0", lh: "1.40", usage: "Kleinstinformationen" },
  { name: "Eyebrow", cls: "type-eyebrow", size: "12px", weight: 500, tracking: "+0.08em · VERSALIEN", lh: "1.40", usage: "Kicker über Headlines" },
  { name: "Caption", cls: "type-caption", size: "12px", weight: 400, tracking: "0", lh: "1.40", usage: "Labels, Zeitstempel" },
  { name: "Small", cls: "type-small", size: "14px", weight: 400, tracking: "0", lh: "1.50", usage: "Meta, sekundäre UI" },
  { name: "Nav", cls: "type-nav", size: "15px", weight: 500, tracking: "0", lh: "1.40", usage: "Nav-Links & Nav-CTA" },
  { name: "Body", cls: "type-body", size: "16px", weight: 400, tracking: "0", lh: "1.60", usage: "Fließtext" },
  { name: "Body L", cls: "type-body-l", size: "18px", weight: 400, tracking: "0", lh: "1.55", usage: "Lead-Absätze · max-w-2xl" },
  { name: "H5", cls: "type-h5", size: "16px", weight: 500, tracking: "-0.2px", lh: "1.45", usage: "Kleine Überschriften" },
  { name: "Card Title", cls: "type-card-title", size: "18px", weight: 600, tracking: "-0.3px", lh: "1.45", usage: "Kleine Karten-Headlines" },
  { name: "H4", cls: "type-h4", size: "20px", weight: 500, tracking: "-0.3px", lh: "1.40", usage: "Karten-Titel" },
  { name: "H3", cls: "type-h3", size: "24px", weight: 500, tracking: "-0.5px", lh: "1.30", usage: "Zwischenüberschriften" },
  { name: "Stat", cls: "type-stat", size: "clamp(28px, 3vw, 36px)", weight: 500, tracking: "-0.025em", lh: "1.10", usage: "Kennzahlen", fluid: true },
  { name: "H2", cls: "type-h2", size: "clamp(26px, 3vw, 32px)", weight: 600, tracking: "-0.025em", lh: "1.25", usage: "Sektions-Headlines · max-w-xl", fluid: true },
  { name: "H1", cls: "type-h1", size: "clamp(32px, 4.2vw, 48px)", weight: 600, tracking: "-0.025em", lh: "1.15", usage: "Seitentitel", fluid: true },
];

const bbDisplayScale = [
  { name: "Display", cls: "type-display", size: "clamp(40px, 5.5vw, 64px)", weight: 600, tracking: "-0.03em", lh: "1.10", desc: "Standard-Hero. SemiBold — kraftvoll." },
  { name: "Display L", cls: "type-display-l", size: "clamp(52px, 7.5vw, 96px)", weight: 500, tracking: "-0.03em", lh: "1.05", desc: "Mutige Statements. Medium — elegant." },
  { name: "Display XL", cls: "type-display-xl", size: "clamp(64px, 9vw, 128px)", weight: 400, tracking: "-0.03em", lh: "1.00", desc: "Maximaler Impact. Regular — monumental. Selten." },
];

Object.assign(window, { bbColors, bbTypeScale, bbDisplayScale });
