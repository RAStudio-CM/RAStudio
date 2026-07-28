import type { Metadata } from "next";
import ProjectPage from "../../components/ProjectPage";
import { projectBySlug } from "@/content/projects";

export const metadata: Metadata = {
  title: "NDP150 · RAStudio",
  description: "Visualización comercial de una vivienda actualmente en construcción en Nortes del Pilar.",
};

export default function Page() {
  return <ProjectPage {...projectBySlug["ndp150"]} />;
}
