"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function VideoCard({
  href = "/services",
  videoSrc,
  poster,
  badge,
  category,
  title,
  desc,
}) {
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Détecte `prefers-reduced-motion`
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = (e) => setReducedMotion(e.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  // Autoplay automatique (sauf si reduced motion)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Autoplay bloqué:", err);
      });
    }
  }, [reducedMotion]);

  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-end aspect-[4/5] overflow-hidden bg-[#0a0a0a]"
    >
      {/* ═══ VIDÉO AUTOPLAY ═══ */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        onError={() => setHasError(true)}
      >
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Message d'erreur */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
          <p className="text-white/50 text-[12px] px-6 text-center">
            Impossible de charger la vidéo
          </p>
        </div>
      )}

      {/* ═══ OVERLAYS ═══ */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-[#050505]/40 transition-colors duration-500 pointer-events-none" />
      <div className="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/5 transition-colors duration-500 pointer-events-none" />

      {/* ═══ BADGE ═══ */}
      {/* {badge && (
        <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#C9A227] text-[#050505] font-display text-[9px] tracking-[0.2em] uppercase">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            {badge}
          </span>
        </div>
      )} */}

      {/* ═══ FLÈCHE ═══ */}
      <span className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center border border-[rgba(201,162,39,0.4)] group-hover:border-[#C9A227] group-hover:bg-[rgba(201,162,39,0.15)] transition-all duration-300 z-10">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 10L10 2M10 2H5M10 2V7"
            stroke="#C9A227"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* ═══ COINS DÉCORATIFS ═══ */}
      <span className="absolute bottom-3 right-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-10" />
      <span className="absolute bottom-3 right-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-10" />

      {/* ═══ LIGNE DORÉE ═══ */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />

      {/* ═══ CONTENU ═══ */}
      <div className="relative z-10 p-6 md:p-7">
        <p className="font-display text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#C9A227] mb-3">
          {category}
        </p>
        <h3
          className="font-display tracking-tight text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-500"
          style={{
            fontSize: "clamp(20px, 2vw, 28px)",
            fontWeight: 400,
            lineHeight: 1.1,
          }}
        >
          {title}
        </h3>
        {desc && (
          <p className="text-[12px] md:text-[13px] leading-relaxed text-[#A0A0A0] group-hover:text-white/90 transition-colors duration-500 max-w-[320px]">
            {desc}
          </p>
        )}

        {/* CTA */}
        <span className="inline-flex items-center gap-2 mt-4 font-display text-[10px] tracking-[0.15em] uppercase text-[#C9A227] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          Découvrir
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
    </Link>
  );
}