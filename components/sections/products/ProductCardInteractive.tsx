"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProductCardInteractiveProps {
  name: string
  description: string
  icon: LucideIcon
  status: string
  href: string
  index: number
  preview?: string
  features?: string[]
}

export function ProductCardInteractive({ 
  name, 
  description, 
  icon: Icon, 
  status, 
  href, 
  index,
  features = []
}: ProductCardInteractiveProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isLive = status === 'LIVE'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className="group block h-full bg-black rounded-lg border border-gray-900 hover:border-gray-700 transition-all duration-300 overflow-hidden relative"
      >
        {/* Background Gradient on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
          isHovered ? 'opacity-5' : 'opacity-0'
        } ${isLive ? 'from-white to-gray-500' : 'from-gray-700 to-gray-900'}`} />
        
        <div className="relative p-8">
          {/* Status Badge */}
          <div className="mb-6">
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded ${
              isLive 
                ? 'bg-white text-black' 
                : 'bg-gray-900 text-gray-500'
            }`}>
              {status}
            </span>
          </div>
          
          {/* Icon with Animation */}
          <motion.div 
            className="mb-6"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              rotate: isHovered ? 5 : 0
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`inline-flex p-4 rounded-lg ${isLive ? 'bg-white' : 'bg-gray-900'}`}>
              <Icon className={`w-8 h-8 ${isLive ? 'text-black' : 'text-gray-400'}`} />
            </div>
          </motion.div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-3">
            {name}
          </h3>
          
          <p className="text-gray-400 mb-6 line-clamp-3">
            {description}
          </p>
          
          {/* Features Preview (visible on hover) */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {features.length > 0 && (
              <ul className="mb-6 space-y-2">
                {features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
          
          {/* CTA with Animation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 font-medium group-hover:text-white transition-colors">
              <span>{isLive ? 'Try Demo' : 'Learn More'}</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            {isLive && (
              <motion.div
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Play className="w-5 h-5 text-white" />
              </motion.div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}