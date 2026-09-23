const principes = [
  { num: "01", title: "La stratégie avant la production" },
  { num: "02", title: "La clarté avant la complexité" },
  { num: "03", title: "La cohérence avant la quantité" },
  { num: "04", title: "La collaboration, pas l'exécution silencieuse" },
  { num: "05", title: "Des décisions adaptées à la réalité" },
  { num: "06", title: "L'humain derrière la marque" },
];

export default function PrincipesSection() {
  return (
    <section className="relative bg-[#050505] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header : label gauche + titre droite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 md:mb-16">
          {/* Label */}
          <div className="lg:col-span-3">
            <p className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
              Nos principes
            </p>
          </div>

          {/* Titre à droite */}
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

        {/* Liste des principes */}
        <div>
          {principes.map((p) => (
            <div
              key={p.num}
              className="grid grid-cols-12 gap-4 md:gap-8 items-center py-5 md:py-6 border-t border-[rgba(201,162,39,0.15)] group transition-colors duration-300 hover:bg-[rgba(201,162,39,0.03)]"
            >
              {/* Numéro */}
              <div className="col-span-2 md:col-span-1">
                <span className="font-display text-[11px] md:text-[12px] tracking-widest text-[#C9A227]">
                  {p.num}
                </span>
              </div>

              {/* Titre */}
              <div className="col-span-10 md:col-span-11">
                <h3
                  className="font-display tracking-tight text-white group-hover:text-[#C9A227] transition-colors duration-300"
                  style={{
                    fontSize: "clamp(16px, 1.5vw, 22px)",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
              </div>
            </div>
          ))}

          {/* Ligne de fermeture en bas */}
          <div className="border-t border-[rgba(201,162,39,0.15)]" />
        </div>
      </div>
    </section>
  );
}