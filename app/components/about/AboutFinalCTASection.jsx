import Link from "next/link";

export default function AboutFinalCTASection() {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Titre principal */}
        <h2
          className="font-display tracking-[-0.02em] text-white mb-10 md:mb-14 max-w-[1000px]"
          style={{
            fontSize: "clamp(32px, 5vw, 80px)",
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          Vous cherchez une
          <br />
          équipe qui comprend
          <br />
          avant d&apos;exécuter ?
        </h2>

        {/* ─── NOUVEAU BOUTON : outline doré + remplissage glissant ─── */}
        <Link
          href="/contact"
          className="group relative inline-flex items-center gap-3 font-display text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-[#C9A227] font-medium px-7 md:px-8 py-4 md:py-5 border border-[#C9A227] overflow-hidden transition-colors duration-500 hover:text-[#050505]"
        >
          {/* Fond doré qui glisse de gauche à droite */}
          <span className="absolute inset-0 bg-[#C9A227] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

          {/* Contenu au-dessus du fond animé */}
          <span className="relative z-10">Parler de votre projet</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="relative z-10 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300"
          >
            <path
              d="M2 12L12 2M12 2H5M12 2V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}