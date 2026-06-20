import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "padova")!
const service = services.find((s) => s.slug === "ozonoterapia")!
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

export default function OzonoterapiaPadovaPage() {
  return (
    <div className="pt-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Ozonoterapia", href: "/ozone-therapy" },
          { label: `${city.name}`, href: `/ozonoterapia-${city.slug}` },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          <h2 className="text-2xl font-semibold mb-6">{seoData.h2}</h2>

          <p className="text-lg mb-6">
            A <strong>Padova</strong>, il Dr. Maico Battistello utilizza l'ossigeno-ozonoterapia in un percorso
            personalizzato, rivolto in particolare a disturbi muscolo-scheletrici, dolore cronico e problematiche
            funzionali della colonna.
          </p>

          <p className="text-lg mb-6">
            Il trattamento viene valutato in base alla condizione del paziente, alla sede del disturbo e agli obiettivi
            clinici. L'ozonoterapia può essere indicata quando è presente una componente <strong>infiammatoria</strong>,
            dolorosa o articolare, con l'obiettivo di contribuire alla riduzione del <strong>dolore</strong>, al
            miglioramento della <strong>funzionalità</strong> e a una migliore qualità del movimento.
          </p>

          <h3 className="text-xl font-semibold mb-4">Quando può essere indicata l'ozonoterapia a Padova</h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Cervicalgia e lombalgia</li>
            <li>Ernie e protrusioni discali</li>
            <li>Sciatalgia e dolore radicolare</li>
            <li>Artrosi e problematiche articolari</li>
            <li>Tendinopatie e dolore muscolo-scheletrico</li>
            <li>Limitazioni della mobilità e recupero funzionale</li>
          </ul>
        </div>
      </div>

      <div className="my-12">
        <QuadrantCarousel
          items={[
            {
              title: "Ozonoterapia Cervicale",
              image: "/images/ozcervicale.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
            {
              title: "Ozonoterapia Lombare",
              image: "/images/ozonoterapia3.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
            {
              title: "Consulenza Specialistica",
              image: "/images/nuovaozono2.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
          ]}
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h3 className="text-2xl font-bold mb-6">Domande frequenti sull'ozonoterapia a Padova</h3>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="quando-ozonoterapia-padova">
            <AccordionTrigger className="text-lg font-semibold">
              Quando può essere indicata l'ozonoterapia?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg">
                Può essere valutata in presenza di dolore, infiammazione, disturbi muscolo-scheletrici, problematiche
                articolari o limitazioni funzionali, sempre dopo una valutazione medica.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="efficacia-ozonoterapia-padova">
            <AccordionTrigger className="text-lg font-semibold">
              L'ozonoterapia è sempre indicata?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg">
                No. L'indicazione dipende dal quadro clinico, dalla sede del disturbo e dalla risposta individuale del
                paziente. Per questo il trattamento viene valutato caso per caso.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sicurezza-ozonoterapia-padova">
            <AccordionTrigger className="text-lg font-semibold">
              Il trattamento viene personalizzato?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg">
                Sì. Il percorso viene adattato alle caratteristiche della persona, al tipo di disturbo e agli obiettivi
                clinici individuati durante la valutazione.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <ContactForm />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...seoData.structuredData,
            "@type": ["MedicalBusiness", "LocalBusiness"],
            priceRange: "€€",
            paymentAccepted: ["Cash", "Credit Card"],
            currenciesAccepted: "EUR",
            openingHours: ["Mo-Fr 09:00-18:00"],
            email: "info@dottmaicobattistello.it",
            hasMap: "https://maps.google.com/?q=Padova+ozonoterapia",
          }),
        }}
      />
    </div>
  )
}
