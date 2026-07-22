#!/usr/bin/env python3
# ============================================================
# NATIVER PPTX-MASTER — aus vermessener Deck-Geometrie
#
# Baut aus geometry.json (extract-geometry.js) und den
# text-freien Hintergrund-Renderings eine echte PowerPoint-
# Datei mit Textfeldern, Hairline-Shapes und Wortmarken:
# Langdocks File-Template-Funktion liest die slideN.xml-
# Struktur — Bild-Folien sind für sie stumm, echte Textfelder
# nicht.
#
# Koordinaten: 1440x810 px = 13,333x7,5 Zoll -> 108 px/Zoll.
# Schriftgrad: pt = px * 2/3.
#
# Nutzung:
#   node langdock/pptx-template/extract-geometry.js
#   <venv>/bin/python langdock/pptx-template/build-pptx-template.py
# ============================================================

import json, os, re
from pptx import Presentation
from pptx.util import Emu, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_AUTO_SIZE
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.expanduser('~/Downloads/bridgemaker-slides-template.pptx')
PX = 914400 / 108                    # EMU pro Pixel

def emu(v): return Emu(int(v * PX))

def rgb(css):
    m = re.match(r'rgba?\((\d+),\s*(\d+),\s*(\d+)', css or '')
    return RGBColor(int(m.group(1)), int(m.group(2)), int(m.group(3))) if m else RGBColor(0x1C, 0x1C, 0x1E)

def crop_alpha(src, dst):
    img = Image.open(src).convert('RGBA')
    box = img.getbbox()
    img.crop(box).save(dst)
    return dst

geo = json.load(open(os.path.join(HERE, 'geometry.json')))
wm = {v: crop_alpha(os.path.join(HERE, f'assets/wordmark-{v}.png'),
                    os.path.join(HERE, f'assets/wordmark-{v}-crop.png'))
      for v in ('black', 'white')}

prs = Presentation()
prs.slide_width, prs.slide_height = Emu(int(1440 * PX)), Emu(int(810 * PX))
blank = prs.slide_layouts[6]

ALIGN = {'center': PP_ALIGN.CENTER, 'right': PP_ALIGN.RIGHT, 'end': PP_ALIGN.RIGHT}

# Meta-Zeilen (Kopfzeile, Fußzeile, Eyebrows, Seitenzahl) bekommen
# Designbreite statt Mustertext-Maß: Die vermessene Box ist exakt so
# breit wie der Beispieltext — ein längerer echter Kapiteltitel bricht
# darin drei-, vierzeilig um (Befund Kollegen-Test 22.07.).
META_MIN_W = {'head': 560, 'eyebrow': 520, 'foot': 460, 'pagenum': 64}

def prep_content(t):
    # Voll-Blöcke (nur Inline-Kinder) tragen den kompletten Text,
    # sonst nur die eigenen Textknoten (Kinder kommen als eigene Boxen).
    content = t['text'] if t.get('full') or t['leaf'] else t['own']
    if not content: return None
    return content.upper() if t['caps'] else content


def widen_meta(g, groups):
    """Meta-Box auf Designbreite weiten — aber nur bis zur nächsten
    Box in derselben Zeile (Spalten-Labels und Tabellenköpfe stehen
    nebeneinander und dürfen sich nicht überlagern)."""
    min_w = META_MIN_W[g['role']]
    if g['w'] >= min_w: return g['x'], g['w']
    y0, y1 = g['y'], g['y'] + g['h']
    left_lim, right_lim = 24, 1416
    for o in groups:
        if o is g or not (o['y'] < y1 and o['y'] + o['h'] > y0): continue
        if o['x'] >= g['x'] + g['w']: right_lim = min(right_lim, o['x'] - 16)
        if o['x'] + o['w'] <= g['x']: left_lim = max(left_lim, o['x'] + o['w'] + 16)
    align = g['parts'][0]['align']
    if align in ('right', 'end'):
        r = g['x'] + g['w']
        x = max(left_lim, r - min_w)
        return x, max(r - x, g['w'])
    if align == 'center':
        cx = g['x'] + g['w'] / 2
        half = min(min_w / 2, cx - left_lim, right_lim - cx)
        return cx - half, max(half * 2, g['w'])
    return g['x'], max(min(min_w, right_lim - g['x']), g['w'])

