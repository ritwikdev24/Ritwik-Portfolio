"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rithvikkoppisetti@gmail.com",
    href: "mailto:rithvikkoppisetti@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 xxxxxxxxxx",
    href: "tel:+91xxxxxxxxxx",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
]

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub", disabled: true },
  { icon: Linkedin, href: "#", label: "LinkedIn", disabled: true },
  { icon: Instagram, href: "#", label: "Instagram", disabled: true },
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setFormStatus("sending")

  const formData = new FormData(e.currentTarget)

  const response = await fetch("https://formspree.io/f/mrblaqwe", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })

  if (response.ok) {
    setFormStatus("sent")
    e.currentTarget.reset()

    setTimeout(() => {
      setFormStatus("idle")
    }, 3000)
  } else {
    alert("Something went wrong!")
    setFormStatus("idle")
  }
}

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-36 px-4 section-contact relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Let's connect"}</p>
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 heading-underline ${isVisible ? 'visible' : ''}`}>
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mt-6 animate-gradient" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {`Let's Build Something Amazing Together`}
            </h3>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              {`I'm always open to discussing new projects, creative ideas, or opportunities to 
              be part of your vision. Feel free to reach out through any of the following channels.`}
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <div
                  key={label}
                  className={`glass-card flex items-center gap-4 p-5 rounded-2xl ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(100,200,180,0.3)] transition-shadow">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
  {/* 
<div>
  <div className="flex gap-4">
    {socialLinks.map(({ icon: Icon, href, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-transparent hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(100,200,180,0.4)]"
        aria-label={label}
      >
        <Icon className="h-5 w-5" />
      </a>
    ))}
  </div>
</div>
*/}
</div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 md:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl transition-all focus:shadow-[0_0_15px_rgba(100,200,180,0.2)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl transition-all focus:shadow-[0_0_15px_rgba(100,200,180,0.2)]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Discussion"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl transition-all focus:shadow-[0_0_15px_rgba(100,200,180,0.2)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  rows={5}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary resize-none rounded-xl transition-all focus:shadow-[0_0_15px_rgba(100,200,180,0.2)]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="btn-glow w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base transition-all duration-300"
                disabled={formStatus !== "idle"}
              >
                {formStatus === "idle" && (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
                {formStatus === "sending" && "Sending..."}
                {formStatus === "sent" && "Message Sent!"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
