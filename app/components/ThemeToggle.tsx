"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
  const [dark,setDark]=useState(false);
  useEffect(()=>{
    const saved=localStorage.getItem("rastudio-theme");
    const enabled=saved==="dark-editorial";
    setDark(enabled);
    document.documentElement.dataset.theme=enabled?"dark-editorial":"default";
  },[]);
  const toggle=()=>{
    const next=!dark;
    setDark(next);
    document.documentElement.dataset.theme=next?"dark-editorial":"default";
    localStorage.setItem("rastudio-theme",next?"dark-editorial":"default");
  };
  return <button className="themeToggle" type="button" onClick={toggle} aria-label={dark?"Usar tema original":"Usar tema editorial oscuro"} title={dark?"Tema original":"Tema oscuro"}>{dark?"○":"●"}</button>;
}
