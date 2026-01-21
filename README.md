# pattarapornd-web

## 🏥 3D Medical Portfolio Website

A stunning, modern portfolio website showcasing medical excellence and aesthetic mastery. Built with cutting-edge web technologies and featuring sophisticated 3D animations.

![Portfolio Preview](https://github.com/user-attachments/assets/f4c73e1e-c038-437c-a78e-6c6cd174f637)

## ✨ Features

- **3D Interactive Background**: Dynamic Three.js-powered 3D sphere animation
- **Smooth Animations**: Apple-inspired transitions using Framer Motion
- **Medical Specialties Showcase**:
  - 🤖 Medical AI & Diagnostics
  - 🩺 General Practice Expertise
  - ✨ Anti-aging & Regenerative Medicine
  - 💎 Aesthetic Medicine
  - 🎵 Singing Bowl Therapy
  - 🧘 Thai Massage
- **Professional Experience Timeline**: Detailed work history with achievements
- **Education & Certifications**: Academic qualifications and professional credentials
- **Contact Form**: Interactive contact section with office hours
- **Fully Responsive**: Optimized for all devices and screen sizes

## 🚀 Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS v4
- **Build Tool**: Turbopack
- **Type Safety**: TypeScript

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

## 🎨 Design Philosophy

The website embodies a sophisticated medical aesthetic with:
- Clean, professional color palette (medical blues and teals)
- Smooth, Apple-like transitions and interactions
- Intuitive navigation and user experience
- Accessibility-first approach
- Modern, minimalist design

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── Contact.tsx        # Contact section with form
│   ├── Education.tsx      # Education & certifications
│   ├── Experience.tsx     # Professional experience
│   ├── Hero.tsx           # Hero section with CTAs
│   ├── MedicalSpecialties.tsx  # Medical specialties grid
│   └── ThreeBackground.tsx     # 3D background animation
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Tailwind CSS

Custom medical-themed color palette defined in `tailwind.config.ts`:
- `medical-primary`: Main brand color
- `medical-secondary`: Accent color
- `medical-accent`: Light background
- `medical-dark`: Dark text/backgrounds
- `medical-light`: Light backgrounds

### Custom Animations

- `float`: Floating effect for decorative elements
- `pulse-slow`: Slow pulsing animation
- `fade-in`: Fade in transition
- `slide-up`: Slide up with fade

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

## 📄 License

ISC

## 👤 Author

Created with precision and care for showcasing medical excellence.
