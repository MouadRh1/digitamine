"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const photos = [
  {
    num: "01",
    label: "PRÉPARATION",
    img: "/images/preparation.jpg",
  },
  {
    num: "02",
    label: "DIRECTION",
    img: "/images/direction.jpg",
  },
  {
    num: "03",
    label: "PRODUCTION",
    img: "/images/production.jpg",
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
// RevealLine : trait qui s'étend de gauche à droite
// ═══════════════════════════════════════════
function RevealLine({ children, delay = 0, duration = 1200 }) {
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

// ═══════════════════════════════════════════
// RevealQuote : citation avec animation d'apparition
// ═══════════════════════════════════════════
function RevealQuote({ children, delay = 0, duration = 1100 }) {
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
// RevealImage : image avec zoom + fade
// ═══════════════════════════════════════════
function RevealImage({ children, delay = 0, duration = 1200 }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

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
          : "translateY(30px) scale(0.96)",
      }}
    >
      {children}
    </div>
  );
}

export default function ConvictionSection() {
  return (
    <section className="relative bg-[#EDEAE3] overflow-hidden">
      {/* ═══════════════════════════════════════════
          DÉCORATIONS DE FOND
          ═══════════════════════════════════════════ */}
      <div
        className="absolute top-1/4 right-0 w-[800px] h-[800px] pointer-events-none opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.8) 0%, transparent 60%)",
          transform: "translate(30%, -20%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,10,10,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,10,10,1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          maskImage: "radial-gradient(ellipse 80% 60% at 30% 50%, black 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 30% 50%, black 30%, transparent 90%)",
        }}
      />

      {/* ═══════════════════════════════════════════
          PARTIE HAUTE : TEXTE ANIMÉ
          ═══════════════════════════════════════════ */}
      <div className="relative py-20 md:py-28 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* ─── Colonne gauche : label + titre ─── */}
            <div className="lg:col-span-6">
              {/* Label */}
              <div className="mb-8 md:mb-12">
                <RevealMask delay={0} duration={900}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-[1px] bg-[#C9A227]" />
                    <span className="font-display text-[13px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                      Notre conviction
                    </span>
                  </div>
                </RevealMask>
              </div>

              {/* Titre — 3 lignes en cascade */}
              <h2
                className="font-display tracking-[-0.03em] text-[#0a0a0a] mb-8"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 92px)",
                  lineHeight: 1.02,
                  fontWeight: 400,
                }}
              >
                <RevealMask delay={150} duration={1100}>
                  <span className="block">Le digital ne</span>
                </RevealMask>
                <RevealMask delay={300} duration={1100}>
                  <span className="block">fonctionne pas en</span>
                </RevealMask>
                <RevealMask delay={450} duration={1100}>
                  <span className="block" style={{ color: "#9c9c9c" }}>
                    pièces détachées.
                  </span>
                </RevealMask>
              </h2>

              {/* Trait doré + texte */}
              <RevealLine delay={700} duration={1200}>
                <div className="flex items-center gap-4 mt-8 md:mt-10">
                  <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A227] to-transparent" />
                  <span className="font-display text-[10px] tracking-[0.3em] uppercase text-[#C9A227]/60">
                    Penser en système
                  </span>
                </div>
              </RevealLine>
            </div>

            {/* ─── Colonne droite : texte + citation ─── */}
            <div className="lg:col-span-6 lg:pt-20">
              {/* Paragraphes */}
              <div className="space-y-6 mb-10 md:mb-14">
                <RevealFade delay={500} duration={900}>
                  <p className="text-[14px] md:text-[15px] leading-relaxed text-[#0a0a0a]/75 max-w-[560px]">
                    Un bon contenu ne compense pas un positionnement flou. Une campagne ne transforme pas un
                    parcours mal pensé. Un beau site ne sert pas l&apos;entreprise si son message reste difficile à
                    comprendre.
                  </p>
                </RevealFade>

                <RevealFade delay={650} duration={900}>
                  <p className="text-[14px] md:text-[15px] leading-relaxed text-[#0a0a0a]/75 max-w-[560px]">
                    C&apos;est pour cela que Digitamine pense en système. Nous commençons par comprendre l&apos;entreprise,
                    puis nous alignons les messages, les contenus, les supports et la diffusion autour d&apos;une direction
                    commune.
                  </p>
                </RevealFade>
              </div>

              {/* Séparateur + citation avec guillemets en bas à droite */}
              <div className="relative border-t border-[rgba(10,10,10,0.15)] pt-10 md:pt-12 pb-12 md:pb-16">
                {/* Guillemet doré décoratif — EN HAUT À GAUCHE */}
                <span
                  className="absolute -top-8 left-0 font-display text-[80px] md:text-[120px] leading-none text-[#C9A227] opacity-30 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Citation */}
                <RevealQuote delay={900} duration={1100}>
                  <blockquote
                    className="relative font-display tracking-[-0.01em] text-[#0a0a0a] pl-8 md:pl-12"
                    style={{
                      fontSize: "clamp(20px, 2.2vw, 34px)",
                      lineHeight: 1.15,
                      fontWeight: 400,
                    }}
                  >
                    Nous ne cherchons pas à occuper l&apos;espace.
                    <br />
                    Nous construisons une présence qui a du sens.
                  </blockquote>
                </RevealQuote>

                {/* Guillemet doré décoratif — EN BAS À DROITE */}
                <span
                  className="absolute bottom-0 right-0 font-display text-[80px] md:text-[120px] leading-none text-[#C9A227] opacity-30 select-none pointer-events-none"
                  aria-hidden="true"
                  style={{
                    transform: "rotate(180deg)",
                  }}
                >
                  &ldquo;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          PARTIE BASSE : FRISE DE 3 PHOTOS ANIMÉES
          ═══════════════════════════════════════════ */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0">
        {photos.map((photo, index) => (
          <RevealImage key={photo.num} delay={300 + index * 150} duration={1200}>
            <div className="group relative w-full aspect-[4/3] md:aspect-[16/14] overflow-hidden border-r last:border-r-0 border-[rgba(10,10,10,0.1)]">
              {/* Image */}
              <Image
                src={photo.img}
                alt={photo.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-all duration-[1200ms] ease-out group-hover:scale-110"
              />

              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-[#050505]/30 to-transparent group-hover:from-[#050505]/90 transition-all duration-500" />

              {/* Voile doré */}
              <div className="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/10 transition-colors duration-500 pointer-events-none" />

              {/* Effet shine */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-[1400ms] ease-out" />
              </div>

              {/* Coins décoratifs */}
              <span className="absolute top-4 left-4 w-6 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-10" />
              <span className="absolute top-4 left-4 w-[1px] h-6 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-10" />
              <span className="absolute bottom-4 right-4 w-6 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-10" />
              <span className="absolute bottom-4 right-4 w-[1px] h-6 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-10" />

              {/* Numéro géant */}
              {/* <span
                className="absolute top-4 right-4 md:top-6 md:right-6 font-display leading-none pointer-events-none select-none transition-all duration-500 group-hover:opacity-60"
                style={{
                  fontSize: "clamp(40px, 5vw, 72px)",
                  color: "rgba(201,162,39,0.25)",
                  fontWeight: 900,
                }}
              >
                {photo.num}
              </span> */}

              {/* Contenu bas */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 flex items-center justify-between">
                {/* <div className="flex items-center gap-3">
                  <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {photo.num}
                  </span>
                  <div className="w-6 h-[1px] bg-[#C9A227]/60" />
                </div> */}

                <span className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-[#C9A227] transition-colors duration-500">
                  {photo.label}
                </span>
              </div>

              {/* Ligne dorée animée en bas */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />
            </div>
          </RevealImage>
        ))}
      </div>
    </section>
  );
}