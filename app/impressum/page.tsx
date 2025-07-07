import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ImpressumPage() {
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
            <Button variant="ghost" asChild className="hover:text-corporate-gold">
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Impressum</h1>

          <div className="space-y-8">
            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Angaben gemäß § 5 TMG</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Diensteanbieter</h3>
                  <p className="text-gray-600 dark:text-gray-300">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Kontakt</h3>
                    <div className="space-y-2">
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

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Kleinunternehmer</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet.
                      <br />
                      Daher wird keine Umsatzsteuer-Identifikationsnummer angegeben.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Berufsbezeichnung: IT-Berater / Systemadministrator
                  <br />
                  Zuständige Kammer: [Falls zutreffend - z.B. IHK Koblenz]
                  <br />
                  Verliehen in: Deutschland
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Redaktionell verantwortlich</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Joshua Phu Kuhrau
                  <br />
                  Dietzstr. 1
                  <br />
                  56073 Koblenz
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">EU-Streitschlichtung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Haftungsausschluss</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Haftung für Inhalte</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Haftung für Links</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                    haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                    der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Urheberrecht</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                    außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers.
                  </p>
                </div>
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
      <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center">
        <p className="text-gray-500 dark:text-gray-400">&copy; 2025 K.I.T. Solutions. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  )
}
