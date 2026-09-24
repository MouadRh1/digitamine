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
// RevealMask : masque (slide up depuis un conteneur)
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
// RevealFade : fade + slide up
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
// RevealScale : zoom + fade (pour le bouton)
// ═══════════════════════════════════════════
function RevealScale({ children, delay = 0, duration = 1000 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? "translateY(0) scale(1)"
          : "translateY(20px) scale(0.95)",
      }}
    >
      {children}
    </div>
  );
}

export default function ProchainPasSection() {
  return (
    <section className="relative bg-[#EDEAE3] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Halo doré subtil */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
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
          maskImage: "radial-gradient(ellipse 70% 60% at 30% 50%, black 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 50%, black 30%, transparent 90%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ═══════════════════════════════════════════
            LABEL — masque
            ═══════════════════════════════════════════ */}
        <div className="mb-8 md:mb-10">
          <RevealMask delay={0} duration={900}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#C9A227]" />
              <span className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                Le prochain pas
              </span>
            </div>
          </RevealMask>
        </div>

        {/* ═══════════════════════════════════════════
            TITRE — 2 lignes en cascade
            ═══════════════════════════════════════════ */}
        <h2
          className="font-display tracking-[-0.02em] text-[#0a0a0a] mb-6 md:mb-7 max-w-[1400px]"
          style={{
            fontSize: "clamp(32px, 4.8vw, 76px)",
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          <RevealMask delay={150} duration={1100}>
            <span className="block">
              Commençons par identifier ce qui fera réellement
            </span>
          </RevealMask>
          <RevealMask delay={300} duration={1100}>
            <span className="block">avancer votre présence digitale.</span>
          </RevealMask>
        </h2>

        {/* ═══════════════════════════════════════════
            DESCRIPTION — fade
            ═══════════════════════════════════════════ */}
        <RevealFade delay={500} duration={900}>
          <p className="text-[14px] md:text-[15px] leading-relaxed text-[#1a1a1a]/75 mb-10 md:mb-12 max-w-[780px]">
            Un premier échange nous permet de comprendre votre situation, vos priorités et les
            leviers les plus utiles—sans vous imposer une formule standard.
          </p>
        </RevealFade>

        {/* ═══════════════════════════════════════════
            CTA — scale + fade
            ═══════════════════════════════════════════ */}
        <RevealScale delay={700} duration={1000}>
          <div className="flex items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 font-display text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-[#0a0a0a] font-medium px-8 py-4 border-2 border-[#0a0a0a] overflow-hidden transition-colors duration-500 hover:text-[#EDEAE3]"
            >
              {/* Fond noir qui glisse au hover */}
              <span className="absolute inset-0 bg-[#0a0a0a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              {/* Contenu */}
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
        </RevealScale>
      </div>
    </section>
  );
}