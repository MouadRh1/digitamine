import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Titre principal */}
        <h2
          className="font-display tracking-[-0.02em] text-white mb-10 md:mb-14 max-w-[1200px]"
          style={{
            fontSize: "clamp(40px, 6.5vw, 104px)",
            lineHeight: 1.02,
            fontWeight: 400,
          }}
        >
          Vous avez un besoin
          <br />
          similaire ou un défi
          <br />
          complètement différent ?
        </h2>

        {/* CTA */}
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 font-display text-[13px] md:text-[14px] tracking-[0.05em] uppercase text-[#050505] font-medium px-7 md:px-8 py-4 md:py-5 bg-[#C9A227] hover:bg-[#E6C95C] transition-colors duration-300"
        >
          Parler de votre projet
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300"
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
    </section>
  );
}