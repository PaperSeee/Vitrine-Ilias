"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"

export function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
                <span className="text-gradient">Développeur</span>
                <br />
                <span className="text-foreground">Web Étudiant</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty">
                Je crée des expériences web modernes et élégantes qui allient design sophistiqué et développement
                robuste pour faire briller votre présence digitale.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="animate-glow shadow-lg" onClick={scrollToServices}>
                Voir mes services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="shadow-sm bg-transparent"
                onClick={() => window.open("https://github.com/PaperSeee", "_blank")}
              >
                Portfolio
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative geometric-3d">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* 3D-like geometric composition */}
              <div className="relative">
                <div className="w-48 h-48 bg-card border border-border rounded-2xl transform rotate-12 animate-float glass-effect shadow-lg geometric-element"></div>
                <div
                  className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-xl transform -rotate-12 animate-float shadow-md geometric-element"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/15 rounded-lg transform rotate-45 animate-float shadow-md geometric-element"
                  style={{ animationDelay: "1.5s" }}
                ></div>

                {/* Floating icons */}
                <div
                  className="absolute top-4 right-4 p-3 bg-primary/10 rounded-full animate-float shadow-sm"
                  style={{ animationDelay: "2s" }}
                >
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div
                  className="absolute bottom-8 left-4 p-3 bg-accent/10 rounded-full animate-float shadow-sm"
                  style={{ animationDelay: "2.5s" }}
                >
                  <Palette className="w-6 h-6 text-accent" />
                </div>
                <div
                  className="absolute top-1/2 -right-8 p-3 bg-primary/10 rounded-full animate-float shadow-sm"
                  style={{ animationDelay: "3s" }}
                >
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
