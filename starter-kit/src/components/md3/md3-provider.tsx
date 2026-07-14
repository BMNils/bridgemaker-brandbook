"use client";

import { useEffect } from "react";
import { registerMd3 } from "./register";

/**
 * Lädt die MD3-Web-Components clientseitig nach. Einmal im Root-Layout
 * um die App legen — danach stehen alle md-*-Tags überall zur Verfügung.
 */
export function Md3Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void registerMd3();
  }, []);

  return <>{children}</>;
}
