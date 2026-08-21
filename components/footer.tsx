export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container px-4 py-10 md:py-12">

        {/* Identità */}
        <div className="text-center">
          <img
            src="/images/logo-footer.png"
            alt="Logo Dott. Maico Battistello"
          className="h-24 w-24 object-contain mx-auto mb-2"
          />

          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Dott. Maico Battistello
          </h3>

          <p className="text-lg text-primary leading-snug">
            Medico Chirurgo · Medico Legale
            <br />
            Osteopata · Ozonoterapeuta
          </p>

          <div className="w-12 h-0.5 bg-primary mx-auto my-4" />

          <p className="text-base text-gray-700">
            Marostica · Schio · Malo · Padova
          </p>
        </div>

        {/* Aree di attività */}
       <div className="border-t border-gray-200 mt-6 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

            <a
              href="/ozonoterapia"
              className="font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              Ozonoterapia
            </a>

            <a
              href="/osteopatia"
              className="font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              Osteopatia
            </a>

            <a
              href="/medicina-legale"
              className="font-semibold text-gray-900 hover:text-primary transition-colors"
            >
              Medicina Legale
            </a>

          </div>
        </div>

        {/* Informazioni */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 text-base text-gray-700">

          <a
            href="/privacy-policy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>

          <span className="hidden sm:inline text-gray-300">|</span>

          <a
            href="/cookie-policy"
            className="hover:text-primary transition-colors"
          >
            Cookie Policy
          </a>

          <span className="hidden sm:inline text-gray-300">|</span>

          <a
            href="https://www.facebook.com/maicobattistello"
            className="inline-flex items-center gap-2 font-medium text-primary hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877F2] text-sm font-bold text-white">
              f
            </span>
            <span>Seguimi su Facebook</span>
          </a>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-5 text-center">
          <p className="text-sm text-gray-600">
            © 2026 Dott. Maico Battistello. Tutti i diritti riservati.
          </p>
        </div>

      </div>
    </footer>
  )
}
