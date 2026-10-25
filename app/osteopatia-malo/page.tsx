import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingNota,
  LandingLink,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "malo")!
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

export default function OsteopatiaMaloPage() {
  return (
    <LandingPage
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Osteopatia", href: "/osteopatia" },
        { label: city.name, href: `/osteopatia-${city.slug}` },
      ]}
      etichetta={`Osteopatia · ${city.name}`}
      titolo={seoData.h1}
      intro={
        <>
          <p>
            Nell&apos;area di <strong>Malo</strong> il Dott. Maico Battistello,
            medico chirurgo e osteopata, riceve presso il{" "}
            <strong>Centro Medico Medicalis</strong>, in Via Sile 40 a Monte
            di Malo, a pochi minuti dal centro di Malo.
          </p>
          <p>
            Qui esegue <strong>trattamenti osteopatici e manipolativi</strong>{" "}
            per cervicalgia, lombalgia, dolori articolari e limitazioni del
            movimento. Ogni trattamento parte da una valutazione della
            postura e della mobilità, che non si ferma al punto in cui si
            sente dolore ma considera anche i distretti collegati.
          </p>
          <p>
            L&apos;obiettivo è favorire il recupero della{" "}
            <strong>mobilità articolare</strong> e della{" "}
            <strong>funzionalità</strong>, con un percorso costruito sulla
            singola persona.
          </p>
        </>
      }
      carosello={[
        { title: "Trattamento Osteopatico", image: "/images/nuovaosteo1.jpg", link: "/osteopatia" },
        { title: "Manipolazione Cranio-Sacrale", image: "/images/nuovaosteo2.jpg", link: "/osteopatia" },
        { title: "Trattamento Viscerale", image: "/images/nuovaosteo3.jpg", link: "/osteopatia" },
        { title: "Osteopatia Cervicale", image: "/images/osteopatiacervicale.jpg", link: "/osteopatia" },
      ]}
      datiStrutturati={seoData.structuredData}
    >
      <LandingSezione
        etichetta="Area geografica"
        titolo="Un riferimento per Malo e l'Alto Vicentino"
      >
        <p>
          La sede di Monte di Malo è comoda per chi vive a{" "}
          <strong>Malo, Isola Vicentina, Marano Vicentino, Thiene e Villaverla</strong>,
          oltre che negli altri comuni dell&apos;Alto Vicentino. È disponibile
          il parcheggio presso il centro medico.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Nella stessa sede" titolo="Osteopatia e ozonoterapia, senza cambiare struttura">
        <LandingNota>
          A Medicalis il Dott. Maico Battistello esegue anche
          l&apos;<strong>ossigeno-ozonoterapia</strong> e
          l&apos;<strong>autoemoterapia</strong>. L&apos;osteopatia viene così integrata con l&apos;ozonoterapia nello stesso percorso e nella stessa sede.
        </LandingNota>
        <p>
          <LandingLink href="/ozono-osteo-malo">
            Scopri l&apos;approccio integrato a Malo
          </LandingLink>
        </p>
      </LandingSezione>
    </LandingPage>
  )
}
