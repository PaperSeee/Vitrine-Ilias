import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <ContactForm />
      </div>
    </main>
  )
}
