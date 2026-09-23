import Link from "next/link";

const expertises = [
  {
    num: "01",
    title: "Stratégie digitale",
    desc: "Clarifier votre positionnement, vos priorités et le rôle de chaque action.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-8-8 18-2-8-8-2z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Production audiovisuelle",
    desc: "Rendre votre expertise, vos équipes et votre activité visibles.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section className="relative bg-[#050505] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header : 3 colonnes — label / titre / lien */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 md:mb-16">
          {/* Label à gauche */}
          <div className="lg:col-span-3">
            <p className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
              Nos expertises
            </p>
          </div>

          {/* Titre centré */}
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

          {/* Lien à droite */}
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
                <path
                  d="M2 10L10 2M10 2H5M10 2V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Grille 3x2 avec bordures partagées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[rgba(201,162,39,0.15)]">
          {expertises.map((item) => (
            <article
              key={item.num}
              className="group relative p-6 md:p-7 lg:p-8 border-b border-[rgba(201,162,39,0.15)] md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 transition-all duration-300 hover:bg-[rgba(201,162,39,0.03)] hover:shadow-[0_0_40px_rgba(201,162,39,0.08)] cursor-pointer"
            >
              {/* Ligne supérieure : numéro + icône */}
              <div className="flex items-start justify-between mb-12 md:mb-16">
                <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                  {item.num}
                </span>
                <span className="text-[#C9A227] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </span>
              </div>

              {/* Titre */}
              <h3
                className="font-display tracking-tight text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-300"
                style={{
                  fontSize: "clamp(16px, 1.4vw, 20px)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] max-w-[320px]">
                {item.desc}
              </p>

              {/* Ligne dorée animée au hover (bottom) */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-500 ease-out" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}