import type { Metadata } from "next";
import ProjectPage from "../../components/ProjectPage";
import { projectBySlug } from "@/content/projects";

export const metadata: Metadata = {
  title: "Casa DAS · RAStudio",
  description: "Vivienda unifamiliar desarrollada como una secuencia continua entre interior, jardín y estructura.",
};

export default function Page() {
  return <ProjectPage {...projectBySlug["casa-das"]} />;
}
