'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Brain, Lightbulb, Users, Cpu } from 'lucide-react'

export default function Skills() {
  const skills = [
    {
      icon: Brain,
      title: 'Critical & Analytical Thinking',
      description: 'Expert in breaking down complex clinical problems to provide accurate diagnoses and develop effective, evidence-based treatment plans',
      proficiency: 95,
    },
    {
      icon: Lightbulb,
      title: 'Adaptability & Problem-Solving',
      description: 'Creative solutions in fast-paced healthcare environments, adapting seamlessly to diverse patient needs across medical specialties',
      proficiency: 92,
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong leadership and collaboration with diverse healthcare teams to deliver comprehensive, coordinated patient care',
      proficiency: 98,
    },
    {
      icon: Cpu,
      title: 'Technology Integration',
      description: 'Proficient with modern medical technology, digital health tools, and AI-driven healthcare solutions for enhanced patient outcomes',
      proficiency: 88,
    },
  ]

  return (
    <section id="skills" className="relative py-24 bg-white overflow-hidden">
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Core Competencies</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">Professional Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Essential competencies that drive excellence in modern healthcare delivery and patient care
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow border-violet-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <skill.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{skill.description}</p>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-foreground">Proficiency</span>
                    <span className="text-sm font-bold text-primary">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-linear-to-r from-primary to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-violet-100/20 rounded-full blur-3xl -z-10" />
    </section>
  )
}
