"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Rocket, Heart } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful user interfaces",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Loving what I do every day",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Get to know me"}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="glass rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                A Passionate Developer Based in India
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {`Hi there! I'm a fresh graduate with a burning passion for web development. 
                  My journey into coding started with curiosity and has grown into a full-blown 
                  love affair with creating digital experiences.`}
                </p>
                <p>
                  {`I specialize in building responsive, user-friendly web applications using 
                  modern technologies like React.js, Next.js, and the MERN stack. I believe 
                  in writing clean, efficient code that not only works but is also a joy to maintain.`}
                </p>
                <p>
                  {`When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing my learnings with the developer community.`}
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
