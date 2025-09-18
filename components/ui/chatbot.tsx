"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader, Minimize2 } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const quickResponses = [
  "Tell me about Voice AI",
  "How does the API work?",
  "What's your pricing?",
  "Schedule a demo"
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
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
  const [isMobile, setIsMobile] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Prevent chat from reopening automatically
  useEffect(() => {
    if (hasInteracted && !isOpen) {
      // User has closed the chat, don't auto-reopen
      return
    }
  }, [hasInteracted, isOpen])

  const handleOpen = () => {
    setIsOpen(true)
    setIsMinimized(false)
    setHasInteracted(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsMinimized(false)
    setHasInteracted(true)
  }

  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleSend = async (text?: string) => {
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

    try {
      // Call the API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          history: messages.slice(-10).map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }))
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Chat error:', error)
      
      // Fallback response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble connecting. Please try again or contact us directly at hello@rottay.com",
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence mode="wait">
        {!isOpen && !isMinimized && (
          <motion.button
            key="chat-button"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className={`fixed z-40 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-200 transition-colors ${
              isMobile ? 'bottom-4 right-4 w-12 h-12' : 'bottom-6 right-6 w-14 h-14'
            }`}
            aria-label="Open chat"
          >
            <MessageCircle className={isMobile ? "w-5 h-5" : "w-6 h-6"} />
          </motion.button>
        )}

        {/* Minimized State - Mobile Only */}
        {isMinimized && isMobile && (
          <motion.button
            key="chat-minimized"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsMinimized(false)}
            className="fixed bottom-4 right-4 z-40 bg-white text-black px-4 py-2 rounded-full shadow-2xl flex items-center gap-2"
          >
            <Bot className="w-4 h-4" />
            <span className="text-sm font-medium">Chat</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-40 bg-gray-950 border border-gray-800 shadow-2xl flex flex-col ${
              isMobile 
                ? 'inset-0 rounded-none' 
                : 'bottom-6 right-6 w-96 h-[600px] rounded-lg'
            }`}
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
              <div className="flex items-center gap-2">
                {isMobile && (
                  <button
                    onClick={handleMinimize}
                    className="p-1 text-gray-500 hover:text-white transition-colors"
                    aria-label="Minimize chat"
                  >
                    <Minimize2 className="w-5 h-5" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-1 text-gray-500 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
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