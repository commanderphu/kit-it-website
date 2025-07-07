"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitContactForm, type ContactFormState } from "@/lib/actions"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const initialState: ContactFormState = {}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white dark:bg-corporate-gray border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Kontaktanfrage</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state.success && (
          <Alert className="mb-6 border-corporate-gold/30 bg-corporate-gold/10">
            <CheckCircle className="h-4 w-4 text-corporate-gold" />
            <AlertDescription className="text-corporate-gray dark:text-white">{state.message}</AlertDescription>
          </Alert>
        )}

        {state.success === false && state.message && (
          <Alert className="mb-6 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <AlertDescription className="text-red-800 dark:text-red-200">{state.message}</AlertDescription>
          </Alert>
        )}

        <form action={formAction} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-900 dark:text-white">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                disabled={isPending}
              />
              {state.errors?.name && <p className="text-sm text-red-600 dark:text-red-400">{state.errors.name[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900 dark:text-white">
                E-Mail *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                disabled={isPending}
              />
              {state.errors?.email && <p className="text-sm text-red-600 dark:text-red-400">{state.errors.email[0]}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-900 dark:text-white">
                Telefon (optional)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                disabled={isPending}
              />
              {state.errors?.phone && <p className="text-sm text-red-600 dark:text-red-400">{state.errors.phone[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-gray-900 dark:text-white">
                Unternehmen (optional)
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                disabled={isPending}
              />
              {state.errors?.company && (
                <p className="text-sm text-red-600 dark:text-red-400">{state.errors.company[0]}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-gray-900 dark:text-white">
              Gewünschter Service *
            </Label>
            <Select name="service" required disabled={isPending}>
              <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                <SelectValue placeholder="Bitte wählen Sie einen Service aus" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                <SelectItem value="linux-beratung" className="text-gray-900 dark:text-white">
                  Linux-Beratung & Migration
                </SelectItem>
                <SelectItem value="digitale-souveraenitaet" className="text-gray-900 dark:text-white">
                  Digitale Souveränität
                </SelectItem>
                <SelectItem value="server-administration" className="text-gray-900 dark:text-white">
                  Server-Administration
                </SelectItem>
                <SelectItem value="it-support" className="text-gray-900 dark:text-white">
                  Allgemeiner IT-Support
                </SelectItem>
                <SelectItem value="schulung" className="text-gray-900 dark:text-white">
                  Schulungen & Training
                </SelectItem>
                <SelectItem value="sicherheit" className="text-gray-900 dark:text-white">
                  IT-Sicherheit
                </SelectItem>
                <SelectItem value="sonstiges" className="text-gray-900 dark:text-white">
                  Sonstiges
                </SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.service && (
              <p className="text-sm text-red-600 dark:text-red-400">{state.errors.service[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-900 dark:text-white">
              Nachricht *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Beschreiben Sie Ihr Anliegen oder Ihre Anforderungen..."
              className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white resize-none"
              disabled={isPending}
            />
            {state.errors?.message && (
              <p className="text-sm text-red-600 dark:text-red-400">{state.errors.message[0]}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-corporate-gold hover:bg-corporate-gold-dark text-white corporate-shadow-gold"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              "Anfrage senden"
            )}
          </Button>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
