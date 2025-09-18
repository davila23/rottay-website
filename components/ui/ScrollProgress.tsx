"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 transform-origin-left z-50"
      style={{ scaleX, transformOrigin: '0%' }}
    />
  )
}