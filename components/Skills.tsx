'use client'

import { motion } from 'framer-motion'
import { Brain, Lightbulb, Users, Cpu } from 'lucide-react'

export default function Skills() {
  const technicalSkills = [
    {
      category: 'Languages',
      items: [
        { name: 'Thai', level: 'Native' },
        { name: 'English', level: 'Intermediate' },
        { name: 'Arabic', level: 'Beginner' },
      ],
    },
    {
      category: 'Computer Skills',
      items: [
        { name: 'Microsoft Word', level: 'Proficient' },
        { name: 'Microsoft Excel', level: 'Proficient' },
        { name: 'Microsoft PowerPoint', level: 'Proficient' },
      ],
    },
  ]

  const skills = [
    {
      icon: Brain,
      title: 'Aesthetic Precision & Artistry',
      description:
        'Exceptional eye for facial symmetry and aesthetic harmony, combining medical expertise with artistic sensibility for naturally beautiful results.',
      proficiency: 98,
    },
    {
      icon: Lightbulb,
      title: 'Holistic Treatment Design',
      description:
        'Creating personalized treatment plans blending aesthetic medicine, anti-aging therapies, and traditional healing for comprehensive wellness.',
      proficiency: 95,
    },
    {
      icon: Users,
      title: 'Patient-Centered Communication',
      description:
        'Building trust through empathetic listening and clear communication, ensuring patients feel heard, understood, and confident.',
      proficiency: 98,
    },
    {
      icon: Cpu,
      title: 'Advanced Aesthetic Technology',
      description:
        'Mastery of cutting-edge aesthetic devices, laser systems, and FDA-approved treatments for safe, effective beauty enhancement.',
      proficiency: 92,
    },
  ]

  return (
    <section id="skills" className="bg-white py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[17px] font-medium text-center mb-4"
        >
          Core Competencies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#1d1d1f] font-bold text-center leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          Professional Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[19px] text-center max-w-xl mx-auto mb-20"
        >
          Essential competencies that drive excellence in modern healthcare and patient care.
        </motion.p>

        {/* Technical proficiencies */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-60px' }}
          className="bg-[#f5f5f7] rounded-2xl p-8 mb-16"
        >
          <h3 className="text-[#1d1d1f] font-semibold text-[19px] mb-8">Technical Proficiencies</h3>
          <div className="grid sm:grid-cols-2 gap-10">
            {technicalSkills.map((category, catIndex) => (
              <div key={category.category}>
                <p className="text-[var(--apple-accent)] text-[13px] font-semibold uppercase tracking-wider mb-4">
                  {category.category}
                </p>
                <div className="space-y-0">
                  {category.items.map((item, i) => (
                    <div key={i}>
                      <div className="h-px bg-[#d2d2d7]" />
                      <div className="flex justify-between items-center py-3">
                        <span className="text-[#1d1d1f] text-[15px]">{item.name}</span>
                        <span className="text-[#6e6e73] text-[13px]">{item.level}</span>
                      </div>
                    </div>
                  ))}
                  <div className="h-px bg-[#d2d2d7]" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core skills grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="bg-[#f5f5f7] rounded-2xl p-7 group cursor-default"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-5">
                <skill.icon className="w-5 h-5 text-[#1d1d1f]" />
              </div>
              <h3 className="text-[#1d1d1f] font-semibold text-[17px] mb-3 group-hover:text-[var(--apple-accent)] transition-colors duration-200">
                {skill.title}
              </h3>
              <p className="text-[#6e6e73] text-[14px] leading-relaxed mb-5">
                {skill.description}
              </p>

              {/* Proficiency bar */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[#6e6e73] text-[12px]">Proficiency</span>
                  <span className="text-[#1d1d1f] text-[12px] font-semibold">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#d2d2d7] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1.2, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="h-full bg-[#1d1d1f] rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
