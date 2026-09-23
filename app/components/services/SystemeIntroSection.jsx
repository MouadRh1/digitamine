const steps = ["COMPRENDRE", "STRUCTURER", "CRÉER", "ACTIVER", "AMÉLIORER"];

export default function SystemeIntroSection() {
  return (
    <section className="relative bg-[#EDEAE3] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Colonne gauche — label + titre */}
          <div className="lg:col-span-6">
            {/* Label supérieur */}
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <div className="w-8 h-[1px] bg-[#C9A227]" />
              <span className="font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[#C9A227]">
                Le système Digitamine
              </span>
            </div>

            {/* Titre principal */}
            <h2
              className="font-display tracking-[-0.02em] text-[#0a0a0a]"
              style={{
                fontSize: "clamp(38px, 5.2vw, 82px)",
                lineHeight: 1.05,
                fontWeight: 400,
              }}
            >
              Un besoin peut être
              <br />
              isolé.
              <br />
              La réflexion, jamais.
            </h2>
          </div>

          {/* Colonne droite — frise des étapes */}
          <div className="lg:col-span-6">
            <div className="border-t border-b border-[rgba(10,10,10,0.15)] py-6 md:py-8">
              <div className="flex flex-wrap items-center justify-start lg:justify-end gap-x-4 gap-y-3 md:gap-x-6">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 md:gap-5">
                    <span className="font-display text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#0a0a0a]">
                      {step}
                    </span>

                    {/* Flèche entre les étapes (sauf après la dernière) */}
                    {index < steps.length - 1 && (
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        className="text-[#C9A227]"
                      >
                        <path
                          d="M1 5h12M9 1l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}