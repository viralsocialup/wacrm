import type { MetadataRoute } from "next";

// Web App Manifest — makes the CRM installable on Android/desktop Chrome
// ("Install app") so it opens full-screen with its own icon, like a native app.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "wacrm — WhatsApp CRM",
    short_name: "wacrm",
    description: "Shared WhatsApp inbox, contacts, pipelines and broadcasts.",
    start_url: "/inbox",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#020617",
    theme_color: "#020617",
    icons: [
      { src: "/pwa-icon/192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/pwa-icon/512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/pwa-icon/512?maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Inbox", url: "/inbox" },
      { name: "Contacts", url: "/contacts" },
    ],
  };
}
