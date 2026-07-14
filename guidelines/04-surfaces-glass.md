# 04 — Flächen, Karten & Glas

Das Flächensystem hat drei Tiefenebenen, vom Grund zum Vordergrund:

1. **Grund** — `--off-white`-Seitenfläche als Grundton; reines Weiß als
   Sektionsfläche im Wechsel (Haarlinien-Abgrenzung, siehe
   [`02-colors.md`](02-colors.md) §2.3)
2. **Felder** — Surface-Töne, Kasane-Gradients und Farbbänder, die
   Sektionen gruppieren
3. **Karten** — die Box-Familie, die Inhalte trägt: Paper (matt) oder
   Glass (gefrostet)

Jede Box auf einer Bridgemaker-Seite kommt aus dieser Familie. Keine
Einzelanfertigungen erfinden.

## 4.1 Schatten-Philosophie — Karten sitzen, sie fliegen nicht

Karten **sitzen auf der Seite**. Das Signature-Treatment ist eine knackige
Inset-Haarlinie rundum plus *nahe* Elevation — sichtbar, aber nie
„Zentimeter vor der Fläche". Dekorative Wurf-Schatten sind verboten.

*(Ersetzt v1 „cards are borderless, no default shadow". Die Haarlinie ist
als Inset-Ring in die Karten-Rezepte eingebacken — nie ein CSS-`border`.)*

`shadow-pop` ist die eine sanktionierte Ausnahme für Boxen, die sichtbar
herausstehen müssen (z. B. ein Featured-Band) — trotzdem zurückhaltend:

```css
.shadow-pop { box-shadow: 0 18px 44px -18px rgba(28, 28, 30, 0.45); }
```

## 4.2 Die Karten-Familie — wann was

| Klasse | Was es ist | Einsatz |
|---|---|---|
| `card-clean` | Weiße matte Karte, Inset-Haarlinie + nahe Elevation | Content-Karten auf getöntem/off-white Grund |
| `card-elevated` | Getönte matte Karte, gleiches Treatment | Content-Karten auf weißem/hellem Grund; Tint-Füllungen |
| `card-glass` | Frosted Glass über einem Gradient | Daten-/Floating-Karten **auf Gradient- oder atmosphärischen Flächen** |
| `hero-card-glass` (+ `hero-card-veil`) | Echte Milchglasscheibe, starker Frost | Hero-Kartenstapel über Topo-/Verlaufs-Welten |
| `case-glass` | Milchglas-Leiste über Bildern | Ergebnis-Scheiben über Case-Bildern |
| `shadow-pop` | Zurückhaltender Pop-Schatten | Max. eine Featured-Box pro Seite |

**Entscheidungsregel:** Glas lohnt sich nur, wenn es etwas zu frosten
gibt — einen Gradient, ein Bild, geschichteten Inhalt dahinter. Auf
schlichtem Off-White liest Glas sich als schmutziges Weiß → Paper nehmen
(`card-clean` / `card-elevated`). Nie Glas auf Glas ohne Gradient
dazwischen.

Karten-Konventionen (alle Varianten): `radius-xl` (20px), großzügiges
Padding auf dem 8er-Raster, Füllung variieren — nie drei Karten derselben
Surface in einer Reihe. **Farbige Akzent-Kanten sind absolut verboten**
(`border-left: 4px solid …`-Callout-Balken sind gebannt — Betonung über
Surface-Füllung, Badge oder Eyebrow).

## 4.3 Karten-Rezepte (exakt kopieren)

