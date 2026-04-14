"use client"

import { useEffect, useRef, useState } from "react"
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiPython, 
  SiNodedotjs, SiMongodb, SiExpress, SiTypescript, 
  SiNextdotjs, SiGit, SiTailwindcss, SiFigma
} from "react-icons/si"

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
  { name: "HTML5", Icon: SiHtml5, color: "group-hover:text-orange-500" },
  { name: "CSS3", Icon: SiCss, color: "group-hover:text-blue-500" },
  { name: "JavaScript", Icon: SiJavascript, color: "group-hover:text-yellow-400" },
  { name: "TypeScript", Icon: SiTypescript, color: "group-hover:text-blue-600" },
  { name: "React", Icon: SiReact, color: "group-hover:text-cyan-400" },
  { name: "Next.js", Icon: SiNextdotjs, color: "group-hover:text-foreground" },
  { name: "Node.js", Icon: SiNodedotjs, color: "group-hover:text-green-500" },
  { name: "MongoDB", Icon: SiMongodb, color: "group-hover:text-green-600" },
  { name: "Python", Icon: SiPython, color: "group-hover:text-yellow-500" },
  { name: "Git", Icon: SiGit, color: "group-hover:text-orange-600" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "group-hover:text-cyan-500" },
  { name: "Figma", Icon: SiFigma, color: "group-hover:text-pink-500" },
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
      className="py-24 md:py-36 px-4 section-skills relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// What I know"}</p>
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 heading-underline ${isVisible ? 'visible' : ''}`}>
            My Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mt-6 animate-gradient" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl font-semibold mb-8 text-foreground">Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{animatedLevels[index]}%</span>
                </div>
                <div className="h-3 bg-secondary/50 rounded-full overflow-hidden skill-bar animate">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ 
                      width: `${animatedLevels[index]}%`,
                      boxShadow: animatedLevels[index] > 0 ? `0 0 20px rgba(100, 200, 180, 0.3)` : 'none'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
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
            <h3 className="text-xl font-semibold mb-8 text-foreground">Tech Stack</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`glass-card group rounded-2xl p-5 text-center cursor-default ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 400}ms` }}
                >
                  <tech.Icon className={`text-3xl mb-3 mx-auto text-muted-foreground transition-all duration-300 ${tech.color} group-hover:scale-125`} />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
