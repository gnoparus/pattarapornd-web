import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Portfolio - Medical Excellence & Aesthetic Mastery',
  description: 'Comprehensive portfolio showcasing expertise in Medical AI, General Practice, Anti-aging Medicine, Aesthetic Treatments, and Holistic Wellness Therapies',
  keywords: ['medical AI', 'diagnostics', 'anti-aging', 'aesthetic medicine', 'singing bowl therapy', 'Thai massage', 'regenerative medicine'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gradient-to-br from-medical-light via-white to-medical-accent">
        {children}
      </body>
    </html>
  )
}
