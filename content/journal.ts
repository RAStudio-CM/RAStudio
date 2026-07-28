export type JournalBlock =
  | { type: "text"; heading?: string; body: string }
  | { type: "image"; src: string; alt: string; caption?: string; layout?: "wide" | "portrait" }
  | { type: "quote"; body: string };

export type JournalEntry = {
  slug: string;
  number: string;
  title: string;
  deck: string;
  category: "Concept" | "Research" | "Process" | "Visualization" | "Thoughts";
  projectSlug?: string;
  projectTitle?: string;
  cover: string;
  featured?: boolean;
  keywords: string[];
  blocks: JournalBlock[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "entrar-al-mar-sin-mojarse",
    number: "J01",
    title: "Entrar al mar sin mojarse.",
    deck: "El Museo del Agua como experiencia sensible antes que como colección de objetos.",
    category: "Concept",
    projectSlug: "museo-del-agua",
    projectTitle: "Museo del Agua",
    cover: "/images/projects/museo-4.webp",
    featured: true,
    keywords: ["agua", "mar", "museo", "experiencia", "recorrido", "luz"],
    blocks: [
      { type: "text", body: "El punto de partida no fue diseñar un museo sobre el agua, sino preguntarnos si la arquitectura podía producir una experiencia tan sensible y tangible como el mar. La respuesta no podía depender solamente de vitrinas, textos o piezas expuestas: debía aparecer en el recorrido." },
      { type: "image", src: "/images/projects/museo-axo.webp", alt: "Axonométrica del Museo del Agua", caption: "El edificio se organiza alrededor de un vacío acuático central." },
      { type: "text", heading: "El recorrido como contenido", body: "Los cambios de altura, los reflejos, el sonido y los filtros cromáticos convierten cada desplazamiento en una forma de interpretación. El visitante no observa el agua desde afuera: construye una relación gradual con ella." },
      { type: "quote", body: "La arquitectura no representa el mar. Construye las condiciones para sentirlo." },
      { type: "image", src: "/images/projects/museo-6.webp", alt: "Interior del Museo del Agua con filtros de color", caption: "Color, sombra y movimiento modifican la percepción del espacio." },
      { type: "text", heading: "Un horizonte interior", body: "El gran vacío central conecta los programas y permite que el agua aparezca desde múltiples posiciones. La experiencia culmina en la terraza, donde el recorrido vuelve a encontrarse con el horizonte real de Mar del Plata." },
    ],
  },
  {
    slug: "una-ventana-tambien-puede-ser-infraestructura",
    number: "J02",
    title: "Una ventana también puede ser infraestructura.",
    deck: "Sistema RAIN investiga cómo incorporar la captación pluvial a piezas que ya forman parte del edificio.",
    category: "Research",
    projectSlug: "sistema-rain",
    projectTitle: "Sistema RAIN",
    cover: "/images/projects/rain-6.webp",
    featured: true,
    keywords: ["agua", "lluvia", "carpintería", "detalle", "investigación", "fachada"],
    blocks: [
      { type: "text", body: "Las soluciones de recolección pluvial suelen aparecer como agregados visibles: canaletas, conductos y depósitos incorporados después de definir la envolvente. RAIN parte de otra posibilidad: que la propia carpintería reciba, conduzca y derive el agua." },
      { type: "image", src: "/images/projects/rain-5.webp", alt: "Familia de detalles del Sistema RAIN", caption: "Una familia de encuentros para distintas condiciones de fachada." },
      { type: "text", heading: "Diseñar la transición", body: "El trabajo no consistió en inventar una pieza aislada, sino en estudiar cada transición: vidrio, perfil, antepecho, contrapiso, cámara y bajada. La axonométrica y la sección se convirtieron en herramientas de proyecto, no solamente de representación." },
      { type: "quote", body: "El detalle constructivo es el lugar donde una intención se transforma en sistema." },
      { type: "image", src: "/images/projects/rain-1.webp", alt: "Detalle axonométrico del Sistema RAIN", caption: "El recorrido del agua se integra al espesor de la envolvente.", layout: "portrait" },
      { type: "text", heading: "Infraestructura silenciosa", body: "La investigación busca que el sistema pueda adaptarse a diferentes situaciones sin alterar la lectura general del edificio. La infraestructura permanece activa, pero deja de ser un elemento añadido." },
    ],
  },
  {
    slug: "del-powerpoint-al-espacio",
    number: "J03",
    title: "Del PowerPoint al espacio.",
    deck: "Cómo traducir ideas, medidas y referencias preliminares en una experiencia tridimensional verificable.",
    category: "Process",
    projectSlug: "stand-buick",
    projectTitle: "Stand Buick",
    cover: "/images/projects/buick-4.webp",
    featured: true,
    keywords: ["stand", "buick", "proceso", "3d", "escala", "méxico", "marca"],
    blocks: [
      { type: "text", body: "El cliente no necesitaba planos ejecutivos. Necesitaba saber si sus ideas podían convivir en el espacio real: exhibición, hospitalidad, mobiliario, circulaciones y presencia de marca. El punto de partida fueron esquemas realizados en PowerPoint." },
      { type: "image", src: "/images/projects/buick-sketch-2.webp", alt: "Esquema preliminar del cliente para el Stand Buick", caption: "Ideas, referencias y medidas como documento inicial." },
      { type: "text", heading: "Interpretar antes de modelar", body: "Modelar no significó copiar el esquema. Hubo que jerarquizar usos, verificar distancias, ajustar proporciones y construir una lógica común. El modelo 3D permitió detectar tensiones que en dos dimensiones todavía no eran visibles." },
      { type: "image", src: "/images/projects/buick-2.webp", alt: "Visualización tridimensional del Stand Buick", caption: "La propuesta final como herramienta de comprobación." },
      { type: "quote", body: "Visualizar también es tomar decisiones." },
      { type: "text", heading: "Una herramienta para acordar", body: "El resultado no buscó reemplazar la documentación futura. Funcionó como un territorio compartido entre cliente y diseñador: una imagen precisa para evaluar estética, escala y funcionamiento antes de construir." },
    ],
  },
  {
    slug: "vender-una-obra-antes-de-construirla",
    number: "J04",
    title: "Vender una obra antes de construirla.",
    deck: "La visualización como puente entre un plano municipal aprobado y una vivienda todavía en obra.",
    category: "Visualization",
    projectSlug: "ndp150",
    projectTitle: "NDP150",
    cover: "/images/projects/ndp-4.webp",
    keywords: ["visualización", "obra", "vivienda", "comercialización", "pilar", "interior"],
    blocks: [
      { type: "text", body: "NDP150 llegó a RAStudio como un plano municipal aprobado. La obra iba a comenzar, pero la vivienda necesitaba comunicarse mucho antes de estar terminada. Entre la documentación y la imagen final todavía faltaban decisiones de atmósfera, materialidad y uso." },
      { type: "image", src: "/images/projects/ndp-plan.webp", alt: "Planta aprobada de NDP150", caption: "La documentación existente como base del trabajo." },
      { type: "text", heading: "Completar sin alterar", body: "La tarea fue interpretar lo aprobado y completar aquello que el plano no definía: relaciones visuales, mobiliario, texturas, iluminación y carácter. Cada decisión debía ser coherente con una vivienda que ya estaba entrando en construcción." },
      { type: "image", src: "/images/projects/ndp-1.webp", alt: "Interior visualizado de NDP150", caption: "Una imagen capaz de anticipar la manera de habitar." },
      { type: "quote", body: "La representación puede hacer visible una obra antes de que exista, sin prometer algo que el proyecto no puede cumplir." },
      { type: "text", heading: "Comunicar con precisión", body: "Las imágenes se convirtieron en material comercial, pero también en una herramienta para alinear expectativas. Anticipar la vivienda permitió hablar de ella con mayor claridad durante la construcción." },
    ],
  },
];

export const journalBySlug = Object.fromEntries(journalEntries.map((entry) => [entry.slug, entry])) as Record<string, JournalEntry>;

export const notes = [
  { number: "N01", title: "El plano no es un trámite.", body: "Es una herramienta para ordenar decisiones, detectar conflictos y comunicar una idea antes de construirla.", tag: "Documentation" },
  { number: "N02", title: "El detalle también narra.", body: "Una sección constructiva puede explicar material, agua, estructura y tiempo en una sola imagen.", tag: "Detail" },
  { number: "N03", title: "Visualizar no es decorar.", body: "Una imagen es útil cuando permite comprobar escala, atmósfera y funcionamiento; no cuando solamente agrega efectos.", tag: "Visualization" },
];

export function journalForProject(projectSlug: string) {
  return journalEntries.filter((entry) => entry.projectSlug === projectSlug);
}
