"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ServicesHeroSection() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  // ═══════════════════════════════════════════
  // Déclenche les animations après le premier rendu
  // ═══════════════════════════════════════════
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // ═══════════════════════════════════════════
  // Curseur gradient — LOCAL au Hero
  // ═══════════════════════════════════════════
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -500, y: -500 });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen max-h-screen flex items-center overflow-hidden pt-[72px] pb-[60px] bg-[#050505]"
    >
      {/* ═══════════════════════════════════════════
          CURSEUR GRADIENT LOCAL
          ═══════════════════════════════════════════ */}
      <div
        className="pointer-events-none absolute z-30 mix-blend-screen transition-transform duration-[120ms] ease-out hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 30%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute z-40 mix-blend-screen hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(230,201,92,1) 0%, rgba(201,162,39,0.6) 100%)",
            boxShadow: "0 0 20px rgba(201,162,39,0.8)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════
          ARRIÈRE-PLAN
          ═══════════════════════════════════════════ */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        poster="/images/expertises/SITEWEB.png"
      >
        <source src="/videos/services-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/70" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,5,5,0.9) 0%, transparent 50%, rgba(5,5,5,0.75) 100%)",
        }}
      />

      <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none opacity-30 hidden md:block">
        <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">
          <circle cx="700" cy="400" r="500" stroke="rgba(201,162,39,0.20)" strokeWidth="1" />
          <circle cx="700" cy="400" r="380" stroke="rgba(201,162,39,0.15)" strokeWidth="1" />
          <circle cx="700" cy="400" r="260" stroke="rgba(201,162,39,0.25)" strokeWidth="1" />
        </svg>
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      {/* ═══════════════════════════════════════════
          CONTENU PRINCIPAL
          ═══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* ─── Colonne gauche ─── */}
          <div className="lg:col-span-9">
            {/* Label supérieur */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <div
                className="flex items-center gap-3 transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]"
                style={{
                  transitionDuration: "1000ms",
                  transitionDelay: "0ms",
                  transform: mounted ? "translateY(0%)" : "translateY(110%)",
                }}
              >
                <div className="w-10 h-[1px] bg-[#C9A227]" />
                <span className="font-display text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-[#C9A227]">
                  Services
                </span>
              </div>
            </div>

            {/* Titre — 4 lignes en cascade */}
            <h1
              className="font-display tracking-[-0.02em] mb-6 md:mb-8"
              style={{
                fontSize: "clamp(36px, 5.2vw, 80px)",
                lineHeight: 1.02,
                fontWeight: 400,
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block text-white transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{
                    transitionDuration: "1100ms",
                    transitionDelay: "150ms",
                    transform: mounted ? "translateY(0%)" : "translateY(110%)",
                  }}
                >
                  Des expertises
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block text-white transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{
                    transitionDuration: "1100ms",
                    transitionDelay: "300ms",
                    transform: mounted ? "translateY(0%)" : "translateY(110%)",
                  }}
                >
                  précises.
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block text-[#C9A227] transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{
                    transitionDuration: "1100ms",
                    transitionDelay: "450ms",
                    transform: mounted ? "translateY(0%)" : "translateY(110%)",
                  }}
                >
                  Un système
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block text-[#C9A227] transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{
                    transitionDuration: "1100ms",
                    transitionDelay: "600ms",
                    transform: mounted ? "translateY(0%)" : "translateY(110%)",
                  }}
                >
                  cohérent.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] mb-6 md:mb-8 max-w-[620px] transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDuration: "900ms",
                transitionDelay: "800ms",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Nous ne vendons pas une liste de prestations. Nous connectons les bons
              leviers autour d&apos;un objectif business clair.
            </p>

            {/* Lien */}
            <div
              className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDuration: "900ms",
                transitionDelay: "950ms",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(-30px)",
              }}
            >
              <Link
                href="#expertises"
                className="group inline-flex items-center gap-3 font-display text-[12px] md:text-[13px] tracking-[0.05em] text-white hover:text-[#C9A227] transition-colors duration-200"
              >
                Explorer les expertises
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover:translate-y-1 transition-transform duration-300"
                >
                  <path
                    d="M7 2v10M3 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* ─── Colonne droite : "Notre rôle" ─── */}
          <div
            className="lg:col-span-3 flex items-end transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDuration: "1000ms",
              transitionDelay: "1100ms",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="w-full border-t border-[rgba(201,162,39,0.3)] pt-5 md:pt-6 mt-8 lg:mt-0">
              <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227] mb-3 md:mb-4">
                Notre rôle
              </p>
              <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0]">
                Voir l&apos;ensemble, prioriser l&apos;essentiel et faire travailler
                chaque action dans la même direction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          SCROLL INDICATOR — VISIBLE + ANIMÉ
          ═══════════════════════════════════════════ */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none transition-opacity duration-1000 z-10"
        style={{
          transitionDelay: "1400ms",
          opacity: mounted ? 1 : 0,
        }}
      >
        {/* Texte SCROLL — plus visible */}
        <span className="font-display text-[10px] md:text-[12px] tracking-[0.4em] uppercase text-[#C9A227] drop-shadow-[0_0_8px_rgba(201,162,39,0.5)]">
          SCROLL
        </span>

        {/* Flèche animée qui rebondit */}
        <div className="relative w-4 h-8 flex items-start justify-center overflow-hidden">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-[#C9A227] animate-scroll-arrow"
          >
            <path
              d="M7 2v10M3 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Ligne verticale dorée sous la flèche */}
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#C9A227]/70 to-transparent" />
      </div>

      {/* Marqueur "02 / SERVICES" */}
      <div
        className="absolute bottom-6 right-8 hidden md:flex items-center gap-3 pointer-events-none transition-opacity duration-1000"
        style={{
          transitionDelay: "1400ms",
          opacity: mounted ? 1 : 0,
        }}
      >
        <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#C9A227]/60">
          02 / SERVICES
        </span>
        <div className="w-12 h-[1px] bg-[#C9A227]/40" />
      </div>

      {/* Coins décoratifs */}
      <div className="absolute top-[100px] md:top-[112px] left-6 md:left-10 w-16 h-[1px] bg-[#C9A227]/40 pointer-events-none" />
      <div className="absolute top-[100px] md:top-[112px] left-6 md:left-10 w-[1px] h-16 bg-[#C9A227]/40 pointer-events-none" />

      {/* ═══════════════════════════════════════════
          ANIMATION CSS
          ═══════════════════════════════════════════ */}
      <style jsx global>{`
        @keyframes scroll-arrow {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          50% {
            transform: translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
        .animate-scroll-arrow {
          animation: scroll-arrow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}