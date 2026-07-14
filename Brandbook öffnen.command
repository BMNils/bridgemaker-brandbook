#!/bin/bash
# Bridgemaker Brandbook lokal öffnen.
# Das HTML-Book lädt seine JSX-Sektionen per XHR — das braucht HTTP,
# file:// blockiert es. Dieser Launcher startet einen Mini-Server
# und öffnet das Book im Browser. Beenden: Fenster schließen / Ctrl+C.

cd "$(dirname "$0")"
PORT=8765

if ! lsof -i :$PORT >/dev/null 2>&1; then
  python3 -m http.server $PORT >/dev/null 2>&1 &
  SERVER_PID=$!
  trap 'kill $SERVER_PID 2>/dev/null' EXIT
  sleep 1
fi

open "http://localhost:$PORT/"
echo "Brandbook läuft auf http://localhost:$PORT/ — dieses Fenster offen lassen."
wait
