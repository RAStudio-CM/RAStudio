"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links=[
 ["/work","01 Work"],
 ["/practice","02 Practice"],
 ["/lab","03 Lab"],
 ["/martin-cos","04 Martín Cos"],
 ["/contacto","05 Contacto"]
];

export default function Header(){
 const [open,setOpen]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 const [hidden,setHidden]=useState(false);
 const lastY=useRef(0);
 const pathname=usePathname();
 useEffect(()=>{
  const update=()=>{
   const y=window.scrollY;
   setScrolled(y>24);
   setHidden(!open&&y>140&&y>lastY.current+3);
   if(y<lastY.current-3)setHidden(false);
   lastY.current=y;
  };
  update(); window.addEventListener("scroll",update,{passive:true});
  return ()=>window.removeEventListener("scroll",update);
 },[open]);
 useEffect(()=>{setOpen(false);setHidden(false)},[pathname]);
 return <header className={`siteHeader${scrolled?" scrolled":""}${open?" menuOpen":""}${hidden?" headerHidden":""}`}>
  <Link className="wordmark" href="/" aria-label="RAStudio, inicio">RA<span>Studio</span></Link>
  <button className="menuButton" aria-expanded={open} aria-controls="primary-nav" aria-label={open?"Cerrar navegación":"Abrir navegación"} onClick={()=>setOpen(!open)}>{open?"Cerrar":"Menú"}</button>
  <nav id="primary-nav" className={open?"siteNav open":"siteNav"} aria-label="Navegación principal">
   {links.map(([href,label])=><Link key={href} href={href} aria-current={pathname===href||pathname.startsWith(`${href}/`)?"page":undefined}>{label}</Link>)}
  </nav>
 </header>
}
