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

const city = cities.find((c) => c.slug === "padova")!
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

export default function MedicinaLegalePadovaPage() {
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
            A Padova il Dott. Maico Battistello, specialista in Medicina
            Legale, svolge consulenze e valutazioni medico-legali
            prevalentemente presso la Clinica Medicina Amica, in Via
            Boccaccio 104/C, e su richiesta anche presso la Clinica
            Cittàgiardino.
          </p>
          <p>
            Si rivolgono a lui privati, studi legali e agenzie assicurative
            di Padova e dell&apos;area padovana, come Abano Terme, Selvazzano
            Dentro, Albignasego e Vigonza. Alcuni pazienti arrivano anche da
            fuori provincia, per esempio da Treviso o da Verona.
          </p>
        </>
      }
      invito={{
        titolo: `Consulenza di Medicina Legale a ${city.name}`,
        testo:
          "Per fissare una consulenza a Padova e concordare la sede più adatta, è possibile contattare direttamente il Dott. Maico Battistello.",
        pulsante: "Richiedi una consulenza",
      }}
      datiStrutturati={seoData.structuredData}
    >
      <LandingRiquadro etichetta="Le sedi" titolo="Dove riceve a Padova">
        <p>
          <strong>Clinica Medicina Amica, Via Boccaccio 104/C, Padova.</strong>{" "}
          È la sede dedicata soprattutto alla medicina legale. Il dottore
          riceve su appuntamento, in genere il martedì.
        </p>
        <p>
          <strong>Clinica Cittàgiardino, Via F. Piccolo 6, Padova.</strong>{" "}
          Qui il dottore è di norma il martedì pomeriggio, soprattutto per
          ozonoterapia e osteopatia, ma può ricevere anche per consulenze
          medico-legali.
        </p>
        <p>
          In entrambe le cliniche è disponibile il parcheggio. Le strutture
          ospitano le visite del professionista e non sono studi di sua
          proprietà; la sede viene confermata al momento della prenotazione.
        </p>
      </LandingRiquadro>

      <LandingSezione etichetta="Prima di agire" titolo="Un parere preventivo, prima di avviare una richiesta">
        <p>
          Prima di intraprendere una richiesta di risarcimento è utile sapere
          se il caso è sostenibile dal punto di vista medico-legale. Il
          dottore può esaminare la documentazione e fornire un parere scritto
          preventivo: uno strumento che aiuta il paziente e il suo avvocato a
          decidere con più consapevolezza se e come procedere.
        </p>
        <p>
          È particolarmente utile nei casi di responsabilità sanitaria, quando
          il dubbio riguarda la correttezza delle cure ricevute, e nei
          sinistri in cui i postumi non sono ancora chiari.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="A chi si rivolge" titolo="Privati, studi legali e assicurazioni">
        <LandingElenco
          voci={[
            "Privati dopo un incidente stradale, un infortunio o un evento con conseguenze sulla salute",
            "Pazienti che vogliono capire se le cure ricevute sono state corrette",
            "Studi legali di Padova e provincia che cercano un consulente tecnico di parte (CTP)",
            "Agenzie e compagnie assicurative che richiedono una valutazione medico-legale",
          ]}
        />
        <p>
          Tutti gli ambiti di intervento, dal danno biologico
          all&apos;invalidità, sono descritti nella pagina{" "}
          <Link href="/medicina-legale" className={stileLink}>
            Medicina Legale
          </Link>
          .
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Da fuori provincia" titolo="Se arrivi da Treviso, Verona o da più lontano">
        <p>
          Per chi viene da lontano conviene raccogliere tutta la
          documentazione prima dell&apos;appuntamento: in questo modo la
          valutazione può essere completa già al primo incontro. Al momento
          della prenotazione si può scegliere anche una delle altre sedi del
          dottore, se più comoda.
        </p>
      </LandingSezione>

      <LandingFaq
        titolo="Domande frequenti sulla sede di Padova"
        domande={[
          {
            domanda: "In quale clinica riceve il medico legale a Padova?",
            risposta:
              "Prevalentemente alla Clinica Medicina Amica, in Via Boccaccio 104/C. Su richiesta anche alla Clinica Cittàgiardino, in Via F. Piccolo 6. La sede viene confermata al momento della prenotazione.",
          },
          {
            domanda: "Cos'è il parere preventivo?",
            risposta:
              "È una valutazione scritta, fatta sulla base della documentazione, che indica se una richiesta di risarcimento è sostenibile dal punto di vista medico-legale. Aiuta a decidere prima di avviare una pratica o una causa.",
          },
          {
            domanda: "Posso rivolgermi a lui per un sospetto errore medico in un ospedale di Padova?",
            risposta:
              "Sì. Il dottore esamina cartelle cliniche, referti e percorso di cura per capire se ci sono elementi di responsabilità sanitaria da approfondire, e può affiancare il tuo avvocato come consulente tecnico di parte.",
          },
          {
            domanda: "Vengo da fuori provincia: cosa devo preparare?",
            risposta:
              "Tutta la documentazione sanitaria disponibile: verbali di pronto soccorso, cartelle cliniche, referti, esami e certificati, oltre a eventuali comunicazioni con l'assicurazione o con il legale.",
          },
          {
            domanda: "In quale giorno è a Padova? C'è parcheggio?",
            risposta:
              "In genere il martedì, su appuntamento; gli orari vengono concordati al momento della prenotazione. Sì, il parcheggio è disponibile in entrambe le cliniche.",
          },
        ]}
      />
    </LandingPage>
  )
}
