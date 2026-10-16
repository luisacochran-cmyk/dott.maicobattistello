import type { Metadata } from "next"
import Link from "next/link"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingElenco,
  LandingRiquadro,
  LandingFaq,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "schio")!
const service = services.find((s) => s.slug === "medicina-legale")!
const seoData = generateLocalSEO(service, city)

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  alternates: {
    canonical: seoData.canonical,
  },
}

const stileLink =
  "font-semibold text-[#0066CC] underline decoration-[#0066CC]/30 underline-offset-4 hover:decoration-[#0066CC]"

export default function MedicinaLegaleSchioPage() {
  return (
    <LandingPage
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Medicina Legale", href: "/medicina-legale" },
        { label: `Medicina Legale a ${city.name}`, href: `/medicina-legale-${city.slug}` },
      ]}
      etichetta={`Medicina Legale · ${city.name}`}
      titolo={seoData.h1}
      intro={
        <>
          <p>
            A Schio il Dott. Maico Battistello, specialista in Medicina Legale,
            riceve presso il Centro Medico MET, punto di riferimento per chi
            vive nell&apos;Alto Vicentino.
          </p>
          <p>
            Si rivolgono a lui privati, studi legali e agenzie assicurative
            di Schio e dei comuni vicini, come Santorso, Thiene e Piovene
            Rocchette, per valutazioni dopo incidenti, infortuni, anche sul
            lavoro, e casi di responsabilità sanitaria.
          </p>
        </>
      }
      invito={{
        titolo: `Consulenza di Medicina Legale a ${city.name}`,
        testo:
          "Per fissare una consulenza a Schio, o per sapere quale documentazione serve nel tuo caso, è possibile contattare direttamente il Dott. Maico Battistello.",
        pulsante: "Richiedi una consulenza",
      }}
      datiStrutturati={seoData.structuredData}
    >
      <LandingRiquadro etichetta="La sede" titolo="Dove riceve a Schio">
        <p>
          <strong>Centro Medico MET, Via L. Muratori 1/A, Schio (VI).</strong>
        </p>
        <p>
          Di norma il dottore è a Schio il <strong>mercoledì pomeriggio</strong>,
          su appuntamento. Gli orari vengono concordati al momento della
          prenotazione. È disponibile il parcheggio presso il centro medico.
        </p>
      </LandingRiquadro>

      <LandingSezione etichetta="Infortuni" titolo="Dopo un infortunio, anche sul lavoro">
        <p>
          Un infortunio può lasciare conseguenze che non si vedono subito:
          dolore che persiste, movimenti limitati, difficoltà a riprendere il
          proprio lavoro. Una valutazione medico-legale aiuta a capire quali
          postumi sono documentabili e come vanno descritti, sia per una
          polizza infortuni sia in caso di responsabilità di terzi.
        </p>
        <p>
          Prima ci si muove, più è semplice ricostruire con precisione il
          percorso di cura: per questo conviene conservare fin dall&apos;inizio
          referti, certificati e ogni documento relativo all&apos;evento.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="A chi si rivolge" titolo="Privati, avvocati e assicurazioni">
        <LandingElenco
          voci={[
            "Privati che vogliono una valutazione indipendente del proprio caso, anche senza essere già seguiti da un avvocato",
            "Pazienti con dubbi sulle cure ricevute, per una prima lettura della documentazione clinica",
            "Studi legali dell'Alto Vicentino che cercano un consulente tecnico di parte (CTP)",
            "Compagnie e agenzie assicurative che richiedono visite medico-legali",
          ]}
        />
        <p>
          Gli ambiti in cui interviene sono descritti in dettaglio nella
          pagina{" "}
          <Link href="/medicina-legale" className={stileLink}>
            Medicina Legale
          </Link>
          : danno biologico, invalidità, responsabilità sanitaria e
          consulenza tecnica di parte.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Nella stessa sede" titolo="Ozonoterapia e osteopatia a Schio">
        <p>
          Al Centro Medico MET il dottore si occupa anche, e soprattutto, di
          ossigeno-ozonoterapia e trattamento osteopatico per il dolore
          muscolare e articolare. Trovi tutte le informazioni nella pagina{" "}
          <Link href="/ozono-osteo-schio" className={stileLink}>
            Ozonoterapia e Osteopatia a Schio
          </Link>
          .
        </p>
      </LandingSezione>

      <LandingFaq
        titolo="Domande frequenti sulla sede di Schio"
        domande={[
          {
            domanda: "Dove riceve il medico legale a Schio?",
            risposta:
              "Il Dott. Maico Battistello riceve al Centro Medico MET, in Via L. Muratori 1/A a Schio.",
          },
          {
            domanda: "In quale giorno è a Schio?",
            risposta:
              "Di norma il mercoledì pomeriggio, su appuntamento. Se ti serve un altro giorno, puoi essere visitato nelle sedi di Malo, Marostica o Padova.",
          },
          {
            domanda: "Ho avuto un infortunio sul lavoro: ha senso una valutazione medico-legale?",
            risposta:
              "Sì, soprattutto se restano dolore, limitazioni o difficoltà nel lavoro. La valutazione aiuta a capire quali conseguenze sono documentabili e come descriverle correttamente.",
          },
          {
            domanda: "Quali documenti conviene conservare dopo un infortunio?",
            risposta:
              "Il verbale di pronto soccorso, i certificati medici, i referti degli esami, la documentazione di eventuali terapie o fisioterapia e ogni comunicazione con il datore di lavoro o con l'assicurazione.",
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
