---
name: Dr. Pattarapornd Suparcha — Medical Portfolio
description: Warm, Apple-inspired purple portfolio for an aesthetic & anti-aging physician
colors:
  warm-amethyst: "#7c3aed"
  ink-black: "#1d1d1f"
  cloud-6: "#f5f5f7"
  cloud-5: "#e8e8ed"
  cloud-4: "#d2d2d7"
  slate-3: "#86868b"
  slate-2: "#6e6e73"
  slate-1: "#515154"
  paper-white: "#ffffff"
  signal-red: "#e3342f"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 9vw, 5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.4rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.15em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.warm-amethyst}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.warm-amethyst}"
  button-outline:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.lg}"
  card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Dr. Pattarapornd Suparcha — Medical Portfolio

## 1. Overview

**Creative North Star: "The Wellness Atelier"**

The site reads as a boutique consultation, not a hospital intake form. Apple-derived restraint (monochrome ink-and-cloud neutrals, generous whitespace, soft diffuse shadows) carries the credibility; a single warm amethyst accent carries the personality. The palette and type scale stay minimal so the content — Dr. Pattarapornd's real journey, specialties, and experience — does the persuading, not decoration.

This system explicitly rejects the salesy aesthetic-clinic playbook: no discount banners, no countdown urgency, no stock-photo clutter, no pushy CTAs. It also rejects the cold, impersonal end of "luxury minimal" — the warmth has to be legible in the type, the copy, and the motion, not just implied by restraint.

**Key Characteristics:**
- One accent color (warm amethyst), used sparingly against a near-monochrome ink/cloud neutral system
- Soft, ambient shadows (`shadow-apple-*`) rather than hard drop shadows or flat cards
- Large, confident display type for hero moments, tightly tracked negative letter-spacing
- Small tracked-uppercase labels used only for eyebrow/kicker text, never for body copy
- Calm, physics-based motion (float, fade-up, scroll-pulse) — nothing bouncy or attention-grabbing

## 2. Colors

A near-monochrome neutral system (ink black through cloud grey to white) with one warm accent that appears sparingly — on primary CTAs, links, the hero gradient treatment, and key numerals.

