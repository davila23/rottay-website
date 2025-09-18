"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Calendar, Mail, MessageSquare, User } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  const handleCalendlyClick = () => {
    if (typeof window !== 'undefined') {
      window.open('https://calendly.com/rottay', '_blank')
    }
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm text-center"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Calendly Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-950 border border-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-4">
                Schedule a Call
              </h3>
              <p className="text-gray-400 mb-6">
                Prefer to discuss your project directly? Book a 30-minute discovery call with our team.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                  <p className="text-gray-300">Discuss your project requirements</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                  <p className="text-gray-300">Get personalized recommendations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                  <p className="text-gray-300">Receive a custom quote</p>
                </div>
              </div>

              <button
                onClick={handleCalendlyClick}
                className="w-full px-6 py-3 bg-transparent border border-gray-700 text-white font-medium rounded-lg hover:border-gray-500 transition-colors flex items-center justify-center"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Schedule Meeting
              </button>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-500 mb-4">Quick Contact</p>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">
                    <Mail className="inline w-4 h-4 mr-2 text-gray-500" />
                    hello@rottay.ai
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}