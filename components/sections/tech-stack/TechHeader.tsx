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
        Our Infrastructure
      </motion.span>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Enterprise Architecture
        <span className="block text-2xl md:text-3xl mt-2 text-gray-400 font-normal">
          Powering Voice AI at Scale
        </span>
      </h2>
      
      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Built on battle-tested technologies trusted by Fortune 500 companies. 
        Our platform handles millions of voice interactions with sub-second latency 
        across multiple cloud regions.
      </p>
    </motion.div>
  )
}