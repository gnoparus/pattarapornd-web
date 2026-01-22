'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, Download, Award, Brain } from 'lucide-react'

export default function Journey() {
  const education = [
    {
      year: '2015',
      title: 'Doctor of Medicine (M.D.)',
      institution: 'Rangsit University',
      description: 'Graduated with honors, focusing on internal medicine and dermatology fundamentals. Completed comprehensive clinical rotations across Thailand\'s top teaching hospitals.',
      icon: GraduationCap,
    },
    {
      year: '2018',
      title: 'Aesthetic Medicine',
      institution: 'Chiang Mai University',
      description: 'Advanced certification in non-invasive cosmetic procedures and facial anatomy.',
      icon: Award,
    },
    {
      year: '2018',
      title: 'Anti-Aging Science',
      institution: 'Dhurakij Pundit University',
      description: 'Specialized training in integrative wellness and age-management protocols.',
      icon: Award,
    },
  ]

  return (
    <section id="education" className="relative py-24 bg-white overflow-hidden">
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Curriculum Vitae</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">The Journey to Holistic Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between timeless medical wisdom and futuristic technology. From rigorous foundations at Rangsit University to the forefront of AI-driven aesthetic medicine.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button size="lg" variant="outline" className="rounded-full">
              <Download className="w-4 h-4 mr-2" />
              Download Full CV
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full">
              View Certificates
            </Button>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-purple-300 to-transparent" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg transform -translate-x-1/2" />

                {/* Content */}
                <div className={`lg:text-${index % 2 === 0 ? 'right' : 'left'} pl-20 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                  <Card className="p-8 hover:shadow-xl transition-shadow border-violet-100">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-primary font-semibold text-sm mb-1">{item.year}</div>
                        <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                        <p className="text-primary/70 font-medium">{item.institution}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-linear-to-br from-primary to-purple-600 text-white p-12 border-none shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-white/70 text-sm font-semibold uppercase tracking-wider">● Current Focus</div>
                  <h3 className="text-3xl font-bold">AI-Driven Healthcare Integration</h3>
                </div>
              </div>
              <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-3xl">
                Pioneering the use of artificial intelligence for hyper-personalized skin analysis and predictive aging models. Combining data science with dermatology.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  Machine Learning
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  Data Analysis
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-primary/20 mb-4">"</div>
            <blockquote className="text-2xl lg:text-3xl font-display italic text-foreground mb-6 leading-relaxed">
              True aesthetic medicine isn't just about correcting flaws; it's about understanding the biological narrative of the patient and using technology to rewrite it for longevity.
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
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-violet-100/20 rounded-full blur-3xl -z-10" />
    </section>
  )
}
