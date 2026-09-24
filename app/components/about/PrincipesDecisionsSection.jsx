"use client";

import { useState } from "react";
import Image from "next/image";

const principes = [
  {
    num: "01",
    title: "COMPRENDRE AVANT DE CRÉER",
    desc: "Nous commençons par écouter, analyser le contexte et clarifier les véritables objectifs.",
  },
  {
    num: "02",
    title: "PRIVILÉGIER LA CLARTÉ ET LA COHÉRENCE",
    desc: "Chaque action doit participer à la même direction, avec un message clair et une exécution cohérente.",
  },
  {
    num: "03",
    title: "COLLABORER, VRAIMENT",
    desc: "Le meilleur travail naît d'échanges francs, de responsabilités claires et d'une confiance mutuelle.",
  },
  {
    num: "04",
    title: "GARDER L'HUMAIN AU CENTRE",
    desc: "Derrière chaque entreprise, il y a des personnes, des gestes et une expertise réelle.",
  },
  {
    num: "05",
    title: "AMÉLIORER AVEC MÉTHODE",
    desc: "Nous observons, apprenons et ajustons sans perdre le fil stratégique.",
  },
];

export default function PrincipesDecisionsSection() {
  const [active, setActive] = useState(0); // 01 actif par défaut

  return (
    <section className="relative bg-[#050505] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Halo doré diffus */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <div className="mb-12 md:mb-16">
          {/* Label supérieur */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-10 h-[1px] bg-[#C9A227]" />
            <span className="font-display text-[13px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
              Nos principes
            </span>
          </div>

          {/* Titre principal */}
          <h2
            className="font-display tracking-[-0.02em] text-white max-w-[900px]"
            style={{
              fontSize: "clamp(36px, 5.2vw, 80px)",
              lineHeight: 1.02,
              fontWeight: 400,
            }}
          >
            Ce qui guide nos décisions,
            <br />
            <span
              style={{
                color: "#9c9c9c",
              }}
            >
              avant les livrables.
            </span>
          </h2>
        </div>

        {/* ═══════════════════════════════════════════
            CONTENU : IMAGE + ACCORDÉON
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ─── Colonne gauche : image ─── */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-[rgba(201,162,39,0.2)]">
              <Image
                src="/images/nos_principe.jpeg"
                alt="L'équipe Digitamine en réunion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />

              {/* Voile sombre subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />

              {/* Coins décoratifs dorés */}
              <span className="absolute top-4 left-4 w-6 h-[1px] bg-[#C9A227]/70 z-10" />
              <span className="absolute top-4 left-4 w-[1px] h-6 bg-[#C9A227]/70 z-10" />
              <span className="absolute bottom-4 right-4 w-6 h-[1px] bg-[#C9A227]/70 z-10" />
              <span className="absolute bottom-4 right-4 w-[1px] h-6 bg-[#C9A227]/70 z-10" />

              {/* Badge en bas à gauche */}
              <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2">
                <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#C9A227] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  DIGITAMINE STUDIO
                </span>
              </div>
            </div>
          </div>

          {/* ─── Colonne droite : accordéon ─── */}
          <div className="lg:col-span-6">
            <div className="border-t border-[rgba(201,162,39,0.2)]">
              {principes.map((p, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={p.num}
                    className="border-b border-[rgba(201,162,39,0.2)]"
                  >
                    {/* Header cliquable */}
                    <button
                      onClick={() => setActive(isActive ? -1 : i)}
                      className="group w-full flex items-start gap-5 md:gap-7 py-6 md:py-8 text-left transition-all duration-500"
                      aria-expanded={isActive}
                    >
                      {/* Numéro */}
                      <span
                        className={`font-display tracking-widest text-[20px] md:text-[24px] leading-none shrink-0 transition-colors duration-500 ${
                          isActive ? "text-[#C9A227]" : "text-[#C9A227]/60"
                        }`}
                        style={{ fontWeight: 500 }}
                      >
                        {p.num}
                      </span>

                      {/* Titre */}
                      <span
                        className={`flex-1 font-display tracking-tight transition-colors duration-500 ${
                          isActive
                            ? "text-[#C9A227]"
                            : "text-white/70 group-hover:text-white"
                        }`}
                        style={{
                          fontSize: "clamp(16px, 1.6vw, 22px)",
                          fontWeight: 500,
                          lineHeight: 1.2,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {p.title}
                      </span>

                      {/* Indicateur + / − */}
                      <span
                        className={`relative w-5 h-5 md:w-6 md:h-6 shrink-0 flex items-center justify-center transition-transform duration-500 ${
                          isActive ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {isActive ? (
                          // Symbole "−" quand actif
                          <span className="block w-4 md:w-5 h-[2px] bg-[#C9A227]" />
                        ) : (
                          // Symbole "+" quand inactif
                          <>
                            <span className="absolute w-4 md:w-5 h-[2px] bg-[#C9A227]/80 group-hover:bg-[#C9A227] transition-colors duration-300" />
                            <span className="absolute w-[2px] h-4 md:h-5 bg-[#C9A227]/80 group-hover:bg-[#C9A227] transition-colors duration-300" />
                          </>
                        )}
                      </span>
                    </button>

                    {/* Description (accordéon) */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] pl-[52px] md:pl-[68px] pb-6 md:pb-8 max-w-[560px]">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}