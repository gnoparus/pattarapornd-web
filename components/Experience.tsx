'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Building2, Check } from 'lucide-react'
import { experienceImages } from '@/lib/unsplashImages'

export default function Experience() {
  const experiences = [
    {
      period: '2018 - Present',
      title: 'General Practitioner',
      organization: 'Phyathai Nawamin Hospital',
      location: 'Bangkok, Thailand',
      description: 'Providing holistic medical care in one of Bangkok\'s premier hospitals, diagnosing complex cases and applying evidence-based medicine in a multidisciplinary environment.',
      achievements: [
        'Delivered comprehensive patient-centered care across 500+ diverse medical cases annually',
        'Collaborated with multidisciplinary teams on data-driven treatment protocols',
        'Implemented healthcare data workflows that improved patient outcomes by 25%',
      ],
    },
    {
      period: '2016 - 2018',
      title: 'General Practitioner',
      organization: 'Bangson General Clinic',
      location: 'Bangkok, Thailand',
      description: 'Delivered efficient outpatient care in a fast-paced clinic environment, building strong patient relationships through empathetic communication.',
      achievements: [
        'Provided efficient and compassionate outpatient care to 3000+ patients',
        'Built lasting patient relationships through empathetic communication',
        'Developed critical decision-making skills in high-pressure emergency situations',
      ],
    },
    {
      period: '2015 - 2016',
      title: 'General Practitioner',
      organization: 'Oboun Family Clinic (UC Clinic)',
      location: 'Thailand',
      description: 'Managed comprehensive care under Thailand\'s Universal Coverage Scheme, delivering quality healthcare with optimized resources.',
      achievements: [
        'Delivered quality care within Universal Coverage Scheme constraints',
        'Managed comprehensive family medicine services for diverse patient populations',
        'Developed expertise in resource-optimized healthcare delivery',
      ],
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
                src={experienceImages[0].url}
                alt={experienceImages[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-r from-violet-900/70 via-purple-900/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-start px-12">
                <div className="text-white max-w-xl">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-3">Professional Excellence</h3>
                  <p className="text-base lg:text-lg text-white/90">Delivering exceptional patient care through innovation, compassion, and expertise</p>
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
