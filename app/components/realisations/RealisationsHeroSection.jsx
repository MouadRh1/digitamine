import Link from "next/link";

const categories = [
  { num: "01", label: "Stratégie & contenu" },
  { num: "02", label: "Sites web & parcours" },
  { num: "03", label: "Meta Ads & acquisition" },
  { num: "04", label: "Production audiovisuelle" },
];

export default function RealisationsHeroSection() {
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

      {/* ─── Contenu principal (haut) ─── */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1400px] mx-auto px-6 md:px-10 w-full py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 w-full">
          {/* Colonne gauche — numéro + label */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                03
              </span>
              <div className="w-8 h-[1px] bg-[#C9A227]" />
              <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                Réalisations
              </span>
            </div>
          </div>

          {/* Colonne centrale — label + titre + description + lien */}
          <div className="lg:col-span-10">
            {/* Label supérieur */}
            <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227] mb-6 md:mb-8">
              Projets sélectionnés
            </p>

            {/* Titre principal */}
            <h1
              className="font-display tracking-[-0.02em] mb-8 md:mb-12"
              style={{
                fontSize: "clamp(44px, 7vw, 118px)",
                lineHeight: 0.98,
                fontWeight: 400,
              }}
            >
              <span className="text-white">Voir le travail.</span>
              <br />
              <span className="text-[#C9A227]">Comprendre le système.</span>
            </h1>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#A0A0A0] mb-8 md:mb-10 max-w-[700px]">
              Nos réalisations sont regroupées par service pour montrer précisément le rôle de
              chaque expertise dans le projet.
            </p>

            {/* Lien "Explorer par service ↓" */}
            <Link
              href="#categories"
              className="group inline-flex items-center gap-3 font-display text-[13px] md:text-[14px] tracking-[0.05em] text-white hover:text-[#C9A227] transition-colors duration-200"
            >
              Explorer par service
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
        </div>
      </div>

      {/* ─── Barre des catégories (bas) ─── */}
      <div
        id="categories"
        className="relative z-10 border-t border-b border-[rgba(201,162,39,0.15)] bg-[rgba(5,5,5,0.5)]"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {categories.map((cat, index) => (
              <Link
                key={cat.num}
                href={`#${cat.num}`}
                className={`group flex items-center gap-4 md:gap-5 px-6 md:px-10 py-5 md:py-6 border-[rgba(201,162,39,0.15)] transition-colors duration-300 hover:bg-[rgba(201,162,39,0.03)] ${
                  // Bordures verticales entre les items (sauf le dernier)
                  index < categories.length - 1 ? "border-r" : ""
                } ${index < 2 ? "border-b md:border-b-0" : ""}`}
              >
                <span className="font-display text-[11px] md:text-[12px] tracking-widest text-[#C9A227] shrink-0">
                  {cat.num}
                </span>
                <span className="font-display text-[13px] md:text-[14px] tracking-tight text-white group-hover:text-[#C9A227] transition-colors duration-300 whitespace-nowrap">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}