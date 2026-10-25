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
  title: "Ozonoterapia per ulcere e ferite difficili | Dott. Maico Battistello",
  description:
    "Ozonoterapia topica con sacchetti di ozono come supporto nel trattamento di ulcere venose, da decubito, diabetiche e ferite post-chirurgiche. Dott. Maico Battistello.",
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
        { label: "Ulcere e ferite difficili", href: "/ozonoterapia-ulcere" },
      ]}
      etichetta="Ozonoterapia topica"
      titolo="Ozonoterapia per ulcere e ferite difficili"
      intro={
        <>
          <p>
            Oltre all&apos;ozonoterapia infiltrativa e sistemica, il Dott. Maico
            Battistello utilizza l&apos;ozono anche <strong>per via topica</strong>:
            la zona interessata viene racchiusa in un sacchetto in cui viene
            immesso ozono medicale, come supporto nel trattamento delle ulcere
            cutanee.
          </p>
          <p>
            Il dottore segue personalmente anche le medicazioni, all&apos;interno
            dello stesso percorso.
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
            "Ulcere da decubito",
            "Ulcere del piede diabetico",
            "Ferite post-chirurgiche che faticano a guarire",
          ]}
        />
      </LandingSezione>

      <LandingSezione etichetta="La seduta" titolo="Come si svolge">
        <p>
          La seduta dura circa 45 minuti, durante i quali la persona resta
          seduta o sdraiata con il sacchetto applicato. Il trattamento non è
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
