'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { contactImages } from '@/lib/unsplashImages'

const contactMethods = [
  {
    id: 1,
    type: 'Email',
    value: 'Contact via email',
    icon: Mail,
    link: '#',
    description: 'Reach out for professional inquiries'
  },
  {
    id: 2,
    type: 'Phone',
    value: 'Available for consultation',
    icon: Phone,
    link: '#',
    description: 'Schedule a call'
  },
  {
    id: 3,
    type: 'Location',
    value: 'Healthcare Facility',
    icon: MapPin,
    link: '#',
    description: 'Professional practice location'
  },
  {
    id: 4,
    type: 'LinkedIn',
    value: 'Professional Network',
    icon: Linkedin,
    link: '#',
    description: 'Connect professionally'
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
    alert('Thank you for your interest! This is a demo contact form.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section py-24 px-4 bg-gradient-to-b from-transparent to-medical-dark relative overflow-hidden">
      {/* 
        Unsplash Background Image for Contact Section
        To update: Modify images in /lib/unsplashImages.ts -> contactImages array
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('${contactImages[0].url}')`,
        }}
      ></div>
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-medical-secondary rounded-full blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-medical-primary rounded-full blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

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

        {/* Decorative image banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <div className="relative h-48 md:h-56">
            <img 
              src={contactImages[1].url}
              alt={contactImages[1].alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-medical-primary/90 to-medical-secondary/80 flex items-center justify-center">
              <p className="text-white text-2xl md:text-3xl font-bold text-center px-6">
                Let's Connect and Collaborate
              </p>
            </div>
          </div>
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
            
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <motion.div 
                          className="mr-4 text-white"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-8 h-8" />
                        </motion.div>
                        <div>
                          <p className="text-medical-accent text-sm font-semibold">{method.type}</p>
                          <p className="text-white text-lg font-medium">{method.value}</p>
                          <p className="text-medical-accent/70 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">Office Hours</h4>
                  <div className="space-y-2 text-medical-accent">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-medical-accent/60 focus:outline-none focus:border-medical-secondary focus:ring-2 focus:ring-medical-secondary/50 transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-medical-accent/60 focus:outline-none focus:border-medical-secondary focus:ring-2 focus:ring-medical-secondary/50 transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-medical-secondary focus:ring-2 focus:ring-medical-secondary/50 transition-all duration-300"
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-medical-accent/60 focus:outline-none focus:border-medical-secondary focus:ring-2 focus:ring-medical-secondary/50 transition-all duration-300 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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
