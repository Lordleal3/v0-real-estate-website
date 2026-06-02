"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center border border-primary/50 transition-all duration-500 group-hover:bg-primary">
            <span className="text-xl font-semibold text-primary transition-colors group-hover:text-primary-foreground">JE</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm tracking-widest text-foreground">JAY EVANS</p>
            <p className="text-xs tracking-wider text-muted-foreground">REALTOR®</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name.toUpperCase()}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-foreground"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-px w-6 bg-foreground"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-foreground"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden bg-background/95 backdrop-blur-md md:hidden"
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
