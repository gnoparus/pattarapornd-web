'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Stethoscope, Sparkles, Gem, Music, User, Palette } from 'lucide-react'

const specialties = [
  {
    id: 1,
    title: 'General Practice Expertise',
    description: 'Comprehensive primary care services with a focus on preventive medicine, evidence-based treatment, and patient-centered care',
    icon: Stethoscope,
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    id: 2,
    title: 'Anti-aging & Regenerative Medicine',
    description: 'Advanced therapies for cellular rejuvenation, hormone optimization, and longevity enhancement using cutting-edge medical science',
    icon: Sparkles,
    gradient: 'from-violet-500 to-violet-700',
  },
  {
    id: 3,
    title: 'Aesthetic Medicine',
    description: 'Non-invasive cosmetic procedures, dermal fillers, skin rejuvenation, and beauty enhancement treatments with artistic precision',
    icon: Gem,
    gradient: 'from-pink-500 to-pink-700',
  },
  {
    id: 4,
    title: 'Thai Massage Therapy',
    description: 'Traditional Thai healing massage combining acupressure, yoga-like stretches, and energy line work for holistic wellness',
    icon: User,
    gradient: 'from-teal-500 to-teal-700',
  },
  {
    id: 5,
    title: 'Singing Bowl Sound Healing',
    description: 'Ancient Tibetan sound healing techniques using singing bowls for stress reduction, energy balance, and deep relaxation',
    icon: Music,
    gradient: 'from-amber-500 to-amber-700',
  },
  {
    id: 6,
    title: 'Artistic & Creative Wellness',
    description: 'Combining medical expertise with artistic sensibility in drawing and creative expression for therapeutic healing',
    icon: Palette,
    gradient: 'from-indigo-500 to-indigo-700',
  },
]

function SpecialtyCard({ specialty, index }: { specialty: typeof specialties[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = specialty.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="h-full hover:border-primary hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <motion.div 
            className={`w-14 h-14 rounded-lg bg-gradient-to-br ${specialty.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <CardTitle className="font-display">
            {specialty.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="leading-relaxed text-base">
            {specialty.description}
          </CardDescription>
        </CardContent>
        
        {/* Decorative gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`}></div>
      </Card>
    </motion.div>
  )
}

export default function MedicalSpecialties() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="section py-24 px-6 sm:px-8 lg:px-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wide mb-3">Services</p>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Areas of Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive healthcare solutions blending modern medical science with traditional healing practices
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={specialty.id} specialty={specialty} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
