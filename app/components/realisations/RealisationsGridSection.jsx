import Image from "next/image";

const servicesRealisations = [
  {
    num: "01",
    serviceTitle: "Stratégie & contenu",
    serviceDesc: "Positionnement, ligne éditoriale et contenus pensés comme un ensemble.",
    project: {
      num: "01",
      client: "INSTITUT DE FORMATION",
      tags: "Stratégie éditoriale · Contenu · Vidéo",
      title: "IFDCE",
      initials: "IF",
      besoin: "Clarifier les programmes et structurer une communication tournée vers l'inscription.",
      reponse: "Un système éditorial reliant messages, formats et rythme de publication.",
      variant: "gold",   // ✅ bien dans project
    },
  },
  {
    num: "02",
    serviceTitle: "Sites web & parcours",
    serviceDesc: "Des expériences digitales qui expliquent la valeur et facilitent l'action.",
    project: {
      num: "02",
      client: "ESPACES PROFESSIONNELS",
      tags: "Site web · Contenu · Parcours client",
      title: "Workaura",
      initials: "WA",
      besoin: "Présenter les espaces et rendre l'offre plus simple à découvrir avant la visite.",
      reponse: "Une architecture claire qui guide le visiteur de la découverte à la prise de contact.",
      variant: "beige",
    },
  },
  {
    num: "03",
    serviceTitle: "Meta Ads & acquisition",
    serviceDesc: "Des campagnes où le message, le créatif et le parcours travaillent ensemble.",
    project: {
      num: "03",
      client: "ENTREPRISE DE SERVICES",
      tags: "Positionnement · Créatifs · Meta Ads",
      title: "Campagne d'acquisition",
      initials: "CA",
      besoin: "Transformer une offre technique en message publicitaire immédiatement compréhensible.",
      reponse: "Une campagne structurée autour d'un angle clair et d'un parcours de conversion cohérent.",
      variant: "dark",
    },
  },
  {
    num: "04",
    serviceTitle: "Production audiovisuelle",
    serviceDesc: "Des images qui rendent visibles les personnes, le savoir-faire et le terrain.",
    project: {
      num: "04",
      client: "COULISSES DIGITAMINE",
      tags: "Concept · Tournage · Montage",
      title: "Production terrain",
      initials: "PT",
      img: "/images/equipe-digitamine.png",
      besoin: "Faire ressortir l'expertise et la réalité du travail sans perdre l'authenticité.",
      reponse: "Une direction de tournage attentive aux gestes, aux équipes et aux détails qui créent la confiance.",
      variant: "image",
    },
  },
];

// ─── Variantes de style par type ───
const variantStyles = {
  gold: {
    bg: "bg-[#C9A227]",
    textPrimary: "text-[#050505]",
    textSecondary: "text-[#050505]/70",
    textLabel: "text-[#050505]/80",
    border: "border-[#050505]/15",
  },
  beige: {
    bg: "bg-[#EDEAE3]",
    textPrimary: "text-[#0a0a0a]",
    textSecondary: "text-[#0a0a0a]/70",
    textLabel: "text-[#C9A227]",
    border: "border-[#0a0a0a]/15",
  },
  dark: {
    bg: "bg-[#0a0a0a]",
    textPrimary: "text-white",
    textSecondary: "text-[#A0A0A0]",
    textLabel: "text-[#C9A227]",
    border: "border-[rgba(201,162,39,0.15)]",
  },
  image: {
    bg: "bg-[#0a0a0a]",
    textPrimary: "text-white",
    textSecondary: "text-white/80",
    textLabel: "text-[#C9A227]",
    border: "border-[rgba(201,162,39,0.2)]",
  },
};

