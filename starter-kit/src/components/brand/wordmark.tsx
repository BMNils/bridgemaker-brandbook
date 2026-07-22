import { cn } from "@/lib/utils";

/**
 * Bridgemaker Wortmarke — als SVG-Asset, nie handgecodet.
 * Der Gedankenstrich in der Wortmarke IST das Logo: die direkte
 * Verbindung zweier Welten (Corporate ↔ Startup). guidelines/01.
 *
 * Header-Regel: Wortmarke immer, 20px hoch im 64px-Header;
 * weiße Variante auf Dunkel.
 */
export function Wordmark({
  height = 20,
  onDark = false,
  className,
}: {
  /** Höhe in px — 20 im Header, größer nur in Hero-/Deck-Kontexten. */
  height?: number;
  onDark?: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={onDark ? "/logos/wordmark-white.svg" : "/logos/wordmark-black.svg"}
      alt="Bridgemaker"
      style={{ height, width: "auto" }}
      className={cn("select-none", className)}
      draggable={false}
    />
  );
}

/**
 * B—M-Monogramm — NUR für App-Icon, Avatar, Foto-Stempel (ab ~120 px).
 * Das Browser-Favicon ist NICHT das Monogramm, sondern nur der
 * Gedankenstrich auf schwarzem Quadrat — liegt fertig als
 * src/app/icon.png (Next serviert es automatisch als Favicon).
 * Nie im Header, nie als Logo-Ersatz (guidelines/01).
 */
export function Monogram({
  size = 40,
  variant = "blackbox",
  className,
}: {
  size?: number;
  variant?: "black" | "white" | "blackbox" | "whitebox";
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/logos/monogram-${variant}.svg`}
      alt="Bridgemaker Monogramm"
      style={{ width: size, height: size }}
      className={cn("select-none", className)}
      draggable={false}
    />
  );
}
