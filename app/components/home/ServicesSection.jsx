import Link from "next/link";
import { services } from "../../data/homeData";

export default function ServicesSection() {
  return (
    <section className="py-28 md:py-36 border-t border-[rgba(201,162,39,0.1)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Our Expertise</p>
            <h2 className="font-display leading-[0.92] tracking-tight text-[clamp(48px,6vw,88px)] font-black text-white">
              WHAT WE DO
            </h2>
          </div>
          <Link
            href="/services"
            className="font-display text-[13px] tracking-[0.12em] uppercase flex items-center gap-2 self-start md:self-auto text-[#A0A0A0] font-bold hover:text-[#C9A227] transition-colors duration-200"
          >
            All services
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
        </div>

        <div>
          {services.map((s) => (
            <Link
              key={s.num}
              href={`/services/${s.num}`}
              className="service-row flex items-center justify-between gap-6 py-7 px-2 group"
            >
              <div className="flex items-center gap-8 flex-1 min-w-0">
                <span className="font-display text-[13px] font-semibold tracking-widest shrink-0 text-[#C9A227]">
                  {s.num}
                </span>
                <h3 className="font-display tracking-tight leading-none text-white group-hover:text-[#C9A227] transition-colors duration-300 truncate text-[clamp(22px,3vw,38px)] font-extrabold">
                  {s.title}
                </h3>
              </div>
              <p className="text-[13px] hidden md:block shrink-0 max-w-[280px] text-[#A0A0A0]">
                {s.desc}
              </p>
              <div className="w-8 h-8 border border-[rgba(201,162,39,0.2)] flex items-center justify-center shrink-0 group-hover:border-[#C9A227] group-hover:bg-[rgba(201,162,39,0.08)] transition-all duration-200">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="#C9A227"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}