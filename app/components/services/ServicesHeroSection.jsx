import Link from "next/link";

export default function ServicesHeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-[72px] bg-[#050505]">
      {/* Grands arcs décoratifs en arrière-plan (côté droit) */}
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

      {/* Contenu principal */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Colonne gauche — numéro + label */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-3">
              <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                02
              </span>
              <div className="w-8 h-[1px] bg-[#C9A227] mt-2" />
              <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227] leading-relaxed">
                Services
              </span>
            </div>
          </div>

          {/* Colonne centrale — titre + description + lien */}
          <div className="lg:col-span-7">
            {/* Label supérieur */}
            <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227] mb-5 md:mb-7">
              Nos expertises
            </p>

            {/* Titre principal — taille réduite */}
            <h1
              className="font-display tracking-[-0.02em] mb-6 md:mb-9"
              style={{
                fontSize: "clamp(32px, 4.8vw, 76px)",
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
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] mb-6 md:mb-9 max-w-[620px]">
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

          {/* Colonne droite — "Notre rôle" */}
          <div className="lg:col-span-3 flex items-end">
            <div className="w-full border-t border-[rgba(201,162,39,0.2)] pt-5 md:pt-6 mt-8 lg:mt-0">
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
    </section>
  );
}