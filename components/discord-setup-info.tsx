import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Settings, Zap, CheckCircle } from "lucide-react"

export function DiscordSetupInfo() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Discord Webhook Setup</h1>
        <p className="text-gray-600 dark:text-gray-300">Sofortige Benachrichtigungen für neue Kontaktanfragen</p>
      </div>

      <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
        <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <strong>Discord Integration hinzugefügt!</strong> Sie erhalten jetzt sofortige Benachrichtigungen in Discord
          für jede neue Kontaktanfrage mit allen wichtigen Details.
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Discord Webhook erstellen
            </CardTitle>
            <CardDescription>Schritt-für-Schritt Anleitung zur Webhook-Erstellung:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-xs">
                  1
                </div>
                <div className="text-sm">
                  <strong>Discord Server öffnen</strong>
                  <br />
                  Gehen Sie zu Ihrem Discord Server und wählen Sie den gewünschten Kanal aus.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-xs">
                  2
                </div>
                <div className="text-sm">
                  <strong>Kanal-Einstellungen</strong>
                  <br />
                  Rechtsklick auf den Kanal → "Kanal bearbeiten" → "Integrationen"
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-xs">
                  3
                </div>
                <div className="text-sm">
                  <strong>Webhook erstellen</strong>
                  <br />
                  "Webhooks" → "Neuer Webhook" → Name: "K.I.T. Solutions Kontakt"
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-xs">
                  4
                </div>
                <div className="text-sm">
                  <strong>Webhook-URL kopieren</strong>
                  <br />
                  "Webhook-URL kopieren" und in Ihre .env.local einfügen
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Umgebungsvariable
            </CardTitle>
            <CardDescription>Fügen Sie diese Variable zu Ihrer .env.local hinzu:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
              <div className="space-y-1">
                <div>
                  <span className="text-green-600 dark:text-green-400"># Discord Webhook</span>
                </div>
                <div>DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>Hinweis:</strong> Die Webhook-URL sollte mit
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">https://discord.com/api/webhooks/</code>{" "}
                beginnen.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Was passiert bei einer neuen Kontaktanfrage?</CardTitle>
          <CardDescription>Automatischer Workflow mit Discord-Integration:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Kunde füllt Formular aus</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Validierung der Eingaben und Verarbeitung der Daten
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">E-Mails werden versendet</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Benachrichtigung an Sie und Bestätigung an den Kunden
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-corporate-gold rounded-full flex items-center justify-center text-white font-semibold text-sm">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">🔔 Discord Benachrichtigung</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sofortige Benachrichtigung in Discord mit allen Kontaktdaten und der Nachricht
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Discord Benachrichtigung Beispiel</CardTitle>
          <CardDescription>So sieht eine Benachrichtigung in Discord aus:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-corporate-gold">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-corporate-gold rounded-full"></div>
                <strong className="text-gray-900 dark:text-white">🔔 Neue Kontaktanfrage</strong>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <strong>👤 Name:</strong> Max Mustermann
                </div>
                <div>
                  <strong>📧 E-Mail:</strong> max@example.com
                </div>
                <div>
                  <strong>📞 Telefon:</strong> +49 123 456789
                </div>
                <div>
                  <strong>🏢 Unternehmen:</strong> Musterfirma GmbH
                </div>
                <div>
                  <strong>⚙️ Service:</strong> Linux-Beratung
                </div>
                <div>
                  <strong>🕒 Zeit:</strong> 07.01.2025, 14:30
                </div>
              </div>
              <div className="text-sm">
                <strong>💬 Nachricht:</strong>
                <br />
                <em className="text-gray-600 dark:text-gray-400">"Wir möchten unsere Server auf Linux umstellen..."</em>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Vorteile der Discord-Integration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>Sofortige Benachrichtigungen:</strong> Erhalten Sie Push-Notifications auf allen Geräten
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>Strukturierte Darstellung:</strong> Alle wichtigen Infos auf einen Blick
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>Team-Integration:</strong> Teilen Sie Anfragen mit Ihrem Team
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>Backup-System:</strong> Funktioniert auch wenn E-Mails nicht ankommen
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>Kostenlos:</strong> Discord Webhooks sind komplett kostenfrei
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>Einfache Einrichtung:</strong> Nur eine URL in die .env.local einfügen
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
