import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Observar",
    text: "Comprender el lugar, sus tiempos, flujos y oportunidades antes de dibujar una respuesta.",
    image: "/images/projects/escuela-1.webp",
    alt: "Implantación urbana de la Escuela Padre Carlos Mugica",
  },
  {
    number: "02",
    title: "Preguntar",
    text: "Definir el problema correcto. Cada proyecto comienza con una pregunta precisa.",
    image: "/images/projects/escuela-plan.webp",
    alt: "Planta de la Escuela Padre Carlos Mugica",
  },
  {
    number: "03",
    title: "Diseñar",
    text: "Explorar alternativas mediante croquis, diagramas, plantas, cortes y modelos.",
    image: "/images/projects/monroe-process.webp",
    alt: "Axonométrica de Monroe Plaza",
  },
  {
    number: "04",
    title: "Documentar",
    text: "Convertir una intención espacial en información coordinada, medible y construible.",
    image: "/images/projects/monroe-plan.webp",
    alt: "Documentación técnica de Monroe Plaza",
  },
  {
    number: "05",
    title: "Construir",
    text: "Acompañar la materialización, resolver contingencias y proteger la idea durante la obra.",
    image: "/images/projects/beazley-bedroom.webp",
    alt: "Proyecto Beazley 525",
  },
  {
    number: "06",
    title: "Comunicar",
    text: "Hacer visible el proyecto con claridad mediante imágenes, relatos y presentaciones.",
    image: "/images/projects/beazley-living.webp",
    alt: "Visualización interior de Beazley 525",
  },
];

export default function Practice() {
  return (
    <main>
      <section className="pageHero darkHero">
        <p className="eyebrow">02 · Practice</p>
        <h1>
          Diseñar es
          <br />
          <em>tomar decisiones.</em>
        </h1>
        <p>
          RAStudio trabaja desde la idea hasta la comunicación del proyecto,
          entendiendo cada etapa como parte de un único proceso.
        </p>
      </section>

      <section className="practiceEditorial">
        {steps.map((step) => (
          <article key={step.title}>
            <span>{step.number}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
            <figure className="practiceMedia">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="(max-width: 800px) 90vw, 70vw"
                className="practiceImage"
              />
            </figure>
          </article>
        ))}
      </section>
    </main>
  );
}
