import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Settings, Shield, CheckCircle } from "lucide-react"

export function EmailSetupInfo() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">E-Mail-Integration Setup</h1>
        <p className="text-gray-600 dark:text-gray-300">Konfigurationsanleitung für den automatischen E-Mail-Versand</p>
      </div>

      <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
        <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <strong>E-Mail-Integration erfolgreich implementiert!</strong> Das Kontaktformular sendet jetzt automatisch
          E-Mails an Sie und Bestätigungs-E-Mails an Ihre Kunden.
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Umgebungsvariablen
            </CardTitle>
            <CardDescription>Diese Variablen müssen in Ihrer .env.local Datei gesetzt werden:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
              <div className="space-y-1">
                <div>
                  <span className="text-green-600 dark:text-green-400"># SMTP-Konfiguration</span>
                </div>
                <div>SMTP_HOST=smtp.gmail.com</div>
                <div>SMTP_PORT=587</div>
                <div>SMTP_USER=ihre-email@gmail.com</div>
                <div>SMTP_PASS=ihr-app-passwort</div>
                <div>BUSINESS_EMAIL=info@kit-it-koblenz.de</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>Hinweis:</strong> Für Gmail verwenden Sie ein App-Passwort, nicht Ihr normales Passwort.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Sicherheitshinweise
            </CardTitle>
            <CardDescription>Wichtige Sicherheitsaspekte für den E-Mail-Versand:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>App-Passwörter verwenden:</strong> Niemals Ihr Haupt-E-Mail-Passwort verwenden
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>Umgebungsvariablen:</strong> Sensible Daten nur in .env-Dateien speichern
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>Rate Limiting:</strong> Schutz vor Spam durch Anfrage-Begrenzung
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>E-Mail-Provider Alternativen</CardTitle>
          <CardDescription>Verschiedene SMTP-Anbieter für den professionellen E-Mail-Versand:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">Gmail</Badge>
                <span className="text-sm text-green-600 dark:text-green-400">Kostenlos</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Einfach einzurichten, gut für den Start. Limit: 500 E-Mails/Tag
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">SendGrid</Badge>
                <span className="text-sm text-blue-600 dark:text-blue-400">Professionell</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                100 E-Mails/Tag kostenlos, dann kostenpflichtig. Sehr zuverlässig.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">Mailgun</Badge>
                <span className="text-sm text-purple-600 dark:text-purple-400">Enterprise</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Erste 5.000 E-Mails kostenlos, dann pay-per-use. Sehr skalierbar.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Was passiert jetzt?</CardTitle>
          <CardDescription>Automatischer E-Mail-Workflow nach Formular-Übermittlung:</CardDescription>
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
                <h4 className="font-semibold text-gray-900 dark:text-white">E-Mail an Sie</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Detaillierte Kontaktanfrage mit allen Kundendaten und der Nachricht
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Bestätigung an Kunden</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Professionelle Bestätigungs-E-Mail mit Ihren Kontaktdaten und nächsten Schritten
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
