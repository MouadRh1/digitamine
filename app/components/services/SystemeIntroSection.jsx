"use client";

import { useEffect, useRef, useState } from "react";

// ═══════════════════════════════════════════
// HOOK : Détecte l'entrée dans le viewport
// ═══════════════════════════════════════════
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Support `prefers-reduced-motion`
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

// ═══════════════════════════════════════════
// RevealMask : contenu qui sort de sous un masque
// ═══════════════════════════════════════════
function RevealMask({ children, delay = 0, duration = 1000 }) {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className="transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          transform: isInView ? "translateY(0%)" : "translateY(110%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// RevealFade : fade + slide
// ═══════════════════════════════════════════
function RevealFade({ children, delay = 0, duration = 900 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// RevealLine : trait qui s'étend de gauche à droite
// ═══════════════════════════════════════════
function RevealLine({ delay = 0, duration = 1200 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="transition-transform ease-[cubic-bezier(0.65,0,0.35,1)] origin-left"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: isInView ? "scaleX(1)" : "scaleX(0)",
      }}
    >
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
    </div>
  );
}

export default function SystemeIntroSection() {
  return (
    <section className="relative bg-[#EDEAE3] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Halo doré diffus */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      {/* Grille décorative */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,10,10,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,10,10,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: `radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)`,
          WebkitMaskImage: `radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)`,
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ═══════════════════════════════════════════
            LABEL ALIGNÉ À GAUCHE + ANIMÉ
            ═══════════════════════════════════════════ */}
        <div className="mb-10 md:mb-14">
          <RevealMask delay={0} duration={1000}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#C9A227]" />
              <span className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                Le système Digitamine
              </span>
            </div>
          </RevealMask>
        </div>

        {/* ═══════════════════════════════════════════
            TITRE ALIGNÉ À GAUCHE + 2 LIGNES EN CASCADE
            ═══════════════════════════════════════════ */}
        <h2
          className="font-display tracking-[-0.03em] text-[#0a0a0a] max-w-[1200px]"
          style={{
            fontSize: "clamp(40px, 6.5vw, 110px)",
            lineHeight: 1.02,
            fontWeight: 400,
          }}
        >
          <RevealMask delay={150} duration={1200}>
            <span className="block">Un besoin peut être isolé.</span>
          </RevealMask>
          <RevealMask delay={350} duration={1200}>
            <span className="block" style={{ color: "#9c9c9c" }}>
              La réflexion, jamais.
            </span>
          </RevealMask>
        </h2>

        {/* ═══════════════════════════════════════════
            TRAIT DORÉ DÉCORATIF — ANIMÉ
            ═══════════════════════════════════════════ */}
        <div className="flex justify-start mt-14 md:mt-20">
          <RevealLine delay={700} duration={1200} />
        </div>
      </div>
    </section>
  );
}