import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen max-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* ═══════════════════════════════════════════
          ARRIÈRE-PLAN — VIDÉO + OVERLAYS
          ═══════════════════════════════════════════ */}

      {/* Vidéo de fond */}
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

      {/* Dégradé noir profond (bas → haut) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/60" />

      {/* Dégradé diagonal cinématographique */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(5,5,5,0.9) 0%, transparent 50%, rgba(5,5,5,0.7) 100%)",
        }}
      />

      {/* Grille dorée ultra-subtile */}
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

      {/* Halo doré large et diffus en bas */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(201,162,39,0.15) 0%, transparent 70%)",
        }}
      />

      {/* ═══════════════════════════════════════════
          CONTENU PRINCIPAL
          ═══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-[72px] pb-[120px]">
        {/* Numéro en haut à droite */}
        <div className="absolute top-[100px] md:top-[112px] left-6 md:left-10 right-6 md:right-10 flex items-center justify-end">
          <span className="font-display text-[11px] tracking-[0.22em] uppercase text-white/40">
            01 / ACCUEIL
          </span>
        </div>

        {/* Contenu centré verticalement — hauteur ajustée */}
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

          {/* Sous-titre + description en grille */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            {/* CTA à gauche */}
            <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 font-display text-[13px] tracking-[0.15em] uppercase text-[#050505] bg-[#C9A227] hover:bg-[#E6C95C] px-6 py-4 transition-all duration-300 font-medium"
              >
                Parler de votre projet
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="/about"
                className="font-display text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-[#C9A227] transition-colors duration-200 flex items-center gap-2"
              >
                Notre approche
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Description à droite */}
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
            BANDE INFÉRIEURE — STATS + SCROLL
            ═══════════════════════════════════════════ */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[rgba(201,162,39,0.15)] bg-[rgba(5,5,5,0.6)] backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {/* Stat 1 */}
              <div className="py-4 md:py-5 pr-6 border-r border-[rgba(201,162,39,0.1)]">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[22px] md:text-[28px] text-[#C9A227] leading-none">
                    50
                  </span>
                  <span className="font-display text-[14px] md:text-[18px] text-[#C9A227] leading-none">
                    +
                  </span>
                </div>
                <p className="font-display text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mt-1.5">
                  Projets livrés
                </p>
              </div>

              {/* Stat 2 */}
              <div className="py-4 md:py-5 pl-6 md:pl-0 md:pr-6 md:border-r border-[rgba(201,162,39,0.1)]">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[22px] md:text-[28px] text-[#C9A227] leading-none">
                    19
                  </span>
                  <span className="font-display text-[14px] md:text-[18px] text-[#C9A227] leading-none">
                    +
                  </span>
                </div>
                <p className="font-display text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mt-1.5">
                  Clients actifs
                </p>
              </div>

              {/* Stat 3 */}
              <div className="py-4 md:py-5 pr-6 border-r border-[rgba(201,162,39,0.1)] border-t md:border-t-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[22px] md:text-[28px] text-[#C9A227] leading-none">
                    06
                  </span>
                </div>
                <p className="font-display text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#A0A0A0] mt-1.5">
                  Disciplines
                </p>
              </div>

              {/* Scroll indicator */}
              <div className="py-4 md:py-5 pl-6 md:pl-0 md:pr-6 flex md:justify-end items-center border-t md:border-t-0">
                <div className="flex items-center gap-3">
                  <span className="font-display text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/40">
                    Défiler
                  </span>
                  <div className="w-[1px] h-6 bg-gradient-to-b from-[#C9A227]/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          DÉCORATIONS LATÉRALES
          ═══════════════════════════════════════════ */}

      {/* Ligne verticale décorative à droite */}
      <div className="absolute right-6 md:right-10 top-[140px] bottom-[140px] w-[1px] bg-gradient-to-b from-transparent via-[rgba(201,162,39,0.3)] to-transparent hidden md:block" />

      {/* Points dorés sur la ligne verticale */}
      <span className="absolute right-[19px] md:right-[35px] top-[30%] w-2 h-2 rounded-full bg-[#C9A227] shadow-[0_0_12px_rgba(201,162,39,0.8)] hidden md:block" />
      <span className="absolute right-[19px] md:right-[35px] top-[50%] w-2 h-2 rounded-full bg-[#C9A227]/60 hidden md:block" />
      <span className="absolute right-[19px] md:right-[35px] top-[70%] w-2 h-2 rounded-full bg-[#C9A227]/40 hidden md:block" />

      {/* Texte vertical à droite */}
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
    </section>
  );
}