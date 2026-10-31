import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingElenco,
  LandingNota,
  LandingVideo,
  LandingLink,
} from "@/components/landing-layout"

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
    images: [
      {
        url: "https://dottmaicobattistello.it/images/Ritratto%20del%20medico%20in%20clinica.png",
        alt: "Dott. Maico Battistello - Ozonoterapia a Padova",
      },
    ],
  },
}

export default function OzonoterapiaPadovaPage() {
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
            A <strong>Padova</strong>, il Dott. Maico Battistello utilizza
            l&apos;<strong>ossigeno-ozonoterapia</strong> nell&apos;ambito di
            percorsi rivolti alla gestione del <strong>dolore</strong>, dei{" "}
            <strong>disturbi muscolo-scheletrici</strong> e delle problematiche
            funzionali della <strong>colonna vertebrale</strong> e delle
            articolazioni.
          </p>
          <p>
            Ogni trattamento parte dalla <strong>valutazione clinica</strong>.
            Natura e sede del disturbo, presenza di una componente infiammatoria,
            limitazioni funzionali e caratteristiche individuali contribuiscono
            a determinare se l&apos;ozonoterapia possa essere indicata e quale
            modalità di somministrazione sia più appropriata.
          </p>
          <p>
            L&apos;obiettivo non è applicare un protocollo prestabilito, ma
            costruire un percorso coerente con il quadro clinico della persona.
            Il trattamento si inserisce inoltre in un approccio
            più ampio che considera non soltanto il dolore, ma anche{" "}
            <strong>funzionalità, mobilità e qualità del movimento</strong>.
          </p>
        </>
      }
      carosello={[
        { title: "Ozonoterapia Cervicale", image: "/images/ozcervicale.jpg", link: "/ozonoterapia" },
        { title: "Ozonoterapia Lombare", image: "/images/ozonoterapia3.jpg", link: "/ozonoterapia" },
        { title: "Consulenza Specialistica", image: "/images/nuovaozono2.jpg", link: "/ozonoterapia" },
      ]}
      datiStrutturati={{
        ...seoData.structuredData,
        "@type": ["MedicalBusiness", "LocalBusiness"],
        priceRange: "€€",
        paymentAccepted: ["Cash", "Credit Card"],
        currenciesAccepted: "EUR",
        openingHours: ["Mo-Fr 09:00-18:00"],
        email: "info@dottmaicobattistello.it",
        hasMap: "https://maps.google.com/?q=Padova+ozonoterapia",
      }}
    >
      <LandingSezione
        etichetta="Valutazione personalizzata"
        titolo="Quando può essere indicata l'ozonoterapia a Padova"
      >
        <p>
          L&apos;ossigeno-ozonoterapia viene utilizzata, dopo la valutazione medica, nell&apos;ambito di differenti condizioni
          muscolo-scheletriche e dolorose, tra cui:
        </p>
        <LandingElenco
          voci={[
            "Cervicalgia e lombalgia",
            "Ernie e protrusioni discali",
            "Sciatalgia e dolore radicolare",
            "Artrosi e problematiche articolari",
            "Tendinopatie e disturbi muscolo-scheletrici",
            "Dolore associato a limitazioni della mobilità e della funzionalità",
          ]}
        />
        <LandingNota>
          Le possibili indicazioni dell&apos;ozonoterapia presentano{" "}
          <strong>livelli differenti di evidenza scientifica</strong>. Per questo
          l&apos;indicazione non deriva semplicemente dalla presenza di una
          determinata patologia: è la valutazione medica a stabilire
          l&apos;appropriatezza del trattamento nel singolo caso e la modalità con
          cui eventualmente inserirlo nel percorso terapeutico.
        </LandingNota>
      </LandingSezione>

      <LandingSezione
        etichetta="Area geografica"
        titolo="Un riferimento per Padova e l'area padovana"
      >
        <p>
          L&apos;attività a <strong>Padova</strong> rappresenta un riferimento
          anche per chi proviene da{" "}
          <strong>
            Abano Terme, Selvazzano Dentro, Albignasego, Vigonza e Cadoneghe
          </strong>
          , oltre che dagli altri comuni dell&apos;area padovana.
        </p>
      </LandingSezione>

      <LandingVideo
        titolo={`Grande Autoemoterapia (GAET) a ${city.name}`}
        video="https://player.vimeo.com/video/1167667746?h=c3a7c519ea&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1"
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
        video="https://player.vimeo.com/video/1167667781?h=802d55120b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1"
        titoloVideo="Video: la Piccola Autoemoterapia (PAET)"
        invertito
      >
        <p>
          La Piccola Autoemoterapia è una delle tecniche utilizzate
          nell&apos;ozonoterapia a <strong>{city.name}</strong>. Consiste nel
          prelevare una <strong>piccola quantità</strong> di sangue dal
          paziente, miscelarla con ozono medicale e reiniettarla per{" "}
          <strong>via intramuscolare</strong>.
        </p>
        <p>
          Questo trattamento stimola il sistema immunitario e ha proprietà{" "}
          <strong>antinfiammatorie, analgesiche e rigenerative</strong>. È
          particolarmente efficace per problematiche localizzate e per{" "}
          <strong>migliorare la risposta immunitaria</strong> dell&apos;organismo.
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
