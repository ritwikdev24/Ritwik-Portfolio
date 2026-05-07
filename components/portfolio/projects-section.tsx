"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Jobby App",
    description:
      "A job search platform where users can search jobs, view details, and filter jobs based on salary and employment type.",
    image: "/Projects/jobby.png",
    tags: ["React", "JWT", "REST API", "CSS"],
    github: "",
    live: "https://jobbybyritwik.ccbp.tech",
    credentials: {
      username: "rahul",
      password: "rahul@2021",
    },
  },

  {
    title: "Nxt Watch",
    description:
      "A YouTube-inspired video platform with trending videos, gaming section, saved videos, and dark/light mode.",
    image: "/Projects/nxtwatch.png",
    tags: ["React", "Routing", "Context API", "JWT"],
    github: "",
    live: "",
    credentials: {
      username: "rahul",
      password: "rahul@2021",
    },
  },

  {
    title: "Rock Paper Scissors",
    description:
      "An interactive game built using React with score tracking, game logic, and responsive design.",
    image: "/Projects/games.png",
    tags: ["React", "Game Logic", "CSS"],
    github: "",
    live: "https://ritwikgames.ccbp.tech",
  },
]

export function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-36 px-4 section-projects relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// My work"}</p>
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 heading-underline ${isVisible ? 'visible' : ''}`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mt-6 animate-gradient" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card group glass-card rounded-3xl overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover project-image"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(100,200,180,0.4)]"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
)}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(100,200,180,0.4)]"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                {/* Folder Icon */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-colors">
                  <FolderOpen className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {project.credentials && (
                <div className="mb-4 p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-xs font-semibold text-primary mb-1">
                    Demo Credentials
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Username: {project.credentials.username}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Password: {project.credentials.password}
                  </p>
                </div>
)}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {false && (
  <div
    className={`text-center mt-16 transition-all duration-700 delay-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <Button
      variant="outline"
      size="lg"
      className="btn-glow rounded-full px-10 py-6 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
      asChild
    >
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Github className="mr-2 h-5 w-5" />
        View More on GitHub
      </a>
    </Button>
  </div>
)}
      </div>
    </section>
  )
}
