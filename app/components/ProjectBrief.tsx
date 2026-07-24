"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "Exterior visualization",
  "Interior visualization",
  "Animation",
  "Art direction",
  "Todavía no estoy seguro",
];

export default function ProjectBrief() {
  const [status, setStatus] = useState("");

  function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const project = String(form.get("project") || "").trim();
    const service = String(form.get("service") || "").trim();
    const timeline = String(form.get("timeline") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !project || !message) {
      setStatus("Completá los campos principales para continuar.");
      return;
    }

    const subject = encodeURIComponent(`Nuevo proyecto — ${project}`);
    const body = encodeURIComponent(
      `Hola RAStudio,\n\nMi nombre es ${name}.\nEmail: ${email}\nProyecto: ${project}\nServicio: ${service || "A definir"}\nPlazos: ${timeline || "A definir"}\n\nMensaje:\n${message}\n\nGracias.`
    );

    setStatus("Abriendo tu aplicación de correo…");
    window.location.href = `mailto:hello@rastudio.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="projectBriefForm" onSubmit={submitBrief} noValidate>
      <div className="briefField briefFieldWide">
        <label htmlFor="name">Nombre / Estudio</label>
        <input id="name" name="name" type="text" placeholder="¿Cómo te llamás?" autoComplete="name" />
      </div>
      <div className="briefField">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="nombre@estudio.com" autoComplete="email" />
      </div>
      <div className="briefField">
        <label htmlFor="project">Proyecto</label>
        <input id="project" name="project" type="text" placeholder="Nombre o tipología" />
      </div>
      <div className="briefField">
        <label htmlFor="service">Servicio</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>Seleccionar</option>
          {serviceOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </div>
      <div className="briefField">
        <label htmlFor="timeline">Plazos</label>
        <input id="timeline" name="timeline" type="text" placeholder="Fecha ideal de entrega" />
      </div>
      <div className="briefField briefFieldWide">
        <label htmlFor="message">Contanos la idea</label>
        <textarea id="message" name="message" rows={5} placeholder="Ubicación, alcance, cantidad de imágenes y qué necesitás comunicar." />
      </div>
      <div className="briefSubmitRow briefFieldWide">
        <p aria-live="polite">{status || "Respondemos normalmente dentro de 1–2 días hábiles."}</p>
        <button type="submit" data-cursor="SEND">Enviar brief <span>↗</span></button>
      </div>
    </form>
  );
}
