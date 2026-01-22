'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Sparkles, Heart, Activity } from 'lucide-react'
import { heroImages } from '@/lib/unsplashImages'

export default function About() {
  const services = [
    {
      icon: Sparkles,
      title: 'Aesthetic Artistry',
      description: 'Merging medical precision with artistic vision for natural beauty enhancement. Advanced injectables, laser treatments, and skin rejuvenation delivered with an artist\'s eye for harmony and balance.',
    },
    {
      icon: Heart,
      title: 'Anti-Aging & Wellness',
      description: 'Cellular rejuvenation and regenerative medicine techniques that turn back time naturally. Combining cutting-edge anti-aging treatments with traditional healing practices for holistic vitality.',
    },
    {
      icon: Activity,
      title: 'Holistic Integration',
      description: 'Drawing, Thai massage, and singing bowl therapy complement medical treatments. A creative, multidimensional approach to healing that addresses physical, emotional, and aesthetic wellbeing.',
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
            A physician who approaches medicine as an art form. Specializing in aesthetic medicine, anti-aging treatments, and holistic wellness, Dr. Suparcha believes true beauty emerges when medical precision meets artistic vision.
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
            <div className="relative rounded-3xl overflow-hidden shadow-elevated-lg hover:shadow-2xl transition-shadow duration-500">
              <div className="aspect-3/4 relative group">
                <Image
                  src={heroImages[1].url}
                  alt={heroImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Dr. Pattarapornd Suparcha</h3>
                  <p className="text-sm text-white/90">M.D., Aesthetic Medicine Specialist</p>
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
                  <div className="text-sm text-muted-foreground">M.D., Aesthetic Specialist · Cat Lover 🐱</div>
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
