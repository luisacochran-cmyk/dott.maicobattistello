import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingElenco,
  LandingNota,
  LandingLink,
} from "@/components/landing-layout"

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
    images: [
      {
        url: "https://dottmaicobattistello.it/images/Ritratto%20del%20medico%20in%20clinica.png",
        alt: "Dott. Maico Battistello - Ozonoterapia e Osteopatia a Marostica",
      },
    ],
  },
}

export default function OzonoOsteoMarosticaPage() {
  return (
    <LandingPage
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Ozonoterapia + Osteopatia", href: "/ozonoterapia-osteopatia" },
        { label: city.name, href: `/ozono-osteo-${city.slug}` },
      ]}
      etichetta={`Approccio integrato · ${city.name}`}
      titolo={seoData.h1}
      intro={
        <>
          <p>
            A <strong>Marostica</strong>, il Dott. Maico Battistello integra
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
        </>
      }
      carosello={[
        { title: "Ozonoterapia Cervicale", image: "/images/ozcervicale.jpg", link: "/ozonoterapia-osteopatia" },
        { title: "Osteopatia Cervicale", image: "/images/osteopatiacervicale2.jpg", link: "/ozonoterapia-osteopatia" },
        { title: "Consulenza Specialistica", image: "/images/nuovaozono2.jpg", link: "/ozonoterapia-osteopatia" },
        { title: "Osteopatia Lombare", image: "/images/oslombare.jpg", link: "/ozonoterapia-osteopatia" },
        { title: "Ozonoterapia Spalla", image: "/images/ozspalla.jpg", link: "/ozonoterapia-osteopatia" },
        { title: "Osteopatia Spalla", image: "/images/osspalla.jpg", link: "/ozonoterapia-osteopatia" },
      ]}
      datiStrutturati={seoData.structuredData}
    >
      <LandingSezione
        etichetta="Area geografica"
        titolo="Ozonoterapia e Osteopatia a Marostica e nell'area pedemontana"
      >
        <p>
          Lo studio di <strong>Marostica</strong> è facilmente raggiungibile
          anche da <strong>Bassano del Grappa, Nove, Schiavon, Colceresa,
          Breganze, Sandrigo e Lusiana Conco</strong>, oltre che dagli altri
          comuni dell&apos;area Bassanese e pedemontana vicentina.
        </p>
      </LandingSezione>

      <LandingSezione
        etichetta="Valutazione personalizzata"
        titolo="Quando può essere indicato l'approccio integrato a Marostica"
      >
        <LandingElenco
          voci={[
            "Cervicalgia e lombalgia",
            "Ernie e protrusioni discali",
            "Sciatalgia e dolore radicolare",
            "Artrosi e problematiche articolari",
            "Contratture muscolari persistenti",
            "Limitazioni della mobilità e recupero funzionale",
            "Disturbi muscolo-scheletrici cronici",
          ]}
        />
        <LandingNota>
          Il percorso viene sempre definito dopo una{" "}
          <strong>valutazione individuale</strong>, che permette di stabilire
          come integrare le due metodiche in base al quadro clinico e alle
          esigenze della persona.
        </LandingNota>
      </LandingSezione>

      <LandingSezione etichetta="Il metodo" titolo="Grande e piccola autoemoterapia a Marostica">
        <p>
          Il Dott. Maico Battistello esegue anche la grande autoemoterapia
          (GAET) e la piccola autoemoterapia (PAET).
        </p>
        <p>
          <LandingLink href="/ozonoterapia-marostica">
            Scopri le metodiche di ozonoterapia a Marostica
          </LandingLink>
        </p>
      </LandingSezione>
    </LandingPage>
  )
}
