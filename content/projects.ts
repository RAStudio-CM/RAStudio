export type ProjectNavigation = { href: string; title: string };
export type ProjectImage = {
  src: string;
  caption?: string;
  layout?: "full" | "half" | "portrait";
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  question: string;
  location: string;
  year: string;
  status: string;
  typology: string;
  surface?: string;
  team?: string;
  services: string[];
  intro: string;
  strategy: string;
  hero: string;
  cover: string;
  drawing?: string;
  download?: string;
  images: ProjectImage[];
  accent?: string;
  previous: ProjectNavigation;
  next: ProjectNavigation;
};

export const projects: Project[] = [
  {
    slug: "monroe-plaza",
    number: "01",
    title: "Monroe Plaza",
    question: "¿Cómo borrar el límite entre lo público y lo privado?",
    location: "Buenos Aires",
    year: "2026",
    status: "Proyecto académico · Taller VIII",
    typology: "Residencial · Usos mixtos",
    surface: "—",
    team: "Martín Cos · RAStudio",
    services: ["Arquitectura", "Documentación", "Representación"],
    intro: "La propuesta libera los perímetros mediante un núcleo central y transforma la planta baja en una continuidad del espacio urbano. La torre deja de funcionar como objeto aislado para construir una relación más abierta con la ciudad.",
    strategy: "Concentrar la estructura y las circulaciones para liberar el borde, multiplicar las visuales y permitir que el espacio público atraviese el conjunto.",
    hero: "/images/projects/monroe-hero.webp",
    cover: "/images/projects/monroe-01.webp",
    drawing: "/images/projects/monroe-plan.webp",
    download: "/files/monroe-planta-baja.pdf",
    images: [
      { src: "/images/projects/monroe-process.webp", caption: "04 · Sistema y proceso", layout: "full" },
      { src: "/images/projects/monroe-section.webp", caption: "05 · Sección", layout: "half" },
      { src: "/images/projects/monroe-01.webp", caption: "06 · Relación urbana", layout: "half" },
      { src: "/images/projects/monroe-02.webp", caption: "07 · La torre como marco", layout: "full" },
      { src: "/images/projects/monroe-interior.webp", caption: "08 · Espacio doméstico", layout: "portrait" },
      { src: "/images/projects/monroe-detail.webp", caption: "09 · Materia y detalle", layout: "half" },
    ],
    previous: { href: "/proyectos/beazley-525", title: "Beazley 525" },
    next: { href: "/proyectos/escuela-mugica", title: "Escuela Padre Carlos Mugica" },
  },
  {
    slug: "escuela-mugica",
    number: "02",
    title: "Escuela Padre Carlos Mugica",
    question: "¿Puede una escuela convertirse en el corazón de un barrio?",
    location: "Barrio Padre Carlos Mugica, CABA",
    year: "2025",
    status: "1° Premio · Universidad de Palermo",
    typology: "Educación · Equipamiento público",
    team: "Martín Cos · RAStudio",
    services: ["Arquitectura", "Investigación", "Representación"],
    intro: "La escuela se concibe como infraestructura social: un edificio capaz de alojar educación y, al mismo tiempo, ofrecer servicios y espacios de encuentro para el barrio.",
    strategy: "Construir un umbral activo entre lo público y lo privado, haciendo que patios, circulaciones y programas compartidos funcionen como una extensión del tejido comunitario.",
    hero: "/images/projects/escuela-1.webp",
    cover: "/images/projects/escuela-1.webp",
    drawing: "/images/projects/escuela-plan.webp",
    download: "/files/escuela-planta.pdf",
    images: [
      { src: "/images/projects/escuela-2.webp", caption: "04 · Patio como espacio común", layout: "full" },
      { src: "/images/projects/escuela-3.webp", caption: "05 · Umbral urbano", layout: "half" },
      { src: "/images/projects/escuela-4.webp", caption: "06 · Infraestructura social", layout: "half" },
    ],
    accent: "school",
    previous: { href: "/proyectos/monroe-plaza", title: "Monroe Plaza" },
    next: { href: "/proyectos/padl", title: ".PADL" },
  },
  {
    slug: "padl",
    number: "03",
    title: ".PADL",
    question: "¿Cómo convertir un terreno restrictivo en la fortaleza del proyecto?",
    location: "Calle Concepción, CABA",
    year: "2026",
    status: "Proyecto ejecutivo · obra prevista",
    typology: "Deportivo · Comercial",
    surface: "Lote 120 × 17 m",
    team: "RAStudio · PADelCO",
    services: ["Arquitectura", "Proyecto ejecutivo", "Representación"],
    intro: "Un lote de 120 metros de largo por apenas 17 de ancho organiza un complejo de pádel y usos mixtos para PADelCO. La geometría extrema deja de ser un obstáculo y se transforma en la identidad espacial del conjunto.",
    strategy: "Trabajar la profundidad como secuencia: acceso, actividad, pausa y encuentro se encadenan para producir una experiencia continua y legible.",
    hero: "/images/projects/padl-1.webp",
    cover: "/images/projects/padl-1.webp",
    drawing: "/images/projects/padl-plan.webp",
    download: "/files/padl-planta.pdf",
    images: [
      { src: "/images/projects/padl-2.webp", caption: "04 · Profundidad y secuencia", layout: "full" },
      { src: "/images/projects/padl-3.webp", caption: "05 · Actividad", layout: "half" },
      { src: "/images/projects/padl-4.webp", caption: "06 · Encuentro", layout: "half" },
    ],
    accent: "padl",
    previous: { href: "/proyectos/escuela-mugica", title: "Escuela Padre Carlos Mugica" },
    next: { href: "/proyectos/beazley-525", title: "Beazley 525" },
  },
  {
    slug: "beazley-525",
    number: "04",
    title: "Beazley 525",
    question: "¿Cómo mejorar un proyecto sin empezar desde cero?",
    location: "Santos Lugares",
    year: "2026",
    status: "En construcción · Charito SRL",
    typology: "Vivienda multifamiliar",
    team: "RAStudio · Charito SRL",
    services: ["Revisión de proyecto", "Documentación", "Representación"],
    intro: "RAStudio recibió un proyecto aprobado y desarrolló una revisión integral para optimizar su organización, expresión y comunicación sin interrumpir el avance administrativo y constructivo.",
    strategy: "Detectar las decisiones que podían mejorar el conjunto, intervenir con precisión y coordinar esas transformaciones con una obra que ya estaba en marcha.",
    hero: "/images/projects/beazley-living.webp",
    cover: "/images/projects/beazley-living.webp",
    images: [
      { src: "/images/projects/beazley-bedroom.webp", caption: "03 · Dormitorio", layout: "full" },
      { src: "/images/projects/beazley-bathroom.webp", caption: "04 · Materialidad", layout: "half" },
      { src: "/images/projects/beazley-dining.webp", caption: "05 · Vida doméstica", layout: "half" },
    ],
    accent: "beazley",
    previous: { href: "/proyectos/padl", title: ".PADL" },
    next: { href: "/proyectos/monroe-plaza", title: "Monroe Plaza" },
  },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;
