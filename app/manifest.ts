import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RAStudio — Architectural Visualization",
    short_name: "RAStudio",
    description: "Visualización arquitectónica y dirección de arte desde Buenos Aires para el mundo.",
    start_url: "/",
    display: "standalone",
    background_color: "#090909",
    theme_color: "#090909",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
