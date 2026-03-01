'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Building2, Check } from 'lucide-react'
import { experienceImages } from '@/lib/unsplashImages'

export default function Experience() {
  const experiences = [
    {
      period: 'Feb 2026 - Present',
      title: 'Anti-Aging, Aesthetics & General Practitioner',
      organization: 'Inspire IVF Thailand — Wellness Department',
      location: 'Bangkok, Thailand',
      description: 'Inspire IVF is a new and luxurious, purpose-built, state-of-the-art, all-inclusive Fertility Centre, located in the heart of Bangkok, Thailand. Dr. Pattarapornd (Ploy) offers personalized one-on-one care and attention in the Wellness Department, combining anti-aging medicine, aesthetic treatments, and general practice with a holistic approach to patient wellbeing.',
      achievements: [
        'Delivering specialized anti-aging and aesthetic medicine treatments in a world-class fertility and wellness center',
        'Providing comprehensive general practice care with personalized attention to international and local clients',
        'Integrating holistic wellness approaches with cutting-edge medical technology',
      ],
      image: '/inspire_ivf_clinic101.webp',
    },
    {
      period: 'Jun 2025 - Present',
      title: 'Teacher Assistant',
      organization: 'CMC Training Center',
      location: 'Bangkok, Thailand',
      description: 'Assisting in hands-on training sessions for medical professionals seeking to learn and refine aesthetic procedures.',
      achievements: [
        'Facilitating Basic Aesthetic Hands-on training courses',
        'Guiding trainees through practical aesthetic techniques and procedures',
      ],
      image: '/pattarapornd-female-cosmetology-studio-procedures.jpg',
    },
    {
      period: 'May 2025 - Present',
      title: 'Training Assistant',
      organization: 'Academy Aesthetic Training',
      location: 'Bangkok, Thailand',
      description: 'Supporting advanced aesthetic training programs for medical practitioners looking to expand their expertise in facial aesthetics.',
      achievements: [
        'Assisting in Basic Aesthetic and Advanced Filler Hands-on training',
        'Helping trainees develop precision techniques in injectable treatments',
      ],
      image: '/pattarapornd-cosmetic-botox-injection-female-forehead.jpg',
    },
    {
      period: 'Dec 2023 - Jan 2026',
      title: 'General Practitioner & OHS Specialist',
      organization: 'Phyathai Nawamin Hospital',
      location: 'Bangkok, Thailand',
      description: 'Served in multiple capacities over 2 years at one of Bangkok\'s premier hospitals, including general practice, occupational health & safety, and founding the Tele Care Center.',
      achievements: [
        'Occupational Health and Safety Specialist in the Check-up Department (Nov 2025 – Jan 2026)',
        'General Practitioner in the Check-up Department (Jul 2025 – Jan 2026)',
        'Founding member of the Tele Care Center, SSO Department (Dec 2023 – Jan 2026)',
      ],
      image: '/pattarapornd-phayathai-navamin-hospital101.png',
    },
    {
      period: 'Jan 2022 - Present',
      title: 'Digital Commercial Artist',
      organization: 'Tomodachi T-shirt',
      location: 'Thailand',
      description: 'Creating digital commercial artwork and designs for a creative apparel brand, combining artistic sensibility with commercial design.',
      achievements: [
        'Producing original digital artwork for commercial merchandise',
        'Blending artistic creativity with commercial brand identity',
      ],
      image: '/avatar with bg.JPG',
    },
  ]

  return (
    <section id="experience" className="relative py-24 bg-linear-to-br from-violet-50/30 to-white overflow-hidden">
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Career Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A decade of dedication to advancing healthcare excellence and patient care
          </p>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-violet-100 shadow-elevated hover:shadow-elevated-lg transition-shadow duration-500">
            <div className="aspect-21/9 lg:aspect-16/5 relative group">
              <Image
                src="/pattarapornd-abstract-blur-defocused-shopping-mall.jpg"
                alt="Abstract blur defocused shopping mall"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-violet-900/70 via-purple-900/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-start px-12">
                <div className="text-white max-w-xl">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-3">Professional Excellence</h3>
                  <p className="text-base lg:text-lg text-white/90">Working as Anti-Aging, Aesthetics & General Practitioner at Inspire IVF — Wellness Department</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.organization}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-xl transition-shadow border-violet-100">
                {/* Featured Image for Inspire IVF */}
                {exp.image && (
                  <div className="mb-6 -mx-8 -mt-8">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={exp.image}
                        alt={exp.organization}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-4 gap-8">
                  {/* Left - Period & Icon */}
                  <div className="lg:col-span-1">
                    <div className="flex lg:flex-col items-start gap-4">
                      <div className="w-14 h-14 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Building2 className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="text-primary font-bold text-sm mb-1">{exp.period}</div>
                        <div className="text-muted-foreground text-sm">{exp.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-4">{exp.organization}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 -right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl -z-10" />
    </section>
  )
}
