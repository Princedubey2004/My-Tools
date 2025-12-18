"use client"

import { motion } from "framer-motion"
import { Activity, ShieldCheck, Zap, Globe, MessageSquare, BarChart } from "lucide-react"

const featureList = [
  {
    title: 'Real-time Pulse',
    description: 'Keep track of project health instantly. See who is working on what without interrupting their flow.',
    icon: Activity,
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SSO integration, and granular role-based access control out of the box.',
    icon: ShieldCheck,
  },
  {
    title: 'Lightning Fast',
    description: 'Built on edge infrastructure, ensuring actions and data updates feel instantaneous everywhere.',
    icon: Zap,
  },
  {
    title: 'Global Sync',
    description: 'Work offline and sync seamlessly. Perfect for distributed teams working across different timezones.',
    icon: Globe,
  },
  {
    title: 'In-context Chat',
    description: 'Discuss tasks right where the work happens. No more digging through endless chat channel histories.',
    icon: MessageSquare,
  },
  {
    title: 'Advanced Analytics',
    description: 'Automatically generated productivity reports to help identify bottlenecks and celebrate team velocity.',
    icon: BarChart,
  },
]

export default function FeaturesPage() {
  return (
    <div className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2 
            className="text-base font-semibold leading-7 text-brand-primary"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Deploy Faster
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Everything you need to ship projects
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Team Pulse provides a suite of deeply integrated tools so you can stop wrestling with your stack and start focusing on the work.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {featureList.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                className="relative pl-16 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                    <feature.icon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
