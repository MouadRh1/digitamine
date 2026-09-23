import Link from "next/link";

const expertises = [
  {
    num: "01",
    title: "Stratégie digitale",
    desc: "Clarifier votre positionnement, vos priorités et le rôle de chaque action.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "SMMA & contenu",
    desc: "Construire une présence régulière, cohérente et utile à votre audience.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Sites web",
    desc: "Présenter votre valeur, renforcer la confiance et faciliter la conversion.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Meta Ads",
    desc: "Donner plus de portée aux bons messages auprès des bonnes audiences.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-8-8 18-2-8-8-2z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Production audiovisuelle",
    desc: "Rendre votre expertise, vos équipes et votre activité visibles.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="1" />
        <polygon points="22 8 16 12 22 16 22 8" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Design graphique",
    desc: "Donner à chaque message une forme claire, distinctive et mémorable.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
];

export default function ExpertisesSection() {
  return (
    <section className="relative bg-[#050505] py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Halo doré diffus en arrière-plan */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.4) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ─── Header ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-3">
            <p className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
              Nos expertises
            </p>
          </div>

          <div className="lg:col-span-6 lg:text-left">
            <h2
              className="font-display tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(28px, 3.8vw, 54px)",
                lineHeight: 1.08,
                fontWeight: 400,
              }}
            >
              Les bons leviers.
              <br />
              Connectés
              <br />
              intelligemment.
            </h2>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end items-start">
            <Link
              href="/services"
              className="font-display text-[12px] md:text-[13px] tracking-[0.08em] uppercase text-[#C9A227] hover:text-[#E6C95C] transition-colors duration-200 inline-flex items-center gap-2 group"
            >
              Explorer tous les services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-200"
              >
                <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ─── Grille 3x2 avec cards animées ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {expertises.map((item, index) => (
            <article
              key={item.num}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[400px] lg:min-h-[440px] border border-[rgba(201,162,39,0.15)] hover:border-[rgba(201,162,39,0.5)] transition-all duration-500 cursor-pointer bg-[#0a0a0a]"
            >
              {/* ─── Grille décorative en arrière-plan ─── */}
              <div
                className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
                  `,
                  backgroundSize: "60px 60px",
                }}
              />

              {/* ─── Halo doré qui grandit au hover ─── */}
              <div
                className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle, rgba(201,162,39,0.25) 0%, transparent 60%)",
                }}
              />

              {/* ─── Trait diagonal décoratif (coin haut-droite) ─── */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[1px] h-[200%] bg-gradient-to-b from-[rgba(201,162,39,0.3)] to-transparent origin-top-right rotate-[45deg] translate-x-[10px] -translate-y-[50px]" />
              </div>

              {/* ─── Contenu ─── */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-7 lg:p-8">
                {/* Ligne supérieure : numéro + icône géante */}
                <div className="flex items-start justify-between">
                  <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                    {item.num}
                  </span>

                  {/* Icône avec animation de rotation au hover */}
                  <span className="text-[#C9A227] opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg]">
                    {item.icon}
                  </span>
                </div>

                {/* Contenu bas */}
                <div>
                  {/* Titre */}
                  <h3
                    className="font-display tracking-tight text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-500"
                    style={{
                      fontSize: "clamp(18px, 1.6vw, 24px)",
                      fontWeight: 500,
                      lineHeight: 1.15,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] group-hover:text-[#d0d0d0] transition-colors duration-500 max-w-[320px]">
                    {item.desc}
                  </p>

                  {/* Flèche qui apparaît au hover */}
                  <span className="inline-flex items-center gap-2 mt-5 font-display text-[11px] tracking-[0.15em] uppercase text-[#C9A227] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Découvrir
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* ─── Ligne dorée animée en bas ─── */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />

              {/* ─── Bordure dorée qui se dessine au hover ─── */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}