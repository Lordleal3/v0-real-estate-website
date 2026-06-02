"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    quote: "Jay made our dream home a reality. His attention to detail and understanding of our needs was exceptional.",
    author: "Marty Williams",
    location: "Oakland, CA",
  },
]

export function TestimonialsSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-32" ref={containerRef}>
      {/* Decorative Background */}
      <motion.div 
        className="absolute right-0 top-0 h-96 w-96 opacity-5"
        style={{ y }}
      >
        <div className="h-full w-full text-[400px] font-light leading-none text-foreground">
          &ldquo;
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm tracking-[0.4em] text-primary">TESTIMONIALS</p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl">
            Client <span className="italic text-primary">Experiences</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative border border-border bg-background/50 p-8 transition-all duration-500 hover:border-primary/50"
            >
              <div className="absolute -top-4 left-8 text-5xl font-light text-primary opacity-30">&ldquo;</div>
              
              <p className="mb-6 text-muted-foreground leading-relaxed pt-4">
                {testimonial.quote}
              </p>
              
              <div className="border-t border-border pt-6">
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-primary">{testimonial.location}</p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
