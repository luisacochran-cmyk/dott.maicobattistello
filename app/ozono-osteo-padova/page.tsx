import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingElenco,
  LandingNota,
  LandingLink,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "padova")!
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

export default function OzonoOsteoPadovaPage() {
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
            A <strong>Padova</strong>, il Dott. Maico Battistello integra
            ossigeno-ozonoterapia e osteopatia in un percorso personalizzato
            rivolto a pazienti con dolore muscolo-scheletrico, disturbi
            articolari e problematiche funzionali della colonna.
          </p>
          <p>
            In un contesto urbano, dove <strong>sedentarietà</strong>,{" "}
            <strong>lavoro d&apos;ufficio</strong> e{" "}
            <strong>sovraccarichi posturali</strong> sono frequenti,
            l&apos;approccio integrato consente di valutare sia gli aspetti{" "}
            <strong>funzionali</strong> sia quelli{" "}
            <strong>infiammatori</strong> del disturbo.
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
        titolo="Ozonoterapia e Osteopatia a Padova e nell'area padovana"
      >
        <p>
          Lo studio di <strong>Padova</strong> è un riferimento anche per chi
          proviene da <strong>Abano Terme, Selvazzano Dentro, Albignasego,
          Vigonza e Cadoneghe</strong>, oltre che dagli altri comuni
          dell&apos;area padovana.
        </p>
      </LandingSezione>

      <LandingSezione
        etichetta="Valutazione personalizzata"
        titolo="Quando può essere indicato l'approccio integrato a Padova"
      >
        <LandingElenco
          voci={[
            "Cervicalgia e lombalgia",
            "Dolore cervicale legato a postura e lavoro sedentario",
            "Ernie e protrusioni discali",
            "Sciatalgia e dolore radicolare",
            "Artrosi e problematiche articolari",
            "Contratture muscolari persistenti",
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

      <LandingSezione etichetta="Il metodo" titolo="Grande e piccola autoemoterapia a Padova">
        <p>
          Il Dott. Maico Battistello esegue anche la grande autoemoterapia
          (GAET) e la piccola autoemoterapia (PAET), quando clinicamente
          indicate.
        </p>
        <p>
          <LandingLink href="/ozonoterapia-padova">
            Scopri le metodiche di ozonoterapia a Padova
          </LandingLink>
        </p>
      </LandingSezione>
    </LandingPage>
  )
}
