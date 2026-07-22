/* ============================================================
   PASSWORTSCHUTZ — brandbook.bridgemaker.com
   Vercel Routing Middleware (läuft vor dem Cache, auf jedem
   Request, auch auf den *.vercel.app-Domains und Previews).

   Nur EIN Passwortfeld (Wunsch Nils, 22.07.): statt Basic Auth
   (dessen Browser-Dialog immer auch einen Benutzernamen zeigt)
   eine eigene Login-Seite. Richtiges Passwort setzt ein
   HttpOnly-Cookie (30 Tage), das die Middleware danach prüft.

   Das Passwort liegt NIE im Repo: Vercel-Umgebungsvariable
   BRANDBOOK_PASSWORD. Ist sie nicht gesetzt, bleibt alles zu —
   sicher geschlossen statt offen. Im Cookie steht nie das
   Passwort selbst, sondern sein SHA-256-Hash.

   Die Login-Seite lädt bewusst KEINE Webfonts (sie ist der
   einzige öffentliche Teil — kein Google-Fonts-Aufruf, DSGVO)
   und kein tokens.css (läge sonst vor dem Schutz offen);
   die Markenwerte stehen inline.
   ============================================================ */

export const config = { matcher: '/(.*)' };

const COOKIE = 'bb_auth';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 Tage

async function token(secret: string): Promise<string> {
  const data = new TextEncoder().encode(secret + ':bm-brandbook-v1');
  const hash = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function loginPage(fehler: boolean): Response {
  const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Bridgemaker Brandbook</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: #F5F1EB; color: #1C1C1E; padding: 16px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .card {
    background: #fff; border-radius: 20px; padding: 48px 40px; max-width: 400px; width: 100%;
    box-shadow: inset 0 0 0 1px rgba(28,28,30,0.06), 0 1px 2px rgba(28,28,30,0.03),
                0 10px 24px -18px rgba(28,28,30,0.10);
  }
  .eyebrow { font-size: 12px; letter-spacing: 0.10em; text-transform: uppercase;
    color: #6B4A94; margin-bottom: 12px; font-weight: 500; }
  h1 { font-size: 24px; font-weight: 600; letter-spacing: -0.01em; margin-bottom: 8px; }
  p { font-size: 15px; color: #55524C; margin-bottom: 32px; line-height: 1.5; }
  label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px; }
  input {
    width: 100%; padding: 12px 14px; font-size: 15px; font-family: inherit;
    border: 1px solid #C5C0B8; border-radius: 10px; background: transparent;
    margin-bottom: 24px; outline: none;
  }
  input:focus { border: 1.5px solid #6B4A94; background: #fff; padding: 11.5px 13.5px; }
  button {
    width: 100%; padding: 13px 24px; font-size: 15px; font-weight: 500; font-family: inherit;
    border: none; border-radius: 999px; background: #1C1C1E; color: #F5F1EB; cursor: pointer;
    transition: background 240ms ease-out;
  }
  button:hover { background: #4A3268; }
  .fehler { color: #B84A6F; font-size: 13px; margin: -16px 0 24px; }
</style>
</head>
<body>
<main class="card">
  <div class="eyebrow">Bridgemaker</div>
  <h1>Brandbook</h1>
  <p>Interner Bereich. Das Passwort bekommst du im Team.</p>
  <form method="post">
    <label for="password">Passwort</label>
    <input id="password" name="password" type="password" autocomplete="current-password" autofocus required />
    ${fehler ? '<div class="fehler">Das Passwort stimmt nicht.</div>' : ''}
    <button type="submit">Brandbook öffnen</button>
  </form>
</main>
</body>
</html>`;
  return new Response(html, {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

export default async function middleware(request: Request) {
  const secret = process.env.BRANDBOOK_PASSWORD;
  if (!secret) return loginPage(false);
  const expected = await token(secret);

  const cookies = request.headers.get('cookie') ?? '';
  const match = cookies.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([a-f0-9]+)`));
  if (match && match[1] === expected) return; // durchlassen — Antwort liefert das statische Deploy

  if (request.method === 'POST') {
    let password = '';
    try {
      const form = await request.formData();
      password = String(form.get('password') ?? '');
    } catch {
      /* kein Formular-Body → wie leeres Passwort behandeln */
    }
    if (password === secret) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: new URL(request.url).pathname,
          'Set-Cookie': `${COOKIE}=${expected}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
          'Cache-Control': 'no-store',
        },
      });
    }
    return loginPage(true);
  }

  return loginPage(false);
}
