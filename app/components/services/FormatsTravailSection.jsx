"use client";

import { useEffect, useRef, useState } from "react";

const formats = [
  {
    num: "01",
    title: "Besoin ciblé",
    desc: "Un site, une campagne, une production ou un dispositif clairement identifié.",
  },
  {
    num: "02",
    title: "Accompagnement continu",
    desc: "Une équipe partenaire pour structurer, produire et faire évoluer votre présence digitale dans le temps.",
  },
  {
    num: "03",
    title: "Système complet",
    desc: "Une stratégie coordonnée entre contenu, web, publicité, design et production.",
  },
];

// Durée d'affichage de chaque étape (3 secondes)
const STEP_DURATION = 3000;

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
      <div className="w-full h-[1px] bg-[rgba(201,162,39,0.2)]" />
    </div>
  );
}

// ═══════════════════════════════════════════
// RevealStep : chaque point de la timeline
// ═══════════════════════════════════════════
function RevealStep({ children, delay = 0, duration = 900 }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(15px)",
      }}
    >
      {children}
    </div>
  );
}

export default function FormatsTravailSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotation toutes les 3 secondes
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % formats.length);
    }, STEP_DURATION);

    return () => clearInterval(interval);
  }, [paused]);

  // Pourcentage de progression (0 → 1 → 2 sur 2, donc 0% → 50% → 100%)
  const progress = active / (formats.length - 1);

  return (
    <section
      className="relative bg-[#050505] py-16 md:py-20 lg:py-24 overflow-hidden"
    //   onMouseEnter={() => setPaused(true)}
    //   onMouseLeave={() => setPaused(false)}
    >
      {/* Grille de fond */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-3 flex items-start gap-3">
            <RevealMask delay={0} duration={900}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-[1px] bg-[#C9A227] mt-2" />
                <p className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                  Comment travailler ensemble
                </p>
              </div>
            </RevealMask>
          </div>

          <div className="lg:col-span-9">
            <h2
              className="font-display tracking-[-0.02em] text-white mb-4 md:mb-5"
              style={{
                fontSize: "clamp(30px, 4vw, 62px)",
                lineHeight: 1.08,
                fontWeight: 400,
              }}
            >
              <RevealMask delay={150} duration={1100}>
                <span className="block">Le bon format dépend de votre</span>
              </RevealMask>
              <RevealMask delay={300} duration={1100}>
                <span className="block">point de départ.</span>
              </RevealMask>
            </h2>

            <RevealFade delay={500} duration={900}>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] max-w-[720px]">
                Un besoin précis, une présence à structurer ou plusieurs leviers à coordonner.
              </p>
            </RevealFade>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            TIMELINE HORIZONTALE
            ═══════════════════════════════════════════ */}
        <div className="relative mb-12 md:mb-16">
          {/* Ligne grise (fond) */}
          <RevealLine delay={700} duration={1200} />

          {/* Ligne dorée de progression — corrigée avec transform scaleX */}
          <div
            className="absolute top-0 left-0 h-[1px] bg-[#C9A227] origin-left transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] pointer-events-none"
            style={{
              width: "100%",
              transform: `scaleX(${progress})`,
              boxShadow: "0 0 8px rgba(201,162,39,0.5)",
            }}
          />

          {/* Points + labels */}
          <div className="relative grid grid-cols-3 gap-4 pt-[14px]">
            {formats.map((item, i) => {
              const isActive = active === i;
              const isPast = i < active;

              return (
                <RevealStep key={item.num} delay={800 + i * 120} duration={900}>
                  <button
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-start text-left cursor-pointer"
                  >
                    {/* Point */}
                    <div className="relative mb-5 md:mb-6">
                      {/* Halo doré au point actif */}
                      {isActive && (
                        <span className="absolute inset-0 -m-3 rounded-full bg-[#C9A227] opacity-20 blur-md" />
                      )}

                      {/* Anneau de progression */}
                      {isActive && !paused && (
                        <svg
                          className="absolute -inset-2 w-8 h-8 -rotate-90 pointer-events-none"
                          viewBox="0 0 32 32"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="14"
                            fill="none"
                            stroke="rgba(201,162,39,0.15)"
                            strokeWidth="1.5"
                          />
                          <circle
                            cx="16"
                            cy="16"
                            r="14"
                            fill="none"
                            stroke="#C9A227"
                            strokeWidth="1.5"
                            strokeDasharray={`${2 * Math.PI * 14}`}
                            strokeDashoffset={`${2 * Math.PI * 14}`}
                            strokeLinecap="round"
                            style={{
                              animation: `progress-ring ${STEP_DURATION}ms linear infinite`,
                            }}
                          />
                        </svg>
                      )}

                      <span
                        className={`relative block w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                          isActive
                            ? "bg-[#C9A227] border-[#C9A227] scale-125"
                            : isPast
                            ? "bg-[#C9A227]/60 border-[#C9A227]/60"
                            : "bg-[#050505] border-[rgba(201,162,39,0.4)] group-hover:border-[#C9A227]"
                        }`}
                      />
                    </div>

                    {/* Numéro + Label */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <span
                        className={`font-display text-[12px] md:text-[13px] tracking-widest transition-colors duration-300 ${
                          isActive ? "text-[#C9A227]" : "text-white/50 group-hover:text-[#C9A227]"
                        }`}
                      >
                        {item.num}
                      </span>
                      <span
                        className={`font-display text-[11px] md:text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                          isActive ? "text-[#C9A227]" : "text-white/60 group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </button>
                </RevealStep>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            CONTENU DÉTAILLÉ DE L'ÉTAPE ACTIVE
            ═══════════════════════════════════════════ */}
        <RevealFade delay={1200} duration={900}>
          <div className="relative border-t border-[rgba(201,162,39,0.15)] pt-10 md:pt-14">
            {/* Titre géant */}
            <h3
              key={active}
              className="font-display tracking-[-0.02em] text-white mb-5 md:mb-6 animate-fadeInUp"
              style={{
                fontSize: "clamp(36px, 5.2vw, 80px)",
                lineHeight: 1.02,
                fontWeight: 400,
              }}
            >
              {formats[active].title.toUpperCase()}
            </h3>

            {/* Description + CTA */}
            <div
              key={`content-${active}`}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#A0A0A0] max-w-[600px]">
                {formats[active].desc}
              </p>

              <a
                href="/contact"
                className="group inline-flex items-center gap-3 font-display text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-[#C9A227] hover:text-[#E6C95C] transition-colors duration-300 whitespace-nowrap"
              >
                Découvrir ce format
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Ligne de fermeture */}
            <div className="mt-10 md:mt-14 border-t border-[rgba(201,162,39,0.15)]" />
          </div>
        </RevealFade>
      </div>

      {/* ═══════════════════════════════════════════
          ANIMATIONS CSS
          ═══════════════════════════════════════════ */}
      <style jsx global>{`
        @keyframes progress-ring {
          from {
            stroke-dashoffset: ${2 * Math.PI * 14};
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out both;
        }
      `}</style>
    </section>
  );
}