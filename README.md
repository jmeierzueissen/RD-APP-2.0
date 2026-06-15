# Rettungsdienst-Assistent 2.0

Klickbarer React-Prototyp auf Basis der sechs Handy-Referenzbilder.

Die Demo ist bewusst als Handy-App im Laptop-Browser angelegt:

- Auf dem Laptop wird ein zentriertes Smartphone-Mockup angezeigt.
- Die App bleibt optisch wie auf dem Handy, inklusive Bottom-Navigation.
- Auf sehr kleinen Displays füllt die App den Bildschirm.

## Start

```bash
npm install
npm run dev
```

Danach im Browser öffnen:

```text
http://127.0.0.1:5173
```

## Testzugänge

```text
User:  retter@app.local / rettung2026
Admin: admin@app.local  / admin2026
```

## Wichtige Dateien

- `src/App.jsx`: Screen-Struktur, Navigation, Login, Adminbereich und Platzhalterdaten.
- `src/medications.js`: aus der PDF uebertragene Notfallmedikamente.
- `src/App.css`: komplettes Design der Handy-App.
- `src/index.css`: globaler Seiten-Reset.

## Platzhalter

Die aktuell editierbaren Platzhalter stehen oben in `src/App.jsx`:

- `USERS`: Benutzer und Admin-Zugang
- `sops`: SOP-Platzhalter
- `nunAlgorithms`: NUN-Algorithmus-Platzhalter
- `medicationData`: Notfallmedikamente mit Gruppe, Wirkung, Indikationen, Nebenwirkungen, Kontraindikationen und App-Hinweis
- `shifts`: Dienstplan-/Kalender-Platzhalter
- `contacts`: Notfallnummern und Ansprechpartner

Spätere echte Daten können in diese Strukturen eingetragen oder in eine eigene Datenbank/API ausgelagert werden.
