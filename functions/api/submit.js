/* ============================================================
   Cloudflare Pages Function — POST /api/submit
   Takes the questionnaire answers and creates a page in the
   Notion database. The Notion integration token stays server-side.
   ============================================================ */

const NOTION_VERSION = "2022-06-28";
const NOTION_API = "https://api.notion.com/v1/pages";

// Field id (from frontend) → Notion property name + type
const FIELD_MAP = {
  partner_name:         { prop: "Partner",                           type: "title"        },
  partner_email:        { prop: "E-Mail",                            type: "email"        },
  b1_pain_points:       { prop: "B1 — Schmerzen",                    type: "multi_select" },
  b1_notes:             { prop: "B1 — Notizen",                      type: "rich_text"    },
  b2_category:          { prop: "B2 — Kategorie",                    type: "select"       },
  b2_category_custom:   { prop: "B2 — Eigene Kategorie",             type: "rich_text"    },
  b2_oneliner:          { prop: "B2 — Ein-Satz-Einübung",            type: "rich_text"    },
  b2_why:               { prop: "B2 — Begründung",                   type: "rich_text"    },
  b3_competitors:       { prop: "B3 — Wettbewerber",                 type: "multi_select" },
  b3_delta:             { prop: "B3 — Delta",                        type: "rich_text"    },
  b3_nogos:             { prop: "B3 — No-Gos",                       type: "rich_text"    },
  b4_90_days:           { prop: "B4 — 90 Tage",                      type: "multi_select" },
  b4_365_days:          { prop: "B4 — 365 Tage",                     type: "multi_select" },
  b4_numbers:           { prop: "B4 — Zahlen die wir zeigen dürfen", type: "rich_text"    },
  b5_formality:         { prop: "B5 — Formell vs. Locker",           type: "select"       },
  b5_directness:        { prop: "B5 — Vorsichtig vs. Direkt",        type: "select"       },
  b5_words_are:         { prop: "B5 — Drei Wörter: sind wir",        type: "rich_text"    },
  b5_words_arent:       { prop: "B5 — Drei Wörter: sind wir nicht",  type: "rich_text"    },
  b6_claim_favorites:   { prop: "B6 — Claim-Favoriten",              type: "multi_select" },
  b6_own_claim:         { prop: "B6 — Eigener Claim",                type: "rich_text"    },
  b6_subline:           { prop: "B6 — Subline",                      type: "rich_text"    },
};

const REQUIRED = ["partner_name", "partner_email"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

const truncate = (str, n = 1900) =>
  typeof str === "string" && str.length > n ? str.slice(0, n) + "…" : str;

function buildProperty(type, value) {
  if (value === undefined || value === null) return null;
  switch (type) {
    case "title":
      if (!String(value).trim()) return null;
      return { title: [{ text: { content: truncate(String(value).trim()) } }] };
    case "rich_text":
      if (!String(value).trim()) return null;
      return { rich_text: [{ text: { content: truncate(String(value).trim()) } }] };
    case "email":
      if (!String(value).trim()) return null;
      return { email: String(value).trim() };
    case "select":
      if (!String(value).trim()) return null;
      return { select: { name: String(value).trim() } };
    case "multi_select": {
      const arr = Array.isArray(value) ? value : [];
      const cleaned = arr.map((v) => String(v).trim()).filter(Boolean);
      if (cleaned.length === 0) return null;
      return { multi_select: cleaned.map((name) => ({ name })) };
    }
    default:
      return null;
  }
}

export async function onRequestPost({ request, env }) {
  const token = env.NOTION_TOKEN;
  const databaseId = env.NOTION_DATABASE_ID;

  if (!token || !databaseId) {
    return json({ error: "Server not configured. Missing NOTION_TOKEN or NOTION_DATABASE_ID." }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const answers = (body && body.answers) || {};
  if (typeof answers !== "object" || Array.isArray(answers)) {
    return json({ error: "answers must be an object." }, 400);
  }

  // Validate required
  for (const key of REQUIRED) {
    if (!answers[key] || !String(answers[key]).trim()) {
      return json({ error: `Pflichtfeld fehlt: ${key}` }, 400);
    }
  }
  if (!EMAIL_RE.test(String(answers.partner_email).trim())) {
    return json({ error: "E-Mail-Adresse ist ungültig." }, 400);
  }

  // Build Notion properties payload (skip unknown / empty fields)
  const properties = {};
  for (const [fieldId, value] of Object.entries(answers)) {
    const meta = FIELD_MAP[fieldId];
    if (!meta) continue; // ignore unknown fields
    const prop = buildProperty(meta.type, value);
    if (prop) properties[meta.prop] = prop;
  }

  // Always set status to "Eingegangen"
  properties["Status"] = { select: { name: "Eingegangen" } };

  const payload = {
    parent: { database_id: databaseId },
    properties,
  };

  let notionRes;
  try {
    notionRes = await fetch(NOTION_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    return json({ error: "Network error talking to Notion.", detail: String(e) }, 502);
  }

  if (!notionRes.ok) {
    const text = await notionRes.text();
    // Log shape is safe — token is not included
    console.error("Notion API error:", notionRes.status, text);
    return json(
      { error: "Notion API request failed.", status: notionRes.status, detail: text.slice(0, 500) },
      502
    );
  }

  const result = await notionRes.json();
  return json({ ok: true, id: result.id });
}

export async function onRequestOptions() {
  // Same-origin use only — but return a minimal OPTIONS response just in case.
  return new Response(null, { status: 204 });
}

export async function onRequest({ request }) {
  // Method not allowed for anything else
  return json({ error: `Method ${request.method} not allowed.` }, 405);
}
