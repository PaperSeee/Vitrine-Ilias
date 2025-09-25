"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, ShoppingCart, FileText, Server, PenTool, X, Check } from "lucide-react"
import { useState } from "react"

const mainServices = [
	{
		icon: FileText,
		title: "Landing Pages",
		description:
			"Pages de conversion optimisées pour maximiser vos taux de transformation et générer des leads.",
		price: 250,
		priceDisplay: "250€",
		features: ["Conversion optimisée", "A/B testing", "Formulaires avancés", "Intégrations"],
		color: "primary",
	},
	{
		icon: Globe,
		title: "Sites Vitrines",
		description:
			"Sites web élégants et responsives pour présenter votre activité avec style et professionnalisme.",
		price: 450,
		priceDisplay: "450€",
		features: ["Design moderne", "Responsive", "SEO optimisé", "Support 24h"],
		color: "primary",
	},
	{
		icon: ShoppingCart,
		title: "Site complet",
		description:
			"Site vitrine très complet avec fonctionnalités avancées, design sur mesure et interface d'administration.",
		price: 650,
		priceDisplay: "650-800€",
		features: [
			"Design entièrement personnalisé",
			"Fonctionnalités avancées",
			"Interface d'administration",
			"Optimisation SEO poussée",
		],
		color: "accent",
	},
]

const upsells = [
	{
		icon: PenTool,
		title: "Web Writing",
		description:
			"Rédaction de contenu web optimisé SEO pour améliorer votre visibilité et engagement.",
		price: 100,
		priceDisplay: "+100€",
		features: ["SEO optimisé", "Contenu engageant", "Recherche mots-clés", "Stratégie éditoriale"],
	},
	{
		icon: Server,
		title: "Hébergement & Entretien",
		description:
			"Hébergement professionnel, maintenance, mises à jour et support technique continu.",
		price: 25,
		priceDisplay: "25€/mois",
		features: ["Hébergement sécurisé", "Mises à jour", "Sauvegardes", "Support technique"],
		monthly: true,
	},
]

interface OrderSummary {
	service: (typeof mainServices)[0]
	upsells: Array<(typeof upsells)[0]>
	total: number
	monthlyTotal: number
}

