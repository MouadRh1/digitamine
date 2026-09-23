import Link from "next/link";

export default function AboutPreviewSection() {
  return (
    <section className="py-28 md:py-36 bg-[#0a0a0a] border-t border-[rgba(201,162,39,0.08)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=600&fit=crop&auto=format"
              alt="DIGITAMINE Studio"
              className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
            <div className="absolute top-6 left-6 border border-[rgba(201,162,39,0.3)] px-4 py-2 bg-[rgba(5,5,5,0.75)]">
              <span className="section-label text-[10px]">Digitamine Agency</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-6">Who We Are</p>
            <h2 className="font-display leading-[0.92] tracking-tight mb-8 text-[clamp(36px,4vw,60px)] font-black text-white">
              BUILT FOR BRANDS
              <br />
              THAT WANT TO
              <br />
              <span className="text-[#C9A227]">MOVE FORWARD.</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-10 text-[#A0A0A0]">
              DIGITAMINE combines creativity, technology, content and digital
              marketing into a single integrated approach — designed to help
              ambitious brands grow their presence and impact in the digital
              landscape.
            </p>
            <Link
              href="/about"
              className="font-display text-[13px] font-bold tracking-[0.12em] uppercase flex items-center gap-3 text-white/70 hover:text-[#C9A227] transition-colors duration-200 group"
            >
              Discover DIGITAMINE
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}