"use client"

import { useEffect, useState } from "react"
import { corsivo } from "@/lib/fonts"

/* ------------------------------------------------------------------
   "La catena": i punti del corpo collegati tra loro.
   Scorre da sola un punto alla volta; si può anche toccare un punto.
------------------------------------------------------------------- */

const PUNTI = [
  { nome: "Collo", testo: "Le tensioni del collo si riflettono su spalle, testa e parte alta della schiena." },
  { nome: "Spalla", testo: "Una spalla che si muove poco costringe il collo e la schiena a compensare." },
  { nome: "Schiena", testo: "La colonna collega tutto: una zona rigida sposta il carico su quelle vicine." },
  { nome: "Bacino", testo: "Bacino e anche distribuiscono il peso verso le gambe, a ogni passo." },
  { nome: "Ginocchio", testo: "Spesso è l'ultimo anello: compensa ciò che sopra o sotto lavora male." },
  { nome: "Piede", testo: "L'appoggio del piede cambia il modo in cui il peso scarica su caviglia e ginocchio." },
]

export default function CatenaDolore() {
  const [attivo, setAttivo] = useState(0)
  const [pausa, setPausa] = useState(false)

  useEffect(() => {
    if (pausa) return
    const ridotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (ridotto) return
    const t = setInterval(() => setAttivo((a) => (a + 1) % PUNTI.length), 3200)
    return () => clearInterval(t)
  }, [pausa])

  const scegli = (i: number) => {
    setAttivo(i)
    setPausa(true)
  }

  return (
    <div className="mt-8 rounded-[2rem] bg-[radial-gradient(120%_140%_at_0%_0%,#E3EEFA_0%,#F1F6FC_55%,#FAFCFE_100%)] p-6 md:p-7">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">La catena</p>

      <div className="grid grid-cols-[auto_1fr] gap-x-5">
        {/* Linea con i punti */}
        <ol className="relative" aria-label="Punti della catena del dolore">
          <span aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-px bg-[#C9DDF2]" />
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 w-px bg-[#0066CC] transition-[height] duration-700 ease-out"
            style={{ height: `calc(${(attivo / (PUNTI.length - 1)) * 100}% - 1rem)` }}
          />
          {PUNTI.map((p, i) => (
            <li key={p.nome} className="relative">
              <button
                type="button"
                onClick={() => scegli(i)}
                aria-pressed={attivo === i}
                className="group flex items-center gap-3 py-1.5 text-left"
              >
                <span
                  className={`relative z-10 h-[15px] w-[15px] rounded-full border-2 transition-all duration-500 ${
                    i <= attivo ? "border-[#0066CC] bg-[#0066CC]" : "border-[#B7CDE6] bg-white"
                  } ${attivo === i ? "ring-4 ring-[#0066CC]/15" : ""}`}
                />
                <span
                  className={`text-[0.95rem] transition-colors ${
                    attivo === i ? "font-semibold text-slate-900" : "text-slate-500 group-hover:text-slate-800"
                  }`}
                >
                  {p.nome}
                </span>
              </button>
            </li>
          ))}
        </ol>

        {/* Spiegazione del punto attivo */}
        <div className="flex items-center" aria-live="polite">
          <p
            key={attivo}
            className={`${corsivo.className} animate-[catenaIn_0.6s_ease-out] text-[1.15rem] italic leading-snug text-[#1D4E89] md:text-[1.25rem]`}
          >
            {PUNTI[attivo].testo}
          </p>
        </div>
      </div>

      <style>{`@keyframes catenaIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </div>
  )
}
