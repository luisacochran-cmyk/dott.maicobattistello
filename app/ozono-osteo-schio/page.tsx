import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingElenco,
  LandingNota,
  LandingLink,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "schio")!
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

export default function OzonoOsteoSchioPage() {
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
            A <strong>Schio</strong>, il Dott. Maico Battistello integra
            ossigeno-ozonoterapia e osteopatia in un percorso personalizzato
            dedicato a disturbi muscolo-scheletrici, dolore cronico e
            limitazioni funzionali.
          </p>
          <p>
            L&apos;approccio combinato consente di valutare sia la componente{" "}
            <strong>infiammatoria</strong> sia le alterazioni della{" "}
            <strong>mobilità articolare, muscolare o posturale</strong>, con
            particolare attenzione alle esigenze delle{" "}
            <strong>persone attive</strong> e ai disturbi legati a{" "}
            <strong>sovraccarichi lavorativi o sportivi</strong>.
          </p>
          <p>
            L&apos;obiettivo è favorire il recupero della{" "}
            <strong>funzionalità</strong> e una migliore{" "}
            <strong>qualità del movimento</strong>.
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
        titolo="Ozonoterapia e Osteopatia a Schio e nell'Alto Vicentino"
      >
        <p>
          Lo studio di <strong>Schio</strong> è un riferimento anche per chi
          proviene da <strong>Santorso, Thiene, Piovene Rocchette,
          Torrebelvicino e Marano Vicentino</strong>, oltre che dagli altri
          comuni dell&apos;Alto Vicentino.
        </p>
      </LandingSezione>

      <LandingSezione
        etichetta="Valutazione personalizzata"
        titolo="Quando può essere indicato l'approccio integrato a Schio"
      >
        <LandingElenco
          voci={[
            "Cervicalgia e lombalgia",
            "Ernie e protrusioni discali",
            "Sciatalgia e dolore radicolare",
            "Artrosi e problematiche articolari",
            "Contratture muscolari persistenti",
            "Disturbi correlati a sovraccarichi lavorativi o sportivi",
            "Limitazioni della mobilità e recupero funzionale",
          ]}
        />
        <LandingNota>
          Il percorso viene sempre definito dopo una{" "}
          <strong>valutazione individuale</strong>, che permette di stabilire
          come integrare le due metodiche in base al quadro clinico e alle
          esigenze della persona.
        </LandingNota>
      </LandingSezione>

      <LandingSezione etichetta="Il metodo" titolo="Grande e piccola autoemoterapia a Schio">
        <p>
          Il Dott. Maico Battistello esegue anche la grande autoemoterapia
          (GAET) e la piccola autoemoterapia (PAET), quando clinicamente
          indicate.
        </p>
        <p>
          <LandingLink href="/ozonoterapia-schio">
            Scopri le metodiche di ozonoterapia a Schio
          </LandingLink>
        </p>
      </LandingSezione>
    </LandingPage>
  )
}
