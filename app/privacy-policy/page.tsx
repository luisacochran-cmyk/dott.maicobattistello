import Breadcrumb from "@/components/breadcrumb"

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="text-lg mb-6">
            La presente Privacy Policy descrive le modalità di raccolta, utilizzo e protezione dei dati personali degli
            utenti che visitano il sito web del Dr. Maico Battistello. La preghiamo di leggere attentamente questa
            policy per comprendere come trattiamo i suoi dati personali.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Titolare del trattamento</h2>
          <p className="text-lg mb-6">
            Il titolare del trattamento dei dati personali è il Dr. Maico Battistello, con sede professionale a Padova
            (PD). Per qualsiasi informazione relativa alla presente Privacy Policy, può contattarci tramite i recapiti
            disponibili nella sezione{" "}
            <a href="/contacts" className="text-primary hover:underline">
              Contatti
            </a>{" "}
            del nostro sito.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Dati personali raccolti</h2>
          <p className="text-lg mb-6">
            Raccogliamo i seguenti tipi di dati personali quando utilizza il nostro sito web:
          </p>

          <ul className="list-disc pl-6 text-lg mb-6">
            <li className="mb-2">
              <strong>Dati di navigazione:</strong> I sistemi informatici e le procedure software preposte al
              funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali
              la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di
              informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa
              natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di
              identificare gli utenti.
            </li>
            <li className="mb-2">
              <strong>Dati forniti volontariamente:</strong> L'invio facoltativo, esplicito e volontario di dati
              personali attraverso i moduli di contatto presenti sul sito comporta la successiva acquisizione
              dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati
              personali inseriti nella comunicazione.
            </li>
            <li className="mb-2">
              <strong>Cookie:</strong> Il nostro sito utilizza cookie tecnici e analitici. Per maggiori informazioni sui
              cookie utilizzati, consulti la nostra{" "}
              <a href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </a>
              .
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Finalità del trattamento</h2>
          <p className="text-lg mb-6">I dati personali raccolti vengono utilizzati per le seguenti finalità:</p>

          <ul className="list-disc pl-6 text-lg mb-6">
            <li className="mb-2">Fornire i servizi richiesti e gestire le richieste di informazioni;</li>
            <li className="mb-2">Migliorare la navigazione sul sito web;</li>
            <li className="mb-2">Adempiere ad obblighi di legge;</li>
            <li className="mb-2">
              Previo consenso, inviare comunicazioni informative e promozionali relative ai servizi offerti.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Base giuridica del trattamento</h2>
          <p className="text-lg mb-6">Il trattamento dei suoi dati personali si basa sulle seguenti basi giuridiche:</p>

          <ul className="list-disc pl-6 text-lg mb-6">
            <li className="mb-2">
              L'esecuzione di un contratto di cui lei è parte o l'esecuzione di misure precontrattuali adottate su sua
              richiesta;
            </li>
            <li className="mb-2">Il legittimo interesse del titolare del trattamento;</li>
            <li className="mb-2">L'adempimento di obblighi legali ai quali è soggetto il titolare del trattamento;</li>
            <li className="mb-2">Il consenso da lei fornito per specifiche finalità.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Modalità del trattamento</h2>
          <p className="text-lg mb-6">
            I suoi dati personali vengono trattati con strumenti automatizzati per il tempo strettamente necessario a
            conseguire gli scopi per cui sono stati raccolti. Specifiche misure di sicurezza sono osservate per
            prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Periodo di conservazione dei dati</h2>
          <p className="text-lg mb-6">
            I dati personali sono conservati per il tempo necessario al conseguimento delle finalità per cui sono stati
            raccolti o per qualsiasi altra legittima finalità collegata. I dati personali che non siano più necessari, o
            per i quali non vi sia più un presupposto giuridico per la relativa conservazione, vengono anonimizzati
            irreversibilmente o distrutti in modo sicuro.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Destinatari dei dati</h2>
          <p className="text-lg mb-6">
            I suoi dati personali potranno essere condivisi, per le finalità specificate nella presente Privacy Policy,
            con:
          </p>

          <ul className="list-disc pl-6 text-lg mb-6">
            <li className="mb-2">
              Soggetti che agiscono tipicamente in qualità di responsabili del trattamento (ad esempio, fornitori di
              servizi informatici);
            </li>
            <li className="mb-2">
              Persone autorizzate dal titolare al trattamento di dati personali che si sono impegnate alla riservatezza
              o abbiano un adeguato obbligo legale di riservatezza;
            </li>
            <li className="mb-2">
              Autorità giurisdizionali o amministrative, per l'adempimento degli obblighi di legge.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Trasferimento dei dati all'estero</h2>
          <p className="text-lg mb-6">
            I suoi dati personali non saranno trasferiti a Paesi terzi al di fuori dell'Unione Europea.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Diritti dell'interessato</h2>
          <p className="text-lg mb-6">
            In qualità di interessato, lei ha il diritto di chiedere al titolare del trattamento:
          </p>

          <ul className="list-disc pl-6 text-lg mb-6">
            <li className="mb-2">L'accesso ai suoi dati personali;</li>
            <li className="mb-2">La rettifica dei dati inesatti o l'integrazione di quelli incompleti;</li>
            <li className="mb-2">
              La cancellazione dei dati personali che la riguardano (al verificarsi di una delle condizioni indicate
              nell'art. 17, paragrafo 1 del GDPR e nel rispetto delle eccezioni previste nel paragrafo 3 dello stesso
              articolo);
            </li>
            <li className="mb-2">La limitazione del trattamento dei suoi dati personali;</li>
            <li className="mb-2">
              La portabilità dei dati (ricevere i dati personali in un formato strutturato, di uso comune e leggibile da
              dispositivo automatico);
            </li>
            <li className="mb-2">
              L'opposizione in qualsiasi momento al trattamento dei suoi dati personali al ricorrere di situazioni
              particolari che la riguardano.
            </li>
          </ul>

          <p className="text-lg mb-6">
            Può esercitare i suoi diritti con richiesta scritta inviata al titolare del trattamento, agli indirizzi di
            contatto indicati nella presente Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Diritto di reclamo</h2>
          <p className="text-lg mb-6">
            Se ritiene che il trattamento dei suoi dati personali avvenga in violazione di quanto previsto dal GDPR, ha
            il diritto di proporre reclamo a un'autorità di controllo (Garante per la protezione dei dati personali o
            altra autorità competente).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Modifiche alla Privacy Policy</h2>
          <p className="text-lg mb-6">
            Il titolare del trattamento si riserva il diritto di modificare, aggiornare, aggiungere o rimuovere parti
            della presente Privacy Policy in qualsiasi momento. La invitiamo a verificare periodicamente le eventuali
            modifiche. Al fine di facilitare tale verifica, la Privacy Policy contiene l'indicazione della data di
            aggiornamento.
          </p>

          <p className="text-lg mt-10 text-gray-600">Ultimo aggiornamento: 10 Aprile 2025</p>
        </div>
      </div>
    </div>
  )
}
