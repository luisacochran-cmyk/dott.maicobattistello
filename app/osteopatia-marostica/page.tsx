import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "marostica")!
const service = services.find((s) => s.slug === "osteopatia")!
const seoData = generateLocalSEO(service, city)

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  alternates: {
    canonical: seoData.canonical,
  },
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    url: seoData.canonical,
  },
}

export default function OsteopatiaMarosticaPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="w-full bg-secondary">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Osteopatia", href: "/osteopathy" },
            { label: `${city.name}`, href: `/osteopatia-${city.slug}` },
          ]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          <h2 className="text-2xl font-semibold mb-6">{seoData.h2}</h2>

          <p className="text-lg mb-6">
  L’<strong>Osteopatia</strong> è una disciplina manuale che considera la persona nella sua globalità, con l’obiettivo di individuare e trattare le alterazioni funzionali che possono influire sul movimento, sulla postura e sul benessere generale.

  A <strong>Marostica</strong>, il Dr. Maico Battistello offre <strong>trattamenti osteopatici personalizzati</strong> rivolti a persone di ogni età, attraverso una valutazione accurata delle problematiche muscolo-scheletriche, delle tensioni posturali e delle limitazioni funzionali.

  Il trattamento osteopatico può essere utile in presenza di cervicalgia, lombalgia, dolori articolari, disturbi posturali e problematiche legate alla mobilità, con l’obiettivo di favorire il recupero della <strong>funzionalità</strong>, della <strong>mobilità articolare</strong> e del benessere della persona.
</p>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="my-12">
        <QuadrantCarousel
          items={[
            {
              title: "Trattamento Osteopatico",
              image: "/images/nuovaosteo1.jpg",
              link: `/osteopatia-${city.slug}`,
            },
            {
              title: "Manipolazione Cranio-Sacrale",
              image: "/images/nuovaosteo2.jpg",
              link: `/osteopatia-${city.slug}`,
            },
            {
              title: "Trattamento Viscerale",
              image: "/images/nuovaosteo3.jpg",
              link: `/osteopatia-${city.slug}`,
            },
            {
              title: "Osteopatia Cervicale",
              image: "/images/osteopatiacervicale.jpg",
              link: `/osteopatia-${city.slug}`,
            },
          ]}
        />
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.structuredData),
        }}
      />
    </div>
  )
}
