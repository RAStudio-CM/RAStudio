import Image from "next/image";

const capabilities = [
  {title:"Arquitectura",items:["Proyecto arquitectónico","Vivienda colectiva","Equipamiento","Interiorismo","Dirección y seguimiento de obra"]},
  {title:"Representación",items:["Modelado 3D","Visualización arquitectónica","Diagramas conceptuales","Presentaciones para clientes","Comunicación gráfica"]},
  {title:"Tecnología",items:["SketchUp","AutoCAD","Lumion","Adobe Photoshop","Adobe Firefly","IA aplicada al proceso de diseño"]},
  {title:"Gestión",items:["Desarrollo de proyecto","Documentación técnica","Coordinación interdisciplinaria","Relación con clientes","Planificación y obra"]},
];

const career = [
  {years:"2018 — Actualidad",title:"RAStudio",role:"Fundador · Arquitectura, representación y dirección de obra",text:"Desarrollo integral de proyectos de arquitectura, documentación técnica, visualización y acompañamiento de obra."},
  {years:"2022 — Actualidad",title:"Estilo Firenze",role:"Arquitectura e interiorismo",text:"Desarrollo de proyectos, coordinación técnica, documentación, presupuestos y seguimiento de obra."},
  {years:"2018 — 2022",title:"DF Construcciones",role:"Proyecto y construcción",text:"Documentación ejecutiva, asistencia de proyecto, coordinación y visitas de obra."},
];

const education = [
  {years:"2016 — 2025",title:"Universidad del Salvador · USAL",role:"Arquitectura",text:"Formación universitaria y desarrollo de las bases proyectuales, técnicas y constructivas de la disciplina."},
  {years:"2025 — Actualidad",title:"Universidad de Palermo · UP",role:"Arquitectura",text:"Etapa final de la carrera, consolidando el perfil proyectual y obteniendo distintos reconocimientos académicos."},
];

export default function Martin(){return <main>
  <section className="martinHero">
    <div className="martinHeroImage"><Image src="/images/martin/portrait.webp" alt="Martín Cos" fill priority sizes="(max-width:800px) 100vw,50vw" className="cover"/></div>
    <div><p className="eyebrow">04 · Martín Cos</p><h1>Arquitectura como una práctica de observación, precisión y aprendizaje continuo.</h1><p>Arquitecto en formación · Fundador de RAStudio · Buenos Aires, Argentina.</p></div>
  </section>

  <section className="bioManifesto"><p className="eyebrow">Una práctica personal</p><h2>Trabajo en el punto donde una idea se vuelve dibujo, el dibujo se vuelve documento y el documento se convierte en obra.</h2><div><p>Mi experiencia combina proyecto, documentación, visualización y seguimiento de obra. Esa mirada transversal define a RAStudio: entender la arquitectura como un proceso completo.</p><p>La tecnología forma parte de esa práctica, pero siempre subordinada a una intención arquitectónica clara.</p></div></section>

  <section className="capabilities"><div className="capabilitiesIntro"><p className="eyebrow">Skills · Capacidades</p><h2>Información directa sobre lo que puedo aportar a cada proyecto.</h2></div><div className="capabilityGrid">{capabilities.map((group,i)=><article key={group.title}><span>0{i+1}</span><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>

  <section className="currentProfile"><p className="eyebrow">Actualmente</p><div><h2>Finalizando la carrera de Arquitectura en la Universidad de Palermo.</h2><p>Desarrollando proyectos en RAStudio, participando en procesos de arquitectura y construcción y explorando nuevas herramientas de IA aplicadas al diseño, la representación y la comunicación.</p></div></section>

  <section className="trajectoryOverview">
    <p className="eyebrow">Trayectoria</p>
    <div className="trajectoryStat"><strong>2016</strong><span>Inicio de la formación universitaria</span></div>
    <div className="trajectoryStat"><strong>2018</strong><span>Fundación de RAStudio</span></div>
    <div className="trajectoryStat"><strong>+7</strong><span>Años de experiencia profesional</span></div>
  </section>

  <section className="experience careerSection">
    <div className="careerHeading"><p className="eyebrow">Experiencia profesional</p><h2>Una práctica construida en el tiempo.</h2></div>
    {career.map(item=><article key={item.title}><span>{item.years}</span><div><h3>{item.title}</h3><strong>{item.role}</strong></div><p>{item.text}</p></article>)}
  </section>

  <section className="experience educationSection">
    <div className="careerHeading"><p className="eyebrow">Formación</p><h2>Diez años de formación arquitectónica.</h2></div>
    {education.map(item=><article key={item.title}><span>{item.years}</span><div><h3>{item.title}</h3><strong>{item.role}</strong></div><p>{item.text}</p></article>)}
  </section>

  <section className="recognition"><p className="eyebrow">Reconocimientos</p><article><span>1° Premio</span><h3>Escuela Padre Carlos Mugica</h3><p>Universidad de Palermo</p></article><article><span>Taller VII</span><h3>Proyecto seleccionado para presentación en formato TED</h3><p>Universidad de Palermo</p></article><article><span>Taller VIII</span><h3>Calificación final: 10</h3><p>Universidad de Palermo</p></article><article><span>Docencia</span><h3>Invitación como ayudante de cátedra</h3><p>Universidad de Palermo</p></article></section>

  <section className="personalWorkflow"><p className="eyebrow">Workflow</p><div className="workflowLine">{["Idea","Investigación","Croquis","Modelo","Documentación","Obra","Comunicación"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div><p className="toolsLine">SketchUp · AutoCAD · Lumion · Photoshop · Adobe Firefly · ChatGPT</p></section>

  <section className="photoEssay"><figure><Image src="/images/martin/journey.webp" alt="Viaje y observación arquitectónica" fill sizes="(max-width:800px) 100vw,50vw" className="cover"/></figure><figure><Image src="/images/martin/architecture.webp" alt="Arquitectura observada por Martín Cos" fill sizes="(max-width:800px) 100vw,50vw" className="cover"/></figure></section>

  <section className="martinContact"><p className="eyebrow">Contacto directo</p><h2>¿Tenés un proyecto en mente?<br/>Conversemos.</h2><div className="contactData"><div><span>Email</span><a href="mailto:martincosss@gmail.com">martincosss@gmail.com ↗</a></div><div><span>Teléfono</span><a href="tel:+541140547086">+54 11 4054-7086 ↗</a></div><div><span>WhatsApp</span><a href="https://wa.me/541140547086" target="_blank" rel="noreferrer">Iniciar conversación ↗</a></div></div></section>
</main>}
