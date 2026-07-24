import Link from "next/link";
import type { ProjectNavigation as NavigationProject } from "@/content/projects";

export default function ProjectNavigation({ previous, next }: { previous: NavigationProject; next: NavigationProject }) {
  return <nav className="projectNavigation" aria-label="Navegación entre proyectos">
    <Link href={previous.href} className="projectNavPrevious">
      <span className="eyebrow">← Proyecto anterior</span><strong>{previous.title}</strong>
    </Link>
    <Link href={next.href} className="projectNavNext">
      <span className="eyebrow">Siguiente proyecto →</span><strong>{next.title}</strong>
    </Link>
  </nav>;
}
