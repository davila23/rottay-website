"use client"

import { motion } from 'framer-motion'
import { Zap, Globe, Users, Rocket, Heart, Trophy } from 'lucide-react'

const benefits = [
  {
    icon: Globe,
    title: 'Remote First',
    description: 'Work from anywhere in the world. We believe in flexibility and work-life balance.'
  },
  {
    icon: Rocket,
    title: 'Cutting-Edge Tech',
    description: 'Work with the latest AI and blockchain technologies on challenging projects.'
  },
  {
    icon: Users,
    title: 'Diverse Team',
    description: 'Collaborate with talented professionals from different backgrounds and cultures.'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs for you and your family.'
  },
  {
    icon: Trophy,
    title: 'Growth Opportunities',
    description: 'Continuous learning with courses, conferences, and mentorship programs.'
  },
  {
    icon: Zap,
    title: 'Impact',
    description: 'Make a real difference in transforming industries across Latin America.'
  }
]

export function WhyJoinUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Join ROTTAY?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We offer more than just a job - join a community of innovators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all hover:transform hover:scale-105">
                <div className="inline-flex p-3 bg-black rounded-lg mb-4 group-hover:bg-white transition-colors">
                  <benefit.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}