"use client"

import { Header, Footer } from '@/components/layout'
import { motion } from 'framer-motion'
import { Building2, Users, Target, Rocket, Shield, Globe, Award, Briefcase } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

export default function AboutPage() {
  const stats = [
    { label: 'Founded', value: 2019, isNumber: true },
    { label: 'Active Projects', value: 12, suffix: '+', isNumber: true },
    { label: 'Team Members', value: 8, isNumber: true },
    { label: 'Client Retention', value: 95, suffix: '%', isNumber: true },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant infrastructure with AES-256 encryption and multi-region redundancy'
    },
    {
      icon: Rocket,
      title: 'Technical Excellence',
      description: 'Proprietary voice AI models with sub-200ms latency and 98% accuracy in real-time transcription'
    },
    {
      icon: Users,
      title: 'White-Glove Support',
      description: 'Dedicated technical account managers with 15-minute SLA response times for enterprise clients'
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Auto-scaling infrastructure handling 10M+ API calls daily across AWS, GCP, and Azure'
    }
  ]

  const team = [
    {
      name: 'Daniel Avila',
      role: 'Founder & CEO',
      bio: 'Previously ML Engineer at Meta. 8+ years building voice AI and automation systems',
      linkedin: 'https://www.linkedin.com/in/avila-daniel/'
    },
    {
      name: 'Santiago Ramirez',
      role: 'CTO',
      bio: 'Former Principal Engineer at MercadoLibre. Expert in distributed systems and real-time processing'
    },
    {
      name: 'Maria Fernández',
      role: 'VP of Engineering',
      bio: 'Ex-Google Cloud. Specialized in Kubernetes orchestration and multi-cloud deployments'
    },
    {
      name: 'Carlos Chen',
      role: 'Head of AI Research',
      bio: 'PhD Stanford. Published 15+ papers on conversational AI and natural language processing'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About ROTTAY
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise SaaS platform specializing in voice AI, workflow automation, 
              and cloud infrastructure solutions for Fortune 500 companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix || ''} 
                    duration={2}
                  />
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-gray-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                To make enterprise-grade AI accessible through practical, well-architected solutions. 
                We focus on voice automation, workflow optimization, and cloud infrastructure that 
                delivers measurable business value from day one.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our team combines deep technical expertise with real-world implementation experience, 
                ensuring every solution we deliver is production-ready, scalable, and aligned with 
                industry best practices for security and compliance.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-800 p-8 relative overflow-hidden">
                {/* Grid pattern background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                <div className="h-full flex items-center justify-center relative z-10">
                  <Building2 className="w-32 h-32 text-gray-700" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide every decision and drive our innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <value.icon className="w-10 h-10 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Visionaries and experts leading the charge in AI and blockchain innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center overflow-hidden group">
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                      <Users className="w-12 h-12 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </a>
                  ) : (
                    <Users className="w-12 h-12 text-gray-600" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                <p className="text-xs text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From startup to global technology leader
            </p>
          </motion.div>

          <div className="space-y-8 relative">
            {/* Vertical line */}
            <div className="absolute left-[98px] top-0 bottom-0 w-px bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800" />
            
            {[
              { year: '2019', title: 'Foundation', desc: 'Started developing custom automation solutions for local businesses in Miami' },
              { year: '2020', title: 'Remote First', desc: 'Adapted to fully remote operations, expanded service offerings to cloud infrastructure' },
              { year: '2021', title: 'Voice AI Focus', desc: 'Specialized in voice automation and conversational AI implementations' },
              { year: '2022', title: 'Platform Development', desc: 'Built proprietary tools and frameworks for faster deployments' },
              { year: '2023', title: 'Enterprise Clients', desc: 'Started working with larger companies requiring scalable solutions' },
              { year: '2024', title: 'Product Suite', desc: 'Launched standardized products based on common client needs' },
              { year: '2025', title: 'Continued Growth', desc: 'Expanding team and improving platform capabilities' }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-sm font-semibold text-gray-500">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-white ring-4 ring-gray-900 z-10 relative"></div>
                <div className="flex-grow bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{milestone.title}</h3>
                  <p className="text-sm text-gray-500">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of companies already leveraging our technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/careers"
                className="px-8 py-4 bg-transparent border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
              >
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}