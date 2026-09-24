"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ═══════════════════════════════════════════
// COMPOSANT : Compteur animé
// ═══════════════════════════════════════════
function AnimatedCounter({ target, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = performance.now();
            const startValue = 0;

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(startValue + (target - startValue) * easeOut);

              setCount(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(target);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {String(count).padStart(2, "0")}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const sectionRef = useRef(null);

  // ═══════════════════════════════════════════
  // Curseur LOCAL — seulement si la souris est dans le Hero
  // ═══════════════════════════════════════════
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      // Position relative à la section
      const rect = section.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseLeave = () => {
      // Cache le curseur quand la souris quitte le Hero
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
      className="relative h-screen max-h-screen flex items-center overflow-hidden bg-[#050505]"
    >
      {/* ═══════════════════════════════════════════
          CURSEUR GRADIENT LOCAL (dans le Hero uniquement)
          ═══════════════════════════════════════════ */}

      {/* Halo gradient */}
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

      {/* Point central doré */}
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
          ARRIÈRE-PLAN — VIDÉO + OVERLAYS
          ═══════════════════════════════════════════ */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        poster="/images/expertises/SMMA.png"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/60" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,5,5,0.9) 0%, transparent 50%, rgba(5,5,5,0.7) 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(201,162,39,0.15) 0%, transparent 70%)",
        }}
      />

      {/* ═══════════════════════════════════════════
          CONTENU PRINCIPAL
          ═══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-[72px] pb-[120px]">
        <div className="flex flex-col justify-center h-[calc(100vh-72px-120px)] min-h-[400px] pt-16">
          {/* Titre principal */}
          <h1
            className="font-display tracking-[-0.03em] text-white mb-6 md:mb-8 max-w-[1100px]"
            style={{
              fontSize: "clamp(36px, 6vw, 96px)",
              lineHeight: 0.98,
              fontWeight: 400,
            }}
          >
            Nous construisons
            <br />
            des{" "}
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "1.5px #C9A227",
              }}
            >
              systèmes
            </span>
            <br />
            <span className="text-[#C9A227]">digitaux.</span>
          </h1>

          {/* Sous-titre + description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            {/* CTA */}
            <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 font-display text-[13px] tracking-[0.15em] uppercase text-[#050505] bg-[#C9A227] hover:bg-[#E6C95C] px-6 py-4 transition-all duration-300 font-medium"
              >
                Parler de votre projet
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
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

              <Link
                href="/about"
                className="font-display text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A227] transition-colors duration-200 flex items-center gap-2"
              >
                Notre approche
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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

            {/* Description */}
            <div className="md:col-span-5 md:col-start-8">
              <div className="border-l-2 border-[#C9A227] pl-5">
                <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] max-w-[480px]">
                  Stratégie, contenu, technologie et production réunis dans une
                  direction commune — la vôtre.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BANDE INFÉRIEURE — STATS ANIMÉES
            ═══════════════════════════════════════════ */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[rgba(201,162,39,0.15)] bg-[rgba(5,5,5,0.6)] backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {/* Stat 1 — Projets livrés */}
              <div className="py-4 md:py-5 pr-6 border-r border-[rgba(201,162,39,0.1)]">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[22px] md:text-[28px] text-[#C9A227] leading-none tabular-nums">
                    <AnimatedCounter target={120} duration={2500} />
                  </span>
                  <span className="font-display text-[14px] md:text-[18px] text-[#C9A227] leading-none">
                    +
                  </span>
                </div>
                <p className="font-display text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mt-1.5">
                  Projets livrés
                </p>
              </div>

              {/* Stat 2 — Clients actifs */}
              <div className="py-4 md:py-5 pl-6 md:pl-0 md:pr-6 md:border-r border-[rgba(201,162,39,0.1)]">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[22px] md:text-[28px] text-[#C9A227] leading-none tabular-nums">
                    <AnimatedCounter target={19} duration={2200} />
                  </span>
                  <span className="font-display text-[14px] md:text-[18px] text-[#C9A227] leading-none">
                    +
                  </span>
                </div>
                <p className="font-display text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mt-1.5">
                  Clients actifs
                </p>
              </div>

              {/* Stat 3 — Disciplines */}
              <div className="py-4 md:py-5 pr-6 border-r border-[rgba(201,162,39,0.1)] border-t md:border-t-0">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[22px] md:text-[28px] text-[#C9A227] leading-none tabular-nums">
                    <AnimatedCounter target={6} duration={1800} />
                  </span>
                </div>
                <p className="font-display text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mt-1.5">
                  Disciplines
                </p>
              </div>

              {/* ═══════════════════════════════════════════
                  SCROLL INDICATOR ANIMÉ — texte agrandi + flèche animée
                  ═══════════════════════════════════════════ */}
              <div className="py-4 md:py-5 pl-6 md:pl-0 md:pr-6 flex md:justify-end items-center border-t md:border-t-0">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <span className="font-display text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-white/60 group-hover:text-[#C9A227] transition-colors duration-300">
                    Défiler
                  </span>

                  {/* Flèche animée */}
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          DÉCORATIONS LATÉRALES
          ═══════════════════════════════════════════ */}

      <div className="absolute right-6 md:right-10 top-[140px] bottom-[140px] w-[1px] bg-gradient-to-b from-transparent via-[rgba(201,162,39,0.3)] to-transparent hidden md:block" />

      <span className="absolute right-[19px] md:right-[35px] top-[30%] w-2 h-2 rounded-full bg-[#C9A227] shadow-[0_0_12px_rgba(201,162,39,0.8)] hidden md:block" />
      <span className="absolute right-[19px] md:right-[35px] top-[50%] w-2 h-2 rounded-full bg-[#C9A227]/60 hidden md:block" />
      <span className="absolute right-[19px] md:right-[35px] top-[70%] w-2 h-2 rounded-full bg-[#C9A227]/40 hidden md:block" />

      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div
          className="font-display text-[10px] tracking-[0.3em] uppercase text-[#C9A227]/60"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          DIGITAMINE · AGENCE DIGITALE · MAROC · 2024
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          ANIMATIONS CSS
          ═══════════════════════════════════════════ */}
      <style jsx global>{`
        @keyframes scroll-arrow {
          0% {
            transform: translateY(-8px);
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
            transform: translateY(10px);
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