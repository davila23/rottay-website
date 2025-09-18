"use client"

import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion'
import { useRef, useEffect, useState, ReactNode } from 'react'

// Smooth Reveal Animation with custom easing
interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
}

export function SmoothReveal({ children, delay = 0, duration = 0.8, y = 60 }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom smooth easing
      }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic Button Effect
interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ children, className = "", strength = 0.15 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const xSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 })
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const xPos = (e.clientX - left - width / 2) * strength
    const yPos = (e.clientY - top - height / 2) * strength
    x.set(xPos)
    y.set(yPos)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Text Reveal Animation (Letter by Letter)
interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const letters = text.split("")
  
  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
          style={{ display: letter === " " ? "inline" : "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  )
}

// Number Counter Animation
interface CounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({ from = 0, to, duration = 2, suffix = "", prefix = "", className = "" }: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [value, setValue] = useState(from)
  
  useEffect(() => {
    if (!isInView) return
    
    const startTime = Date.now()
    const endTime = startTime + duration * 1000
    
    const tick = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = from + (to - from) * easeOutQuart
      
      setValue(Math.floor(currentValue))
      
      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }
    
    requestAnimationFrame(tick)
  }, [isInView, from, to, duration])
  
  return (
    <span ref={ref} className={className}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}

// 3D Tilt Card Effect
interface Tilt3DProps {
  children: ReactNode
  className?: string
  max?: number
}

export function Tilt3D({ children, className = "", max = 15 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    
    setRotateY((x - 0.5) * max * 2)
    setRotateX((0.5 - y) * max * 2)
  }
  
  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }
  
  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}

// Stagger Children Animation
interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

export function StaggerChildren({ children, className = "", delay = 0, staggerDelay = 0.1 }: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// Shimmer Effect for Skeleton Screens
export function ShimmerSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gray-900 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]">
        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-gray-800/50 to-transparent" />
      </div>
    </div>
  )
}

// Gradient Text Animation
export function GradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

// Parallax Wrapper
interface ParallaxProps {
  children: ReactNode
  offset?: number
  className?: string
}

export function Parallax({ children, offset = 50, className = "" }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

// Blur In Animation
export function BlurIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

// Import useScroll
import { useScroll } from 'framer-motion'