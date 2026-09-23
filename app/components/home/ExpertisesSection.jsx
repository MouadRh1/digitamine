import Link from "next/link";
import Image from "next/image";

const expertises = [
  {
    num: "01",
    title: "Stratégie digitale",
    desc: "Clarifier votre positionnement, vos priorités et le rôle de chaque action.",
    img: "/images/expertises/STRATEGY.png",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
    img: "/images/expertises/SMMA.png",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
    img: "/images/expertises/SITEWEB.png",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Meta Ads",
    desc: "Donner plus de portée aux bons messages auprès des bonnes audiences.",
    img: "/images/expertises/meta_ads.png",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-8-8 18-2-8-8-2z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Production audiovisuelle",
    desc: "Rendre votre expertise, vos équipes et votre activité visibles.",
    img: "/images/expertises/production_av.png",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="1" />
        <polygon points="22 8 16 12 22 16 22 8" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Design graphique",
    desc: "Donner à chaque message une forme claire, distinctive et mémorable.",
    img: "/images/expertises/graphique_design.png",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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

        {/* ─── Grille 3x2 avec cards + image ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {expertises.map((item) => (
            <article
              key={item.num}
              className="group relative overflow-hidden bg-[#0a0a0a] border border-[rgba(201,162,39,0.15)] hover:border-[rgba(201,162,39,0.5)] transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* ═══════════════════════════════════════════
                  ZONE IMAGE (hauteur réduite)
                  ═══════════════════════════════════════════ */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                {/* Image de fond */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* Overlay dégradé : noir vers transparent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent transition-opacity duration-500 group-hover:from-[#0a0a0a] group-hover:via-[#0a0a0a]/30" />

                {/* Voile doré subtil au hover */}
                <div className="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/10 transition-colors duration-500 pointer-events-none" />

                {/* Effet de brillance (shine) qui traverse l'image au hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-[1400ms] ease-out" />
                </div>

                {/* Numéro en haut à gauche */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 flex items-center gap-3">
                  <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227]">
                    {item.num}
                  </span>
                </div>

                {/* Icône en haut à droite */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10 text-[#C9A227] opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg] drop-shadow-[0_0_10px_rgba(201,162,39,0.4)]">
                  {item.icon}
                </div>

                {/* Petits traits décoratifs dans les coins */}
                <span className="absolute top-2 left-2 w-3 h-[1px] bg-[#C9A227]/60 group-hover:bg-[#C9A227] transition-colors duration-500" />
                <span className="absolute top-2 left-2 w-[1px] h-3 bg-[#C9A227]/60 group-hover:bg-[#C9A227] transition-colors duration-500" />
                <span className="absolute top-2 right-2 w-3 h-[1px] bg-[#C9A227]/60 group-hover:bg-[#C9A227] transition-colors duration-500" />
                <span className="absolute top-2 right-2 w-[1px] h-3 bg-[#C9A227]/60 group-hover:bg-[#C9A227] transition-colors duration-500" />
              </div>

              {/* ═══════════════════════════════════════════
                  ZONE CONTENU (bas de la card)
                  ═══════════════════════════════════════════ */}
              <div className="relative flex-1 flex flex-col p-6 md:p-7">
                {/* Grille décorative en arrière-plan du contenu */}
                <div
                  className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                  }}
                />

                {/* Titre */}
                <h3
                  className="relative font-display tracking-tight text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-500"
                  style={{
                    fontSize: "clamp(18px, 1.6vw, 24px)",
                    fontWeight: 500,
                    lineHeight: 1.15,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] group-hover:text-[#d0d0d0] transition-colors duration-500 max-w-[320px] flex-1">
                  {item.desc}
                </p>

                {/* Flèche qui apparaît au hover */}
                <span className="relative inline-flex items-center gap-2 mt-5 font-display text-[11px] tracking-[0.15em] uppercase text-[#C9A227] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Découvrir
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              {/* ─── Ligne dorée animée en bas ─── */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />

              {/* ─── Bordure dorée qui se dessine en haut ─── */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}