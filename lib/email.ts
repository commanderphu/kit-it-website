import nodemailer from "nodemailer"

// Email configuration
const createTransporter = () => {
  // For production, use environment variables
  // For demo purposes, we'll use a test account
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your app password
    },
  })
}

export interface EmailData {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
}

// Discord Webhook function
export async function sendDiscordNotification(data: EmailData) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    console.warn("Discord Webhook URL nicht konfiguriert")
    return
  }

  const embed = {
    title: "🔔 Neue Kontaktanfrage",
    color: 0xff9100, // Corporate Gold
    fields: [
      {
        name: "👤 Name",
        value: data.name,
        inline: true,
      },
      {
        name: "📧 E-Mail",
        value: data.email,
        inline: true,
      },
      {
        name: "📞 Telefon",
        value: data.phone || "Nicht angegeben",
        inline: true,
      },
      {
        name: "🏢 Unternehmen",
        value: data.company || "Nicht angegeben",
        inline: true,
      },
      {
        name: "⚙️ Service",
        value: getServiceName(data.service),
        inline: true,
      },
      {
        name: "🕒 Zeitstempel",
        value: new Date().toLocaleString("de-DE"),
        inline: true,
      },
      {
        name: "💬 Nachricht",
        value: data.message.length > 1000 ? data.message.substring(0, 1000) + "..." : data.message,
        inline: false,
      },
    ],
    footer: {
      text: "K.I.T. Solutions • Kontaktformular",
      icon_url: "https://cdn.discordapp.com/emojis/1234567890123456789.png", // Optional: Ihr Logo
    },
    timestamp: new Date().toISOString(),
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "K.I.T. Solutions Bot",
        avatar_url: "https://cdn.discordapp.com/emojis/1234567890123456789.png", // Optional: Bot Avatar
        embeds: [embed],
      }),
    })

    if (!response.ok) {
      throw new Error(`Discord Webhook Error: ${response.status}`)
    }

    console.log("Discord Benachrichtigung erfolgreich gesendet")
  } catch (error) {
    console.error("Fehler beim Senden der Discord Benachrichtigung:", error)
    // Fehler nicht weiterwerfen, da Discord optional ist
  }
}

export async function sendContactEmail(data: EmailData) {
  const transporter = createTransporter()

  // Email to you (business owner)
  const businessEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%); color: white; padding: 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">K.I.T. Solutions</p>
      </div>
      
      <div style="padding: 30px; background: #f9fafb; border-left: 4px solid #374151;">
        <h2 style="color: #374151; margin-top: 0;">Kontaktdaten</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #6b7280;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">E-Mail:</td>
            <td style="padding: 8px 0; color: #6b7280;">
              <a href="mailto:${data.email}" style="color: #374151; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          ${
            data.phone
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Telefon:</td>
            <td style="padding: 8px 0; color: #6b7280;">${data.phone}</td>
          </tr>
          `
              : ""
          }
          ${
            data.company
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Unternehmen:</td>
            <td style="padding: 8px 0; color: #6b7280;">${data.company}</td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
            <td style="padding: 8px 0; color: #6b7280;">${getServiceName(data.service)}</td>
          </tr>
        </table>
      </div>
      
      <div style="padding: 30px; background: white;">
        <h3 style="color: #374151; margin-top: 0;">Nachricht</h3>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #374151;">
          <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
      
      <div style="padding: 20px; background: #374151; color: white; text-align: center; font-size: 14px;">
        <p style="margin: 0;">Diese E-Mail wurde automatisch über das Kontaktformular von kit-it-koblenz.de gesendet.</p>
        <p style="margin: 5px 0 0 0; opacity: 0.8;">Zeitstempel: ${new Date().toLocaleString("de-DE")}</p>
      </div>
    </div>
  `

  // Confirmation email to customer
  const customerEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%); color: white; padding: 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Vielen Dank für Ihre Anfrage!</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">K.I.T. Solutions</p>
      </div>
      
      <div style="padding: 30px; background: white;">
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">Hallo ${data.name},</p>
        
        <p style="color: #374151; line-height: 1.6;">
          vielen Dank für Ihre Kontaktanfrage bezüglich <strong>${getServiceName(data.service)}</strong>. 
          Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
        </p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Ihre Anfrage im Überblick:</h3>
          <p style="color: #6b7280; margin: 5px 0;"><strong>Service:</strong> ${getServiceName(data.service)}</p>
          <p style="color: #6b7280; margin: 5px 0;"><strong>E-Mail:</strong> ${data.email}</p>
          ${data.phone ? `<p style="color: #6b7280; margin: 5px 0;"><strong>Telefon:</strong> ${data.phone}</p>` : ""}
          ${data.company ? `<p style="color: #6b7280; margin: 5px 0;"><strong>Unternehmen:</strong> ${data.company}</p>` : ""}
        </div>
        
        <p style="color: #374151; line-height: 1.6;">
          Als frisch gegründetes Unternehmen legen wir großen Wert auf persönliche Betreuung. 
          Wir werden Ihre Anfrage sorgfältig prüfen und Ihnen eine maßgeschneiderte Lösung vorschlagen.
        </p>
        
        <div style="background: #374151; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin-top: 0; color: white;">Unsere Kontaktdaten:</h4>
          <p style="margin: 5px 0; opacity: 0.9;">📧 info@kit-it-koblenz.de</p>
          <p style="margin: 5px 0; opacity: 0.9;">📞 +49 162 265426</p>
          <p style="margin: 5px 0; opacity: 0.9;">📍 Dietzstr. 1, 56073 Koblenz</p>
        </div>
        
        <p style="color: #374151; line-height: 1.6;">
          Bei dringenden Fragen können Sie uns auch direkt telefonisch erreichen.
        </p>
        
        <p style="color: #374151; line-height: 1.6;">
          Mit freundlichen Grüßen<br>
          <strong>Ihr K.I.T. Solutions Team</strong>
        </p>
      </div>
      
      <div style="padding: 20px; background: #f9fafb; text-align: center; font-size: 14px; color: #6b7280;">
        <p style="margin: 0;">Linux-Expertise • Digitale Souveränität • Allround-Support</p>
        <p style="margin: 5px 0 0 0;">Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht auf diese E-Mail.</p>
      </div>
    </div>
  `

  try {
    // Send email to business
    await transporter.sendMail({
      from: `"K.I.T. Solutions Kontaktformular" <${process.env.SMTP_USER}>`,
      to: process.env.BUSINESS_EMAIL || process.env.SMTP_USER,
      subject: `Neue Kontaktanfrage: ${getServiceName(data.service)} - ${data.name}`,
      html: businessEmailHtml,
      replyTo: data.email,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"K.I.T. Solutions" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "Bestätigung Ihrer Anfrage - K.I.T. Solutions",
      html: customerEmailHtml,
    })

    // Send Discord notification
    await sendDiscordNotification(data)

    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)

    // Versuche trotzdem Discord-Benachrichtigung zu senden
    try {
      await sendDiscordNotification(data)
    } catch (discordError) {
      console.error("Discord notification also failed:", discordError)
    }

    throw new Error("Failed to send email")
  }
}

function getServiceName(serviceKey: string): string {
  const serviceNames: Record<string, string> = {
    "linux-beratung": "Linux-Beratung & Migration",
    "digitale-souveraenitaet": "Digitale Souveränität",
    "server-administration": "Server-Administration",
    "it-support": "Allgemeiner IT-Support",
    schulung: "Schulungen & Training",
    sicherheit: "IT-Sicherheit",
    sonstiges: "Sonstiges",
  }
  return serviceNames[serviceKey] || serviceKey
}
