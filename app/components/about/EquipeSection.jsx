"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const membres = [
  {
    num: "01",
    name: "Mohamed Amine",
    role: "FONDATEUR & CEO",
    desc: "Définir la vision de l'agence et guider sa direction stratégique.",
    img: "/images/equipe/AMINE.png",
  },
  {
    num: "02",
    name: "Hidaya",
    role: "CHEFFE DU DÉPARTEMENT MARKETING",
    desc: "Transformer les objectifs business en stratégies marketing structurées.",
    img: "/images/equipe/HIDAYA.png",
  },
  {
    num: "03",
    name: "Nabil",
    role: "CHEF DU DÉPARTEMENT IT",
    desc: "Piloter la conception de solutions digitales solides, utiles et performantes.",
    img: "/images/equipe/NABIL.png",
  },
  {
    num: "04",
    name: "Asmae",
    role: "GRAPHISTE",
    desc: "Donner aux idées une identité visuelle claire, cohérente et reconnaissable.",
    img: "/images/equipe/ASMAE.png",
  },
  {
    num: "05",
    name: "Ayoub",
    role: "VIDÉASTE & DRONISTE",
    desc: "Capturer les personnes, les gestes et les projets depuis chaque perspective.",
    img: "/images/equipe/AYOUB.png",
  },
  {
    num: "06",
    name: "Zakaria",
    role: "PHOTOGRAPHE",
    desc: "Créer des images authentiques qui valorisent les personnes et leur savoir-faire.",
    img: "/images/equipe/ZAKARIA.png",
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
// RevealCard : carte avec fade + slide + scale
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

export default function EquipeSection() {
  return (
    <section className="relative bg-[#050505] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* ═══════════════════════════════════════════
          DÉCORATIONS DE FOND
          ═══════════════════════════════════════════ */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ═══════════════════════════════════════════
            HEADER ANIMÉ
            ═══════════════════════════════════════════ */}
        <div className="mb-14 md:mb-20">
          {/* Label */}
          <div className="mb-8 md:mb-10">
            <RevealMask delay={0} duration={900}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#C9A227]" />
                <span className="font-display text-[13px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                  L&apos;équipe
                </span>
              </div>
            </RevealMask>
          </div>

          {/* Titre — 2 lignes en cascade */}
          <h2
            className="font-display tracking-[-0.02em] text-white mb-6 md:mb-8 max-w-[1000px]"
            style={{
              fontSize: "clamp(36px, 5.2vw, 80px)",
              lineHeight: 1.02,
              fontWeight: 400,
            }}
          >
            <RevealMask delay={150} duration={1100}>
              <span className="block">Des expertises différentes.</span>
            </RevealMask>
            <RevealMask delay={300} duration={1100}>
              <span className="block" style={{ color: "#9c9c9c" }}>
                Une responsabilité partagée.
              </span>
            </RevealMask>
          </h2>

          {/* Description */}
          <RevealFade delay={500} duration={900}>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] max-w-[720px]">
              Digitamine fonctionne comme une équipe connectée : la stratégie
              informe la création, la création dialogue avec la production, et la
              technologie soutient l&apos;expérience.
            </p>
          </RevealFade>
        </div>

        {/* ═══════════════════════════════════════════
            GRILLE DE CARDS — ANIMATIONS EN CASCADE
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {membres.map((membre, index) => (
            <RevealCard
              key={membre.num}
              delay={700 + index * 120}
              duration={1000}
            >
              <article className="group relative overflow-hidden aspect-[3/4] border border-[rgba(201,162,39,0.15)] hover:border-[rgba(201,162,39,0.6)] transition-all duration-500 cursor-pointer">
                {/* ═══════════════════════════════════════════
                    PHOTO EN ARRIÈRE-PLAN
                    ═══════════════════════════════════════════ */}
                <Image
                  src={membre.img}
                  alt={membre.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:brightness-50"
                  priority={index < 3}
                />

                {/* ═══════════════════════════════════════════
                    OVERLAYS
                    ═══════════════════════════════════════════ */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none" />

                <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-[#050505]/60 transition-colors duration-700 pointer-events-none" />

                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(to top, rgba(201,162,39,0.15) 0%, transparent 50%)",
                  }}
                />

                {/* BADGE "ÉQUIPE" EN HAUT À DROITE */}
                <div className="absolute top-5 right-5 md:top-6 md:right-6 z-20">
                  <span className="inline-block px-2.5 py-1 bg-[#C9A227] text-[#050505] font-display text-[9px] tracking-[0.2em] uppercase">
                    Équipe
                  </span>
                </div>

                {/* COINS DÉCORATIFS */}
                <span className="absolute top-3 left-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />
                <span className="absolute top-3 left-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />
                <span className="absolute bottom-3 right-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />
                <span className="absolute bottom-3 right-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />

                {/* ═══════════════════════════════════════════
                    CONTENU EN BAS
                    ═══════════════════════════════════════════ */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-6 lg:p-7">
                  {/* Nom */}
                  <h3
                    className="font-display tracking-tight text-white mb-2 group-hover:text-[#C9A227] transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                    style={{
                      fontSize: "clamp(20px, 1.8vw, 26px)",
                      fontWeight: 500,
                      lineHeight: 1.15,
                    }}
                  >
                    {membre.name}
                  </h3>

                  {/* Rôle */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-[1px] bg-[#C9A227]" />
                    <p className="font-display text-[13px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                      {membre.role}
                    </p>
                  </div>

                  {/* Description (hover) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-[12px] md:text-[13px] leading-relaxed text-[#d0d0d0] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        {membre.desc}
                      </p>

                      <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                        <div className="w-8 h-[1px] bg-[#C9A227]" />
                        <span className="font-display text-[9px] tracking-[0.25em] uppercase text-[#C9A227]">
                          Voir le profil
                        </span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <path
                            d="M2 6h8M6 2l4 4-4 4"
                            stroke="#C9A227"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EFFET SHINE */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-[1400ms] ease-out" />
                </div>

                {/* LIGNE DORÉE ANIMÉE EN BAS */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-30" />
              </article>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}