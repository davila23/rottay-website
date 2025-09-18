"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageSquare,
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
  Headphones,
  ArrowRight,
  Clock,
  CheckCircle
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
  icon?: any
}

// Pre-loaded responses database
const responses: Record<string, { text: string; followUp?: QuickReply[] }> = {
  greeting: {
    text: "👋 Welcome to ROTTAY! I'm here to help you discover our AI-powered solutions.\n\nWe specialize in Voice AI, Workflow Automation, and Cloud Infrastructure. What brings you here today?",
    followUp: [
      { text: "Explore Services", value: "services", icon: Zap },
      { text: "View Pricing", value: "pricing", icon: DollarSign },
      { text: "Book a Demo", value: "demo", icon: Calendar },
      { text: "Just Browsing", value: "browsing", icon: Globe }
    ]
  },
  services: {
    text: "🚀 **Our Core Services:**\n\n**1. Voice AI Platform**\n• Real-time transcription (98% accuracy)\n• Sentiment analysis\n• Multi-language support\n• Contact center integration\n\n**2. Workflow Automation**\n• No-code builder\n• 200+ app integrations\n• AI-powered decisions\n• Real-time monitoring\n\n**3. Cloud Infrastructure**\n• Multi-cloud deployment\n• GPU compute for AI\n• Auto-scaling\n• 40% cost savings\n\n**4. Custom AI Solutions**\n• Tailored implementations\n• End-to-end support\n• Proof of concept in 2 weeks",
    followUp: [
      { text: "Voice AI Details", value: "voice" },
      { text: "Automation Details", value: "automation" },
      { text: "Get Pricing", value: "pricing" },
      { text: "Talk to Sales", value: "contact" }
    ]
  },
  voice: {
    text: "🎙️ **Voice AI Platform Features:**\n\n✓ **Real-time Processing**: Sub-200ms latency\n✓ **High Accuracy**: 98% transcription accuracy\n✓ **Languages**: English, Spanish, Portuguese\n✓ **Integrations**: Twilio, Amazon Connect, custom APIs\n✓ **Analytics**: Sentiment, emotion, intent detection\n✓ **Custom Models**: Train on your specific use case\n\n**Use Cases:**\n• Contact Centers\n• Voice Assistants\n• Meeting Transcription\n• Voice Analytics\n\n💡 Most clients see 60% reduction in call handling time.",
    followUp: [
      { text: "See Pricing", value: "pricing" },
      { text: "Book Demo", value: "demo" },
      { text: "Case Studies", value: "cases" },
      { text: "Technical Docs", value: "docs" }
    ]
  },
  automation: {
    text: "⚡ **Workflow Automation Platform:**\n\n✓ **No-Code Builder**: Drag-and-drop interface\n✓ **200+ Integrations**: Slack, Google, Microsoft, Salesforce\n✓ **AI Decisions**: Smart routing and processing\n✓ **Monitoring**: Real-time dashboards and alerts\n✓ **Templates**: Pre-built workflows for common tasks\n\n**Popular Automations:**\n• Customer onboarding\n• Invoice processing\n• Support ticket routing\n• Data synchronization\n\n⏱️ Average setup time: 30 minutes\n💰 Average savings: 20 hours/week",
    followUp: [
      { text: "View Integrations", value: "integrations" },
      { text: "Pricing Info", value: "pricing" },
      { text: "Start Free Trial", value: "trial" },
      { text: "Watch Demo", value: "demo" }
    ]
  },
  pricing: {
    text: "💰 **Transparent Pricing Plans:**\n\n**🎙️ Voice AI**\n• Starter: $499/mo (5K minutes)\n• Growth: $1,999/mo (25K minutes)  \n• Enterprise: Custom\n\n**⚡ Workflow Automation**\n• Basic: $299/mo (1K tasks)\n• Pro: $999/mo (10K tasks)\n• Scale: Custom\n\n**☁️ Cloud Infrastructure**\n• Pay-as-you-go: From $0.10/hour\n• Reserved: 40% discount\n• Dedicated: Custom\n\n✅ All plans include:\n• Technical support\n• Regular updates\n• API access\n• Basic analytics\n\n🎁 **Special Offer**: 14-day free trial on all plans",
    followUp: [
      { text: "Start Free Trial", value: "trial" },
      { text: "Compare Plans", value: "compare" },
      { text: "Enterprise Pricing", value: "enterprise" },
      { text: "Talk to Sales", value: "contact" }
    ]
  },
  demo: {
    text: "📅 **Book Your Personalized Demo:**\n\n**What to Expect:**\n• 30-minute video call\n• Live platform demonstration\n• Q&A with our experts\n• Custom implementation roadmap\n• Pricing discussion\n\n**Available Times:**\n• Mon-Fri: 9 AM - 6 PM EST\n• Response within 2 hours\n\n**After the Demo:**\n• 14-day free trial\n• Dedicated onboarding specialist\n• Implementation support\n\nOur CEO, Daniel Avila, personally joins enterprise demos.",
    followUp: [
      { text: "Schedule Now", value: "calendar" },
      { text: "Call Us", value: "phone" },
      { text: "Email Instead", value: "email" },
      { text: "Learn More", value: "services" }
    ]
  },
  contact: {
    text: "📞 **Let's Connect:**\n\n**Immediate Contact:**\n📧 hello@rottay.com\n📱 +1 (305) 555-0100\n💬 Live chat (you're here!)\n\n**Schedule a Meeting:**\n📅 calendly.com/rottay\n\n**Office Hours:**\nMon-Fri: 9 AM - 6 PM EST\nResponse Time: < 2 hours\n\n**Headquarters:**\nMiami, FL\n\nFor enterprise inquiries, ask for Daniel Avila (CEO & Founder).",
    followUp: [
      { text: "Schedule Call", value: "calendar" },
      { text: "Send Email", value: "email" },
      { text: "View Services", value: "services" },
      { text: "Get Directions", value: "location" }
    ]
  },
  browsing: {
    text: "No problem! Take your time exploring. Here are some helpful resources:\n\n📖 **Popular Pages:**\n• About Us - Learn our story\n• Case Studies - See client success\n• Careers - Join our team\n• Blog - Industry insights\n\n💡 **Quick Facts:**\n• Founded in 2019\n• 100% remote team\n• Serving Fortune 500 companies\n• SOC 2 Type II compliant\n\nI'll be here if you need anything!",
    followUp: [
      { text: "About ROTTAY", value: "about" },
      { text: "Our Services", value: "services" },
      { text: "Success Stories", value: "cases" },
      { text: "Contact Us", value: "contact" }
    ]
  },
  trial: {
    text: "🎉 **Start Your 14-Day Free Trial:**\n\n**Included in Trial:**\n✅ Full platform access\n✅ 1,000 free credits\n✅ All integrations\n✅ Priority support\n✅ Onboarding call\n\n**No Credit Card Required!**\n\nGet started in 3 simple steps:\n1. Create your account\n2. Choose your plan\n3. Start building\n\nMost users see value within the first 48 hours.",
    followUp: [
      { text: "Create Account", value: "signup" },
      { text: "View Features", value: "services" },
      { text: "Talk to Sales", value: "contact" },
      { text: "See Pricing", value: "pricing" }
    ]
  },
  default: {
    text: "I'd be happy to help you with that! Let me connect you with the right information. What specific area interests you most?",
    followUp: [
      { text: "Our Services", value: "services" },
      { text: "Pricing Plans", value: "pricing" },
      { text: "Book a Demo", value: "demo" },
      { text: "Contact Team", value: "contact" }
    ]
  }
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Show greeting after 3 seconds if not interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted && !isOpen) {
        setIsOpen(true)
        setIsMinimized(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [hasInteracted, isOpen])

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
    
    // Check for keywords
    if (lowercaseInput.includes('voice') || lowercaseInput.includes('speech')) return responses.voice
    if (lowercaseInput.includes('automat') || lowercaseInput.includes('workflow')) return responses.automation
    if (lowercaseInput.includes('pric') || lowercaseInput.includes('cost')) return responses.pricing
    if (lowercaseInput.includes('demo') || lowercaseInput.includes('trial')) return responses.demo
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('call')) return responses.contact
    if (lowercaseInput.includes('service') || lowercaseInput.includes('offer')) return responses.services
    if (lowercaseInput.includes('brows')) return responses.browsing
    if (lowercaseInput.includes('trial') || lowercaseInput.includes('free')) return responses.trial
    
    // Check for exact matches
    if (responses[lowercaseInput]) return responses[lowercaseInput]
    
    return responses.default
  }

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    setHasInteracted(true)

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

    // Simulate response delay
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
    }, 800)
  }

  const handleQuickReply = (value: string) => {
    handleSend(value)
    if (isMinimized) {
      setIsMinimized(false)
    }
  }

  const handleOpen = () => {
    setIsOpen(true)
    setIsMinimized(false)
    setHasInteracted(true)
  }

  return (
    <>
      {/* Chat Button - Fixed in corner */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={handleOpen}
              className="group relative"
              aria-label="Open AI Assistant"
            >
              {/* Main button */}
              <div className="relative w-14 h-14 bg-black rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6 text-white" />
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-2xl bg-black animate-ping opacity-20" />
                
                {/* Status dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                <div className="bg-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap relative">
                  <span>Need help? Chat with AI</span>
                  <div className="absolute -bottom-1 right-4 w-2 h-2 bg-black rotate-45" />
                </div>
              </div>
            </button>
          </motion.div>
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
              isMinimized ? 'w-[350px]' : 'w-[380px] sm:w-[440px]'
            } ${
              isMinimized ? 'h-auto' : 'h-[600px]'
            } bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-300`}
          >
            {/* Header */}
            <div className="bg-black p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-3">
                    <Bot className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold flex items-center gap-2">
                      ROTTAY Assistant
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <p className="text-xs text-gray-400">Online • Instant replies</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    aria-label="Toggle minimize"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      setIsMinimized(false)
                    }}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Minimized State - Show last message */}
            {isMinimized && messages.length > 0 && (
              <div className="p-4 bg-gray-50 cursor-pointer" onClick={() => setIsMinimized(false)}>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {messages[messages.length - 1].text}
                </p>
                {messages[messages.length - 1].options && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {messages[messages.length - 1].options?.slice(0, 2).map((option) => (
                      <button
                        key={option.value}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleQuickReply(option.value)
                        }}
                        className="px-3 py-1.5 text-xs bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

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
                              ? 'bg-black' 
                              : 'bg-white border border-gray-200'
                          }`}>
                            {message.sender === 'user' ? (
                              <User className="w-4 h-4 text-white" />
                            ) : (
                              <Bot className="w-4 h-4 text-black" />
                            )}
                          </div>
                          <div>
                            <div className={`px-4 py-3 rounded-2xl ${
                              message.sender === 'user' 
                                ? 'bg-black text-white' 
                                : 'bg-white border border-gray-200 text-gray-800'
                            }`}>
                              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                            </div>
                            
                            {/* Quick Reply Options */}
                            {message.options && message.options.length > 0 && (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {message.options.map((option) => {
                                  const Icon = option.icon
                                  return (
                                    <button
                                      key={option.value}
                                      onClick={() => handleQuickReply(option.value)}
                                      className="group px-3 py-1.5 text-xs bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-black hover:text-white hover:border-black transition-all flex items-center gap-1.5"
                                    >
                                      {Icon && <Icon className="w-3 h-3" />}
                                      {option.text}
                                    </button>
                                  )
                                })}
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
                      <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl">
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
                      placeholder="Ask me anything..."
                      className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all text-sm"
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isTyping}
                      className="p-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}