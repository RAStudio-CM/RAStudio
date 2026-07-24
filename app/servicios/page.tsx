import Image from "next/image";
import Link from "next/link";

const capabilities = [
  ["01", "Exterior visualization", "Imágenes que construyen presencia urbana, escala y atmósfera.", "Concepto · Composición · Luz · Entorno"],
  ["02", "Interior visualization", "Espacios precisos y sensibles, definidos por materialidad, luz y vida.", "Materiales · Styling · Iluminación · Detalle"],
  ["03", "Art direction", "Un lenguaje visual consistente para presentar un proyecto o una marca completa.", "Narrativa · Mood · Serie · Identidad"],
  ["04", "Animation", "Arquitectura en movimiento mediante recorridos y secuencias cinematográficas.", "Storyboards · Cámara · Motion · Sound"],
];

export default function ServicesPage(){return <main className="editorialPage">
<header className="nav"><Link className="brand" href="/">RA<span>Studio</span></Link><nav><Link href="/proyectos">Proyectos</Link><Link href="/estudio">Estudio</Link><Link href="/servicios">Servicios</Link></nav><Link className="talk" href="/contacto">Hablemos <span>↗</span></Link></header>
<section className="serviceHero"><Image src="/images/monroe-04.png" alt="Monroe Plaza" fill priority className="cover" sizes="100vw"/><div className="projectHeroShade"/><div><p className="label reveal r1">CAPABILITIES</p><h1 className="reveal r2">From an idea<br />to an <em>experience.</em></h1><p className="reveal r3">Nos incorporamos desde una imagen puntual hasta la dirección visual integral de un proyecto.</p></div></section>
<section className="capabilities sectionLight">{capabilities.map(([n,t,c,tags])=><article key={n} data-reveal><span>{n}</span><div><h2>{t}</h2><p>{c}</p></div><b>{tags}</b></article>)}</section>
<section className="workflow"><div className="sectionTop"><p>OUR WORKFLOW</p><p>FOUR MOMENTS</p></div><h2 data-reveal>Clear process.<br /><em>Exceptional output.</em></h2><div className="workflowGrid">{[["01","Brief","Entendemos objetivos, audiencias y alcance."],["02","Direction","Definimos narrativa, referencias y encuadres."],["03","Production","Modelado, materiales, luz y atmósfera."],["04","Delivery","Refinamiento, consistencia y formatos finales."]].map(([n,t,c])=><article key={n} data-reveal><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>
<section className="pageCta sectionLight" data-reveal><p className="label">REQUEST A QUOTE</p><h2>Let’s find the right visual<br />language for your <em>project.</em></h2><Link href="/contacto">Empezar conversación <span>↗</span></Link></section><Footer /></main>}
function Footer(){return <footer><Link className="brand footerBrand" href="/">RA<span>Studio</span></Link><div><p>BUENOS AIRES, ARGENTINA</p><p>WORKING WORLDWIDE</p></div><div className="social"><a href="#">Instagram</a><a href="#">Behance</a><a href="#">LinkedIn</a></div><p className="copyright">© 2026 RAStudio</p></footer>}
