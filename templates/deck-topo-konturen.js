#!/usr/bin/env node
/* ============================================================
   BRIDGEMAKER DECK — TOPOGRAFISCHE KONTURLINIEN (guidelines/07 §7.8)

   Erzeugt die Kontur-SVGs für die Moment-Flächen der Decks.
   Topo-Linien sind Blickführung um den Content, nie Deko-Gewusel.

   Nutzung (druckt das fertige <svg>…</svg> auf stdout):
     node deck-topo-konturen.js cover       [seed] [stroke] [opacity]
     node deck-topo-konturen.js schluss     [seed] [stroke] [opacity]
     node deck-topo-konturen.js band-mauve  [seed] [stroke] [opacity]
     node deck-topo-konturen.js band-sage   [seed] [stroke] [opacity]

   cover      → Dichte-Gradient wie der Website-Hero: rechts
                dicht, nach links auslaufend (Höhenfeld = Rampe
                + Noise, Iso-Linien per Marching Squares).
   schluss    → Konzentrische, leicht gewellte Ringe um die Mitte
                (Blickführung auf Statement + Kontakt).
   band-*     → Topografie DES Gradients: Das Höhenfeld ist aus
                den radialen Ellipsen des jeweiligen Kapitelband-
                Rezepts in tokens.css konstruiert — die Konturen
                umschließen die Farbzentren des Verlaufs.
                Ändert sich das Token-Rezept, hier die BLOBS
                nachziehen.

   Stroke/Opacity default auf Off-White 0.10/0.12 (dunkle
   Flächen). Für helle Flächen (Kapitelbänder): Hellgrau aus dem
   System, z. B. „#C5C0B8 0.6". Anderer Seed = anderes
   Linienbild — bei mehreren Kapiteltrennern Seed = Basis +
   Kapitelnummer.
   ============================================================ */

const MODE = process.argv[2] || 'cover';
const SEED = parseInt(process.argv[3], 10) || 20260717;
const STROKE = process.argv[4] || '#F5F1EB';
const OPACITY = process.argv[5] || (MODE === 'schluss' ? '0.12' : '0.10');
const W = 1440, H = 810;

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeNoise(seed, scale) {
  const rand = mulberry32(seed);
  const G = 64;
  const grid = [];
  for (let j = 0; j <= G; j++) { grid[j] = []; for (let i = 0; i <= G; i++) grid[j][i] = rand(); }
  const sm = t => t * t * (3 - 2 * t);
  return function (x, y) {
    const u = x / scale, v = y / scale;
    const i = Math.floor(u), j = Math.floor(v);
    const fu = sm(u - i), fv = sm(v - j);
    const g = (a, b) => grid[((b % G) + G) % G][((a % G) + G) % G];
    return (g(i, j) * (1 - fu) + g(i + 1, j) * fu) * (1 - fv)
         + (g(i, j + 1) * (1 - fu) + g(i + 1, j + 1) * fu) * fv;
  };
}

function svgWrap(paths) {
  return `<svg class="kasane-layer" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" style="z-index: 1; width: 100%; height: 100%;" aria-hidden="true"><g fill="none" stroke="${STROKE}" stroke-width="1" opacity="${OPACITY}">${paths.join('')}</g></svg>`;
}

