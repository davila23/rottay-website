"use client"

import { motion } from 'framer-motion'

export function ProductsHeader() {
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
        className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gray-300 bg-gray-900 rounded-full"
      >
        Our Portfolio
      </motion.span>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Products We've Built
      </h2>
      
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Production-ready solutions powered by cutting-edge AI and blockchain technology
      </p>
    </motion.div>
  )
}