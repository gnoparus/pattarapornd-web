'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Brain, Stethoscope, Sparkles, Gem, Music, User } from 'lucide-react'

const specialties = [
  {
    id: 1,
    title: 'Medical AI & Diagnostics',
    description: 'Leveraging artificial intelligence for precision diagnostics, predictive analytics, and personalized treatment plans',
    icon: Brain,
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    title: 'General Practice Expertise',
    description: 'Comprehensive primary care services with a focus on preventive medicine and patient-centered care',
    icon: Stethoscope,
    gradient: 'from-green-500 to-green-700',
  },
  {
    id: 3,
    title: 'Anti-aging & Regenerative Medicine',
    description: 'Advanced therapies for cellular rejuvenation, hormone optimization, and longevity enhancement',
    icon: Sparkles,
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    id: 4,
    title: 'Aesthetic Medicine',
    description: 'Non-invasive cosmetic procedures, dermal fillers, and skin rejuvenation treatments for natural beauty enhancement',
    icon: Gem,
    gradient: 'from-pink-500 to-pink-700',
  },
  {
    id: 5,
    title: 'Singing Bowl Therapy',
    description: 'Ancient Tibetan sound healing techniques for stress reduction, energy balance, and deep relaxation',
    icon: Music,
    gradient: 'from-amber-500 to-amber-700',
  },
  {
    id: 6,
    title: 'Thai Massage',
    description: 'Traditional Thai healing massage combining acupressure, yoga-like stretches, and energy line work',
    icon: User,
    gradient: 'from-teal-500 to-teal-700',
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
      <Card className="h-full border-medical-accent hover:border-medical-secondary hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <motion.div 
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <CardTitle className="text-2xl text-medical-dark font-display">
            {specialty.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 leading-relaxed text-base">
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
    <section id="specialties" className="section py-24 px-4 bg-gradient-to-b from-transparent to-medical-accent/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medical-secondary rounded-full blur-3xl opacity-5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-medical-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Areas of Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
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
