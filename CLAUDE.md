# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page Next.js portfolio site for Dr. Pattarapornd Suparcha (aesthetic/anti-aging physician, Bangkok). Deployed to pattarapornd.com via Vercel. See `PRODUCT.md` for product intent (audience, brand personality, anti-references) and `DESIGN.md` for the full design system (colors, type scale, shadows, component rules) — read both before making visual or copy changes, they carry hard "Do/Don't" rules (e.g. no gradient text, one accent color only, no salesy CTAs).

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build (next build)
npm run start    # serve production build
npm run lint     # next lint (eslint-config-next, next/core-web-vitals)
```

No test suite is configured. There is no `typecheck` script; use `npx tsc --noEmit` if type-checking is needed standalone.

## Architecture

- **`app/page.tsx`** is a client component (`'use client'`) that assembles the whole page as a stack of section components from `components/` in order: Navigation, Hero, About, MedicalSpecialties, Journey, Experience, Skills, AchievementsVolunteering, Contact. Adding/reordering a section means editing this list.
- **`components/`** — one component per page section, plus `ui/` for shadcn/ui primitives (Card, Button only). `ThreeBackground.tsx` renders the animated Three.js sphere used behind the hero.
- **`lib/profile.ts` / `lib/site.ts`** are the canonical source for the doctor's name (EN/TH) and site URL — imported by `layout.tsx` (metadata) and `SchemaMarkup.tsx` (JSON-LD `Physician` schema). Update these rather than hardcoding the name/URL elsewhere.
- **Agent/AI-discovery surface**: this site is deliberately built to be legible to AI agents and crawlers, not just browsers. Several pieces work together:
  - `middleware.ts` content-negotiates `/`, `/index`, `/index.html`: if the request's `Accept` header prefers `text/markdown` over HTML, it serves `lib/markdown.ts`'s `homePageMarkdown` string instead of the React page, and always appends `Link` headers pointing at `.well-known` discovery docs.
  - `public/.well-known/` holds machine-readable resources: `agent-skills/index.json`, `mcp/server-card.json`, `openapi.json`, `api-catalog`, OAuth/JWKS metadata, `status`.
  - `public/llms.txt` and `public/index.md` are plain-text/markdown summaries for LLM crawlers.
  - `components/WebMcpProvider.tsx` registers WebMCP tools (`get_profile_summary`, `get_site_resources`) via `navigator.modelContext.provideContext` when the browser supports it.
  - When editing site copy/URLs, keep `lib/markdown.ts`, `public/llms.txt`, `public/index.md`, and the `.well-known/` JSON in sync with what's on the actual page — they're hand-maintained duplicates, not generated.
- **`app/widget-test/`** and **`app/widget-test-prod/`** are hidden (`robots: noindex`) pages for manually testing the embedded TII chat widget (`<script>` from `staging.impactchat.app` / production) in isolation from the main page.
- Images are served unoptimized (`images.unoptimized: true` in `next.config.js`) straight from `public/` — no next/image remote loader config to worry about.
- Path alias `@/*` maps to the repo root (see `tsconfig.json`).

## Design system quick reference

Full rules live in `DESIGN.md`; the essentials that matter for code changes:
- One accent color only — Warm Amethyst `#7c3aed` (`--apple-accent` / `--primary` in `app/globals.css`). Never introduce a second saturated color.
- No gradient text (`.gradient-text` utility is deprecated/prohibited) — use solid amethyst or ink black.
- Single system-font stack everywhere (`-apple-system, BlinkMacSystemFont, "SF Pro Display/Text"...`) — don't add a second typeface.
- Shadows (`shadow-apple-sm` / `shadow-apple` / `shadow-apple-lg`) are ambient — apply at rest, not only on hover.
- No urgency/sales patterns: no countdown timers, discount banners, before/after sliders, or pushy CTAs (hard anti-reference in `PRODUCT.md`).
- All animation must respect `prefers-reduced-motion` (already wired in `globals.css` — preserve this for any new motion in Framer Motion or CSS).
