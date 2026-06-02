"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Instagram, MapPin, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.mailtoUrl) {
        // Open email client with pre-filled message
        window.open(data.mailtoUrl, "_blank")
        setIsSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jw.evans@kw.com",
      href: "mailto:jw.evans@kw.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(510) 990-7011",
      href: "tel:5109907011",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@jwe.realty",
      href: "https://instagram.com/jwe.realty",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "California",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="relative bg-secondary/30 py-24 md:py-32" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm tracking-[0.4em] text-primary">CONTACT</p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Let&apos;s Start Your</span>
            <br />
            <span className="italic text-primary">Journey</span>
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ready to find your dream home or maximize your property&apos;s potential? 
              I&apos;m here to guide you through every step of your real estate journey with 
              personalized attention and expert insight.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-6 border-b border-border/50 pb-6 transition-colors hover:border-primary/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                    <item.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-muted-foreground">{item.label.toUpperCase()}</p>
                    <p className="mt-1 text-lg text-foreground">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="rounded-none border border-border bg-card/50 p-6"
            >
              <p className="mb-4 text-xs tracking-[0.2em] text-primary">AVAILABILITY</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 5:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs tracking-[0.2em] text-muted-foreground">
                  FULL NAME
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs tracking-[0.2em] text-muted-foreground">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-xs tracking-[0.2em] text-muted-foreground">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  placeholder="Enter your phone (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs tracking-[0.2em] text-muted-foreground">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  placeholder="Tell me about your real estate goals..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitted || isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>THANK YOU, JAY WILL BE IN CONTACT</span>
                  </>
                ) : isLoading ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
