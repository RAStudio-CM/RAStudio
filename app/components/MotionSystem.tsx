"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function MotionSystem(){
  const pathname=usePathname();
  const [transitioning,setTransitioning]=useState(false);
  const previousPath=useRef(pathname);

  useEffect(()=>{
    const root=document.documentElement;
    const updateProgress=()=>{
      const max=document.documentElement.scrollHeight-window.innerHeight;
      const progress=max>0?Math.min(1,window.scrollY/max):0;
      root.style.setProperty("--scroll-progress",String(progress));
    };
    updateProgress();
    window.addEventListener("scroll",updateProgress,{passive:true});
    window.addEventListener("resize",updateProgress);
    return ()=>{
      window.removeEventListener("scroll",updateProgress);
      window.removeEventListener("resize",updateProgress);
    };
  },[]);

  useEffect(()=>{
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets=Array.from(document.querySelectorAll<HTMLElement>(
      "main > section, .v4Project, .projectGallery figure, .projectDataGrid > div, .workArchiveRow, .experience article, .recognitionGrid article, .practiceEditorial article"
    ));
    targets.forEach((el,index)=>{
      el.classList.add("motionReveal");
      el.style.setProperty("--reveal-delay",`${Math.min(index%5,4)*45}ms`);
    });
    if(reduced){targets.forEach(el=>el.classList.add("isVisible"));return;}
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          (entry.target as HTMLElement).classList.add("isVisible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.08,rootMargin:"0px 0px -7% 0px"});
    targets.forEach(el=>observer.observe(el));
    return ()=>observer.disconnect();
  },[pathname]);

  useEffect(()=>{
    if(previousPath.current===pathname)return;
    previousPath.current=pathname;
    setTransitioning(true);
    const timer=window.setTimeout(()=>setTransitioning(false),620);
    return ()=>window.clearTimeout(timer);
  },[pathname]);

  return <>
    <div className="scrollProgress" aria-hidden="true"/>
    <div className={`pageTransition${transitioning?" active":""}`} aria-hidden="true"><span>RAStudio</span></div>
  </>;
}
