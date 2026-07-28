import type { Metadata } from "next";
import ProjectPage from "../../components/ProjectPage";
import { projectBySlug } from "@/content/projects";

export const metadata: Metadata = {
  title: "Museo del Agua · RAStudio",
  description: "Museo de interpretación en Mar del Plata: una experiencia inmersiva construida con agua, luz, reflejos y movimiento.",
};

export default function Page() {
  return <ProjectPage {...projectBySlug["museo-del-agua"]} />;
}
