'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Sparkles, Heart, Activity } from 'lucide-react'

export default function About() {
  const services = [
    {
      icon: Sparkles,
      title: 'Aesthetic Excellence',
      description: 'Advanced aesthetic procedures including precision injectables, laser treatments, and skin rejuvenation techniques. Using only FDA-approved technology to ensure optimal safety and natural-looking results.',
    },
    {
      icon: Heart,
      title: 'Holistic Healing',
      description: 'Integrating traditional Thai massage and Tibetan singing bowl therapy for deep cellular relaxation and stress relief. Our treatments heal from within, addressing both body and spirit.',
    },
    {
      icon: Activity,
      title: 'Evidence-Based Care',
      description: 'Committed to continuous learning and staying current with the latest medical research. Every treatment plan is backed by scientific evidence and tailored to individual patient needs.',
    },
  ]

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About the Doctor</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">Meet Dr. Pattarapornd</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bridging rigorous medical training with a passion for holistic healing. Dr. Suparcha believes true beauty radiates from a balance of inner health and outer care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-violet-100 to-purple-100">
              {/* Placeholder for doctor image */}
              <div className="aspect-3/4 flex items-center justify-center">
                <div className="text-center text-violet-400">
                  <div className="text-8xl mb-4">👨‍⚕️</div>
                  <p className="text-sm font-medium px-4">Dr. Pattarapornd Suparcha</p>
                  <p className="text-xs text-violet-300 px-4 mt-2">M.D., Aesthetic Medicine Specialist</p>
                </div>
              </div>
            </div>

            {/* Floating credentials badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-violet-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">M.D.</div>
                <div className="text-xs text-muted-foreground mt-1">Aesthetic Medicine</div>
                <div className="text-xs text-muted-foreground">Specialist</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Services Grid */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-shadow border-violet-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="bg-linear-to-br from-violet-50 to-purple-50 border-violet-100 p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-primary/20 mb-6">"</div>
              <blockquote className="text-2xl lg:text-3xl font-display italic text-foreground mb-8 leading-relaxed">
                My mission is to help patients feel confident and peaceful in their own skin, blending the precision of medical science with the timeless art of healing.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">P</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Dr. Pattarapornd Suparcha</div>
                  <div className="text-sm text-muted-foreground">M.D., Aesthetic Specialist</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-violet-100/20 rounded-full blur-3xl -z-10" />
    </section>
  )
}
