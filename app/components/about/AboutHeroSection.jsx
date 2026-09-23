import Link from "next/link";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden pt-[72px] bg-[#050505]">
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

      {/* Numéro + label en haut à gauche */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-6 md:pt-8">
        <div className="flex items-center gap-2">
          <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
            01
          </span>
          <span className="font-display text-[12px] md:text-[13px] text-[#C9A227]">
            —
          </span>
          <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
            À propos
          </span>
        </div>
      </div>

      {/* ─── Contenu principal ─── */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1400px] mx-auto px-6 md:px-10 w-full py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          {/* ─── Colonne gauche : texte ─── */}
          <div className="lg:col-span-7">
            {/* Label supérieur */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-8 h-[1px] bg-[#C9A227]" />
              <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                Digitamine
              </span>
            </div>

            {/* Titre principal */}
            <h1
              className="font-display tracking-[-0.02em] mb-6 md:mb-8"
              style={{
                fontSize: "clamp(36px, 5.5vw, 92px)",
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
              <span className="text-[#C9A227]">profondément</span>
              <br />
              <span className="text-[#C9A227]">humaine.</span>
            </h1>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] mb-8 md:mb-10 max-w-[560px]">
              Nous réunissons stratégie, création, technologie et production autour
              d&apos;une même ambition : rendre les entreprises plus visibles, plus crédibles
              et plus prêtes à convertir.
            </p>

            {/* Lien "Découvrir notre approche ↓" */}
            <Link
              href="#approche"
              className="group inline-flex items-center gap-3 font-display text-[13px] md:text-[14px] tracking-[0.05em] text-white hover:text-[#C9A227] transition-colors duration-200"
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
          <div className="lg:col-span-5 relative h-[360px] md:h-[440px] lg:h-[500px]">
            {/* Photo principale (grande) */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] overflow-hidden">
              <Image
                src="/images/about-main.jpg"
                alt="L'équipe Digitamine en train de travailler"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Photo secondaire (petite) — en bas à droite */}
            <div className="absolute bottom-0 right-[0%] w-[55%] h-[45%] overflow-hidden z-10">
              <Image
                src="/images/about-secondary.jpg"
                alt="Équipe Digitamine sur le terrain"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>

            {/* Légende verticale à droite */}
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-6 md:-right-8 xl:-right-10">
              <p
                className="font-display text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#C9A227] whitespace-nowrap"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Réfléchir ensemble. Construire ensemble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}