```css
/* Paper — weiße matte Karte. Knackige Haarlinie rundum + nahe Elevation. */
.card-clean {
  box-shadow:
    inset 0 0 0 1px rgba(28, 28, 30, 0.06),
    0 1px 2px rgba(28, 28, 30, 0.03),
    0 10px 24px -18px rgba(28, 28, 30, 0.10);
}

/* Paper — getönte matte Karte. Identisches Treatment auf Tint-Füllungen. */
.card-elevated {
  box-shadow:
    inset 0 0 0 1px rgba(28, 28, 30, 0.06),
    0 1px 2px rgba(28, 28, 30, 0.04),
    0 10px 24px -18px rgba(28, 28, 30, 0.12);
}

/* Glass — gefrostete Karte über Gradients. Bewusst transluzent: der
   Gradient dahinter frostet durch — erst dadurch werden Glasrand, Reflex
   und Korn sichtbar (Weiß-auf-Weiß wäre unsichtbar).
   FROST: am Element zusätzlich Tailwind-Utilities setzen:
   `backdrop-blur-xl backdrop-saturate-150` (siehe Falle in 4.7). */
.card-glass {
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.72),
    rgba(255, 255, 255, 0.46)
  );
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.9),
    inset 0 0 0 1px rgba(255, 255, 255, 0.55),
    0 0 0 1px rgba(28, 28, 30, 0.04),
    0 1px 2px rgba(28, 28, 30, 0.05),
    0 6px 16px -8px rgba(28, 28, 30, 0.12);
}

/* Hero-Glass — echte Milchglasscheibe. Frost via Tailwind-Utilities am
   Element: backdrop-blur-2xl backdrop-saturate-150 backdrop-brightness-105 */
.hero-card-glass {
  box-shadow:
    inset 0 1px 0 0 rgba(255, 255, 255, 0.85),
    inset 0 0 0 1px rgba(255, 255, 255, 0.4),
    0 2px 6px rgba(28, 28, 30, 0.08),
    0 30px 60px -18px rgba(28, 28, 30, 0.18);
}

/* Milchige Scheibe: liegt ÜBER dem gefrosteten Ghost, UNTER dem Inhalt.
   Weißschleier + weicher Lichteinfall oben links + schmaler diagonaler
   Reflex.
   ▲ MILCHIGKEIT: die beiden letzten Weiß-Werte (0.6/0.4) —
     niedriger = glasiger, höher = deckender/matter. */
.hero-card-veil {
  background:
    radial-gradient(120% 60% at 18% -10%, rgba(255, 255, 255, 0.45), transparent 55%),
    linear-gradient(115deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 30%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4));
}

/* Ergebnis-Leiste über Bildern. Frost via backdrop-blur-xl backdrop-saturate-150 */
.case-glass {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.62), rgba(255, 255, 255, 0.78));
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
}
```

## 4.4 Grain — das Filmkorn-Finish

Feines, entsättigtes Filmkorn gehört zum Premium-Karten-Handwerk. Als
absolut positioniertes Overlay-Element (`pointer-events-none`) über
Glas-/Gradient-Flächen legen. Vier Varianten — nach Hintergrund wählen:

| Klasse | Compositing | Einsatz |
|---|---|---|
| `.grain` | `multiply`, Opacity 0.12 | Helle Glas-/Gradient-Flächen (dunkle Körner sichtbar auf Hell) |
| `.grain-screen` | `screen`, Opacity 0.10 | Dunkle/satte Gradient-Flächen (CTA-Karten — multiply wäre unsichtbar) |
| `.grain-photo` | **kein Blend-Mode**, Alpha-Rauschen, Opacity 0.22 | Bilder, die UNTER einer Glasscheibe liegen — hält das Backdrop-Sampling intakt |
| `.grain-photo-screen` | `screen`, Opacity 0.34 | Dunkle/satte Flächen ohne Glas darüber |

```css
.grain {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 150px 150px;
  mix-blend-mode: multiply;
  opacity: 0.12;
}
/* grain-photo: knackiges Fotokorn — hohe Frequenz, drei Oktaven, bewusst
   KEIN grobes Blob-Rauschen. Alpha-Rauschen, normal komponiert. */
.grain-photo {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0.9 0.9 0 -0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 150px 150px;
  opacity: 0.22;
}
```

(`.grain-screen` / `.grain-photo-screen`: gleiches SVG-Rauschen mit
`mix-blend-mode: screen` — vollständige Rezepte in `tokens/tokens.css`.)

## 4.5 Kasane-Gradients — mit Zurückhaltung

