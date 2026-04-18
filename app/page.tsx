'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MedicalSpecialties from '@/components/MedicalSpecialties'
import Journey from '@/components/Journey'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import AchievementsVolunteering from '@/components/AchievementsVolunteering'
import Contact from '@/components/Contact'
import WebMcpProvider from '@/components/WebMcpProvider'

export default function Home() {
  return (
    <>
      <WebMcpProvider />
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <MedicalSpecialties />
        <Journey />
        <Experience />
        <Skills />
        <AchievementsVolunteering />
        <Contact />
      </main>
    </>
  )
}
