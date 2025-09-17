"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Command } from 'cmdk'
import { Search, FileText, Home, Package, Users, HelpCircle, Settings, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const commands = [
  { id: 'home', label: 'Home', icon: Home, href: '/' },
  { id: 'products', label: 'Products', icon: Package, href: '/products' },
  { id: 'data-engine', label: 'Data Engine', icon: FileText, href: '/products/data-engine', group: 'Products' },
  { id: 'genai', label: 'GenAI Platform', icon: FileText, href: '/products/genai', group: 'Products' },
  { id: 'shield', label: 'Shield', icon: FileText, href: '/products/shield', group: 'Products' },
  { id: 'customers', label: 'Customers', icon: Users, href: '/customers' },
  { id: 'docs', label: 'Documentation', icon: FileText, href: '/docs' },
  { id: 'support', label: 'Support', icon: HelpCircle, href: '/support' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = (command: typeof commands[0]) => {
    setOpen(false)
    router.push(command.href)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={() => setOpen(false)}
          />
          
          {/* Command palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50"
          >
            <Command className="rounded-xl border border-gray-800 bg-gray-900/95 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center border-b border-gray-800 px-4">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Search for anything..."
                  className="flex-1 py-4 bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                />
                <kbd className="px-2 py-1 text-xs text-gray-400 bg-gray-800 rounded">ESC</kbd>
              </div>
              
              <Command.List className="max-h-96 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-gray-500">
                  No results found.
                </Command.Empty>
                
                <Command.Group heading="Pages" className="mb-2">
                  <div className="px-2 py-1 text-xs text-gray-500 uppercase">Pages</div>
                  {commands.filter(c => !c.group).map((command) => {
                    const Icon = command.icon
                    return (
                      <Command.Item
                        key={command.id}
                        onSelect={() => runCommand(command)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
                      >
                        <Icon className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{command.label}</span>
                        <ArrowRight className="w-3 h-3 text-gray-600 ml-auto" />
                      </Command.Item>
                    )
                  })}
                </Command.Group>

                <Command.Group heading="Products" className="mb-2">
                  <div className="px-2 py-1 text-xs text-gray-500 uppercase">Products</div>
                  {commands.filter(c => c.group === 'Products').map((command) => {
                    const Icon = command.icon
                    return (
                      <Command.Item
                        key={command.id}
                        onSelect={() => runCommand(command)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
                      >
                        <Icon className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{command.label}</span>
                        <ArrowRight className="w-3 h-3 text-gray-600 ml-auto" />
                      </Command.Item>
                    )
                  })}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}