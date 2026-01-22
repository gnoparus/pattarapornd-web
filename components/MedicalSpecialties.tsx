'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Stethoscope, Sparkles, Activity, Wind, Music, Palette } from 'lucide-react'

export default function MedicalSpecialties() {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Practice',
      description: 'Comprehensive primary care with preventive medicine, evidence-based treatment, and patient-centered approach for all ages',
      color: 'from-blue-500/10 to-blue-600/10',
      iconColor: 'text-blue-600',
    },
    {
      icon: Activity,
      title: 'Anti-aging Medicine',
      description: 'Advanced cellular rejuvenation, hormone optimization, and longevity enhancement using cutting-edge regenerative science',
      color: 'from-green-500/10 to-green-600/10',
      iconColor: 'text-green-600',
    },
    {
      icon: Sparkles,
      title: 'Aesthetic Medicine',
      description: 'Non-invasive cosmetic procedures, dermal fillers, skin rejuvenation, and beauty enhancement with artistic precision',
      color: 'from-purple-500/10 to-purple-600/10',
      iconColor: 'text-purple-600',
    },
    {
      icon: Wind,
      title: 'Thai Massage Therapy',
      description: 'Traditional healing massage combining acupressure, yoga-like stretches, and energy line work for holistic wellness',
      color: 'from-orange-500/10 to-orange-600/10',
      iconColor: 'text-orange-600',
    },
    {
      icon: Music,
      title: 'Sound Healing',
      description: 'Ancient Tibetan singing bowl techniques for stress reduction, energy balance, and deep therapeutic relaxation',
      color: 'from-pink-500/10 to-pink-600/10',
      iconColor: 'text-pink-600',
    },
    {
      icon: Palette,
      title: 'Creative Wellness',
      description: 'Integrating medical expertise with artistic expression in drawing and creative therapies for holistic healing',
      color: 'from-teal-500/10 to-teal-600/10',
      iconColor: 'text-teal-600',
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-linear-to-br from-violet-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">Comprehensive Care Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Blending modern medical science with traditional healing practices for complete wellness
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-violet-100 group cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span className="ml-2">→</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10" />
    </section>
  )
}
