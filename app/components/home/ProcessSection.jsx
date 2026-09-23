import { process } from "../../data/homeData";

export default function ProcessSection() {
  return (
    <section className="py-28 md:py-36 border-t border-[rgba(201,162,39,0.08)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="section-label mb-4">How We Work</p>
        <h2 className="font-display leading-[0.92] tracking-tight mb-20 text-[clamp(48px,6vw,88px)] font-black text-white">
          OUR PROCESS
        </h2>

        {/* Horizontal steps (desktop) */}
        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-[28px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(201,162,39,0.3)] via-15% to-transparent to-85%" />
          <div className="grid grid-cols-5 gap-4 relative">
            {process.map((p) => (
              <div
                key={p.num}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 border border-[rgba(201,162,39,0.3)] flex items-center justify-center mb-6 relative z-10 bg-[#050505]">
                  <span className="font-display text-sm font-bold tracking-widest text-[#C9A227]">
                    {p.num}
                  </span>
                </div>
                <h3 className="font-display text-lg font-extrabold tracking-tight text-white">
                  {p.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col gap-0 relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[rgba(201,162,39,0.3)] to-[rgba(201,162,39,0.05)]" />
          {process.map((p) => (
            <div key={p.num} className="flex items-start gap-6 py-6 relative">
              <div className="w-14 h-14 border border-[rgba(201,162,39,0.3)] flex items-center justify-center shrink-0 z-10 bg-[#050505]">
                <span className="font-display text-sm font-bold tracking-widest text-[#C9A227]">
                  {p.num}
                </span>
              </div>
              <div className="pt-4">
                <h3 className="font-display text-xl font-extrabold tracking-tight text-white">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}