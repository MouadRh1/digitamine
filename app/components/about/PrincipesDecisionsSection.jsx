const principes = [
  {
    num: "01",
    title: "Comprendre avant de créer",
    desc: "Nous commençons par le contexte, les objectifs et la réalité de l'entreprise.",
  },
  {
    num: "02",
    title: "La cohérence avant la quantité",
    desc: "Chaque contenu et chaque canal doivent participer à la même direction.",
  },
  {
    num: "03",
    title: "La clarté avant la complexité",
    desc: "Une stratégie utile doit pouvoir être comprise, suivie et appliquée.",
  },
  {
    num: "04",
    title: "Collaborer, vraiment",
    desc: "Le meilleur travail naît d'échanges francs, de responsabilités claires et d'une confiance mutuelle.",
  },
  {
    num: "05",
    title: "Montrer l'humain",
    desc: "Derrière chaque entreprise, il y a des personnes, des gestes et une expertise réelle.",
  },
  {
    num: "06",
    title: "Améliorer avec méthode",
    desc: "Nous observons, apprenons et ajustons sans perdre le fil stratégique.",
  },
];

export default function PrincipesDecisionsSection() {
  return (
    <section className="relative bg-[#050505] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ─── Header : label gauche + titre droite ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-14 md:mb-20">
          {/* Label à gauche */}
          <div className="lg:col-span-3 flex items-start gap-3">
            <div className="w-8 h-[1px] bg-[#C9A227] mt-2" />
            <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
              Nos principes
            </span>
          </div>

          {/* Titre à droite */}
          <div className="lg:col-span-9 lg:text-center">
            <h2
              className="font-display tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(32px, 4.8vw, 76px)",
                lineHeight: 1.05,
                fontWeight: 400,
              }}
            >
              Ce qui guide nos décisions,
              <br />
              avant les livrables.
            </h2>
          </div>
        </div>

        {/* ─── Grille 3x2 avec bordures partagées ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[rgba(201,162,39,0.15)]">
          {principes.map((p) => (
            <article
              key={p.num}
              className="group relative p-6 md:p-7 lg:p-8 border-b border-[rgba(201,162,39,0.15)] md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 transition-colors duration-300 hover:bg-[rgba(201,162,39,0.02)]"
            >
              {/* Numéro */}
              <span className="font-display text-[11px] md:text-[12px] tracking-widest text-[#C9A227]">
                {p.num}
              </span>

              {/* Titre (poussé vers le bas avec un grand espace) */}
              <h3
                className="font-display tracking-tight text-white mt-24 md:mt-32 lg:mt-40 mb-4 md:mb-5 group-hover:text-[#C9A227] transition-colors duration-300"
                style={{
                  fontSize: "clamp(18px, 1.6vw, 24px)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] max-w-[400px]">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}