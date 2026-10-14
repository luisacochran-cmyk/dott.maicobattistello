
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#F1F5F8] text-[#233247]">
      {/* Transizione dalla sezione blu */}
      <div
        aria-hidden="true"
        className="h-28 md:h-40 bg-gradient-to-b from-[#0066CC] via-[#B8D7EF] to-[#F1F5F8]"
      />

      <div className="container mx-auto px-6 pb-8 pt-6 md:px-10 md:pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 border-b border-[#CBD9E5] pb-12 md:grid-cols-12 md:gap-8">

            {/* Identità essenziale */}
            <div className="md:col-span-5">
              <div className="mb-5 flex items-center gap-4">
                <img
                  src="/images/logo-footer.png"
                  alt="Logo Dott. Maico Battistello"
                  className="h-14 w-14 object-contain"
                />

                <div>
                  <p className="text-xl font-semibold tracking-tight text-[#17283C]">
                    Dott. Maico Battistello
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#627488]">
                    Medico Legale · Osteopata · Ozonoterapeuta
                  </p>
                </div>
              </div>

              <p className="max-w-sm text-base leading-relaxed text-[#526477]">
                Informazioni sui servizi, sulle sedi e sulle modalità
                per richiedere una visita.
              </p>

              <Link
                href="/contatti"
                className="mt-6 inline-flex items-center border-b border-[#0066CC]/40 pb-1 font-medium text-[#0066CC] transition-colors hover:text-[#004E9E]"
              >
                Sedi e contatti
              </Link>
            </div>

            {/* Navigazione */}
            <nav
              aria-label="Collegamenti ai servizi"
              className="md:col-span-4"
            >
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#17283C]">
                Esplora
              </h2>

              <div className="flex flex-col items-start gap-3 text-base text-[#526477]">
                <Link
                  href="/ozonoterapia"
                  className="transition-colors hover:text-[#0066CC]"
                >
                  Ozonoterapia
                </Link>

                <Link
                  href="/osteopatia"
                  className="transition-colors hover:text-[#0066CC]"
                >
                  Osteopatia
                </Link>

                <Link
                  href="/medicina-legale"
                  className="transition-colors hover:text-[#0066CC]"
                >
                  Medicina Legale
                </Link>

                <Link
                  href="/chi-sono"
                  className="transition-colors hover:text-[#0066CC]"
                >
                  Chi sono
                </Link>
              </div>
            </nav>

            {/* Collegamenti utili */}
            <nav
              aria-label="Informazioni e social"
              className="md:col-span-3"
            >
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#17283C]">
                Informazioni
              </h2>

              <div className="flex flex-col items-start gap-3 text-base text-[#526477]">
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-[#0066CC]"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/cookie-policy"
                  className="transition-colors hover:text-[#0066CC]"
                >
                  Cookie Policy
                </Link>

                <a
                  href="https://www.facebook.com/maicobattistello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#0066CC]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877F2] text-sm font-bold text-white">
                    f
                  </span>
                  Facebook
                </a>
              </div>
            </nav>
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-2 pt-6 text-sm text-[#627488] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Dott. Maico Battistello</p>
            <p>Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
