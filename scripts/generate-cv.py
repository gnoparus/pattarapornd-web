#!/usr/bin/env python3
"""Generate the downloadable CV PDF.

The portfolio page (components/*.tsx) is the source of truth. This script is
the CV's source: there was no HTML, Markdown, or Docs file in the repo, only
public/cv-dr-pattarapornd-suparcha-md-2026.pdf (originally exported from
Google Docs in Arial). Arimo is the metric-compatible Arial substitute used
here so the type size, margins, and line rhythm stay the same.

Run from the repo root:

    python3 scripts/generate-cv.py
"""

from pathlib import Path

from reportlab.lib.colors import Color, black
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily, stringWidth
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "cv-dr-pattarapornd-suparcha-md-2026.pdf"
FONT_DIR = Path("/usr/share/fonts/truetype/croscore")

PAGE = (596, 842)  # matches the original Google Docs page box
MARGIN = 72
LINK = Color(17 / 255, 85 / 255, 204 / 255)  # #1155CC, the original link blue

# En dash, matching the original date separator.
EN = "\u2013"
_SEQ = 0


def dated(start, end):
    """Date range that will not split across lines."""
    start = start.replace(" ", "&nbsp;")
    end = end.replace(" ", "&nbsp;")
    return f"{start}&nbsp;{EN}&nbsp;{end}"


def style_copy(parent, **kwargs):
    global _SEQ
    _SEQ += 1
    return ParagraphStyle(f"s{_SEQ}", parent=parent, **kwargs)


def register_fonts():
    pdfmetrics.registerFont(TTFont("Arimo", str(FONT_DIR / "Arimo-Regular.ttf")))
    pdfmetrics.registerFont(TTFont("Arimo-Bold", str(FONT_DIR / "Arimo-Bold.ttf")))
    pdfmetrics.registerFont(TTFont("Arimo-Italic", str(FONT_DIR / "Arimo-Italic.ttf")))
    pdfmetrics.registerFont(
        TTFont("Arimo-BoldItalic", str(FONT_DIR / "Arimo-BoldItalic.ttf"))
    )
    registerFontFamily(
        "Arimo",
        normal="Arimo",
        bold="Arimo-Bold",
        italic="Arimo-Italic",
        boldItalic="Arimo-BoldItalic",
    )


def styles():
    body = ParagraphStyle(
        "body",
        fontName="Arimo",
        fontSize=11,
        leading=14.5,
        textColor=black,
        alignment=TA_LEFT,
        spaceBefore=0,
        spaceAfter=0,
    )
    name = ParagraphStyle(
        "name",
        parent=body,
        fontName="Arimo-Bold",
        fontSize=13,
        leading=16,
        spaceAfter=11,
    )
    contact = ParagraphStyle(
        "contact",
        parent=body,
        spaceAfter=12,
    )
    section = ParagraphStyle(
        "section",
        parent=body,
        fontName="Arimo-Bold",
        spaceBefore=0,
        spaceAfter=12,
    )
    # Bullet right edge sits just before the text. The original draws the
    # bullet 18pt into the text block and starts the words at 36pt.
    bullet_width = stringWidth("\u25cf", "Arimo", 11)
    bullet = ParagraphStyle(
        "bullet",
        parent=body,
        leftIndent=36,
        firstLineIndent=0,
        bulletIndent=18 + bullet_width,
        bulletFontName="Arimo",
        bulletFontSize=11,
        bulletColor=black,
    )
    return {
        "name": name,
        "contact": contact,
        "body": body,
        "section": section,
        "bullet": bullet,
    }


def bullets(items, s, *, gap_before=False):
    """CV bullets. gap_before adds the paragraph gap used under a role header."""
    out = []
    last = len(items) - 1
    for i, text in enumerate(items):
        style = style_copy(
            s["bullet"],
            spaceBefore=12 if gap_before and i == 0 else 0,
            spaceAfter=12 if i == last else 0,
        )
        out.append(Paragraph(text, style, bulletText="\u25cf"))
    return out


def role(org, location, title, dates, items, s):
    # Non-breaking space before the pipe keeps a wrapped date off its own
    # leading punctuation, matching the original Google Docs line breaks.
    header = f"<b>{org}</b> | {location} <i>{title}</i>&nbsp;| {dates}"
    return KeepTogether(
        [Paragraph(header, s["body"]), *bullets(items, s, gap_before=True)]
    )


