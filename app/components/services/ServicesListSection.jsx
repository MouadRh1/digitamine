const services = [
  {
    num: "01",
    tag: "ORIENTE LE SYSTÈME",
    title: "Stratégie digitale",
    subtitle: "Savoir où aller avant de commencer à produire.",
    desc: "Nous clarifions votre positionnement, vos objectifs et le rôle de chaque canal pour transformer des actions isolées en plan cohérent.",
    items: ["Diagnostic digital", "Positionnement & messages", "Priorités et feuille de route"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="#C9A227" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "NOURRIT LA RELATION",
    title: "SMMA & contenu",
    subtitle: "Créer une présence régulière qui sert votre marque.",
    desc: "Nous transformons vos enjeux en lignes éditoriales, calendriers et contenus pensés pour informer, rassurer et engager.",
    items: ["Stratégie éditoriale", "Calendrier mensuel", "Posts, carrousels & suivi"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    tag: "CENTRALISE LA PREUVE",
    title: "Sites web",
    subtitle: "Faire de votre site un outil de confiance et de conversion.",
    desc: "Nous structurons le parcours, les messages et l'interface pour que vos visiteurs comprennent votre valeur et sachent quoi faire ensuite.",
    items: ["Site vitrine", "Landing pages", "UX, design & développement"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "ACTIVE LA DEMANDE",
    title: "Meta Ads",
    subtitle: "Accélérer la visibilité avec des campagnes maîtrisées.",
    desc: "Nous alignons l'offre, les créatifs, l'audience et le parcours après le clic afin que le budget média serve un objectif précis.",
    items: ["Stratégie média", "Créatifs publicitaires", "Pilotage & optimisation"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-8-8 18-2-8-8-2z" />
      </svg>
    ),
  },
  {
    num: "05",
    tag: "HUMANISE LA MARQUE",
    title: "Production audiovisuelle",
    subtitle: "Montrer votre réalité avec exigence et authenticité.",
    desc: "Du concept à la post-production, nous créons des images qui donnent un visage à votre expertise, vos équipes et vos événements.",
    items: ["Concept & scripts", "Tournage", "Montage & déclinaisons"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="1" />
        <polygon points="22 8 16 12 22 16 22 8" />
      </svg>
    ),
  },
  {
    num: "06",
    tag: "CRÉE LA COHÉRENCE",
    title: "Design graphique",
    subtitle: "Donner une forme claire et distinctive à vos messages.",
    desc: "Nous construisons des systèmes visuels cohérents pour vos campagnes, réseaux sociaux et supports de communication.",
    items: ["Direction visuelle", "Identité de campagne", "Supports digitaux"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
];

export default function ServicesListSection() {
  return (
    <section id="expertises" className="relative bg-[#050505]">
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

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {services.map((service) => (
          <article
            key={service.num}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-14 md:py-20 border-t border-[rgba(201,162,39,0.12)] transition-colors duration-300 hover:bg-[rgba(201,162,39,0.015)]"
          >
            {/* ─── Colonne 1 : numéro + icône ─── */}
            <div className="lg:col-span-2 flex items-start gap-4 lg:gap-6">
              <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227] pt-1">
                {service.num}
              </span>
              <span className="pt-1 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </span>
            </div>

            {/* ─── Colonne 2 : tag + titre + sous-titre + description ─── */}
            <div className="lg:col-span-7">
              {/* Tag */}
              <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227] mb-4 md:mb-6">
                {service.tag}
              </p>

              {/* Titre principal */}
              <h3
                className="font-display tracking-[-0.02em] text-white mb-8 md:mb-12 group-hover:text-[#C9A227] transition-colors duration-500"
                style={{
                  fontSize: "clamp(36px, 4.8vw, 72px)",
                  lineHeight: 1.02,
                  fontWeight: 400,
                }}
              >
                {service.title}
              </h3>

              {/* Sous-titre */}
              <p
                className="text-white mb-3 md:mb-4"
                style={{ fontSize: "clamp(16px, 1.4vw, 20px)", lineHeight: 1.3, fontWeight: 500 }}
              >
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] max-w-[640px]">
                {service.desc}
              </p>
            </div>

            {/* ─── Colonne 3 : liste "Ce que nous pouvons construire" ─── */}
            <div className="lg:col-span-3">
              <div className="border-t border-[rgba(201,162,39,0.2)] pt-4 md:pt-5 mb-4 md:mb-5">
                <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                  Ce que nous pouvons construire
                </p>
              </div>

              <ul>
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="group/item flex items-start gap-3 py-3 border-b border-[rgba(201,162,39,0.12)] transition-colors duration-200"
                  >
                    <span className="text-[#C9A227] text-[14px] leading-none pt-1 font-light">
                      +
                    </span>
                    <span className="text-[13px] md:text-[14px] text-white/90 group-hover/item:text-[#C9A227] transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        {/* Ligne de fermeture */}
        <div className="border-t border-[rgba(201,162,39,0.12)]" />
      </div>
    </section>
  );
}