### Primary
- **Warm Amethyst** (#7c3aed): The single brand accent. Primary buttons, active nav states, key stat numerals, focus rings. Reserved for moments that need to draw the eye — not a background color.

### Neutral
- **Ink Black** (#1d1d1f): Primary text color, headline color on light surfaces.
- **Cloud 6** (#f5f5f7): Secondary/muted surface background (section alternation, subtle card fills).
- **Cloud 5** (#e8e8ed): Border and divider color.
- **Cloud 4** (#d2d2d7): Scrollbar thumb, disabled-state fills.
- **Slate 3 / 2 / 1** (#86868b / #6e6e73 / #515154): Muted text ramp — captions, secondary copy, de-emphasized labels. Slate 1 is the darkest of the three and is the floor for any text that must still hit body contrast.
- **Paper White** (#ffffff): Page background, card surfaces.

### Named Rules
**The One Accent Rule.** Warm Amethyst is the only saturated color in the system. It never appears as a background fill larger than a button or icon chip — its rarity is what makes it feel considered rather than decorative.

**The No-Gradient-Text Rule.** The existing `.gradient-text` utility (amethyst-to-lighter-violet background-clip) is prohibited going forward — gradient text reads as decorative flourish, not brand voice. Use solid Warm Amethyst or Ink Black and lean on weight/size for emphasis instead.

## 3. Typography

**Display Font:** -apple-system, BlinkMacSystemFont, "SF Pro Display" (with Helvetica Neue, Arial fallback)
**Body Font:** -apple-system, BlinkMacSystemFont, "SF Pro Text" (with Helvetica Neue, Arial fallback)

**Character:** One system-font family in multiple weights, not a pairing — matches Apple's own restraint. Warmth comes from generous line-height and softened tracking on body copy, not from a second typeface.

### Hierarchy
- **Display** (700, `clamp(2rem, 9vw, 5rem)`, line-height 1, tracking -0.02em): Hero headline only — the single largest text moment on the page.
- **Headline** (700, `clamp(2rem, 4.5vw, 3.25rem)`, line-height 1.1, tracking -0.02em): Section titles (About, Specialties, Journey, Experience, Skills, Contact).
- **Title** (700, `clamp(1.4rem, 3vw, 2rem)`, line-height 1.2): Card/entry titles within a section (a specialty name, a journey milestone).
- **Body** (400, 1rem, line-height 1.6, max 65–75ch): Paragraph copy — philosophy statements, descriptions, bios.
- **Label** (500, 13px, tracking 0.15em, uppercase): Eyebrow/kicker text only (e.g. the hero's small caps line). Never used for body or button copy.

### Named Rules
**The Single-Family Rule.** Every weight on the page traces back to the system-font stack. Do not introduce a second typeface for "editorial contrast" — the restraint is the point.

## 4. Elevation

Depth is ambient, not structural: shadows are soft, diffuse, and present at rest on any surface that sits above the page (cards, nav, floating CTAs), rather than appearing only on hover. The `shadow-apple-*` scale defines this — low blur-to-spread ratio kept deliberately gentle so nothing reads as a hard drop shadow.

### Shadow Vocabulary
- **shadow-apple-sm** (`0 1px 2px rgba(0,0,0,0.04), 0 4px 12px -2px rgba(0,0,0,0.06)`): Resting state for small elements — buttons, chips, nav bar.
- **shadow-apple** (`0 2px 4px rgba(0,0,0,0.04), 0 8px 24px -4px rgba(0,0,0,0.08)`): Default card elevation.
- **shadow-apple-lg** (`0 4px 8px rgba(0,0,0,0.04), 0 16px 48px -8px rgba(0,0,0,0.12)`): Featured/hero cards, modals, anything that should feel like it's floating above the page.

### Named Rules
**The Ambient-Not-Reactive Rule.** Shadows describe a surface's resting elevation, not its interaction state. Don't add shadow only on hover — if a card should feel raised, it's raised at rest; hover can deepen it slightly (`shadow-apple` → `shadow-apple-lg`), never invent it from nothing.

## 5. Components

### Buttons
- **Shape:** Rounded corners (8px, `rounded-lg`).
- **Primary:** Warm Amethyst background, white text, `h-9 px-4 py-2` padding, `shadow` at rest. Soft and reassuring: no sharp edges, no aggressive scale-up on press (`active:scale-95` only).
- **Hover / Focus:** Background dims to 90% opacity on hover; 1px amethyst focus ring on keyboard focus (`focus-visible:ring-1 ring-ring`).
- **Outline / Ghost:** White or transparent background, Ink Black text, border in Cloud 5 — used for secondary actions (e.g. "Download CV" next to a primary "Contact" CTA).

### Cards
- **Corner Style:** 8px radius (`rounded-lg`), matching buttons.
- **Background:** Paper White, occasionally Cloud 6 for alternating section rhythm.
- **Shadow Strategy:** `shadow-apple` at rest; see Elevation.
- **Border:** 1px Cloud 5, used alongside the shadow rather than instead of it — the border defines edge, the shadow defines lift.
- **Internal Padding:** 24px (`p-6`), header/content split with 0 top-padding on content to sit flush under the header.

### Navigation
- Sticky top nav, glass-effect surface (`rgba(255,255,255,0.72)` + `backdrop-filter: saturate(180%) blur(20px)`) — the one deliberate use of glassmorphism in the system, justified because it's solving a real problem (content scrolling underneath a fixed bar), not decoration.
- Link states: Slate 2 default, Ink Black on hover/active, Warm Amethyst reserved for the active section indicator only.

### Hero / Stat Numerals
- Large stat numbers (`text-3xl font-bold leading-none`) sit in white on the hero's dark/photo background — the one place Display-scale type appears outside the H1 itself.

## 6. Do's and Don'ts

### Do:
- **Do** keep Warm Amethyst (#7c3aed) to a single accent role — CTAs, active states, key numerals. Its rarity is the point.
- **Do** use soft, ambient shadows (`shadow-apple-*`) for any surface that needs to feel raised; keep blur high and opacity low (≤0.12).
- **Do** cap body paragraph width at 65–75ch and keep line-height at 1.6 for the warm, readable feel the brand personality calls for.
- **Do** use `prefers-reduced-motion` fallbacks for every animation (float, fade-up, scroll-pulse) — already implemented in globals.css; keep it that way for any new motion.
- **Do** let real content (credentials, timeline, specialties) carry credibility, per PRODUCT.md's "credibility through specificity" principle.

### Don't:
- **Don't** ship a salesy aesthetic-clinic ad: no discount banners, countdown timers, before/after sliders, or urgency-driven CTAs. This is a direct PRODUCT.md anti-reference.
- **Don't** let the site read as a generic corporate hospital site — no stock-photo grids, no impersonal boilerplate copy.
- **Don't** use `.gradient-text` (background-clip gradient) going forward — solid amethyst or ink black only.
- **Don't** introduce a second typeface. The single-system-font restraint is deliberate, not a placeholder.
- **Don't** use the 13px tracked-uppercase label style for anything but a true eyebrow/kicker — never for buttons, nav, or body text.
- **Don't** add glassmorphism anywhere except the sticky nav, where it solves a real legibility problem. Anywhere else, it's decoration.
