"use client";

import { useEffect, useRef, useState } from "react";
import SVG3DIcon from "./SVG3DIcon";

const principes = [
  {
    num: "01",
    title: "La stratégie avant la production",
    tag: "Priorité",
    svgPath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  },
  {
    num: "02",
    title: "La clarté avant la complexité",
    tag: "Méthode",
    svgPath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z"/></svg>`,
  },
  {
    num: "03",
    title: "La cohérence avant la quantité",
    tag: "Qualité",
    svgPath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  },
  {
    num: "04",
    title: "La collaboration, pas l'exécution silencieuse",
    tag: "Équipe",
    svgPath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    num: "05",
    title: "Des décisions adaptées à la réalité",
    tag: "Pragmatisme",
    svgPath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  },
  {
    num: "06",
    title: "L'humain derrière la marque",
    tag: "Vision",
    svgPath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  },
];

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
// RevealCard : fade + slide + scale (pour les cards)
// ═══════════════════════════════════════════
function RevealCard({ children, delay = 0, duration = 1000 }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? "translateY(0) scale(1)"
          : "translateY(40px) scale(0.96)",
      }}
    >
      {children}
    </div>
  );
}

export default function PrincipesSection() {
  return (
    <section className="relative bg-[#141414] border-t border-b border-[rgba(201,162,39,0.1)] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Halo doré diffus */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      {/* Grille décorative en arrière-plan */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ═══════════════════════════════════════════
            HEADER ANIMÉ
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-14 md:mb-20">
          {/* Label */}
          <div className="lg:col-span-3">
            <div className="mb-6 md:mb-8">
              <RevealMask delay={0} duration={900}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-[#C9A227]" />
                  <p className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                    Nos principes
                  </p>
                </div>
              </RevealMask>
            </div>
          </div>

          {/* Titre — 2 lignes en cascade */}
          <div className="lg:col-span-9 lg:text-right">
            <h2
              className="font-display tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(28px, 3.8vw, 54px)",
                lineHeight: 1.08,
                fontWeight: 400,
              }}
            >
              <RevealMask delay={150} duration={1000}>
                <span className="block">Ce qui guide notre travail,</span>
              </RevealMask>
              <RevealMask delay={350} duration={1000}>
                <span className="block">avant même de produire.</span>
              </RevealMask>
            </h2>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            GRILLE : cards avec animation en cascade
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {principes.map((p, index) => (
            <RevealCard
              key={p.num}
              delay={600 + index * 120}
              duration={1000}
            >
              <article className="group relative overflow-hidden bg-[#0d0d0d] border border-[rgba(201,162,39,0.15)] hover:border-[rgba(201,162,39,0.5)] transition-all duration-500 p-5 md:p-6 min-h-[220px] md:min-h-[250px] flex flex-col justify-between cursor-pointer h-full">
                {/* Halo doré intérieur */}
                <div
                  className="absolute -bottom-32 -right-32 w-[300px] h-[300px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)",
                  }}
                />

                {/* Ligne supérieure : numéro + tag */}
                <div className="relative z-10 flex items-start justify-between">
                  {/* <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                    {p.num}
                  </span> */}
                  <span className="font-display text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#C9A227]/70 group-hover:text-[#C9A227] transition-colors duration-300 border border-[rgba(201,162,39,0.25)] px-2 py-0.5">
                    {p.tag}
                  </span>
                </div>

                {/* Icône 3D au centre */}
                <div className="relative z-10 flex-1 flex items-center justify-center py-4">
                  <div className="relative w-[60px] h-[60px] flex items-center justify-center">
                    {/* Cercles concentriques animés */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="absolute w-[52px] h-[52px] rounded-full border border-[rgba(201,162,39,0.2)] group-hover:border-[rgba(201,162,39,0.5)] transition-colors duration-500" />
                      <span className="absolute w-[68px] h-[68px] rounded-full border border-[rgba(201,162,39,0.1)] group-hover:border-[rgba(201,162,39,0.3)] transition-colors duration-700" />
                    </div>

                    {/* Composant 3D (client-only) */}
                    <SVG3DIcon svg={p.svgPath} size={52} />
                  </div>
                </div>

                {/* Titre en bas */}
                <div className="relative z-10">
                  <h3
                    className="font-display tracking-tight text-white group-hover:text-[#C9A227] transition-colors duration-500"
                    style={{
                      fontSize: "clamp(14px, 1.3vw, 18px)",
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Ligne dorée animée en bas */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out" />
              </article>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}