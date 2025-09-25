"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
	{
		title: "Mirava",
		description:
			"Réservez votre barbier en ligne - Plateforme de réservation moderne avec gestion des créneaux et paiements.",
		image: "/modern-barber-booking-app-interface.jpg",
		technologies: ["React", "Next.js", "Stripe", "Tailwind"],
		category: "Booking",
		color: "primary",
	},
	{
		title: "Tatuvia",
		description:
			"Réservez votre tatouage en ligne - Application de réservation spécialisée pour les studios de tatouage.",
		image: "/tattoo-booking-app-dark-interface.jpg",
		technologies: ["React", "Firebase", "JavaScript", "CSS3"],
		category: "Booking App",
		color: "accent",
	},
	{
		title: "Hypurrspot",
		description: "Site d'affichage automatique de données de cryptomonnaies en temps réel grâce à une API dédiée.",
		image: "/modern-web-platform-interface.jpg",
		technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
		category: "Web Platform",
		color: "primary",
	},
	{
		title: "Kodora",
		description: "Site dédié pour un freelancer avec formes interactives et cliquables - Interface moderne et engageante.",
		image: "/freelancer-development-platform.jpg",
		technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
		category: "Freelance Platform",
		color: "accent",
	},
]

export function ProjectsSection() {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6">
						<span className="text-gradient">Mes Réalisations</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Découvrez quelques-uns de mes projets récents qui illustrent ma passion pour le développement web et mobile.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="group hover:scale-105 transition-all duration-300 glass-effect border-border/50 hover:border-primary/50 overflow-hidden"
						>
							<div className="relative overflow-hidden">
								<img
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute top-4 left-4">
									<Badge
										variant="secondary"
										className={`${
											project.color === "primary"
												? "bg-primary/20 text-primary"
												: "bg-accent/20 text-accent"
										}`}
									>
										{project.category}
									</Badge>
								</div>
							</div>

							<CardHeader>
								<CardTitle className="text-xl">{project.title}</CardTitle>
								<CardDescription className="leading-relaxed">
									{project.description}
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-4">
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech, techIndex) => (
										<Badge key={techIndex} variant="outline" className="text-xs">
											{tech}
										</Badge>
									))}
								</div>

								<div className="flex gap-2 pt-2">
									<Button
										size="sm"
										variant="outline"
										className="flex-1 bg-transparent"
										onClick={() => window.open("https://github.com/PaperSeee", "_blank")}
									>
										<Github className="w-4 h-4 mr-2" />
										Code
									</Button>
									<Button
										size="sm"
										className="flex-1"
										onClick={() => {
											if (project.title === "Kodora") {
												window.open("https://www.kodora.eu/", "_blank")
											} else if (project.title === "Mirava") {
												window.open("https://www.mirava.be/", "_blank")
											} else if (project.title === "Tatuvia") {
												window.open("https://www.tatuvia.com/", "_blank")
											} else if (project.title === "Hypurrspot") {
												window.open("https://hyperliquid-ufwkn7tyf-saasreviews.vercel.app/", "_blank")
											} else {
												window.location.href = "/contact"
											}
										}}
									>
										<ExternalLink className="w-4 h-4 mr-2" />
										Voir le projet
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Call to action */}
				<div className="text-center mt-16">
					<div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold mb-4">Intéressé par mon travail ?</h3>
						<p className="text-muted-foreground mb-6">
							Explorez mon portfolio complet ou contactez-moi pour discuter de votre prochain projet web.
						</p>
						<div className="flex gap-4 justify-center">
							<Button
								variant="outline"
								size="lg"
								onClick={() => window.open("https://github.com/PaperSeee", "_blank")}
							>
								Portfolio complet
							</Button>
							<Button
								size="lg"
								className="animate-glow"
								onClick={() => window.location.href = "/contact"}
							>
								Démarrer un projet
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
			