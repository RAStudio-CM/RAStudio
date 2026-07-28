"use client";
import { FormEvent, useState } from "react";

export default function ContactForm(){
 const [sent,setSent]=useState(false);
 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent(`Consulta RAStudio · ${data.get("nombre")||"Nuevo proyecto"}`);
  const body=encodeURIComponent(`Nombre: ${data.get("nombre")}\nEmail: ${data.get("email")}\nTipo de proyecto: ${data.get("tipo")}\n\n${data.get("mensaje")}`);
  window.location.href=`mailto:martincosss@gmail.com?subject=${subject}&body=${body}`;
  setSent(true);
 }
 return <form className="contactForm" onSubmit={submit}>
  <label>Nombre<input name="nombre" required autoComplete="name" /></label>
  <label>Email<input name="email" type="email" required autoComplete="email" /></label>
  <label>Tipo de proyecto<select name="tipo" defaultValue="Arquitectura"><option>Arquitectura</option><option>Documentación</option><option>Visualización</option><option>Investigación / colaboración</option><option>Otro</option></select></label>
  <label>Contanos brevemente<textarea name="mensaje" required rows={5}/></label>
  <button type="submit">Preparar consulta <span>↗</span></button>
  {sent&&<p className="formHint">Se abrió tu aplicación de correo con el mensaje preparado.</p>}
 </form>;
}
