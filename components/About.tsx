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
      title: 'Aesthetic Medicine & Training',
      description: 'Expert in filler and aesthetic techniques, actively contributing as a Teaching Assistant for hands-on aesthetic training programs. Delivering natural beauty enhancement with medical precision and artistic vision.',
    },
    {
      icon: Heart,
      title: 'Anti-Aging & Regenerative Science',
      description: 'Currently pursuing M.Sc. in Anti-Aging and Regenerative Science, serving as Class President. Combining cutting-edge regenerative medicine with evidence-based anti-aging treatments for holistic vitality.',
    },
    {
      icon: Activity,
      title: 'Occupational Health & General Practice',
      description: 'Comprehensive healthcare services including occupational health and safety protocols, general health check-ups, and patient assessments. A founding member of Tele Care Center initiatives.',
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
            A dedicated medical doctor and General Practitioner with expertise in Occupational Health and Aesthetic Medicine. Currently pursuing an M.Sc. in Anti-Aging and Regenerative Science at Dhurakij Pundit University, Dr. Suparcha bridges clinical practice with education as a Teaching Assistant for aesthetic training programs, while bringing creative vision to every project as a Digital Commercial Artist.
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
            <div className="relative rounded-3xl overflow-hidden shadow-elevated-lg hover:shadow-2xl transition-shadow duration-500 bg-linear-to-br from-violet-100 via-purple-50 to-pink-50">
              <div className="aspect-3/4 relative group flex items-center justify-center p-8">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                  src="/avatar with bg.JPG"
                  alt="Dr. Pattarapornd Suparcha"
                  fill
                  className="object-contain object-center transition-transform duration-700 scale-[0.7] group-hover:scale-[0.75]"
                  priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 via-black/40 to-transparent">
                  <h3 className="text-2xl font-bold mb-1 text-white">Dr. Pattarapornd Suparcha</h3>
                  <p className="text-sm text-white/90">M.D. | General Practitioner | M.Sc. Candidate</p>
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
                <div className="text-xs text-muted-foreground mt-1">General Practitioner</div>
                <div className="text-xs text-muted-foreground">M.Sc. Candidate</div>
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
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 bg-white">
                  <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/avatar transparent bg.png"
                    alt="Dr. Pattarapornd Suparcha"
                    fill
                    className="object-contain object-center transform scale-[0.95]"
                  />
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Dr. Pattarapornd Suparcha</div>
                  <div className="text-sm text-muted-foreground">M.D., General Practitioner · Digital Artist · Cat Lover 🐱</div>
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
