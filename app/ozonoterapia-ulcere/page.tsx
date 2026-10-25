import type { Metadata } from "next"
import {
  LandingPage,
  LandingSezione,
  LandingElenco,
  LandingRiquadro,
  LandingNota,
} from "@/components/landing-layout"

// BOZZA in attesa di revisione del dottore: la pagina non viene indicizzata da Google.
// Quando il testo è approvato: togliere "robots" qui sotto.
export const metadata: Metadata = {
  title: "Ozonoterapia per ulcere e ferite complesse | Dott. Maico Battistello",
  description:
    "Grande Autoemoterapia (GAET), ozono in apposite sacche a tenuta e trattamento topico per ulcere venose, del piede diabetico e ferite post-chirurgiche con ritardo di cicatrizzazione. Dott. Maico Battistello.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/ozonoterapia-ulcere",
  },
  robots: { index: false, follow: true },
}

export default function OzonoterapiaUlcerePage() {
  return (
    <LandingPage
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Ozonoterapia", href: "/ozonoterapia" },
        { label: "Ulcere e ferite complesse", href: "/ozonoterapia-ulcere" },
      ]}
      etichetta="Ozonoterapia topica"
      titolo="Ozonoterapia per ulcere e ferite complesse"
      intro={
        <>
          <p>
            Il trattamento di queste lesioni prevede l&apos;
            <strong>abbinamento della Grande Autoemoterapia (GAET)</strong> con
            l&apos;applicazione di <strong>ozono medicale a fini rigenerativi</strong>{" "}
            in un&apos;<strong>apposita sacca a tenuta</strong>, che racchiude la zona
            interessata, e il <strong>trattamento topico della lesione</strong>.
          </p>
          <p>
            Tutto avviene nella stessa seduta: durante la GAET viene applicata la
            sacca e il dottore segue personalmente anche le medicazioni.
          </p>
        </>
      }
      invito={{
        titolo: "Valutazione per ulcere cutanee",
        testo:
          "Il primo passo è una visita con il Dott. Maico Battistello, per valutare l'ulcera e impostare il percorso.",
        pulsante: "Prenota una visita",
      }}
    >
      <LandingSezione etichetta="Indicazioni" titolo="Per quali ulcere">
        <LandingElenco
          voci={[
            "Ulcere venose",
            "Ulcere del piede diabetico",
            "Ferite post-chirurgiche con ritardo di cicatrizzazione",
          ]}
        />
      </LandingSezione>

      <LandingSezione etichetta="La seduta" titolo="Come si svolge">
        <p>
          La seduta dura circa 45 minuti, durante i quali la persona resta
          seduta o sdraiata con la sacca applicata. Il trattamento non è
          doloroso.
        </p>
        <p>
          Il numero e la frequenza delle sedute dipendono dall&apos;estensione e
          dalle caratteristiche dell&apos;ulcera, e vengono definiti dopo la
          valutazione.
        </p>
      </LandingSezione>

      <LandingRiquadro etichetta="Le sedi" titolo="Dove si esegue">
        <p>
          Centro Medico Medicalis, Via Sile 40, Monte di Malo (VI).
          <br />
          Clinica Cittàgiardino, Via F. Piccolo 6, Padova.
        </p>
      </LandingRiquadro>

      <LandingSezione etichetta="Foto" titolo="Il trattamento in immagini">
        <LandingNota>
          Spazio riservato alle foto, da inserire dopo la scelta con il dottore.
        </LandingNota>
      </LandingSezione>
    </LandingPage>
  )
}
