"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Buyer Representation",
    description: "Expert guidance through every step of your home buying journey, from search to closing.",
    icon: "🏠",
  },
  {
    title: "Seller Representation",
    description: "Strategic marketing and negotiation to maximize your property's value in the market.",
    icon: "📈",
  },
  {
    title: "Luxury Properties",
    description: "Specialized expertise in California's most prestigious and exclusive real estate markets.",
    icon: "✨",
  },
  {
    title: "Market Analysis",
    description: "Comprehensive insights and data-driven strategies tailored to your real estate goals.",
    icon: "📊",
  },
]

export function ServicesSection() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm tracking-[0.4em] text-primary">SERVICES</p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Comprehensive</span>
            <br />
            <span className="italic text-primary">Real Estate</span> Solutions
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:bg-secondary/30"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center border border-border text-2xl transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:scale-110">
                <span className="transition-all group-hover:brightness-0 group-hover:invert">{service.icon}</span>
              </div>
              
              <h3 className="mb-3 text-xl font-light text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>

              {/* Corner accent */}
              <div className="absolute -bottom-12 -right-12 h-24 w-24 border border-primary/10 transition-all duration-500 group-hover:border-primary/30" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
