import type { Metadata } from "next"
import Link from "next/link"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingElenco,
  LandingRiquadro,
  LandingNota,
  LandingLink,
  LandingFaq,
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

const stileLink =
  "font-semibold text-[#0066CC] underline decoration-[#0066CC]/30 underline-offset-4 hover:decoration-[#0066CC]"

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
            <strong>Centro Medico Medicalis di Monte di Malo</strong>, a pochi
            minuti dal centro di Malo.
          </p>
          <p>
            Qui esegue trattamenti osteopatici per cervicalgia, lombalgia,
            dolori articolari e limitazioni del movimento. Nella stessa sede,
            quando la valutazione clinica lo indica, l&apos;osteopatia può
            essere affiancata dall&apos;ossigeno-ozonoterapia, senza dover
            cambiare struttura.
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
      <LandingRiquadro etichetta="La sede" titolo="Dove riceve nell'area di Malo">
        <p>
          <strong>Centro Medico Medicalis, Via Sile 40, Monte di Malo (VI).</strong>
        </p>
        <p>
          Di norma il dottore è a Medicalis il <strong>mercoledì mattina</strong>{" "}
          e il <strong>venerdì</strong>, su appuntamento. Gli orari vengono
          concordati al momento della prenotazione. È disponibile il
          parcheggio presso il centro medico.
        </p>
      </LandingRiquadro>

      <LandingSezione etichetta="In un'unica sede" titolo="Osteopatia, ozonoterapia e autoemoterapia">
        <p>
          A Medicalis il dottore può integrare, nello stesso percorso e nella
          stessa struttura, strumenti diversi:
        </p>
        <LandingElenco
          voci={[
            "Trattamento osteopatico e manipolativo, per mobilità, tensioni muscolari e compensi posturali",
            "Ossigeno-ozonoterapia, per la componente dolorosa e infiammatoria",
            "Grande e piccola autoemoterapia, quando indicate dopo la valutazione clinica",
          ]}
        />
        <LandingNota>
          La scelta di cosa utilizzare non è mai automatica: dipende dalla
          valutazione medica e dalla risposta della persona nel tempo.
        </LandingNota>
        <p>
          <LandingLink href="/ozono-osteo-malo">
            Scopri l&apos;approccio integrato a Malo
          </LandingLink>
        </p>
      </LandingSezione>

      <LandingSezione etichetta="La prima visita" titolo="Come si svolge il primo incontro">
        <p>
          Il primo incontro parte da un colloquio sulla storia del disturbo e
          da una valutazione della postura e della mobilità, non solo nel
          punto in cui si sente dolore. Solo dopo viene definito se e come
          procedere con il trattamento.
        </p>
        <p>
          Se hai esami recenti, come radiografie, risonanze o referti, è utile
          portarli. Per saperne di più sull&apos;osteopatia e sulle tecniche
          utilizzate puoi leggere la pagina{" "}
          <Link href="/osteopatia" className={stileLink}>
            Osteopatia
          </Link>
          .
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Area geografica" titolo="Per Malo e l'Alto Vicentino">
        <p>
          La sede di Monte di Malo è comoda per chi vive a{" "}
          <strong>Malo, Monte di Malo, Isola Vicentina, Marano Vicentino,
          Thiene e Villaverla</strong>, oltre che per gli altri comuni
          dell&apos;Alto Vicentino.
        </p>
      </LandingSezione>

      <LandingFaq
        titolo="Domande frequenti sull'osteopatia a Malo"
        domande={[
          {
            domanda: "Dove si trova lo studio di osteopatia vicino a Malo?",
            risposta:
              "Il Dott. Maico Battistello riceve al Centro Medico Medicalis, in Via Sile 40 a Monte di Malo, a pochi minuti dal centro di Malo.",
          },
          {
            domanda: "In quali giorni riceve a Medicalis?",
            risposta:
              "Di norma il mercoledì mattina e il venerdì, su appuntamento. Gli orari vengono concordati al momento della prenotazione.",
          },
          {
            domanda: "Nella stessa sede posso fare anche ozonoterapia?",
            risposta:
              "Sì. A Medicalis il dottore esegue anche ossigeno-ozonoterapia e autoemoterapia, quando indicate dopo la valutazione clinica, all'interno dello stesso percorso.",
          },
          {
            domanda: "Cosa devo portare alla prima visita?",
            risposta:
              "Eventuali esami recenti, come radiografie, risonanze, ecografie o referti specialistici. Per il trattamento è consigliato un abbigliamento comodo.",
          },
          {
            domanda: "C'è parcheggio?",
            risposta: "Sì, è disponibile il parcheggio presso il centro medico.",
          },
        ]}
      />
    </LandingPage>
  )
}
