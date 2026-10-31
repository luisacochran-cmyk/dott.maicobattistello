import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingElenco,
  LandingNota,
  LandingLink,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "malo")!
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
        alt: "Dott. Maico Battistello - Ozonoterapia e Osteopatia a Malo",
      },
    ],
  },
}

export default function OzonoOsteoMaloPage() {
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
            A <strong>Malo</strong>, il Dott. Maico Battistello integra
            ossigeno-ozonoterapia e osteopatia in un percorso personalizzato,
            rivolto in particolare a disturbi muscolo-scheletrici, dolore
            cronico e problematiche funzionali della colonna.
          </p>
          <p>
            L&apos;approccio combinato consente di valutare sia la componente{" "}
            <strong>infiammatoria</strong> sia le alterazioni della{" "}
            <strong>mobilità articolare, muscolare o posturale</strong>,
            adattando il trattamento alle esigenze della persona e alle
            caratteristiche specifiche del disturbo presentato.
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
        titolo="Ozonoterapia e Osteopatia a Malo e nell'Alto Vicentino"
      >
        <p>
          L&apos;attività nell&apos;area di <strong>Malo</strong> rappresenta
          un riferimento anche per chi proviene da{" "}
          <strong>Isola Vicentina, Marano Vicentino, Thiene e Villaverla</strong>,
          oltre che dagli altri comuni dell&apos;Alto Vicentino.
        </p>
      </LandingSezione>

      <LandingSezione
        etichetta="Valutazione personalizzata"
        titolo="Quando può essere indicato l'approccio integrato a Malo"
      >
        <LandingElenco
          voci={[
            "Cervicalgia e lombalgia",
            "Ernie e protrusioni discali",
            "Sciatalgia e dolore radicolare",
            "Artrosi e problematiche articolari",
            "Contratture muscolari persistenti",
            "Limitazioni della mobilità",
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

      <LandingSezione etichetta="Il metodo" titolo="Grande e piccola autoemoterapia a Malo">
        <p>
          Il Dott. Maico Battistello esegue anche la grande autoemoterapia
          (GAET) e la piccola autoemoterapia (PAET).
        </p>
        <p>
          <LandingLink href="/ozonoterapia-malo">
            Scopri le metodiche di ozonoterapia a Malo
          </LandingLink>
        </p>
      </LandingSezione>
    </LandingPage>
  )
}
