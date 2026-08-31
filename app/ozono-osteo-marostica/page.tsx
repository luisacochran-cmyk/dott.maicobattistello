import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedScrollElement from "@/components/animated-scroll-element"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "marostica")!
const service = services.find((s) => s.slug === "ozono-osteo")!
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

export default function OzonoOsteoMarosticaPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="w-full">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            {
              label: "Ozonoterapia + Osteopatia",
              href: "/ozonoterapia-osteopatia",
            },
            {
              label: city.name,
              href: `/ozono-osteo-${city.slug}`,
            },
          ]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          {/* INTRODUZIONE */}
          <AnimatedScrollElement direction="up" delay={0.1}>
            <div className="text-xl mb-8 space-y-5">
              <p>
                A <strong>Marostica</strong>, il Dr. Maico Battistello integra
                ossigeno-ozonoterapia e osteopatia in un percorso personalizzato
                rivolto a persone con dolore muscolo-scheletrico, limitazioni
                funzionali e problematiche articolari.
              </p>

              <p>
                L&apos;approccio combinato consente di valutare sia la componente{" "}
                <strong>infiammatoria</strong> sia le alterazioni della{" "}
                <strong>mobilità articolare, muscolare o posturale</strong>,
                adattando il trattamento alle caratteristiche e agli obiettivi
                della singola persona.
              </p>
            </div>
          </AnimatedScrollElement>

          {/* AREA GEOGRAFICA */}
          <AnimatedScrollElement direction="up" delay={0.15}>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Ozonoterapia e Osteopatia a Marostica e nell&apos;area pedemontana
              </h2>

              <p className="text-lg">
                Lo studio di <strong>Marostica</strong> è facilmente raggiungibile
                anche da <strong>Bassano del Grappa, Nove, Schiavon, Colceresa,
                Breganze, Sandrigo e Lusiana Conco</strong>, oltre che dagli altri
                comuni dell&apos;area Bassanese e pedemontana vicentina.
              </p>
            </div>
          </AnimatedScrollElement>

          {/* INDICAZIONI */}
          <AnimatedScrollElement direction="up" delay={0.2}>
            <h3 className="text-2xl font-semibold mb-5">
              Quando può essere indicato l&apos;approccio integrato a Marostica
            </h3>

            <ul className="list-disc pl-6 mb-8 text-lg space-y-3">
              <li>Cervicalgia e lombalgia</li>
              <li>Ernie e protrusioni discali</li>
              <li>Sciatalgia e dolore radicolare</li>
              <li>Artrosi e problematiche articolari</li>
              <li>Contratture muscolari persistenti</li>
              <li>Limitazioni della mobilità e recupero funzionale</li>
              <li>Disturbi muscolo-scheletrici cronici</li>
            </ul>
          </AnimatedScrollElement>

          {/* VALUTAZIONE */}
          <AnimatedScrollElement direction="up" delay={0.3}>
            <p className="text-lg mb-8">
              La scelta del trattamento viene sempre definita dopo una{" "}
              <strong>valutazione individuale</strong>. In alcuni casi può
              essere indicata prevalentemente l&apos;ossigeno-ozonoterapia, in
              altri l&apos;osteopatia; in altri ancora può essere utile un{" "}
              <strong>approccio integrato</strong> tra le due metodiche.
            </p>
          </AnimatedScrollElement>

          {/* CTA */}
          <AnimatedScrollElement direction="up" delay={0.4}>
            <div className="my-10 text-center">
              <Button
                asChild
                className="h-auto bg-primary hover:bg-primary-dark text-white text-lg font-semibold px-8 py-4 rounded-lg hover-lift"
              >
                <Link
                  href="/contacts"
                  className="flex items-center justify-center gap-3 no-underline"
                >
                  <Calendar className="h-6 w-6" />
                  <span className="text-lg font-semibold">
                    Prenota un Appuntamento
                  </span>
                </Link>
              </Button>
            </div>
          </AnimatedScrollElement>
        </div>
      </div>

      {/* Image Carousel Section */}
      <AnimatedScrollElement direction="up" delay={0.5}>
        <div className="my-12">
          <QuadrantCarousel
            items={[
              {
                title: "Ozonoterapia Cervicale",
                image: "/images/ozcervicale.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Osteopatia Cervicale",
                image: "/images/osteopatiacervicale2.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Consulenza Specialistica",
                image: "/images/nuovaozono2.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Osteopatia Lombare",
                image: "/images/oslombare.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Ozonoterapia Spalla",
                image: "/images/ozspalla.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Osteopatia Spalla",
                image: "/images/osspalla.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
            ]}
          />
        </div>
      </AnimatedScrollElement>

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
