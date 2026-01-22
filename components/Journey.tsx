'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Sparkles, Bot, FileDown, FileCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const educationTimeline = [
  {
    year: '2015',
    title: 'Doctor of Medicine (M.D.)',
    institution: 'Rangsit University',
    description: 'Graduated with honors, focusing on internal medicine and dermatology fundamentals. Completed comprehensive clinical rotations across Thailand\'s top teaching hospitals.',
    icon: GraduationCap,
    color: 'purple',
  },
  {
    year: '2018',
    title: 'Aesthetic Medicine',
    institution: 'Chiang Mai University',
    description: 'Advanced certification in non-invasive cosmetic procedures and facial anatomy.',
    icon: Sparkles,
    color: 'blue',
  },
  {
    year: '2018',
    title: 'Anti-Aging Science',
    institution: 'Dhurakij Pundit University',
    description: 'Specialized training in integrative wellness and age-management protocols.',
    icon: Award,
    color: 'purple',
  },
]

export default function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section py-24 px-4 relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-10 -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wide mb-3">Curriculum Vitae</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            The Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Holistic Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Bridging the gap between timeless medical wisdom and futuristic technology. 
            From rigorous foundations at Rangsit University to the forefront of AI-driven 
            aesthetic medicine.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" className="flex items-center space-x-2">
                <FileDown className="w-5 h-5" />
                <span>Download Full CV</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="flex items-center space-x-2">
                <FileCheck className="w-5 h-5" />
                <span>View Certificates</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {educationTimeline.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start space-x-6">
                  {/* Year Badge */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color === 'purple' ? 'from-primary to-primary/90' : 'from-primary/80 to-primary/70'} flex items-center justify-center shadow-lg`}>
                      <span className="text-primary-foreground font-bold text-lg">{item.year}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                          <p className="text-primary font-semibold mb-3">{item.institution}</p>
                          <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                        </div>
                        <div className={`ml-4 w-12 h-12 rounded-xl ${item.color === 'purple' ? 'bg-primary/10' : 'bg-primary/10'} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${item.color === 'purple' ? 'text-primary' : 'text-primary'}`} />
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Current Focus - AI-Driven Healthcare */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-10 md:p-12 shadow-2xl text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <p className="text-primary/80 font-semibold uppercase tracking-wide mb-3">● Current Focus</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">AI-Driven Healthcare Integration</h3>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
              Pioneering the use of artificial intelligence for hyper-personalized skin analysis 
              and predictive aging models. Combining data science with dermatology.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-semibold">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-semibold">
                Data Analysis
              </span>
            </div>
          </div>

          {/* Bot Icon */}
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center opacity-20">
            <Bot className="w-12 h-12 text-primary-foreground" />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <Card className="border-l-4 border-primary bg-gradient-to-br from-primary/5 to-card">
            <CardContent className="p-8 md:p-10">
              <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-4">
                "True aesthetic medicine isn't just about correcting flaws; it's about understanding 
                the biological narrative of the patient and using technology to rewrite it for longevity."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">P</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Dr. Pattarapornd Suparcha</p>
                  <p className="text-muted-foreground text-sm">M.D., Aesthetic Specialist</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
