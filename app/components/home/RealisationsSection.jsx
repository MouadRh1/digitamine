import Link from "next/link";
import Image from "next/image";
import VideoCard from "./VideoCard";

const realisations = [
  {
    id: 1,
    title: "Stratégie SMMA",
    cat: "STRATÉGIE · CONTENU · CAMPAGNE",
    desc: "Structurer la communication d'un institut autour de ses objectifs d'inscription.",
    video: "/videos/smma-strategy.mp4",
    poster: "/images/expertises/SMMA.png",
    variant: "video",
    // badge: "Reels",
  },
  {
    id: 2,
    title: "Couverture média",
    cat: "PRODUCTION AUDIOVISUELLE",
    desc: null,
    img: "/images/equipe-digitamine.png",
    variant: "image",
  },
  {
    id: 3,
    title: "Site web",
    cat: "SITE WEB · PARCOURS CLIENT",
    desc: "Présenter les espaces et faciliter la découverte avant la première visite.",
    video: "/videos/siteweb.mp4",
    poster: "/images/expertises/SITEWEB.png",
    variant: "video",
    // badge: "Motion",
  },
];

export default function RealisationsSection() {
  return (
    <section className="relative bg-[#EDEAE3] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header : label unifié + titre gauche */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-10 h-[1px] bg-[#C9A227]" />
            <p className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
              Services
            </p>
          </div>

          <h2
            className="font-display tracking-[-0.02em] text-[#0a0a0a]"
            style={{
              fontSize: "clamp(20px, 1.8vw, 26px)",
              lineHeight: 1.3,
              fontWeight: 400,
            }}
          >
            Notre travail,
            <br />
            <span>
              dans son{" "}
              <span
                style={{
                  color: "#9c9c9c",
                  WebkitTextStroke: "1px #C9A227",
                }}
              >
                contexte
              </span>
              .
            </span>
          </h2>
        </div>

        {/* Grille 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {realisations.map((item) => {
            // ═══════════════════════════════════════════
            // Card VIDÉO (Stratégie SMMA + Site web)
            // ═══════════════════════════════════════════
            if (item.variant === "video") {
              return (
                <VideoCard
                  key={item.id}
                  href="/services"
                  videoSrc={item.video}
                  poster={item.poster}
                //   badge={item.badge}
                  category={item.cat}
                  title={item.title}
                  desc={item.desc}
                />
              );
            }

            // ═══════════════════════════════════════════
            // Card IMAGE (Couverture média)
            // ═══════════════════════════════════════════
            if (item.variant === "image") {
              return (
                <Link
                  key={item.id}
                  href="/services"
                  className="group relative flex flex-col justify-end aspect-[4/5] overflow-hidden"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.9)] via-[rgba(5,5,5,0.3)] to-transparent" />

                  <div className="relative z-10 p-6 md:p-7">
                    <p className="font-display text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#C9A227] mb-3">
                      {item.cat}
                    </p>
                    <h3
                      className="font-display tracking-tight text-white"
                      style={{
                        fontSize: "clamp(20px, 2vw, 28px)",
                        fontWeight: 400,
                        lineHeight: 1.1,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </Link>
              );
            }

            // Fallback (au cas où)
            return null;
          })}
        </div>

        {/* Bouton "Voir tous les services" */}
        <div className="flex items-center">
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-3 font-display text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-[#0a0a0a] font-medium px-8 py-4 border-2 border-[#0a0a0a] overflow-hidden transition-colors duration-500 hover:text-[#EDEAE3]"
          >
            <span className="absolute inset-0 bg-[#0a0a0a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

            <span className="relative z-10">Voir tous les services</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            >
              <path
                d="M2 12L12 2M12 2H5M12 2V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}