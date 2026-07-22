/* ============================================================
   PASSWORTSCHUTZ — brandbook.bridgemaker.com
   Vercel Routing Middleware (läuft vor dem Cache, auf jedem
   Request, auch auf den *.vercel.app-Domains und Previews).

   Das Passwort liegt NIE im Repo: Vercel-Umgebungsvariable
   BRANDBOOK_PASSWORD (Production + Preview). Ist sie nicht
   gesetzt, bleibt alles zu — sicher geschlossen statt offen.

   Der Benutzername ist frei, geprüft wird nur das Passwort.
   ============================================================ */

export const config = { matcher: '/(.*)' };

export default function middleware(request: Request) {
  const secret = process.env.BRANDBOOK_PASSWORD;
  const auth = request.headers.get('authorization') ?? '';

  if (secret && auth.startsWith('Basic ')) {
    try {
      const decoded = atob(auth.slice(6));
      const password = decoded.slice(decoded.indexOf(':') + 1);
      if (password === secret) return; // durchlassen — Antwort liefert das statische Deploy
    } catch {
      /* kaputter Base64-Header → wie ohne Anmeldung behandeln */
    }
  }

  return new Response('Bridgemaker Brandbook — Zugriff nur mit Passwort.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Bridgemaker Brandbook", charset="UTF-8"',
      'Cache-Control': 'no-store',
    },
  });
}
