"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;
    let isHovered = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation (lerp) for liquid effect
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      // Apply transforms
      dot.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px) scale(${isHovered ? 2.5 : 1})`;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${isHovered ? 1.4 : 1})`;
      
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onMouseEnterInteractive = () => {
      isHovered = true;
      dot.style.background = "rgba(255, 255, 255, 0.15)";
      dot.style.backdropFilter = "blur(4px)";
      ring.style.borderColor = "rgba(255, 255, 255, 0.4)";
      ring.style.background = "rgba(255, 255, 255, 0.02)";
      ring.style.backdropFilter = "blur(8px)";
    };
    
    const onMouseLeaveInteractive = () => {
      isHovered = false;
      dot.style.background = "rgba(255, 255, 255, 0.8)";
      dot.style.backdropFilter = "none";
      ring.style.borderColor = "rgba(255, 255, 255, 0.12)";
      ring.style.background = "transparent";
      ring.style.backdropFilter = "none";
    };

    window.addEventListener("mousemove", onMouseMove);

    const updateInteractives = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], [data-cursor-pointer]");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
      return interactives;
    };

    const interactives = updateInteractives();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Dot - Liquid Inner Core */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.4)",
          mixBlendMode: "difference"
        }}
      />
      {/* Ring - Frosted Glass Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.08)",
        }}
      />
    </>
  );
}
