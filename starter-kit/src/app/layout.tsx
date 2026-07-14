import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Md3Provider } from "@/components/md3/md3-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bridgemaker Starter-Kit",
  description: "Wir bauen Ventures, die wirken.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: Browser-Extensions (z. B. GA-Opt-out) stempeln
    // Attribute aufs <html>, bevor React hydriert — nur dieses Element betroffen.
    <html
      lang="de"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Md3Provider>{children}</Md3Provider>
      </body>
    </html>
  );
}
