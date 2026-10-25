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

const city = cities.find((c) => c.slug === "marostica")!
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

export default function MedicinaLegaleMarosticaPage() {
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
            Marostica è la sede principale del Dott. Maico Battistello,
            specialista in Medicina Legale dal 2004. Qui riceve privati,
            studi legali e agenzie assicurative per consulenze e valutazioni
            medico-legali, nell&apos;ambulatorio medico di Via Ragazzoni 36.
          </p>
          <p>
            Il servizio è rivolto a chi vive a Marostica e nei comuni vicini,
            come Bassano del Grappa, Nove, Pianezze, Mason Vicentino e
            Breganze. Per alcune valutazioni arrivano persone anche da più
            lontano: in questi casi si sceglie insieme la sede e il giorno
            più comodi.
          </p>
        </>
      }
      invito={{
        titolo: `Consulenza di Medicina Legale a ${city.name}`,
        testo:
          "Per fissare una consulenza a Marostica, o per sapere quale documentazione portare, è possibile contattare direttamente il Dott. Maico Battistello.",
        pulsante: "Richiedi una consulenza",
      }}
      datiStrutturati={seoData.structuredData}
    >
      <LandingRiquadro etichetta="La sede" titolo="Dove riceve a Marostica">
        <p>
          <strong>Ambulatorio medico di Via Ragazzoni 36, Marostica (VI).</strong>{" "}
          È l&apos;ambulatorio di medicina generale che si trova al piano
          superiore, sopra i negozi. All&apos;esterno è presente la targa con
          il nome del Dott. Maico Battistello, medico legale.
        </p>
        <p>
          Di norma il dottore riceve a Marostica il <strong>lunedì</strong> e
          il <strong>giovedì</strong>, sempre su appuntamento. Gli orari
          variano in base alle visite in programma e vengono concordati al
          momento della prenotazione. È disponibile il parcheggio.
        </p>
      </LandingRiquadro>

      <LandingSezione etichetta="Per chi" titolo="A chi si rivolge la consulenza a Marostica">
        <p>
          Non serve passare da un avvocato o da un&apos;assicurazione: il
          dottore può essere contattato direttamente. A Marostica segue
          soprattutto:
        </p>
        <LandingElenco
          voci={[
            "Persone che hanno avuto un incidente stradale o un infortunio, sul lavoro, nello sport o nella vita quotidiana",
            "Pazienti che ritengono di aver ricevuto cure non corrette, o che dopo un intervento hanno conseguenze inattese",
            "Studi legali che hanno bisogno di un consulente tecnico di parte (CTP)",
            "Agenzie assicurative che richiedono una valutazione medico-legale",
          ]}
        />
      </LandingSezione>

      <LandingSezione etichetta="Responsabilità sanitaria" titolo="Quando il dubbio riguarda le cure ricevute">
        <p>
          Capire se un esito sfavorevole dipende dalla malattia o da come è
          stata gestita richiede una lettura attenta di cartelle cliniche,
          referti e tempi del percorso di cura. È il lavoro del medico legale:
          un parere tecnico che aiuta a decidere con più chiarezza se e come
          procedere.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Ambiti di intervento" titolo={`Di cosa si occupa a ${city.name}`}>
        <LandingElenco voci={service.conditions} />
        <p>
          In ogni caso il punto di partenza è lo stesso: l&apos;analisi della
          documentazione clinica e una valutazione specialistica del caso.
          Se vuoi approfondire cosa sono il danno biologico, la Consulenza
          Tecnica di Parte (CTP) e le valutazioni assicurative, trovi tutte le
          spiegazioni nella pagina{" "}
          <Link href="/medicina-legale" className={stileLink}>
            Medicina Legale
          </Link>
          .
        </p>
      </LandingSezione>

      <LandingSezione etichetta="Prima della visita" titolo="Cosa portare all'appuntamento">
        <p>
          Per una valutazione completa è utile portare tutta la
          documentazione disponibile: verbale di pronto soccorso, referti,
          esami diagnostici, certificati medici, eventuale documentazione
          fisioterapica e, se presente, la corrispondenza con
          l&apos;assicurazione o con il legale.
        </p>
        <p>
          Se hai dubbi su cosa serve nel tuo caso, puoi chiederlo al momento
          della prenotazione.
        </p>
      </LandingSezione>

      <LandingFaq
        titolo="Domande frequenti sulla sede di Marostica"
        domande={[
          {
            domanda: "Dove si trova lo studio di Medicina Legale a Marostica?",
            risposta:
              "Il Dott. Maico Battistello riceve nell'ambulatorio medico di Via Ragazzoni 36, al piano superiore, sopra i negozi. All'esterno c'è la targa con il suo nome.",
          },
          {
            domanda: "In quali giorni riceve a Marostica? C'è parcheggio?",
            risposta:
              "Di norma il lunedì e il giovedì, su appuntamento; gli orari vengono concordati al momento della prenotazione. Sì, è disponibile il parcheggio.",
          },
          {
            domanda: "Posso rivolgermi a lui per un sospetto caso di malasanità?",
            risposta:
              "Sì. Il dottore esamina la documentazione clinica e il percorso di cura per capire se ci sono elementi di responsabilità sanitaria da approfondire, e può affiancare il tuo avvocato come consulente tecnico di parte.",
          },
          {
            domanda: "Abito a Bassano del Grappa: posso venire a Marostica?",
            risposta:
              "Certo. Marostica è la sede più comoda per chi arriva da Bassano del Grappa e dai comuni vicini. Se un altro giorno ti è più comodo, si può valutare anche una delle altre sedi del dottore.",
          },
          {
            domanda: "Il medico legale può lavorare insieme al mio avvocato?",
            risposta:
              "Sì. Come consulente tecnico di parte, il dottore collabora con il legale nell'analisi della documentazione e nella valutazione medico-legale del caso.",
          },
        ]}
      />
    </LandingPage>
  )
}
