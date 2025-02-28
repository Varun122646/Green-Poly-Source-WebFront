// "use client"

// import { useRef, useEffect } from "react"
// import { motion, useAnimation } from "framer-motion"
// import { Mail, MapPin, Phone, Send } from "lucide-react"
// import { useInView } from "react-intersection-observer"

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"

// import { ReactNode } from "react";

// function FadeInWhenVisible({ children, delay = 0, direction = null }: { children: ReactNode, delay?: number, direction?: string | null }) {
//   const controls = useAnimation()
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible")
//     }
//   }, [controls, inView])

//   let initial: { opacity: number; y?: number; x?: number } = { opacity: 0, y: 30 }
//   if (direction === "left") initial = { opacity: 0, x: -50 }
//   if (direction === "right") initial = { opacity: 0, x: 50 }

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: initial,
//         visible: {
//           opacity: 1,
//           y: 0,
//           x: 0,
//           transition: { duration: 0.6, delay },
//         },
//       }}
//     >
//       {children}
//     </motion.div>
//   )
// }

// export default function ContactPage() {
//   return (
//     <div className="pt-16">
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
//         <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>

//         <div className="container relative z-10">
//           <FadeInWhenVisible>
//             <div className="text-center mb-16">
//               <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-[white] rounded-full mb-4">
//                 Get In Touch
//               </span>
//               <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Have questions about our recycling solutions? We're here to help.
//               </p>
//             </div>
//           </FadeInWhenVisible>

//           <div className="grid md:grid-cols-2 gap-12">
//             <FadeInWhenVisible direction="left">
//               <Card className="p-8 border-none shadow-xl bg-white/90 backdrop-blur-sm">
//                 <h2 className="text-2xl font-bold mb-6 flex items-center text-[#182404]">
//                   <Send className="mr-2 h-5 w-5 text-[#182404]" />
//                   Send Us a Message
//                 </h2>
//                 <form className="space-y-6 text-[#182404]">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2 ">
//                       <Label htmlFor="firstName">First Name</Label>
//                       <Input id="firstName" placeholder="John" className="text-white" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <Input id="lastName" placeholder="Doe" className="text-white" />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" placeholder="john.doe@example.com" className="text-white" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone (Optional)</Label>
//                     <Input id="phone" type="tel" placeholder="+1 (123) 456-7890" className="text-white"/>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject</Label>
//                     <Input id="subject" placeholder="How can we help you?" className="text-white" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={4} className="text-white" />
//                   </div>
//                   <Button className="w-full">
//                     Send Message
//                     <Send className="ml-2 h-4 w-4" />
//                   </Button>
//                 </form>
//               </Card>
//             </FadeInWhenVisible>

//             <FadeInWhenVisible direction="right">
//               <div className="space-y-6">
//                 <Card className="p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm ">
//                   <div className="flex items-start gap-4 ">
//                     <div className="p-3 bg-primary/10 rounded-full ">
//                       <MapPin className="text-[#182404] h-6 w-6" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-1 text-[#182404]">Our Location</h3>
//                       <p className="text-[#182404] ">
//                         123 Recycling Way
//                         <br />
//                         Green City, EC0 123
//                         <br />
//                         United Kingdom
//                       </p>
//                     </div>
//                   </div>
//                 </Card>

//                 <Card className="p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
//                   <div className="flex items-start gap-4">
//                     <div className="p-3 bg-primary/10 rounded-full">
//                       <Phone className="text-[#182404] h-6 w-6" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-1 text-[#182404]">Phone</h3>
//                       <p className="text-[#182404]">+44 (0) 123 456 7890</p>
//                       <p className="text-[#182404]">Monday - Friday: 9am - 5pm</p>
//                     </div>
//                   </div>
//                 </Card>

//                 <Card className="p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
//                   <div className="flex items-start gap-4">
//                     <div className="p-3 bg-primary/10 rounded-full">
//                       <Mail className="text-[#182404] h-6 w-6" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg mb-1 text-[#182404]">Email</h3>
//                       <p className="text-[#182404]">info@greenpolysource.com</p>
//                       <p className="text-[#182404]">support@greenpolysource.com</p>
//                     </div>
//                   </div>
//                 </Card>

//                 <div className="p-6 bg-primary/10 rounded-lg">
//                   <h3 className="font-bold text-lg mb-3">Business Hours</h3>
//                   <div className="space-y-2">
//                     <div className="flex justify-between">
//                       <span>Monday - Friday:</span>
//                       <span>9:00 AM - 5:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Saturday:</span>
//                       <span>10:00 AM - 2:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Sunday:</span>
//                       <span>Closed</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </FadeInWhenVisible>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-secondary">
//         <div className="container">
//           <FadeInWhenVisible>
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Find Us</h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 Visit our recycling facility or get in touch with our team.
//               </p>
//             </div>
//           </FadeInWhenVisible>

//           <FadeInWhenVisible>
//             <div className="rounded-lg overflow-hidden shadow-xl h-[400px] bg-gray-200">
//               {/* This would be replaced with an actual map component */}
//               <div className="w-full h-full flex items-center justify-center bg-primary/5">
//                 <p className="text-muted-foreground">Interactive Map Would Be Displayed Here</p>
//               </div>
//             </div>
//           </FadeInWhenVisible>
//         </div>
//       </section>
//     </div>
//   )
// }
"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useInView } from "react-intersection-observer"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { ReactNode } from "react";

function FadeInWhenVisible({ children, delay = 0, direction = null }: { children: ReactNode, delay?: number, direction?: string | null }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Contact saved successfully');
      } else {
        alert('Error saving information');
      }
    } catch (error) {
      alert('Error saving information');
    }
  };

  return (
    <div className="pt-16">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>

        <div className="container relative z-10">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-[white] rounded-full mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about our recycling solutions? We're here to help.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeInWhenVisible direction="left">
              <Card className="p-8 border-none shadow-xl bg-white/90 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-[#182404]">
                  <Send className="mr-2 h-5 w-5 text-[#182404]" />
                  Send Us a Message
                </h2>
                <form className="space-y-6 text-[#182404]" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 ">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="" className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="" className="text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="" className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="" className="text-white"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="" className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your inquiry..." rows={4} className="text-white placeholder-transparent focus:placeholder-white focus:placeholder-opacity-50 transition-all duration-300" />
                  </div>
                  <Button className="w-full" type="submit">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </FadeInWhenVisible>

            <FadeInWhenVisible direction="right">
              <div className="space-y-6">
                <Card className="p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm ">
                  <div className="flex items-start gap-4 ">
                    <div className="p-3 bg-primary/10 rounded-full ">
                      <MapPin className="text-[#182404] h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-[#182404]">Our Location</h3>
                      <p className="text-[#182404] ">
                        123 Recycling Way
                        <br />
                        Green City, EC0 123
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="text-[#182404] h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-[#182404]">Phone</h3>
                      <p className="text-[#182404]">+44 (0) 123 456 7890</p>
                      <p className="text-[#182404]">Monday - Friday: 9am - 5pm</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="text-[#182404] h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-[#182404]">Email</h3>
                      <p className="text-[#182404]">info@greenpolysource.com</p>
                      <p className="text-[#182404]">support@greenpolysource.com</p>
                    </div>
                  </div>
                </Card>

                <div className="p-6 bg-primary/10 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit our recycling facility or get in touch with our team.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="rounded-lg overflow-hidden shadow-xl h-[400px] bg-gray-200">
              {/* This would be replaced with an actual map component */}
              <div className="w-full h-full flex items-center justify-center bg-primary/5">
                <p className="text-muted-foreground">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}