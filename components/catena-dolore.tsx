"use client"

import { useEffect, useState } from "react"
import { corsivo } from "@/lib/fonts"

/* ------------------------------------------------------------------
   "La catena": i punti del corpo collegati tra loro.
   Scende un punto alla volta dal Collo al Piede (catena discendente),
   poi dal Piede risale fino al Collo (catena ascendente).
   Si può anche toccare un punto.
------------------------------------------------------------------- */

const PUNTI = [
  { nome: "Collo", testo: "Le tensioni del collo si riflettono su spalle, testa, scapole e tratto dorso-lombare." },
  { nome: "Spalla", testo: "Una spalla che si muove poco costringe il collo e la schiena a compensare." },
  { nome: "Schiena", testo: "La colonna collega tutto: una zona rigida sposta il carico su quelle vicine." },
  { nome: "Bacino", testo: "Bacino e anche distribuiscono il peso verso le gambe, a ogni passo." },
  { nome: "Ginocchio", testo: "Spesso è l'ultimo anello: compensa ciò che sopra o sotto lavora male." },
  { nome: "Piede", testo: "L'appoggio del piede cambia il modo in cui il peso scarica su caviglia, ginocchio, bacino, schiena, spalla e collo." },
]

const ULTIMO = PUNTI.length - 1
const PASSO = 5500 // tempo su ogni punto in discesa
const ATTESA_RISALITA = 2500 // sul Piede, prima che parta la risalita
const PASSO_RISALITA = 700 // tempo di ogni punto in risalita
const SOSTA_FINALE = 2500 // pausa con la risalita completa

export default function CatenaDolore() {
  const [attivo, setAttivo] = useState(0)
  const [pausa, setPausa] = useState(false)
  // Indice raggiunto dall'onda di ritorno (dal Piede verso il Collo); null = nessuna risalita
  const [onda, setOnda] = useState<number | null>(null)

  // Discesa: un punto alla volta, dal Collo al Piede
  useEffect(() => {
    if (pausa || attivo === ULTIMO) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setTimeout(() => setAttivo((a) => a + 1), PASSO)
    return () => clearTimeout(t)
  }, [attivo, pausa])

  // Risalita: arrivati al Piede, l'onda torna su fino al Collo
  useEffect(() => {
    if (attivo !== ULTIMO) {
      setOnda(null)
      return
    }
    const ridotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (ridotto) {
      setOnda(0)
      return
    }
    const timers: ReturnType<typeof setTimeout>[] = []
    for (let k = 0; k <= ULTIMO; k++) {
      timers.push(setTimeout(() => setOnda(ULTIMO - k), ATTESA_RISALITA + k * PASSO_RISALITA))
    }
    if (!pausa) {
      timers.push(
        setTimeout(() => setAttivo(0), ATTESA_RISALITA + (ULTIMO + 1) * PASSO_RISALITA + SOSTA_FINALE)
      )
    }
    return () => timers.forEach(clearTimeout)
  }, [attivo, pausa])

  const scegli = (i: number) => {
    setAttivo(i)
    setPausa(true)
  }

  const risalita = onda !== null && onda < ULTIMO

  return (
    <div className="mt-8 rounded-[2rem] bg-[radial-gradient(120%_140%_at_0%_0%,#E3EEFA_0%,#F1F6FC_55%,#FAFCFE_100%)] p-6 md:p-7">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">La catena</p>
        <p
          key={risalita ? "su" : "giu"}
          className={`${corsivo.className} animate-[catenaIn_0.6s_ease-out] text-sm italic ${
            risalita ? "text-[#9A7A4E]" : "text-[#1D4E89]/70"
          }`}
        >
          {risalita ? "↑ e risale: catena ascendente" : "↓ catena discendente"}
        </p>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-5">
        {/* Linea con i punti */}
        <ol className="relative" aria-label="Punti della catena del dolore">
          <span aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-px bg-[#C9DDF2]" />
          {/* Discesa (blu, dall'alto) */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 w-px bg-[#0066CC] transition-[height] duration-700 ease-out"
            style={{ height: `calc(${(attivo / ULTIMO) * 100}% - 1rem)` }}
          />
          {/* Risalita (sabbia, dal basso) */}
          <span
            aria-hidden="true"
            className="absolute left-[6px] bottom-2 w-[3px] rounded-full bg-[#B8935F] transition-[height] duration-500 ease-out"
            style={{ height: onda === null ? 0 : `calc(${((ULTIMO - onda) / ULTIMO) * 100}% - 1rem)` }}
          />
          {PUNTI.map((p, i) => {
            const toccato = onda !== null && i >= onda && i < ULTIMO
            return (
              <li key={p.nome} className="relative">
                <button
                  type="button"
                  onClick={() => scegli(i)}
                  aria-pressed={attivo === i}
                  className="group flex items-center gap-3 py-1.5 text-left"
                >
                  <span
                    className={`relative z-10 h-[15px] w-[15px] rounded-full border-2 transition-all duration-500 ${
                      toccato
                        ? "border-[#B8935F] bg-[#B8935F]"
                        : i <= attivo
                          ? "border-[#0066CC] bg-[#0066CC]"
                          : "border-[#B7CDE6] bg-white"
                    } ${attivo === i ? "ring-4 ring-[#0066CC]/15" : ""} ${
                      onda === i && i < ULTIMO ? "ring-4 ring-[#B8935F]/25" : ""
                    }`}
                  />
                  <span
                    className={`text-[0.95rem] transition-colors ${
                      attivo === i || (onda === i && i < ULTIMO)
                        ? "font-semibold text-slate-900"
                        : "text-slate-500 group-hover:text-slate-800"
                    }`}
                  >
                    {p.nome}
                  </span>
                </button>
              </li>
            )
          })}
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
