"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

export function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2,
  decimals = 0 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const spring = useSpring(0, { duration: duration * 1000 })
  const display = useTransform(spring, (current) => 
    Math.round(current * Math.pow(10, decimals)) / Math.pow(10, decimals)
  )
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value)
      setHasAnimated(true)
    }
  }, [isInView, value, spring, hasAnimated])
  
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    return display.on('change', (latest) => {
      setDisplayValue(latest)
    })
  }, [display])
  
  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue).toLocaleString()}
      {suffix}
    </span>
  )
}

interface AnimatedPercentageProps {
  value: number
  label: string
  delay?: number
}

export function AnimatedPercentage({ value, label, delay = 0 }: AnimatedPercentageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  return (
    <div ref={ref} className="relative">
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-sm text-gray-400">
          <AnimatedCounter value={value} suffix="%" />
        </span>
      </div>
    </div>
  )
}