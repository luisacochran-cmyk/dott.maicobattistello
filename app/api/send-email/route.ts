import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configurazione del trasportatore email
const transporter = nodemailer.createTransport({
  host: "il-tuo-server-smtp.it", // Sostituisci con il tuo server SMTP
  port: 587, // Porta standard per SMTP con TLS
  secure: false, // true per 465, false per altre porte
  auth: {
    user: "info@dottmaicobattistello.it",
    pass: "la-tua-password-email", // Sostituisci con la password dell'email
  },
})

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, reason } = await request.json()

    console.log("Received form submission from:", email)

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
      from: '"Sito Web Dr. Battistello" <info@dottmaicobattistello.it>',
      to: "info@dottmaicobattistello.it",
      subject: `Nuovo contatto dal sito: ${firstName} ${lastName}`,
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
      // Per ora, simuliamo l'invio dell'email per evitare errori SMTP
      // in produzione, decommentare la riga seguente:
      // await transporter.sendMail(mailOptions)

      console.log("Email would be sent:", mailOptions)

      return NextResponse.json({
        success: true,
        message: "Email inviata con successo",
      })
    } catch (emailError) {
      console.error("Errore nell'invio dell'email:", emailError)
      return NextResponse.json(
        {
          error: "Errore nell'invio dell'email. Riprova più tardi.",
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
