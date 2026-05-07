"use client"

import { useEffect, useState, useRef } from "react"
import { Github, Linkedin, Instagram, ArrowDown, FileText, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const roles = ["Frontend Developer", "React Developer", "UI/UX Enthusiast", "MERN Stack Developer"]

// Hardcoded consistent particle data to avoid hydration issues
const PARTICLES = [
  { left: 0, duration: 8, delay: 0, width: 2, height: 2, opacity: 0.3 },
  { left: 5, duration: 8.6, delay: 0.25, width: 2.2, height: 2.15, opacity: 0.32 },
  { left: 10, duration: 9.2, delay: 0.5, width: 2.4, height: 2.3, opacity: 0.34 },
  { left: 15, duration: 9.8, delay: 0.75, width: 2.6, height: 2.45, opacity: 0.36 },
  { left: 20, duration: 10.4, delay: 1, width: 2.8, height: 2.6, opacity: 0.38 },
  { left: 25, duration: 11, delay: 1.25, width: 3, height: 2.75, opacity: 0.4 },
  { left: 30, duration: 11.6, delay: 1.5, width: 3.2, height: 2.9, opacity: 0.42 },
  { left: 35, duration: 12.2, delay: 1.75, width: 3.4, height: 3.05, opacity: 0.44 },
  { left: 40, duration: 12.8, delay: 2, width: 3.6, height: 3.2, opacity: 0.46 },
  { left: 45, duration: 13.4, delay: 2.25, width: 3.8, height: 3.35, opacity: 0.48 },
  { left: 50, duration: 14, delay: 2.5, width: 4, height: 3.5, opacity: 0.5 },
  { left: 55, duration: 14.6, delay: 2.75, width: 3.8, height: 3.35, opacity: 0.48 },
  { left: 60, duration: 15.2, delay: 3, width: 3.6, height: 3.2, opacity: 0.46 },
  { left: 65, duration: 15.8, delay: 3.25, width: 3.4, height: 3.05, opacity: 0.44 },
  { left: 70, duration: 16.4, delay: 3.5, width: 3.2, height: 2.9, opacity: 0.42 },
  { left: 75, duration: 17, delay: 3.75, width: 3, height: 2.75, opacity: 0.4 },
  { left: 80, duration: 17.6, delay: 4, width: 2.8, height: 2.6, opacity: 0.38 },
  { left: 85, duration: 18.2, delay: 4.25, width: 2.6, height: 2.45, opacity: 0.36 },
  { left: 90, duration: 18.8, delay: 4.5, width: 2.4, height: 2.3, opacity: 0.34 },
  { left: 95, duration: 19.4, delay: 4.75, width: 2.2, height: 2.15, opacity: 0.32 },
]

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((particle, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 section-hero overflow-hidden"
    >
      <FloatingParticles />

      <div className="container mx-auto">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Left Side - Info */}
          {/* Left Side - Info */}
            <div className="flex-1 w-full text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider">
              {"// Hello, World! I'm"}
            </p>

            {/* Name */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Ritwik Kanna
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-lg md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {displayedText}
                <span className="typing-cursor text-primary">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm md:text-base mb-10 leading-relaxed text-pretty">
              Passionate MERN Stack Developer and frontend enthusiast focused on building responsive, user-friendly web applications. I enjoy turning ideas into real-world projects through clean code and creative problem-solving.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
              <Button
  size="lg"
  asChild
  className="btn-glow group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full transition-all duration-300"
>
  <a href="/Ritwik_Full_Stack_Developer.pdf" download>
    <FileText className="mr-2 h-5 w-5" />
    Download Resume
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  </a>
</Button>
              <Button
                variant="outline"
                size="lg"
                className="group px-8 py-6 text-base rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,200,180,0.3)]"
                asChild
              >
                <a href="#projects">
                  <FolderOpen className="mr-2 h-5 w-5" />
                  View Projects
                </a>
              </Button>
            </div>

            
            {/* Social Links - Hidden for now */}
{/* 
<div className="flex items-center justify-center lg:justify-start gap-4">
  {[
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ].map(({ icon: Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-transparent hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(100,200,180,0.4)]"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </a>
  ))}
</div>
*/}
</div>
          {/* Right Side - Profile Photo */}
          <div
            className={`flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
          >
            <div className="photo-frame items-center justify-center">
              <div className="w-48 h-48 md:w-60 md:h-60 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden bg-secondary">
                <Image
                  src="/profile.jpg"
                  alt="Profile photo"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-top scale-100"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