Kasane-Gradients (重ね — „geschichtet") sind Bridgemakers
atmosphärisches Signature-Treatment: mehrere halbtransparente radiale
Verläufe übereinander. Sie sind **Moment-Macher**, keine Tapete.

**Wann:** Hero (ein Hero-Kasane pro Seite), Kapitelbänder,
Moment-Sektionen, Cover-Slides, Featured-/Abschluss-CTAs. Mehrere
Gradient-Felder pro Seite sind normal (die Home hat Hero, Bänder,
Stimmen-Karten und CTA) — sie wechseln sich aber immer mit ruhigen
Flächen ab. *(Ersetzt die v1-Regel „max. ein Kasane-Modul pro Seite".)*
**Nie:** zwei Gradient-Sektionen direkt aneinander, hinter Fließtext,
als generischer Seiten-Hintergrund, hinter anderen Gradients oder
Bildern.

**Bauprinzip:** radiale Ellipsen aus Familienfarben (als `rgba`) über
einer Basis — heller Grund (Off-White/Surface) für Light-Kasane, satte
Basis (`deep-plum`, `#4A3570`) für Dark-Kasane. Die Farben müssen als
eigene Farbräume lesbar bleiben (Teal / Lavendel / Berry), kein homogener
Lila-Matsch.

Kern-Rezepte:

```css
/* Light Kasane — Hero auf Off-White */
.bg-kasane-hero {
  background:
    radial-gradient(ellipse 70% 65% at 12% 80%, rgba(196,177,220,0.65) 0%, transparent 60%),
    radial-gradient(ellipse 70% 60% at 92% 30%, rgba(177,142,182,0.70) 0%, transparent 65%),
    radial-gradient(ellipse 60% 55% at 28%  5%, rgba(168,184,154,0.55) 0%, transparent 60%),
    radial-gradient(ellipse 55% 45% at 75% -5%, rgba(196,177,220,0.55) 0%, transparent 65%),
    radial-gradient(ellipse 80% 30% at 50%  0%, rgba(186,164,196,0.35) 0%, transparent 70%);
}

/* Dark Kasane — CTA-Block auf Deep-Plum */
.bg-contact-cta {
  background:
    radial-gradient(ellipse 55% 65% at 24% 26%, rgba( 58,158,151,0.90) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 72% 18%, rgba(144,112,184,0.85) 0%, transparent 60%),
    radial-gradient(ellipse 55% 70% at 68% 84%, rgba(184, 74,111,0.80) 0%, transparent 60%),
    var(--color-bm-deep-plum);
}

/* Plum Kasane — vollfarbige Moment-Fläche */
.bg-kasane-plum {
  background:
    radial-gradient(ellipse 110% 120% at -5%   0%, rgba(196,177,220,0.70) 0%, transparent 75%),
    radial-gradient(ellipse 100% 110% at 100% 100%, rgba(184, 74,111,0.55) 0%, transparent 75%),
    radial-gradient(ellipse  95% 100% at 100% -10%, rgba(144,112,184,0.55) 0%, transparent 75%),
    radial-gradient(ellipse  95% 105% at   0% 110%, rgba(107, 74,148,0.55) 0%, transparent 75%),
    radial-gradient(ellipse 130%  90% at  50%  50%, rgba(180,148,210,0.30) 0%, transparent 80%),
    #4A3570;
}
```

Kasane-Flächen dürfen langsam driften — siehe
[`05-motion.md`](05-motion.md).

## 4.6 Gradient-Katalog

Die auf der Website entstandenen Gradient-Flächen gehören zum Kanon und
dürfen in zukünftigen Publikationen eingesetzt werden. Vollständige
Rezepte in `tokens/tokens.css`; hier der Katalog mit Einsatzzweck:

| Klasse | Charakter | Einsatz |
|---|---|---|
| `bg-kasane-hero` | Light-Kasane (Soft-Purple/Grün auf Off-White) | Seiten-Hero |
| `bg-kasane-cta` | Dark-Kasane (Plum/Berry/Purple) | Dunkle CTA-Flächen, Mobile-Menü |
| `bg-contact-cta` | Dark-Kasane, Triade auf Deep-Plum | Kontakt-/Abschluss-CTA |
| `bg-commercial-os` | Sattes Farbband: vivid Teal + Lavendel + Berry auf Deep-Plum, für weiße Typo | Featured-/Produkt-Band |
| `bg-kasane-plum` | Vollfarbige Plum-Moment-Fläche | Vision-/Prozess-Sektionen |
| `bg-kasane-band-sage` / `-mauve` | Surface-Ton als weiche Kasane-Wolke, läuft an den Rändern in Off-White aus | Kapitelbänder statt harter Tint-Wannen |
| `bg-hebel-kundenschnittstelle` / `-vertrieb` / `-neue-felder` / `-ventures` | Familienfarbe über passender Surface (mauve/sage/sand/stone) | Themen-Karten-Visuals (ein Hebel = eine Farbwelt) |
| `bg-hebel-wash-*` (4 Varianten) | Weicher Farb-Glow oben-mittig + Weiß-Sockel, full-bleed | Offene Farbbänder hinter 1200er-Content |
| `bg-case-visual-1…6` | Rotierende Branchen-Tonalitäten über Surfaces | Case-/Grid-Visuals |
| `bg-case-neues-verkaufen` / `-besser-verkaufen` / `-besser-arbeiten` | Hebel-Akzente (Plum/Teal/Berry) über Surfaces | Case-Karten pro Hebel |
| `bg-stimme-plum` / `-teal` | Satte dunkle Verlaufs-Karten (mit `grain-photo-screen`) | Zitat-/Stimmen-Karten |
| `bg-yt-thumb-featured` / `-tile`, `bg-youtube-preview` | Leise Verlaufs-Thumbs auf dunklen Karten | Media-Platzhalter ohne Bild |
| `bg-stripes-diagonal` | Diagonale Streifen-Textur (Stone-Töne) | Grafische Platzhalter-/Post-Visuals |

**Systematik dahinter:** Ein Thema = eine Farbwelt (Kundenschnittstelle →
Purple/Mauve, Vertrieb → Teal auf `surface-sage`, Neue Felder →
Berry/Sand, Ventures → Stone). Die Grüntöne in einigen Rezepten sind
namenlose Rezept-Bestandteile — Sage ist keine benannte Farbe mehr.
Neue Gradient-Flächen folgen dieser Sprache — Familienfarben als radiale
Ellipsen über einer Surface- oder Deep-Basis.

## 4.7 Handwerkswissen — hart erarbeitet, nicht neu lernen

Diese Punkte haben beim Website-Bau echte Debugging-Zeit gekostet:

1. **backdrop-filter-Build-Falle:** Handgeschriebene
   `backdrop-filter`-Deklarationen in `@layer`-Blöcken werden von der
   **Tailwind-v4-/Lightning-CSS-Pipeline gestrippt**. Der Frost muss über
   Tailwinds eigene Utilities direkt am Element kommen
   (`backdrop-blur-xl`, `backdrop-saturate-150`, …). Die Karten-Rezepte
   enthalten deshalb bewusst kein backdrop-filter.
2. **Glas-Karten dürfen selbst keinen `filter` tragen.** Ein `filter` auf
   der Karte isoliert sie vom Backdrop-Sampling — die Scheibe frostet
   nichts mehr.
3. **Inhalte unter einer Glasscheibe dürfen weder `filter` noch
   `blend-mode` tragen** (z. B. ein Case-Bild unter `case-glass`) —
   dieselbe Compositing-Falle. Darum komponiert `.grain-photo` normal
   statt zu blenden.
4. **Kasane-Drift-Eltern brauchen `overflow: hidden`**, damit die
   skalierte Gradient-Ebene geclippt bleibt.
5. **Kein `blur()` auf Kasane-Flächen im Mobile-Kontext** — ruckelt auf
   Mobilgeräten (Mobile-Menü nutzt den Gradient deshalb ungefiltert mit
   reduzierter Opacity).
