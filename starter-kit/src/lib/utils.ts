import { clsx, type ClassValue } from "clsx";

/** Klassen zusammenfügen — bewusst ohne tailwind-merge (kein shadcn mehr). */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
