# 05 — Motion

## 5.1 Prinzipien

- **Höchstens EIN Motion-Moment pro Sektion.** Motion ist rationiert wie
  Farbe — ein atmosphärischer Drift, ein Reveal oder eine
  Hover-Choreographie. Nie mehrere konkurrierende Animationen gleichzeitig
  im Blick.
- **`prefers-reduced-motion` ist Pflicht.** Jede Animation und jeder
  Reveal muss auf einen ruhigen statischen Zustand zurückfallen.
- **Scroll nie kapern.** Kein Scroll-Jacking, keine
  Horizontal-auf-Vertikal-Tricks.

## 5.2 Hover-Konventionen (Stand Website)

| Element | Hover-Verhalten |
|---|---|
| Verlinkte Karten | **Lift:** `-translate-y-1` + `shadow-md` (200ms) |
| Buttons | **Füllungswechsel innerhalb der Markenfamilie:** Charcoal-Pill → `deep-plum`; helle/Tint-Pill → `soft-purple`. Nie nach Schwarz. |
| Featured-CTA (Verlaufs-Pill) | Schatten wächst (`transition-shadow`) |
| Pfeile in Links/CTAs | Nudge: `translate-x-0.5` (150ms) |
| Media-Kacheln | Sanftes `scale(1.02)` bzw. Play-Button `scale(1.05)` |
| Textlinks / Nav | Farbwechsel `--mid` → `--charcoal` (150ms), Unterstreichung nur bei reinen Textlinks |

*(Präzisiert die v1-Regel „lift, never darken": Karten liften; Buttons
wechseln die Füllung in einen benachbarten Familienton — der Wechsel nach
Schwarz oder ein bloßes Abdunkeln bleiben verboten.)*

## 5.3 Dauern & Easings (Tokens)

| Token | Wert | Einsatz |
|---|---|---|
| `--duration-fast` | 150ms | Mikro-Interaktionen (Hover, Toggles) |
| `--duration-base` | 240ms | Standard-UI-Übergänge |
| `--duration-slow` | 400ms | Übergänge auf Seitenebene |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Eintritte |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Nur verspielte Mikro-Interaktionen |

`ease-in-out` für Swaps und loopende Ambient-Motion.

## 5.4 Kasane-Drift — die Ambient-Signatur

Kasane-Gradient-Flächen dürfen langsam driften. Zwei kalibrierte
Varianten (ersetzt das generische „18–24s loops" aus v1):

```css
/* Standard — atmosphärisch, kaum bewusst. Hero-/Moment-Sektionen. */
.kasane-drift { animation: kasane-drift 14s ease-in-out infinite; will-change: transform; }
@keyframes kasane-drift {
  0%   { transform: translate(0%,    0%)    scale(1.00); }
  25%  { transform: translate(4.5%,  3.0%)  scale(1.10); }
  50%  { transform: translate(1.5%,  5.5%)  scale(1.14); }
  75%  { transform: translate(-3.0%, 2.5%)  scale(1.10); }
  100% { transform: translate(0%,    0%)    scale(1.00); }
}

/* Bold — sichtbar lebendig. Für Karten/Momente, wo Drift erlebbar sein
   soll. Translate + Scale + Rotate: Gradient-Spots wandern sichtbar. */
.kasane-drift-bold { animation: kasane-drift-bold 9s ease-in-out infinite; will-change: transform; }
@keyframes kasane-drift-bold {
  0%   { transform: translate(0%,    0%)    scale(1.00) rotate(0deg); }
  25%  { transform: translate(9.0%,  6.0%)  scale(1.20) rotate(10deg); }
  50%  { transform: translate(-5.0%, 10.0%) scale(1.28) rotate(18deg); }
  75%  { transform: translate(-8.0%, 3.0%)  scale(1.20) rotate(8deg); }
  100% { transform: translate(0%,    0%)    scale(1.00) rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .kasane-drift, .kasane-drift-bold { animation: none; }
}
```

Das Eltern-Element der driftenden Ebene braucht `overflow: hidden` (die
Ebene skaliert über ihre Box hinaus).

## 5.5 Scroll-Reveals — das [data-armed]-Muster

Scroll-Reveals sind DOM-getrieben, nicht scroll-gekapert: JS setzt
`[data-armed]` auf den Sektions-Root (versteckt den Vor-Zustand) und
togglet pro Element eine `-in`-Klasse beim Eintritt in den Viewport. Ein
`[data-arming]`-Attribut unterdrückt Transitions beim Scharfschalten,
damit nichts aufblitzt. Reveals nutzen `--ease-out`, 500–700ms, kleine
Translate-Distanzen (≤ 1.5rem) — und immer den Reduced-Motion-Fallback.

Eine Reveal-Choreographie pro Sektion — siehe 5.1.
