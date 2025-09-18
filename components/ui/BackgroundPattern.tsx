"use client"

import { motion } from 'framer-motion'

export function DotPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  )
}

export function GridPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export function CircuitPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="white" />
            <path d="M10,10 L40,10 M40,10 L40,40" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="2" fill="white" />
            <path d="M40,40 L70,40 M70,40 L70,70" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="70" cy="70" r="2" fill="white" />
            <path d="M70,70 L90,70" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="90" cy="70" r="2" fill="white" />
            <path d="M10,10 L10,50 M10,50 L50,50" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  )
}

export function AnimatedLines({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
          style={{
            top: `${20 * (i + 1)}%`,
            width: '100%',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 2,
          }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent"
          style={{
            left: `${20 * (i + 1)}%`,
            height: '100%',
          }}
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 2,
          }}
        />
      ))}
    </div>
  )
}

export function GradientMesh({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full filter blur-[128px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-700 to-black rounded-full filter blur-[128px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}