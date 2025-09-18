"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const quickResponses = [
  "Tell me about your products",
  "How can I integrate your API?",
  "What are your pricing plans?",
  "Schedule a demo"
]

const botResponses: { [key: string]: string } = {
  "tell me about your products": "We offer 4 main products:\n\n• **BitHire.ai** - AI-powered recruitment platform\n• **Notarix** - Digital notary system on blockchain\n• **VozIA** - AI voice synthesis platform\n• **PayMerchant** - Crypto payment infrastructure\n\nWhich one would you like to know more about?",
  "how can i integrate your api": "Our APIs are designed for easy integration:\n\n1. Sign up for an API key\n2. Check our documentation\n3. Use our SDKs (Python, Node.js, Go)\n4. Test in sandbox environment\n5. Deploy to production\n\nWould you like to see code examples?",
  "what are your pricing plans": "We offer flexible pricing:\n\n• **Starter** - Free tier for testing\n• **Growth** - $299/month for small teams\n• **Enterprise** - Custom pricing\n\nAll plans include API access and basic support. Contact us for a custom quote!",
  "schedule a demo": "I'd be happy to help you schedule a demo! Please visit our contact page or click the 'Schedule Meeting' button to book a time with our team.",
  "default": "I'm here to help! You can ask me about:\n• Our products and services\n• API integration\n• Pricing information\n• Technical documentation\n\nHow can I assist you today?"
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm ROTTAY's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const lowerText = messageText.toLowerCase()
      let response = botResponses.default
      
      for (const key in botResponses) {
        if (lowerText.includes(key)) {
          response = botResponses[key]
          break
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
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
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-40 w-96 h-[600px] bg-gray-950 border border-gray-800 rounded-lg shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-medium">ROTTAY Assistant</h3>
                  <p className="text-xs text-gray-500">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-500 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' ? 'bg-white ml-2' : 'bg-gray-800 mr-2'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-black" />
                      ) : (
                        <Bot className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <div className={`px-4 py-2 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-white text-black' 
                        : 'bg-gray-900 text-gray-300'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
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
                  <div className="bg-gray-900 px-4 py-2 rounded-lg">
                    <Loader className="w-4 h-4 text-gray-400 animate-spin" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickResponses.map((response) => (
                    <button
                      key={response}
                      onClick={() => handleSend(response)}
                      className="px-3 py-1 text-xs bg-gray-900 text-gray-300 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-800">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}