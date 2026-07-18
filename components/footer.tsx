export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container px-4 md:px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Dott. Maico Battistello
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Medico Chirurgo · Medico Legale · Osteopata · Ozonoterapeuta
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Marostica · Schio · Malo · Padova
            </p>
          </div>

          <div className="md:text-center">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Aree di attività
            </h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-600">
              <a
                href="/ozonoterapia"
                className="footer-link hover:text-blue-500 transition-colors"
              >
                Ozonoterapia
              </a>
              <a
                href="/osteopatia"
                className="footer-link hover:text-blue-500 transition-colors"
              >
                Osteopatia
              </a>
              <a
                href="/medicina-legale"
                className="footer-link hover:text-blue-500 transition-colors"
              >
                Medicina Legale
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Informazioni
            </h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-sm text-gray-600">
              <a
                href="/privacy-policy"
                className="footer-link hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="/cookie-policy"
                className="footer-link hover:text-blue-500 transition-colors"
              >
                Cookie Policy
              </a>

              <a
                href="https://www.facebook.com/maicobattistello"
                className="footer-link hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            © 2026 Dott. Maico Battistello. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
