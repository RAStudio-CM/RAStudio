import type { Project } from "@/content/projects";
import DrawingGallery from "@/components/project/DrawingGallery";
import ProjectFacts from "@/components/project/ProjectFacts";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectNavigation from "@/components/project/ProjectNavigation";

export default function ProjectPage(project: Project) {
  const facts: Array<[string, string]> = [
    ["Proyecto", project.title],
    ["Ubicación", project.location],
    ["Año", project.year],
    ["Estado", project.status],
    ["Tipología", project.typology],
    ...(project.surface ? [["Superficie", project.surface] as [string, string]] : []),
    ...(project.team ? [["Equipo", project.team] as [string, string]] : []),
    ["Servicios", project.services.join(" · ")],
  ];

  return <main className={`projectPage editorialProject projectExperience ${project.accent || ""}`}>
    <section className="projectQuestion editorialQuestion" id="inicio">
      <div><p className="eyebrow">RAStudio · Proyecto</p><span>{project.location} · {project.year}</span></div>
      <h1>{project.question}</h1>
      <p className="scrollCue">Recorrer el proyecto ↓</p>
    </section>

    <nav className="projectIndex" aria-label={`Índice de ${project.title}`}>
      <span>{project.title}</span>
      <div>
        <a href="#idea">Idea</a><a href="#estrategia">Estrategia</a>
        {project.drawing && <a href="#documento">Documento</a>}
        <a href="#galeria">Imágenes</a><a href="#informacion">Información</a>
      </div>
    </nav>

    <ProjectHero title={project.title} image={project.hero} />

    <section className="projectIntro editorialIntro" id="idea">
      <div><p className="eyebrow">01 · Idea</p><h2>{project.title}</h2></div>
      <p className="lead">{project.intro}</p>
    </section>

    <section className="projectChapter editorialChapter" id="estrategia">
      <p className="eyebrow">02 · Estrategia</p><h2>{project.strategy}</h2>
    </section>

    {project.drawing && <DrawingGallery title={project.title} drawing={project.drawing} download={project.download} />}
    <ProjectGallery title={project.title} images={project.images} />
    <ProjectFacts facts={facts} />
    <ProjectNavigation previous={project.previous} next={project.next} />
  </main>;
}
