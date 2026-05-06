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
      className="py-24 md:py-36 px-4 section-about relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Get to know me"}</p>
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 heading-underline ${isVisible ? 'visible' : ''}`}>
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mt-6 animate-gradient" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
  A Passionate Developer Based in India
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                   {`I'm a passionate MERN Stack Developer focused on building modern, responsive, and user-friendly web applications.`}
                </p>
                <p>
                  {`Skilled in React.js, Node.js, MongoDB, and modern frontend development. I enjoy turning ideas into clean digital experiences while continuously learning new technologies.`}
                 </p>
                
                <p>
                   {`Beyond coding, I love exploring tech trends, bikes, sports, and sharing knowledge with the developer community.`}
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            className={`grid grid-cols-2 gap-5 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className={`glass-card rounded-2xl p-6 group cursor-default transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(100,200,180,0.3)]">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
