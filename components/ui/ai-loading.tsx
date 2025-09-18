"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AILoadingMobile() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const phrases = [
    "Initializing AI...",
    "Processing neural networks...",
    "Analyzing patterns...",
    "Optimizing responses...",
    "Almost there..."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 md:hidden">
      <div className="relative w-full max-w-sm px-8">
        {/* Neural Network Animation */}
        <div className="relative h-64 mb-8">
          {/* Central Core */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-xl" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/20"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Orbiting Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            >
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <div
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                  style={{
                    top: `${Math.sin((i * Math.PI * 2) / 8) * 60}px`,
                    left: `${Math.cos((i * Math.PI * 2) / 8) * 60}px`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + Math.cos((i * Math.PI * 2) / 8) * 30}%`}
                y2={`${50 + Math.sin((i * Math.PI * 2) / 8) * 30}%`}
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.1,
                }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>
          </svg>

          {/* Pulse Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              initial={{ width: 80, height: 80, opacity: 0.8 }}
              animate={{
                width: [80, 200, 200],
                height: [80, 200, 200],
                opacity: [0.8, 0, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Text Animation */}
        <div className="text-center">
          <motion.div
            key={currentPhrase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white text-lg font-medium mb-4"
          >
            {phrases[currentPhrase]}
          </motion.div>

          {/* Progress Bar */}
          <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 10,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* AI Status Indicators */}
          <div className="flex justify-center items-center gap-4 mt-6">
            {['Neural', 'Processing', 'Analysis'].map((label, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.3 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
                <span className="text-xs text-gray-400">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Logo */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ROTTAY AI
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Desktop version (full screen)
export function AILoadingDesktop() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const phrases = [
    "Initializing quantum processors...",
    "Synchronizing neural pathways...",
    "Calibrating AI models...",
    "Establishing secure connection...",
    "Loading experience..."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 hidden md:flex">
      <div className="relative">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
            animate={{
              y: [0, 50],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Animation Container */}
        <div className="relative z-10">
          {/* DNA Helix Animation */}
          <div className="flex justify-center mb-12">
            <svg width="300" height="200" className="overflow-visible">
              {[...Array(20)].map((_, i) => (
                <g key={i}>
                  <motion.circle
                    cx={150 + Math.sin((i * Math.PI) / 5) * 50}
                    cy={i * 10}
                    r="4"
                    fill="url(#gradientLeft)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                  <motion.circle
                    cx={150 - Math.sin((i * Math.PI) / 5) * 50}
                    cy={i * 10}
                    r="4"
                    fill="url(#gradientRight)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1 + 0.5,
                    }}
                  />
                  {i < 19 && (
                    <motion.line
                      x1={150 + Math.sin((i * Math.PI) / 5) * 50}
                      y1={i * 10}
                      x2={150 + Math.sin(((i + 1) * Math.PI) / 5) * 50}
                      y2={(i + 1) * 10}
                      stroke="url(#gradientLine)"
                      strokeWidth="1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ delay: i * 0.05 }}
                    />
                  )}
                </g>
              ))}
              <defs>
                <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient id="gradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Text and Progress */}
          <div className="text-center max-w-md mx-auto">
            <motion.h2
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              ROTTAY AI
            </motion.h2>

            <motion.div
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 mb-8"
            >
              {phrases[currentPhrase]}
            </motion.div>

            {/* Quantum Progress Indicator */}
            <div className="flex justify-center items-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-12 h-1 bg-gray-800 rounded-full overflow-hidden"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      repeatDelay: 1,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* System Status */}
            <div className="grid grid-cols-3 gap-4 text-xs text-gray-500">
              {['Quantum Core', 'Neural Engine', 'AI Matrix'].map((system, i) => (
                <motion.div
                  key={system}
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                  <span>{system}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main export with responsive handling
export function AILoading() {
  return (
    <>
      <AILoadingMobile />
      <AILoadingDesktop />
    </>
  )
}