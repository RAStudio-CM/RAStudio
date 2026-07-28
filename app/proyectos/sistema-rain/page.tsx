import type { Metadata } from "next";
import ProjectPage from "../../components/ProjectPage";
import { projectBySlug } from "@/content/projects";

export const metadata: Metadata = {
  title: "Sistema RAIN · RAStudio",
  description: "Investigación y desarrollo de un sistema de captación pluvial integrado a carpinterías y encuentros de fachada.",
};

export default function Page() {
  return <ProjectPage {...projectBySlug["sistema-rain"]} />;
}
