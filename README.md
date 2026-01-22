# Dr. Pattarapornd Suparcha - Professional Medical Portfolio

## 🏥 Elegant Medical & Wellness Portfolio Website

A stunning, modern portfolio website showcasing Dr. Pattarapornd Suparcha's medical expertise, aesthetic medicine practice, and holistic wellness services. Built with cutting-edge web technologies featuring sophisticated animations and Apple-inspired design.

![Portfolio Preview](https://github.com/user-attachments/assets/f4c73e1e-c038-437c-a78e-6c6cd174f637)

## ✨ Features

- **Apple-Inspired Purple Design**: Minimal, elegant design with purple color scheme
- **3D Interactive Background**: Dynamic Three.js-powered 3D sphere animation
- **Smooth Animations**: Apple-style transitions using Framer Motion
- **Mobile-First & Responsive**: Optimized for all devices and screen sizes
- **Medical Specialties Showcase**:
  - 🩺 General Practice Expertise
  - ✨ Anti-aging & Regenerative Medicine
  - 💎 Aesthetic Medicine
  - 🧘 Traditional Thai Massage
  - 🎵 Singing Bowl Sound Healing
  - 🎨 Artistic & Creative Wellness
- **Professional Experience Timeline**: Detailed work history at:
  - Phyathai Nawamin Hospital
  - Bangson General Clinic
  - Oboun Family Clinic (UC Clinic)
- **Education & Certifications**: 
  - Rangsit University (Rajavithi Hospital) - MD
  - Chiang Mai University - Occupational Medicine
  - Dhurakij Pundit University - Anti-aging Medicine
  - Kasetsart University - Covid-19 & Epidemiology
- **Professional Skills**: Critical thinking, adaptability, collaboration, tech-savvy
- **Achievements & Volunteering**: Community service and professional development
- **Contact Form**: Interactive contact section with office hours
- **Visually Appealing**: High-quality Unsplash images throughout

## 🚀 Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Design System**: Apple-inspired with shadcn/ui components
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion for smooth, interactive animations
- **Styling**: Tailwind CSS v4 with custom purple color palette
- **Images**: Unsplash and Creative Commons licensed images
- **Build Tool**: Turbopack for fast development
- **Type Safety**: Full TypeScript implementation

## 🎨 Design Philosophy

The website embodies a sophisticated medical aesthetic with:
- Elegant purple color palette inspired by Apple design system
- Smooth, Apple-like transitions and interactions
- Mobile-first, responsive design approach
- Minimal and elegant UI with maximum impact
- Accessibility-first approach
- High-quality, visually appealing imagery
- Modern, clean typography

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with purple theme
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── Hero.tsx           # Hero section with Dr. Pattarapornd's introduction
│   ├── MedicalSpecialties.tsx  # Medical specialties grid
│   ├── Experience.tsx     # Professional experience timeline
│   ├── Education.tsx      # Education & certifications
│   ├── Skills.tsx         # Professional skills showcase
│   ├── AchievementsVolunteering.tsx  # Achievements & community service
│   ├── Contact.tsx        # Contact section with form
│   ├── ThreeBackground.tsx     # 3D background animation
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions
│   ├── unsplashImages.ts  # Curated Unsplash images
│   └── utils.ts           # Helper functions
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Tailwind CSS - Purple Theme

Custom medical-themed purple color palette defined in `app/globals.css`:
- `--color-medical-primary: #7C3AED` - Primary purple
- `--color-medical-secondary: #A78BFA` - Light purple
- `--color-medical-accent: #F3F0FF` - Very light purple background
- `--color-medical-dark: #4C1D95` - Dark purple
- `--color-medical-light: #FAF5FF` - Lightest purple

### Custom Animations

- `float`: Floating effect for decorative elements
- `pulse-slow`: Slow pulsing animation
- `fade-in`: Fade in transition
- `slide-up`: Slide up with fade
- Framer Motion for all interactive animations

## 🌐 Deployment

### GitHub Pages with Custom Domain

This website is configured for automatic deployment to GitHub Pages with custom domain:

1. **Custom Domain Setup**: 
   - Custom domain: `pattarapornd.com`
   - CNAME file included in `public/` directory
   - DNS configured to point to GitHub Pages

2. **Automatic Deployment**:
   - Push to the `main` branch triggers automatic deployment
   - The GitHub Actions workflow builds and deploys the site
   - Site is available at: `https://pattarapornd.com`

3. **Manual Build**:
   ```bash
   npm run build
   # The static site is exported to the 'out' directory
   ```

### Other Platforms

The website can also be deployed to:
- Vercel
- Netlify
- AWS Amplify
- Any static hosting platform

## 👤 About Dr. Pattarapornd Suparcha

**Education:**
- Doctor of Medicine (M.D.) - Rangsit University (Rajavithi Hospital) College of Medicine
- Certificate in Basic Occupational Medicine - Chiang Mai University
- Certificate in Basic Anti-aging and Regenerative Medicine - Dhurakij Pundit University
- Covid-19 and Epidemiology - Kasetsart University

**Professional Experience:**
- General Practitioner at Phyathai Nawamin Hospital
- General Practitioner at Bangson General Clinic
- General Practitioner at Oboun Family Clinic (UC Clinic)

**Specialties:**
- General Practice & Preventive Medicine
- Anti-aging & Regenerative Medicine
- Aesthetic Medicine
- Traditional Thai Massage
- Tibetan Singing Bowl Sound Healing
- Artistic & Creative Wellness Approaches

---

Created with precision and care for showcasing medical excellence and holistic wellness.
