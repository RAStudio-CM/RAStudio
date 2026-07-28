import type { Metadata } from "next";
import "../styles/tokens.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MotionSystem from "./components/MotionSystem";

export const metadata:Metadata={
 metadataBase:new URL("https://ra-studio-mc.vercel.app"),
 title:{default:"RAStudio — Arquitectura en proceso",template:"%s | RAStudio"},
 description:"Estudio de arquitectura dirigido por Martín Cos. Proyecto, documentación, obra y visualización desde Buenos Aires.",
 keywords:["arquitectura","estudio de arquitectura","Buenos Aires","Martín Cos","documentación de obra","visualización arquitectónica"],
 openGraph:{title:"RAStudio — Arquitectura en proceso",description:"Arquitectura, representación y construcción.",type:"website",locale:"es_AR",images:[{url:"/images/projects/monroe-hero.webp",width:1600,height:900}]}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><MotionSystem/><Header/>{children}<Footer/></body></html>}
