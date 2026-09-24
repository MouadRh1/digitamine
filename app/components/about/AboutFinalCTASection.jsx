"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ═══════════════════════════════════════════
// HOOK : Détecte l'entrée dans le viewport
// ═══════════════════════════════════════════
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
// RevealMask : masque (slide up)
// ═══════════════════════════════════════════
function RevealMask({ children, delay = 0, duration = 1100 }) {
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
// RevealFade : fade + slide up (pour le CTA)
// ═══════════════════════════════════════════
function RevealFade({ children, delay = 0, duration = 1000 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// RevealLine : trait qui s'étend de gauche à droite
// ═══════════════════════════════════════════
function RevealLine({ children, delay = 0, duration = 1400 }) {
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
      {children}
    </div>
  );
}

export default function AboutFinalCTASection() {
  return (
    <section className="relative bg-[#EDEAE3] py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* ═══════════════════════════════════════════
          DÉCORATIONS DE FOND
          ═══════════════════════════════════════════ */}

      {/* Halo doré subtil à droite */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.10]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.8) 0%, transparent 60%)",
          transform: "translate(30%, -20%)",
        }}
      />

      {/* Grille décorative avec masque radial */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,10,10,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,10,10,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 70% at 30% 50%, black 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 50%, black 30%, transparent 90%)",
        }}
      />

      {/* Trait doré décoratif (coin haut-gauche) */}
      <div className="absolute top-12 left-6 md:top-16 md:left-10 w-16 h-[1px] bg-[#C9A227]/50 pointer-events-none" />
      <div className="absolute top-12 left-6 md:top-16 md:left-10 w-[1px] h-16 bg-[#C9A227]/50 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ═══════════════════════════════════════════
            LABEL
            ═══════════════════════════════════════════ */}
        <div className="mb-8 md:mb-10">
          <RevealMask delay={0} duration={900}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#C9A227]" />
              <span className="font-display text-[13px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                Le prochain pas
              </span>
            </div>
          </RevealMask>
        </div>

        {/* ═══════════════════════════════════════════
            TITRE — 3 lignes en cascade
            ═══════════════════════════════════════════ */}
        <h2
          className="font-display tracking-[-0.02em] text-[#0a0a0a] mb-10 md:mb-14 max-w-[1000px]"
          style={{
            fontSize: "clamp(32px, 5vw, 80px)",
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          <RevealMask delay={150} duration={1100}>
            <span className="block">Vous cherchez une</span>
          </RevealMask>
          <RevealMask delay={300} duration={1100}>
            <span className="block">équipe qui comprend</span>
          </RevealMask>
          <RevealMask delay={450} duration={1100}>
            <span className="block">avant d&apos;exécuter ?</span>
          </RevealMask>
        </h2>

        {/* ═══════════════════════════════════════════
            TRAIT DORÉ DÉCORATIF
            ═══════════════════════════════════════════ */}
        <div className="mb-10 md:mb-14">
          <RevealLine delay={700} duration={1400}>
            <div className="w-24 h-[1px] bg-gradient-to-r from-[#C9A227] to-transparent" />
          </RevealLine>
        </div>

        {/* ═══════════════════════════════════════════
            CTA — fond noir + texte doré au hover
            ═══════════════════════════════════════════ */}
        <RevealFade delay={900} duration={1000}>
          <div className="flex items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 font-display text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-[#0a0a0a] font-medium px-8 py-4 border-2 border-[#0a0a0a] overflow-hidden transition-colors duration-500 hover:text-[#EDEAE3]"
            >
              {/* Fond noir qui glisse de gauche à droite */}
              <span className="absolute inset-0 bg-[#0a0a0a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              {/* Contenu au-dessus du fond animé */}
              <span className="relative z-10">Parler de votre projet</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              >
                <path
                  d="M2 12L12 2M12 2H5M12 2V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </RevealFade>
      </div>
    </section>
  );
}