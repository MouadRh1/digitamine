import Image from "next/image";

const membres = [
  {
    num: "01",
    name: "Mohamed Amine",
    role: "FONDATEUR & CEO",
    desc: "Définir la vision de l’agence et guider sa direction stratégique.",
    img: "/images/equipe/AMINE.png",
  },
  {
    num: "02",
    name: "Hidaya",
    role: "CHEFFE DU DÉPARTEMENT MARKETING",
    desc: "Transformer les objectifs business en stratégies marketing structurées.",
    img: "/images/equipe/HIDAYA.png",
  },
  {
    num: "03",
    name: "Nabil",
    role: "CHEF DU DÉPARTEMENT IT",
    desc: "Piloter la conception de solutions digitales solides, utiles et performantes.",
    img: "/images/equipe/NABIL.png",
  },
  {
    num: "04",
    name: "Asmae",
    role: "GRAPHISTE",
    desc: "Donner aux idées une identité visuelle claire, cohérente et reconnaissable.",
    img: "/images/equipe/ASMAE.png",
  },
  {
    num: "05",
    name: "Ayoub",
    role: "VIDÉASTE & DRONISTE",
    desc: "Capturer les personnes, les gestes et les projets depuis chaque perspective.",
    img: "/images/equipe/NABIL.png",
  },
  {
    num: "06",
    name: "Zakaria",
    role: "PHOTOGRAPHE",
    desc: "Créer des images authentiques qui valorisent les personnes et leur savoir-faire.",
    img: "/images/equipe/ZAKARIA.png",
  },
];

export default function EquipeSection() {
  return (
    <section className="relative bg-[#050505] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* ═══════════════════════════════════════════
          DÉCORATIONS DE FOND
          ═══════════════════════════════════════════ */}

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] pointer-events-none opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <div className="w-10 h-[1px] bg-[#C9A227]" />
            <span className="font-display text-[13px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
              L&apos;équipe
            </span>
          </div>

          <h2
            className="font-display tracking-[-0.02em] text-white mb-6 md:mb-8 max-w-[1000px]"
            style={{
              fontSize: "clamp(36px, 5.2vw, 80px)",
              lineHeight: 1.02,
              fontWeight: 400,
            }}
          >
            Des expertises différentes.
            <br />
            <span style={{ color: "#9c9c9c" }}>
              Une responsabilité partagée.
            </span>
          </h2>

          <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] max-w-[720px]">
            Digitamine fonctionne comme une équipe connectée : la stratégie
            informe la création, la création dialogue avec la production, et la
            technologie soutient l&apos;expérience.
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            GRILLE DE CARDS AVEC PHOTOS
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {membres.map((membre, index) => (
            <article
              key={membre.num}
              className="group relative overflow-hidden aspect-[3/4] border border-[rgba(201,162,39,0.15)] hover:border-[rgba(201,162,39,0.6)] transition-all duration-500 cursor-pointer"
            >
              {/* ═══════════════════════════════════════════
                  PHOTO EN ARRIÈRE-PLAN
                  ═══════════════════════════════════════════ */}
              <Image
                src={membre.img}
                alt={membre.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:brightness-50"
                priority={index < 3}
              />

              {/* ═══════════════════════════════════════════
                  OVERLAYS
                  ═══════════════════════════════════════════ */}

              {/* Dégradé noir permanent (bas → haut) pour lisibilité nom + rôle */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none" />

              {/* Voile noir global qui s'intensifie au hover */}
              <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-[#050505]/60 transition-colors duration-700 pointer-events-none" />

              {/* Dégradé doré subtil au hover */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(to top, rgba(201,162,39,0.15) 0%, transparent 50%)",
                }}
              />

              {/* ═══════════════════════════════════════════
                  NUMÉRO EN HAUT À GAUCHE
                  ═══════════════════════════════════════════ */}
              <div className="absolute top-5 left-5 md:top-6 md:left-6 z-20 flex items-center gap-3">
                <span className="font-display text-[12px] md:text-[13px] tracking-widest text-[#C9A227] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {membre.num}
                </span>
                <div className="w-6 h-[1px] bg-[#C9A227]/70" />
              </div>

              {/* ═══════════════════════════════════════════
                  BADGE "RÔLE" EN HAUT À DROITE
                  ═══════════════════════════════════════════ */}
              <div className="absolute top-5 right-5 md:top-6 md:right-6 z-20">
                <span className="inline-block px-2.5 py-1 bg-[#C9A227] text-[#050505] font-display text-[9px] tracking-[0.2em] uppercase">
                  Équipe
                </span>
              </div>

              {/* ═══════════════════════════════════════════
                  COINS DÉCORATIFS DORÉS
                  ═══════════════════════════════════════════ */}
              <span className="absolute top-3 left-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />
              <span className="absolute top-3 left-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />
              <span className="absolute bottom-3 right-3 w-4 h-[1px] bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />
              <span className="absolute bottom-3 right-3 w-[1px] h-4 bg-[#C9A227]/70 group-hover:bg-[#C9A227] transition-colors duration-500 z-20" />

              {/* ═══════════════════════════════════════════
                  CONTENU EN BAS (nom + rôle + description hover)
                  ═══════════════════════════════════════════ */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-6 lg:p-7">
                {/* Nom */}
                <h3
                  className="font-display tracking-tight text-white mb-2 group-hover:text-[#C9A227] transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                  style={{
                    fontSize: "clamp(20px, 1.8vw, 26px)",
                    fontWeight: 500,
                    lineHeight: 1.15,
                  }}
                >
                  {membre.name}
                </h3>

                {/* Rôle (avec trait) */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-[1px] bg-[#C9A227]" />
                  <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                    {membre.role}
                  </p>
                </div>

                {/* ─── DESCRIPTION : cachée au repos, apparaît au hover ─── */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-[12px] md:text-[13px] leading-relaxed text-[#d0d0d0] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {membre.desc}
                    </p>

                    {/* Petit trait doré de séparation */}
                    <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      <div className="w-8 h-[1px] bg-[#C9A227]" />
                      <span className="font-display text-[9px] tracking-[0.25em] uppercase text-[#C9A227]">
                        Voir le profil
                      </span>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path
                          d="M2 6h8M6 2l4 4-4 4"
                          stroke="#C9A227"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* ═══════════════════════════════════════════
                  EFFET SHINE AU HOVER
                  ═══════════════════════════════════════════ */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-[1400ms] ease-out" />
              </div>

              {/* ═══════════════════════════════════════════
                  LIGNE DORÉE ANIMÉE EN BAS
                  ═══════════════════════════════════════════ */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out z-30" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
