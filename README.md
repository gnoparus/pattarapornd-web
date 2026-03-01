# Dr. Pattarapornd Suparcha — Professional Medical Portfolio

## 🏥 Elegant Medical & Wellness Portfolio Website

A modern portfolio website showcasing Dr. Pattarapornd Suparcha's medical expertise in anti-aging, aesthetic medicine, and holistic wellness. Built with Next.js, Three.js, and Framer Motion featuring sophisticated animations and an Apple-inspired purple design.

🔗 **Live site:** [pattarapornd.com](https://pattarapornd.com)

## ✨ Features

- **Apple-Inspired Purple Design** — Minimal, elegant UI with a curated purple color palette
- **3D Interactive Background** — Dynamic Three.js-powered sphere animation
- **Smooth Animations** — Apple-style transitions powered by Framer Motion
- **Mobile-First & Responsive** — Optimized for all devices and screen sizes
- **Medical Specialties Showcase**:
  - 🩺 General Practice & Preventive Medicine
  - ✨ Anti-aging & Regenerative Medicine
  - 💎 Aesthetic Medicine
  - 🧘 Traditional Thai Massage
  - 🎵 Singing Bowl Sound Healing
  - 🎨 Artistic & Creative Wellness
- **Professional Experience Timeline** — Work history including:
  - Inspire IVF Thailand — Wellness Department (Current)
  - Phyathai Nawamin Hospital
  - CMC Training Center — Academy Aesthetic Training
- **Education & Training Journey** — Degrees and certifications with downloadable CV
- **Professional Skills** — Critical thinking, adaptability, collaboration, tech-savvy
- **Achievements & Volunteering** — Community service and professional development
- **Contact Section** — LinkedIn, Facebook, and location info
- **Navigation Bar** — Smooth-scrolling sticky navigation

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Static Export) |
| **Language** | TypeScript |
| **UI Components** | shadcn/ui (Card, Button) |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Animations** | Framer Motion |
| **Styling** | Tailwind CSS v4 with custom purple palette |
| **Icons** | Lucide React |
| **Deployment** | GitHub Pages with custom domain |

## 📁 Project Structure

```
├── app/
│   ├── globals.css             # Global styles & purple theme tokens
│   ├── layout.tsx              # Root layout with metadata & fonts
│   └── page.tsx                # Main page (assembles all sections)
├── components/
│   ├── Navigation.tsx          # Sticky navigation bar
│   ├── Hero.tsx                # Hero section with introduction
│   ├── About.tsx               # About section with philosophy
│   ├── MedicalSpecialties.tsx  # Specialties grid
│   ├── Journey.tsx             # Education & training timeline
│   ├── Experience.tsx          # Professional experience timeline
│   ├── Skills.tsx              # Skills showcase
│   ├── AchievementsVolunteering.tsx  # Achievements & volunteering
│   ├── Contact.tsx             # Contact with social links
│   ├── ThreeBackground.tsx     # 3D background animation
│   └── ui/                    # shadcn/ui primitives (Card, Button)
├── lib/
│   ├── unsplashImages.ts       # Image configuration
│   └── utils.ts                # Utility functions (cn)
├── public/                     # Static assets (photos, CV PDF, CNAME)
├── next.config.js              # Static export & image config
└── tsconfig.json               # TypeScript configuration
```

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the website locally.

## 🌐 Deployment

### GitHub Pages with Custom Domain

The site is automatically deployed to GitHub Pages on push to `main`:

- **Domain:** [pattarapornd.com](https://pattarapornd.com)
- **Build:** Static export via `next build` → `out/` directory
- **CI/CD:** GitHub Actions workflow handles build and deploy
- **DNS:** CNAME configured to point to GitHub Pages

## 🎨 Design System

### Purple Color Palette

```
--color-medical-primary:   #7C3AED  (Primary purple)
--color-medical-secondary: #A78BFA  (Light purple)
--color-medical-accent:    #F3F0FF  (Very light purple bg)
--color-medical-dark:      #4C1D95  (Dark purple)
--color-medical-light:     #FAF5FF  (Lightest purple)
```

### Animations

- `float` — Floating effect for decorative elements
- `pulse-slow` — Slow pulsing animation
- `fade-in` / `slide-up` — Entry transitions
- Framer Motion — All interactive scroll-triggered animations

---

Created with precision and care for showcasing medical excellence and holistic wellness.
