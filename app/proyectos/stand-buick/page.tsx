import type { Metadata } from "next";
import ProjectPage from "../../components/ProjectPage";
import { projectBySlug } from "@/content/projects";

export const metadata: Metadata = {
  title: "Stand Buick · RAStudio",
  description: "Traducción de esquemas preliminares a una propuesta espacial y visualización 3D para un stand exterior en México.",
};

export default function Page() {
  return <ProjectPage {...projectBySlug["stand-buick"]} />;
}
