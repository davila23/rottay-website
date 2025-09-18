"use client"

import { Header, Footer } from '@/components/layout'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Globe, Shield, Clock, Award, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'fortune500-recruitment',
      client: 'Fortune 500 Financial Services',
      industry: 'Banking & Finance',
      product: 'BitHire.ai',
      title: 'Revolutionizing Tech Recruitment at Scale',
      challenge: 'Manual screening of 10,000+ applications monthly, 120-day average time-to-hire',
      solution: 'Implemented BitHire.ai with custom AI models trained on company culture and technical requirements',
      results: [
        { metric: '75%', label: 'Reduction in time-to-hire' },
        { metric: '90%', label: 'Improvement in candidate quality' },
        { metric: '$2.5M', label: 'Annual cost savings' },
        { metric: '95%', label: 'Hiring manager satisfaction' }
      ],
      testimonial: 'BitHire.ai transformed our entire recruitment process. What used to take months now takes weeks.',
      testimonialAuthor: 'VP of Talent Acquisition'
    },
    {
      id: 'global-events-ticketing',
      client: 'International Sports League',
      industry: 'Entertainment & Events',
      product: 'TicketGenius',
      title: 'Eliminating Ticket Fraud for Major Sports Events',
      challenge: '15% of tickets were counterfeit, causing revenue loss and fan disappointment',
      solution: 'Deployed TicketGenius blockchain-based ticketing system with NFT verification',
      results: [
        { metric: '100%', label: 'Fraud elimination' },
        { metric: '35%', label: 'Increase in secondary market revenue' },
        { metric: '2M+', label: 'Verified tickets issued' },
        { metric: '4.9/5', label: 'Fan satisfaction score' }
      ],
      testimonial: 'TicketGenius gave us complete control over our ticketing ecosystem while delighting our fans.',
      testimonialAuthor: 'Chief Revenue Officer'
    },
    {
      id: 'retail-market-intelligence',
      client: 'Global E-commerce Platform',
      industry: 'Retail & E-commerce',
      product: 'MarketFlow',
      title: 'AI-Powered Market Intelligence Driving Growth',
      challenge: 'Struggled to track competitor pricing and market trends across 50+ categories',
      solution: 'MarketFlow AI continuously analyzes market data, competitor strategies, and consumer sentiment',
      results: [
        { metric: '40%', label: 'Revenue increase' },
        { metric: '60%', label: 'Faster market response' },
        { metric: '85%', label: 'Forecast accuracy' },
        { metric: '250+', label: 'Automated insights daily' }
      ],
      testimonial: 'MarketFlow is like having a team of 100 analysts working 24/7, but better and faster.',
      testimonialAuthor: 'Head of Strategy'
    },
    {
      id: 'fintech-cross-border',
      client: 'Multinational Corporation',
      industry: 'Manufacturing',
      product: 'DollarEx',
      title: 'Streamlining Global Payments Infrastructure',
      challenge: 'Complex multi-currency operations with $500M+ monthly transactions across 40 countries',
      solution: 'DollarEx blockchain rails for instant, transparent cross-border payments',
      results: [
        { metric: '95%', label: 'Reduction in transfer time' },
        { metric: '80%', label: 'Lower transaction costs' },
        { metric: '$15M', label: 'Annual savings' },
        { metric: 'T+0', label: 'Settlement time' }
      ],
      testimonial: 'DollarEx simplified our entire global payment infrastructure. Game-changing technology.',
      testimonialAuthor: 'CFO'
    }
  ]

  const industries = [
    'Banking & Finance',
    'Healthcare',
    'Retail & E-commerce', 
    'Manufacturing',
    'Entertainment',
    'Technology'
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
              Case Studies
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Real-world success stories of enterprises transforming their operations 
              with ROTTAY's AI and blockchain solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-sm text-gray-400"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$50M+', label: 'Cost Savings Generated' },
              { value: '200+', label: 'Enterprise Clients' },
              { value: '99.9%', label: 'System Uptime' },
              { value: '4.8/5', label: 'Average Client Rating' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-gray-900 text-gray-400 text-xs rounded-full">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1 bg-gray-900 text-gray-400 text-xs rounded-full">
                      {study.product}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {study.title}
                  </h2>
                  <div className="text-gray-500 mb-4">{study.client}</div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Solution</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-gray-700 pl-4 mb-6">
                    <p className="text-gray-400 italic mb-2">"{study.testimonial}"</p>
                    <cite className="text-sm text-gray-500">— {study.testimonialAuthor}</cite>
                  </blockquote>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 p-8">
                    <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Key Results
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      {study.results.map((result) => (
                        <div key={result.label}>
                          <div className="text-3xl font-bold text-white mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-500">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transforming Industries Worldwide
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our solutions adapt to the unique challenges of each sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                industry: 'Financial Services',
                description: 'Secure, compliant solutions for banking, insurance, and fintech'
              },
              {
                icon: Users,
                industry: 'Healthcare',
                description: 'HIPAA-compliant AI for patient care and operational efficiency'
              },
              {
                icon: Globe,
                industry: 'Retail & E-commerce',
                description: 'Omnichannel intelligence and personalized customer experiences'
              },
              {
                icon: Award,
                industry: 'Manufacturing',
                description: 'Supply chain optimization and predictive maintenance'
              },
              {
                icon: Clock,
                industry: 'Technology',
                description: 'Developer tools and infrastructure for the next generation'
              },
              {
                icon: TrendingUp,
                industry: 'Government',
                description: 'Secure, transparent solutions for public sector innovation'
              }
            ].map((item, index) => (
              <motion.div
                key={item.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <item.icon className="w-10 h-10 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.industry}
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.description}
                </p>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the enterprises already transforming with ROTTAY
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center justify-center"
              >
                Schedule a Demo
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 bg-transparent border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}