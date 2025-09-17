"use client"

import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProductCardProps {
  name: string
  description: string
  icon: LucideIcon
  status: string
  href: string
  index: number
}

export function ProductCard({ name, description, icon: Icon, status, href, index }: ProductCardProps) {
  const isLive = status === 'LIVE'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link
        href={href}
        className="group block h-full bg-black rounded-lg border border-gray-900 hover:border-gray-700 transition-all duration-300 overflow-hidden"
      >
        <div className="p-8">
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
          
          {/* Icon */}
          <div className="mb-6">
            <div className={`inline-flex p-4 rounded-lg ${isLive ? 'bg-white' : 'bg-gray-900'}`}>
              <Icon className={`w-8 h-8 ${isLive ? 'text-black' : 'text-gray-400'}`} />
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-3">
            {name}
          </h3>
          
          <p className="text-gray-400 mb-6 line-clamp-3">
            {description}
          </p>
          
          <div className="flex items-center text-gray-500 font-medium group-hover:text-white transition-colors">
            <span>Learn more</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}