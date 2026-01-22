'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Award, Heart } from 'lucide-react'

export default function AchievementsVolunteering() {
  const achievements = [
    {
      year: '2014',
      title: 'Rajavithi Advanced Trauma Course for Medical Students',
      description: 'Gained advanced skills in trauma care and emergency medicine, mastering real-time critical decision-making in high-pressure medical situations',
    },
    {
      year: '2020',
      title: 'Prince Mahidol Award Youth Program Conference 2020',
      description: 'Engaged with global health innovators and leaders, expanding knowledge of current healthcare challenges and innovative approaches to public health',
    },
  ]

  const volunteering = [
    'Less Luxury Project - Spearheaded a charity initiative, honing project management and community engagement skills',
    'In the Name of Love Ep. 2 - Contributed to mental health awareness events, promoting understanding and support for mental health in the community',
    'Srithanya Charity Run - Participated in community health and wellness initiatives, promoting active lifestyles and charitable giving',
    'Crazy Run 2019 - Led and participated in public health initiatives, fostering skills in communication and health promotion',
    '"I Can Detect! Let\'s Talk About Depression" - Educational project focused on mental health awareness and early detection of depression in the community',
    'Change 5th Med RSU - Organized medical education events to bridge knowledge gaps and promote continuous learning among medical students',
  ]

  return (
    <section id="achievements" className="relative py-24 bg-linear-to-br from-violet-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">Achievements & Community Service</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Commitment to professional excellence and giving back to the community
          </p>
        </motion.div>

        {/* Professional Achievements */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-8"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Professional Achievements</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow border-violet-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-primary font-bold text-sm mb-2">{achievement.year}</div>
                      <h3 className="text-lg font-bold mb-3">{achievement.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-pink-500/10 rounded-full mb-8"
          >
            <span className="text-pink-600 text-sm font-semibold uppercase tracking-wider">Extracurricular Activities & Volunteering</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 border-violet-100 bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                {volunteering.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 shrink-0 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                      <Heart className="w-5 h-5 text-pink-600" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{activity}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="overflow-hidden bg-linear-to-br from-violet-100 to-purple-100 border-violet-100">
            <div className="aspect-21/9 lg:aspect-16/5 flex items-center justify-center">
              <div className="text-center text-violet-400">
                <div className="text-6xl mb-4">🏥</div>
                <p className="text-sm font-medium px-4">Welcoming medical facility entrance</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl -z-10" />
    </section>
  )
}
