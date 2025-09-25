import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { ProjectsSection } from "@/components/projects-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <ProjectsSection />
    </main>
  )
}
