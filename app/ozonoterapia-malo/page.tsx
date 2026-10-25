import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingVideo,
  LandingLink,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "malo")!
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

export default function OzonoterapiaMaloPage() {
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
            L&apos;<strong>ossigeno-ozonoterapia</strong> utilizza una miscela
            di ossigeno e ozono impiegata in diversi ambiti della pratica
            medica come supporto nel trattamento di specifiche condizioni
            cliniche.
          </p>
          <p>
            Nell&apos;area di <strong>Malo</strong>, il Dott. Maico Battistello
            esegue trattamenti personalizzati di{" "}
            <strong>ozonoterapia</strong> dopo un&apos;attenta valutazione
            medica, individuando la modalità di applicazione più appropriata
            in base alle caratteristiche del paziente e al quadro clinico.
          </p>
          <p>
            L&apos;<strong>ozono medicale</strong> viene utilizzato, nei
            contesti appropriati, come supporto nei percorsi terapeutici
            rivolti a patologie muscolo-scheletriche, stati infiammatori e
            condizioni dolorose.
          </p>
          <p>
            Per le sue caratteristiche di{" "}
            <strong>minima invasività</strong>, l&apos;ossigeno-ozonoterapia
            viene integrata in protocolli personalizzati con l&apos;obiettivo
            di favorire il benessere della persona e il recupero della
            funzionalità.
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
        titolo="Un riferimento per Malo e l'Alto Vicentino"
      >
        <p>
          L&apos;attività nell&apos;area di <strong>Malo</strong>{" "}
          rappresenta un riferimento anche per chi proviene da{" "}
          <strong>
            Isola Vicentina, Marano Vicentino, Thiene, Villaverla e San Vito
            di Leguzzano
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
          La Grande Autoemoterapia rappresenta la tecnica più avanzata
          dell&apos;Ozonoterapia sistemica a <strong>{city.name}</strong>.
          Consiste nel prelevare una{" "}
          <strong>maggiore quantità di sangue</strong> dal paziente (circa
          80-240ml), ozonizzarlo in modo controllato e reinfonderlo{" "}
          <strong>per via endovenosa</strong>.
        </p>
        <p>
          Questo trattamento ha <strong>effetti sistemici profondi</strong>,
          stimolando il sistema immunitario, migliorando l&apos;ossigenazione
          tissutale e producendo{" "}
          <strong>potenti effetti antinfiammatori e rigenerativi</strong>. È
          particolarmente indicato per patologie croniche e{" "}
          <strong>condizioni sistemiche complesse</strong>.
        </p>
      </LandingVideo>

      <LandingVideo
        titolo={`Piccola Autoemoterapia (PAET) a ${city.name}`}
        video="https://player.vimeo.com/video/1167667781?h=802d55120b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
        titoloVideo="Video: la Piccola Autoemoterapia (PAET)"
        invertito
      >
        <p>
          La Piccola Autoemoterapia è una delle tecniche utilizzate
          nell&apos;ozonoterapia a <strong>{city.name}</strong>. Consiste
          nel prelevare una <strong>piccola quantità</strong> di sangue dal
          paziente, miscelarla con ozono medicale e reiniettarla per{" "}
          <strong>via intramuscolare</strong>.
        </p>
        <p>
          Questo trattamento stimola il sistema immunitario e ha proprietà{" "}
          <strong>antinfiammatorie, analgesiche e rigenerative</strong>. È
          particolarmente efficace per problematiche localizzate e per{" "}
          <strong>migliorare la risposta immunitaria</strong>{" "}
          dell&apos;organismo.
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
