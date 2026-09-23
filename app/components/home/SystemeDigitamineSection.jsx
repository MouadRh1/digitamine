const steps = [
  { num: "01", title: "Comprendre", desc: "Votre activité, vos clients et vos objectifs." },
  { num: "02", title: "Structurer", desc: "Les messages, les canaux et les priorités." },
  { num: "03", title: "Créer", desc: "Les contenus, sites, vidéos et supports." },
  { num: "04", title: "Activer", desc: "La diffusion et les campagnes nécessaires." },
  { num: "05", title: "Améliorer", desc: "Les décisions à partir des résultats observés." },
];

export default function SystemeDigitamineSection() {
  return (
    <section className="relative bg-[#050505] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Label supérieur à gauche */}
        <p className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227] mb-6 md:mb-10">
          Le système Digitamine
        </p>

        {/* Titre principal centré */}
        <h2
          className="font-display tracking-[-0.02em] mb-10 md:mb-14 mx-auto text-center text-white max-w-[900px]"
          style={{
            fontSize: "clamp(26px, 3.4vw, 52px)",
            lineHeight: 1.1,
            fontWeight: 400,
          }}
        >
          Une présence digitale où
          <br />
          chaque élément joue un rôle.
        </h2>

        {/* Liste des étapes */}
        <div className="max-w-[1400px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-12 gap-4 md:gap-8 items-center py-5 md:py-6 border-t border-[rgba(201,162,39,0.15)]"
            >
              {/* Numéro */}
              <div className="col-span-2 md:col-span-1">
                <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                  {step.num}
                </span>
              </div>

              {/* Titre */}
              <div className="col-span-10 md:col-span-4">
                <h3
                  className="font-display tracking-tight text-white"
                  style={{
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0]">
                  {step.desc}
                </p>
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