import Image from "next/image";
import Link from "next/link";

const facts = [
  ["Tipología", "Uso mixto"],
  ["Ubicación", "Buenos Aires, AR"],
  ["Año", "2026"],
  ["Disciplina", "Visualización arquitectónica"],
];

export default function MonroePlazaPage() {
  return (
    <main className="projectPage">
      <header className="nav projectNav">
        <Link className="brand" href="/" aria-label="RAStudio, inicio">RA<span>Studio</span></Link>
        <nav aria-label="Navegación del proyecto">
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/estudio">Estudio</Link>
          <Link href="/servicios">Servicios</Link>
        </nav>
        <Link className="talk" href="/contacto">Hablemos <span>↗</span></Link>
      </header>

      <section className="projectHero">
        <Image src="/images/monroe-hero.png" alt="Monroe Plaza al atardecer" fill priority className="cover" sizes="100vw" />
        <div className="projectHeroShade" />
        <div className="projectHeroCopy">
          <p className="kicker reveal r1">BUENOS AIRES · 2026</p>
          <h1 className="reveal r2">Monroe<br /><em>Plaza.</em></h1>
          <div className="projectHeroMeta reveal r3">
            <p>Una torre híbrida que transforma el límite entre lo público y lo privado en una secuencia de espacios habitables.</p>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>

      <section className="projectIntro sectionLight" data-reveal>
        <div className="projectFacts">
          {facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </div>
        <div className="projectStatement">
          <p className="label">THE IDEA</p>
          <h2>Disolver los límites para que la arquitectura se convierta en <em>ciudad.</em></h2>
          <div className="projectCopy">
            <p>La esencia del proyecto radica en la disolución de los límites entre el espacio público y el privado.</p>
            <p>Las torres se organizan desde un núcleo central que libera los perímetros, elimina apoyos y permite que cada planta se abra hacia el paisaje urbano.</p>
          </div>
        </div>
      </section>

      <section className="projectFrame projectFrameFull" data-cursor="VIEW">
        <Image src="/images/monroe-01.png" alt="Vista urbana de Monroe Plaza" fill className="cover" sizes="100vw" />
        <span>01 — URBAN PRESENCE</span>
      </section>

      <section className="projectNarrative sectionLight" data-reveal>
        <p className="label">PUBLIC / PRIVATE</p>
        <h2>La plaza no termina en la vereda. Continúa dentro del edificio y asciende con él.</h2>
      </section>

      <section className="projectDiptych sectionLight" data-reveal>
        <figure><Image src="/images/monroe-interior.png" alt="Interior social de Monroe Plaza" fill className="cover" sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>INTERIOR · SOCIAL SPACE</figcaption></figure>
        <figure className="projectOffset"><Image src="/images/monroe-detail.png" alt="Detalle de fachada de Monroe Plaza" fill className="cover" sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>DETAIL · ENVELOPE</figcaption></figure>
      </section>

      <section className="processSection" data-reveal>
        <div className="sectionTop"><p>PROCESS — 01</p><p>FROM STRUCTURE TO ATMOSPHERE</p></div>
        <div className="processIntro">
          <h2>Una imagen final empieza mucho antes del render.</h2>
          <p>Estudiamos la lógica espacial, la estructura, las circulaciones y la relación entre las piezas para construir una narrativa visual coherente.</p>
        </div>
        <div className="processGrid">
          {["process-01.jpg","process-02.jpg","process-03.jpg","process-04.jpg"].map((src, i) => (
            <figure key={src}><Image src={`/images/${src}`} alt={`Diagrama de proceso ${i + 1}`} fill className="contain" sizes="(max-width: 800px) 100vw, 25vw" /><figcaption>0{i + 1}</figcaption></figure>
          ))}
        </div>
      </section>

      <section className="projectFrame projectFrameFull">
        <Image src="/images/monroe-04.png" alt="Vista exterior de Monroe Plaza" fill className="cover" sizes="100vw" />
        <span>02 — OPEN PERIMETER</span>
      </section>

      <section className="projectGallery sectionLight" data-reveal>
        <div className="projectGalleryHead"><p className="label">SELECTED IMAGES</p><p>La serie combina vistas urbanas, momentos cotidianos e interiores para construir una percepción integral del proyecto.</p></div>
        <figure className="projectWide"><Image src="/images/monroe-05.png" alt="Exterior de Monroe Plaza" fill className="cover" sizes="100vw" /></figure>
        <div className="projectPair">
          <figure><Image src="/images/monroe-interior-02.png" alt="Interior de Monroe Plaza" fill className="cover" sizes="(max-width: 800px) 100vw, 50vw" /></figure>
          <figure><Image src="/images/monroe-interior-03.png" alt="Interior de Monroe Plaza" fill className="cover" sizes="(max-width: 800px) 100vw, 50vw" /></figure>
        </div>
        <figure className="projectWide"><Image src="/images/monroe-06.png" alt="Vista final de Monroe Plaza" fill className="cover" sizes="100vw" /></figure>
      </section>

      <section className="nextProject" data-reveal>
        <p className="label">NEXT PROJECT</p>
        <h2>Something new<br /><em>is coming.</em></h2>
        <Link href="/">Volver al estudio <span>↗</span></Link>
      </section>

      <footer>
        <Link className="brand footerBrand" href="/">RA<span>Studio</span></Link>
        <div><p>BUENOS AIRES, ARGENTINA</p><p>WORKING WORLDWIDE</p></div>
        <div className="social"><a href="#">Instagram</a><a href="#">Behance</a><a href="#">LinkedIn</a></div>
        <p className="copyright">© 2026 RAStudio</p>
      </footer>
    </main>
  );
}
