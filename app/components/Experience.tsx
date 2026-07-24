"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Experience() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let previousY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setNavHidden(currentY > previousY && currentY > 140 && !menuOpen);
      previousY = currentY;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, currentY / Math.max(1, document.body.scrollHeight - window.innerHeight)))
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13, rootMargin: "0px 0px -8% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    let x = -100;
    let y = -100;
    let tx = x;
    let ty = y;
    let frame = 0;

    const move = (event: MouseEvent) => {
      tx = event.clientX;
      ty = event.clientY;
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setCursorLabel(target?.dataset.cursor ?? "");
    };

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
      <div className={`preloader ${ready ? "preloader--done" : ""}`} aria-hidden="true">
        <div className="preloaderMark">RA<span>Studio</span></div>
        <div className="preloaderLine"><span /></div>
      </div>

      <div className="scrollProgress" aria-hidden="true" />

      <button
        className={`menuButton ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span /><span />
      </button>

      <div className={`mobilePanel ${menuOpen ? "is-open" : ""}`}>
        <nav>
          <a href="/proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="/estudio" onClick={() => setMenuOpen(false)}>Estudio</a>
          <a href="/servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
        <p>Buenos Aires · Working worldwide</p>
      </div>

      <style jsx global>{`
        .nav { transform: translateY(${navHidden ? "-105%" : "0"}); }
      `}</style>

      <div ref={cursorRef} className={`customCursor ${cursorLabel ? "is-active" : ""}`} aria-hidden="true">
        <span>{cursorLabel}</span>
      </div>
    </>
  );
}
