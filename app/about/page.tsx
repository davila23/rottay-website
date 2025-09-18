"use client"

import { Header, Footer } from '@/components/layout'
import { motion } from 'framer-motion'
import { Building2, Users, Target, Rocket, Shield, Globe, Award, Briefcase } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { SimpleAnimatedIcon } from '@/components/3d/simple-animated-icons'
import { LocationIcon } from '@/components/3d/location-icons'

export default function AboutPage() {
  const stats = [
    { label: 'Voice AI', value: 'Core Focus', isNumber: false, icon: 'voice' },
    { label: 'Cloud Native', value: 'Architecture', isNumber: false, icon: 'cloud' },
    { label: 'Multi-Region', value: 'Deployment', isNumber: false, icon: 'globe' },
    { label: 'Enterprise', value: 'Ready', isNumber: false, icon: 'check' },
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
      bio: 'Systems Engineer with 15+ years of experience. AI-first approach, AWS Certified Solutions Architect, specialized in voice AI and cloud infrastructure',
      linkedin: 'https://www.linkedin.com/in/avila-daniel/',
      certifications: ['AWS Solutions Architect', 'AWS Developer', 'Google Cloud Professional'],
      expertise: ['Voice AI', 'Cloud Architecture', 'Automation', 'Machine Learning']
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
                {/* 3D Icon */}
                <div className="w-20 h-20 mx-auto mb-4">
                  <SimpleAnimatedIcon type={stat.icon as 'voice' | 'cloud' | 'globe' | 'check'} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
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
                We believe every transformative idea deserves to become reality. Our mission is to bridge 
                the gap between vision and execution, turning ambitious concepts into production-ready 
                solutions that actually work. Through cutting-edge AI, full-stack engineering excellence, 
                and cloud-native architecture, we make the impossible possible.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                In a world where 90% of digital transformations fail, we take a different approach. 
                We don't just build technology—we architect digital ecosystems that evolve with your business. 
                From voice AI that understands context and emotion, to workflows that adapt and learn, 
                to infrastructure that scales seamlessly across continents, we craft solutions that feel 
                like magic but are grounded in engineering rigor.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our expertise spans the entire stack: from bare metal to the cloud, from database optimization 
                to real-time AI inference, from security protocols to user experience. We've spent years 
                mastering the art of turning complex technical challenges into elegant, maintainable solutions. 
                When you work with us, you're not just getting developers—you're partnering with architects 
                of digital transformation who understand that great technology should empower, not complicate.
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
                  <div className="w-full h-full max-w-[250px] max-h-[250px]">
                    <SimpleAnimatedIcon type="building" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-gray-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We envision a future where AI isn't just a buzzword or a tool for tech giants—it's a 
              fundamental enabler that empowers every business to operate at its full potential.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Ideas to Reality</h3>
                <p className="text-gray-500 text-sm">
                  Transform concepts from whiteboard sketches to production systems that serve millions.
                </p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Human-Centric AI</h3>
                <p className="text-gray-500 text-sm">
                  Build technology that enhances human capabilities rather than replacing them.
                </p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Global Impact</h3>
                <p className="text-gray-500 text-sm">
                  Create solutions that transcend borders and make advanced technology accessible worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Philosophy</h2>
            <div className="space-y-6 text-gray-400">
              <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Build for the Real World</h3>
                <p className="leading-relaxed">
                  Perfect code that never ships helps no one. We believe in pragmatic engineering—building 
                  robust solutions that work today while being flexible enough for tomorrow. Every line of 
                  code we write, every architecture decision we make, is guided by real-world constraints 
                  and actual user needs, not theoretical perfection.
                </p>
              </div>
              
              <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">AI as a Tool, Not a Replacement</h3>
                <p className="leading-relaxed">
                  We see AI as humanity's most powerful amplifier. Our voice AI doesn't replace human 
                  connection—it handles repetitive tasks so humans can focus on what matters. Our automation 
                  doesn't eliminate jobs—it eliminates tedium. We build technology that respects both human 
                  intelligence and artificial intelligence, creating synergy rather than competition.
                </p>
              </div>
              
              <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Security is Not Optional</h3>
                <p className="leading-relaxed">
                  In an era of data breaches and AI hallucinations, we treat security and reliability as 
                  fundamental requirements, not features. Every system we build assumes it will be attacked, 
                  every AI model we deploy includes safeguards, and every piece of data we handle is treated 
                  as if it were our own. Trust is earned in years and lost in seconds—we never forget that.
                </p>
              </div>
              
              <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Complexity Made Simple</h3>
                <p className="leading-relaxed">
                  The best technology is invisible. We take pride in abstracting away complexity, creating 
                  interfaces so intuitive that users forget they're interacting with sophisticated AI systems. 
                  Whether it's a voice command, an API call, or a workflow automation, we believe powerful 
                  technology should feel effortless to use.
                </p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Leadership</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building the future of voice AI and automation
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-b from-gray-950 to-black rounded-xl border border-gray-800 p-8"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center overflow-hidden group flex-shrink-0">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                      <Users className="w-16 h-16 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </a>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-400 mb-3">{member.role}</p>
                    <p className="text-gray-500 mb-6">{member.bio}</p>
                    
                    {/* Certifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert) => (
                          <span key={cert} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Expertise */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* LinkedIn */}
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-32 bg-gray-950 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'pulse 8s ease-in-out infinite'
          }} />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full opacity-30 animate-ping" />
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-white rounded-full opacity-25 animate-bounce" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400 mb-6"
            >
              ✨ Our Story
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From Miami startup to global technology leader with offices across Americas
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Vertical Timeline */}
            <div className="absolute left-[140px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <div className="absolute left-[139px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/10 via-white/20 to-white/10 blur-sm" />
            
            <div className="space-y-16">
              {[
                { 
                  year: '2019', 
                  title: 'Foundation in Miami', 
                  desc: 'ROTTAY founded in Miami, FL by Daniel Avila. Started developing custom automation solutions for local businesses, establishing our commitment to practical, results-driven technology.',
                  icon: Building2,
                  achievements: ['Initial team of 3 developers', 'First 10 local clients', 'Focus on workflow automation'],
                  color: 'from-white to-gray-300',
                  accentColor: 'bg-white'
                },
                { 
                  year: '2020', 
                  title: 'Design System & Remote Operations', 
                  desc: 'Created our first comprehensive design system and transitioned to fully remote operations. Expanded service offerings to include cloud infrastructure and established our 100% remote-first culture.',
                  icon: Globe,
                  achievements: ['Proprietary design system launched', 'Remote team across 5 countries', 'Cloud infrastructure services'],
                  color: 'from-gray-300 to-gray-500',
                  accentColor: 'bg-gray-400'
                },
                { 
                  year: '2021', 
                  title: 'Multi-Tenancy Architecture', 
                  desc: 'Developed advanced multi-tenant SaaS architecture enabling us to serve multiple enterprise clients simultaneously with isolated, scalable environments.',
                  icon: Shield,
                  achievements: ['Multi-tenant platform architecture', 'SOC 2 Type II compliance', 'Enterprise security framework'],
                  color: 'from-white to-gray-400',
                  accentColor: 'bg-gray-300'
                },
                { 
                  year: '2022', 
                  title: 'AWS Partnership & Buenos Aires Office', 
                  desc: 'Became official AWS Solution Partners and opened our Buenos Aires office to better serve the Latin American market. Specialized in voice AI and conversational interfaces.',
                  icon: Award,
                  achievements: ['AWS Solution Partner status', 'Buenos Aires office opened', 'Voice AI specialization', 'LATAM market expansion'],
                  color: 'from-gray-400 to-gray-600',
                  accentColor: 'bg-gray-500'
                },
                { 
                  year: '2023', 
                  title: 'BitHire.ai Development', 
                  desc: 'Launched BitHire.ai, our flagship AI-powered recruitment platform. Revolutionized technical hiring with automated screening, voice interviews, and intelligent candidate matching.',
                  icon: Users,
                  achievements: ['BitHire.ai platform launched', 'AI-powered recruitment', 'Voice interview automation', '1000+ companies onboarded'],
                  color: 'from-gray-200 to-gray-500',
                  accentColor: 'bg-gray-400'
                },
                { 
                  year: '2024', 
                  title: 'CryptoHire & Process Automation', 
                  desc: 'Introduced CryptoHire for blockchain talent acquisition and automated interview processes. Implemented end-to-end recruitment automation and expanded platform capabilities.',
                  icon: Briefcase,
                  achievements: ['CryptoHire specialization', 'Automated interview processes', 'Enhanced platform features', 'Blockchain talent network'],
                  color: 'from-white to-gray-400',
                  accentColor: 'bg-gray-300'
                },
                { 
                  year: '2025', 
                  title: 'Global Expansion & Innovation', 
                  desc: 'Continuing growth with strategic offices (Miami FL, Buenos Aires), enhanced AI capabilities, and expanding our voice AI platform to serve Fortune 500 companies worldwide.',
                  icon: Rocket,
                  achievements: ['2 strategic locations', 'Fortune 500 clients', 'Advanced voice AI platform', 'Global talent network'],
                  color: 'from-gray-300 to-gray-600',
                  accentColor: 'bg-gray-400'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className={`relative flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}
                >
                  {/* Year Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className={`flex-shrink-0 w-32 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'} pt-4`}
                  >
                    <span className="inline-block px-4 py-2 bg-white text-black font-bold text-lg rounded-full shadow-lg transform group-hover:scale-110 transition-all duration-300 border-2 border-gray-800">
                      {milestone.year}
                    </span>
                  </motion.div>

                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="flex-shrink-0 relative z-20"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${milestone.color} shadow-2xl flex items-center justify-center group-hover:shadow-xl group-hover:scale-125 transition-all duration-500`}>
                      <milestone.icon className="w-6 h-6 text-white" />
                      {/* Pulsing ring */}
                      <div className={`absolute inset-0 rounded-full ${milestone.accentColor} opacity-20 animate-ping`} />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className={`flex-grow max-w-2xl ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-950/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:border-white/20 transition-all duration-500 group-hover:transform group-hover:scale-105">
                      {/* Glowing border effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${milestone.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                          {milestone.desc}
                        </p>
                        
                        {/* Enhanced Achievements */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Achievements</h4>
                          <div className="grid gap-3">
                            {milestone.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 + 0.6 + i * 0.1 }}
                                className="flex items-center space-x-3 group/item"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestone.color} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`} />
                                <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors duration-300">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400 mb-6"
              >
                🌎 Global Offices
              </motion.div>
              <h3 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our Global Presence
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Strategic locations across the Americas to serve our global clientele
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[
                {
                  city: 'Miami, FL',
                  role: 'Global Headquarters',
                  description: 'Main operations, strategic planning, and North American market development',
                  established: '2019',
                  color: 'from-white to-gray-400',
                  accentColor: 'bg-white',
                  flag: '🇺🇸',
                  timezone: 'EST',
                  focus: ['Strategic Operations', 'Business Development', 'Enterprise Sales']
                },
                {
                  city: 'Buenos Aires',
                  role: 'LATAM Hub & Development Center',
                  description: 'Latin American operations, regional partnerships, core development team, and technical innovation',
                  established: '2022',
                  color: 'from-gray-300 to-gray-600',
                  accentColor: 'bg-gray-400',
                  flag: '🇦🇷',
                  timezone: 'ART',
                  focus: ['Regional Partnerships', 'Product Development', 'Technical Innovation', 'Engineering Team']
                }
              ].map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-950/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:border-white/20 transition-all duration-500 group-hover:transform group-hover:scale-105 relative overflow-hidden">
                    {/* Glowing background effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${office.color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
                    
                    {/* Flag and timezone badge */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <span className="text-2xl">{office.flag}</span>
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs text-gray-400 rounded-full">
                        {office.timezone}
                      </span>
                    </div>
                    
                    {/* 3D Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      className="relative z-10 mb-6"
                    >
                      <div className="w-24 h-24 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/20 shadow-2xl mx-auto group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 overflow-hidden">
                        <LocationIcon type={office.city === 'Miami, FL' ? 'miami' : 'argentina'} />
                      </div>
                    </motion.div>
                    
                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {office.city}
                      </h4>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${office.color} bg-clip-text text-transparent mb-3`}>
                        {office.role}
                      </p>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                        {office.description}
                      </p>
                      
                      {/* Focus areas */}
                      <div className="space-y-2 mb-6">
                        <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Focus Areas</h5>
                        <div className="space-y-2">
                          {office.focus.map((area, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + i * 0.1 }}
                              className="flex items-center justify-center space-x-2"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${office.color}`} />
                              <span className="text-xs text-gray-500">{area}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Established badge */}
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
                        className="inline-block px-4 py-2 bg-white text-black text-xs font-semibold rounded-full shadow-lg border border-gray-300"
                      >
                        Est. {office.established}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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