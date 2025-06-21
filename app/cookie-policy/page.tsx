import Breadcrumb from "@/components/breadcrumb"

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
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
            Questa Cookie Policy spiega cosa sono i cookie e come vengono utilizzati sul sito web del Dr. Maico
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
            Il nostro sito utilizza diversi tipi di cookie per vari scopi. In particolare, utilizziamo:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie tecnici</h3>
          <p className="text-lg mb-6">
            Questi cookie sono necessari per il funzionamento del sito e non possono essere disattivati nei nostri
            sistemi. Vengono solitamente impostati solo in risposta ad azioni da lei effettuate che costituiscono una
            richiesta di servizi, come l'impostazione delle preferenze di privacy, l'accesso o la compilazione di
            moduli. Può impostare il suo browser per bloccare o avere avvisi riguardo questi cookie, ma alcune parti del
            sito potrebbero non funzionare correttamente.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie analitici</h3>
          <p className="text-lg mb-6">
            Questi cookie ci permettono di contare le visite e le fonti di traffico in modo da poter misurare e
            migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali pagine sono le più e le meno popolari e
            vedere come i visitatori si muovono nel sito. Tutte le informazioni raccolte da questi cookie sono aggregate
            e quindi anonime.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie di terze parti</h3>
          <p className="text-lg mb-6">
            Il nostro sito potrebbe utilizzare servizi di terze parti, come Google Analytics, che potrebbero impostare
            cookie sul suo dispositivo. Non abbiamo il controllo diretto sui cookie impostati da questi servizi. La
            invitiamo a consultare i rispettivi siti web per ulteriori informazioni sui loro cookie e su come gestirli.
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
            <a href="/contacts" className="text-primary hover:underline">
              Contatti
            </a>{" "}
            del nostro sito.
          </p>

          <p className="text-lg mt-10 text-gray-600">Ultimo aggiornamento: 10 Aprile 2025</p>
        </div>
      </div>
    </div>
  )
}
