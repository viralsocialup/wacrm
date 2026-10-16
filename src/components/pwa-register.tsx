"use client";

import { useEffect } from "react";

// Registers the service worker so the browser offers "Install app".
// Production only — a service worker in `next dev` causes confusing reloads.
export function PwaRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* non-fatal: app works normally without it */
    });
  }, []);
  return null;
}
