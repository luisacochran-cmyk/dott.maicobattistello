import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configurazione del trasportatore email per Gmail
const transporter = nodemailer.createTransport({
  // Corretto da createTransporter a createTransport
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  debug: true, // Abilita il debug
  logger: true, // Abilita il logging
})

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, reason } = await request.json()

    // Log delle variabili d'ambiente (senza mostrare la password completa)
    console.log("GMAIL_USER configurato:", !!process.env.GMAIL_USER, process.env.GMAIL_USER)
    console.log(
      "GMAIL_APP_PASSWORD configurato:",
      !!process.env.GMAIL_APP_PASSWORD,
      process.env.GMAIL_APP_PASSWORD ? `${process.env.GMAIL_APP_PASSWORD.substring(0, 3)}...` : null,
    )

    // Verifica che le credenziali email siano configurate
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("GMAIL_USER o GMAIL_APP_PASSWORD non configurate")
      return NextResponse.json(
        {
          error: "Configurazione email non completa. Contatta l'amministratore.",
        },
        { status: 500 },
      )
    }

    // Formatta la data corrente in formato italiano
    const now = new Date()
    const formattedDate = now.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    // Prepara il contenuto dell'email
    const mailOptions = {
      from: `"Sito Web Dr. Battistello" <${process.env.GMAIL_USER}>`, // Usa la variabile d'ambiente
      to: process.env.GMAIL_USER, // Usa la variabile d'ambiente
      subject: `Nuovo contatto dal sito: ${firstName} ${lastName}`,
      replyTo: email,
      text: `
        Nuovo messaggio ricevuto dal modulo di contatto del sito web.
        
        Data: ${formattedDate}
        
        DATI DEL CONTATTO:
        Nome: ${firstName} ${lastName}
        Email: ${email}
        Telefono: ${phone}
        
        MOTIVO DEL CONTATTO:
        ${reason}
        
        Questo messaggio è stato inviato automaticamente dal sito web.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #1e88e5; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Nuovo messaggio dal sito web</h2>
          
          <p style="color: #666; font-size: 14px;">Data: ${formattedDate}</p>
          
          <h3 style="margin-top: 20px; color: #333;">Dati del contatto:</h3>
          <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefono:</strong> ${phone}</p>
          
          <h3 style="margin-top: 20px; color: #333;">Motivo del contatto:</h3>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
            ${reason.replace(/\n/g, "<br>")}
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px;">
            Questo messaggio è stato inviato automaticamente dal sito web del Dr. Maico Battistello.
          </p>
        </div>
      `,
    }

    try {
      console.log("Tentativo di invio email a:", mailOptions.to)

      // Invio dell'email con gestione errori migliorata
      const info = await transporter.sendMail(mailOptions)

      console.log("Email inviata con successo:", info.response)
      console.log("Message ID:", info.messageId)

      return NextResponse.json({
        success: true,
        message: "Email inviata con successo",
      })
    } catch (emailError) {
      console.error("Errore nell'invio dell'email:", emailError)

      // Log dettagliato dell'errore
      if (emailError instanceof Error) {
        console.error("Dettagli errore:", emailError.message)
        console.error("Stack trace:", emailError.stack)
      }

      return NextResponse.json(
        {
          error: "Errore nell'invio dell'email. Riprova più tardi.",
          details: emailError instanceof Error ? emailError.message : "Errore sconosciuto",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      {
        error: "Errore nella richiesta. Riprova più tardi.",
      },
      { status: 500 },
    )
  }
}
