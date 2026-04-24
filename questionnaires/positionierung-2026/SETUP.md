# Positionierung 2026 — Setup & Deploy

Einmalige Schritte, damit der Questionnaire live geht und die Antworten in Notion landen.

## Überblick

- **Frontend:** statisch unter `questionnaires/positionierung-2026/` — deployed via Cloudflare Pages
- **Backend:** Cloudflare Pages Function `functions/api/submit.js` → Notion API
- **Datenspeicher:** Notion Database „Positionierung 2026 — Partner-Antworten"
  - Database ID: `04816c1e-e0cf-825e-aae8-81cff9d792fc`
  - Location: Bridgemaker-Workspace (cross-workspace-moved am 2026-04-24; die alte Version unter ID `e7053d6c-1117-4451-893f-da7ebf5b4d1e` ist obsolet und kann gelöscht werden)

## 1 · Notion Integration anlegen

1. [notion.so/profile/integrations](https://www.notion.so/profile/integrations) → **New integration**
2. Name: `bridgemaker.com Questionnaire` · Typ: **Internal**
3. Workspace: euer Bridgemaker-Workspace
4. Capabilities: nur **Insert content** (Update / Read werden nicht gebraucht)
5. **Internal Integration Secret** kopieren → das ist der `NOTION_TOKEN`

## 2 · Database für die Integration freigeben

1. In Notion die Seite **„bridgemaker.com 2026 — Positionierung Leadership-Entscheidung"** öffnen
2. Oben rechts `···` → **Connections** → `bridgemaker.com Questionnaire` auswählen → **Confirm**
3. Das gilt automatisch auch für die Database darunter.

## 3 · Cloudflare Pages Env-Vars setzen

Im Cloudflare Dashboard → Pages → das Bridgemaker-Projekt → **Settings → Environment variables**:

| Name                  | Value                                       | Umgebung        |
|-----------------------|---------------------------------------------|-----------------|
| `NOTION_TOKEN`        | `ntn_…` (Secret aus Schritt 1)              | Production + Preview |
| `NOTION_DATABASE_ID`  | `04816c1e-e0cf-825e-aae8-81cff9d792fc`      | Production + Preview |

Beide als **Secret** (verschlüsselt) markieren. Nach dem Speichern muss einmal redeployed werden, damit die Variablen in der Function verfügbar sind.

## 4 · Deploy prüfen

```
https://<deine-pages-url>/questionnaires/positionierung-2026/
```

Test-Submission machen → in Notion prüfen, dass eine neue Zeile auftaucht.

## 5 · Einladung an die Partner

Kurzer Vorschlag für die Mail:

> Hi [Name], bevor wir uns zur Positionierungs-Session treffen: füll bitte diesen kurzen Online-Fragebogen aus. 20–30 Min. reichen. Zwischenstand wird automatisch gespeichert, du kannst also jederzeit pausieren.
>
> 👉 [Link zum Questionnaire]
>
> Frist: [Datum]. Danke, Nils.

## Troubleshooting

- **„Server not configured"** → Env-Vars fehlen. Siehe Schritt 3.
- **„Notion API request failed" / 404** → Integration wurde nicht mit der Database verbunden. Siehe Schritt 2.
- **Multi-Select-Optionen werden nicht gespeichert** → Die Frontend-`value`s müssen exakt den Notion-Option-Namen entsprechen. Nicht in Notion umbenennen, ohne die Schema-Werte in `app.js` + `functions/api/submit.js` mitzuziehen.
- **Antworten wiederherstellen** → Zwischenstand liegt im Browser (`localStorage["bm-positionierung-2026-draft-v1"]`). Nach Submit bleibt der Entwurf zur Sicherheit erhalten — „Neu beginnen" auf der Startseite räumt auf.

## Weiterverwendung für andere Questionnaires

Dieser Stack ist generisch — für ein anderes Questionnaire:
1. Neue Notion-Database mit passenden Properties anlegen
2. `questionnaires/<name>/` als Kopie → `STEPS` in `app.js` anpassen
3. `functions/api/submit.js` duplizieren als z.B. `functions/api/submit-<name>.js` → `FIELD_MAP` anpassen
4. Neue Env-Var für die Database-ID
