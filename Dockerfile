# ==================================
# Stufe 1: Build-Umgebung ("builder")
# ==================================
FROM node:20-alpine AS builder

# Sicherheitsupdates
RUN apk update && apk upgrade --no-cache

WORKDIR /app

# Kopiere package.json und lock-Datei
COPY package*.json ./

# Installiere alle Abhängigkeiten für den Build
RUN npm ci --legacy-peer-deps

# Kopiere den restlichen Quellcode
COPY . .

# Erstelle den Produktions-Build
# Die Ausgabe landet im Ordner ".next"
RUN npm run build


# ==================================
# Stufe 2: Produktions-Umgebung (Final)
# ==================================
FROM node:20-alpine

WORKDIR /app

# Erstelle einen Non-Root-User für die Sicherheit
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Kopiere nur die notwendigen Dateien aus der "builder"-Stufe
COPY --from=builder /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Setze den neuen User als aktiven User
USER appuser

# Der Port, auf dem die Next.js-App läuft (Standard: 3000)
EXPOSE 3000

# Der Befehl, um die produktive Next.js-Anwendung zu starten
CMD ["npm", "start"]