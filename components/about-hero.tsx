"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const skills = [
  { name: "HTML5", level: 95, color: "primary" },
  { name: "CSS3", level: 90, color: "accent" },
  { name: "JavaScript", level: 85, color: "primary" },
  { name: "React", level: 80, color: "accent" },
  { name: "Flutter", level: 75, color: "primary" },
  { name: "Ionic", level: 70, color: "accent" },
]

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "Ionic",
  "Node.js",
  "Firebase",
  "Git",
]

export function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-20 w-40 h-40 bg-accent/5 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-32 left-20 w-56 h-56 bg-primary/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal info */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span className="text-gradient">Ilias</span>
                <br />
                <span className="text-foreground">Développeur</span>
              </h1>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Développeur Web Étudiant</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Passionné par le développement web depuis mes débuts en informatique, je combine créativité et rigueur
                  technique pour créer des expériences digitales exceptionnelles qui marquent les esprits.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Actuellement étudiant en développement web, je mets mon expertise au service de projets innovants,
                  toujours à la recherche des dernières technologies pour offrir des solutions modernes et performantes
                  qui dépassent les attentes.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("https://github.com/PaperSeee", "_blank")}
                  className="shadow-sm bg-transparent"
                >
                  <Github className="w-5 h-5 mr-2" />
                  PaperSeee (Ilias Paper)
                </Button>
                <Button
                  size="lg"
                  className="animate-glow shadow-lg"
                  onClick={() => (window.location.href = "mailto:ilias.dev@outlook.com")}
                >
                  Me contacter
                </Button>
              </div>
            </div>

            {/* Technologies badges */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technologies maîtrisées</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-primary/10 transition-colors shadow-sm animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Skills and stats */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Skills chart */}
            <Card className="glass-effect border-border/50 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Compétences techniques</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            skill.color === "primary" ? "bg-primary" : "bg-accent"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-effect border-border/50 text-center p-6 shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </Card>
              <Card className="glass-effect border-border/50 text-center p-6 shadow-sm">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
