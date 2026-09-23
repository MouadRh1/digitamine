import { principles } from "../../data/homeData";

export default function PrinciplesSection() {
  return (
    <section className="py-28 md:py-36 bg-[#0a0a0a] border-t border-[rgba(201,162,39,0.08)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="section-label mb-4">Our Principles</p>
            <h2 className="font-display leading-[0.92] tracking-tight text-[clamp(48px,6vw,88px)] font-black text-white">
              WHY
              <br />
              <span className="text-[#C9A227]">DIGITAMINE</span>
            </h2>
            <p className="text-[15px] leading-relaxed mt-8 max-w-md text-[#A0A0A0]">
              Five principles that define how we approach every project,
              client and creative challenge.
            </p>
          </div>

          <div className="flex flex-col gap-0 mt-4 lg:mt-16">
            {principles.map((p) => (
              <div
                key={p.num}
                className="flex items-start gap-6 py-7 group border-b border-[rgba(201,162,39,0.08)]"
              >
                <span className="font-display text-[56px] leading-none font-black shrink-0 text-[rgba(201,162,39,0.08)]">
                  {p.num}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-extrabold mb-2 tracking-tight text-white group-hover:text-[#C9A227] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#A0A0A0]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}