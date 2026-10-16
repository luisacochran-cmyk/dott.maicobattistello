import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contatti | Dott. Maico Battistello",
  description:
    "Contatta il Dott. Maico Battistello per informazioni e appuntamenti presso gli studi di Marostica, Schio, Malo e Padova.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/contatti",
  },
}

export default function ContattiPage() {
  return (
    <div className="pt-20 lg:pt-24 bg-white">
      <div className="w-full bg-[#F2F7FD]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contatti", href: "/contatti" },
          ]}
        />
      </div>

      <ContactForm comePagina />
    </div>
  )
}