/* ---------- Marching Squares über ein beliebiges Höhenfeld ---------- */
function marchingContours(field, levels, { cell = 8, minLen = 60 } = {}) {
  const NX = Math.ceil(W / cell), NY = Math.ceil(H / cell);
  const F = [];
  for (let j = 0; j <= NY; j++) { F[j] = []; for (let i = 0; i <= NX; i++) F[j][i] = field(i * cell, j * cell); }

  const segmentsForLevel = (L) => {
    const segs = [];
    const lerp = (pa, pb, fa, fb) => {
      const t = (L - fa) / (fb - fa);
      return [pa[0] + (pb[0] - pa[0]) * t, pa[1] + (pb[1] - pa[1]) * t];
    };
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const x0 = i * cell, y0 = j * cell, x1 = x0 + cell, y1 = y0 + cell;
      const f00 = F[j][i], f10 = F[j][i + 1], f11 = F[j + 1][i + 1], f01 = F[j + 1][i];
      let c = 0;
      if (f00 > L) c |= 8; if (f10 > L) c |= 4; if (f11 > L) c |= 2; if (f01 > L) c |= 1;
      if (c === 0 || c === 15) continue;
      const top = () => lerp([x0, y0], [x1, y0], f00, f10);
      const right = () => lerp([x1, y0], [x1, y1], f10, f11);
      const bottom = () => lerp([x0, y1], [x1, y1], f01, f11);
      const left = () => lerp([x0, y0], [x0, y1], f00, f01);
      const add = (a, b) => segs.push([a, b]);
      switch (c) {
        case 1: case 14: add(left(), bottom()); break;
        case 2: case 13: add(bottom(), right()); break;
        case 3: case 12: add(left(), right()); break;
        case 4: case 11: add(top(), right()); break;
        case 6: case 9: add(top(), bottom()); break;
        case 7: case 8: add(left(), top()); break;
        case 5: case 10: {
          const flip = ((f00 + f10 + f11 + f01) / 4 > L) === (c === 5);
          if (flip) { add(left(), top()); add(bottom(), right()); }
          else { add(left(), bottom()); add(top(), right()); }
          break;
        }
      }
    }
    return segs;
  };

  const chain = (segs) => {
    const key = p => `${p[0].toFixed(2)},${p[1].toFixed(2)}`;
    const map = new Map();
    segs.forEach((s, idx) => {
      for (const p of [s[0], s[1]]) {
        const k = key(p);
        if (!map.has(k)) map.set(k, []);
        map.get(k).push(idx);
      }
    });
    const used = new Array(segs.length).fill(false);
    const lines = [];
    for (let start = 0; start < segs.length; start++) {
      if (used[start]) continue;
      used[start] = true;
      const line = [segs[start][0], segs[start][1]];
      for (const dir of [1, 0]) {
        let end = dir ? line[line.length - 1] : line[0];
        for (;;) {
          const cands = (map.get(key(end)) || []).filter(i => !used[i]);
          if (!cands.length) break;
          const idx = cands[0];
          used[idx] = true;
          const s = segs[idx];
          const next = key(s[0]) === key(end) ? s[1] : s[0];
          if (dir) line.push(next); else line.unshift(next);
          end = next;
        }
      }
      lines.push(line);
    }
    return lines;
  };

  const rdp = (pts, eps) => {
    if (pts.length < 3) return pts;
    const [a, b] = [pts[0], pts[pts.length - 1]];
    let maxD = 0, maxI = 0;
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const len = Math.hypot(dx, dy) || 1e-9;
    for (let i = 1; i < pts.length - 1; i++) {
      const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + b[0] * a[1] - b[1] * a[0]) / len;
      if (d > maxD) { maxD = d; maxI = i; }
    }
    if (maxD > eps) {
      const l = rdp(pts.slice(0, maxI + 1), eps);
      return l.slice(0, -1).concat(rdp(pts.slice(maxI), eps));
    }
    return [a, b];
  };

  const paths = [];
  for (const L of levels) {
    for (let line of chain(segmentsForLevel(L))) {
      line = rdp(line, 0.7);
      if (line.length < 4) continue;
      let len = 0;
      for (let i = 1; i < line.length; i++) len += Math.hypot(line[i][0] - line[i - 1][0], line[i][1] - line[i - 1][1]);
      if (len < minLen) continue;
      paths.push(`<path d="M${line.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' L')}" />`);
    }
  }
  return paths;
}

