export default function ContactHeroSection() {
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

      {/* Halo doré diffus à droite */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-40 hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.10) 0%, transparent 65%)",
        }}
      />

      {/* ─── Header : numéro + label en haut ─── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-6 md:pt-8">
        <div className="flex items-center gap-3">
          <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
            04
          </span>
          <div className="w-8 h-[1px] bg-[#C9A227]" />
          <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
            Contact
          </span>
        </div>
      </div>

      {/* ─── Contenu principal ─── */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1400px] mx-auto px-6 md:px-10 w-full py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end w-full">
          {/* ─── Colonne gauche : label + titre + description ─── */}
          <div className="lg:col-span-8">
            {/* Label supérieur */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-8 h-[1px] bg-[#C9A227]" />
              <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                Votre prochaine étape
              </span>
            </div>

            {/* Titre principal */}
            <h1
              className="font-display tracking-[-0.02em] mb-8 md:mb-10"
              style={{
                fontSize: "clamp(36px, 5.5vw, 92px)",
                lineHeight: 1.02,
                fontWeight: 400,
              }}
            >
              <span className="text-white">Parlons de votre</span>
              <br />
              <span className="text-white">situation.</span>
              <br />
              <span className="text-[#C9A227]">Pas seulement du</span>
              <br />
              <span className="text-[#C9A227]">livrable.</span>
            </h1>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] max-w-[640px]">
              Quelques informations suffisent pour comprendre votre contexte et
              préparer un échange réellement utile.
            </p>
          </div>

          {/* ─── Colonne droite : encart "info" ─── */}
          <div className="lg:col-span-4 lg:pb-2">
            <div className="border-t border-[rgba(201,162,39,0.25)] pt-5 md:pt-6 max-w-[420px] lg:ml-auto">
              {/* Petite icône (bulle de dialogue) */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="text-[#C9A227] mb-3"
              >
                <path
                  d="M15 10.5a4.5 4.5 0 0 1-4.5 4.5H4.5L2 17V5.25A2.25 2.25 0 0 1 4.25 3h6.25A4.5 4.5 0 0 1 15 7.5v3z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0]">
                Pas de formule imposée. Nous cherchons d&apos;abord à identifier ce qui mérite réellement
                votre attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}