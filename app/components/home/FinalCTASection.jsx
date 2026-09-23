import Link from "next/link";
import GoldGeometry from "../GoldGeometry";

export default function FinalCTASection() {
  return (
    <section className="relative py-40 overflow-hidden border-t border-[rgba(201,162,39,0.12)]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,162,39,0.06)_0%,transparent_70%)]" />

      {/* Abstract geometry background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none w-[500px]">
        <GoldGeometry size={500} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <p className="section-label mb-8">Ready to Begin</p>
        <h2 className="font-display leading-[0.88] tracking-tight mb-8 mx-auto gold-text-glow text-[clamp(52px,8vw,120px)] font-black max-w-[900px] text-white">
          LET&apos;S BUILD SOMETHING
          <br />
          <span className="text-[#C9A227]">REMARKABLE.</span>
        </h2>
        <p className="text-[16px] leading-relaxed mb-14 mx-auto text-[#A0A0A0] max-w-[520px]">
          Have a project in mind? Let&apos;s create a digital experience that
          genuinely represents your brand and drives real results.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 relative z-10">
          <Link href="/contact" className="btn-primary">
            Start a project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}