"use client";

import { useState, useEffect } from "react";

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

// Durée d'affichage de chaque étape (en millisecondes)
const STEP_DURATION = 5000;

export default function FormatsTravailSection() {
  const [active, setActive] = useState(0); // 02 actif par défaut (comme la maquette)
  const [paused, setPaused] = useState(false);

  // ═══════════════════════════════════════════
  // AUTO-ROTATION : change d'étape toutes les 5s
  // ═══════════════════════════════════════════
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % formats.length);
    }, STEP_DURATION);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative bg-[#050505] py-16 md:py-20 lg:py-24 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Grille de fond subtile */}
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
            HEADER : label gauche + titre droite
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-3 flex items-start gap-3">
            <div className="w-10 h-[1px] bg-[#C9A227] mt-2" />
            <p className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
              Comment travailler ensemble
            </p>
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
              Le bon format dépend de votre
              <br />
              point de départ.
            </h2>

            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] max-w-[720px]">
              Un besoin précis, une présence à structurer ou plusieurs leviers à coordonner.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            TIMELINE HORIZONTALE
            ═══════════════════════════════════════════ */}
        <div className="relative mb-12 md:mb-16">
          {/* Ligne horizontale grise (fond) */}
          <div className="absolute top-[7px] left-[3%] right-[3%] h-[1px] bg-[rgba(201,162,39,0.2)]" />

          {/* Ligne horizontale dorée (progression jusqu'au point actif) */}
          <div
            className="absolute top-[7px] left-[3%] h-[1px] bg-[#C9A227] transition-all duration-500 ease-out"
            style={{
              width: `${(active / (formats.length - 1)) * 94}%`,
            }}
          />

          {/* Points + labels */}
          <div className="relative grid grid-cols-3 gap-4">
            {formats.map((item, i) => {
              const isActive = active === i;
              const isPast = i < active;

              return (
                <button
                  key={item.num}
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-start text-left cursor-pointer"
                >
                  {/* Point */}
                  <div className="relative mb-5 md:mb-6">
                    {/* Halo doré autour du point actif */}
                    {isActive && (
                      <span className="absolute inset-0 -m-3 rounded-full bg-[#C9A227] opacity-20 blur-md" />
                    )}

                    {/* Anneau de progression autour du point actif */}
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
                      className={`relative block w-4 h-4 rounded-full border-2 transition-all duration-300 ${
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
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            CONTENU DÉTAILLÉ DE L'ÉTAPE ACTIVE
            ═══════════════════════════════════════════ */}
        <div className="relative border-t border-[rgba(201,162,39,0.15)] pt-10 md:pt-14">
          {/* Titre géant avec animation de transition */}
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

          {/* Ligne dorée de fermeture en bas */}
          <div className="mt-10 md:mt-14 border-t border-[rgba(201,162,39,0.15)]" />
        </div>
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
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}