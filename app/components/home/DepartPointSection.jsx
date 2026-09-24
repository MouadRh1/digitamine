"use client";

import { useEffect, useRef, useState } from "react";

// ═══════════════════════════════════════════
// HOOK : Détecte quand un élément entre dans le viewport
// ═══════════════════════════════════════════
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

// ═══════════════════════════════════════════
// COMPOSANT : Reveal avec effet de masque (clip-path)
// ═══════════════════════════════════════════
function RevealMask({ children, delay = 0, duration = 1200 }) {
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
// COMPOSANT : Reveal avec effet de fade + slide
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
// COMPOSANT : Titre animé mot par mot
// ═══════════════════════════════════════════
function AnimatedTitle({ children, delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  // Découpe le contenu pour identifier les mots à animer
  const lines = [
    { text: "Votre entreprise n'a pas besoin de faire ", highlight: null },
    { text: "plus de digital.", highlight: "gray" },
    { text: "Elle a besoin de mieux le structurer.", highlight: null },
  ];

  return (
    <h2
      ref={ref}
      className="font-display tracking-[-0.02em] max-w-[1300px] text-[#0a0a0a]"
      style={{
        fontSize: "clamp(36px, 5.2vw, 78px)",
        lineHeight: 1.04,
        fontWeight: 400,
      }}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block overflow-hidden">
          <span
            className="inline-block transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              transitionDuration: "1200ms",
              transitionDelay: `${delay + lineIndex * 150}ms`,
              transform: isInView ? "translateY(0%)" : "translateY(110%)",
              color: line.highlight === "gray" ? "#9c9c9c" : "#0a0a0a",
            }}
          >
            {line.text}
          </span>
        </span>
      ))}
    </h2>
  );
}

// ═══════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ═══════════════════════════════════════════
export default function DepartPointSection() {
  return (
    <section className="relative bg-[#EDEAE3] min-h-[70vh] max-h-[90vh] flex items-center py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* ─── DÉCORATIONS DE FOND ─── */}

      {/* Halo doré subtil en haut à droite */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 60%)",
          transform: "translate(30%, -30%)",
        }}
      />

      {/* Grille décorative avec masque radial */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,10,10,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,10,10,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 30% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 30% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Trait doré décoratif (coin haut-gauche) */}
      <div className="absolute top-12 left-6 md:top-16 md:left-10 w-20 h-[1px] bg-[#C9A227]/40 pointer-events-none" />
      <div className="absolute top-12 left-6 md:top-16 md:left-10 w-[1px] h-20 bg-[#C9A227]/40 pointer-events-none" />

      {/* ─── CONTENU ─── */}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* Label supérieur avec animation de masque */}
        <div className="mb-6 md:mb-8">
          <RevealMask delay={0} duration={1000}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#C9A227]" />
              <p className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                Le point de départ
              </p>
            </div>
          </RevealMask>
        </div>

        {/* Titre animé mot par mot */}
        <div className="mb-10 md:mb-14">
          <AnimatedTitle delay={150} />
        </div>

        {
          /* Grille des deux paragraphes avec fade --> */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-[1200px]">
            <RevealFade delay={600} duration={900}>
              <div className="relative pl-6 border-l-2 border-[#C9A227]">
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#1a1a1a]">
                  Publier, créer un site ou lancer une campagne ne suffit pas
                  lorsque chaque action avance dans une direction différente.
                </p>
              </div>
            </RevealFade>

            <RevealFade delay={750} duration={900}>
              <div className="relative pl-6 border-l-2 border-[#C9A227]">
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#1a1a1a]">
                  Nous commençons par comprendre votre entreprise. Ensuite, nous
                  connectons les bons leviers dans un système clair.
                </p>
              </div>
            </RevealFade>
          </div>

          /* <RevealFade delay={900} duration={800}>
          <div className="flex items-center gap-3 mt-12 md:mt-16">
            <div className="w-8 h-[1px] bg-[#0a0a0a]/30" />
            <span className="font-display text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a]/40">
              Penser en système
            </span>
          </div>
        </RevealFade> */
        }
      </div>
    </section>
  );
}
