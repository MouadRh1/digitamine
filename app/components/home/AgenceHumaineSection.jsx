"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ═══════════════════════════════════════════
// HOOK : Détecte quand un élément entre dans le viewport
// ═══════════════════════════════════════════
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Désactive les animations si l'utilisateur préfère reduced-motion
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
// REVEAL MASK : Contenu qui sort de sous un masque (slide up)
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
// REVEAL FADE : Contenu qui apparaît en fondu + slide
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
// REVEAL SCALE : Contenu qui zoome (parfait pour les images)
// ═══════════════════════════════════════════
function RevealScale({ children, delay = 0, duration = 1400 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(1.08)",
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// REVEAL LEFT : Contenu qui slide depuis la gauche
// ═══════════════════════════════════════════
function RevealLeft({ children, delay = 0, duration = 900 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateX(0)" : "translateX(-40px)",
      }}
    >
      {children}
    </div>
  );
}

export default function AgenceHumaineSection() {
  return (
    <section className="relative bg-[#141414] border-t border-b border-[rgba(201,162,39,0.08)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* ═══════════════════════════════════════════
            COLONNE GAUCHE : photo avec effet de zoom
            ═══════════════════════════════════════════ */}
        <RevealScale delay={100} duration={1400}>
          <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[560px] xl:min-h-[640px] lg:h-full overflow-hidden">
            <Image
              src="/images/equipe/humaine.jpeg"
              alt="Une agence humaine — équipe Digitamine"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "50% 22%" }}
              priority
            />
            {/* Léger voile sombre pour harmoniser */}
            <div className="absolute inset-0 bg-[#050505]/15" />
          </div>
        </RevealScale>

        {/* ═══════════════════════════════════════════
            COLONNE DROITE : contenu animé en cascade
            ═══════════════════════════════════════════ */}
        <div className="flex items-center px-6 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-[600px] mx-auto lg:mx-0">
            {/* Label supérieur — effet de masque */}
            <div className="mb-4 md:mb-6">
              <RevealMask delay={200} duration={900}>
                <p className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
                  Une agence humaine
                </p>
              </RevealMask>
            </div>

            {/* Titre principal — 3 lignes en cascade */}
            <div className="mb-5 md:mb-6">
              <h2
                className="font-display tracking-[-0.02em] text-white"
                style={{
                  fontSize: "clamp(26px, 3.2vw, 46px)",
                  lineHeight: 1.08,
                  fontWeight: 400,
                }}
              >
                <RevealMask delay={350} duration={1000}>
                  <span className="block">Les idées avancent</span>
                </RevealMask>
                <RevealMask delay={500} duration={1000}>
                  <span className="block">mieux quand les</span>
                </RevealMask>
                <RevealMask delay={650} duration={1000}>
                  <span className="block">expertises se parlent.</span>
                </RevealMask>
              </h2>
            </div>

            {/* Paragraphe — fade + slide */}
            <RevealFade delay={850} duration={900}>
              <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] mb-3 md:mb-4 max-w-[540px]">
                Stratégie, design, développement, vidéo et publicité collaborent
                dès le départ. Derrière chaque livrable, il y a des échanges, des
                choix et une équipe réellement impliquée.
              </p>
            </RevealFade>

            {/* Lien "Rencontrer l'équipe ↗" — slide depuis la gauche */}
            <RevealLeft delay={1000} duration={900}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-display text-[12px] tracking-[0.08em] uppercase text-[#C9A227] hover:text-[#E6C95C] transition-colors duration-200 mb-10 md:mb-12 group"
              >
                Rencontrer l&apos;équipe
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-200"
                >
                  <path
                    d="M2 10L10 2M10 2H5M10 2V7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </RevealLeft>

            {/* Ligne séparatrice + contenu bas — fade avec délai */}
            <RevealFade delay={1150} duration={900}>
              <div className="border-t border-[rgba(201,162,39,0.2)] pt-5 md:pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6">
                  {/* Label gauche */}
                  <p className="font-display text-[13px] tracking-tight text-[#C9A227] font-medium">
                    Une équipe
                  </p>

                  {/* Texte droite */}
                  <p className="text-[12px] md:text-[13px] leading-relaxed text-white md:text-right">
                    Plusieurs expertises.
                    <br />
                    Une direction commune.
                  </p>
                </div>
              </div>
            </RevealFade>
          </div>
        </div>
      </div>
    </section>
  );
}