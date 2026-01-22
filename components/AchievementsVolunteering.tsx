'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Award, Heart, Users, BookOpen, Trophy, Smile } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: 'Rajavithi Advanced Trauma Course for Medical Students',
    description: 'Gained advanced skills in trauma care and emergency medicine, mastering real-time critical decision-making in high-pressure medical situations',
    year: '2014',
    icon: Award,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 2,
    title: 'Prince Mahidol Award Youth Program Conference 2020',
    description: 'Engaged with global health innovators and leaders, expanding knowledge of current healthcare challenges and innovative approaches to public health',
    year: '2020',
    icon: Trophy,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
]

const volunteering = [
  {
    id: 1,
    title: 'Less Luxury Project',
    description: 'Spearheaded a charity initiative, honing project management and community engagement skills',
    icon: Heart,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 2,
    title: 'In the Name of Love Ep. 2',
    description: 'Contributed to mental health awareness events, promoting understanding and support for mental health in the community',
    icon: Smile,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 3,
    title: 'Srithanya Charity Run',
    description: 'Participated in community health and wellness initiatives, promoting active lifestyles and charitable giving',
    icon: Users,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 4,
    title: 'Crazy Run 2019',
    description: 'Led and participated in public health initiatives, fostering skills in communication and health promotion',
    icon: Users,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 5,
    title: '"I Can Detect! Let\'s Talk About Depression"',
    description: 'Educational project focused on mental health awareness and early detection of depression in the community',
    icon: BookOpen,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 6,
    title: 'Change 5th Med RSU',
    description: 'Organized medical education events to bridge knowledge gaps and promote continuous learning among medical students',
    icon: BookOpen,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
]

export default function AchievementsVolunteering() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="section py-24 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Achievements & Community Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Commitment to professional excellence and giving back to the community
          </p>
        </motion.div>

        {/* Professional Achievements */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-foreground mb-8 font-display"
          >
            Professional Achievements
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full border-l-4 border-primary hover:shadow-2xl transition-all duration-300 bg-card/90 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <motion.div 
                          className={`w-12 h-12 rounded-xl ${achievement.bgColor} flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className={`w-6 h-6 ${achievement.color}`} />
                        </motion.div>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                          {achievement.year}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-foreground mb-2">
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Volunteering & Extracurricular Activities */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-foreground mb-8 font-display"
          >
            Extracurricular Activities & Volunteering
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteering.map((activity, index) => {
              const Icon = activity.icon
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-card/80 backdrop-blur-sm border-muted hover:border-primary">
                    <CardContent className="p-6">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl ${activity.bgColor} flex items-center justify-center mb-4`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className={`w-6 h-6 ${activity.color}`} />
                      </motion.div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
