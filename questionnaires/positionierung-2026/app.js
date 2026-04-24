/* ============================================================
   Positionierung 2026 — Questionnaire App
   Step-by-step form with localStorage drafting + Notion submit.
   ============================================================ */

(() => {
  "use strict";

  const STORAGE_KEY = "bm-positionierung-2026-draft-v1";
  const API_ENDPOINT = "/api/submit";

  // Option cards cycle through surfaces within a block for visual rhythm.
  const OPTION_SURFACES = ["is-stone", "is-mauve", "is-sand", "is-sage"];

  /* ------------------------------------------------------------
     SCHEMA — mirrors the Notion database. Option `value` strings
     MUST exactly match the Notion select/multi-select option names.
     `label` is the display text in the UI.
     ------------------------------------------------------------ */
  const STEPS = [
    {
      id: "intro",
      kind: "intro",
    },
    {
      id: "identity",
      kind: "form",
      eyebrow: "Vorbereitung",
      title: "Wer füllt aus?",
      intro:
        "Damit wir eure Antworten in der Session zuordnen können. Wir teilen sie ausschließlich im Leadership-Kreis.",
      fields: [
        {
          id: "partner_name",
          label: "Dein Name",
          type: "text",
          required: true,
          placeholder: "Vorname Nachname",
        },
        {
          id: "partner_email",
          label: "E-Mail",
          type: "email",
          required: true,
          placeholder: "name@bridgemaker.com",
        },
      ],
    },
    {
      id: "block1",
      kind: "form",
      eyebrow: "Block 1 / 6",
      title: "Welchen Schmerz adressieren wir?",
      intro:
        "Was sagt ein Kunde, bevor er uns zum ersten Mal kontaktiert? Der Satz, der in seinem Kopf ist. Je konkreter wir diesen Schmerz benennen, desto schärfer verkauft sich alles Folgende.",
      fields: [
        {
          id: "b1_pain_points",
          label: "Wählt die 2–3 stärksten Schmerzen.",
          help: "Mehrfachauswahl — maximal 3.",
          type: "multi",
          max: 3,
          options: [
            {
              value: "Umsatzverlust an digital-first Wettbewerbern",
              label: "„Wir verlieren Umsatz an digital-first Wettbewerber.“",
              hint: "Bedrohungsszenario",
            },
            {
              value: "Vorstand fordert KI — keiner weiss wie",
              label: "„Der Vorstand / Beirat fordert KI, aber keiner weiß wie.“",
              hint: "Druck von oben, Orientierungslosigkeit",
            },
            {
              value: "Wachstum stagniert — neue Geschäftsfelder nötig",
              label: "„Unser Wachstum stagniert, wir brauchen neue Geschäftsfelder.“",
              hint: "Strategisches Plateau",
            },
            {
              value: "100 Tage Ergebnisdruck (PE)",
              label: "„Wir haben 100 Tage und müssen Ergebnisse liefern.“",
              hint: "Typischer PE-Schmerz",
            },
            {
              value: "Tech und Business sprechen verschiedene Sprachen",
              label: "„Unsere Tech- und Business-Seite sprechen verschiedene Sprachen.“",
              hint: "Organisational",
            },
            {
              value: "Anderes",
              label: "Anderes",
              hint: "Bitte unten notieren",
            },
          ],
        },
        {
          id: "b1_notes",
          label: "Notizen und konkrete Kundenbeispiele",
          type: "textarea",
          placeholder:
            "Welche Kunden kommen dir in den Sinn? Welche O-Töne hast du zuletzt gehört?",
        },
      ],
    },
    {
      id: "block2",
      kind: "form",
      eyebrow: "Block 2 / 6",
      title: "Was sind wir — als Kategorie?",
      intro:
        "Wie beantwortet man die Frage „Was macht Bridgemaker?“ in einem Satz? Die Antwort bestimmt, wer uns findet, wer uns vergleicht und wer uns weiterempfiehlt. „Venture Studio“ ist zu eng. „Beratung“ ist falsch. „Agentur“ sowieso.",
      fields: [
        {
          id: "b2_category",
          label: "Welche Kategorie passt am besten?",
          help: "Einfachauswahl.",
          type: "single",
          options: [
            {
              value: "AI-native Transformation Partner",
              label: "AI-native Transformation Partner",
              hint: "Baut auf dem Matrix-Narrativ",
            },
            {
              value: "Build Company für KI-Zeitalter",
              label: "Build Company für KI-Zeitalter",
              hint: "Macher-Claim, abgegrenzt von Beratung",
            },
            {
              value: "Venture Studio + Transformation Unit",
              label: "Venture Studio + Transformation Unit",
              hint: "Direkt beschreibend, eher technisch",
            },
            {
              value: "KI-natives Wertschöpfungs-Studio",
              label: "KI-natives Wertschöpfungs-Studio",
              hint: "Neue Kategorie, erklärungsbedürftig",
            },
            {
              value: "Operative Umsetzungspartner für KMU und PE",
              label: "Operative Umsetzungspartner für KMU und PE",
              hint: "Nüchtern, zielgruppenspezifisch",
            },
            {
              value: "Eigene Formulierung",
              label: "Eigene Formulierung",
              hint: "Nichts oben trifft es — ich schlage was vor",
              reveals: "b2_category_custom",
            },
          ],
        },
        {
          id: "b2_category_custom",
          label: "Deine eigene Kategorie",
          type: "text",
          placeholder: "In einem Satz: Was sind wir?",
          visibleIf: { field: "b2_category", equals: "Eigene Formulierung" },
        },
        {
          id: "b2_oneliner",
          label: "Die gewählte Kategorie als Satz zum Einüben",
          help: "Der Lückentext: „Bridgemaker ist ein ____ für Unternehmen, die ihr Geschäft KI-nativ weiterentwickeln wollen.“",
          type: "text",
          placeholder:
            "Bridgemaker ist ein … für Unternehmen, die ihr Geschäft KI-nativ weiterentwickeln wollen.",
        },
        {
          id: "b2_why",
          label: "Warum diese Kategorie",
          type: "textarea",
          placeholder:
            "Was spricht für diese Einordnung? Welche Reaktion erwartest du beim Empfänger?",
        },
      ],
    },
    {
      id: "block3",
      kind: "form",
      eyebrow: "Block 3 / 6",
      title: "Gegen wen positionieren wir uns?",
      intro:
        "Differenzierung entsteht nicht absolut, sondern relativ. Wenn ein Kunde uns zum ersten Mal hört, vergleicht er uns mit jemandem, den er kennt. Die Frage ist: mit wem — und was sagen wir konkret gegen den Vergleich?",
      fields: [
        {
          id: "b3_competitors",
          label: "Wen schlagen wir typischerweise im Pitch?",
          help: "WhatAVenture und OMMAX sind unsere direkten Wettbewerber. Weitere Vergleichsgruppen kannst du zusätzlich auswählen.",
          type: "multi",
          options: [
            { group: "Direkte Wettbewerber" },
            {
              value: "WhatAVenture / OMMAX",
              label: "WhatAVenture / OMMAX",
              hint: "Die beiden Namen, gegen die wir im Pitch am häufigsten antreten",
            },
            { group: "Weitere Vergleichsgruppen" },
            {
              value: "McKinsey / BCG / Roland Berger",
              label: "McKinsey / BCG / Roland Berger",
              hint: "Strategie-Beratung, aber keine Umsetzung",
            },
            {
              value: "Accenture / Publicis Sapient / diconium",
              label: "Accenture / Publicis Sapient / diconium",
              hint: "Digital Transformation, aber groß und langsam",
            },
            {
              value: "BCG Digital Ventures / Founders Factory",
              label: "BCG Digital Ventures / Founders Factory",
              hint: "Venture Builder, aber ohne Kerngeschäft-Expertise",
            },
            {
              value: "KI-Boutiquen / Tech-Agenturen",
              label: "KI-Boutiquen / Tech-Agenturen",
              hint: "KI-Spezialisten, aber ohne kommerzielle Verankerung",
            },
            {
              value: "Interne Teams / Inhouse-Aufbau",
              label: "Interne Teams / Inhouse-Aufbau",
              hint: "Eigenbau, aber zu langsam und isoliert",
            },
          ],
        },
        {
          id: "b3_delta",
          label: "Welches Delta besitzen wir?",
          help: "Vervollständige den Satz: „Anders als [Wettbewerber] sind wir [das Delta].“",
          type: "textarea",
          placeholder: "Anders als … sind wir …",
        },
        {
          id: "b3_nogos",
          label: "No-Gos — wo gehen wir bewusst NICHT hin?",
          help: "z. B. reine Strategie, Tech-Consulting, Einzel-Agents verkaufen, kleine Beratungs-Mandate …",
          type: "textarea",
          placeholder: "Wir machen ausdrücklich nicht …",
        },
      ],
    },
    {
      id: "block4",
      kind: "form",
      eyebrow: "Block 4 / 6",
      title: "Was versprechen wir — messbar?",
      intro:
        "Ein Value Promise, das nicht messbar ist, ist Marketing. Ein Value Promise, das messbar ist, ist ein Versprechen. Welchen konkreten Outcome kann ein Kunde nach 90, 180, 365 Tagen erwarten?",
      fields: [
        {
          id: "b4_90_days",
          label: "Nach 90 Tagen B—M hat der Kunde …",
          help: "Mehrfachauswahl.",
          type: "multi",
          options: [
            { value: "Validierter Business Case mit Go/No-Go", label: "… einen validierten Business Case mit klarem Go/No-Go-Entscheid" },
            { value: "Produktiver KI-Pilot mit Nutzern im System", label: "… einen produktiven KI-Piloten mit Nutzern im System" },
            { value: "Funktionierendes MVP mit ersten Kunden", label: "… ein funktionierendes MVP mit ersten Kunden" },
            { value: "Neue operative Unit mit Umsatz", label: "… eine neue operative Unit mit Umsatz" },
            { value: "Konkrete Wachstumsroadmap mit Meilensteinen", label: "… eine konkrete Wachstumsroadmap mit Meilensteinen" },
          ],
        },
        {
          id: "b4_365_days",
          label: "Nach 365 Tagen …",
          help: "Mehrfachauswahl.",
          type: "multi",
          options: [
            { value: "Venture läuft als eigenständige Einheit", label: "… läuft das Venture als eigenständige Einheit" },
            { value: "Messbarer Top- oder Bottom-Line-Beitrag", label: "… trägt es messbar zum Top- oder Bottom-Line bei" },
            { value: "Kerngeschäftseinheit transformiert", label: "… ist die Kerngeschäftseinheit transformiert" },
            { value: "Skalierte Pipeline aufgebaut", label: "… hat der Kunde eine skalierte Pipeline aufgebaut" },
          ],
        },
        {
          id: "b4_numbers",
          label: "Welche Zahlen haben wir — und dürfen wir zeigen?",
          help: "z. B. durchschnittliche Time-to-Market, durchschnittlicher Revenue Impact, typischer Team-Aufbau, Exit-Multiples …",
          type: "textarea",
          placeholder: "Konkrete Kennzahlen, die wir belastbar belegen können.",
        },
      ],
    },
    {
      id: "block5",
      kind: "form",
      eyebrow: "Block 5 / 6",
      title: "Wie klingen wir?",
      intro:
        "Die Tonalität ist kein Designdetail. Sie entscheidet, ob sich der CEO verstanden fühlt, ob der Operating Partner uns ernst nimmt, ob der Bewerber sich bewirbt. Zwei Achsen.",
      fields: [
        {
          id: "b5_formality",
          label: "Formell ←→ Locker",
          type: "single",
          options: [
            { value: "Sehr formell (Sie Corporate distanziert)", label: "Sehr formell", hint: "Sie, Corporate, distanziert — passend für Vorstand, aber kühl" },
            { value: "Formell aber zugänglich", label: "Formell, aber zugänglich", hint: "Sie, klar, nahbar — unser Stil" },
            { value: "Locker-professionell (Du)", label: "Locker-professionell", hint: "Du in der Kommunikation — Macher-Vibe" },
            { value: "Kumpelhaft (salopp)", label: "Kumpelhaft", hint: "Ganz locker, salopp — passt nicht zum C-Level" },
          ],
        },
        {
          id: "b5_directness",
          label: "Vorsichtig ←→ Direkt",
          type: "single",
          options: [
            { value: "Vorsichtig (Konjunktive Qualifikationen)", label: "Vorsichtig", hint: "Viele Qualifikationen, Konjunktive — klassisch Beratung" },
            { value: "Ausgewogen (klare Aussagen begründet)", label: "Ausgewogen", hint: "Klare Aussagen, aber begründet" },
            { value: "Direkt und scharf (Meinung Kante)", label: "Direkt und scharf", hint: "Meinung, Haltung, Kante — Macher-Stil" },
            { value: "Provokativ (polarisierend)", label: "Provokativ", hint: "Absichtlich polarisierend — Risiko, aber memorable" },
          ],
        },
        {
          id: "b5_words_are",
          label: "Drei Wörter, die uns beschreiben",
          type: "text",
          placeholder: "z. B. direkt · pragmatisch · ambitioniert",
        },
        {
          id: "b5_words_arent",
          label: "Drei Wörter, die uns NICHT beschreiben",
          type: "text",
          placeholder: "z. B. beraterisch · buzzword-lastig · vorsichtig",
        },
      ],
    },
    {
      id: "block6",
      kind: "form",
      eyebrow: "Block 6 / 6",
      title: "Der Claim — ein Satz, der alles trägt",
      intro:
        "Der Hero-Claim auf der Landingpage. Fünf bis zehn Wörter, die alles Vorige auf den Punkt bringen. Er muss nicht clever sein — er muss wahr sein. Ein Satz, den jeder Partner sofort unterschreibt.",
      fields: [
        {
          id: "b6_claim_favorites",
          label: "Arbeitshypothesen — welche könnten funktionieren?",
          help: "Mehrfachauswahl.",
          type: "multi",
          options: [
            { value: "Wir bauen was als nächstes kommt", label: "„Wir bauen, was als nächstes kommt.“", hint: "Emotional, offen" },
            { value: "Vier Hebel ein Motor", label: "„Vier Hebel, ein Motor.“", hint: "Bereits in Verwendung, strukturell" },
            { value: "KI-nativ. Kommerziell. Kompromisslos umgesetzt.", label: "„KI-nativ. Kommerziell. Kompromisslos umgesetzt.“", hint: "Dreiklang" },
            { value: "Wir machen Unternehmen zukunftsfähig", label: "„Wir machen Unternehmen zukunftsfähig.“", hint: "Klassisch, aber generisch" },
            { value: "Wertschöpfung. KI-nativ. Umgesetzt.", label: "„Wertschöpfung. KI-nativ. Umgesetzt.“", hint: "Stichpunktartig" },
            { value: "Nicht Folien. Sondern Geschäft.", label: "„Nicht Folien. Sondern Geschäft.“", hint: "Anti-Berater-Haltung" },
          ],
        },
        {
          id: "b6_own_claim",
          label: "Dein eigener Claim-Vorschlag",
          help: "Was würdest du auf die Landingpage schreiben? Ein Satz.",
          type: "textarea",
          placeholder: "…",
        },
        {
          id: "b6_subline",
          label: "Subline / Erklärungssatz zum Claim",
          help: "Beispiel: „KI-native Umsetzungskraft für KMU und PE-Backed Unternehmen, die ihr Kerngeschäft transformieren und Neugeschäft bauen wollen.“",
          type: "textarea",
          placeholder: "…",
        },
      ],
    },
    {
      id: "review",
      kind: "review",
    },
    {
      id: "thanks",
      kind: "thanks",
    },
  ];

  /* ------------------------------------------------------------
     State
     ------------------------------------------------------------ */
  const state = {
    stepIndex: 0,
    answers: {},
    submitting: false,
    submitted: false,
    lastSavedAt: null,
  };

  const allFields = () => STEPS.flatMap((s) => s.fields || []);

  /* ------------------------------------------------------------
     Persistence (localStorage)
     ------------------------------------------------------------ */
  const loadDraft = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.submitted) {
        // Already completed on this device. Let them start over from review.
        state.submitted = true;
      }
      state.answers = data.answers || {};
      state.stepIndex = Math.min(data.stepIndex || 0, STEPS.length - 1);
      state.lastSavedAt = data.savedAt || null;
    } catch (e) {
      console.warn("Could not load draft:", e);
    }
  };

  let saveTimer = null;
  const saveDraft = () => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        const payload = {
          answers: state.answers,
          stepIndex: state.stepIndex,
          submitted: state.submitted,
          savedAt: new Date().toISOString(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        state.lastSavedAt = payload.savedAt;
        updateFooterMeta();
      } catch (e) {
        console.warn("Could not save draft:", e);
      }
    }, 250);
  };

  const clearDraft = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  };

  /* ------------------------------------------------------------
     Rendering
     ------------------------------------------------------------ */
  const app = document.getElementById("app");
  const footer = document.getElementById("footer");
  const btnBack = document.getElementById("btn-back");
  const btnNext = document.getElementById("btn-next");
  const progressSegments = document.getElementById("progress-segments");
  const progressLabel = document.getElementById("progress-label");
  const footerMeta = document.getElementById("footer-meta");

  const currentStep = () => STEPS[state.stepIndex];

  const isFieldVisible = (field) => {
    if (!field.visibleIf) return true;
    const { field: depField, equals } = field.visibleIf;
    return state.answers[depField] === equals;
  };

  const fieldValidationError = (field) => {
    if (!isFieldVisible(field)) return null;
    const val = state.answers[field.id];
    if (field.required) {
      if (val === undefined || val === null || val === "") {
        return "Pflichtfeld";
      }
      if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        return "Bitte eine gültige E-Mail-Adresse eintragen.";
      }
    }
    return null;
  };

  const render = () => {
    const step = currentStep();
    document.body.classList.toggle("is-intro", step.kind === "intro");
    app.innerHTML = "";
    const el = document.createElement("section");
    el.className = "q-step";
    if (step.kind === "intro") el.appendChild(renderIntro());
    else if (step.kind === "form") el.appendChild(renderFormStep(step));
    else if (step.kind === "review") el.appendChild(renderReview());
    else if (step.kind === "thanks") el.appendChild(renderThanks());
    app.appendChild(el);

    updateFooter();
    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const h = (tag, props = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") {
        node.addEventListener(k.slice(2).toLowerCase(), v);
      } else if (v === true) node.setAttribute(k, "");
      else if (v === false || v == null) { /* skip */ }
      else node.setAttribute(k, v);
    }
    const kids = Array.isArray(children) ? children : [children];
    for (const c of kids) {
      if (c == null || c === false) continue;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return node;
  };

  /* ---------- Intro screen ---------- */
  const renderIntro = () => {
    return h("div", { class: "q-intro-hero bm-on-dark" }, [
      h("div", { class: "q-kasane-layers bm-kasane-drift", "aria-hidden": "true" }),
      h("div", { class: "q-kasane-highlight", "aria-hidden": "true" }),
      h("div", { class: "q-kasane-noise", "aria-hidden": "true" }),
      h("div", { class: "q-intro-content" }, [
        h("p", { class: "q-eyebrow" }, "Leadership-Entscheidung · Pre-Work"),
        h("h1", { class: "q-display" }, "Positionierung 2026."),
        h("p", { class: "q-intro-body" },
          "Wir bauen die neue bridgemaker.com. Bevor wir Copy schreiben und den Build starten, definieren wir gemeinsam die Positionierung. Dieses Dokument stellt dir sechs offene Kernfragen."
        ),
        h("div", { style: "margin-top: var(--space-16);" }, [
          h("button", {
            class: "bm-btn bm-btn-primary bm-btn-lg",
            type: "button",
            onClick: () => { go(state.stepIndex + 1); },
          }, "Let’s go"),
        ]),
      ]),
    ]);
  };

  const hasAnyAnswers = () =>
    Object.keys(state.answers).some((k) => {
      const v = state.answers[k];
      return Array.isArray(v) ? v.length > 0 : v !== undefined && v !== null && v !== "";
    });

  /* ---------- Form step ---------- */
  const renderFormStep = (step) => {
    const wrap = h("div", {}, [
      h("p", { class: "q-eyebrow" }, step.eyebrow),
      h("h1", { class: "q-h1" }, step.title),
      step.intro ? h("p", { class: "q-body" }, step.intro) : null,
      h("span", { class: "q-accent-bar", style: "margin-top: var(--space-8)" }),
      h("div", { class: "q-fields", style: "margin-top: var(--space-2)" }, step.fields.map(renderField)),
    ]);
    return wrap;
  };

  const renderField = (field) => {
    if (!isFieldVisible(field)) return document.createComment("hidden");
    const fieldEl = h("div", { class: "q-field", "data-field": field.id });

    const labelEl = h("label", { class: "q-field-label", for: `f-${field.id}` }, field.label);
    fieldEl.appendChild(labelEl);
    if (field.help) fieldEl.appendChild(h("p", { class: "q-field-help" }, field.help));

    if (field.type === "text" || field.type === "email") {
      const input = h("input", {
        class: "q-input",
        id: `f-${field.id}`,
        type: field.type,
        placeholder: field.placeholder || "",
      });
      input.value = state.answers[field.id] || "";
      input.addEventListener("input", () => {
        state.answers[field.id] = input.value.trim();
        saveDraft();
        clearFieldError(fieldEl);
      });
      fieldEl.appendChild(input);
    } else if (field.type === "textarea") {
      const ta = h("textarea", {
        class: "q-textarea",
        id: `f-${field.id}`,
        placeholder: field.placeholder || "",
        rows: "5",
      });
      ta.value = state.answers[field.id] || "";
      ta.addEventListener("input", () => {
        state.answers[field.id] = ta.value;
        saveDraft();
        clearFieldError(fieldEl);
      });
      fieldEl.appendChild(ta);
    } else if (field.type === "single" || field.type === "multi") {
      fieldEl.appendChild(renderOptions(field));
      if (field.type === "multi" && field.max) {
        const hint = h("p", { class: "q-selection-hint" }, getSelectionHintText(field));
        hint.dataset.hint = field.id;
        fieldEl.appendChild(hint);
      }
    }
    return fieldEl;
  };

  const getSelectionHintText = (field) => {
    const selected = state.answers[field.id] || [];
    const count = selected.length;
    if (!field.max) return "";
    return count >= field.max
      ? `Maximal ${field.max} ausgewählt — entferne eine, um eine andere zu wählen.`
      : `${count} von max. ${field.max} ausgewählt.`;
  };

  const renderOptions = (field) => {
    const wrap = h("div", { class: "q-options", role: field.type === "single" ? "radiogroup" : "group" });
    const selected = field.type === "multi"
      ? (state.answers[field.id] || [])
      : state.answers[field.id];

    let surfaceIdx = 0;
    field.options.forEach((opt) => {
      if (opt.group) {
        wrap.appendChild(h("div", { class: "q-option-group", role: "presentation" }, opt.group));
        surfaceIdx = 0; // restart surface cycle after a group header for clean rhythm
        return;
      }
      const surface = OPTION_SURFACES[surfaceIdx % OPTION_SURFACES.length];
      surfaceIdx += 1;
      const isChecked = field.type === "multi"
        ? selected.includes(opt.value)
        : selected === opt.value;
      const isMaxed = field.type === "multi" && field.max && selected.length >= field.max && !isChecked;
      const row = h("label", {
        class: `q-option ${surface}${isChecked ? " is-selected" : ""}${isMaxed ? " is-disabled" : ""}`,
        "data-type": field.type === "multi" ? "checkbox" : "radio",
      }, [
        h("input", {
          type: field.type === "multi" ? "checkbox" : "radio",
          name: field.id,
          value: opt.value,
          checked: isChecked,
          disabled: isMaxed,
        }),
        h("span", { class: "q-option-indicator", "aria-hidden": "true" }),
        h("span", { class: "q-option-body" }, [
          h("span", { class: "q-option-label" }, opt.label),
          opt.hint ? h("span", { class: "q-option-hint" }, opt.hint) : null,
        ]),
      ]);
      row.addEventListener("click", (e) => {
        if (isMaxed) { e.preventDefault(); return; }
        if (field.type === "multi") {
          e.preventDefault();
          const cur = state.answers[field.id] || [];
          if (cur.includes(opt.value)) {
            state.answers[field.id] = cur.filter((v) => v !== opt.value);
          } else {
            if (field.max && cur.length >= field.max) return;
            state.answers[field.id] = [...cur, opt.value];
          }
          saveDraft();
          // Re-render just this field group
          rerenderField(field);
        } else {
          e.preventDefault();
          state.answers[field.id] = opt.value;
          saveDraft();
          rerenderField(field);
          // If this option reveals a conditional field, re-render whole step so reveal appears
          if (field.options.some((o) => o.reveals)) {
            render();
          }
        }
      });
      wrap.appendChild(row);
    });
    return wrap;
  };

  const rerenderField = (field) => {
    const old = app.querySelector(`[data-field="${field.id}"]`);
    if (!old) return;
    const fresh = renderField(field);
    old.replaceWith(fresh);
    // Update hint
    const hint = app.querySelector(`[data-hint="${field.id}"]`);
    if (hint && field.type === "multi" && field.max) {
      const text = getSelectionHintText(field);
      hint.textContent = text;
      hint.classList.toggle("is-max", (state.answers[field.id] || []).length >= field.max);
    }
  };

  const clearFieldError = (fieldEl) => {
    fieldEl.classList.remove("has-error");
    const err = fieldEl.querySelector(".q-field-error");
    if (err) err.remove();
  };

  /* ---------- Review screen ---------- */
  const renderReview = () => {
    const formSteps = STEPS.filter((s) => s.kind === "form");
    const wrap = h("div", {}, [
      h("p", { class: "q-eyebrow" }, "Review"),
      h("h1", { class: "q-h1" }, "Noch einmal drüberschauen."),
      h("p", { class: "q-body", style: "margin-bottom: var(--space-12)" },
        "Das hier geht gleich an Nils als deine Antwort für die Session. Bevor du abschickst: passt alles? Bearbeiten per Klick auf die jeweilige Sektion."),
      h("div", { class: "q-review-list" }, formSteps.map(renderReviewCard)),
      h("div", { style: "margin-top: var(--space-12); display: flex; gap: var(--space-3); flex-wrap: wrap;" }, [
        h("button", {
          class: "bm-btn bm-btn-primary bm-btn-lg",
          type: "button",
          disabled: state.submitting,
          onClick: submit,
        }, state.submitting ? "Wird gesendet …" : "Antworten abschicken"),
        h("button", {
          class: "bm-btn bm-btn-ghost bm-btn-lg",
          type: "button",
          onClick: () => go(state.stepIndex - 1),
        }, "Zurück"),
      ]),
    ]);
    return wrap;
  };

  const renderReviewCard = (step) => {
    const stepIdx = STEPS.indexOf(step);
    const card = h("div", { class: "q-review-card" }, [
      h("button", {
        class: "q-review-edit",
        type: "button",
        onClick: () => go(stepIdx),
      }, "Bearbeiten →"),
      h("h3", {}, step.title),
      h("dl", {}, step.fields.filter(isFieldVisible).flatMap(renderReviewField)),
    ]);
    return card;
  };

  const renderReviewField = (field) => {
    const val = state.answers[field.id];
    const dt = h("dt", {}, field.label);
    const dd = h("dd", {});
    if (field.type === "multi") {
      const arr = val || [];
      if (arr.length === 0) {
        dd.classList.add("is-empty");
        dd.textContent = "Keine Auswahl.";
      } else {
        arr.forEach((v) => {
          const opt = field.options.find((o) => o.value === v);
          dd.appendChild(h("span", { class: "q-review-pill" }, opt ? opt.label : v));
        });
      }
    } else if (field.type === "single") {
      if (!val) {
        dd.classList.add("is-empty");
        dd.textContent = "Keine Auswahl.";
      } else {
        const opt = field.options.find((o) => o.value === val);
        dd.appendChild(h("span", { class: "q-review-pill" }, opt ? opt.label : val));
      }
    } else {
      if (!val || !String(val).trim()) {
        dd.classList.add("is-empty");
        dd.textContent = "—";
      } else {
        dd.textContent = val;
        dd.style.whiteSpace = "pre-wrap";
      }
    }
    return [h("div", { class: "q-review-field" }, [dt, dd])];
  };

  /* ---------- Thanks screen ---------- */
  const renderThanks = () => {
    return h("div", { class: "q-thanks" }, [
      h("p", { class: "q-eyebrow", style: "color: var(--bm-purple); justify-content:center" }, "Eingegangen"),
      h("h1", { class: "q-display" }, "Danke."),
      h("p", { class: "q-intro-body" },
        "Deine Antworten sind im Leadership-Workspace. Nils sammelt alle fünf Partner-Antworten und führt sie in der nächsten Session zusammen."),
      h("div", { class: "q-thanks-actions" }, [
        h("a", {
          class: "bm-btn bm-btn-secondary bm-btn-lg",
          href: "mailto:nils.sanders@bridgemaker.com?subject=Positionierung%202026%20%E2%80%94%20Antworten%20eingereicht",
        }, "Nils eine Notiz schicken"),
      ]),
    ]);
  };

  /* ------------------------------------------------------------
     Navigation
     ------------------------------------------------------------ */
  const go = (idx) => {
    if (idx < 0 || idx >= STEPS.length) return;
    const from = currentStep();
    if (idx > state.stepIndex && from.kind === "form") {
      if (!validateStep(from)) return;
    }
    state.stepIndex = idx;
    saveDraft();
    render();
  };

  const validateStep = (step) => {
    let firstError = null;
    (step.fields || []).forEach((field) => {
      const err = fieldValidationError(field);
      if (err) {
        const fieldEl = app.querySelector(`[data-field="${field.id}"]`);
        if (fieldEl) {
          fieldEl.classList.add("has-error");
          if (!fieldEl.querySelector(".q-field-error")) {
            fieldEl.appendChild(h("p", { class: "q-field-error" }, err));
          }
          if (!firstError) firstError = fieldEl;
        }
      }
    });
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      toast("Bitte Pflichtfelder ausfüllen.");
      return false;
    }
    return true;
  };

  const updateFooter = () => {
    const step = currentStep();
    if (step.kind === "intro" || step.kind === "thanks") {
      footer.hidden = true;
      return;
    }
    footer.hidden = false;
    btnBack.style.visibility = state.stepIndex > 0 ? "visible" : "hidden";
    if (step.kind === "review") {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "inline-flex";
      const isLastFormStep = STEPS[state.stepIndex + 1]?.kind === "review";
      btnNext.innerHTML = isLastFormStep
        ? 'Zur Übersicht <span aria-hidden="true">→</span>'
        : 'Weiter <span aria-hidden="true">→</span>';
    }
    updateFooterMeta();
  };

  const updateFooterMeta = () => {
    if (!footerMeta) return;
    if (state.lastSavedAt) {
      const t = new Date(state.lastSavedAt);
      const hh = String(t.getHours()).padStart(2, "0");
      const mm = String(t.getMinutes()).padStart(2, "0");
      footerMeta.innerHTML = `<span class="is-saved">Zwischenstand gespeichert · ${hh}:${mm}</span>`;
    } else {
      footerMeta.textContent = "Zwischenstand wird automatisch gespeichert";
    }
  };

  const updateProgress = () => {
    const step = currentStep();
    const fillingSteps = STEPS.filter((s) => s.kind === "form" || s.kind === "review");
    const total = fillingSteps.length;
    const currentIdx = fillingSteps.indexOf(step);

    progressSegments.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const seg = document.createElement("div");
      seg.className = "q-progress-segment";
      const isDone = step.kind === "thanks" || (currentIdx >= 0 && i <= currentIdx);
      if (isDone) seg.classList.add("is-done");
      if (i === currentIdx) seg.classList.add("is-current");
      progressSegments.appendChild(seg);
    }

    if (step.kind === "intro") progressLabel.textContent = "Bereit?";
    else if (step.kind === "thanks") progressLabel.textContent = "Fertig";
    else progressLabel.textContent = `Schritt ${currentIdx + 1} von ${total}`;
  };

  /* ------------------------------------------------------------
     Submission
     ------------------------------------------------------------ */
  const submit = async () => {
    // Validate all form steps
    const formSteps = STEPS.filter((s) => s.kind === "form");
    for (const step of formSteps) {
      for (const field of step.fields) {
        const err = fieldValidationError(field);
        if (err) {
          toast(`„${field.label}“ fehlt — zurück zu ${step.title}.`);
          go(STEPS.indexOf(step));
          return;
        }
      }
    }

    state.submitting = true;
    render();

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: state.answers }),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || `HTTP ${res.status}`);
      }
      state.submitting = false;
      state.submitted = true;
      state.stepIndex = STEPS.findIndex((s) => s.kind === "thanks");
      saveDraft();
      // Keep draft around for "I already submitted" UX, but flag it
      render();
    } catch (e) {
      state.submitting = false;
      console.error("Submit failed:", e);
      toast("Senden fehlgeschlagen. Versuch's gleich nochmal oder schreib Nils.");
      render();
    }
  };

  /* ------------------------------------------------------------
     Toast
     ------------------------------------------------------------ */
  let toastTimer = null;
  const toast = (msg) => {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 3600);
  };

  /* ------------------------------------------------------------
     Wire up
     ------------------------------------------------------------ */
  btnNext.addEventListener("click", () => go(state.stepIndex + 1));
  btnBack.addEventListener("click", () => go(state.stepIndex - 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.metaKey) {
      e.preventDefault();
      btnNext.click();
    }
  });

  loadDraft();
  render();
})();
