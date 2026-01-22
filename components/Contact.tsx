'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Linkedin, Clock } from 'lucide-react'
import { contactImages } from '@/lib/unsplashImages'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Contact via email',
      detail: 'Reach out for professional inquiries',
    },
    {
      icon: Phone,
      title: 'Phone',
      subtitle: 'Available for consultation',
      detail: 'Schedule a call',
    },
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Healthcare Facility',
      detail: 'Professional practice location',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'Professional Network',
      detail: 'Connect professionally',
    },
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">Ready to Transform Your Health?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on your wellness journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Contact Info & Hours */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-5 hover:shadow-lg transition-shadow border-violet-100 cursor-pointer group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                          <p className="text-sm text-primary font-medium mb-1">{info.subtitle}</p>
                          <p className="text-xs text-muted-foreground">{info.detail}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-violet-100 bg-linear-to-br from-violet-50 to-purple-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{schedule.day}</span>
                      <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-violet-100 shadow-elevated hover:shadow-elevated-lg transition-shadow duration-500">
                <div className="aspect-square relative group">
                  <Image
                    src={contactImages[1].url}
                    alt={contactImages[1].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-violet-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-xl font-bold mb-1">Let's Connect</h4>
                    <p className="text-sm text-white/90">Professional healthcare communication</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-8 border-violet-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject of your inquiry"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto rounded-full px-12 bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-violet-100/20 rounded-full blur-3xl -z-10" />

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 border-t border-border pt-12"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Dr. Pattarapornd</div>
                <div className="text-sm text-muted-foreground">Expert aesthetic medicine and holistic wellness<br/>in the heart of the city.</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Menu</h4>
                <ul className="space-y-1">
                  <li><a href="#home" className="text-muted-foreground hover:text-primary">Home</a></li>
                  <li><a href="#services" className="text-muted-foreground hover:text-primary">Services</a></li>
                  <li><a href="#about" className="text-muted-foreground hover:text-primary">About</a></li>
                  <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Legal</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 Dr. Pattarapornd Suparcha. All rights reserved.
          </div>
        </div>
      </motion.div>
    </section>
  )
}
