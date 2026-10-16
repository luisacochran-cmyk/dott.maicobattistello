import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingVideo,
  LandingLink,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "marostica")!
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

export default function OzonoterapiaMarosticaPage() {
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
            L&apos;<strong>ossigeno-ozonoterapia</strong> è una terapia medica
            che utilizza una miscela di ossigeno e ozono medicale nell&apos;ambito
            di specifiche indicazioni cliniche.
          </p>
          <p>
            A <strong>Marostica</strong>, il Dott. Maico Battistello utilizza
            l&apos;ossigeno-ozonoterapia all&apos;interno di percorsi
            personalizzati, definiti sulla base della valutazione clinica e
            delle caratteristiche della singola persona.
          </p>
          <p>
            In ambito muscolo-scheletrico può essere presa in considerazione,
            quando clinicamente indicato, per problematiche caratterizzate da
            dolore, infiammazione e limitazioni funzionali, anche in relazione
            a disturbi della colonna e delle articolazioni.
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
        titolo="Un riferimento per Marostica e l'area pedemontana"
      >
        <p>
          Lo studio di <strong>Marostica</strong> è facilmente raggiungibile
          anche da{" "}
          <strong>
            Bassano del Grappa, Nove, Schiavon, Colceresa, Breganze, Sandrigo
            e Lusiana Conco
          </strong>
          , oltre che dagli altri comuni dell&apos;area Bassanese e
          pedemontana vicentina.
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
