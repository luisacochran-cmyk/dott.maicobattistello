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
            Il Dott. Maico Battistello, specialista in Medicina Legale,
            svolge attività di medicina legale a Padova offrendo consulenze
            e valutazioni medico-legali rivolte a privati, professionisti,
            studi legali e agenzie assicurative.
          </p>
          <p>
            L&apos;attività comprende la valutazione del danno biologico e
            del danno alla persona, le conseguenze di infortuni e sinistri
            stradali, l&apos;invalidità permanente, le controversie
            assicurative, la responsabilità professionale sanitaria e
            l&apos;assistenza medico-legale nell&apos;ambito di consulenze
            tecniche di parte (CTP).
          </p>
          <p>
            La consulenza parte dall&apos;analisi della documentazione
            clinica e medico-legale, dall&apos;inquadramento del caso e
            dalla valutazione specialistica, con l&apos;obiettivo di
            fornire un parere medico-legale chiaro e documentato nei
            diversi ambiti assicurativi, stragiudiziali e giudiziari.
          </p>
          <p>
            Il servizio è rivolto a persone provenienti da Padova e dai
            comuni dell&apos;area padovana, tra cui Abano Terme,
            Selvazzano Dentro, Albignasego e Vigonza.
          </p>
        </>
      }
      invito={{
        titolo: `Consulenza di Medicina Legale a ${city.name}`,
        testo: `Per richiedere una consulenza medico-legale a ${city.name} o ricevere informazioni sulla valutazione del proprio caso, è possibile contattare il Dott. Maico Battistello.`,
        pulsante: "Richiedi una consulenza",
      }}
      datiStrutturati={seoData.structuredData}
    >
      <LandingSezione etichetta="Ambiti di intervento" titolo={`Servizi di Medicina Legale a ${city.name}`}>
        <LandingElenco voci={service.conditions} />
      </LandingSezione>

      <LandingSezione etichetta="Danno alla persona" titolo="Danno biologico e valutazione del danno alla persona">
        <p>
          La valutazione del danno alla persona è uno degli ambiti
          della Medicina Legale e permette di analizzare le conseguenze
          di un evento lesivo sulla salute della persona.
        </p>
        <p>
          La consulenza medico-legale prende in considerazione la
          documentazione clinica disponibile, gli accertamenti
          diagnostici, il percorso terapeutico, gli esiti delle
          lesioni e gli eventuali postumi permanenti.
        </p>
        <p>
          La valutazione può riguardare, tra gli altri, danni derivanti
          da incidenti stradali, lesioni personali e altri eventi che
          abbiano determinato conseguenze temporanee o permanenti.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Responsabilità sanitaria" titolo="Responsabilità sanitaria e Consulenza Tecnica di Parte (CTP)">
        <p>
          Nell&apos;ambito della responsabilità sanitaria e
          professionale, la valutazione medico-legale consente di
          esaminare la documentazione clinica e il percorso diagnostico
          e terapeutico in relazione allo specifico caso.
        </p>
        <p>
          Il medico legale può inoltre svolgere il ruolo di consulente
          tecnico di parte (CTP), fornendo una valutazione specialistica
          degli aspetti medico-legali e collaborando con il legale
          nell&apos;analisi della documentazione e del caso.
        </p>
        <p>
          La consulenza tecnica di parte può essere utilizzata sia
          nella fase stragiudiziale sia nell&apos;ambito di un
          procedimento giudiziario.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Assicurazioni" titolo="Invalidità, infortuni e valutazioni assicurative">
        <p>
          L&apos;attività medico-legale comprende anche valutazioni
          relative all&apos;invalidità civile, agli infortuni sul
          lavoro e alle conseguenze permanenti derivanti da lesioni o
          eventi traumatici.
        </p>
        <p>
          In ambito assicurativo, la consulenza medico-legale permette
          di analizzare la documentazione sanitaria e gli esiti
          dell&apos;evento ai fini della valutazione del danno e delle
          problematiche medico-legali connesse al caso.
        </p>
        <p>
          Ogni valutazione viene effettuata sulla base della
          documentazione disponibile e delle caratteristiche
          specifiche della situazione esaminata.
        </p>
      </LandingSezione>

      <LandingRiquadro etichetta="Il medico legale" titolo="Valutazione medico-legale del caso">
        <p>
          Il Dott. Maico Battistello è specialista in Medicina Legale.
          L&apos;attività comprende l&apos;analisi della documentazione
          clinica, la valutazione medico-legale del danno alla persona,
          la redazione di relazioni medico-legali e l&apos;assistenza
          nell&apos;ambito di consulenze tecniche di parte.
        </p>
      </LandingRiquadro>

      <LandingSezione etichetta="Quando rivolgersi" titolo={`Quando rivolgersi a un Medico Legale a ${city.name}`}>
        <p>
          Una valutazione medico-legale può essere richiesta in seguito
          a un incidente stradale, un infortunio o un evento che abbia
          determinato conseguenze temporanee o permanenti sulla salute,
          oppure nell&apos;ambito di una controversia assicurativa o di
          un caso di responsabilità professionale sanitaria.
        </p>
        <p>
          Il medico legale analizza la documentazione sanitaria e gli
          esiti dell&apos;evento, valutando le conseguenze del danno
          alla persona e la loro rilevanza medico-legale.
        </p>
        <p>
          La consulenza può inoltre affiancare la persona e il suo
          legale attraverso una consulenza tecnica di parte (CTP), sia
          nella fase stragiudiziale sia nell&apos;ambito di un
          procedimento giudiziario.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="La sede" titolo={`Dove si svolgono le visite medico-legali a ${city.name}`}>
        <p>
          Il Dott. Maico Battistello effettua consulenze e valutazioni
          medico-legali a Padova, prevalentemente presso la Clinica
          Medicina Amica, in Via Boccaccio 104/C, su appuntamento.
          La struttura ospita le visite del professionista e non è
          uno studio di sua proprietà.
        </p>
        <p>
          Per conoscere le disponibilità, confermare la sede della visita
          e ricevere indicazioni sulla documentazione necessaria,
          consulta la pagina{" "}
          <Link
            href="/contatti"
            className="font-semibold text-[#0066CC] underline decoration-[#0066CC]/30 underline-offset-4 hover:decoration-[#0066CC]"
          >
            Contatti
          </Link>
          .
        </p>
      </LandingSezione>

      <LandingFaq
        titolo="Domande frequenti sulla Medicina Legale"
        domande={[
          {
            domanda: "Cos'è una consulenza tecnica di parte (CTP)?",
            risposta:
              "La consulenza tecnica di parte è una consulenza medico-legale richiesta da una delle parti coinvolte per valutare gli aspetti sanitari e medico-legali del caso e fornire supporto specialistico nell'ambito di una controversia.",
          },
          {
            domanda: "Come si quantifica l'invalidità permanente?",
            risposta:
              "La valutazione dell'invalidità permanente prende in considerazione la documentazione clinica, gli esiti delle lesioni, la visita medico-legale e i criteri valutativi applicabili al caso specifico.",
          },
          {
            domanda: "Quando è utile una valutazione medico-legale dopo un incidente stradale?",
            risposta:
              "La valutazione medico-legale permette di esaminare la documentazione sanitaria, gli esiti delle lesioni e le eventuali conseguenze permanenti, fornendo gli elementi medico-legali utili alla valutazione del danno alla persona.",
          },
          {
            domanda: "Il medico legale può collaborare con il mio avvocato?",
            risposta:
              "Sì. Nell'ambito di una consulenza tecnica di parte, il medico legale può collaborare con il legale fornendo una valutazione specialistica degli aspetti medico-legali del caso.",
          },
          {
            domanda: "Quali documenti servono per una consulenza medico-legale?",
            risposta:
              "È utile presentare la documentazione sanitaria relativa al caso, come referti, cartelle cliniche, esami diagnostici, certificati medici e la documentazione assicurativa o legale disponibile.",
          },
          {
            domanda: "Quanto dura una consulenza medico-legale?",
            risposta:
              "I tempi dipendono dalle caratteristiche e dalla complessità del caso, dalla quantità di documentazione da esaminare e dal tipo di valutazione medico-legale richiesta.",
          },
        ]}
      />
    </LandingPage>
  )
}
