"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { Leaf, CheckCircle, Award, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

import { ReactNode } from "react"

function FadeInWhenVisible({ children, delay = 0, direction = null }: { children: ReactNode, delay?: number, direction?: string | null }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  let initial: { opacity: number; y?: number; x?: number } = { opacity: 0, y: 30 }
  if (direction === "left") initial = { opacity: 0, x: -50 }
  if (direction === "right") initial = { opacity: 0, x: 50 }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: initial,
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.6, delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Sustainability",
      description: "We are committed to sustainable practices in everything we do.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Quality",
      description: "We maintain the highest standards in our recycling processes.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "We continuously seek new ways to improve recycling technology.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community",
      description: "We believe in building strong relationships with our communities.",
    },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>

        <div className="container relative z-10">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary-foreground rounded-full mb-4">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About GREEN PolySource</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leading the way in sustainable recycling solutions since 2020.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible direction="left">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Recycling facility"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible direction="right">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At GREEN PolySource, we're committed to revolutionizing the recycling industry through innovative
                  technology and sustainable practices. Our goal is to create a circular economy where waste becomes a
                  valuable resource.
                </p>
                <div className="space-y-4">
                  {[
                    "State-of-the-art recycling facilities",
                    "Commitment to environmental sustainability",
                    "Partnerships with leading industries",
                    "Advanced sorting and processing technology",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xl font-medium bg-primary/20 text-primary-foreground rounded-full mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#182404]">What Drives Us</h2>
              <p className="text-[#182404] max-w-2xl mx-auto">
                Our core values guide everything we do at GREEN PolySource.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm h-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex flex-col items-center text-center h-full"
                  >
                    <div className="mb-4 p-3 bg-primary/10 rounded-full">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-white rounded-full mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We've Grown</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From a small startup to an industry leader in recycling innovation.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: "2020",
                title: "Company Founded",
                description: "GREEN PolySource was established with a mission to revolutionize plastic recycling.",
              },
              {
                year: "2021",
                title: "First Recycling Facility",
                description:
                  "Opened our first state-of-the-art recycling facility capable of processing 100 tons monthly.",
              },
              {
                year: "2022",
                title: "Industry Partnerships",
                description:
                  "Formed strategic partnerships with leading manufacturers to create closed-loop recycling systems.",
              },
              {
                year: "2023",
                title: "Expansion",
                description:
                  "Expanded operations to include multiple types of plastic and increased capacity to 500 tons monthly.",
              },
              {
                year: "2024",
                title: "Innovation Award",
                description:
                  "Received industry recognition for our innovative recycling technologies and sustainable practices.",
              },
            ].map((milestone, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <div className="flex mb-12 last:mb-0">
                  <div className="mr-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year.substring(2)}
                    </div>
                    {index !== 4 && <div className="w-0.5 h-full bg-primary/20 mt-4"></div>}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title} <span className="text-primary">{milestone.year}</span>
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

