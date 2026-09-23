const formats = [
  {
    num: "01",
    title: "Besoin ciblé",
    desc: "Un site, une campagne, une production ou un dispositif clairement identifié.",
  },
  {
    num: "02",
    title: "Accompagnement continu",
    desc: "Une équipe partenaire pour structurer, produire et améliorer votre présence dans le temps.",
  },
  {
    num: "03",
    title: "Système complet",
    desc: "Une stratégie coordonnée entre contenu, web, publicité, design et production.",
  },
];

export default function FormatsTravailSection() {
  return (
    <section className="relative bg-[#050505] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ─── Header : label gauche + titre droite ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 md:mb-16">
          {/* Label à gauche */}
          <div className="lg:col-span-3 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#C9A227]" />
            <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
              Comment travailler ensemble
            </p>
          </div>

          {/* Titre à droite */}
          <div className="lg:col-span-9">
            <h2
              className="font-display tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(30px, 4vw, 62px)",
                lineHeight: 1.08,
                fontWeight: 400,
              }}
            >
              Le bon format dépend de votre
              <br />
              point de départ.
            </h2>
          </div>
        </div>

        {/* ─── Grille 3 cards avec bordures partagées ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[rgba(201,162,39,0.15)]">
          {formats.map((item) => (
            <article
              key={item.num}
              className="group relative p-6 md:p-7 lg:p-8 border-b border-[rgba(201,162,39,0.15)] md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 transition-colors duration-300 hover:bg-[rgba(201,162,39,0.02)]"
            >
              {/* Numéro */}
              <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                {item.num}
              </span>

              {/* Titre (poussé vers le bas avec marge large) */}
              <h3
                className="font-display tracking-tight text-white mt-24 md:mt-32 lg:mt-40 mb-4 md:mb-5 group-hover:text-[#C9A227] transition-colors duration-300"
                style={{
                  fontSize: "clamp(20px, 1.8vw, 26px)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] max-w-[420px]">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}