def education(title, institution, when, items, s):
    header = f"<b>{title}</b> | {institution}&nbsp;| {when}"
    return KeepTogether(
        [Paragraph(header, s["body"]), *bullets(items, s, gap_before=True)]
    )


def build_story(s):
    linkedin = (
        '<link href="https://www.linkedin.com/in/dr-pattarapornd-suparcha-914858392" '
        'color="#1155CC">linkedin.com/in/dr-pattarapornd-suparcha-914858392</link>'
    )
    story = [
        Paragraph("Dr. Pattarapornd Suparcha, M.D.", s["name"]),
        Paragraph(
            "Bangkok, Thailand | pattarapornd.s57@gmail.com |<br/>"
            f"pattarapornd.com<br/>{linkedin}",
            s["contact"],
        ),
            Paragraph(
            "<b>PROFESSIONAL SUMMARY</b>&nbsp;&nbsp;Dedicated Medical Doctor "
            "specializing in Anti-Aging, Aesthetic Medicine, and General "
            "Practice. Combines evidence-based modern medical science, "
            "advanced aesthetic technologies, and holistic wellness "
            "practices to deliver highly personalized, patient-centered care. "
            "Proven expertise in injectables, cellular rejuvenation, "
            "occupational health, and integrating artistic vision into medical "
            "aesthetics.",
            style_copy(s["body"], spaceAfter=12),
        ),
        Paragraph("PROFESSIONAL EXPERIENCE", s["section"]),
        role(
            "Araya Clinic",
            "Bangkok, Thailand",
            "Aesthetic Physician",
            dated("Sep 2026", "Present"),
            [
                "Providing aesthetic medicine consultations and treatments at Araya Clinic, with a weekday schedule that varies week to week.",
                "Delivering aesthetic treatments tailored to each patient's goals.",
                "Building an ongoing patient care schedule alongside her other clinic roles.",
            ],
            s,
        ),
        role(
            "Izee Clinic",
            "Bangkok, Thailand",
            "Aesthetic Physician (Occasional)",
            dated("Jul 2026", "Present"),
            [
                "Continuing to see patients at Izee Clinic on an occasional basis alongside her primary role at Araya Clinic.",
                "Delivering aesthetic treatments tailored to each patient's goals.",
            ],
            s,
        ),
        role(
            "NURA Bangkok",
            "Bangkok, Thailand",
            "General Practitioner",
            dated("Jul 2026", "Present"),
            [
                "Serving as a check-up physician at NURA Bangkok, reviewing medical history, recommending age- and gender-specific screening packages, and guiding patients through their results.",
                "Reviewing personal and family medical history, lifestyle habits, and risk factors.",
                "Recommending screening programs matched to age, gender, and risk profile.",
                "Performing physical exams and supervising diagnostics (imaging, lab work).",
                "Interpreting results and advising on lifestyle changes or specialist referrals.",
            ],
            s,
        ),
        role(
            "CMC Training Center",
            "Bangkok, Thailand",
            "Teacher Assistant",
            dated("Jun 2025", "Present"),
            [
                "Assisting in hands-on training sessions for medical professionals seeking to learn and refine aesthetic procedures.",
                "Facilitating Basic Aesthetic Hands-on training courses.",
                "Guiding trainees through practical aesthetic techniques and procedures.",
            ],
            s,
        ),
        role(
            "Academy Aesthetic Training",
            "Bangkok, Thailand",
            "Training Assistant",
            dated("May 2025", "Present"),
            [
                "Supporting advanced aesthetic training programs for medical practitioners expanding their expertise in facial aesthetics.",
                "Assisting in Basic Aesthetic and Advanced Filler Hands-on training.",
                "Helping trainees develop precision techniques in injectable treatments.",
            ],
            s,
        ),
        role(
            "Inspire IVF Thailand \u2014 Wellness Department",
            "Bangkok, Thailand",
            "Anti-Aging, Aesthetics &amp; General Practitioner",
            dated("Feb 2026", "May 2026"),
            [
                "Offered personalized one-on-one care in the Wellness Department of Bangkok's premier fertility and wellness centre, combining anti-aging medicine, aesthetic treatments, and general practice with a holistic approach.",
                "Delivered specialized anti-aging and aesthetic medicine in a world-class fertility and wellness center.",
                "Provided comprehensive general practice care to international and local clients.",
                "Integrated holistic wellness approaches with cutting-edge medical technology.",
            ],
            s,
        ),
        role(
            "Phyathai Nawamin Hospital",
            "Bangkok, Thailand",
            "General Practitioner &amp; Occupational Health Physician",
            dated("Dec 2023", "Jan 2026"),
            [
                "Served in multiple capacities over 2 years at one of Bangkok's premier hospitals, including general practice, occupational health &amp; safety, and founding the Tele Care Center.",
                f"Occupational Health and Safety Physician, Check-up Department ({dated('Nov 2025', 'Jan 2026')}).",
                f"General Practitioner, Check-up Department ({dated('Jul 2025', 'Jan 2026')}).",
                f"Founding member of the Tele Care Center, SSO Department ({dated('Dec 2023', 'Jan 2026')}).",
            ],
            s,
        ),
        role(
            "Tomodachi T-shirt",
            "Thailand",
            "Digital Commercial Artist",
            dated("Jan 2022", "Present"),
            [
                "Produce original digital commercial artwork, leveraging an understanding of symmetry and artistic design.",
            ],
            s,
        ),
        Paragraph("EDUCATION", s["section"]),
        education(
            "Fellowship in Anti-Aging and Regenerative Science",
            "Dhurakij Pundit University (DPU)",
            dated("2025", "2026"),
            [
                "Currently pursuing a Fellowship in Anti-Aging and Regenerative Science, furthering clinical research and medical expertise in the field.",
            ],
            s,
        ),
        education(
            "Fundamental Occupational Medicine",
            "Chiang Mai University",
            "2023",
            [
                "Specialized certification in occupational medicine fundamentals, workplace health, and safety protocols.",
            ],
            s,
        ),
        education(
            "Doctor of Medicine (M.D.)",
            "Rangsit University, College of Medicine",
            "2015",
            [
                "Graduated with comprehensive clinical training, focusing on internal medicine and patient-centered care across Thailand's top teaching hospitals.",
            ],
            s,
        ),
        Paragraph("SKILLS &amp; EXPERTISE", s["section"]),
        *bullets(
            [
                "<b>Medical &amp; Clinical:</b> General Practice, Preventive Medicine, Occupational Health &amp; Safety.",
                "<b>Aesthetics &amp; Anti-Aging:</b> Advanced Injectables, Laser Treatments, Skin Rejuvenation, Regenerative Medicine, AI-Driven Healthcare Integration (Predictive Aging Models).",
                "<b>Holistic Healing:</b> Certified in Traditional Thai Massage and Tibetan Singing Bowl Sound Healing; drawing.",
                "<b>Languages:</b> Thai (Native), English (Intermediate).",
            ],
            s,
        ),
        Paragraph("ACHIEVEMENTS &amp; COMMUNITY INVOLVEMENT", s["section"]),
        *bullets(
            [
                "<b>Certifications:</b> Rajavithi Advanced Trauma Course for Medical Students (2014).",
                "<b>Conferences:</b> Prince Mahidol Award Youth Program Conference 2020.",
                '<b>Public Health Volunteering:</b> "I Can Detect! Let\'s Talk About Depression" (mental health awareness and early detection of depression), Less Luxury Project, Srithanya Charity Run, Change 5th Med RSU.',
            ],
            s,
        ),
    ]
    return story


def main():
    register_fonts()
    s = styles()
    doc = BaseDocTemplate(
        str(OUT),
        pagesize=PAGE,
        title="CV Dr. Pattarapornd Suparcha, M.D. 2026",
        author="Dr. Pattarapornd Suparcha",
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=80,
        bottomMargin=64,
    )
    frame = Frame(
        MARGIN,
        64,
        PAGE[0] - 2 * MARGIN,
        PAGE[1] - 80 - 64,
        id="body",
        showBoundary=0,
    )
    doc.addPageTemplates([PageTemplate(id="cv", frames=[frame])])
    doc.build(build_story(s))
    print(f"wrote {OUT}")


if __name__ == "__main__":
    main()
