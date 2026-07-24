import ProjectPage from "../../components/ProjectPage";
import { projectBySlug } from "@/content/projects";

export default function Page() {
  return <ProjectPage {...projectBySlug["padl"]} />;
}
