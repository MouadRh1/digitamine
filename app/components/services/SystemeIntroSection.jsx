export default function SystemeIntroSection() {
  return (
    <section className="relative bg-[#EDEAE3] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Halo doré diffus en arrière-plan */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(201,162,39,0.6) 0%, transparent 60%)",
        }}
      />

      {/* Grille décorative subtile */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,10,10,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,10,10,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: `radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)`,
          WebkitMaskImage: `radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 90%)`,
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Label supérieur aligné à gauche */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <div className="w-10 h-[1px] bg-[#C9A227]" />
          <span className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
            Le système Digitamine
          </span>
        </div>

        {/* Titre principal centré, prenant tout l'espace */}
        <h2
          className="font-display tracking-[-0.03em] text-[#0a0a0a] mx-auto text-center max-w-[1200px]"
          style={{
            fontSize: "clamp(40px, 6.5vw, 110px)",
            lineHeight: 1.02,
            fontWeight: 400,
          }}
        >
          Un besoin peut être isolé.
          <br />
          <span
            style={{
              color: "#9c9c9c",
            }}
          >
            La réflexion, jamais.
          </span>
        </h2>

        {/* Petit trait doré décoratif en bas */}
        <div className="flex justify-center mt-14 md:mt-20">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
        </div>
      </div>
    </section>
  );
}