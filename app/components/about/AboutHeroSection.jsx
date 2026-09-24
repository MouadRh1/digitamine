import Link from "next/link";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="relative h-screen max-h-screen flex items-center overflow-hidden pt-[72px] pb-[60px] bg-[#050505]">
      {/* ═══════════════════════════════════════════
          ARRIÈRE-PLAN
          ═══════════════════════════════════════════ */}

      {/* Grands arcs décoratifs (côté droit) */}
      <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none opacity-40 hidden md:block">
        <svg
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          fill="none"
        >
          <circle cx="700" cy="400" r="500" stroke="rgba(201,162,39,0.10)" strokeWidth="1" />
          <circle cx="700" cy="400" r="380" stroke="rgba(201,162,39,0.08)" strokeWidth="1" />
          <circle cx="700" cy="400" r="260" stroke="rgba(201,162,39,0.12)" strokeWidth="1" />
        </svg>
      </div>

      {/* Grille de fond subtile */}
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

      {/* Halo doré diffus */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      {/* ═══════════════════════════════════════════
          CONTENU PRINCIPAL
          ═══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ─── Colonne gauche : label + titre + description + lien ─── */}
          <div className="lg:col-span-7">
            {/* Label supérieur — aligné à gauche comme Services */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-[1px] bg-[#C9A227]" />
              <span className="font-display text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-[#C9A227]">
                À propos
              </span>
              <span className="font-display text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-[#C9A227]/50">
                / 01
              </span>
            </div>

            {/* Titre principal */}
            <h1
              className="font-display tracking-[-0.02em] mb-6 md:mb-8"
              style={{
                fontSize: "clamp(32px, 4.8vw, 76px)",
                lineHeight: 1.02,
                fontWeight: 400,
              }}
            >
              <span className="text-white">Une agence de</span>
              <br />
              <span className="text-white">systèmes.</span>
              <br />
              <span className="text-[#C9A227]">Une équipe</span>
              <br />
              <span className="text-[#C9A227]">profondément humaine.</span>
            </h1>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] mb-6 md:mb-8 max-w-[560px]">
              Nous réunissons stratégie, création, technologie et production autour
              d&apos;une même ambition : rendre les entreprises plus visibles, plus crédibles
              et plus prêtes à convertir.
            </p>

            {/* Lien "Découvrir notre approche ↓" */}
            <Link
              href="#approche"
              className="group inline-flex items-center gap-3 font-display text-[12px] md:text-[13px] tracking-[0.05em] text-white hover:text-[#C9A227] transition-colors duration-200"
            >
              Découvrir notre approche
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

          {/* ─── Colonne droite : 2 photos superposées ─── */}
          <div className="lg:col-span-5 relative h-[320px] md:h-[400px] lg:h-[440px] xl:h-[480px]">
            {/* Photo principale (grande) */}
            <div className="absolute top-0 left-0 w-[85%] h-[80%] overflow-hidden border border-[rgba(201,162,39,0.2)]">
              <Image
                src="/images/abou-main.JPEG"
                alt="L'équipe Digitamine en train de travailler"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
              {/* Voile doré subtil */}
              <div className="absolute inset-0 bg-[#050505]/10 pointer-events-none" />
            </div>

            {/* Photo secondaire (petite) — en bas à droite */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[45%] overflow-hidden z-10 border border-[rgba(201,162,39,0.3)]">
              <Image
                src="/images/equipe/NABILL.JPG"
                alt="Équipe Digitamine sur le terrain"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-top"
              />
            </div>

            {/* Trait diagonal décoratif sur la photo principale */}
            <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden pointer-events-none z-20">
              <div className="absolute top-0 left-0 w-[1px] h-[120%] bg-gradient-to-b from-[rgba(201,162,39,0.6)] to-transparent origin-top-left rotate-[-45deg] translate-x-[8px] -translate-y-[30px]" />
            </div>

            {/* Coins décoratifs dorés (photo principale) */}
            <span className="absolute top-2 left-2 w-4 h-[1px] bg-[#C9A227]/70 z-20" />
            <span className="absolute top-2 left-2 w-[1px] h-4 bg-[#C9A227]/70 z-20" />

            {/* Coins décoratifs dorés (photo secondaire) */}
            <span className="absolute bottom-2 right-2 w-4 h-[1px] bg-[#C9A227]/70 z-20" />
            <span className="absolute bottom-2 right-2 w-[1px] h-4 bg-[#C9A227]/70 z-20" />
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

      {/* Marqueur "01 / À PROPOS" en bas à droite */}
      <div className="absolute bottom-6 right-8 hidden md:flex items-center gap-3 pointer-events-none">
        <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#C9A227]/60">
          01 / À PROPOS
        </span>
        <div className="w-12 h-[1px] bg-[#C9A227]/40" />
      </div>

      {/* Coins décoratifs dorés (section globale) */}
      <div className="absolute top-[100px] md:top-[112px] left-6 md:left-10 w-16 h-[1px] bg-[#C9A227]/40 pointer-events-none" />
      <div className="absolute top-[100px] md:top-[112px] left-6 md:left-10 w-[1px] h-16 bg-[#C9A227]/40 pointer-events-none" />
    </section>
  );
}