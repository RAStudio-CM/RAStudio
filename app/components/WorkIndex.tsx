"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/content/projects";

export default function WorkIndex() {
  const [active, setActive] = useState(0);
  return <section className="workArchive" aria-label="Índice de proyectos">
    <div className="workArchivePreview" aria-hidden="true">
      {projects.map((project, index) => <Image
        key={project.slug} src={project.cover} alt="" fill sizes="44vw"
        className={index === active ? "workPreviewImage active" : "workPreviewImage"}
      />)}
      <div className="workPreviewCaption"><span>{projects[active].status}</span><span>{projects[active].location}</span></div>
    </div>
    <div className="workArchiveList">
      {projects.map((project, index) => <Link
        key={project.slug} href={`/proyectos/${project.slug}`}
        className={index === active ? "workArchiveRow active" : "workArchiveRow"}
        onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}
      >
        <span className="workArchiveNumber">{project.number}</span>
        <div><p>{project.typology}</p><h2>{project.title}</h2></div>
        <div className="workArchiveMeta"><span>{project.status}</span><b>↗</b></div>
      </Link>)}
    </div>
  </section>;
}
