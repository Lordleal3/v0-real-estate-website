"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: "1+", label: "Years Experience" },
  ]

  return (
    <section id="about" className="relative bg-background py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-secondary to-muted" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 h-32 w-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-5xl font-light text-primary">JE</span>
                  </div>
                  <p className="text-sm tracking-[0.3em] text-muted-foreground">PORTRAIT COMING SOON</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 h-64 w-64 border border-primary/20" />
            <div className="absolute -top-8 -left-8 h-32 w-32 bg-primary/10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <motion.p 
              className="mb-4 text-sm tracking-[0.4em] text-primary"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ABOUT
            </motion.p>
            
            <motion.h2 
              className="mb-8 text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-balance">Elevating Your</span>
              <br />
              <span className="italic text-primary">Real Estate</span>
              <br />
              <span className="text-balance">Experience</span>
            </motion.h2>

            <motion.div 
              className="space-y-6 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg">
                As a distinguished member of Keller Williams Realty, Jaleal {'"Jay"'} Evans brings an 
                unparalleled commitment to excellence in California&apos;s luxury real estate market.
              </p>
              <p>
                With a refined understanding of the discerning buyer&apos;s needs and an extensive network 
                of industry connections, Jay delivers a seamless, white-glove experience from initial 
                consultation to closing. His expertise spans California&apos;s most prestigious neighborhoods, 
                from coastal estates to sophisticated urban residences.
              </p>
              <p>
                Jay&apos;s philosophy centers on building lasting relationships founded on trust, 
                transparency, and an unwavering dedication to achieving exceptional results. Whether 
                you&apos;re seeking your dream home or positioning your property for maximum value, 
                Jay&apos;s strategic approach ensures every detail is handled with precision and care.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-12 flex justify-center border-t border-border pt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-light text-primary md:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground">{stat.label.toUpperCase()}</p>
                </div>
              ))}
            </motion.div>

            {/* Keller Williams Badge */}
            <motion.div 
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="h-px flex-1 bg-border" />
              <p className="text-xs tracking-[0.3em] text-muted-foreground">KELLER WILLIAMS REALTY</p>
              <div className="h-px flex-1 bg-border" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