def merge_columns(texts):
    """Gestapelte Content-Boxen einer Spalte (Titel/Body/Caption) werden
    EIN Textrahmen: PPTX-Boxen schieben sich nicht weg wie HTML-Blöcke —
    läuft echter Text länger als das Muster, wächst er sonst aus seiner
    Box direkt in die nächste (Text-über-Text im Kollegen-Test)."""
    items = []
    for t in texts:
        c = prep_content(t)
        if c is None: continue
        items.append({'x': t['x'], 'y': t['y'], 'w': t['w'], 'h': t['h'],
                      'role': t.get('role'), 'parts': [{**t, 'content': c, 'gap': 0}]})
    items.sort(key=lambda g: (round(g['x']), g['y']))
    merged = []
    for g in items:
        prev = merged[-1] if merged else None
        last = prev['parts'][-1] if prev else None
        gap = g['y'] - (prev['y'] + prev['h']) if prev else None
        if (prev and not g['role'] and not prev['role']
                and g['parts'][0]['fs'] <= 20 and last['fs'] <= 20
                and abs(g['x'] - prev['x']) < 4
                and -2 <= gap <= 32
                and g['parts'][0]['align'] == last['align']):
            g['parts'][0]['gap'] = max(gap, 0)
            prev['parts'] += g['parts']
            prev['w'] = max(prev['w'], g['w'])
            prev['h'] = g['y'] + g['h'] - prev['y']
        else:
            merged.append(g)
    return merged

for i, s in enumerate(geo['slides']):
    slide = prs.slides.add_slide(blank)

    # Grund: Moment-Slides tragen das gerenderte Linien-/Kasane-Bild,
    # Content-Slides die Off-White-Fläche.
    if s['moment']:
        slide.shapes.add_picture(os.path.join(HERE, f'assets/bg-{i:02d}.png'),
                                 0, 0, prs.slide_width, prs.slide_height)
    else:
        slide.background.fill.solid()
        slide.background.fill.fore_color.rgb = rgb(s['bg'])

    # Hairlines als flache Shapes (dedupliziert)
    seen = set()
    for ln in s['lines']:
        key = (round(ln['x']), round(ln['y']), round(ln['w']), round(ln['h']))
        if key in seen: continue
        seen.add(key)
        from pptx.enum.shapes import MSO_SHAPE
        shp = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, emu(ln['x']), emu(ln['y']),
                                     emu(max(ln['w'], 1)), emu(max(ln['h'], 1)))
        shp.fill.solid(); shp.fill.fore_color.rgb = rgb(ln['color'])
        shp.line.fill.background(); shp.shadow.inherit = False

    # Wortmarken
    for img in s['images']:
        v = img['kind'].split('-')[1]
        slide.shapes.add_picture(wm[v], emu(img['x']), emu(img['y']),
                                 emu(img['w']), emu(img['h']))

    # Texte: eigene Textknoten am eigenen Element (Duplikate über
    # Eltern/Kind-Verschachtelung vermeidet der own-Ansatz);
    # Spalten-Stapel vorab zu einem Rahmen zusammengelegt.
    groups = merge_columns(s['texts'])
    for grp in groups:
        role = grp['role']
        x, y, w, h = grp['x'], grp['y'], grp['w'], grp['h']
        if role in META_MIN_W:
            x, w = widen_meta(grp, groups)
        tb = slide.shapes.add_textbox(emu(x), emu(y - 2), emu(w + 4), emu(h + 4))
        tf = tb.text_frame
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
        if role:
            tf.word_wrap = False                          # Meta bleibt einzeilig
            tf.auto_size = MSO_AUTO_SIZE.NONE
        else:
            tf.word_wrap = True
            # normAutofit: läuft echter Text länger als das Muster,
            # schrumpft er in der Box, statt darüber hinauszuwachsen.
            tf.auto_size = MSO_AUTO_SIZE.TEXT_TO_FIT_SHAPE
        li = 0
        for part in grp['parts']:
            for pi, line in enumerate(part['content'].split('\n')):
                p = tf.paragraphs[0] if li == 0 else tf.add_paragraph()
                li += 1
                p.text = line
                if part['align'] in ALIGN: p.alignment = ALIGN[part['align']]
                if pi == 0 and part['gap']:
                    p.space_before = Pt(round(part['gap'] * 2 / 3, 1))
                f = p.runs[0].font
                f.name = 'JetBrains Mono' if part['mono'] else 'Inter'
                f.size = Pt(round(part['fs'] * 2 / 3, 1))
                f.bold = int(part['fw']) >= 600 if str(part['fw']).isdigit() else part['fw'] == 'bold'
                f.italic = part['italic']
                f.color.rgb = rgb(part['color'])

    # Sprechernotiz = Layout-Name (hilft Langdocks Klassifizierung)
    slide.notes_slide.notes_text_frame.text = f"Layout: {s['label']}"

prs.save(OUT)
print(f'OK — {len(geo["slides"])} Folien, {os.path.getsize(OUT) // 1024} KB -> {OUT}')
