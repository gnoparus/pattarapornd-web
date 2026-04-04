'use client'

import { motion } from 'framer-motion'
import { Award, Heart } from 'lucide-react'

export default function AchievementsVolunteering() {
  const achievements = [
    {
      year: '2014',
      title: 'Rajavithi Advanced Trauma Course for Medical Students',
      description:
        'Gained advanced skills in trauma care and emergency medicine, mastering real-time critical decision-making in high-pressure medical situations.',
    },
    {
      year: '2020',
      title: 'Prince Mahidol Award Youth Program Conference 2020',
      description:
        'Engaged with global health innovators and leaders, expanding knowledge of current healthcare challenges and innovative approaches to public health.',
    },
  ]

  const volunteering = [
    'Less Luxury Project — Spearheaded a charity initiative, honing project management and community engagement skills',
    'In the Name of Love Ep. 2 — Contributed to mental health awareness events, promoting understanding and support for mental health in the community',
    'Srithanya Charity Run — Participated in community health and wellness initiatives, promoting active lifestyles and charitable giving',
    'Crazy Run 2019 — Led and participated in public health initiatives, fostering skills in communication and health promotion',
    '"I Can Detect! Let\'s Talk About Depression" — Educational project focused on mental health awareness and early detection of depression',
    'Change 5th Med RSU — Organized medical education events to bridge knowledge gaps among medical students',
  ]

  return (
    <section id="achievements" className="bg-[#f5f5f7] py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#1d1d1f] font-bold text-center leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          Achievements &amp; Community Service
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-[#6e6e73] text-[19px] text-center max-w-xl mx-auto mb-20"
        >
          Commitment to professional excellence and giving back to the community.
        </motion.p>

        {/* Achievements */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-[#1d1d1f] font-semibold text-[17px] mb-6"
        >
          Professional Achievements
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="bg-white rounded-2xl p-7 shadow-apple group cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#f5f5f7] rounded-xl flex items-center justify-center">
                  <Award className="w-4.5 h-4.5 text-[#1d1d1f]" />
                </div>
                <span className="text-[var(--apple-accent)] text-[13px] font-semibold">{achievement.year}</span>
              </div>
              <h3 className="text-[#1d1d1f] font-semibold text-[16px] mb-3 group-hover:text-[var(--apple-accent)] transition-colors duration-200 leading-snug">
                {achievement.title}
              </h3>
              <p className="text-[#6e6e73] text-[14px] leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Volunteering */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-[#1d1d1f] font-semibold text-[17px] mb-6"
        >
          Extracurricular &amp; Volunteering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-40px' }}
          className="bg-white rounded-2xl p-8 shadow-apple"
        >
          <div className="space-y-0">
            {volunteering.map((activity, index) => (
              <div key={index}>
                {index > 0 && <div className="h-px bg-[#d2d2d7]" />}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 py-4"
                >
                  <Heart className="w-4 h-4 text-[#6e6e73] shrink-0 mt-0.5" />
                  <p className="text-[#6e6e73] text-[13px] leading-relaxed">{activity}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
