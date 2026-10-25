import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingNota,
  LandingLink,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "schio")!
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

export default function OsteopatiaSchioPage() {
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
            L&apos;<strong>Osteopatia</strong> è una disciplina manuale che si
            basa sulla valutazione e sul trattamento delle disfunzioni che
            possono influire sull&apos;equilibrio e sulla mobilità del corpo.
          </p>
          <p>
            A <strong>Schio</strong>, il Dott. Maico Battistello offre{" "}
            <strong>trattamenti osteopatici personalizzati</strong> rivolti a
            persone di ogni età, con un approccio orientato alla ricerca delle
            cause funzionali che possono contribuire a dolore, rigidità e
            limitazioni del movimento.
          </p>
          <p>
            Attraverso una valutazione individuale e tecniche manuali adattate
            alle esigenze del paziente, il trattamento osteopatico mira a
            favorire il recupero della <strong>funzionalità</strong>, della{" "}
            <strong>mobilità articolare</strong> e del benessere generale
            della persona.
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
        titolo="Osteopatia a Schio e nell'Alto Vicentino"
      >
        <p>
          Lo studio di <strong>Schio</strong> è un riferimento anche per chi
          proviene da{" "}
          <strong>
            Santorso, Thiene, Piovene Rocchette, Torrebelvicino e Marano
            Vicentino
          </strong>
          , oltre che dagli altri comuni dell&apos;Alto Vicentino.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="L'approccio integrato" titolo="Osteopatia e ozonoterapia insieme">
        <LandingNota>
          Nella pratica del Dott. Maico Battistello l&apos;osteopatia è parte di
          un <strong>approccio integrato</strong> con l&apos;ozonoterapia.
        </LandingNota>
        <p>
          <LandingLink href="/ozono-osteo-schio">
            Scopri l&apos;approccio integrato a Schio
          </LandingLink>
        </p>
      </LandingSezione>
    </LandingPage>
  )
}