export default function RealisationsGridSection() {
  return (
    <section className="relative bg-[#050505]">
      {servicesRealisations.map((service) => {
        const project = service.project;
        // ✅ FALLBACK : si variant manquant, on utilise "dark"
        const styles = variantStyles[project.variant] ?? variantStyles.dark;
        const isImageVariant = project.variant === "image";

        return (
          <div
            key={service.num}
            className="py-16 md:py-20 lg:py-24 border-t border-[rgba(201,162,39,0.08)]"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              {/* ─── Header du service ─── */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 mb-10 md:mb-14">
                <div className="lg:col-span-2 flex items-start gap-3">
                  <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227] pt-1">
                    {service.num}
                  </span>
                </div>

                <div className="lg:col-span-10">
                  <div className="flex items-center gap-3 mb-4 md:mb-5">
                    <div className="w-8 h-[1px] bg-[#C9A227]" />
                    <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                      Service
                    </span>
                  </div>

                  <h2
                    className="font-display tracking-[-0.02em] text-white mb-3 md:mb-4"
                    style={{ fontSize: "clamp(28px, 4vw, 58px)", lineHeight: 1.02, fontWeight: 400 }}
                  >
                    {service.serviceTitle}
                  </h2>

                  <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] max-w-[700px]">
                    {service.serviceDesc}
                  </p>
                </div>
              </div>

              {/* ─── Carte projet ─── */}
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-12 ${styles.bg} min-h-[440px] md:min-h-[520px] overflow-hidden`}
              >
                {/* Colonne gauche */}
                <div className="relative lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[rgba(0,0,0,0.08)] flex flex-col justify-between p-6 md:p-8 min-h-[220px] lg:min-h-0 overflow-hidden">
                  {/* Grille de fond */}
                  <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                      backgroundImage: isImageVariant
                        ? `linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)`
                        : `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
                      backgroundSize: "60px 60px",
                    }}
                  />

                  {isImageVariant && project.img && (
                    <>
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[#050505]/70" />
                    </>
                  )}

                  <span
                    className={`relative z-10 font-display text-[12px] md:text-[13px] tracking-widest ${
                      isImageVariant ? "text-[#C9A227]" : styles.textLabel
                    }`}
                  >
                    {project.num}
                  </span>

                  <div className="relative z-10">
                    <span
                      className={`font-display tracking-[-0.03em] ${
                        isImageVariant ? "text-white" : styles.textPrimary
                      }`}
                      style={{
                        fontSize: "clamp(72px, 12vw, 180px)",
                        lineHeight: 0.85,
                        fontWeight: 900,
                      }}
                    >
                      {project.initials}
                    </span>
                  </div>
                </div>

                {/* Colonne droite */}
                <div className="relative lg:col-span-8 flex flex-col justify-between p-6 md:p-10 lg:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-10 md:mb-16">
                    <span
                      className={`font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase ${
                        isImageVariant ? "text-[#C9A227]" : styles.textLabel
                      }`}
                    >
                      {project.client}
                    </span>
                    <span
                      className={`font-display text-[10px] md:text-[11px] tracking-[0.15em] ${
                        isImageVariant ? "text-white/70" : styles.textSecondary
                      } md:text-right`}
                    >
                      {project.tags}
                    </span>
                  </div>

                  <h3
                    className={`font-display tracking-[-0.02em] mb-10 md:mb-16 ${
                      isImageVariant ? "text-white" : styles.textPrimary
                    }`}
                    style={{
                      fontSize: "clamp(38px, 5.5vw, 88px)",
                      lineHeight: 1.02,
                      fontWeight: 400,
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-6 md:pt-8 border-t ${styles.border}`}
                  >
                    <div>
                      <p
                        className={`font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 ${
                          isImageVariant ? "text-[#C9A227]" : styles.textLabel
                        }`}
                      >
                        Le besoin
                      </p>
                      <p className={`text-[13px] md:text-[14px] leading-relaxed ${styles.textSecondary}`}>
                        {project.besoin}
                      </p>
                    </div>

                    <div>
                      <p
                        className={`font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase mb-3 ${
                          isImageVariant ? "text-[#C9A227]" : styles.textLabel
                        }`}
                      >
                        La réponse
                      </p>
                      <p className={`text-[13px] md:text-[14px] leading-relaxed ${styles.textSecondary}`}>
                        {project.reponse}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}