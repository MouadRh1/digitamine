const principes = [
  { num: "01", title: "La stratégie avant la production", tag: "Priorité" },
  { num: "02", title: "La clarté avant la complexité", tag: "Méthode" },
  { num: "03", title: "La cohérence avant la quantité", tag: "Qualité" },
  { num: "04", title: "La collaboration, pas l'exécution silencieuse", tag: "Équipe" },
  { num: "05", title: "Des décisions adaptées à la réalité", tag: "Pragmatisme" },
  { num: "06", title: "L'humain derrière la marque", tag: "Vision" },
];

export default function PrincipesSection() {
  return (
    <section className="relative bg-[#141414] border-t border-b border-[rgba(201,162,39,0.1)] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* ─── Halo doré diffus ─── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      {/* ─── Grille décorative en arrière-plan ─── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ─── Header ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-14 md:mb-20">
          {/* Label */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#C9A227]" />
              <p className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
                Nos principes
              </p>
            </div>
          </div>

          {/* Titre */}
          <div className="lg:col-span-9 lg:text-right">
            <h2
              className="font-display tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(28px, 3.8vw, 54px)",
                lineHeight: 1.08,
                fontWeight: 400,
              }}
            >
              Ce qui guide notre travail,
              <br />
              avant même de produire.
            </h2>
          </div>
        </div>

        {/* ─── Grille 3x2 des principes ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {principes.map((p, index) => (
            <article
              key={p.num}
              className="group relative overflow-hidden bg-[#0d0d0d] border border-[rgba(201,162,39,0.15)] hover:border-[rgba(201,162,39,0.5)] transition-all duration-500 p-6 md:p-7 lg:p-8 min-h-[260px] md:min-h-[300px] flex flex-col justify-between cursor-pointer"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* ─── Halo doré intérieur ─── */}
              <div
                className="absolute -bottom-32 -right-32 w-[300px] h-[300px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)",
                }}
              />

              {/* ─── Trait diagonal décoratif ─── */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-[1px] h-[120%] bg-gradient-to-b from-[rgba(201,162,39,0.6)] to-transparent origin-top-right rotate-45 translate-x-[8px] -translate-y-[30px]" />
              </div>

              {/* ─── Ligne supérieure : numéro + tag ─── */}
              <div className="relative z-10 flex items-start justify-between mb-12 md:mb-16">
                <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                  {p.num}
                </span>
                <span className="font-display text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#C9A227]/70 group-hover:text-[#C9A227] transition-colors duration-300 border border-[rgba(201,162,39,0.25)] px-2.5 py-1">
                  {p.tag}
                </span>
              </div>

              {/* ─── Titre en bas ─── */}
              <div className="relative z-10">
                <h3
                  className="font-display tracking-tight text-white group-hover:text-[#C9A227] transition-colors duration-500"
                  style={{
                    fontSize: "clamp(18px, 1.6vw, 24px)",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
              </div>

              {/* ─── Ligne dorée animée en bas ─── */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}