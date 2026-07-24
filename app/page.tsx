import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import Eyebrow from "@/components/ui/Eyebrow";

const projectIdeas: Record<string, string> = {
  "monroe-plaza": "Disolver el límite entre lo público y lo privado.",
  "escuela-mugica": "Arquitectura como infraestructura social.",
  padl: "Transformar la restricción en identidad.",
  "beazley-525": "Intervenir con precisión sobre lo existente.",
};

export default function Home() {
  return <main className="v4Home">
    <section className="v4Hero">
      <Image src="/images/projects/monroe-hero.webp" alt="Arquitectura de RAStudio" fill priority sizes="100vw" className="cover" />
      <div className="v4Shade" /><div className="v4HeroTop"><span>RAStudio</span><span>Buenos Aires · Argentina</span></div>
      <div className="v4HeroCopy"><h1>Architecture is the art<br />of making ideas <em>inhabitable.</em></h1><div><p>Arquitectura · Representación · Construcción</p><a href="#work">Recorrer ↓</a></div></div>
    </section>

    <section className="v4Statement"><Eyebrow>Práctica de arquitectura</Eyebrow><h2>Diseñamos proyectos donde la idea, el documento y la obra forman parte de una misma conversación.</h2><div><p>RAStudio es una práctica dirigida por Martín Cos. Trabajamos desde la observación inicial hasta la comunicación final, integrando arquitectura, documentación, representación y construcción.</p><Link href="/practice">Conocer la práctica ↗</Link></div></section>

    <section id="work" className="v4Work"><div className="v4SectionHead"><Eyebrow>01 · Work</Eyebrow><h2>Proyectos seleccionados</h2></div>
      {projects.map((project) => <Link className="v4Project" href={`/proyectos/${project.slug}`} key={project.slug}>
        <div className="v4ProjectMedia"><Image src={project.hero} alt={project.title} fill sizes="100vw" className="cover" /></div>
        <div className="v4ProjectMeta"><span>{project.number}</span><div><p>{project.typology} · {project.location}</p><h3>{project.title}</h3><small>{projectIdeas[project.slug]}</small></div><b>↗</b></div>
      </Link>)}
    </section>

    <section className="v4Process"><div className="v4SectionHead"><Eyebrow>02 · Process</Eyebrow><h2>Una secuencia continua de decisiones.</h2></div><div>{["Observar", "Preguntar", "Diseñar", "Documentar", "Construir", "Comunicar"].map((x, i) => <article key={x}><span>0{i + 1}</span><h3>{x}</h3></article>)}</div><Link href="/practice">Ver el proceso completo ↗</Link></section>

    <section className="v4Martin"><div className="v4MartinImage"><Image src="/images/martin/desk.webp" alt="Martín Cos trabajando" fill sizes="50vw" className="cover" /></div><div><Eyebrow>03 · Martín Cos</Eyebrow><h2>Una práctica personal, técnica y en constante evolución.</h2><p>Más de siete años desarrollando proyectos entre el diseño, la documentación, la obra y nuevas herramientas de representación.</p><Link href="/martin-cos">Conocer la trayectoria ↗</Link></div></section>
    <section className="v4Closing"><Eyebrow>04 · Contacto</Eyebrow><h2>Toda arquitectura comienza con una conversación.</h2><Link href="/contacto">Comenzar un proyecto <span>↗</span></Link></section>
  </main>;
}
