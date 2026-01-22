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
    description: 'Expert in breaking down complex clinical problems to provide accurate diagnoses and develop effective, evidence-based treatment plans',
    icon: Brain,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    percentage: 95,
  },
  {
    id: 2,
    title: 'Adaptability & Problem-Solving',
    description: 'Creative solutions in fast-paced healthcare environments, adapting seamlessly to diverse patient needs across medical specialties',
    icon: Zap,
    color: 'text-accent-foreground',
    bgColor: 'bg-accent/20',
    percentage: 92,
  },
  {
    id: 3,
    title: 'Team Collaboration',
    description: 'Strong leadership and collaboration with diverse healthcare teams to deliver comprehensive, coordinated patient care',
    icon: Users,
    color: 'text-chart-3',
    bgColor: 'bg-chart-3/20',
    percentage: 98,
  },
  {
    id: 4,
    title: 'Technology Integration',
    description: 'Proficient with modern medical technology, digital health tools, and AI-driven healthcare solutions for enhanced patient outcomes',
    icon: Cpu,
    color: 'text-chart-4',
    bgColor: 'bg-chart-4/20',
    percentage: 88,
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent rounded-full blur-3xl opacity-5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wide mb-3 text-sm">Core Competencies</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Professional Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Essential competencies that drive excellence in modern healthcare delivery and patient care
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="h-full border-muted hover:border-primary hover:shadow-2xl transition-all duration-300 bg-card/90 backdrop-blur-sm group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        className={`w-16 h-16 rounded-xl ${skill.bgColor} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className={`w-8 h-8 ${skill.color}`} />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="text-right"
                      >
                        <div className={`text-3xl font-bold ${skill.color}`}>{skill.percentage}%</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">Proficiency</div>
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-display group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {skill.description}
                    </p>
                    {/* Progress bar */}
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          skill.id === 1 ? 'bg-primary' :
                          skill.id === 2 ? 'bg-accent-foreground' :
                          skill.id === 3 ? 'bg-chart-3' :
                          'bg-chart-4'
                        }`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                      />
                    </div>
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
