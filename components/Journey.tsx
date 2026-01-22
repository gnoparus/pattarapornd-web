'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Sparkles, Bot, FileDown, FileCheck } from 'lucide-react'

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
    <section id="education" className="section py-24 px-4 relative overflow-hidden bg-gradient-to-b from-purple-50/30 to-white">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10 -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-purple-600 font-semibold uppercase tracking-wide mb-3">Curriculum Vitae</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Holistic Excellence</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Bridging the gap between timeless medical wisdom and futuristic technology. 
            From rigorous foundations at Rangsit University to the forefront of AI-driven 
            aesthetic medicine.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown className="w-5 h-5" />
              <span>Download Full CV</span>
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileCheck className="w-5 h-5" />
              <span>View Certificates</span>
            </motion.button>
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
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-blue-500 to-blue-600'} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-purple-600 font-semibold mb-3">{item.institution}</p>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                      <div className={`ml-4 w-12 h-12 rounded-xl ${item.color === 'purple' ? 'bg-purple-100' : 'bg-blue-100'} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${item.color === 'purple' ? 'text-purple-600' : 'text-blue-600'}`} />
                      </div>
                    </div>
                  </div>
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
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-12 shadow-2xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <p className="text-purple-400 font-semibold uppercase tracking-wide mb-3">● Current Focus</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">AI-Driven Healthcare Integration</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Pioneering the use of artificial intelligence for hyper-personalized skin analysis 
              and predictive aging models. Combining data science with dermatology.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold">
                Data Analysis
              </span>
            </div>
          </div>

          {/* Bot Icon */}
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-purple-600 rounded-2xl flex items-center justify-center opacity-20">
            <Bot className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-10 rounded-2xl border-l-4 border-purple-600 shadow-lg">
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4">
              "True aesthetic medicine isn't just about correcting flaws; it's about understanding 
              the biological narrative of the patient and using technology to rewrite it for longevity."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Dr. Pattarapornd Suparcha</p>
                <p className="text-gray-600 text-sm">M.D., Aesthetic Specialist</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
