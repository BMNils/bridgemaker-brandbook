/* global React */
// Brandbook — data tables

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
    { name: "Stone", hex: "#E8E5DF", usage: "Default cards", token: "--surface-stone" },
    { name: "Mauve", hex: "#E3E0E8", usage: "Purple-DNA", token: "--surface-mauve" },
    { name: "Sage", hex: "#DDE4E0", usage: "Tech / Security", token: "--surface-sage" },
    { name: "Sand", hex: "#E5E0D8", usage: "Ventures", token: "--surface-sand" },
    { name: "Dark Surface", hex: "#333330", usage: "Contrast", token: "--surface-dark", light: false },
  ],
};

const bbTypeScale = [
  { name: "Caption", size: 12, weight: 400, tracking: "0", lh: "140%", usage: "Labels, timestamps" },
  { name: "Small", size: 14, weight: 400, tracking: "0", lh: "150%", usage: "Navigation, meta" },
  { name: "Body", size: 16, weight: 400, tracking: "0", lh: "160%", usage: "Fließtext" },
  { name: "H4", size: 20, weight: 500, tracking: "-0.3px", lh: "140%", usage: "Card-Titel" },
  { name: "H3", size: 24, weight: 500, tracking: "-0.5px", lh: "130%", usage: "Section Sub" },
  { name: "H2", size: 32, weight: 600, tracking: "-0.8px", lh: "125%", usage: "Section Headlines" },
  { name: "H1", size: 48, weight: 600, tracking: "-1.2px", lh: "115%", usage: "Page-Titel" },
];

const bbDisplayScale = [
  { name: "Display", size: 64, weight: 600, tracking: "-1.9px", lh: "110%", desc: "Standard Hero. SemiBold — kraftvoll." },
  { name: "Display L", size: 96, weight: 500, tracking: "-2.9px", lh: "105%", desc: "Mutige Statements. Medium — elegant." },
  { name: "Display XL", size: 128, weight: 400, tracking: "-3.8px", lh: "100%", desc: "Maximaler Impact. Regular — monumental." },
];

Object.assign(window, { bbColors, bbTypeScale, bbDisplayScale });
