import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Shield, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/kit-it-logo.png"
                alt="KIT IT Koblenz Logo"
                width={120}
                height={60}
                className="h-12 w-auto dark:invert"
              />
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Startseite
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Datenschutzerklärung</h1>

          <Alert className="mb-8 border-corporate-gold/30 bg-corporate-gold/10">
            <Shield className="h-4 w-4 text-corporate-gold" />
            <AlertDescription className="text-corporate-gray dark:text-white">
              <strong>Ihre Privatsphäre ist uns wichtig.</strong> Diese Datenschutzerklärung informiert Sie über die
              Art, den Umfang und Zweck der Verarbeitung personenbezogener Daten auf unserer Website.
            </AlertDescription>
          </Alert>

          <div className="space-y-8">
            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">1. Verantwortlicher</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-900 dark:text-white">
                    K.I.T. Solutions
                    <br />
                    Joshua Phu Kuhrau
                    <br />
                    Dietzstr. 1
                    <br />
                    56073 Koblenz
                    <br />
                    Deutschland
                  </p>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">+49 162 265426</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300">info@kit-it-koblenz.de</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  2. Allgemeine Hinweise zur Datenverarbeitung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Umfang der Verarbeitung personenbezogener Daten
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
                    Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Rechtsgrundlage für die Verarbeitung
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Art. 6 Abs. 1 lit. a DSGVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine
                    Einwilligung für einen bestimmten Verarbeitungszweck einholen. Art. 6 Abs. 1 lit. f DSGVO dient als
                    Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  3. Bereitstellung der Website und Erstellung von Logfiles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Beschreibung und Umfang der Datenverarbeitung
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen
                    vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 ml-4">
                    <li>• Informationen über den Browsertyp und die verwendete Version</li>
                    <li>• Das Betriebssystem des Nutzers</li>
                    <li>• Den Internet-Service-Provider des Nutzers</li>
                    <li>• Die IP-Adresse des Nutzers</li>
                    <li>• Datum und Uhrzeit des Zugriffs</li>
                    <li>• Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Zweck der Datenverarbeitung</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung
                    der Website an den Rechner des Nutzers zu ermöglichen. Die Daten werden gelöscht, sobald sie für die
                    Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">4. Kontaktformular und E-Mail-Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Beschreibung und Umfang der Datenverarbeitung
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches für die elektronische
                    Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der
                    Eingabemaske eingegeben Daten an uns übermittelt und gespeichert:
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 ml-4">
                    <li>• Name</li>
                    <li>• E-Mail-Adresse</li>
                    <li>• Telefonnummer (optional)</li>
                    <li>• Unternehmen (optional)</li>
                    <li>• Gewünschter Service</li>
                    <li>• Nachrichteninhalt</li>
                    <li>• Datum und Uhrzeit der Registrierung</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Zweck der Datenverarbeitung</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung
                    der Kontaktaufnahme. Die sonstigen während des Absendevorgangs verarbeiteten personenbezogenen Daten
                    dienen dazu, einen Missbrauch des Kontaktformulars zu verhindern und die Sicherheit unserer
                    informationstechnischen Systeme sicherzustellen.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Dauer der Speicherung</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
                    erforderlich sind. Für die personenbezogenen Daten aus der Eingabemaske des Kontaktformulars und
                    diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Konversation
                    mit dem Nutzer beendet ist.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">5. E-Mail-Versand</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automatischer E-Mail-Versand</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Bei der Nutzung unseres Kontaktformulars werden automatisch E-Mails versendet:
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 ml-4 mt-2">
                    <li>• Eine Benachrichtigung an uns mit Ihren Kontaktdaten und Ihrer Anfrage</li>
                    <li>• Eine Bestätigungs-E-Mail an Sie mit unseren Kontaktdaten</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">SMTP-Dienstleister</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Für den E-Mail-Versand nutzen wir externe SMTP-Dienstleister. Ihre Daten werden dabei entsprechend
                    den Datenschutzbestimmungen des jeweiligen Anbieters verarbeitet. Eine Weitergabe an Dritte erfolgt
                    nicht.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">6. Rechte der betroffenen Person</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen
                  Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">Auskunftsrecht</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">Berichtigungsrecht</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        Sie haben ein Recht auf Berichtigung und/oder Vervollständigung Ihrer Daten.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">Löschungsrecht</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        Sie können die Löschung Ihrer personenbezogenen Daten verlangen.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                        Einschränkung der Verarbeitung
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">Datenübertragbarkeit</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        Sie haben das Recht auf Datenübertragbarkeit in einem strukturierten Format.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">Widerspruchsrecht</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        Sie können der Verarbeitung Ihrer Daten aus besonderen Gründen widersprechen.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">7. Widerruf von Einwilligungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen. Durch den Widerruf der
                  Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten
                  Verarbeitung nicht berührt. Sie können den Widerruf per E-Mail an info@kit-it-koblenz.de senden.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  8. Beschwerderecht bei der Aufsichtsbehörde
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen
                  das Recht auf Beschwerde bei einer Aufsichtsbehörde zu. Die für uns zuständige Aufsichtsbehörde ist:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-900 dark:text-white text-sm">
                    Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz
                    <br />
                    Hintere Bleiche 34
                    <br />
                    55116 Mainz
                    <br />
                    Telefon: +49 6131 208-2449
                    <br />
                    E-Mail: poststelle@datenschutz.rlp.de
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  9. Aktualität und Änderung dieser Datenschutzerklärung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025. Durch die
                  Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher
                  beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                  Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter
                  "https://kit-it-koblenz.de/datenschutz" von Ihnen abgerufen und ausgedruckt werden.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-corporate-gold hover:bg-corporate-gold-dark text-white">
              <Link href="/">Zurück zur Startseite</Link>
            </Button>
          </div>
        </div>
      </div>
      <footer className="bg-gray-100 dark:bg-gray-800 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            &copy; 2025 K.I.T. Solutions. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}
