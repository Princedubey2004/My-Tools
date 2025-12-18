"use client"

import { motion } from "framer-motion"
import { Users, Target, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <motion.h2 
          className="text-4xl font-bold tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Building the future of team collaboration.
        </motion.h2>
        <motion.p 
          className="mt-6 text-lg leading-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Team Pulse was born from a simple observation: modern teams are overwhelmed by scattered tools and disjointed workflows. We set out to create a unified platform that brings clarity and momentum to your daily operations.
        </motion.p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {[
            {
              name: 'Our Mission',
              description: 'To simplify complex teamwork and empower organizations to deliver their best work without friction.',
              icon: Target,
            },
            {
              name: 'Our Community',
              description: 'Built alongside incredible remote and hybrid teams who provide constant feedback to shape our roadmap.',
              icon: Users,
            },
            {
              name: 'Fast Execution',
              description: 'We believe in shipping fast, maintaining rock-solid reliability, and keeping the interface incredibly intuitive.',
              icon: Zap,
            },
          ].map((value, index) => (
            <motion.div 
              key={value.name} 
              className="flex flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <value.icon className="h-5 w-5 flex-none text-brand-primary" aria-hidden="true" />
                {value.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">{value.description}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  )
}
