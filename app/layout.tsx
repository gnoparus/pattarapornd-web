import type { Metadata } from 'next'
import './globals.css'
import { DOCTOR_NAME_EN, DOCTOR_NAME_TH } from '@/lib/profile'

export const metadata: Metadata = {
  title: `${DOCTOR_NAME_EN} (${DOCTOR_NAME_TH}) | General Practitioner & M.Sc. Candidate`,
  description: 'Medical doctor and General Practitioner with expertise in Occupational Health and Aesthetic Medicine. Currently pursuing M.Sc. in Anti-Aging and Regenerative Science. Teaching Assistant for aesthetic training programs and Digital Commercial Artist based in Bangkok, Thailand.',
  keywords: ['general practitioner', 'occupational health', 'aesthetic medicine', 'anti-aging', 'regenerative science', 'Bangkok doctor', 'teaching assistant', 'digital artist', DOCTOR_NAME_TH, 'pattarapornd suparcha'],
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
