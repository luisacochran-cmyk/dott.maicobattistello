"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Phone, MessageSquare, Calendar, CheckCircle, AlertCircle, Mail, Loader2 } from "lucide-react"
import LocationList from "@/components/location-list"
import AnimatedLink from "@/components/animated-link"

const canali = [
  {
    icona: Phone,
    etichetta: "Telefono",
    testo: "+39 348 738 3372",
    href: "tel:+393487383372",
    esterno: false,
  },
  {
    icona: MessageSquare,
    etichetta: "WhatsApp",
    testo: "Scrivi un messaggio",
    href: "https://wa.me/393487383372",
    esterno: true,
  },
  {
    icona: Mail,
    etichetta: "Email",
    testo: "maico.battistello@gmail.com",
    href: "mailto:maico.battistello@gmail.com",
    esterno: false,
  },
]

const stileCampo = (errore: boolean, animato: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-base text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0066CC]/30 focus:border-[#0066CC] ${
    errore ? "border-red-500" : "border-slate-300"
  } ${animato ? "input-error" : ""}`

export default function ContactForm({ comePagina = false }: { comePagina?: boolean }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    privacyConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [checkboxError, setCheckboxError] = useState(false)
  const [formErrors, setFormErrors] = useState<{
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    reason?: string
  }>({})
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)
  const [animateSuccess, setAnimateSuccess] = useState(false)
  const [animateError, setAnimateError] = useState(false)
  const [fieldAnimation, setFieldAnimation] = useState<string | null>(null)

  // Resetta l'animazione di errore dopo un breve periodo
  useEffect(() => {
    if (animateError) {
      const timer = setTimeout(() => {
        setAnimateError(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [animateError])

  // Resetta l'animazione del campo dopo un breve periodo
  useEffect(() => {
    if (fieldAnimation) {
      const timer = setTimeout(() => {
        setFieldAnimation(null)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [fieldAnimation])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Rimuovi l'errore quando l'utente inizia a digitare
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      })
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData({
      ...formData,
      [name]: checked,
    })
    setCheckboxError(false)
  }

  const validateForm = () => {
    const errors: {
      firstName?: string
      lastName?: string
      email?: string
      phone?: string
      reason?: string
    } = {}
    let isValid = true

    if (!formData.firstName.trim()) {
      errors.firstName = "Il nome è obbligatorio"
      isValid = false
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Il cognome è obbligatorio"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "L'email è obbligatoria"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Inserisci un indirizzo email valido"
      isValid = false
    }

    if (!formData.phone.trim()) {
      errors.phone = "Il numero di telefono è obbligatorio"
      isValid = false
    }

    if (!formData.reason.trim()) {
      errors.reason = "Il motivo è obbligatorio"
      isValid = false
    }

    setFormErrors(errors)

    if (!isValid) {
      setAnimateError(true)
    }

    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)

    // Controllo consenso privacy
    if (!formData.privacyConsent) {
      setCheckboxError(true)
      const checkbox = document.getElementById("privacy-checkbox-container")
      checkbox?.classList.add("animate-shake")
      setTimeout(() => {
        checkbox?.classList.remove("animate-shake")
      }, 500)
      return
    }

    // Controllo campi obbligatori
    const isValid = validateForm()
    if (!isValid) {
      const firstErrorField = Object.keys(formErrors).find((key) => formErrors[key as keyof typeof formErrors])

      if (firstErrorField) {
        setFieldAnimation(firstErrorField)
        const element = document.getElementById(firstErrorField)
        element?.focus()
      }
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          reason: formData.reason,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Invio email fallito")
      }

      setAnimateSuccess(true)

      setTimeout(() => {
        setSubmitStatus({
          success: true,
          message: "Il tuo messaggio è stato inviato con successo! Ti contatteremo al più presto.",
        })
      }, 300)

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        reason: "",
        privacyConsent: false,
      })
      setFormErrors({})
    } catch (error) {
      console.error("Error sending email:", error)

      setAnimateError(true)

      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "Invio del messaggio fallito. Per favore riprova più tardi.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Messaggi di errore personalizzati
  const setCustomValidity = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target

    if (target.validity.valueMissing) {
      target.setCustomValidity("Questo campo è obbligatorio")
    } else if (target.validity.typeMismatch) {
      if (target.type === "email") {
        target.setCustomValidity("Inserisci un indirizzo email valido")
      } else {
        target.setCustomValidity("Il formato inserito non è valido")
      }
    } else if (target.validity.patternMismatch) {
      target.setCustomValidity("Il formato inserito non è corretto")
    } else {
      target.setCustomValidity("")
    }
  }

  const resetCustomValidity = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.setCustomValidity("")
  }

  // Nella pagina Contatti il titolo è l'H1 "Prenota una visita".
  // Nelle altre pagine è un H2 diverso, per non ripetere l'invito che c'è appena sopra.
  const Titolo = comePagina ? "h1" : "h2"
  const testoTitolo = comePagina ? "Prenota una visita" : "Recapiti e sedi"
  const etichettaCampo = "block text-sm font-semibold text-slate-700 mb-2"

  return (
    <section
      id="contatti"
      className="bg-[linear-gradient(to_bottom,#FFFFFF_0%,#F8F5F0_35%,#F8F5F0_70%,#FFFFFF_100%)] py-14 md:py-20"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Intestazione */}
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">Contatti</p>
          <Titolo className="text-[2.25rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
            {testoTitolo}<span className="text-[#0066CC]">.</span>
          </Titolo>
          <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-6" aria-hidden="true" />
          <p className="text-lg md:text-xl leading-relaxed text-slate-600">
            Chiama, scrivi su WhatsApp o compila il modulo: verrai ricontattato per fissare
            l&apos;appuntamento nella sede più comoda per te.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contatti rapidi */}
          <div className="lg:col-start-1">
            <ul className="divide-y divide-[#E7E0D7] rounded-[1.5rem] bg-white ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-50px_rgba(20,45,75,0.45)]">
              {canali.map((canale) => {
                const Icona = canale.icona
                return (
                  <li key={canale.etichetta}>
                    <a
                      href={canale.href}
                      {...(canale.esterno ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-[#F2F7FD] first:rounded-t-[1.5rem]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0066CC]/10 text-[#0066CC]">
                        <Icona className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {canale.etichetta}
                        </span>
                        <span className="block break-words text-lg font-semibold text-slate-900 group-hover:text-[#0066CC] transition-colors">
                          {canale.testo}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
              <li>
                <a
                  href="https://www.facebook.com/maicobattistello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-[#F2F7FD] rounded-b-[1.5rem]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0066CC]/10 text-xl font-bold text-[#0066CC]">
                    f
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Facebook
                    </span>
                    <span className="block text-lg font-semibold text-slate-900 group-hover:text-[#0066CC] transition-colors">
                      Segui la pagina
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Modulo */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="lg:sticky lg:top-28 rounded-[2rem] bg-white p-6 md:p-8 ring-1 ring-[#E7E0D7] shadow-[0_24px_70px_-45px_rgba(20,45,75,0.5)]">
              {submitStatus && submitStatus.success ? (
                <div className="flex flex-col items-center justify-center py-10 text-center success-message">
                  <CheckCircle className="h-16 w-16 text-[#0066CC] mb-4 success-check" />
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2 animate-fade-in">Messaggio inviato</h3>
                  <p className="text-lg text-slate-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    {submitStatus.message}
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="mt-8 inline-flex h-12 items-center rounded-full border border-[#0066CC]/30 px-6 font-semibold text-[#0066CC] transition-colors hover:bg-[#F2F7FD] animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={`space-y-5 ${animateError ? "animate-shake" : ""}`}>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                    Scrivi al Dott. Battistello
                  </h3>

                  {submitStatus && !submitStatus.success && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-4 flex items-start animate-slide-in-right">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700">{submitStatus.message}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className={etichettaCampo}>
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        onInvalid={setCustomValidity}
                        onFocus={resetCustomValidity}
                        className={stileCampo(!!formErrors.firstName, fieldAnimation === "firstName")}
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1 animate-fade-in">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className={etichettaCampo}>
                        Cognome *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        onInvalid={setCustomValidity}
                        onFocus={resetCustomValidity}
                        className={stileCampo(!!formErrors.lastName, fieldAnimation === "lastName")}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1 animate-fade-in">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className={etichettaCampo}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onInvalid={setCustomValidity}
                        onFocus={resetCustomValidity}
                        className={stileCampo(!!formErrors.email, fieldAnimation === "email")}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1 animate-fade-in">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className={etichettaCampo}>
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onInvalid={setCustomValidity}
                        onFocus={resetCustomValidity}
                        className={stileCampo(!!formErrors.phone, fieldAnimation === "phone")}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1 animate-fade-in">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className={etichettaCampo}>
                      Motivo della richiesta *
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      onInvalid={setCustomValidity}
                      onFocus={resetCustomValidity}
                      rows={4}
                      placeholder="Per esempio: dolore lombare da alcune settimane, preferirei la sede di Schio."
                      className={stileCampo(!!formErrors.reason, fieldAnimation === "reason")}
                    />
                    {formErrors.reason && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{formErrors.reason}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-start">
                      <div id="privacy-checkbox-container" className={`relative ${checkboxError ? "animate-shake" : ""}`}>
                        <input
                          type="checkbox"
                          id="privacyConsent"
                          name="privacyConsent"
                          checked={formData.privacyConsent}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        <label htmlFor="privacyConsent" className="flex items-start cursor-pointer">
                          <div className="relative mt-0.5 flex shrink-0 items-center justify-center">
                            <div
                              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ease-out ${
                                formData.privacyConsent
                                  ? "border-[#0066CC] bg-[#0066CC] scale-90"
                                  : "border-slate-300 hover:border-[#0066CC]"
                              }`}
                            >
                              <svg
                                className={`w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                                  formData.privacyConsent ? "scale-100 opacity-100" : "scale-0 opacity-0"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                  className={`${formData.privacyConsent ? "animate-draw-check" : ""}`}
                                />
                              </svg>
                            </div>
                            <div
                              className={`absolute w-10 h-10 rounded-full bg-[#0066CC]/10 transform scale-0 transition-transform duration-300 ${
                                formData.privacyConsent ? "animate-ripple" : ""
                              }`}
                            ></div>
                          </div>
                          <span className="text-base leading-relaxed text-slate-600 ml-3">
                            Ho letto la{" "}
                            <AnimatedLink href="/privacy-policy" className="text-[#0066CC]">
                              Privacy Policy
                            </AnimatedLink>{" "}
                            e acconsento al trattamento dei dati in conformità al Regolamento GDPR n. 679/2016.
                          </span>
                        </label>
                      </div>
                    </div>
                    {checkboxError && (
                      <p className="text-red-500 text-sm mt-1 ml-9 animate-fade-in">
                        Per favore accetta la privacy policy per continuare
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0066CC] px-8 text-base sm:text-lg font-semibold text-white shadow-lg transition-colors hover:bg-[#0057AD] ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    } ${animateSuccess ? "button-success" : ""}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Invio in corso...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5" />
                        <span>Richiedi appuntamento</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sedi */}
          <div className="lg:col-start-1">
            <LocationList />
          </div>
        </div>
      </div>
    </section>
  )
}
