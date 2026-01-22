'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Zap, Users, Cpu } from 'lucide-react'

const skills = [
  {
    id: 1,
    title: 'Critical & Analytical Thinking',
    description: 'Proficient in breaking down complex clinical problems to provide accurate diagnoses and develop effective treatment plans for optimal patient outcomes',
    icon: Brain,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 2,
    title: 'Adaptability & Lateral Problem-Solving',
    description: 'Ability to find creative solutions in fast-paced healthcare settings and adapt to diverse patient needs across multiple medical specialties',
    icon: Zap,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 3,
    title: 'Interdisciplinary Collaboration',
    description: 'Strong ability to work with diverse healthcare teams, from specialists to allied health professionals, to deliver comprehensive patient care',
    icon: Users,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 4,
    title: 'Tech-Savvy',
    description: 'Comfortable with modern medical technology and digital health tools to enhance patient care and streamline healthcare delivery',
    icon: Cpu,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Professional Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Core competencies that drive excellence in modern healthcare delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-muted hover:border-primary hover:shadow-2xl transition-all duration-300 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-12 h-12 rounded-lg ${skill.bgColor} flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
