"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Users, Globe, Cpu, TrendingUp, Clock, Shield, Zap } from 'lucide-react'

export function PlatformMetrics() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute
    
    return () => clearInterval(timer)
  }, [])

  const metrics = [
    {
      label: 'Processing',
      value: 'Real-time',
      icon: Activity,
      trend: 'Active'
    },
    {
      label: 'AI Models',
      value: 'GPT-4',
      icon: Users,
      trend: 'Latest'
    },
    {
      label: 'Response',
      value: '< 200ms',
      icon: Zap,
      trend: 'Optimized'
    },
    {
      label: 'Languages',
      value: 'Multi',
      icon: Globe,
      trend: 'ES/EN/PT'
    },
    {
      label: 'Security',
      value: 'SOC 2',
      icon: Shield,
      trend: 'Compliant'
    },
    {
      label: 'Availability',
      value: '24/7',
      icon: TrendingUp,
      trend: 'SLA'
    }
  ]

  const regions = [
    { name: 'US East', status: 'operational', latency: 'Low' },
    { name: 'US West', status: 'operational', latency: 'Low' },
    { name: 'EU Central', status: 'operational', latency: 'Low' },
    { name: 'LATAM', status: 'operational', latency: 'Optimal' },
    { name: 'APAC', status: 'planned', latency: 'Coming' }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(50,50,50,0.1),transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-gray-400 bg-gray-900 rounded-full">
            Platform Status
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real-Time Operations
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Live metrics from our global voice AI infrastructure
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-950 border border-gray-800 rounded-lg p-4 relative overflow-hidden group hover:border-gray-700 transition-colors"
            >
              
              <metric.icon className="w-6 h-6 text-gray-600 mb-2" />
              <div className="text-2xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-gray-500">{metric.label}</div>
              {metric.trend && (
                <div className="text-xs text-gray-600 mt-1">{metric.trend}</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Regional Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-950 border border-gray-800 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-gray-400" />
            Regional Infrastructure
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            {regions.map((region) => (
              <div key={region.name} className="flex items-center justify-between p-3 bg-black rounded-lg border border-gray-900">
                <div>
                  <div className="text-sm font-medium text-white">{region.name}</div>
                  <div className="text-xs text-gray-500">{region.latency}</div>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  region.status === 'operational' ? 'bg-green-500' : 
                  region.status === 'planned' ? 'bg-gray-500' : 'bg-yellow-500'
                }`} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 bg-gray-950 border border-gray-800 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-gray-400" />
            Live Activity Stream
          </h3>
          
          <div className="space-y-2">
            {[
              { time: 'Real-time', event: 'Voice processing active', location: 'Multi-region', status: 'Operational' },
              { time: 'Continuous', event: 'API endpoints monitored', location: 'Global CDN', status: 'Protected' },
              { time: '24/7', event: 'Support available', location: 'All timezones', status: 'Online' },
              { time: 'Always', event: 'Security scanning', location: 'All services', status: 'Active' }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-black rounded-lg border border-gray-900"
              >
                <div className="flex items-center space-x-4">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <div>
                    <span className="text-sm text-white">{activity.event}</span>
                    <span className="text-xs text-gray-600 ml-2">{activity.location}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  <span className="text-gray-600 mr-2">{activity.time}</span>
                  <span className="text-green-600">{activity.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            Last updated: {currentTime.toLocaleTimeString()} • All systems operational
          </p>
        </div>
      </div>
    </section>
  )
}