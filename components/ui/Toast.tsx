"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, InfoIcon, AlertTriangle } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

interface ToastMessage {
  id: string
  type: ToastType
  title: string
  description?: string
}

interface ToastProps {
  message: ToastMessage
  onDismiss: (id: string) => void
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: InfoIcon,
  warning: AlertTriangle,
}

const colors = {
  success: 'border-green-800 bg-green-950/90',
  error: 'border-red-800 bg-red-950/90',
  info: 'border-gray-700 bg-gray-900/90',
  warning: 'border-yellow-800 bg-yellow-950/90',
}

const iconColors = {
  success: 'text-green-400',
  error: 'text-red-400',
  info: 'text-gray-400',
  warning: 'text-yellow-400',
}

function Toast({ message, onDismiss }: ToastProps) {
  const Icon = icons[message.type]

  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(message.id)
    }, 5000)

    return () => clearTimeout(timer)
  }, [message.id, onDismiss])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`pointer-events-auto flex items-start gap-3 w-full max-w-sm backdrop-blur-sm border rounded-lg p-4 shadow-lg ${colors[message.type]}`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColors[message.type]}`} />
      <div className="flex-1">
        <p className="text-sm font-medium text-white">{message.title}</p>
        {message.description && (
          <p className="mt-1 text-sm text-gray-400">{message.description}</p>
        )}
      </div>
      <button
        onClick={() => onDismiss(message.id)}
        className="flex-shrink-0 text-gray-500 hover:text-gray-300 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export function ToastContainer() {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  useEffect(() => {
    const handleToast = (event: CustomEvent<ToastMessage>) => {
      setMessages((prev) => [...prev, event.detail])
    }

    window.addEventListener('toast' as any, handleToast as any)
    return () => window.removeEventListener('toast' as any, handleToast as any)
  }, [])

  const dismiss = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id))
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {messages.map((message) => (
          <Toast key={message.id} message={message} onDismiss={dismiss} />
        ))}
      </AnimatePresence>
    </div>
  )
}

// Helper function to show toast
export function showToast(type: ToastType, title: string, description?: string) {
  const event = new CustomEvent('toast', {
    detail: {
      id: Date.now().toString(),
      type,
      title,
      description,
    },
  })
  window.dispatchEvent(event)
}