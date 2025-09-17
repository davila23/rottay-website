"use client"

import { motion } from 'framer-motion'

interface TechCategoryProps {
  category: string
  technologies: string[]
  index: number
  color: string
}

export function TechCategory({ category, technologies, index, color }: TechCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Category header */}
      <div className="flex items-center mb-4">
        <div className={`w-1 h-8 ${color} mr-4`} />
        <h3 className="text-xl font-bold text-white">{category}</h3>
      </div>
      
      {/* Technologies grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pl-5">
        {technologies.map((tech, techIndex) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <div className="px-4 py-3 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg text-center hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 cursor-pointer">
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                {tech}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}