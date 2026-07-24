import Image from "next/image";
import Link from "next/link";

type NavigationProject = { href: string; title: string };
type ProjectImage = { src: string; caption?: string; layout?: "full" | "half" | "portrait" };

type Props = {
  title: string;
  question: string;
  location: string;
  year: string;
  status: string;
  intro: string;
  strategy: string;
  hero: string;
  images: Array<string | ProjectImage>;
  drawing?: string;
  download?: string;
  previous: NavigationProject;
  next: NavigationProject;
  accent?: string;
  typology: string;
  services: string[];
  team?: string;
  surface?: string;
};

export default function ProjectPage(p: Props) {
  const facts: Array<[string, string]> = [
    ["Proyecto", p.title],
    ["Ubicación", p.location],
    ["Año", p.year],
    ["Estado", p.status],
    ["Tipología", p.typology],
    ...(p.surface ? ([["Superficie", p.surface]] as Array<[string, string]>) : []),
    ...(p.team ? ([["Equipo", p.team]] as Array<[string, string]>) : []),
    ["Servicios", p.services.join(" · ")],
  ];

  const gallery = p.images.map((image, index): ProjectImage => {
    if (typeof image !== "string") return image;
    return {
      src: image,
      caption: `${String(index + 1).padStart(2, "0")} · ${p.title}`,
      layout: index % 3 === 0 ? "full" : "half",
    };
  });

  return (
    <main className={`projectPage editorialProject projectExperience ${p.accent || ""}`}>
      <section className="projectQuestion editorialQuestion" id="inicio">
        <div>
          <p className="eyebrow">RAStudio · Proyecto</p>
          <span>{p.location} · {p.year}</span>
        </div>
        <h1>{p.question}</h1>
        <p className="scrollCue">Recorrer el proyecto ↓</p>
      </section>

      <nav className="projectIndex" aria-label={`Índice de ${p.title}`}>
        <span>{p.title}</span>
        <div>
          <a href="#idea">Idea</a>
          <a href="#estrategia">Estrategia</a>
          {p.drawing && <a href="#documento">Documento</a>}
          <a href="#galeria">Imágenes</a>
          <a href="#informacion">Información</a>
        </div>
      </nav>

      <section className="projectHero editorialHero">
        <Image src={p.hero} alt={p.title} fill priority sizes="100vw" className="cover" />
        <div className="projectHeroCaption"><span>01</span><span>{p.title}</span></div>
      </section>

      <section className="projectIntro editorialIntro" id="idea">
        <div>
          <p className="eyebrow">01 · Idea</p>
          <h2>{p.title}</h2>
        </div>
        <p className="lead">{p.intro}</p>
      </section>

      <section className="projectChapter editorialChapter" id="estrategia">
        <p className="eyebrow">02 · Estrategia</p>
        <h2>{p.strategy}</h2>
      </section>

      {p.drawing && (
        <section className="drawingSection editorialDrawing" id="documento">
          <div className="drawingLabel">
            <p className="eyebrow">03 · Documento</p>
            <span>El proyecto se verifica a través del dibujo.</span>
          </div>
          <div className="drawingMedia">
            <Image src={p.drawing} alt={`Dibujo técnico de ${p.title}`} fill sizes="100vw" className="contain" />
          </div>
          {p.download && <a href={p.download} target="_blank" rel="noreferrer">Abrir plano completo ↗</a>}
        </section>
      )}

      <section className="projectGallery editorialGallery projectSequence" id="galeria">
        {gallery.map((image, index) => (
          <figure className={image.layout || (index % 3 === 0 ? "full" : "half")} key={`${image.src}-${index}`}>
            <Image
              src={image.src}
              alt={`${p.title}, imagen ${index + 1}`}
              fill
              sizes={image.layout === "full" ? "100vw" : "50vw"}
              className="cover"
            />
            <figcaption>{image.caption || `${String(index + 1).padStart(2, "0")} · ${p.title}`}</figcaption>
          </figure>
        ))}
      </section>

      <section className="projectData" id="informacion">
        <div className="projectDataIntro">
          <p className="eyebrow">Ficha del proyecto</p>
          <h2>Información</h2>
        </div>
        <div className="projectDataGrid">
          {facts.map(([label, value]) => (
            <div key={label}><span>{label}</span><p>{value}</p></div>
          ))}
        </div>
      </section>

      <nav className="projectNavigation" aria-label="Navegación entre proyectos">
        <Link href={p.previous.href} className="projectNavPrevious">
          <span className="eyebrow">← Proyecto anterior</span>
          <strong>{p.previous.title}</strong>
        </Link>
        <Link href={p.next.href} className="projectNavNext">
          <span className="eyebrow">Siguiente proyecto →</span>
          <strong>{p.next.title}</strong>
        </Link>
      </nav>
    </main>
  );
}
