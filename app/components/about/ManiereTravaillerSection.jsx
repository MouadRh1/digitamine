"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const pills = ["ÉCOUTER", "QUESTIONNER", "CONSTRUIRE", "AMÉLIORER"];

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
// RevealPill : pill avec fade + scale
// ═══════════════════════════════════════════
function RevealPill({ children, delay = 0, duration = 700 }) {
  const [ref, isInView] = useInView();

  return (
    <span
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? "translateY(0) scale(1)"
          : "translateY(10px) scale(0.9)",
      }}
    >
      {children}
    </span>
  );
}

// ═══════════════════════════════════════════
// RevealImage : image avec zoom + fade
// ═══════════════════════════════════════════
function RevealImage({ children, delay = 0, duration = 1400 }) {
  const [ref, isInView] = useInView({ threshold: 0.15 });

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
          : "translateY(30px) scale(0.96)",
      }}
    >
      {children}
    </div>
  );
}

export default function ManiereTravaillerSection() {
  return (
    <section className="relative bg-[#050505] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* ═══════════════════════════════════════════
            COLONNE GAUCHE : photo avec animation scale
            ═══════════════════════════════════════════ */}
        <RevealImage delay={100} duration={1400}>
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[520px] xl:min-h-[600px] overflow-hidden">
            <Image
              src="/images/maniere_travaille.png"
              alt="Notre manière de travailler chez Digitamine"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#050505]/20" />
          </div>
        </RevealImage>

        {/* ═══════════════════════════════════════════
            COLONNE DROITE : contenu sur fond doré — ANIMÉ
            ═══════════════════════════════════════════ */}
        <div className="flex items-center bg-[#C9A227] px-6 md:px-10 lg:px-14 xl:px-20 py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[620px] mx-auto lg:mx-0">
            {/* Label supérieur — masque */}
            <div className="mb-6 md:mb-8">
              <RevealMask delay={200} duration={900}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#050505]" />
                  <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#050505]">
                    Notre manière de travailler
                  </span>
                </div>
              </RevealMask>
            </div>

            {/* Titre principal — 3 lignes en cascade */}
            <h2
              className="font-display tracking-[-0.02em] text-[#050505] mb-6 md:mb-8"
              style={{
                fontSize: "clamp(32px, 4.2vw, 62px)",
                lineHeight: 1.05,
                fontWeight: 400,
              }}
            >
              <RevealMask delay={350} duration={1000}>
                <span className="block">Impliqués dans les</span>
              </RevealMask>
              <RevealMask delay={500} duration={1000}>
                <span className="block">détails.</span>
              </RevealMask>
              <RevealMask delay={650} duration={1000}>
                <span className="block">Alignés sur l&apos;essentiel.</span>
              </RevealMask>
            </h2>

            {/* Paragraphe — fade */}
            <RevealFade delay={850} duration={900}>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#050505]/80 mb-8 md:mb-12 max-w-[560px]">
                Nous aimons les idées ambitieuses, mais aussi les plannings clairs, les retours
                précis et les décisions réalistes. Notre créativité reste connectée aux objectifs, aux
                ressources et au quotidien de chaque client.
              </p>
            </RevealFade>

            {/* Pills (tags) — cascade */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {pills.map((pill, index) => (
                <RevealPill key={pill} delay={1000 + index * 100} duration={700}>
                  <span className="block font-display text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#050505] border border-[#050505]/40 px-4 py-2.5 md:px-5 md:py-3 transition-colors duration-300 hover:bg-[#050505] hover:text-[#C9A227] cursor-default">
                    {pill}
                  </span>
                </RevealPill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}