export function ServicesSection() {
	const [selectedService, setSelectedService] = useState<number | null>(null)
	const [selectedUpsells, setSelectedUpsells] = useState<number[]>([])
	const [showPopup, setShowPopup] = useState(false)
	const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null)

	const handleServiceSelect = (index: number) => {
		setSelectedService(index)
		setSelectedUpsells([])

		// Scroll to upsells section
		setTimeout(() => {
			const upsellsSection = document.getElementById("upsells-section")
			if (upsellsSection) {
				upsellsSection.scrollIntoView({ behavior: "smooth" })
			}
		}, 100)
	}

	const handleUpsellToggle = (index: number) => {
		setSelectedUpsells((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		)
	}

	const handleShowSummary = () => {
		if (selectedService === null) return

		const service = mainServices[selectedService]
		const selectedUpsellItems = selectedUpsells.map((index) => upsells[index])

		const oneTimeTotal =
			service.price +
			selectedUpsellItems.filter((u) => !u.monthly).reduce((sum, u) => sum + u.price, 0)
		const monthlyTotal = selectedUpsellItems.filter((u) => u.monthly).reduce((sum, u) => sum + u.price, 0)

		setOrderSummary({
			service,
			upsells: selectedUpsellItems,
			total: oneTimeTotal,
			monthlyTotal,
		})
		setShowPopup(true)
	}

	const handleContactClick = () => {
		if (!orderSummary) return

		const subject = `Commande - ${orderSummary.service.title}`
		let body = `Bonjour Ilias,\n\nJe souhaite commander :\n\n`
		body += `Service principal : ${orderSummary.service.title} - ${orderSummary.service.priceDisplay}\n`

		if (orderSummary.upsells.length > 0) {
			body += `\nOptions complémentaires :\n`
			orderSummary.upsells.forEach((upsell) => {
				body += `- ${upsell.title} - ${upsell.priceDisplay}\n`
			})
		}

		body += `\nTotal : ${orderSummary.total}€`
		if (orderSummary.monthlyTotal > 0) {
			body += ` + ${orderSummary.monthlyTotal}€/mois`
		}

		body += `\n\nMerci de me contacter pour finaliser cette commande.\n\nCordialement`

		window.location.href = `mailto:ilias.dev@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
	}

	return (
		<section id="services-section" className="py-24 relative">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16 animate-slide-up">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
						<span className="text-gradient">Mes Services</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
						Des solutions web complètes adaptées à vos besoins, du site vitrine à l'e-commerce, avec un focus sur la
						performance et l'expérience utilisateur.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6 mb-12">
					{mainServices.map((service, index) => {
						const Icon = service.icon
						const isSelected = selectedService === index
						const isOtherSelected = selectedService !== null && selectedService !== index

						return (
							<Card
								key={index}
								className={`group hover:scale-105 transition-all duration-300 glass-effect border-border/50 hover:border-primary/30 shadow-sm hover:shadow-lg animate-slide-up cursor-pointer min-h-[420px] flex flex-col ${
									isSelected ? "service-active ring-2 ring-primary/50" : ""
								} ${isOtherSelected ? "service-selected" : ""}`}
								style={{ animationDelay: `${index * 0.1}s` }}
								onClick={() => handleServiceSelect(index)}
							>
								<CardHeader className="text-center pb-4">
									<div
										className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-sm ${
											service.color === "primary" ? "bg-primary/10" : "bg-accent/10"
										} group-hover:animate-glow`}
									>
										<Icon className={`w-8 h-8 ${service.color === "primary" ? "text-primary" : "text-accent"}`} />
									</div>
									<CardTitle className="text-xl mb-2">{service.title}</CardTitle>
									<div className={`text-3xl font-bold ${service.color === "primary" ? "text-primary" : "text-accent"}`}>
										{service.priceDisplay}
									</div>
								</CardHeader>
								<CardContent className="space-y-4 flex-1 flex flex-col">
									<CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
									<ul className="space-y-2 flex-1">
										{service.features.map((feature, featureIndex) => (
											<li key={featureIndex} className="flex items-center text-sm">
												<div
													className={`w-2 h-2 rounded-full mr-3 ${
														service.color === "primary" ? "bg-primary" : "bg-accent"
													}`}
												></div>
												{feature}
											</li>
										))}
									</ul>
									<Button
										className="w-full mt-6 shadow-sm"
										variant={service.color === "primary" ? "default" : "secondary"}
									>
										Choisir ce service
									</Button>
								</CardContent>
							</Card>
						)
					})}
				</div>

				{selectedService !== null && (
					<div id="upsells-section" className="mb-16 animate-slide-up">
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold mb-4 text-balance">
								<span className="text-gradient">Options Complémentaires</span>
							</h3>
							<p className="text-muted-foreground">Ajoutez ces services à votre commande pour une solution complète</p>
						</div>

						<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
							{upsells.map((upsell, index) => {
								const Icon = upsell.icon
								const isSelected = selectedUpsells.includes(index)

								return (
									<Card
										key={index}
										className={`group hover:scale-105 transition-all duration-300 glass-effect border-border/50 hover:border-accent/30 shadow-sm hover:shadow-lg cursor-pointer ${
											isSelected ? "ring-2 ring-accent/50 bg-accent/5" : ""
										}`}
										onClick={() => handleUpsellToggle(index)}
									>
										<CardHeader className="text-center pb-4">
											<div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center shadow-sm bg-accent/10 group-hover:animate-glow">
												<Icon className="w-6 h-6 text-accent" />
											</div>
											<CardTitle className="text-lg mb-2">{upsell.title}</CardTitle>
											<div className="text-2xl font-bold text-accent">{upsell.priceDisplay}</div>
										</CardHeader>
										<CardContent className="space-y-4">
											<CardDescription className="text-center leading-relaxed text-sm">
												{upsell.description}
											</CardDescription>
											<ul className="space-y-2">
												{upsell.features.map((feature, featureIndex) => (
													<li key={featureIndex} className="flex items-center text-sm">
														<div className="w-2 h-2 rounded-full mr-3 bg-accent"></div>
														{feature}
													</li>
												))}
											</ul>
											<Button
												className={`w-full mt-4 shadow-sm ${isSelected ? "bg-accent text-accent-foreground" : "bg-transparent"}`}
												variant={isSelected ? "default" : "outline"}
											>
												{isSelected ? (
													<>
														<Check className="w-4 h-4 mr-2" />
														Option ajoutée
													</>
												) : (
													"Ajouter cette option"
												)}
											</Button>
										</CardContent>
									</Card>
								)
							})}
						</div>

						<div className="text-center mt-8">
							<Button size="lg" className="animate-glow shadow-lg" onClick={handleShowSummary}>
								Voir le récapitulatif
							</Button>
						</div>
					</div>
				)}

				{/* Call to action */}
				<div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
					<div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
						<h3 className="text-2xl font-bold mb-4 text-balance">Projet sur mesure ?</h3>
						<p className="text-muted-foreground mb-6 text-pretty">
							Vous avez un projet spécifique en tête ? Discutons ensemble de vos besoins pour créer une solution
							parfaitement adaptée.
						</p>
						<Button
							size="lg"
							className="animate-glow shadow-lg"
							onClick={() =>
								(window.location.href =
									"mailto:ilias.dev@outlook.com?subject=Demande de devis&body=Bonjour Ilias, je souhaiterais discuter d'un projet web...")
							}
						>
							Demander un devis gratuit
						</Button>
					</div>
				</div>
			</div>

			{showPopup && orderSummary && (
				<div className="popup-overlay" onClick={() => setShowPopup(false)}>
					<div className="popup-content" onClick={(e) => e.stopPropagation()}>
						<div className="flex justify-between items-center mb-6">
							<h3 className="text-2xl font-bold text-gradient">Récapitulatif de commande</h3>
							<Button variant="ghost" size="sm" onClick={() => setShowPopup(false)}>
								<X className="w-4 h-4" />
							</Button>
						</div>

						<div className="space-y-4 mb-6">
							<div className="p-4 bg-primary/5 rounded-lg">
								<div className="flex justify-between items-center">
									<div>
										<h4 className="font-semibold">{orderSummary.service.title}</h4>
										<p className="text-sm text-muted-foreground">{orderSummary.service.description}</p>
									</div>
									<div className="text-lg font-bold text-primary">{orderSummary.service.priceDisplay}</div>
								</div>
							</div>

							{orderSummary.upsells.map((upsell, index) => (
								<div key={index} className="p-4 bg-accent/5 rounded-lg">
									<div className="flex justify-between items-center">
										<div>
											<h4 className="font-semibold">{upsell.title}</h4>
											<p className="text-sm text-muted-foreground">{upsell.description}</p>
										</div>
										<div className="text-lg font-bold text-accent">{upsell.priceDisplay}</div>
									</div>
								</div>
							))}
						</div>

						<div className="border-t pt-4 mb-6">
							<div className="flex justify-between items-center text-lg font-bold">
								<span>Total :</span>
								<div>
									<span className="text-primary">{orderSummary.total}€</span>
									{orderSummary.monthlyTotal > 0 && (
										<span className="text-accent ml-2">+ {orderSummary.monthlyTotal}€/mois</span>
									)}
								</div>
							</div>
						</div>

						<Button size="lg" className="w-full animate-glow shadow-lg" onClick={handleContactClick}>
							Contacter Ilias pour finaliser
						</Button>
					</div>
				</div>
			)}
		</section>
	)
}
