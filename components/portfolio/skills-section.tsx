"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "HTML5", level: 95, color: "from-orange-500 to-orange-600" },
  { name: "CSS3", level: 90, color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-500" },
  { name: "React.js", level: 88, color: "from-cyan-400 to-cyan-500" },
  { name: "Python", level: 75, color: "from-green-500 to-green-600" },
  { name: "Node.js", level: 80, color: "from-green-600 to-green-700" },
  { name: "MongoDB", level: 78, color: "from-green-500 to-emerald-600" },
  { name: "Express.js", level: 80, color: "from-gray-500 to-gray-600" },
]

const techStack = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "Git", icon: "📦" },
  { name: "Tailwind", icon: "💨" },
  { name: "Figma", icon: "🎯" },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels((prev) => {
                const newLevels = [...prev]
                newLevels[index] = skill.level
                return newLevels
              })
            }, index * 100)
          })
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
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// What I know"}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6">Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{animatedLevels[index]}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${animatedLevels[index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`glass rounded-xl p-4 text-center hover:scale-110 transition-all duration-300 hover:shadow-lg cursor-default ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 400}ms` }}
                >
                  <span className="text-2xl mb-2 block">{tech.icon}</span>
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
