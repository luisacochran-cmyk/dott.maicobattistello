import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingVideo,
  LandingLink,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "schio")!
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
    images: [
      {
        url: "https://dottmaicobattistello.it/images/Ritratto%20del%20medico%20in%20clinica.png",
        alt: "Dott. Maico Battistello - Ozonoterapia a Schio",
      },
    ],
  },
}

export default function OzonoterapiaSchioPage() {
  return (
    <LandingPage
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Ozonoterapia", href: "/ozonoterapia" },
        { label: city.name, href: `/ozonoterapia-${city.slug}` },
      ]}
      etichetta={`Ozonoterapia · ${city.name}`}
      titolo={seoData.h1}
      intro={
        <>
          <p>
            A <strong>Schio</strong> il Dott. Maico Battistello svolge con
            particolare continuità l&apos;attività di{" "}
            <strong>ossigeno-ozonoterapia</strong>, sia con trattamenti locali
            sia con le metodiche sistemiche di{" "}
            <strong>Grande e Piccola Autoemoterapia</strong>.
          </p>
          <p>
            Per chi vive o lavora nell&apos;<strong>Alto Vicentino</strong>,
            avere un riferimento vicino rende più semplice seguire un percorso
            che può prevedere <strong>più sedute</strong>, programmate dopo la
            valutazione iniziale.
          </p>
          <p>
            L&apos;ozonoterapia viene presa in considerazione, quando
            clinicamente indicato, per{" "}
            <strong>dolore, infiammazione e limitazioni funzionali</strong>{" "}
            della colonna e delle articolazioni, disturbi frequenti in chi
            svolge <strong>lavori fisici</strong> o{" "}
            <strong>attività sportive</strong>.
          </p>
        </>
      }
      carosello={[
        { title: "Trattamento Combinato", image: "/images/nuovaozonosteo1.jpg", link: "/ozonoterapia" },
        { title: "Terapia Integrata", image: "/images/osteozonoterapia1.jpg", link: "/ozonoterapia" },
        { title: "Risultati Clinici", image: "/images/osteozonoterapia2.jpg", link: "/ozonoterapia" },
        { title: "Ozonoterapia Avanzata", image: "/images/ozonoterapia.jpg", link: "/ozonoterapia" },
        { title: "Trattamento di Ozonoterapia", image: "/images/ozonoterapia3.jpg", link: "/ozonoterapia" },
      ]}
      datiStrutturati={seoData.structuredData}
    >
      <LandingSezione
        etichetta="Area geografica"
        titolo="Un riferimento per Schio e l'Alto Vicentino"
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

      <LandingVideo
        titolo={`Grande Autoemoterapia (GAET) a ${city.name}`}
        video="https://player.vimeo.com/video/1167667746?h=c3a7c519ea&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
        titoloVideo="Video: la Grande Autoemoterapia (GAET)"
      >
        <p>
          La Grande Autoemoterapia è una metodica di ozonoterapia sistemica
          che può essere presa in considerazione in specifici percorsi
          clinici.
        </p>
        <p>
          Indicazioni, modalità di trattamento e appropriatezza vengono
          definite dal medico dopo una valutazione individuale, tenendo
          conto del quadro clinico complessivo e delle eventuali
          controindicazioni.
        </p>
      </LandingVideo>

      <LandingVideo
        titolo={`Piccola Autoemoterapia (PAET) a ${city.name}`}
        video="https://player.vimeo.com/video/1167667781?h=802d55120b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
        titoloVideo="Video: la Piccola Autoemoterapia (PAET)"
        invertito
      >
        <p>
          La Piccola Autoemoterapia è una delle metodiche che possono
          rientrare nell&apos;ambito dell&apos;ozonoterapia, quando
          clinicamente indicato.
        </p>
        <p>
          L&apos;eventuale utilizzo viene valutato dal medico in relazione
          al quadro clinico, agli obiettivi del trattamento e alle
          caratteristiche della persona.
        </p>
      </LandingVideo>

      <LandingSezione etichetta="Approfondimenti" titolo="Approfondisci l'Ozonoterapia">
        <p>
          Per conoscere i metodi di somministrazione, le indicazioni
          clinico-terapeutiche suddivise per livello di evidenza e le
          controindicazioni, consulta la pagina completa dedicata
          all&apos;Ozonoterapia.
        </p>
        <p>
          <LandingLink href="/ozonoterapia">
            Scopri metodi, indicazioni e controindicazioni
          </LandingLink>
        </p>
      </LandingSezione>
    </LandingPage>
  )
}
