import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
export const metadata: Metadata = {
  title: "Cookie Policy | Dott. Maico Battistello",
  alternates: { canonical: "https://dottmaicobattistello.it/cookie-policy" },
}


export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy", href: "/cookie-policy" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

          <p className="text-lg mb-6">
            Questa Cookie Policy spiega cosa sono i cookie e come vengono utilizzati sul sito web del Dott. Maico
            Battistello. La preghiamo di leggere attentamente questa policy per comprendere come trattiamo i suoi dati.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cosa sono i cookie?</h2>
          <p className="text-lg mb-6">
            I cookie sono piccoli file di testo che vengono memorizzati sul suo dispositivo (computer, tablet o
            smartphone) quando visita un sito web. I cookie sono ampiamente utilizzati per far funzionare i siti web in
            modo più efficiente, fornire informazioni ai proprietari del sito e migliorare l'esperienza di navigazione
            dell'utente.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Come utilizziamo i cookie</h2>
          <p className="text-lg mb-6">
            Questo sito <strong>non utilizza cookie di profilazione né cookie analitici</strong>. Per questo motivo
            non viene mostrato alcun banner per la raccolta del consenso.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Statistiche delle visite</h3>
          <p className="text-lg mb-6">
            Per conoscere il numero di visite e le pagine più consultate utilizziamo Vercel Web Analytics, un servizio
            che <strong>non installa cookie</strong> sul suo dispositivo e raccoglie esclusivamente dati aggregati e
            anonimi, senza identificare il singolo visitatore.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Video</h3>
          <p className="text-lg mb-6">
            I video presenti nel sito sono ospitati su Vimeo e sono inseriti con l&apos;opzione &quot;Do Not
            Track&quot;, che impedisce a Vimeo di tracciare la navigazione tramite cookie.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Come gestire i cookie</h2>
          <p className="text-lg mb-6">
            Può controllare e/o eliminare i cookie come desidera. Può eliminare tutti i cookie già presenti sul suo
            dispositivo e può impostare la maggior parte dei browser in modo da impedirne l'installazione. Tuttavia, se
            sceglie questa opzione, potrebbe dover inserire manualmente alcune informazioni ogni volta che visita un
            sito e alcune funzionalità potrebbero non essere disponibili.
          </p>

          <p className="text-lg mb-6">
            La maggior parte dei browser web consente di gestire le preferenze relative ai cookie. Può impostare il suo
            browser per rifiutare i cookie o eliminare solo alcuni cookie. Allo stesso modo in cui gestisce i cookie sul
            suo browser, può anche gestire le preferenze relative ai cookie per altri strumenti digitali.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Modifiche alla Cookie Policy</h2>
          <p className="text-lg mb-6">
            Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Eventuali modifiche
            saranno pubblicate su questa pagina. La invitiamo a consultare regolarmente questa pagina per essere
            informato su eventuali aggiornamenti.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contatti</h2>
          <p className="text-lg mb-6">
            Se ha domande o dubbi riguardo alla nostra Cookie Policy, può contattarci tramite i recapiti disponibili
            nella sezione{" "}
            <a href="/contatti" className="text-primary hover:underline">
              Contatti
            </a>{" "}
            del nostro sito.
          </p>

          <p className="text-lg mt-10 text-gray-600">Ultimo aggiornamento: 25 ottobre 2026</p>
        </div>
      </div>
    </div>
  )
}
