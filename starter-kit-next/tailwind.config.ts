import type { Config } from "tailwindcss";
import preset from "../tokens/tailwind.preset";

/**
 * Tailwind config for Bridgemaker Next.js starter.
 * All brand theme values live in `../tokens/tailwind.preset.ts` —
 * this file only declares content paths.
 */
const config: Config = {
  presets: [preset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
};

export default config;
