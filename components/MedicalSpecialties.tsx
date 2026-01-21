'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const specialties = [
  {
    id: 1,
    title: 'Medical AI & Diagnostics',
    description: 'Leveraging artificial intelligence for precision diagnostics, predictive analytics, and personalized treatment plans',
    icon: '🤖',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    title: 'General Practice Expertise',
    description: 'Comprehensive primary care services with a focus on preventive medicine and patient-centered care',
    icon: '🩺',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 3,
    title: 'Anti-aging & Regenerative Medicine',
    description: 'Advanced therapies for cellular rejuvenation, hormone optimization, and longevity enhancement',
    icon: '✨',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 4,
    title: 'Aesthetic Medicine',
    description: 'Non-invasive cosmetic procedures, dermal fillers, and skin rejuvenation treatments for natural beauty enhancement',
    icon: '💎',
    color: 'from-pink-500 to-pink-700',
  },
  {
    id: 5,
    title: 'Singing Bowl Therapy',
    description: 'Ancient Tibetan sound healing techniques for stress reduction, energy balance, and deep relaxation',
    icon: '🎵',
    color: 'from-amber-500 to-amber-700',
  },
  {
    id: 6,
    title: 'Thai Massage',
    description: 'Traditional Thai healing massage combining acupressure, yoga-like stretches, and energy line work',
    icon: '🧘',
    color: 'from-teal-500 to-teal-700',
  },
]

function SpecialtyCard({ specialty, index }: { specialty: typeof specialties[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-medical-accent hover:border-medical-secondary transform hover:-translate-y-2">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${specialty.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          {specialty.icon}
        </div>
        <h3 className="text-2xl font-bold text-medical-dark mb-4 font-display">
          {specialty.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {specialty.description}
        </p>
        
        {/* Decorative gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
      </div>
    </motion.div>
  )
}

export default function MedicalSpecialties() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="specialties" className="section py-24 px-4 bg-gradient-to-b from-transparent to-medical-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-medical-dark mb-6">
            Areas of Expertise
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive healthcare solutions blending modern medical science with traditional healing practices
          </p>
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
