import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { journalEntries } from "@/content/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ra-studio-mc.vercel.app";
  const routes = ["", "/work", "/practice", "/lab", "/journal", "/martin-cos", "/contacto", ...projects.map((p) => `/proyectos/${p.slug}`), ...journalEntries.map((e) => `/journal/${e.slug}`)];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route.startsWith("/journal") ? "monthly" : "monthly", priority: route === "" ? 1 : .8 }));
}
