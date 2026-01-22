'use client'

import Hero from '@/components/Hero'
import MedicalSpecialties from '@/components/MedicalSpecialties'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import AchievementsVolunteering from '@/components/AchievementsVolunteering'
import Contact from '@/components/Contact'
import ThreeBackground from '@/components/ThreeBackground'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThreeBackground />
      <Hero />
      <MedicalSpecialties />
      <Experience />
      <Education />
      <Skills />
      <AchievementsVolunteering />
      <Contact />
    </main>
  )
}
