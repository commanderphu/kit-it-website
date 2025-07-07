import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Server, Users, CheckCircle, Mail, Phone, MapPin, Monitor, Laptop, HeadphonesIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { ContactForm } from "@/components/contact-form"
import { EmailSetupInfo } from "@/components/email-setup-info"
import { DiscordSetupInfo } from "@/components/discord-setup-info"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-corporate-gray transition-colors">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-corporate-gray/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-corporate-gray/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/kit-it-logo.png"
                alt="K.I.T. Solutions Logo"
                width={120}
                height={60}
                className="h-12 w-auto dark:invert"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-corporate-gray dark:text-gray-300 hover:text-corporate-gold dark:hover:text-corporate-gold transition-colors"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-corporate-gray dark:text-gray-300 hover:text-corporate-gold dark:hover:text-corporate-gold transition-colors"
              >
                Über uns
              </Link>
              <Link
                href="#contact"
                className="text-corporate-gray dark:text-gray-300 hover:text-corporate-gold dark:hover:text-corporate-gold transition-colors"
              >
                Kontakt
              </Link>
              <ThemeSwitcher />
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeSwitcher className="md:hidden" />
              <Button
                asChild
                className="hidden md:inline-flex bg-corporate-gold hover:bg-corporate-gold-dark text-white"
              >
                <Link href="#contact">Beratung anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-tech-background.jpg"
            alt="Server und Technologie Hintergrund"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/85 dark:bg-corporate-gray/85 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 border-corporate-gold text-corporate-gold bg-white/80 dark:bg-corporate-gray/80"
            >
              Digitale Souveränität • IT-Beratung aus Koblenz
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-corporate-gray dark:text-white mb-6">
              Ihre <span className="text-corporate-gold">Digitale Souveränität</span> ist unsere Mission
            </h1>
            <p className="text-xl text-corporate-gray/90 dark:text-gray-200 mb-8 max-w-3xl mx-auto bg-white/60 dark:bg-corporate-gray/60 backdrop-blur-sm rounded-lg p-6">
              Als frisch gegründetes Unternehmen setzen wir auf Digitale Souveränität und Unabhängigkeit von großen
              Tech-Konzernen. Mit Linux-Expertise und Open-Source-Lösungen helfen wir Ihnen, die Kontrolle über Ihre IT
              zurückzugewinnen. Zusätzlich bieten wir erstklassigen Support für alle Plattformen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-corporate-gold hover:bg-corporate-gold-dark text-white corporate-shadow-gold"
              >
                <Link href="#contact">Kostenlose Beratung</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-corporate-gray dark:border-gray-300 text-corporate-gray dark:text-white hover:bg-corporate-gray hover:text-white dark:hover:bg-white dark:hover:text-corporate-gray bg-white/80 dark:bg-corporate-gray/80 backdrop-blur-sm"
              >
                <Link href="#services">Services entdecken</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-corporate-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray dark:text-white mb-4">
              Unsere Spezialisierungen
            </h2>
            <p className="text-xl text-corporate-gray/80 dark:text-gray-300 max-w-3xl mx-auto">
              Von Nischen-Expertise bis hin zu umfassendem IT-Support – wir decken alle Ihre Bedürfnisse ab.
            </p>
          </div>

          {/* Nische Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-corporate-gray dark:text-white mb-8 text-center">
              Digitale Souveränität & Open-Source-Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-corporate-gold dark:hover:border-corporate-gold transition-all duration-300 bg-white dark:bg-corporate-gray/50 corporate-shadow hover:corporate-shadow-gold">
                <CardHeader>
                  <div className="w-12 h-12 bg-corporate-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Monitor className="h-6 w-6 text-corporate-gold" />
                  </div>
                  <CardTitle className="text-corporate-gray dark:text-white">Linux-Systemadministration</CardTitle>
                  <CardDescription className="text-corporate-gray/70 dark:text-gray-300">
                    Professionelle Einrichtung, Wartung und Optimierung von Linux-Servern und -Workstations für maximale
                    Performance und Sicherheit.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-corporate-gold dark:hover:border-corporate-gold transition-all duration-300 bg-white dark:bg-corporate-gray/50 corporate-shadow hover:corporate-shadow-gold">
                <CardHeader>
                  <div className="w-12 h-12 bg-corporate-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-corporate-gold" />
                  </div>
                  <CardTitle className="text-corporate-gray dark:text-white">Digitale Souveränität</CardTitle>
                  <CardDescription className="text-corporate-gray/70 dark:text-gray-300">
                    Beratung und Implementierung von Open-Source-Lösungen zur Reduzierung von Vendor-Lock-in und
                    Stärkung der digitalen Unabhängigkeit.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-corporate-gold dark:hover:border-corporate-gold transition-all duration-300 bg-white dark:bg-corporate-gray/50 corporate-shadow hover:corporate-shadow-gold">
                <CardHeader>
                  <div className="w-12 h-12 bg-corporate-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-corporate-gold" />
                  </div>
                  <CardTitle className="text-corporate-gray dark:text-white">Open-Source Migration</CardTitle>
                  <CardDescription className="text-corporate-gray/70 dark:text-gray-300">
                    Sichere Migration von proprietären Systemen zu Open-Source-Lösungen mit minimaler Ausfallzeit.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Allgemeine Services */}
          <div>
            <h3 className="text-2xl font-semibold text-corporate-gray dark:text-white mb-8 text-center">
              Für alle: Umfassender IT-Support
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-corporate-gold dark:hover:border-corporate-gold transition-all duration-300 bg-white dark:bg-corporate-gray/50 corporate-shadow hover:corporate-shadow-gold">
                <CardHeader>
                  <div className="w-12 h-12 bg-corporate-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Laptop className="h-6 w-6 text-corporate-gold" />
                  </div>
                  <CardTitle className="text-corporate-gray dark:text-white">Multi-Plattform Support</CardTitle>
                  <CardDescription className="text-corporate-gray/70 dark:text-gray-300">
                    Erstklassiger Support für Windows, macOS und Linux – wir kennen alle Systeme und helfen überall.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-corporate-gold dark:hover:border-corporate-gold transition-all duration-300 bg-white dark:bg-corporate-gray/50 corporate-shadow hover:corporate-shadow-gold">
                <CardHeader>
                  <div className="w-12 h-12 bg-corporate-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-corporate-gold" />
                  </div>
                  <CardTitle className="text-corporate-gray dark:text-white">KMU & Privatkunden</CardTitle>
                  <CardDescription className="text-corporate-gray/70 dark:text-gray-300">
                    Speziell auf kleine Unternehmen und Privatkunden zugeschnittene IT-Lösungen mit persönlicher
                    Betreuung.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-corporate-gold dark:hover:border-corporate-gold transition-all duration-300 bg-white dark:bg-corporate-gray/50 corporate-shadow hover:corporate-shadow-gold">
                <CardHeader>
                  <div className="w-12 h-12 bg-corporate-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <HeadphonesIcon className="h-6 w-6 text-corporate-gold" />
                  </div>
                  <CardTitle className="text-corporate-gray dark:text-white">Remote & Vor-Ort Support</CardTitle>
                  <CardDescription className="text-corporate-gray/70 dark:text-gray-300">
                    Flexibler Support per Fernwartung oder persönlich vor Ort in Koblenz und Umgebung.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-corporate-gray/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray dark:text-white mb-4">
                Warum K.I.T. Solutions?
              </h2>
              <p className="text-xl text-corporate-gray/80 dark:text-gray-300">
                Frisch gegründet, aber mit klarer Vision
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-corporate-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-corporate-gray dark:text-white mb-2">
                      Souveränität trifft Allround-Kompetenz
                    </h3>
                    <p className="text-corporate-gray/70 dark:text-gray-300">
                      Wir stärken Ihre digitale Unabhängigkeit mit Open-Source-Lösungen und Linux-Expertise, bieten aber
                      auch umfassenden IT-Support für alle Plattformen und Bedürfnisse.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-corporate-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-corporate-gray dark:text-white mb-2">Frische Perspektive</h3>
                    <p className="text-corporate-gray/70 dark:text-gray-300">
                      Als Neugründung bringen wir moderne Ansätze und aktuelle Technologien ohne veraltete Denkweisen
                      mit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-corporate-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-corporate-gray dark:text-white mb-2">Regionale Verwurzelung</h3>
                    <p className="text-corporate-gray/70 dark:text-gray-300">
                      Persönliche Betreuung vor Ort in Koblenz und Umgebung mit schnellen Reaktionszeiten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-corporate-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-corporate-gray dark:text-white mb-2">Faire Gründer-Preise</h3>
                    <p className="text-corporate-gray/70 dark:text-gray-300">
                      Als Neugründung können wir attraktive Preise anbieten, ohne bei der Qualität Kompromisse zu
                      machen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-corporate-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-corporate-gray dark:text-white mb-2">Individuelle Betreuung</h3>
                    <p className="text-corporate-gray/70 dark:text-gray-300">
                      Jeder Kunde ist wichtig – Sie erhalten die volle Aufmerksamkeit und maßgeschneiderte Lösungen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-corporate-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-corporate-gray dark:text-white mb-2">Langfristige Vision</h3>
                    <p className="text-corporate-gray/70 dark:text-gray-300">
                      Wir bauen nachhaltige Kundenbeziehungen auf und wachsen gemeinsam mit Ihren Anforderungen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-corporate-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-corporate-gray dark:text-white mb-8">
              Über K.I.T. Solutions
            </h2>
            <div className="text-lg text-corporate-gray/80 dark:text-gray-300 space-y-6">
              <p>
                <strong className="text-corporate-gold">Wir sind frisch gestartet</strong> – und das ist unser Vorteil.
                Als neu gegründetes IT-Beratungsunternehmen K.I.T. Solutions in Koblenz haben wir eine klare Mission:
                Digitale Souveränität für alle zugänglich machen und Unabhängigkeit von großen Tech-Konzernen fördern.
              </p>
              <p>
                <strong className="text-corporate-gold">
                  Digitale Souveränität ist kein Luxus, sondern ein Recht.
                </strong>
                Mit unserer spezialisierten Expertise in Linux und Open-Source-Technologien helfen wir Unternehmen und
                Privatpersonen dabei, die Kontrolle über ihre Daten und IT-Infrastruktur zurückzugewinnen.
              </p>
              <p>
                <strong className="text-corporate-gold">Gleichzeitig sind wir Allrounder.</strong>
                Für Privatkunden und kleine Unternehmen bieten wir erstklassigen Support für alle Plattformen – Windows,
                macOS und natürlich Linux. Denn guter IT-Support kennt keine Systemgrenzen.
              </p>
              <p>
                Unser Ziel: Ihre IT-Probleme lösen, Ihre digitale Souveränität stärken und dabei immer ein verlässlicher
                Partner an Ihrer Seite sein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 corporate-gradient-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Lassen Sie uns sprechen</h2>
              <p className="text-xl text-gray-300">Bereit für den ersten Schritt? Wir sind für Sie da.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Kontaktinformationen</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-corporate-gold" />
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <p className="text-gray-300">info@kit-it-koblenz.de</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-corporate-gold" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-gray-300">+49 162 265426</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-corporate-gold" />
                    <div>
                      <p className="font-medium">Standort</p>
                      <p className="text-gray-300">Dietzstr. 1, 56073 Koblenz</p>
                    </div>
                  </div>
                </div>

                <div className="bg-corporate-gray/50 p-6 rounded-lg border border-corporate-gold/20">
                  <h4 className="text-xl font-semibold mb-4 text-corporate-gold">Kostenlose Erstberatung</h4>
                  <p className="text-gray-300 mb-4">
                    Als Neugründung möchten wir Sie kennenlernen. Vereinbaren Sie ein unverbindliches Beratungsgespräch
                    und erfahren Sie, wie wir Ihnen helfen können – egal ob Linux-Migration oder allgemeiner IT-Support.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-corporate-gold" />
                      Unverbindliche Beratung
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-corporate-gold" />
                      Individuelle Lösungsvorschläge
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-corporate-gold" />
                      Transparente Kostenaufstellung
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-corporate-gold" />
                      Schnelle Reaktionszeiten
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temporary Email Setup Info - Remove after setup */}
      {process.env.NODE_ENV === "development" && (
        <>
          <section className="py-20 bg-corporate-gold/10">
            <EmailSetupInfo />
          </section>
          <section className="py-20 bg-blue-50 dark:bg-blue-900/20">
            <DiscordSetupInfo />
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-corporate-gray text-gray-300 py-12 border-t border-corporate-gold/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center mb-4">
              <Image
                src="/images/kit-it-logo.png"
                alt="K.I.T. Solutions Logo"
                width={100}
                height={50}
                className="h-10 w-auto invert"
              />
            </div>

            <div className="flex flex-row gap-6 mb-4">
              <Link href="/impressum" className="text-gray-400 hover:text-corporate-gold transition-colors text-sm">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-corporate-gold transition-colors text-sm">
                Datenschutz
              </Link>
            </div>

            <div className="space-y-2">
              <p>&copy; 2025 K.I.T. Solutions. Alle Rechte vorbehalten.</p>
              <p className="text-sm text-gray-400">Frisch gegründet • Digitale Souveränität • Allround-Support</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
