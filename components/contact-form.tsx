"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Phone, MessageSquare, Calendar, CheckCircle, AlertCircle, Mail, Loader2 } from "lucide-react"
import LocationList from "@/components/location-list"
import AnimatedScrollElement from "@/components/animated-scroll-element"
import AnimatedLink from "@/components/animated-link"

export default function ContactForm() {
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

    // Validazione Nome
    if (!formData.firstName.trim()) {
      errors.firstName = "Il nome è obbligatorio"
      isValid = false
    }

    // Validazione Cognome
    if (!formData.lastName.trim()) {
      errors.lastName = "Il cognome è obbligatorio"
      isValid = false
    }

    // Validazione Email
    if (!formData.email.trim()) {
      errors.email = "L'email è obbligatoria"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Inserisci un indirizzo email valido"
      isValid = false
    }

    // Validazione Telefono
    if (!formData.phone.trim()) {
      errors.phone = "Il numero di telefono è obbligatorio"
      isValid = false
    }

    // Validazione Motivo
    if (!formData.reason.trim()) {
      errors.reason = "Il motivo è obbligatorio"
      isValid = false
    }

    setFormErrors(errors)

    // Attiva l'animazione di errore se ci sono errori
    if (!isValid) {
      setAnimateError(true)
    }

    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)

    // Validate privacy consent
    if (!formData.privacyConsent) {
      setCheckboxError(true)
      // Trigger shake animation
      const checkbox = document.getElementById("privacy-checkbox-container")
      checkbox?.classList.add("animate-shake")
      setTimeout(() => {
        checkbox?.classList.remove("animate-shake")
      }, 500)
      return
    }

    // Validate all required fields
    const isValid = validateForm()
    if (!isValid) {
      // Trova il primo campo con errore
      const firstErrorField = Object.keys(formErrors).find((key) => formErrors[key as keyof typeof formErrors])

      if (firstErrorField) {
        // Imposta l'animazione per il campo con errore
        setFieldAnimation(firstErrorField)

        // Focus sul primo campo con errore
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

      // Attiva l'animazione di successo
      setAnimateSuccess(true)

      // Mostra messaggio di successo con un leggero ritardo per l'animazione
      setTimeout(() => {
        setSubmitStatus({
          success: true,
          message: "Il tuo messaggio è stato inviato con successo! Ti contatteremo al più presto.",
        })
      }, 300)

      // Reset form
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

      // Attiva l'animazione di errore
      setAnimateError(true)

      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "Invio del messaggio fallito. Per favore riprova più tardi.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Funzione per personalizzare i messaggi di errore
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

  // Funzione per resettare il messaggio di errore personalizzato
  const resetCustomValidity = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.setCustomValidity("")
  }

  return (
    <div className="bg-white py-12">
      <div className="container">
        <AnimatedScrollElement direction="up" delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Prenota il Tuo Appuntamento Ora</h2>
        </AnimatedScrollElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedScrollElement direction="left" delay={0.2}>
            <div>
              <div className="flex flex-col space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Telefono</h3>
                    <a href="tel:+393487383372" className="text-primary hover:underline text-lg">
                      +39 348 738 3372
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">WhatsApp</h3>
                    <a
                      href="https://wa.me/393487383372"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-lg"
                    >
                      Invia un messaggio
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:info@dottmaicobattistello.it"
                      className="text-primary hover:underline text-lg group inline-flex items-center"
                      rel="noopener"
                      aria-label="Invia email a info@dottmaicobattistello.it"
                    >
                      info@dottmaicobattistello.it
                    </a>
                  </div>
                </div>
              </div>
              <div className="pl-0">
                <LocationList />
              </div>
            </div>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="right" delay={0.3}>
            {submitStatus && submitStatus.success ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center justify-center h-full success-message">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4 success-check" />
                <h3 className="text-xl font-semibold text-green-800 mb-2 animate-fade-in">Messaggio Inviato!</h3>
                <p className="text-center text-green-700 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  {submitStatus.message}
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors animate-fade-in hover-lift"
                  style={{ animationDelay: "0.4s" }}
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`space-y-6 ${animateError ? "animate-shake" : ""}`}>
                {submitStatus && !submitStatus.success && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-start animate-slide-in-right">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700">{submitStatus.message}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onInvalid={setCustomValidity}
                      onFocus={resetCustomValidity}
                      className={`w-full px-4 py-2 border transition-all duration-300 ${
                        formErrors.firstName ? "border-red-500" : "border-gray-300"
                      } ${fieldAnimation === "firstName" ? "input-error" : ""} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{formErrors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onInvalid={setCustomValidity}
                      onFocus={resetCustomValidity}
                      className={`w-full px-4 py-2 border transition-all duration-300 ${
                        formErrors.lastName ? "border-red-500" : "border-gray-300"
                      } ${fieldAnimation === "lastName" ? "input-error" : ""} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{formErrors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onInvalid={setCustomValidity}
                      onFocus={resetCustomValidity}
                      className={`w-full px-4 py-2 border transition-all duration-300 ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      } ${fieldAnimation === "email" ? "input-error" : ""} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{formErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Numero di Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onInvalid={setCustomValidity}
                      onFocus={resetCustomValidity}
                      className={`w-full px-4 py-2 border transition-all duration-300 ${
                        formErrors.phone ? "border-red-500" : "border-gray-300"
                      } ${fieldAnimation === "phone" ? "input-error" : ""} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                    Motivo *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    onInvalid={setCustomValidity}
                    onFocus={resetCustomValidity}
                    rows={4}
                    className={`w-full px-4 py-2 border transition-all duration-300 ${
                      formErrors.reason ? "border-red-500" : "border-gray-300"
                    } ${fieldAnimation === "reason" ? "input-error" : ""} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
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
                      <label htmlFor="privacyConsent" className="flex items-center cursor-pointer">
                        <div className="relative flex items-center justify-center">
                          <div
                            className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ease-out 
                              ${formData.privacyConsent ? "border-primary bg-primary scale-90" : "border-gray-300 hover:border-primary hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"} 
                              group-hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]`}
                          >
                            <svg
                              className={`w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 
                                ${formData.privacyConsent ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
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
                            className={`absolute w-10 h-10 rounded-full bg-primary/10 transform scale-0 transition-transform duration-300 
                              ${formData.privacyConsent ? "animate-ripple" : ""}`}
                          ></div>
                        </div>
                        <span className="text-lg text-gray-700 ml-2">
                          Ho letto la{" "}
                          <AnimatedLink href="/privacy-policy" className="text-primary">
                            Privacy Policy
                          </AnimatedLink>{" "}
                          e acconsento al trattamento dei dati in conformità al Regolamento GDPR n. 679/2016.
                        </span>
                      </label>
                    </div>
                  </div>
                  {checkboxError && (
                    <p className="text-red-500 text-sm mt-1 ml-8 animate-fade-in">
                      Per favore accetta la privacy policy per continuare
                    </p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary px-8 py-3 text-lg flex items-center justify-center gap-2 mx-auto hover-lift transition-all duration-300 ${
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
                        <span>Prenota Appuntamento</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatedScrollElement>
        </div>
      </div>
    </div>
  )
}
