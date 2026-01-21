'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const contactMethods = [
  {
    id: 1,
    type: 'Email',
    value: 'contact@medicalportfolio.example',
    icon: '📧',
    link: 'mailto:contact@medicalportfolio.example',
  },
  {
    id: 2,
    type: 'Phone',
    value: '+1 (555) 123-4567',
    icon: '📱',
    link: 'tel:+15551234567',
  },
  {
    id: 3,
    type: 'Location',
    value: 'Boston, MA',
    icon: '📍',
    link: '#',
  },
  {
    id: 4,
    type: 'LinkedIn',
    value: 'Professional Profile',
    icon: '💼',
    link: '#',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would be handled here
    alert('Thank you for your message! This is a demo form.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section py-24 px-4 bg-gradient-to-b from-transparent to-medical-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-medical-secondary rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-medical-primary rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-medical-accent max-w-3xl mx-auto">
            Ready to explore how we can work together? Reach out for consultations or inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8 font-display">Contact Information</h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.id}
                href={method.link}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <div>
                  <p className="text-medical-accent text-sm font-semibold">{method.type}</p>
                  <p className="text-white text-lg">{method.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <h4 className="text-xl font-bold text-white mb-3">Office Hours</h4>
              <div className="space-y-2 text-medical-accent">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-medical-accent/60 focus:outline-none focus:border-medical-secondary transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-medical-accent/60 focus:outline-none focus:border-medical-secondary transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-medical-secondary transition-all duration-300"
                >
                  <option value="" className="bg-medical-dark">Select a subject</option>
                  <option value="general" className="bg-medical-dark">General Inquiry</option>
                  <option value="consultation" className="bg-medical-dark">Consultation Request</option>
                  <option value="collaboration" className="bg-medical-dark">Collaboration Opportunity</option>
                  <option value="other" className="bg-medical-dark">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-medical-accent/60 focus:outline-none focus:border-medical-secondary transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-medical-secondary text-medical-dark rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center pt-12 border-t border-white/20"
        >
          <p className="text-medical-accent">
            © 2024 Medical Portfolio. All rights reserved. | Designed with care and precision
          </p>
        </motion.div>
      </div>
    </section>
  )
}
