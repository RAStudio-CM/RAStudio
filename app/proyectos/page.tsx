import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="editorialPage">
      <header className="nav navDark">
        <Link className="brand" href="/">RA<span>Studio</span></Link>
        <nav><Link href="/proyectos">Proyectos</Link><Link href="/estudio">Estudio</Link><Link href="/servicios">Servicios</Link></nav>
        <Link className="talk" href="/contacto">Hablemos <span>↗</span></Link>
      </header>

      <section className="editorialHero sectionLight">
        <p className="label reveal r1">SELECTED WORK — 2026</p>
        <h1 className="reveal r2">Projects built<br />to be <em>remembered.</em></h1>
        <div className="editorialHeroFoot reveal r3"><p>Una selección curada de visualizaciones, procesos y relatos arquitectónicos.</p><span>01 PROJECT · MORE IN PROGRESS</span></div>
      </section>

      <section className="projectIndex sectionLight">
        <Link className="indexProject" href="/monroe-plaza" data-cursor="OPEN" data-reveal>
          <div className="indexProjectMedia"><Image src="/images/monroe-02.png" alt="Monroe Plaza" fill className="cover" sizes="100vw" /><div className="imageShade" /></div>
          <div className="indexProjectMeta"><span>01 · MIXED USE</span><h2>Monroe<br /><em>Plaza.</em></h2><div><p>Buenos Aires, Argentina</p><p>2026</p></div></div>
        </Link>
        <div className="comingProject" data-reveal><span>02 — NEXT CHAPTER</span><h2>New work<br /><em>in progress.</em></h2><p>Estamos preparando nuevos proyectos para esta colección.</p></div>
      </section>

      <section className="pageCta" data-reveal><p className="label">START A PROJECT</p><h2>¿Tenés un proyecto<br />que merece ser <em>visto?</em></h2><Link href="/contacto">Conversemos <span>↗</span></Link></section>
      <Footer />
    </main>
  );
}

function Footer(){return <footer><Link className="brand footerBrand" href="/">RA<span>Studio</span></Link><div><p>BUENOS AIRES, ARGENTINA</p><p>WORKING WORLDWIDE</p></div><div className="social"><a href="#">Instagram</a><a href="#">Behance</a><a href="#">LinkedIn</a></div><p className="copyright">© 2026 RAStudio</p></footer>}
