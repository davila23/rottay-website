"use client"

import { motion } from 'framer-motion'

export function TechHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gray-400 bg-gray-900 rounded-full"
      >
        Technology Stack
      </motion.span>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Built With Best-in-Class Tech
      </h2>
      
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        We leverage cutting-edge technologies to build scalable, performant, and secure applications
      </p>
    </motion.div>
  )
}