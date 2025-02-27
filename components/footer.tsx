"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Leaf } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-lg text-foreground">
                  GREEN <span className="text-primary">PolySource</span>
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming waste into value through innovative recycling solutions.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Plastic Recycling</li>
                <li className="text-sm text-muted-foreground">Industrial Solutions</li>
                <li className="text-sm text-muted-foreground">Waste Management</li>
                <li className="text-sm text-muted-foreground">Sustainability Consulting</li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/50 rounded-full"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/50 rounded-full"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/50 rounded-full"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 bg-white/50 rounded-full"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-6">
                <h4 className="font-bold text-foreground mb-2">Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-2">Stay updated with our latest news</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 text-sm rounded-l-md border border-r-0 focus:outline-none focus:ring-1 focus:ring-primary w-full"
                  />
                  <button className="bg-primary text-primary-foreground px-3 py-2 rounded-r-md text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} GREEN PolySource. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

