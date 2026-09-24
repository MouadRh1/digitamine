"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    num: "01",
    tag: "ORIENTE LE SYSTÈME",
    title: "Stratégie digitale",
    subtitle: "Savoir où aller avant de commencer à produire.",
    desc: "Nous clarifions votre positionnement, vos objectifs et le rôle de chaque canal pour transformer des actions isolées en plan cohérent.",
    items: ["Diagnostic digital", "Positionnement & messages", "Priorités et feuille de route"],
    img: "/images/expertises/STRATEGY.png",
  },
  {
    num: "02",
    tag: "NOURRIT LA RELATION",
    title: "SMMA & contenu",
    subtitle: "Créer une présence régulière qui sert votre marque.",
    desc: "Nous transformons vos enjeux en lignes éditoriales, calendriers et contenus pensés pour informer, rassurer et engager.",
    items: ["Stratégie éditoriale", "Calendrier mensuel", "Posts, carrousels & suivi"],
    img: "/images/expertises/SMMA.png",
  },
  {
    num: "03",
    tag: "CENTRALISE LA PREUVE",
    title: "Sites web",
    subtitle: "Faire de votre site un outil de confiance et de conversion.",
    desc: "Nous structurons le parcours, les messages et l'interface pour que vos visiteurs comprennent votre valeur et sachent quoi faire ensuite.",
    items: ["Site vitrine", "Landing pages", "UX, design & développement"],
    img: "/images/expertises/SITEWEB.png",
  },
  {
    num: "04",
    tag: "ACTIVE LA DEMANDE",
    title: "Meta Ads",
    subtitle: "Accélérer la visibilité avec des campagnes maîtrisées.",
    desc: "Nous alignons l'offre, les créatifs, l'audience et le parcours après le clic afin que le budget média serve un objectif précis.",
    items: ["Stratégie média", "Créatifs publicitaires", "Pilotage & optimisation"],
    img: "/images/expertises/meta_ads.png",
  },
  {
    num: "05",
    tag: "HUMANISE LA MARQUE",
    title: "Production audiovisuelle",
    subtitle: "Montrer votre réalité avec exigence et authenticité.",
    desc: "Du concept à la post-production, nous créons des images qui donnent un visage à votre expertise, vos équipes et vos événements.",
    items: ["Concept & scripts", "Tournage", "Montage & déclinaisons"],
    img: "/images/expertises/production_av.png",
  },
  {
    num: "06",
    tag: "CRÉE LA COHÉRENCE",
    title: "Design graphique",
    subtitle: "Donner une forme claire et distinctive à vos messages.",
    desc: "Nous construisons des systèmes visuels cohérents pour vos campagnes, réseaux sociaux et supports de communication.",
    items: ["Direction visuelle", "Identité de campagne", "Supports digitaux"],
    img: "/images/expertises/graphique_design.png",
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
// RevealMask : contenu qui sort de sous un masque
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
function RevealFade({ children, delay = 0, duration = 900, y = 30 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// RevealImage : image avec zoom + fade + scale
// ═══════════════════════════════════════════
function RevealImage({ children, delay = 0, duration = 1400 }) {
  const [ref, isInView] = useInView({ threshold: 0.15 });

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
          : "translateY(40px) scale(0.96)",
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// RevealLeft / RevealRight : slide depuis un côté
// ═══════════════════════════════════════════
function RevealSide({ children, delay = 0, duration = 1000, direction = "left" }) {
  const [ref, isInView] = useInView();

  const initial = direction === "left" ? "-40px" : "40px";

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateX(0)" : `translateX(${initial})`,
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════
// RevealListItem : chaque item avec délai progressif
// ═══════════════════════════════════════════
function RevealListItem({ children, delay = 0, duration = 800 }) {
  const [ref, isInView] = useInView();

  return (
    <li
      ref={ref}
      className="group/item flex items-center gap-4 py-3.5 border-b border-[rgba(201,162,39,0.1)] last:border-b-0 transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateX(0)" : "translateX(-20px)",
      }}
    >
      {children}
    </li>
  );
}

export default function ServicesListSection() {
  return (
    <section id="expertises" className="relative overflow-hidden">
      {services.map((service, index) => {
        const isEven = index % 2 === 1;

        return (
          <article
            key={service.num}
            className={`relative overflow-hidden py-20 md:py-28 lg:py-32 ${
              isEven ? "bg-[#141414]" : "bg-[#050505]"
            }`}
          >
            {/* Halo doré diffus */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.06]"
              style={{
                background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
              }}
            />

            {/* Grille de fond */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
                `,
                backgroundSize: "100px 100px",
              }}
            />

            {/* Séparateur haut doré */}
            {index > 0 && (
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(201,162,39,0.15)]" />
            )}

            <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* ═══════════════════════════════════════════
                    COLONNE IMAGE
                    ═══════════════════════════════════════════ */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  } order-1`}
                >
                  <RevealImage delay={100} duration={1400}>
                    <div className="group/img relative overflow-hidden aspect-[16/9] border border-[rgba(201,162,39,0.15)] hover:border-[rgba(201,162,39,0.4)] transition-colors duration-500">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />

                      {/* Overlay dégradé */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-[#050505]/20 to-transparent" />

                      {/* Numéro en overlay */}
                      <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 flex items-center gap-3">
                        <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                          {service.num}
                        </span>
                        <div className="w-6 h-[1px] bg-[#C9A227]" />
                        <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                          {service.tag}
                        </span>
                      </div>

                      {/* Trait diagonal */}
                      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-[1px] h-[200%] bg-gradient-to-b from-[rgba(201,162,39,0.5)] to-transparent origin-top-right rotate-45 translate-x-[10px] -translate-y-[40px]" />
                      </div>

                      {/* Coins décoratifs */}
                      <span className="absolute top-3 left-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500" />
                      <span className="absolute top-3 left-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500" />
                      <span className="absolute bottom-3 right-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500" />
                      <span className="absolute bottom-3 right-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500" />

                      {/* Effet shine */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-[1400ms] ease-out" />
                      </div>

                      {/* Numéro géant */}
                      <div
                        className="absolute top-4 right-4 font-display leading-none pointer-events-none select-none"
                        style={{
                          fontSize: "clamp(48px, 6vw, 80px)",
                          color: "rgba(201,162,39,0.15)",
                          fontWeight: 900,
                        }}
                      >
                        {service.num}
                      </div>
                    </div>
                  </RevealImage>
                </div>

                {/* ═══════════════════════════════════════════
                    COLONNE TEXTE — slide depuis le côté opposé
                    ═══════════════════════════════════════════ */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  } order-2`}
                >
                  <RevealSide
                    delay={250}
                    duration={1100}
                    direction={isEven ? "left" : "right"}
                  >
                    {/* Tag */}
                    <div className="mb-4 md:mb-6 overflow-hidden">
                      <div
                        className="flex items-center gap-3 transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]"
                        style={{
                          transitionDuration: "1000ms",
                          transitionDelay: "400ms",
                        }}
                      >
                        <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                          {service.num}
                        </span>
                        <span className="w-6 h-[1px] bg-[#C9A227]" />
                        <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* Titre — masque */}
                    <h3
                      className="font-display tracking-[-0.02em] text-white mb-4 md:mb-6"
                      style={{
                        fontSize: "clamp(32px, 4.2vw, 62px)",
                        lineHeight: 1.02,
                        fontWeight: 400,
                      }}
                    >
                      <RevealMask delay={400} duration={1100}>
                        <span className="block">{service.title}</span>
                      </RevealMask>
                    </h3>

                    {/* Sous-titre — fade */}
                    <RevealFade delay={600} duration={900}>
                      <p
                        className="text-white mb-4 md:mb-5"
                        style={{
                          fontSize: "clamp(15px, 1.4vw, 19px)",
                          lineHeight: 1.3,
                          fontWeight: 500,
                        }}
                      >
                        {service.subtitle}
                      </p>
                    </RevealFade>

                    {/* Description — fade */}
                    <RevealFade delay={700} duration={900}>
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] max-w-[600px] mb-8 md:mb-10">
                        {service.desc}
                      </p>
                    </RevealFade>

                    {/* Liste "Ce que nous pouvons construire" */}
                    <RevealFade delay={800} duration={900}>
                      <div className="border-t border-[rgba(201,162,39,0.2)] pt-5 md:pt-6">
                        <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227] mb-5 md:mb-6">
                          Ce que nous pouvons construire
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-0">
                          {service.items.map((item, i) => (
                            <RevealListItem
                              key={item}
                              delay={900 + i * 100}
                              duration={800}
                            >
                              <span className="font-display text-[10px] tracking-widest text-[#C9A227]/60 shrink-0">
                                0{i + 1}
                              </span>
                              <span className="text-[#C9A227] text-[14px] leading-none font-light">
                                +
                              </span>
                              <span className="text-[13px] md:text-[14px] text-white/90 group-hover/item:text-[#C9A227] transition-colors duration-200">
                                {item}
                              </span>
                            </RevealListItem>
                          ))}
                        </ul>
                      </div>
                    </RevealFade>

                    {/* CTA */}
                    <RevealFade delay={1300} duration={900}>
                      <div className="mt-8 md:mt-10">
                        <span className="inline-flex items-center gap-2 font-display text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#C9A227] hover:text-[#E6C95C] transition-colors duration-300 cursor-pointer">
                          Découvrir ce service
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2 10L10 2M10 2H5M10 2V7"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </RevealFade>
                  </RevealSide>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}