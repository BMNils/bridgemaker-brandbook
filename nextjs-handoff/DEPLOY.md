# Deploy — Bridgemaker Brandbook

Next.js 15 App Router · Tailwind v4 · shadcn/ui.
Alles was du brauchst, um das Brandbook öffentlich auf Vercel zu bringen.

---

## Voraussetzungen

- [Node.js 20+](https://nodejs.org)
- [pnpm](https://pnpm.io/installation) (empfohlen) — oder `npm` / `yarn` funktionieren auch
- Vercel-Account (https://vercel.com/nilssanders-3284s-projects)

---

## Option A · Via GitHub (empfohlen)

Persistentes Setup mit Auto-Deploy bei jedem Push.

### 1. Lokal entpacken und testen

```bash
# ZIP entpacken → in den Ordner wechseln
cd nextjs-handoff

# Dependencies installieren
pnpm install

# Dev-Server starten
pnpm dev
# → öffnet http://localhost:3000
```

Seiten zum Prüfen:
- `/` — Landing-Beispiel
- `/` — vollständiges Brandbook
- `/components` — Komponenten-Galerie

### 2. GitHub-Repo anlegen

```bash
# Im nextjs-handoff/-Ordner:
git init
git add .
git commit -m "Initial commit — Bridgemaker Brandbook v1.0"

# Neues Repo auf GitHub erstellen (z.B. bridgemaker-brandbook, privat)
git remote add origin git@github.com:<dein-user>/bridgemaker-brandbook.git
git branch -M main
git push -u origin main
```

### 3. Auf Vercel deployen

1. Gehe zu https://vercel.com/nilssanders-3284s-projects
2. **Add New → Project**
3. **Import Git Repository** — wähle `bridgemaker-brandbook`
4. Vercel erkennt Next.js automatisch — **Deploy** klicken
5. Nach 60–90 Sekunden ist das Brandbook live unter `<projektname>.vercel.app`

### 4. Custom Domain (optional)

Im Vercel-Projekt:
- **Settings → Domains → Add** — z.B. `brandbook.bridgemaker.com`
- Vercel zeigt dir die DNS-Einträge, die du bei eurem Domain-Provider setzen musst (CNAME oder A-Record).

---

## Option B · Via Vercel CLI (schnellster Weg)

Keine GitHub-Verknüpfung, direktes Upload-Deploy.

```bash
cd nextjs-handoff
pnpm install
npx vercel
```

Der Dialog fragt:
- **Set up and deploy?** → `Y`
- **Which scope?** → wähle `nilssanders-3284s-projects`
- **Link to existing project?** → `N`
- **Project name?** → z.B. `bridgemaker-brandbook`
- **In which directory is your code located?** → `./`

Nach Abschluss bekommst du eine Preview-URL. Für den Production-Push:

```bash
npx vercel --prod
```

---

## Empfohlene URL

Default: **`bridgemaker-brandbook.vercel.app`**

Alternativ, falls später öffentlich:
- `brandbook.bridgemaker.com` (Subdomain via Custom Domain)
- `brand.bridgemaker.com`

---

## Updates & Iteration

### Wenn via GitHub deployed (Option A)
- Jeder `git push` auf `main` löst automatisch ein Production-Deploy aus
- Jeder Push auf andere Branches erzeugt Preview-URLs — perfekt für Reviews

### Wenn via CLI deployed (Option B)
- Immer manuell `npx vercel --prod` nach Änderungen

---

## Zugriffskontrolle

Das Brandbook enthält interne Brand-Regeln und -Prinzipien. Zwei Möglichkeiten:

- **Public:** Jeder mit URL kann lesen (ok für Dinge ohne Secrets)
- **Password-Protected:** Vercel → Project Settings → **Deployment Protection → Password Protection** (Pro-Plan) — oder Middleware mit Basic-Auth einbauen

Für den Start empfehle ich **public** — das Brandbook selbst enthält keine Geheimnisse, und Claude Code kann es dann als Referenz-URL ziehen.

---

## Troubleshooting

**Build-Fehler "Module not found"** — prüfe ob `pnpm install` in `nextjs-handoff/` durchgelaufen ist, nicht im Root.

**Tailwind-Styles fehlen** — stelle sicher, dass in Vercel die **Root Directory** korrekt gesetzt ist (falls das Repo noch andere Ordner enthält). Sonst: `nextjs-handoff/` als Root angeben.

**Fonts laden nicht** — Inter wird per Google Fonts in `layout.tsx` geladen, sollte out-of-the-box funktionieren.
