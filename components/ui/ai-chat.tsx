"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Phone,
  DollarSign,
  Calendar,
  Globe,
  Shield,
  Zap,
  ChevronDown,
  Minimize2
} from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  options?: QuickReply[]
}

interface QuickReply {
  text: string
  value: string
}

// Pre-loaded responses database
const responses: Record<string, { text: string; followUp?: QuickReply[] }> = {
  greeting: {
    text: "Hi! I'm ROTTAY's AI assistant. I can help you learn about our voice AI platform, automation services, and cloud solutions. What would you like to know?",
    followUp: [
      { text: "🎯 Our Services", value: "services" },
      { text: "💰 Pricing", value: "pricing" },
      { text: "🚀 Get Started", value: "demo" },
      { text: "📞 Contact Sales", value: "contact" }
    ]
  },
  services: {
    text: "We offer 4 main solutions:\n\n🎙️ **Voice AI Platform**: Real-time transcription, sentiment analysis, and custom voice agents for contact centers\n\n⚡ **Workflow Automation**: No-code builder with 200+ integrations to automate your business processes\n\n☁️ **Cloud Infrastructure**: Multi-cloud deployment with auto-scaling and cost optimization\n\n🤖 **Custom AI Solutions**: Tailored implementations for your specific needs\n\nWhich solution interests you most?",
    followUp: [
      { text: "Voice AI Details", value: "voice" },
      { text: "Automation Info", value: "automation" },
      { text: "Cloud Services", value: "cloud" },
      { text: "Custom Solutions", value: "custom" }
    ]
  },
  voice: {
    text: "Our Voice AI Platform features:\n\n✅ **98% accuracy** in real-time transcription\n✅ **Multi-language support** (English, Spanish, Portuguese)\n✅ **Sentiment analysis** to understand customer emotions\n✅ **Custom voice agent training** for your brand\n✅ **Telephony integration** (Twilio, Amazon Connect)\n✅ **Sub-200ms latency** for real-time conversations\n\nPerfect for contact centers, customer support, and voice-enabled applications.",
    followUp: [
      { text: "See Pricing", value: "pricing" },
      { text: "Schedule Demo", value: "demo" },
      { text: "Technical Specs", value: "specs" }
    ]
  },
  automation: {
    text: "Our Workflow Automation platform helps you:\n\n🔄 **Automate repetitive tasks** without coding\n🔗 **Connect 200+ apps** including Slack, Google, Microsoft\n🤖 **AI-powered decisions** in your workflows\n📊 **Real-time monitoring** and alerts\n⚡ **10x faster deployment** than traditional solutions\n\nAverage customer saves 20+ hours per week on manual tasks.",
    followUp: [
      { text: "View Integrations", value: "integrations" },
      { text: "Pricing Plans", value: "pricing" },
      { text: "Book Demo", value: "demo" }
    ]
  },
  cloud: {
    text: "Our Cloud Infrastructure services include:\n\n☁️ **Multi-cloud orchestration** (AWS, GCP, Azure)\n🖥️ **GPU-optimized compute** for ML workloads\n📈 **Auto-scaling** based on demand\n💰 **Cost optimization** - average 40% savings\n🔒 **Enterprise security** with SOC 2 compliance\n🌍 **Global deployment** in 15+ regions\n\nWe handle the infrastructure so you can focus on your business.",
    followUp: [
      { text: "Infrastructure Pricing", value: "pricing" },
      { text: "Security Details", value: "security" },
      { text: "Talk to Expert", value: "contact" }
    ]
  },
  custom: {
    text: "Our Custom AI Solutions process:\n\n1️⃣ **Discovery Call** - Understanding your needs\n2️⃣ **Solution Design** - Tailored architecture\n3️⃣ **Proof of Concept** - 2-week sprint\n4️⃣ **Implementation** - Full deployment\n5️⃣ **Support & Scale** - Ongoing optimization\n\nWe've built custom solutions for Fortune 500 companies in finance, healthcare, and retail.",
    followUp: [
      { text: "Schedule Consultation", value: "contact" },
      { text: "See Case Studies", value: "cases" },
      { text: "Our Process", value: "process" }
    ]
  },
  pricing: {
    text: "Our pricing is tailored to your needs:\n\n**Voice AI Platform**\n• Starter: $499/month (5,000 minutes)\n• Growth: $1,999/month (25,000 minutes)\n• Enterprise: Custom pricing\n\n**Workflow Automation**\n• Basic: $299/month (1,000 tasks)\n• Pro: $999/month (10,000 tasks)\n• Scale: Custom pricing\n\n**Cloud Infrastructure**\n• Pay-as-you-go starting at $0.10/hour\n• Reserved instances with 40% discount\n\nAll plans include support and updates. Enterprise plans include dedicated account manager.",
    followUp: [
      { text: "Get Custom Quote", value: "contact" },
      { text: "Start Free Trial", value: "demo" },
      { text: "Compare Plans", value: "compare" }
    ]
  },
  demo: {
    text: "Excellent! Let's get you started with a demo.\n\n📅 **Free 30-minute consultation** with our team\n🎯 **Personalized demo** based on your use case\n💡 **Implementation roadmap** for your business\n🚀 **14-day free trial** available\n\nOur team typically responds within 2 hours during business hours.",
    followUp: [
      { text: "Book Now", value: "calendar" },
      { text: "Contact Sales", value: "contact" },
      { text: "Start Trial", value: "trial" }
    ]
  },
  contact: {
    text: "Let's connect! Here are the best ways to reach us:\n\n📧 **Email**: hello@rottay.com\n📞 **Phone**: +1 (305) 555-0100\n💬 **Live Chat**: You're already here!\n📅 **Schedule a Call**: calendly.com/rottay\n\n**Office Hours**: Mon-Fri 9AM-6PM EST\n**Response Time**: Within 2 hours\n\nFor enterprise inquiries, ask for Daniel Avila, our CEO.",
    followUp: [
      { text: "Schedule Call", value: "calendar" },
      { text: "Send Email", value: "email" },
      { text: "Learn More", value: "services" }
    ]
  },
  default: {
    text: "I understand you're interested in learning more. Let me help you find the right information. What specific area would you like to explore?",
    followUp: [
      { text: "Our Services", value: "services" },
      { text: "Pricing Info", value: "pricing" },
      { text: "Book Demo", value: "demo" },
      { text: "Contact Us", value: "contact" }
    ]
  }
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize with greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: '1',
        text: responses.greeting.text,
        sender: 'bot',
        timestamp: new Date(),
        options: responses.greeting.followUp
      }])
    }
  }, [isOpen, messages.length])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (input: string): { text: string; followUp?: QuickReply[] } => {
    const lowercaseInput = input.toLowerCase()
    
    // Check for keywords and return appropriate response
    if (lowercaseInput.includes('voice') || lowercaseInput.includes('transcription') || lowercaseInput.includes('speech')) {
      return responses.voice
    }
    if (lowercaseInput.includes('automat') || lowercaseInput.includes('workflow') || lowercaseInput.includes('integration')) {
      return responses.automation
    }
    if (lowercaseInput.includes('cloud') || lowercaseInput.includes('infrastructure') || lowercaseInput.includes('aws')) {
      return responses.cloud
    }
    if (lowercaseInput.includes('custom') || lowercaseInput.includes('solution') || lowercaseInput.includes('tailored')) {
      return responses.custom
    }
    if (lowercaseInput.includes('pric') || lowercaseInput.includes('cost') || lowercaseInput.includes('plan')) {
      return responses.pricing
    }
    if (lowercaseInput.includes('demo') || lowercaseInput.includes('trial') || lowercaseInput.includes('start')) {
      return responses.demo
    }
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('call') || lowercaseInput.includes('email')) {
      return responses.contact
    }
    if (lowercaseInput.includes('service') || lowercaseInput.includes('offer') || lowercaseInput.includes('product')) {
      return responses.services
    }
    
    // Check for pre-defined response keys
    if (responses[lowercaseInput]) {
      return responses[lowercaseInput]
    }
    
    return responses.default
  }

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(messageText)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        options: response.followUp
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickReply = (value: string) => {
    handleSend(value)
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                Chat with AI Assistant
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring" }}
            className={`fixed bottom-6 right-6 z-40 ${
              isMinimized ? 'w-80' : 'w-[400px]'
            } ${
              isMinimized ? 'h-16' : 'h-[600px]'
            } bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mr-3">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold flex items-center gap-2">
                      ROTTAY AI
                      <Sparkles className="w-4 h-4" />
                    </h3>
                    <p className="text-xs text-white/80">Always here to help</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all"
                    aria-label="Minimize chat"
                  >
                    {isMinimized ? (
                      <ChevronDown className="w-5 h-5 rotate-180" />
                    ) : (
                      <Minimize2 className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      setIsMinimized(false)
                    }}
                    className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                        <div className={`flex items-start gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.sender === 'user' 
                              ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                              : 'bg-gradient-to-br from-gray-100 to-gray-200'
                          }`}>
                            {message.sender === 'user' ? (
                              <User className="w-4 h-4 text-white" />
                            ) : (
                              <Bot className="w-4 h-4 text-gray-600" />
                            )}
                          </div>
                          <div>
                            <div className={`px-4 py-3 rounded-2xl ${
                              message.sender === 'user' 
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                                : 'bg-white border border-gray-200 text-gray-800 shadow-sm'
                            }`}>
                              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                            </div>
                            
                            {/* Quick Reply Options */}
                            {message.options && message.options.length > 0 && (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {message.options.map((option) => (
                                  <button
                                    key={option.value}
                                    onClick={() => handleQuickReply(option.value)}
                                    className="px-3 py-1.5 text-xs bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all"
                                  >
                                    {option.text}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
                        <div className="flex space-x-1">
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-sm"
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isTyping}
                      className="p-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                      aria-label="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                  <p className="text-xs text-gray-400 mt-2 text-center">
                    Powered by ROTTAY AI • Instant responses
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}