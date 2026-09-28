"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, projects, aspectMap } from "@/app/data/realisations";

// ═══════════════════════════════════════════
// SHUFFLE : mélange un tableau de manière aléatoire (Fisher-Yates)
// ═══════════════════════════════════════════
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Catégories qui ouvrent le lightbox (photos uniquement)
const LIGHTBOX_CATEGORIES = ["Social Media Marketing", "Photographie"];

export default function RealisationsGridSection() {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [lightbox, setLightbox] = useState(null);
  const [shuffledProjects, setShuffledProjects] = useState([]);

  // ═══════════════════════════════════════════
  // Mélange UNE SEULE FOIS au montage côté client
  // ═══════════════════════════════════════════
  useEffect(() => {
    setShuffledProjects(shuffleArray(projects));
  }, []);

  // Projets filtrés par catégorie (avec ordre mélangé)
  const filtered = useMemo(() => {
    if (shuffledProjects.length === 0) return [];
    return activeFilter === "Tout"
      ? shuffledProjects
      : shuffledProjects.filter((p) => p.cat === activeFilter);
  }, [activeFilter, shuffledProjects]);

  // ═══════════════════════════════════════════
  // Projets "photo" qui ouvrent le lightbox
  // (SMMA + Photographie — sans vidéo)
  // ═══════════════════════════════════════════
  const lightboxProjects = useMemo(
    () =>
      filtered.filter(
        (p) => LIGHTBOX_CATEGORIES.includes(p.cat) && !p.video
      ),
    [filtered]
  );

  // ─── Gestion du clavier (Esc / ← / →) ───
  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((prev) =>
          prev
            ? { ...prev, index: (prev.index + 1) % lightboxProjects.length }
            : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index:
                  (prev.index - 1 + lightboxProjects.length) %
                  lightboxProjects.length,
              }
            : null
        );
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, lightboxProjects.length]);

  const openLightbox = (projectId) => {
    const idx = lightboxProjects.findIndex((p) => p.id === projectId);
    if (idx !== -1) setLightbox({ index: idx });
  };

  const closeLightbox = () => setLightbox(null);

  const goNext = () => {
    setLightbox((prev) =>
      prev
        ? { ...prev, index: (prev.index + 1) % lightboxProjects.length }
        : null
    );
  };

  const goPrev = () => {
    setLightbox((prev) =>
      prev
        ? {
            ...prev,
            index:
              (prev.index - 1 + lightboxProjects.length) %
              lightboxProjects.length,
          }
        : null
    );
  };

  const current = lightbox ? lightboxProjects[lightbox.index] : null;

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

          {/* Grille Masonry */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5">
            {filtered.map((p) => {
              const isExternal = p.link && p.link.startsWith("http");
              const hasVideo = !!p.video;
              const isSiteWeb = p.cat === "Sites web";
              const isCouvertureMedia = p.cat === "Couverture Media";
              const isSocialMedia = p.cat === "Social Media Marketing";
              const isPhotographie = p.cat === "Photographie";

              // ✅ Toutes les catégories "photo" qui ouvrent le lightbox
              const opensLightbox =
                (isSocialMedia || isPhotographie) && !hasVideo;

              /* ═══════════════════════════════════════════
                  🖥️ SITE WEB — Mockup navigateur
                  ═══════════════════════════════════════════ */
              if (isSiteWeb) {
                const domain = p.link
                  ? p.link.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
                  : `${p.title.toLowerCase()}.ma`;

                return (
                  <div key={p.id} className="break-inside-avoid mb-4 md:mb-5">
                    <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] border border-[rgba(201,162,39,0.2)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[rgba(201,162,39,0.6)] hover:shadow-[0_20px_60px_rgba(201,162,39,0.15)] hover:-translate-y-1">
                      {/* Barre de navigateur */}
                      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#252525] border-b border-[rgba(0,0,0,0.4)]">
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]" />
                          <span className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]" />
                          <span className="w-3 h-3 rounded-full bg-[#28C840] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]" />
                        </div>

                        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-[#0f0f0f] rounded-md border border-[rgba(255,255,255,0.06)]">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#C9A227"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0"
                          >
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>

                          <span className="font-display text-[10px] md:text-[11px] tracking-wider text-white/60 truncate">
                            {domain}
                          </span>
                        </div>
                      </div>

                      {/* Contenu du site */}
                      <a
                        href={p.link || "#"}
                        target={isExternal ? "_blank" : "_self"}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group block relative"
                      >
                        <div
                          className="relative w-full overflow-hidden"
                          style={{ aspectRatio: aspectMap[p.size] || "16/10" }}
                        >
                          <Image
                            src={p.img}
                            alt={p.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                          />

                          <div
                            className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.5) 40%, transparent 100%)",
                            }}
                          />

                          <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border border-[rgba(201,162,39,0.4)] bg-[rgba(5,5,5,0.8)] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
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

                          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-[#C9A227] text-[#050505] font-display text-[9px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                            </svg>
                            Visiter
                          </div>

                          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 z-20">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                {p.cat}
                              </span>
                              <span className="font-display text-[10px] md:text-[11px] tracking-wider text-white/60 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                {p.year}
                              </span>
                            </div>

                            <h3
                              className="font-display tracking-tight text-white mb-1.5 group-hover:text-[#C9A227] transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                              style={{
                                fontSize: "clamp(18px, 1.6vw, 24px)",
                                fontWeight: 500,
                                lineHeight: 1.15,
                              }}
                            >
                              {p.title}
                            </h3>

                            {p.desc && (
                              <p className="text-[12px] md:text-[13px] leading-relaxed text-white/80 transition-colors duration-500 max-w-[320px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                                {p.desc}
                              </p>
                            )}
                          </div>

                          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />
                        </div>
                      </a>
                    </div>
                  </div>
                );
              }

              /* ═══════════════════════════════════════════
                  🎬 VIDÉO COUVERTURE MEDIA — Format paysage 16:9
                  ═══════════════════════════════════════════ */
              if (hasVideo && isCouvertureMedia) {
                return (
                  <div key={p.id} className="break-inside-avoid mb-4 md:mb-5">
                    <div className="relative rounded-lg overflow-hidden bg-[#0a0a0a] border border-[rgba(201,162,39,0.2)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[rgba(201,162,39,0.6)] hover:shadow-[0_20px_60px_rgba(201,162,39,0.15)] hover:-translate-y-1">
                      <div
                        className="group relative overflow-hidden"
                        style={{ aspectRatio: "16/9" }}
                      >
                        <video
                          controls
                          playsInline
                          preload="metadata"
                          className="video-media absolute inset-0 w-full h-full object-cover"
                        >
                          <source src={p.video} type="video/mp4" />
                          Votre navigateur ne supporte pas la vidéo.
                        </video>

                        <div
                          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none z-10"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 40%, transparent 100%)",
                          }}
                        />

                        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-[#C9A227] text-[#050505] font-display text-[9px] tracking-[0.2em] uppercase">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 7l-7 5 7 5V7z" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                          </svg>
                          Couverture
                        </div>

                        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2 py-1 border border-[rgba(201,162,39,0.3)] bg-[rgba(5,5,5,0.7)] backdrop-blur-sm">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#C9A227"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
                            <line x1="6" y1="10" x2="6" y2="10" />
                          </svg>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-6 z-20 pointer-events-none">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-display text-[10px] tracking-[0.22em] uppercase text-[#C9A227] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                              {p.cat}
                            </span>
                            <span className="font-display text-[10px] tracking-wider text-white/60 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                              {p.year}
                            </span>
                          </div>

                          <h3
                            className="font-display tracking-tight text-white mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                            style={{
                              fontSize: "clamp(16px, 1.4vw, 22px)",
                              fontWeight: 500,
                              lineHeight: 1.15,
                            }}
                          >
                            {p.title}
                          </h3>

                          {p.desc && (
                            <p className="text-[11px] md:text-[12px] leading-relaxed text-white/80 max-w-[400px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                              {p.desc}
                            </p>
                          )}
                        </div>

                        <span className="absolute bottom-3 left-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />
                        <span className="absolute bottom-3 left-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />

                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />
                      </div>
                    </div>
                  </div>
                );
              }

              /* ═══════════════════════════════════════════
                  📱 VIDÉO PRODUCTION AUDIOVISUELLE — Format portrait 9:16
                  ═══════════════════════════════════════════ */
              if (hasVideo) {
                return (
                  <div key={p.id} className="break-inside-avoid mb-4 md:mb-5">
                    <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border-2 border-[rgba(201,162,39,0.2)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[rgba(201,162,39,0.6)] hover:shadow-[0_20px_60px_rgba(201,162,39,0.15)] hover:-translate-y-1">
                      <div
                        className="group relative overflow-hidden"
                        style={{ aspectRatio: "9/16" }}
                      >
                        <video
                          controls
                          playsInline
                          preload="metadata"
                          className="video-media absolute inset-0 w-full h-full object-cover"
                        >
                          <source src={p.video} type="video/mp4" />
                          Votre navigateur ne supporte pas la vidéo.
                        </video>

                        <div
                          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none z-10"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.5) 40%, transparent 100%)",
                          }}
                        />

                        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-[#C9A227] text-[#050505] font-display text-[9px] tracking-[0.2em] uppercase">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Video
                        </div>

                        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2 py-1 border border-[rgba(201,162,39,0.3)] bg-[rgba(5,5,5,0.7)] backdrop-blur-sm">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#C9A227"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
                            <line x1="12" y1="18" x2="12" y2="18" />
                          </svg>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-6 z-20 pointer-events-none">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-display text-[10px] tracking-[0.22em] uppercase text-[#C9A227] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                              {p.cat}
                            </span>
                            <span className="font-display text-[10px] tracking-wider text-white/60 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                              {p.year}
                            </span>
                          </div>

                          <h3
                            className="font-display tracking-tight text-white mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                            style={{
                              fontSize: "clamp(16px, 1.4vw, 22px)",
                              fontWeight: 500,
                              lineHeight: 1.15,
                            }}
                          >
                            {p.title}
                          </h3>

                          {p.desc && (
                            <p className="text-[11px] md:text-[12px] leading-relaxed text-white/80 max-w-[280px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                              {p.desc}
                            </p>
                          )}
                        </div>

                        <span className="absolute bottom-3 left-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />
                        <span className="absolute bottom-3 left-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />

                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />
                      </div>
                    </div>
                  </div>
                );
              }

              /* ═══════════════════════════════════════════
                  🖼️ IMAGE STANDARD — SMMA + Photographie → lightbox
                  ═══════════════════════════════════════════ */
              const imageContent = (
                <>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.3) 40%, transparent 65%)",
                    }}
                  />

                  <div className="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/8 transition-colors duration-500 pointer-events-none" />

                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-[1400ms] ease-out" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7 z-20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                        {p.cat}
                      </span>
                      <span className="font-display text-[10px] md:text-[11px] tracking-wider text-white/40">
                        {p.year}
                      </span>
                    </div>

                    <h3
                      className="font-display tracking-tight text-white mb-1.5 group-hover:text-[#C9A227] transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                      style={{
                        fontSize: isSocialMedia
                          ? "clamp(16px, 1.4vw, 22px)"
                          : "clamp(18px, 1.6vw, 24px)",
                        fontWeight: 500,
                        lineHeight: 1.15,
                      }}
                    >
                      {p.title}
                    </h3>

                    {p.desc && (
                      <p
                        className={`text-[12px] md:text-[13px] leading-relaxed text-white/70 group-hover:text-white/90 transition-colors duration-500 ${
                          isSocialMedia ? "max-w-[280px]" : "max-w-[320px]"
                        }`}
                      >
                        {p.desc}
                      </p>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border border-[rgba(201,162,39,0.4)] bg-[rgba(5,5,5,0.7)] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    {opensLightbox ? (
                      /* Icône "loupe" pour SMMA + Photographie */
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#C9A227" strokeWidth="1.8" />
                        <line x1="16" y1="16" x2="21" y2="21" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="11" y1="8" x2="11" y2="14" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="8" y1="11" x2="14" y2="11" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 10L10 2M10 2H5M10 2V7"
                          stroke="#C9A227"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <span className="absolute bottom-3 left-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />
                  <span className="absolute bottom-3 left-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />
                </>
              );

              const commonClasses =
                "group block break-inside-avoid relative overflow-hidden bg-[#101010] mb-4 md:mb-5 border border-[rgba(201,162,39,0.12)] hover:border-[rgba(201,162,39,0.5)] transition-all duration-500 cursor-pointer";

              const commonStyle = {
                aspectRatio: isSocialMedia
                  ? "9/16"
                  : aspectMap[p.size] || "4/3",
              };

              // ✅ SMMA + Photographie → bouton qui ouvre le lightbox
              if (opensLightbox) {
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => openLightbox(p.id)}
                    className={`${commonClasses} text-left w-full`}
                    style={commonStyle}
                    aria-label={`Voir ${p.title} en grand`}
                  >
                    {imageContent}
                  </button>
                );
              }

              // Autres → Link classique
              return (
                <Link
                  key={p.id}
                  href={`/realisations/${p.id}`}
                  className={commonClasses}
                  style={commonStyle}
                >
                  {imageContent}
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-32">
              <p className="font-display text-[18px] md:text-[22px] text-white/40">
                Aucun projet dans cette catégorie pour l&apos;instant.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LIGHTBOX MODAL — SMMA + Photographie
          ═══════════════════════════════════════════ */}
      {lightbox && current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(5,5,5,0.96)",
            backdropFilter: "blur(12px)",
          }}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-12 h-12 flex items-center justify-center border border-[rgba(201,162,39,0.4)] bg-[rgba(5,5,5,0.8)] hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300 group"
            aria-label="Fermer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-[#C9A227] group-hover:text-[#050505] transition-colors duration-300"
            >
              <path
                d="M3 3L15 15M15 3L3 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 flex items-center gap-3">
            <span className="font-display text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#C9A227]">
              {String(lightbox.index + 1).padStart(2, "0")} / {String(lightboxProjects.length).padStart(2, "0")}
            </span>
            <div className="w-12 h-[1px] bg-[#C9A227]/50" />
          </div>

          {lightboxProjects.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-[rgba(201,162,39,0.4)] bg-[rgba(5,5,5,0.8)] hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300 group"
              aria-label="Précédent"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-[#C9A227] group-hover:text-[#050505] transition-colors duration-300"
              >
                <path
                  d="M12 4L6 10l6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {lightboxProjects.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-[rgba(201,162,39,0.4)] bg-[rgba(5,5,5,0.8)] hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300 group"
              aria-label="Suivant"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-[#C9A227] group-hover:text-[#050505] transition-colors duration-300"
              >
                <path
                  d="M8 4l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <div
            className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.img}
              alt={current.title}
              width={1200}
              height={1600}
              sizes="90vw"
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              priority
            />

            <span className="absolute -top-2 -left-2 w-6 h-[1px] bg-[#C9A227]" />
            <span className="absolute -top-2 -left-2 w-[1px] h-6 bg-[#C9A227]" />
            <span className="absolute -bottom-2 -right-2 w-6 h-[1px] bg-[#C9A227]" />
            <span className="absolute -bottom-2 -right-2 w-[1px] h-6 bg-[#C9A227]" />
          </div>

          <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center px-4 pointer-events-none">
            <div className="max-w-[600px] text-center">
              <p className="font-display text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#C9A227] mb-2">
                {current.cat} · {current.year}
              </p>
              <h3
                className="font-display tracking-tight text-white mb-1"
                style={{
                  fontSize: "clamp(18px, 2vw, 26px)",
                  fontWeight: 500,
                }}
              >
                {current.title}
              </h3>
              {current.desc && (
                <p className="text-[12px] md:text-[13px] leading-relaxed text-white/70">
                  {current.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════
          CSS plein écran pour vidéos
          ═══════════════════════════════════════════ */}
      <style jsx global>{`
        video.video-media:fullscreen,
        video.video-media:-webkit-full-screen,
        video.video-media:-moz-full-screen {
          object-fit: contain !important;
          background: #000;
          width: 100% !important;
          height: 100% !important;
        }

        video.video-media::backdrop {
          background: #000;
        }
      `}</style>
    </>
  );
}