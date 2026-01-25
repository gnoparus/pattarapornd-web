'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Building2, Check } from 'lucide-react'
import { experienceImages } from '@/lib/unsplashImages'

export default function Experience() {
  const experiences = [
    {
      period: 'Dec 2023 - Jan 2026',
      title: 'General Practitioner – SSO Department',
      organization: 'Phyathai Nawamin Hospital',
      location: 'Bangkok, Thailand',
      description: 'Served as a General Practitioner within the Social Security Office (SSO) department, providing comprehensive medical care to patients covered under the social security scheme.',
      achievements: [
        'Provided quality healthcare services to social security patients',
        'Maintained high standards of patient care and documentation',
        'Collaborated with multidisciplinary healthcare teams',
      ],
    },
    {
      period: 'Jul 2025 - Jan 2026',
      title: 'General Practitioner – Check-up Department',
      organization: 'Phyathai Nawamin Hospital',
      location: 'Bangkok, Thailand',
      description: 'Conducted general health check-ups and comprehensive patient assessments in the Check-up Department.',
      achievements: [
        'Founding member of Tele Care Center',
        'Conducted thorough general health check-ups and assessments',
        'Provided preventive health recommendations to patients',
      ],
    },
    {
      period: 'Nov 2025 - Jan 2026',
      title: 'Occupational Health and Safety Specialist',
      organization: 'Phyathai Nawamin Hospital',
      location: 'Bangkok, Thailand',
      description: 'Part-time role managing occupational health and safety protocols, ensuring workplace safety compliance and employee health standards.',
      achievements: [
        'Managed occupational health and safety protocols',
        'Conducted workplace health assessments',
        'Implemented safety compliance measures',
      ],
    },
    {
      period: 'Jun 2025 - Present',
      title: 'Teaching Assistant',
      organization: 'CMC Training Center',
      location: 'Thailand',
      description: 'Part-time Teaching Assistant specializing in Basic Aesthetic Hands-on training programs, providing hands-on guidance to medical professionals.',
      achievements: [
        'Specialized in Basic Aesthetic Hands-on training',
        'Mentored medical professionals in aesthetic techniques',
        'Contributed to curriculum development',
      ],
    },
    {
      period: 'May 2025 - Present',
      title: 'Training Assistant',
      organization: 'Academy Aesthetic Training',
      location: 'Thailand',
      description: 'Part-time Training Assistant for Basic Aesthetic and Advanced Filler Hands-on procedures, supporting professional aesthetic education.',
      achievements: [
        'Assisted in Basic Aesthetic training programs',
        'Supported Advanced Filler Hands-on procedures training',
        'Provided practical guidance to trainees',
      ],
    },
    {
      period: 'Jan 2022 - Present',
      title: 'Digital Commercial Artist',
      organization: 'Tomodachi T-shirt',
      location: 'Thailand',
      description: 'Freelance digital commercial artist creating unique designs that blend scientific precision with creative vision.',
      achievements: [
        'Created digital commercial art and designs',
        'Developed unique visual concepts for merchandise',
        'Combined artistic skills with commercial applications',
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
            A diverse career bridging clinical practice, education, and creative arts
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
