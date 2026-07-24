import Image from "next/image";
import Link from "next/link";

const principles = [
  ["01", "Idea before image", "Cada visual empieza con una intención, no con un efecto."],
  ["02", "Architecture first", "La imagen se construye desde la lógica espacial, material y urbana."],
  ["03", "Emotion with precision", "Buscamos una atmósfera memorable sin perder rigor arquitectónico."],
];

export default function StudioPage(){return <main className="editorialPage">
  <header className="nav navDark"><Link className="brand" href="/">RA<span>Studio</span></Link><nav><Link href="/proyectos">Proyectos</Link><Link href="/estudio">Estudio</Link><Link href="/servicios">Servicios</Link></nav><Link className="talk" href="/contacto">Hablemos <span>↗</span></Link></header>
  <section className="editorialHero sectionLight"><p className="label reveal r1">THE STUDIO</p><h1 className="reveal r2">We translate<br />architecture into<br /><em>emotion.</em></h1><div className="editorialHeroFoot reveal r3"><p>RAStudio es una práctica de visualización arquitectónica y dirección de arte con base en Buenos Aires.</p><span>WORKING WORLDWIDE</span></div></section>
  <section className="studioImage" data-reveal data-cursor="VIEW"><Image src="/images/monroe-interior-03.png" alt="Atmósfera interior de Monroe Plaza" fill className="cover" sizes="100vw" /></section>
  <section className="studioManifesto sectionLight" data-reveal><p className="label">OUR APPROACH</p><h2>No creamos imágenes para llenar una presentación. Creamos imágenes que ayudan a <em>entender, desear y recordar</em> una arquitectura.</h2><div className="twoColCopy"><p>Trabajamos junto a arquitectos, desarrolladores y equipos creativos para encontrar la forma más clara y potente de contar cada proyecto.</p><p>Desde el encuadre y la luz hasta la vegetación y la vida cotidiana, cada decisión forma parte de una narrativa común.</p></div></section>
  <section className="principles"><div className="sectionTop"><p>HOW WE THINK</p><p>THREE PRINCIPLES</p></div>{principles.map(([n,t,c])=><article key={n} data-reveal><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</section>
  <section className="pageCta sectionLight" data-reveal><p className="label">LET'S WORK TOGETHER</p><h2>Good architecture deserves<br />a compelling <em>story.</em></h2><Link href="/contacto">Contanos tu proyecto <span>↗</span></Link></section>
  <Footer />
</main>}
function Footer(){return <footer><Link className="brand footerBrand" href="/">RA<span>Studio</span></Link><div><p>BUENOS AIRES, ARGENTINA</p><p>WORKING WORLDWIDE</p></div><div className="social"><a href="#">Instagram</a><a href="#">Behance</a><a href="#">LinkedIn</a></div><p className="copyright">© 2026 RAStudio</p></footer>}
