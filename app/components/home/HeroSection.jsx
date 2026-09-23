import Link from "next/link";
import GoldGeometry from "../GoldGeometry";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-[72px] bg-[#050505]">
      {/* Grille de fond subtile */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full py-8 grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center">
        {/* Colonne gauche — texte */}
        <div>
          {/* Label supérieur */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[1px] bg-[#C9A227]" />
            <span className="font-display text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
              Agence digitale · Maroc
            </span>
          </div>

          {/* Titre principal */}
          <h1
            className="font-display tracking-[-0.02em] mb-5 text-white"
            style={{
              fontSize: "clamp(32px, 4.2vw, 64px)",
              lineHeight: 1.08,
              fontWeight: 400,
            }}
          >
            Nous construisons
            <br />
            des <span className="text-[#C9A227]">systèmes</span>
            <br />
            <span className="text-[#C9A227]">digitaux.</span>
            <br />
            Pas du contenu au
            <br />
            hasard.
          </h1>

          {/* Sous-texte */}
          <p className="text-[14px] md:text-[15px] leading-relaxed mb-7 max-w-[520px] text-[#A0A0A0]">
            Stratégie, contenu, technologie et production réunis dans une
            direction commune—la vôtre.
          </p>

          {/* CTA + lien secondaire */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link href="/contact" className="btn-primary text-[13px]">
              Parler de votre projet
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 12L12 2M12 2H5M12 2V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/about"
              className="font-display text-[13px] tracking-[0.15em] uppercase text-white/85 hover:text-[#C9A227] transition-colors duration-200 flex items-center gap-2"
            >
              Découvrir notre approche
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
        </div>

        {/* Colonne droite — géométrie orbitale */}
        <div className="hidden lg:flex items-center justify-center relative h-[420px] pointer-events-none">
          <GoldGeometry size={400} />
        </div>
      </div>
    </section>
  );
}