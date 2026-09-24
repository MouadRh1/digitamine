import Link from "next/link";

export default function ProchainPasSection() {
  return (
    <section className="relative bg-[#EDEAE3] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Label supérieur */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <div className="w-8 h-[1px] bg-[#C9A227]" />
          <span className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
            Le prochain pas
          </span>
        </div>

        {/* Titre principal */}
        <h2
          className="font-display tracking-[-0.02em] text-[#0a0a0a] mb-6 md:mb-7 max-w-[1400px]"
          style={{
            fontSize: "clamp(32px, 4.8vw, 76px)",
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          Commençons par identifier ce qui fera réellement
          <br />
          avancer votre présence digitale.
        </h2>

        {/* Description */}
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#1a1a1a]/75 mb-10 md:mb-12 max-w-[780px]">
          Un premier échange nous permet de comprendre votre situation, vos priorités et les
          leviers les plus utiles—sans vous imposer une formule standard.
        </p>

        {/* CTA — nouveau style outline avec remplissage */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 font-display text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-[#0a0a0a] font-medium px-8 py-4 border-2 border-[#0a0a0a] overflow-hidden transition-colors duration-500 hover:text-[#EDEAE3]"
          >
            {/* Fond noir qui glisse au hover */}
            <span className="absolute inset-0 bg-[#0a0a0a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

            {/* Contenu (au-dessus du fond animé) */}
            <span className="relative z-10">Parler de votre projet</span>
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