import Link from "next/link";

export default function ServicesHeroSection() {
  return (
    <section className="relative h-screen max-h-screen flex items-center overflow-hidden pt-[72px] pb-[60px] bg-[#050505]">
      {/* ═══════════════════════════════════════════
          ARRIÈRE-PLAN — VIDÉO + OVERLAYS
          ═══════════════════════════════════════════ */}

      {/* Vidéo de fond (ou image) */}
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

      {/* Dégradé noir profond (bas → haut) pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/70" />

      {/* Dégradé diagonal cinématographique */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(5,5,5,0.9) 0%, transparent 50%, rgba(5,5,5,0.75) 100%)",
        }}
      />

      {/* Grands arcs décoratifs (côté droit) — conservés par-dessus */}
      <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none opacity-30 hidden md:block">
        <svg
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          fill="none"
        >
          <circle cx="700" cy="400" r="500" stroke="rgba(201,162,39,0.20)" strokeWidth="1" />
          <circle cx="700" cy="400" r="380" stroke="rgba(201,162,39,0.15)" strokeWidth="1" />
          <circle cx="700" cy="400" r="260" stroke="rgba(201,162,39,0.25)" strokeWidth="1" />
        </svg>
      </div>

      {/* Grille de fond subtile */}
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

      {/* Halo doré diffus */}
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
          {/* ─── Colonne gauche : label + titre + description + lien ─── */}
          <div className="lg:col-span-9">
            {/* Label supérieur */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-[1px] bg-[#C9A227]" />
              <span className="font-display text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-[#C9A227]">
                Services
              </span>
              <span className="font-display text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-[#C9A227]/50">
                / 02
              </span>
            </div>

            {/* Titre principal */}
            <h1
              className="font-display tracking-[-0.02em] mb-6 md:mb-8"
              style={{
                fontSize: "clamp(36px, 5.2vw, 80px)",
                lineHeight: 1.02,
                fontWeight: 400,
              }}
            >
              <span className="text-white">Des expertises</span>
              <br />
              <span className="text-white">précises.</span>
              <br />
              <span className="text-[#C9A227]">Un système</span>
              <br />
              <span className="text-[#C9A227]">cohérent.</span>
            </h1>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] mb-6 md:mb-8 max-w-[620px]">
              Nous ne vendons pas une liste de prestations. Nous connectons les bons
              leviers autour d&apos;un objectif business clair.
            </p>

            {/* Lien "Explorer les expertises ↓" */}
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

          {/* ─── Colonne droite : "Notre rôle" ─── */}
          <div className="lg:col-span-3 flex items-end">
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
          INDICATEURS BAS DE PAGE
          ═══════════════════════════════════════════ */}

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-display text-[9px] tracking-[0.3em] uppercase text-white/30">
          SCROLL
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#C9A227]/50 to-transparent" />
      </div>

      {/* Marqueur "02 / SERVICES" en bas à droite */}
      <div className="absolute bottom-6 right-8 hidden md:flex items-center gap-3 pointer-events-none">
        <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#C9A227]/60">
          02 / SERVICES
        </span>
        <div className="w-12 h-[1px] bg-[#C9A227]/40" />
      </div>

      {/* Coins décoratifs dorés */}
      <div className="absolute top-[100px] md:top-[112px] left-6 md:left-10 w-16 h-[1px] bg-[#C9A227]/40 pointer-events-none" />
      <div className="absolute top-[100px] md:top-[112px] left-6 md:left-10 w-[1px] h-16 bg-[#C9A227]/40 pointer-events-none" />
    </section>
  );
}