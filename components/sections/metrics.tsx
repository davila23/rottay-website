"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'

const metrics = [
  { value: 1000000, suffix: '+', label: 'API Requests/Day', prefix: '' },
  { value: 99.99, suffix: '%', label: 'Uptime SLA', prefix: '' },
  { value: 50, suffix: 'ms', label: 'Avg Response Time', prefix: '' },
  { value: 500, suffix: '+', label: 'Enterprise Clients', prefix: '' },
]

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(current)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  const displayValue = value % 1 === 0 ? Math.floor(count) : count.toFixed(2)
  const formattedValue = value >= 1000000 ? `${Math.floor(count / 1000000)}M` : displayValue

  return (
    <div ref={ref}>
      {prefix}{formattedValue}{suffix}
    </div>
  )
}

export function Metrics() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                <Counter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              </div>
              <p className="text-sm text-gray-500">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}