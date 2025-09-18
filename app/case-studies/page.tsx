"use client"

import { Header, Footer } from '@/components/layout'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Globe, Shield, Clock, Award, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'contact-center-automation',
      client: 'Major US Telecommunications Provider',
      industry: 'Telecommunications',
      product: 'Voice AI Platform',
      title: 'Automating Tier-1 Support at Scale',
      challenge: 'Handling 2M+ monthly support calls with average wait times exceeding 15 minutes during peak hours',
      solution: 'Deployed voice AI agents with custom training on 500K historical call transcripts and real-time sentiment analysis',
      results: [
        { metric: 'Automated', label: 'Tier-1 support calls' },
        { metric: 'Faster', label: 'Resolution time' },
        { metric: 'Reduced', label: 'Operational costs' },
        { metric: 'Improved', label: 'Customer satisfaction' }
      ],
      testimonial: 'Rottay\'s voice AI handles complex multi-turn conversations better than any solution we evaluated. Implementation took just 6 weeks.',
      testimonialAuthor: 'SVP of Customer Experience'
    },
    {
      id: 'healthcare-appointment-scheduling',
      client: 'Multi-State Healthcare Network',
      industry: 'Healthcare',
      product: 'Voice Automation Suite',
      title: 'HIPAA-Compliant Voice Scheduling',
      challenge: 'Managing high volume appointment requests across multiple facilities with significant no-show rates',
      solution: 'Integrated voice AI with Epic/Cerner EMR systems for automated scheduling, reminders, and rescheduling',
      results: [
        { metric: 'Automated', label: 'Scheduling workflow' },
        { metric: 'Reduced', label: 'No-show rates' },
        { metric: 'Saved', label: 'Staff hours' },
        { metric: 'HIPAA', label: 'Fully compliant' }
      ],
      testimonial: 'The platform handles complex scheduling logic across multiple providers and locations seamlessly. ROI achieved in 4 months.',
      testimonialAuthor: 'Chief Medical Officer'
    },
    {
      id: 'financial-services-kyc',
      client: 'Digital Banking Platform',
      industry: 'Financial Services',
      product: 'Voice Biometric Authentication',
      title: 'Voice Biometric Authentication',
      challenge: 'Account takeover fraud with traditional authentication methods',
      solution: 'Implemented voice biometric authentication with liveness detection and continuous verification',
      results: [
        { metric: 'Reduced', label: 'Fraud incidents' },
        { metric: 'Seconds', label: 'Authentication time' },
        { metric: 'High', label: 'Accuracy rate' },
        { metric: 'Protected', label: 'Customer accounts' }
      ],
      testimonial: 'Voice biometrics eliminated password-related tickets while significantly improving security. Best infrastructure decision we made.',
      testimonialAuthor: 'CISO'
    },
    {
      id: 'logistics-dispatch-automation',
      client: 'National Logistics Provider',
      industry: 'Transportation & Logistics',
      product: 'AI Dispatch System',
      title: 'Automating Fleet Dispatch Operations',
      challenge: 'Coordinating 5,000+ daily deliveries across 300 drivers with manual dispatch processes',
      solution: 'Voice-enabled dispatch system with real-time route optimization and driver communication',
      results: [
        { metric: 'Increased', label: 'Delivery capacity' },
        { metric: 'Optimized', label: 'Fuel consumption' },
        { metric: 'Faster', label: 'Delivery times' },
        { metric: 'Improved', label: 'On-time delivery' }
      ],
      testimonial: 'The voice interface allows our dispatchers to manage 3x more drivers efficiently. Integration with our TMS was seamless.',
      testimonialAuthor: 'VP of Operations'
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
              Customer Success
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              How leading enterprises reduced operational costs by 40% and improved 
              customer satisfaction scores by 35% with our voice AI platform
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
              { value: 'Enterprise', label: 'Grade Solutions' },
              { value: 'Multi-Cloud', label: 'Infrastructure' },
              { value: '24/7', label: 'Support Available' },
              { value: 'SOC 2', label: 'Compliant' }
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