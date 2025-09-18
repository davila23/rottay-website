"use client"

import { Header, Footer } from '@/components/layout'
import { motion } from 'framer-motion'
import { Building2, Users, Target, Rocket, Shield, Globe, Award, Briefcase } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Team Members', value: '50+' },
    { label: 'Global Clients', value: '200+' },
    { label: 'Countries', value: '30+' },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'End-to-end encryption and zero-knowledge architecture in all our solutions'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge AI and blockchain technology'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our mission - dedicated support and continuous improvement'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building solutions that scale across borders and industries'
    }
  ]

  const team = [
    {
      name: 'Alexandra Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at Microsoft, 15+ years in AI/ML'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Blockchain pioneer, previously led crypto initiatives at Goldman Sachs'
    },
    {
      name: 'Sarah Kim',
      role: 'Head of Product',
      bio: 'Product visionary with experience at Apple and Tesla'
    },
    {
      name: 'David Okonkwo',
      role: 'VP of Engineering',
      bio: 'Distributed systems expert, formerly at Google Cloud'
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
              We're building the future of business with AI and blockchain technology, 
              creating solutions that transform how companies operate globally.
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
                  {stat.value}
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
                To democratize access to advanced AI and blockchain technologies, enabling 
                businesses of all sizes to compete and thrive in the digital economy. We 
                believe that powerful technology shouldn't be exclusive to tech giants.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every solution we build is designed with scalability, security, and simplicity 
                in mind, ensuring that our clients can focus on growth while we handle the 
                technical complexity.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8">
                <div className="h-full flex items-center justify-center">
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
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-600" />
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

          <div className="space-y-8">
            {[
              { year: '2021', title: 'Founded ROTTAY', desc: 'Started with a vision to democratize AI and blockchain' },
              { year: '2022', title: 'First Product Launch', desc: 'Released BitHire.ai, revolutionizing recruitment' },
              { year: '2023', title: 'Global Expansion', desc: 'Expanded to 30+ countries with 200+ enterprise clients' },
              { year: '2024', title: 'Innovation Awards', desc: 'Recognized as a leader in AI/blockchain integration' },
              { year: '2025', title: 'Next Chapter', desc: 'Launching next-gen solutions and expanding team' }
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
                  <span className="text-2xl font-bold text-gray-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-white"></div>
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