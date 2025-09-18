"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Tilt3D } from '@/components/ui/animations'

interface ProductCardProps {
  name: string
  description: string
  icon: LucideIcon
  status: string
  href: string
  index: number
  preview?: string
  features?: string[]
}

export function ProductCard({ 
  name, 
  description, 
  icon: Icon, 
  status, 
  href, 
  index,
  preview,
  features = []
}: ProductCardProps) {
  const [showPreview, setShowPreview] = useState(false)
  const isLive = status === 'LIVE'
  const isExternal = href.startsWith('http')
  
  return (
    <Tilt3D className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        className="h-full relative"
      >
        <Link
          href={href}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="group block h-full bg-gray-950 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 overflow-hidden hover-glow"
        >
        <div className="p-8">
          {/* Status Badge */}
          <div className="mb-6 flex items-center justify-between">
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded ${
              isLive 
                ? 'bg-white text-black' 
                : 'bg-gray-900 text-gray-400 border border-gray-800'
            }`}>
              {status}
            </span>
            {isExternal && (
              <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
          
          {/* Icon - always with black background and white icon */}
          <div className="mb-6">
            <div className="inline-flex p-4 rounded-lg bg-black border border-gray-800">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-3">
            {name}
          </h3>
          
          <p className="text-gray-400 mb-6 line-clamp-3">
            {description}
          </p>

          {/* Preview for BitHire.ai */}
          {isLive && preview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: showPreview ? 1 : 0,
                height: showPreview ? 'auto' : 0
              }}
              transition={{ duration: 0.3 }}
              className="mb-6 overflow-hidden"
            >
              <div className="bg-black rounded-lg p-4 border border-gray-800">
                <p className="text-xs text-gray-500 mb-2">Live Preview:</p>
                <div className="space-y-2">
                  {features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Coming Soon Features */}
          {!isLive && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: showPreview ? 0.7 : 0,
                height: showPreview ? 'auto' : 0
              }}
              transition={{ duration: 0.3 }}
              className="mb-6 overflow-hidden"
            >
              <div className="space-y-1">
                {features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-center text-xs text-gray-600">
                    <span className="w-1 h-1 bg-gray-700 rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          
          <div className="flex items-center text-gray-500 font-medium group-hover:text-white transition-colors">
            <span>{isLive ? 'Visit Site' : 'Learn More'}</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        </Link>
      </motion.div>
    </Tilt3D>
  )
}