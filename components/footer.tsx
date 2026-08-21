import { MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-4 md:px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className="flex items-start justify-center md:justify-start gap-2">
            <img
              src="/images/logo-footer.png"
              alt="Logo Dott. Maico Battistello"
              className="h-14 w-14 object-contain flex-shrink-0"
            />

            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Dott. Maico Battistello
              </h3>

              <p className="text-base text-primary leading-snug">
                Medico Chirurgo · Medico Legale
                <br />
                Osteopata · Ozonoterapeuta
              </p>

           <p className="text-base text-gray-600 mt-2 leading-snug">
  Marostica · Schio · Malo · Padova
</p>

          <div className="text-center">
            <h3 className="text-base font-semibold text-primary mb-4">
              Aree di attività
            </h3>

            <div className="flex flex-col gap-2 text-base text-gray-700">
              <a
                href="/ozonoterapia"
                className="hover:text-blue-600 transition-colors"
              >
                Ozonoterapia
              </a>

              <a
                href="/osteopatia"
                className="hover:text-blue-600 transition-colors"
              >
                Osteopatia
              </a>

              <a
                href="/medicina-legale"
                className="hover:text-blue-600 transition-colors"
              >
                Medicina Legale
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-base font-semibold text-primary mb-4">
              Informazioni
            </h3>

            <div className="flex flex-col gap-2 text-base text-gray-700">
              <a
                href="/privacy-policy"
                className="hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="/cookie-policy"
                className="hover:text-blue-600 transition-colors"
              >
                Cookie Policy
              </a>

              <a
                href="https://www.facebook.com/maicobattistello"
                className="inline-flex items-center justify-center md:justify-end gap-2 font-medium text-primary hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877F2] text-sm font-bold text-white">
                  f
                </span>
                <span>Seguimi su Facebook</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            © 2026 Dott. Maico Battistello. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
