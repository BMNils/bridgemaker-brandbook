/**
 * Registriert die @material/web-Komponenten des Starter-Kits.
 *
 * Web Components brauchen den Browser (Lit erweitert HTMLElement beim
 * Modul-Load) — deshalb dynamische Imports statt Top-Level-Imports:
 * SSR rendert die md-*-Tags als unbekannte Elemente, im Browser
 * upgraden sie nach der Registrierung.
 */
let loaded = false;

export async function registerMd3(): Promise<void> {
  if (loaded || typeof window === "undefined") return;
  loaded = true;

  await Promise.all([
    // Buttons
    import("@material/web/button/filled-button.js"),
    import("@material/web/button/filled-tonal-button.js"),
    import("@material/web/button/outlined-button.js"),
    import("@material/web/button/text-button.js"),
    import("@material/web/iconbutton/icon-button.js"),
    // Formularfelder
    import("@material/web/textfield/outlined-text-field.js"),
    import("@material/web/select/outlined-select.js"),
    import("@material/web/select/select-option.js"),
    import("@material/web/checkbox/checkbox.js"),
    import("@material/web/switch/switch.js"),
    import("@material/web/radio/radio.js"),
    import("@material/web/slider/slider.js"),
    // Navigation & Struktur
    import("@material/web/tabs/tabs.js"),
    import("@material/web/tabs/primary-tab.js"),
    import("@material/web/tabs/secondary-tab.js"),
    import("@material/web/menu/menu.js"),
    import("@material/web/menu/menu-item.js"),
    import("@material/web/list/list.js"),
    import("@material/web/list/list-item.js"),
    import("@material/web/divider/divider.js"),
    // Chips
    import("@material/web/chips/chip-set.js"),
    import("@material/web/chips/assist-chip.js"),
    import("@material/web/chips/filter-chip.js"),
    // Feedback
    import("@material/web/dialog/dialog.js"),
    import("@material/web/progress/linear-progress.js"),
    import("@material/web/progress/circular-progress.js"),
  ]);
}
