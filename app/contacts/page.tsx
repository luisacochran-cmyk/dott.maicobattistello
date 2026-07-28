import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contatti | Dott. Maico Battistello",
  description:
    "Contatta il Dott. Maico Battistello per informazioni e appuntamenti presso gli studi di Marostica, Schio, Malo e Padova.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/contatti",
  },
}
  import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"

export default function ContactsPage() {
  return (
    <div className="pt-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contatti", href: "/contatti" },
        ]}
      />

      <ContactForm />
    </div>
  )
}
