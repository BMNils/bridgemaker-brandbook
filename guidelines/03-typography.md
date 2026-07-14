# 03 — Typografie

## 3.1 Schriften

- **Inter** für alles — auch Display-Größen (`--font-display` zeigt auf
  Inter; die Website lädt kein separates „Inter Display" —
  *ersetzt die v1-Regel „Inter Display oberhalb 24px"*).
- **JetBrains Mono** für Code, Daten und technische Captions.
- **Print-Ausnahme** *(Nils, 2026-07-14)*: In Print-Publikationen
  (DIN-A4-Layer, `tokens/print-tokens.css`) zeigt `--font-display` auf
  **Inter Display** — die Schrift ist für große Grade gezeichnet und
  gehört dort hin. Laden über das offizielle Inter-CSS
  (`https://rsms.me/inter/inter.css`, Familienname `InterDisplay`)
  oder die lokale Installation („Inter Display"); Fallback Inter.
  Am Bildschirm bleibt es bei Inter.
- Keine anderen Schriftfamilien ohne ausdrückliche Freigabe.

Laden: In Next.js-Projekten via `next/font/google` (so macht es die
Website — self-hosted, kein Layout-Shift). Nur für statische Artefakte
(Decks, Einzel-HTML) der Google-Fonts-Link:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 3.2 Die fluide Skala — nur `type-*`-Klassen

**Regel: Typografie wird AUSSCHLIESSLICH über die definierten
`type-*`-Klassen gesetzt.** Nie ad-hoc `text-sm` / `font-semibold` /
`tracking-*` / `text-[Xpx]` für Text. Fehlt eine Textrolle, wird eine
Klasse im System ergänzt — nicht improvisiert.

Die großen Stufen sind **fluide via `clamp()`** — fixe Pixelgrößen
brechen auf Mobile. Das ist eine Kernlektion aus dem Website-Bau und
ersetzt die fixe px-Skala von v1.

| Klasse | Größe | Gewicht | Zeilenhöhe | Tracking | Wann |
|---|---|---|---|---|---|
| `type-display-xl` | `clamp(64px, 9vw, 128px)` | **400** | 1.00 | −0.03em | Monumentaler Hero. Selten. |
| `type-display-l` | `clamp(52px, 7.5vw, 96px)` | **500** | 1.05 | −0.03em | Große Kampagnen-Statements |
| `type-display` | `clamp(40px, 5.5vw, 64px)` | **600** | 1.10 | −0.03em | Standard-Hero |
| `type-h1` | `clamp(32px, 4.2vw, 48px)` | 600 | 1.15 | −0.025em | Seitentitel |
| `type-h2` | `clamp(26px, 3vw, 32px)` | 600 | 1.25 | −0.025em | Sektions-Headlines |
| `type-stat` | `clamp(28px, 3vw, 36px)` | 500 | 1.10 | −0.025em | Kennzahlen, Counts |
| `type-h3` | 24px | 500 | 1.30 | −0.5px | Zwischenüberschriften |
| `type-h4` | 20px | 500 | 1.40 | −0.3px | Karten-Titel |
| `type-card-title` | 18px | **600** | 1.45 | −0.3px | Kleine Karten-/Box-Headlines (Lead-Größe, Semi-Bold) |
| `type-h5` | 16px | 500 | 1.45 | −0.2px | Kleine Überschriften |
| `type-body-l` | 18px | 400 | 1.55 | — | Lead-Absätze |
| `type-body` | 16px | 400 | 1.60 | — | Fließtext |
| `type-nav` | 15px | 500 | 1.40 | — | Nav-Links & Nav-CTA — zwischen small und body: präsent, aber nicht laut |
| `type-small` | 14px | 400 | 1.50 | — | Meta, sekundäre UI |
| `type-caption` | 12px | 400 | 1.40 | — | Labels, Zeitstempel |
| `type-eyebrow` | 12px | 500 | 1.40 | +0.08em, VERSALIEN | Kicker über Headlines |
| `type-micro` | 10px | 400 | 1.40 | — | Kleinstinformationen |

**Display-Regel:** größer = leichter. Wirkt eleganter und trägt mehr Luft.

## 3.3 Tracking

- Display- und Headline-Größen laufen mit **negativem Tracking**. Bei den
  fluiden Stufen steht das Tracking in **`em`**, damit es mit der Größe
  mitskaliert (−0.03em ≈ −3.8px bei 128px). Fixe Stufen behalten
  px-Tracking.
- Nie positives Tracking auf Headlines — das liest sich wie PowerPoint
  von 2005. Einzige Ausnahme: `type-eyebrow` (+0.08em, Versalien).

## 3.4 Deutsch in Display-Größen

- Umlaute (ä, ö, ü) in Display-Headlines sind **willkommen**, wenn die
  Copy sie ehrlich verlangt — sie geben deutschen Headlines Charakter.
  Kein erzwungenes Englisch, wo Deutsch ehrlicher liest.
- Lange deutsche Komposita in Headlines: das Wort brechen lassen
  (`overflow-wrap: break-word`) statt die Schriftgröße zu schrumpfen.

## 3.5 Referenz-CSS

Die exakten Klassendefinitionen aus `tokens/tokens.css` kopieren — Werte
nie aus dem Gedächtnis regenerieren. Beispiel des Musters:

```css
.type-display {
  font-size: clamp(40px, 5.5vw, 64px);
  font-weight: 600;
  line-height: 1.10;
  letter-spacing: -0.03em;
}
```

Copy-Regeln (Groß-/Kleinschreibung, Zahlen, Interpunktion) stehen in
[`08-voice.md`](08-voice.md).
