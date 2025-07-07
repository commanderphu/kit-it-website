"use server"

import { z } from "zod"
import { sendContactEmail } from "./email"

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Bitte wählen Sie einen Service aus"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    company?: string[]
    service?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Bitte überprüfen Sie Ihre Eingaben.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, phone, company, service, message } = validatedFields.data

  try {
    // Send emails
    await sendContactEmail({
      name,
      email,
      phone,
      company,
      service,
      message,
    })

    // Log for debugging (remove in production)
    console.log("Kontaktanfrage erfolgreich versendet:", {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    return {
      success: true,
      message: `Vielen Dank, ${name}! Ihre Anfrage wurde erfolgreich übermittelt. Sie erhalten in Kürze eine Bestätigungs-E-Mail und wir melden uns innerhalb von 24 Stunden bei Ihnen.`,
    }
  } catch (error) {
    console.error("Fehler beim Senden der E-Mails:", error)

    // Check if it's an email configuration error
    if (error instanceof Error && error.message.includes("SMTP")) {
      return {
        success: false,
        message: "E-Mail-Konfigurationsfehler. Bitte kontaktieren Sie uns direkt per E-Mail oder Telefon.",
      }
    }

    return {
      success: false,
      message:
        "Es ist ein Fehler beim Versenden aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail: info@kit-it-koblenz.de",
    }
  }
}
