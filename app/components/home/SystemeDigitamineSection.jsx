"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Comprendre",
    desc: "Avant de proposer, nous écoutons. Votre activité, votre marché, vos clients et vos objectifs.",
    highlight: "Une vision claire",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Structurer",
    desc: "Transformer les constats en direction claire.",
    highlight: "Un plan d'action cohérent",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Créer",
    desc: "Des contenus, sites, vidéos et supports qui servent vos objectifs.",
    highlight: "Des contenus utiles",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Activer",
    desc: "Diffuser au bon endroit, au bon moment.",
    highlight: "Une audience qualifiée",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-8-8 18-2-8-8-2z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Améliorer",
    desc: "Mesurer, apprendre et ajuster pour de meilleurs résultats.",
    highlight: "Une croissance durable",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const angles = [-90, -18, 54, 126, 198];
const AUTOPLAY_INTERVAL = 200;

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
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

// ═══════════════════════════════════════════
// COMPOSANT : Reveal avec masque (clip-path)
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
// COMPOSANT : Reveal avec fade + slide
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
        transform: isInView ? "translateY(0)" : "translateY(30px)",
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// COMPOSANT : Reveal avec scale (zoom)
// ═══════════════════════════════════════════
function RevealScale({ children, delay = 0, duration = 1200 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(0.9)",
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// COMPOSANT : Reveal depuis la gauche
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

export default function SystemeDigitamineSection() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const sectionRef = useRef(null);
  const tickRef = useRef(0);

  // Détecte l'entrée du composant dans le viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle : 2 tours puis stop
  useEffect(() => {
    if (!inView || isHovering || hasCompleted) return;

    const TOTAL_TICKS = steps.length * 2;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
      tickRef.current += 1;

      if (tickRef.current >= TOTAL_TICKS) {
        clearInterval(interval);
        setHasCompleted(true);
      }
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [inView, isHovering, hasCompleted]);

  const handleLeave = () => {
    setIsHovering(false);
    if (hasCompleted) setActive(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] py-16 md:py-20 lg:py-24 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ═══════════════════════════════════════════
              COLONNE GAUCHE : Label + Titre + Roue
              ═══════════════════════════════════════════ */}
          <div className="lg:sticky lg:top-24">
            {/* Label avec masque */}
            <div className="mb-6 md:mb-8">
              <RevealMask delay={0} duration={1000}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-[#C9A227]" />
                  <p className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                    Le système Digitamine
                  </p>
                </div>
              </RevealMask>
            </div>

            {/* Titre — ligne par ligne avec masque */}
            <div className="mb-5 md:mb-6">
              <h2
                className="font-display tracking-[-0.02em] text-white"
                style={{
                  fontSize: "clamp(28px, 3.4vw, 46px)",
                  lineHeight: 1.05,
                  fontWeight: 400,
                }}
              >
                <RevealMask delay={150} duration={1100}>
                  <span className="block">Une méthode claire.</span>
                </RevealMask>
                <RevealMask delay={300} duration={1100}>
                  <span className="block text-[#C9A227]">
                    Cinq étapes qui travaillent ensemble.
                  </span>
                </RevealMask>
              </h2>
            </div>

            {/* Paragraphe avec fade */}
            <RevealFade delay={500} duration={900}>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] mb-10 md:mb-12 max-w-[480px]">
                Nous ne commençons pas par publier. Nous commençons par comprendre.
              </p>
            </RevealFade>

            {/* ═══ LA ROUE — animation scale au scroll ═══ */}
            <RevealScale delay={700} duration={1400}>
              <div
                className="relative w-full max-w-[520px] aspect-square mx-auto lg:mx-0"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleLeave}
              >
                {/* Cercles décoratifs extérieurs */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="200" r="195" stroke="rgba(201,162,39,0.25)" strokeWidth="1" strokeDasharray="4 6" />
                  <circle cx="200" cy="200" r="180" stroke="rgba(201,162,39,0.15)" strokeWidth="1" />
                </svg>

                {/* Segments */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <defs>
                    <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {steps.map((step, i) => {
                    const startAngle = angles[i] - 36;
                    const endAngle = angles[i] + 36;
                    const start = polarToCartesian(200, 200, 180, startAngle);
                    const end = polarToCartesian(200, 200, 180, endAngle);
                    const startIn = polarToCartesian(200, 200, 90, startAngle);
                    const endIn = polarToCartesian(200, 200, 90, endAngle);

                    const isActive = active === i;

                    const path = `
                      M ${start.x} ${start.y}
                      A 180 180 0 0 1 ${end.x} ${end.y}
                      L ${endIn.x} ${endIn.y}
                      A 90 90 0 0 0 ${startIn.x} ${startIn.y}
                      Z
                    `;

                    return (
                      <path
                        key={i}
                        d={path}
                        fill={isActive ? "rgba(201,162,39,0.92)" : "rgba(201,162,39,0.05)"}
                        stroke={isActive ? "#E6C95C" : "rgba(201,162,39,0.35)"}
                        strokeWidth={isActive ? "2" : "1"}
                        filter={isActive ? "url(#gold-glow)" : undefined}
                        className="transition-all duration-500 ease-out cursor-pointer"
                        onMouseEnter={() => setActive(i)}
                      />
                    );
                  })}
                </svg>

                {/* Contenu central */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[180px] h-[180px] rounded-full bg-[#0a0a0a] border border-[rgba(201,162,39,0.4)] flex items-center justify-center text-center p-5">
                    <div>
                      <div className="font-display text-[11px] tracking-[0.25em] uppercase text-[#C9A227] mb-2">
                        UNE
                      </div>
                      <div className="font-display text-[13px] tracking-[0.15em] uppercase text-[#F5F5F5] leading-tight">
                        PRÉSENCE DIGITALE
                      </div>
                      <div className="font-display text-[13px] tracking-[0.15em] uppercase text-[#F5F5F5] leading-tight">
                        PLUS EFFICACE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Labels + icônes */}
                {steps.map((step, i) => {
                  const a = (angles[i] * Math.PI) / 180;
                  const R = 135;
                  const x = 50 + (Math.cos(a) * R * 100) / 400;
                  const y = 50 + (Math.sin(a) * R * 100) / 400;

                  const isActive = active === i;
                  const labelColor = isActive ? "#0a0a0a" : "rgba(255,255,255,0.7)";
                  const titleColor = isActive ? "#0a0a0a" : "#FFFFFF";

                  return (
                    <div
                      key={i}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 transition-colors duration-500 ease-out pointer-events-none"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <span style={{ color: labelColor }} className="transition-colors duration-500 ease-out">
                        {step.icon}
                      </span>
                      <span
                        style={{ color: labelColor }}
                        className="font-display text-[10px] tracking-widest transition-colors duration-500 ease-out"
                      >
                        {step.num}
                      </span>
                      <span
                        style={{ color: titleColor }}
                        className="font-display text-[10px] tracking-[0.15em] uppercase transition-colors duration-500 ease-out font-semibold"
                      >
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </RevealScale>
          </div>

          {/* ═══════════════════════════════════════════
              COLONNE DROITE : Ligne + Liste
              ═══════════════════════════════════════════ */}
          <div className="relative pl-0 md:pl-10" onMouseLeave={handleLeave}>
            {/* Ligne verticale décorative */}
            <RevealLeft delay={400} duration={1200}>
              <div className="absolute left-0 top-0 bottom-0 w-3 hidden md:flex flex-col items-center">
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[rgba(201,162,39,0.4)] to-transparent" />
                {steps.map((_, i) => {
                  const isActive = active === i;
                  return (
                    <span
                      key={i}
                      className={`absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border transition-all duration-500 ease-out ${
                        isActive
                          ? "bg-[#C9A227] border-[#C9A227] shadow-[0_0_12px_rgba(201,162,39,0.8)]"
                          : "bg-[#050505] border-[rgba(201,162,39,0.4)]"
                      }`}
                      style={{
                        top: `${(i + 0.5) * (100 / steps.length)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}
              </div>
            </RevealLeft>

            {/* Liste des étapes — chaque ligne avec RevealLeft + délai cascade */}
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <RevealLeft key={step.num} delay={600 + i * 120} duration={900}>
                  <div
                    className="relative grid grid-cols-12 gap-4 md:gap-6 py-6 md:py-8 border-t border-[rgba(201,162,39,0.15)] transition-all duration-500 ease-out cursor-pointer"
                    onMouseEnter={() => {
                      setIsHovering(true);
                      setActive(i);
                    }}
                  >
                    {/* Numéro géant */}
                    <div className="col-span-2">
                      <span
                        className="font-display leading-none tracking-tight transition-colors duration-500 ease-out"
                        style={{
                          fontSize: "clamp(40px, 4.5vw, 68px)",
                          fontWeight: 900,
                          color: isActive ? "#C9A227" : "rgba(201,162,39,0.25)",
                        }}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Titre + description + highlight */}
                    <div className="col-span-10 md:col-span-8">
                      <h3
                        className={`font-display tracking-tight mb-2 transition-colors duration-500 ease-out ${
                          isActive ? "text-[#C9A227]" : "text-white"
                        }`}
                        style={{
                          fontSize: "clamp(20px, 2.2vw, 32px)",
                          fontWeight: 600,
                          lineHeight: 1.1,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] mb-3 max-w-[440px]">
                        {step.desc}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-[1px] bg-[#C9A227]" />
                        <span className="font-display text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#C9A227]">
                          {step.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Icône à droite */}
                    <div className="col-span-12 md:col-span-2 flex md:justify-end items-center">
                      <span
                        className={`transition-all duration-500 ease-out ${
                          isActive
                            ? "text-[#C9A227] scale-110 drop-shadow-[0_0_12px_rgba(201,162,39,0.6)]"
                            : "text-white/50"
                        }`}
                      >
                        <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-current rounded-sm">
                          {step.icon}
                        </span>
                      </span>
                    </div>
                  </div>
                </RevealLeft>
              );
            })}

            {/* Ligne de fermeture */}
            <RevealFade delay={1200} duration={600}>
              <div className="border-t border-[rgba(201,162,39,0.15)]" />
            </RevealFade>
          </div>
        </div>
      </div>
    </section>
  );
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}