import Link from "next/link";

export default function RealisationsCTASection() {
  return (
    <section className="relative bg-[#0a0a0a] border-t border-[rgba(201,162,39,0.08)] py-24 md:py-32 lg:py-40 text-center">
      {/* Halo doré diffus */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
          <div className="w-8 h-[1px] bg-[#C9A227]" />
          <span className="font-display text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-[#C9A227]">
            Votre projet
          </span>
          <div className="w-8 h-[1px] bg-[#C9A227]" />
        </div>

        {/* Titre */}
        <h2
          className="font-display tracking-[-0.02em] text-white mb-10 md:mb-14 max-w-[1000px] mx-auto"
          style={{
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 0.98,
            fontWeight: 400,
          }}
        >
          Votre projet
          <br />
          <span className="text-[#C9A227]">mérite sa place ici.</span>
        </h2>

        {/* CTA */}
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 font-display text-[13px] md:text-[14px] tracking-[0.15em] uppercase text-[#050505] bg-[#C9A227] hover:bg-[#E6C95C] px-7 md:px-8 py-4 md:py-5 transition-colors duration-300 font-medium"
        >
          Démarrer un projet
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