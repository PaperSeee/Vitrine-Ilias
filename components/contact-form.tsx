"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react"

interface FormData {
  nom: string
  email: string
  telephone: string
  entreprise: string
  message: string
  urgence: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    message: "",
    urgence: false,
  })

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construction du sujet et du corps de l'email
    const subject = `Nouveau contact - ${formData.nom}`
    
    let emailBody = `Bonjour Ilias,\n\n`
    emailBody += `Vous avez reçu un nouveau message via le formulaire de contact :\n\n`
    emailBody += `--- INFORMATIONS CLIENT ---\n`
    emailBody += `Nom : ${formData.nom}\n`
    emailBody += `Email : ${formData.email}\n`
    emailBody += `Téléphone : ${formData.telephone || 'Non renseigné'}\n`
    emailBody += `Entreprise : ${formData.entreprise || 'Non renseignée'}\n\n`
    
    emailBody += `--- MESSAGE ---\n`
    emailBody += `${formData.message}\n\n`
    
    emailBody += `--- INFORMATIONS SUPPLÉMENTAIRES ---\n`
    emailBody += `Urgence : ${formData.urgence ? 'Oui - Projet urgent' : 'Non'}\n`
    emailBody += `Date de la demande : ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}\n\n`
    
    emailBody += `Cordialement,\n`
    emailBody += `Formulaire de contact automatique`

    // Création du lien mailto
    const mailtoLink = `mailto:ilias.dev@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
    
    // Ouverture d'Outlook
    window.location.href = mailtoLink
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Contactez-moi</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Prêt à donner vie à votre projet web ? Partagez vos idées et recevez un devis personnalisé rapidement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-8 animate-slide-up">
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Informations de contact
                </CardTitle>
                <CardDescription>
                  N'hésitez pas à me contacter pour discuter de votre projet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">ilias.dev@outlook.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Réponse rapide</p>
                    <p className="text-muted-foreground">Généralement sous 24h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-muted-foreground">Travail à distance disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle>Pourquoi me choisir ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Solutions web modernes et performantes</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-sm">Accompagnement personnalisé du projet</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Respect des délais et du budget</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-sm">Support technique inclus</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <Card className="glass-effect border-border/50 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Formulaire de contact</CardTitle>
              <CardDescription>
                Remplissez ce formulaire et je vous recontacterai rapidement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom complet *</Label>
                    <Input
                      id="nom"
                      required
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange("nom", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      placeholder="+32 XXXX XX XX XX"
                      value={formData.telephone}
                      onChange={(e) => handleInputChange("telephone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="entreprise">Entreprise</Label>
                    <Input
                      id="entreprise"
                      placeholder="Nom de votre entreprise"
                      value={formData.entreprise}
                      onChange={(e) => handleInputChange("entreprise", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="urgence"
                      checked={formData.urgence}
                      onCheckedChange={(checked) => handleInputChange("urgence", !!checked)}
                    />
                    <Label htmlFor="urgence" className="text-sm">
                      Ce projet est urgent (réponse prioritaire)
                    </Label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full animate-glow">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
                       