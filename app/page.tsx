"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { ArrowDown, Recycle, TreePine, Factory, ArrowRight, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

import { ReactNode } from "react";

function FadeInWhenVisible({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  const features = [
    {
      icon: <Recycle className="h-12 w-12 text-primary mb-4" />,
      title: "Efficient Recycling",
      description: "State-of-the-art processing facilities that handle various types of plastic waste.",
    },
    {
      icon: <TreePine className="h-12 w-12 text-primary mb-4" />,
      title: "Environmental Impact",
      description: "Reducing landfill waste and carbon emissions through sustainable practices.",
    },
    {
      icon: <Factory className="h-12 w-12 text-primary mb-4" />,
      title: "Industrial Solutions",
      description: "Custom recycling programs for businesses of all sizes.",
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          {/* Animated Circles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/5"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: Math.random() * 2 + 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left relative"
            >
              {/* Decorative Elements */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
              >
                <Leaf className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-white text-sm font-medium mb-6">
                  🌱 Sustainable Recycling Solutions
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                Transform
                <span className="text-primary"> Waste</span>
                <br />
                into <span className="text-primary">Value</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-muted-foreground mb-8 max-w-lg"
              >
                Join GREEN PolySource in our mission to create a sustainable future through innovative recycling
                solutions. Together, we can make a difference.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="rounded-full px-8" onClick={() => document.getElementById('our-process')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-12 grid grid-cols-3 gap-8"
              >
                {[
                  { number: "500+", label: "Tons Recycled" },
                  { number: "200+", label: "Partners" },
                  { number: "50%", label: "Carbon Reduced" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Illustration */}
              <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="relative z-10">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/hero.jpg"
                    alt="Recycling Illustration"
                    width={600}
                    height={600}
                    className="rounded-2xl"
                  />

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute -top-8 -right-8 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center"
                  >
                    <Recycle className="w-10 h-10 text-primary" />
                  </motion.div>

                  <motion.div
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <TreePine className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-[#182404]">
                      <p className="text-sm font-medium">Eco-Friendly</p>
                      <p className="text-xs">100% Sustainable</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <p className="text-sm font-medium text-[#182404]">Recycling Progress</p>
                    </div>
                    <div className="w-32 h-2 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                    className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Factory className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-[#182404]">
                      <p className="text-sm font-medium">Industrial</p>
                      <p className="text-xs">Solutions</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-sm text-muted-foreground">Scroll to explore</p>
            <ArrowDown className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>
      </section>

      <section id="our-process" className="py-24 bg-background relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full"></div>
                <Image
                  src="/process.jpg"
                  alt="Recycling process"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">How We Transform Waste</h2>
                <p className="text-muted-foreground mb-8">
                  Our innovative recycling process ensures maximum resource recovery while minimizing environmental
                  impact. We use cutting-edge technology to sort, clean, and process various types of plastic waste.
                </p>

                <div className="space-y-4">
                  {[
                    "Collection of plastic waste from various sources",
                    "Sorting and separation using advanced technology",
                    "Cleaning and processing to remove contaminants",
                    "Transformation into reusable materials",
                    "Distribution to manufacturers for new products",
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                        {index + 1}
                      </div>
                      <p>{step}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/about">
                    <Button variant="outline" className="group">
                      Learn More About Our Process
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted relative">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-4">
                Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Making a Difference</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our recycling efforts have made a significant impact on the environment.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Tons Recycled Monthly" },
              { number: "200+", label: "Business Partners" },
              { number: "50%", label: "Carbon Footprint Reduction" },
            ].map((stat, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <Card className="p-8 text-center border-none shadow-lg bg-card">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative">
        <div className="container">
          <FadeInWhenVisible>
            <div className="max-w-3xl mx-auto text-center bg-card p-12 rounded-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full"></div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-foreground">
                Ready to Start Recycling?
              </h2>
              <p className="text-muted-foreground mb-8 relative z-10">
                Contact us today to learn more about our recycling solutions and how we can help your business reduce
                waste.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 relative z-10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}

