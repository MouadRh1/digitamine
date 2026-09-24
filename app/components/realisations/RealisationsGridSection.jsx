"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, projects, aspectMap } from "@/app/data/realisations";

export default function RealisationsGridSection() {
  const [activeFilter, setActiveFilter] = useState("Tout");

  const filtered =
    activeFilter === "Tout"
      ? projects
      : projects.filter((p) => p.cat === activeFilter);

  return (
    <>
      {/* ═══════════════════════════════════════════
          FILTRES STICKY
          ═══════════════════════════════════════════ */}
      <div
        id="categories"
        className="sticky top-[72px] z-30 py-4 border-b border-[rgba(201,162,39,0.1)]"
        style={{
          background: "rgba(5,5,5,0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`whitespace-nowrap font-display text-[12px] md:text-[13px] tracking-[0.12em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                    isActive
                      ? "bg-[#C9A227] text-[#050505] border-[#C9A227]"
                      : "bg-transparent text-white/60 border-[rgba(201,162,39,0.2)] hover:border-[#C9A227] hover:text-[#C9A227]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          GRILLE MASONRY
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Compteur */}
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <p className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
              {filtered.length} projet{filtered.length > 1 ? "s" : ""}
            </p>
            <p className="font-display text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/40">
              {activeFilter === "Tout" ? "TOUT AFFICHER" : activeFilter}
            </p>
          </div>

          {/* Grille Masonry (colonnes) */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5">
            {filtered.map((p) => {
              const isExternal = p.link && p.link.startsWith("http");

              // Contenu de la card (réutilisé pour Link interne ou <a> externe)
              const cardContent = (
                <>
                  {/* Image de fond */}
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />

                  {/* Overlay dégradé bas */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.3) 40%, transparent 65%)",
                    }}
                  />

                  {/* Voile doré au hover */}
                  <div className="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/8 transition-colors duration-500 pointer-events-none" />

                  {/* Effet shine */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-[1400ms] ease-out" />
                  </div>

                  {/* Contenu (bas) */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                    {/* Catégorie + année */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                        {p.cat}
                      </span>
                      <span className="font-display text-[10px] md:text-[11px] tracking-wider text-white/40">
                        {p.year}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3
                      className="font-display tracking-tight text-white mb-1.5 group-hover:text-[#C9A227] transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                      style={{
                        fontSize: "clamp(18px, 1.6vw, 24px)",
                        fontWeight: 500,
                        lineHeight: 1.15,
                      }}
                    >
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12px] md:text-[13px] leading-relaxed text-white/70 group-hover:text-white/90 transition-colors duration-500 max-w-[320px]">
                      {p.desc}
                    </p>
                  </div>

                  {/* Flèche en haut à droite */}
                  <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border border-[rgba(201,162,39,0.4)] bg-[rgba(5,5,5,0.7)] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 10L10 2M10 2H5M10 2V7"
                        stroke="#C9A227"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Coins décoratifs dorés */}
                  <span className="absolute bottom-3 left-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-10" />
                  <span className="absolute bottom-3 left-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-10" />

                  {/* Ligne dorée en bas */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />
                </>
              );

              const cardClasses =
                "group block break-inside-avoid relative overflow-hidden bg-[#101010] mb-4 md:mb-5 border border-[rgba(201,162,39,0.12)] hover:border-[rgba(201,162,39,0.5)] transition-all duration-500";

              const cardStyle = {
                aspectRatio: aspectMap[p.size] || "4/3",
              };

              // Lien externe (pour les vrais projets Sites web)
              if (isExternal) {
                return (
                  <a
                    key={p.id}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses}
                    style={cardStyle}
                  >
                    {cardContent}
                  </a>
                );
              }

              // Lien interne
              return (
                <Link
                  key={p.id}
                  href={`/realisations/${p.id}`}
                  className={cardClasses}
                  style={cardStyle}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>

          {/* Message si aucun projet */}
          {filtered.length === 0 && (
            <div className="text-center py-32">
              <p className="font-display text-[18px] md:text-[22px] text-white/40">
                Aucun projet dans cette catégorie pour l&apos;instant.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}