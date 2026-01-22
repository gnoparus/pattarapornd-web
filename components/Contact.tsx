'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
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
    <section id="contact" className="section py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-transparent to-foreground relative overflow-hidden">
      {/* 
        Unsplash Background Image for Contact Section
        To update: Modify images in /lib/unsplashImages.ts -> contactImages array
      */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={contactImages[0].url}
          alt={contactImages[0].alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={60}
        />
      </div>
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-primary rounded-full blur-3xl opacity-10"
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Ready to explore how we can work together? Reach out for consultations or inquiries
          </p>
        </motion.div>

        {/* Improved Decorative image banner with better contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-20 rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <div className="relative h-56 md:h-64">
            <Image 
              src={contactImages[1].url}
              alt={contactImages[1].alt}
              fill
              style={{ objectFit: 'cover' }}
              quality={80}
            />
            {/* Improved gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-primary/90 to-primary/90 flex items-center justify-center">
              <div className="text-center px-6 py-8">
                <p className="text-primary-foreground text-3xl md:text-4xl font-bold mb-3">
                  Ready to Transform Your Health?
                </p>
                <p className="text-muted text-lg md:text-xl font-medium">
                  Let's collaborate on your wellness journey
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-primary-foreground mb-10 font-display">Contact Information</h3>
            
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
                  <Card className="bg-foreground/90 backdrop-blur-md border-border hover:bg-foreground/95 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-5">
                        <motion.div 
                          className="text-primary"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-8 h-8" />
                        </motion.div>
                        <div className="space-y-1">
                          <p className="text-primary text-sm font-semibold">{method.type}</p>
                          <p className="text-primary-foreground text-lg font-medium">{method.value}</p>
                          <p className="text-muted text-sm">{method.description}</p>
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
              className="mt-10"
            >
              <Card className="bg-foreground/90 backdrop-blur-md border-border">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-primary-foreground mb-6">Office Hours</h4>
                  <div className="space-y-3 text-muted">
                    <p className="text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-base">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-base">Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form with improved spacing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-medical-dark/90 backdrop-blur-md border-medical-secondary/30">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="block text-white font-semibold text-base">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-medical-primary/50 backdrop-blur-sm border border-medical-secondary/50 rounded-xl text-white placeholder-medical-accent/70 focus:outline-none focus:border-medical-secondary focus:ring-2 focus:ring-medical-secondary/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-white font-semibold text-base">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-medical-primary/50 backdrop-blur-sm border border-medical-secondary/50 rounded-xl text-white placeholder-medical-accent/70 focus:outline-none focus:border-medical-secondary focus:ring-2 focus:ring-medical-secondary/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="block text-white font-semibold text-base">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-medical-primary/50 backdrop-blur-sm border border-medical-secondary/50 rounded-xl text-white focus:outline-none focus:border-medical-secondary focus:ring-2 focus:ring-medical-secondary/50 transition-all duration-300"
                    >
                      <option value="" className="bg-medical-dark">Select a subject</option>
                      <option value="general" className="bg-medical-dark">General Inquiry</option>
                      <option value="consultation" className="bg-medical-dark">Consultation Request</option>
                      <option value="collaboration" className="bg-medical-dark">Collaboration Opportunity</option>
                      <option value="other" className="bg-medical-dark">Other</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="block text-white font-semibold text-base">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-medical-primary/50 backdrop-blur-sm border border-medical-secondary/50 rounded-xl text-white placeholder-medical-accent/70 focus:outline-none focus:border-medical-secondary focus:ring-2 focus:ring-medical-secondary/50 transition-all duration-300 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      className="w-full text-lg py-6"
                    >
                      Send Message
                    </Button>
                  </div>
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
          className="text-center pt-16 border-t border-primary-foreground/20"
        >
          <p className="text-muted text-base">
            © 2024 Medical Portfolio. All rights reserved. | Designed with care and precision
          </p>
        </motion.div>
      </div>
    </section>
  )
}