import Link from "next/link";
import Image from "next/image";

export default function AgenceHumaineSection() {
  return (
    <section className="relative bg-[#141414] border-t border-b border-[rgba(201,162,39,0.08)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* ═══════════════════════════════════════════
            COLONNE GAUCHE : photo
            - Mobile  : ratio carré + cadrage en haut (têtes visibles)
            - Desktop : hauteur libre + cadrage centré
            ═══════════════════════════════════════════ */}
        <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-auto lg:min-h-[500px] xl:min-h-[560px] lg:col-span-1">
          <Image
            src="/images/humaine.jpeg"
            alt="Une agence humaine — équipe Digitamine"
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover object-top lg:object-center"
            priority
          />
          {/* Léger voile sombre pour harmoniser */}
          <div className="absolute inset-0 bg-[#050505]/15 pointer-events-none" />
        </div>

        {/* ═══════════════════════════════════════════
            COLONNE DROITE : contenu
            ═══════════════════════════════════════════ */}
        <div className="lg:col-span-3 flex items-center px-6 md:px-10 lg:px-14 xl:px-24 py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[700px] lg:mx-0 mx-auto">
            {/* Label supérieur */}

            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-[1px] bg-[#C9A227]" />
              <p className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
                Une agence humaine
              </p>
            </div>

            {/* Titre principal */}
            <h2
              className="font-display tracking-[-0.02em] mb-5 md:mb-6 text-white"
              style={{
                fontSize: "clamp(26px, 3.2vw, 46px)",
                lineHeight: 1.08,
                fontWeight: 400,
              }}
            >
              Les idées avancent
              <br />
              mieux quand les
              <br />
              expertises se parlent.
            </h2>

            {/* Paragraphe */}
            <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0] mb-6 md:mb-7 max-w-[600px]">
              Stratégie, design, développement, vidéo et publicité collaborent
              dès le départ. Derrière chaque livrable, il y a des échanges, des
              choix et une équipe réellement impliquée.
            </p>

            {/* Lien "Rencontrer l'équipe ↗" */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-display text-[12px] tracking-[0.08em] uppercase text-[#C9A227] hover:text-[#E6C95C] transition-colors duration-200 mb-10 md:mb-12 group"
            >
              Rencontrer l&apos;équipe
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

            {/* Ligne séparatrice dorée */}
            <div className="border-t border-[rgba(201,162,39,0.2)] pt-5 md:pt-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6">
                <p className="font-display text-[13px] tracking-tight text-[#C9A227] font-medium">
                  Une équipe
                </p>

                <p className="text-[12px] md:text-[13px] leading-relaxed text-white md:text-right">
                  Plusieurs expertises.
                  <br />
                  Une direction commune.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
