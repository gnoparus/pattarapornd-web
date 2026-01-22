import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Pattarapornd Suparcha | Aesthetic Medicine & Holistic Wellness',
  description: 'Bridging advanced aesthetic medicine with traditional Thai healing for transformative care. Offering General Practice, Anti-aging Medicine, Aesthetic Medicine, Thai Massage, Sound Healing, and Creative Wellness.',
  keywords: ['aesthetic medicine', 'holistic wellness', 'anti-aging', 'Thai massage', 'sound healing', 'general practice', 'Bangkok doctor'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
