"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Project = {
  number: string;
  title: string;
  type: string;
  location: string;
  status: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  { number:"01", title:"Monroe Plaza", type:"Arquitectura residencial · mixta", location:"Buenos Aires", status:"Proyecto", image:"/images/projects/monroe-01.webp", href:"/proyectos/monroe-plaza" },
  { number:"02", title:"Escuela Padre Carlos Mugica", type:"Arquitectura pública", location:"CABA", status:"Primer premio", image:"/images/projects/escuela-1.webp", href:"/proyectos/escuela-mugica" },
  { number:"03", title:".PADL", type:"Arquitectura deportiva · comercial", location:"CABA", status:"Proyecto", image:"/images/projects/padl-1.webp", href:"/proyectos/padl" },
  { number:"04", title:"Beazley 525", type:"Vivienda", location:"Santos Lugares", status:"En construcción", image:"/images/projects/beazley-living.webp", href:"/proyectos/beazley-525" }
];

export default function WorkIndex(){
  const [active,setActive]=useState(0);
  return <section className="workArchive" aria-label="Índice de proyectos">
    <div className="workArchivePreview" aria-hidden="true">
      {projects.map((project,index)=><Image
        key={project.title}
        src={project.image}
        alt=""
        fill
        sizes="44vw"
        className={index===active?"workPreviewImage active":"workPreviewImage"}
      />)}
      <div className="workPreviewCaption"><span>{projects[active].status}</span><span>{projects[active].location}</span></div>
    </div>
    <div className="workArchiveList">
      {projects.map((project,index)=><Link
        key={project.title}
        href={project.href}
        className={index===active?"workArchiveRow active":"workArchiveRow"}
        onMouseEnter={()=>setActive(index)}
        onFocus={()=>setActive(index)}
      >
        <span className="workArchiveNumber">{project.number}</span>
        <div><p>{project.type}</p><h2>{project.title}</h2></div>
        <div className="workArchiveMeta"><span>{project.status}</span><b>↗</b></div>
      </Link>)}
    </div>
  </section>
}