/* ---------- Modus COVER: Rampe + x-gewichtetes Noise ---------- */
function cover() {
  const n1 = makeNoise(SEED, 270);
  const n2 = makeNoise(SEED ^ 0x9E3779B9, 120);
  const K = 10.5, P = 2.1; // Rampe: Stärke und Linkslastigkeit des Auslaufens
  const field = (x, y) => {
    const t = x / W;
    return K * Math.pow(t, P)
      + (n1(x + 153, y + 911) - 0.5) * 2 * (0.45 + 2.3 * t)
      + (n2(x + 37, y + 541) - 0.5) * 2 * (0.12 + 0.75 * t);
  };
  const levels = [];
  for (let L = -1.75; L <= 12.75; L += 0.5) levels.push(L);
  return svgWrap(marchingContours(field, levels));
}

/* ---------- Modus BAND-*: Topografie des Kapitelband-Gradients ----------
   Die BLOBS spiegeln die radial-gradient-Ellipsen des jeweiligen
   Tokens (cx/cy/rx/ry in Anteilen der Stage, w ~ Alpha des
   Rezepts). Iso-Linien auf diesem Feld = Höhenlinien der
   Farbwolken: dicht an den Rändern der Blobs, Ringe um ihre
   Zentren. */
const BAND_BLOBS = {
  'band-mauve': [
    { cx: 0.80, cy: 0.30, rx: 0.90, ry: 0.75, w: 1.00 },
    { cx: 0.15, cy: 0.70, rx: 0.85, ry: 0.70, w: 0.68 },
    { cx: 0.50, cy: 0.55, rx: 1.20, ry: 0.70, w: 0.35 },
  ],
  'band-sage': [
    { cx: 0.20, cy: 0.35, rx: 0.90, ry: 0.75, w: 1.00 },
    { cx: 0.85, cy: 0.65, rx: 0.85, ry: 0.70, w: 0.80 },
    { cx: 0.50, cy: 0.50, rx: 1.20, ry: 0.70, w: 0.35 },
  ],
};

function band(blobs) {
  const wob = makeNoise(SEED, 240);
  const field = (x, y) => {
    let f = 0;
    for (const b of blobs) {
      const dx = (x - b.cx * W) / (b.rx * W * 0.62); // 0.62 ≈ Transparent-Stop des Rezepts
      const dy = (y - b.cy * H) / (b.ry * H * 0.62);
      f += b.w * Math.exp(-(dx * dx + dy * dy) * 1.6);
    }
    return f + (wob(x + 311, y + 127) - 0.5) * 0.10;
  };
  const levels = [];
  for (let L = 0.10; L <= 1.60; L += 0.075) levels.push(L);
  return svgWrap(marchingContours(field, levels));
}

/* ---------- Modus SCHLUSS: konzentrische Ringe um den Content ---------- */
function schluss() {
  const cx = W / 2, cy = H / 2;
  const wob = makeNoise(SEED, 0.9); // Noise über den Winkel (Bogenmaß / Skala 0.9)
  const paths = [];
  const RINGS = 8;
  for (let r = 0; r < RINGS; r++) {
    const base = 330 * Math.pow(1.30, r);
    const rx = base * 1.7, ry = base;
    const pts = [];
    const STEPS = 144;
    for (let s = 0; s <= STEPS; s++) {
      const a = (s / STEPS) * Math.PI * 2;
      // leichte, ringindividuelle Welligkeit — kein perfektes Oval
      const w = 1 + (wob(Math.cos(a) * 2 + r * 7.3, Math.sin(a) * 2 + r * 3.1) - 0.5) * 0.10;
      pts.push([cx + Math.cos(a) * rx * w, cy + Math.sin(a) * ry * w]);
    }
    paths.push(`<path d="M${pts.map(p => `${p[0].toFixed(0)},${p[1].toFixed(0)}`).join(' L')} Z" />`);
  }
  return svgWrap(paths);
}

if (BAND_BLOBS[MODE]) process.stdout.write(band(BAND_BLOBS[MODE]));
else if (MODE === 'schluss') process.stdout.write(schluss());
else process.stdout.write(cover());
