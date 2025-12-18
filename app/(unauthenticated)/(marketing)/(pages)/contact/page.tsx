"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="isolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          >
            Get in touch
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 md:flex lg:mx-0 lg:max-w-none">
          <motion.div 
            className="flex-1 rounded-2xl border border-border bg-card p-10 shadow-sm"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand-primary" />
              Office
            </h3>
            <address className="mt-3 space-y-1 not-italic text-muted-foreground">
              <p>123 Innovation Drive</p>
              <p>San Francisco, CA 94107</p>
            </address>
          </motion.div>
          <motion.div 
            className="flex-1 rounded-2xl border border-border bg-card p-10 shadow-sm"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold flex items-center gap-2">
              <Mail className="h-5 w-5 text-brand-primary" />
              Email
            </h3>
            <p className="mt-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              hello@teampulsehq.com
            </p>
          </motion.div>
          <motion.div 
            className="flex-1 rounded-2xl border border-border bg-card p-10 shadow-sm"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          >
            <h3 className="font-semibold flex items-center gap-2">
              <Phone className="h-5 w-5 text-brand-primary" />
              Support
            </h3>
            <p className="mt-3 text-muted-foreground">
              +1 (800) 555-0199
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          <form className="mx-auto max-w-xl sm:mt-20" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We will reach out shortly."); }}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-foreground">First name</label>
                <div className="mt-2.5">
                  <input type="text" name="first-name" id="first-name" required className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-foreground">Last name</label>
                <div className="mt-2.5">
                  <input type="text" name="last-name" id="last-name" required className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">Email</label>
                <div className="mt-2.5">
                  <input type="email" name="email" id="email" required className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">Message</label>
                <div className="mt-2.5">
                  <textarea name="message" id="message" rows={4} required className="block w-full rounded-md border-0 bg-background px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6" defaultValue={''} />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit">Send message</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
