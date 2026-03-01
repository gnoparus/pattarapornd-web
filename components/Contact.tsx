'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { MapPin, Linkedin, Facebook } from 'lucide-react'

export default function Contact() {
  const contactLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'Pattarapornd Suparcha',
      detail: 'Connect with me professionally',
      href: 'https://www.linkedin.com/in/pattarapornd-suparcha-914858392',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      hoverBorder: 'hover:border-blue-200',
    },
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Bangkok, Thailand',
      detail: 'Professional practice location',
      href: undefined,
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50',
      iconColor: 'text-violet-600',
      hoverBorder: 'hover:border-violet-200',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      subtitle: 'Pattarapornd Suparcha',
      detail: 'Follow me on Facebook',
      href: 'https://www.facebook.com/ploy.soiynnarak/',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      hoverBorder: 'hover:border-indigo-200',
    },
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
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out through any of these channels — I'd love to hear from you
          </p>
        </motion.div>

        {/* Main Content: Photo + Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-violet-100 shadow-elevated hover:shadow-elevated-lg transition-all duration-500 group">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/studio-photo-203.jpg"
                  alt="Dr. Pattarapornd Suparcha"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-violet-900/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Dr. Pattarapornd</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    General Practitioner specializing in Occupational Health,
                    Aesthetic Medicine, and Anti-Aging Science.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right - Contact Cards */}
          <div className="space-y-5">
            {contactLinks.map((link, index) => {
              const CardContent = (
                <Card
                  className={`p-6 border transition-all duration-300 ${link.hoverBorder} hover:shadow-lg group cursor-pointer`}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-14 h-14 shrink-0 ${link.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <link.icon className={`w-7 h-7 ${link.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-lg mb-0.5">{link.title}</h4>
                      <p className={`text-sm font-medium ${link.iconColor} mb-0.5`}>{link.subtitle}</p>
                      <p className="text-xs text-muted-foreground">{link.detail}</p>
                    </div>
                    {link.href && (
                      <div className={`w-10 h-10 rounded-full ${link.bgColor} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <svg className={`w-5 h-5 ${link.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    )}
                  </div>
                </Card>
              )

              return (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {link.href ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="block">
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              )
            })}

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100">
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  🌟 Open to collaborations in healthcare, wellness, and aesthetic medicine.
                  Feel free to connect through any channel above.
                </p>
              </div>
            </motion.div>
          </div>
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
                <div className="text-sm text-muted-foreground">General Practitioner specializing in Occupational Health,<br />Aesthetic Medicine, and Anti-Aging Science.</div>
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
