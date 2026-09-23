import Link from "next/link";
import { portfolioItems } from "../../data/homeData";

export default function PortfolioSection() {
  return (
    <section className="py-28 md:py-36 bg-[#050505] border-t border-[rgba(201,162,39,0.08)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Portfolio</p>
            <h2 className="font-display leading-[0.92] tracking-tight text-[clamp(48px,6vw,88px)] font-black text-white">
              SELECTED WORK
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="font-display text-[13px] tracking-[0.12em] uppercase flex items-center gap-2 self-start md:self-auto text-[#A0A0A0] font-bold hover:text-[#C9A227] transition-colors duration-200"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large feature item */}
          <Link
            href="/portfolio/1"
            className="portfolio-card md:col-span-8 relative bg-[#101010] aspect-[16/10]"
          >
            <img
              src={portfolioItems[0].img}
              alt="Project 01"
              className="w-full h-full object-cover"
            />
            <div className="overlay absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[rgba(5,5,5,0.85)] to-transparent to-60%">
              <span className="section-label mb-2">{portfolioItems[0].cat}</span>
              <h3 className="font-display text-3xl text-white font-black">
                {portfolioItems[0].title}
              </h3>
            </div>
            <div className="absolute top-5 right-5 bg-[rgba(5,5,5,0.6)] border border-[rgba(201,162,39,0.2)] px-3 py-1">
              <span className="font-display text-[11px] tracking-wider text-[#C9A227]">
                {portfolioItems[0].year}
              </span>
            </div>
          </Link>

          {/* Tall item */}
          <Link
            href="/portfolio/2"
            className="portfolio-card md:col-span-4 relative bg-[#101010] aspect-[4/5]"
          >
            <img
              src={portfolioItems[1].img}
              alt="Brand Campaign"
              className="w-full h-full object-cover"
            />
            <div className="overlay absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[rgba(5,5,5,0.85)] to-transparent to-60%">
              <span className="section-label mb-2">{portfolioItems[1].cat}</span>
              <h3 className="font-display text-2xl text-white font-black">
                {portfolioItems[1].title}
              </h3>
            </div>
          </Link>

          {/* Medium item */}
          <Link
            href="/portfolio/3"
            className="portfolio-card md:col-span-5 relative bg-[#101010] aspect-[4/3]"
          >
            <img
              src={portfolioItems[2].img}
              alt="Web Experience"
              className="w-full h-full object-cover"
            />
            <div className="overlay absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[rgba(5,5,5,0.85)] to-transparent to-60%">
              <span className="section-label mb-2">{portfolioItems[2].cat}</span>
              <h3 className="font-display text-2xl text-white font-black">
                {portfolioItems[2].title}
              </h3>
            </div>
          </Link>

          {/* Square item */}
          <Link
            href="/portfolio/4"
            className="portfolio-card md:col-span-3 relative bg-[#101010] aspect-square"
          >
            <img
              src={portfolioItems[3].img}
              alt="Visual Identity"
              className="w-full h-full object-cover"
            />
            <div className="overlay absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-[rgba(5,5,5,0.85)] to-transparent to-60%">
              <span className="section-label mb-2">{portfolioItems[3].cat}</span>
              <h3 className="font-display text-xl text-white font-black">
                {portfolioItems[3].title}
              </h3>
            </div>
          </Link>

          {/* Wide item */}
          <Link
            href="/portfolio/5"
            className="portfolio-card md:col-span-4 relative bg-[#101010] aspect-[4/3]"
          >
            <img
              src={portfolioItems[4].img}
              alt="Digital Campaign"
              className="w-full h-full object-cover"
            />
            <div className="overlay absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[rgba(5,5,5,0.85)] to-transparent to-60%">
              <span className="section-label mb-2">{portfolioItems[4].cat}</span>
              <h3 className="font-display text-2xl text-white font-black">
                {portfolioItems[4].title}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}