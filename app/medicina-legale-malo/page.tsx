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

const city = cities.find((c) => c.slug === "malo")!
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

export default function MedicinaLegaleMaloPage() {
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
            Nell&apos;area di Malo il Dott. Maico Battistello, specialista in
            Medicina Legale, riceve presso il Centro Medico Medicalis di
            Monte di Malo, a pochi minuti dal centro di Malo.
          </p>
          <p>
            Qui segue privati e studi legali per consulenze e valutazioni
            medico-legali, compresi i casi di responsabilità sanitaria, ed
            effettua visite medico-legali richieste dalle compagnie
            assicurative. Il servizio è rivolto a chi vive a Malo, Monte di
            Malo e nei comuni vicini, come Isola Vicentina, Marano Vicentino
            e Thiene.
          </p>
        </>
      }
      invito={{
        titolo: `Consulenza di Medicina Legale a ${city.name}`,
        testo:
          "Per fissare una consulenza a Monte di Malo, o per sapere quale documentazione portare, è possibile contattare direttamente il Dott. Maico Battistello.",
        pulsante: "Richiedi una consulenza",
      }}
      datiStrutturati={seoData.structuredData}
    >
      <LandingRiquadro etichetta="La sede" titolo="Dove riceve nell'area di Malo">
        <p>
          <strong>Centro Medico Medicalis, Via Sile 40, Monte di Malo (VI).</strong>
        </p>
        <p>
          Di norma il dottore è a Medicalis il <strong>mercoledì mattina</strong>{" "}
          e il <strong>venerdì</strong>, sempre su appuntamento. Gli orari
          vengono concordati al momento della prenotazione. È disponibile il
          parcheggio presso il centro medico.
        </p>
      </LandingRiquadro>

      <LandingSezione etichetta="Per chi" titolo="Chi può rivolgersi al medico legale">
        <p>
          Chiunque può contattare direttamente il dottore, senza bisogno di
          passare da un avvocato o da un&apos;assicurazione. In particolare:
        </p>
        <LandingElenco
          voci={[
            "Chi ha avuto un incidente stradale o un infortunio e vuole capire come documentare e valutare le conseguenze",
            "Chi ha il dubbio che una cura o un intervento non siano andati come dovevano (responsabilità sanitaria)",
            "Gli studi legali che cercano un consulente tecnico di parte (CTP) per un caso",
            "Chi deve affrontare una valutazione di invalidità o una pratica assicurativa",
          ]}
        />
      </LandingSezione>

      <LandingSezione etichetta="Responsabilità sanitaria" titolo="Se pensi di aver subito un errore medico">
        <p>
          In questi casi il primo passo è una valutazione tecnica e
          indipendente: il medico legale esamina la documentazione clinica e
          il percorso di diagnosi e cura, per capire se ci sono elementi che
          meritano di essere approfonditi.
        </p>
        <p>
          È una valutazione utile prima di prendere qualsiasi decisione,
          anche insieme al proprio avvocato.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Visite assicurative" titolo="Se ti ha convocato la tua assicurazione">
        <p>
          A Medicalis il dottore effettua anche visite medico-legali
          richieste dalle compagnie assicurative, per esempio dopo un
          infortunio coperto da polizza o un sinistro stradale. Porta con te
          il documento d&apos;identità, la comunicazione ricevuta e tutta la
          documentazione sanitaria relativa all&apos;evento.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Ambiti di intervento" titolo={`Di cosa si occupa nell'area di ${city.name}`}>
        <LandingElenco voci={service.conditions} />
        <p>
          Per approfondire il danno biologico, la Consulenza Tecnica di Parte
          (CTP) e le valutazioni assicurative, trovi tutte le spiegazioni
          nella pagina{" "}
          <Link href="/medicina-legale" className={stileLink}>
            Medicina Legale
          </Link>
          .
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Nella stessa sede" titolo="Anche ozonoterapia e osteopatia">
        <p>
          A Medicalis il dottore esegue anche ossigeno-ozonoterapia, grande e
          piccola autoemoterapia e trattamenti osteopatici. Se, oltre alla
          valutazione medico-legale, hai bisogno di un percorso per il
          dolore, trovi le informazioni nella pagina{" "}
          <Link href="/ozono-osteo-malo" className={stileLink}>
            Ozonoterapia e Osteopatia a Malo
          </Link>
          .
        </p>
      </LandingSezione>

      <LandingFaq
        titolo="Domande frequenti sulla sede di Malo"
        domande={[
          {
            domanda: "Dove si trova la sede del medico legale vicino a Malo?",
            risposta:
              "Il Dott. Maico Battistello riceve al Centro Medico Medicalis, in Via Sile 40 a Monte di Malo, a pochi minuti dal centro di Malo.",
          },
          {
            domanda: "Posso contattare il medico legale da privato, senza avvocato?",
            risposta:
              "Sì. Puoi contattare direttamente il dottore: dopo una prima valutazione del caso saprai se e come procedere, anche insieme a un legale.",
          },
          {
            domanda: "Penso di aver subito un errore medico: da dove si comincia?",
            risposta:
              "Dalla raccolta della documentazione clinica: cartelle, referti, esami e certificati. Il medico legale la esamina e valuta il percorso di diagnosi e cura, per capire se ci sono elementi da approfondire.",
          },
          {
            domanda: "La mia assicurazione mi ha convocato per una visita: cosa devo portare?",
            risposta:
              "Il documento d'identità, la comunicazione ricevuta dall'assicurazione e tutta la documentazione sanitaria relativa all'evento: verbale di pronto soccorso, referti, esami diagnostici e certificati medici.",
          },
          {
            domanda: "In quali giorni riceve a Medicalis? C'è parcheggio?",
            risposta:
              "Di norma il mercoledì mattina e il venerdì, su appuntamento. Sì, è disponibile il parcheggio presso il centro medico.",
          },
        ]}
      />
    </LandingPage>
  )
}
