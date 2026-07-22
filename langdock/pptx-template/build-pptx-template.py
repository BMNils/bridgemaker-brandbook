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
from pptx.enum.text import PP_ALIGN
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
    # Eltern/Kind-Verschachtelung vermeidet der own-Ansatz)
    for t in s['texts']:
        content = t['own'] if not t['leaf'] else t['text']
        if not content: continue
        if t['caps']: content = content.upper()
        tb = slide.shapes.add_textbox(emu(t['x']), emu(t['y'] - 2), emu(t['w'] + 4), emu(t['h'] + 4))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
        for li, line in enumerate(content.split('\n')):
            p = tf.paragraphs[0] if li == 0 else tf.add_paragraph()
            p.text = line
            if t['align'] in ALIGN: p.alignment = ALIGN[t['align']]
            f = p.runs[0].font
            f.name = 'JetBrains Mono' if t['mono'] else 'Inter'
            f.size = Pt(round(t['fs'] * 2 / 3, 1))
            f.bold = int(t['fw']) >= 600 if str(t['fw']).isdigit() else t['fw'] == 'bold'
            f.italic = t['italic']
            f.color.rgb = rgb(t['color'])

    # Sprechernotiz = Layout-Name (hilft Langdocks Klassifizierung)
    slide.notes_slide.notes_text_frame.text = f"Layout: {s['label']}"

prs.save(OUT)
print(f'OK — {len(geo["slides"])} Folien, {os.path.getsize(OUT) // 1024} KB -> {OUT}')
