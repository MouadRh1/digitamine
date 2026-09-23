import Image from "next/image";

const pills = ["ÉCOUTER", "QUESTIONNER", "CONSTRUIRE", "AMÉLIORER"];

export default function ManiereTravaillerSection() {
  return (
    <section className="relative bg-[#050505]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* ─── Colonne gauche : photo ─── */}
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[520px] xl:min-h-[600px] overflow-hidden">
          <Image
            src="/images/travailler.jpg"
            alt="Notre manière de travailler chez Digitamine"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
          {/* Léger overlay pour renforcer le contraste avec le doré à droite */}
          <div className="absolute inset-0 bg-[#050505]/20" />
        </div>

        {/* ─── Colonne droite : contenu sur fond doré ─── */}
        <div className="flex items-center bg-[#C9A227] px-6 md:px-10 lg:px-14 xl:px-20 py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[620px] mx-auto lg:mx-0">
            {/* Label supérieur */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-8 h-[1px] bg-[#050505]" />
              <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#050505]">
                Notre manière de travailler
              </span>
            </div>

            {/* Titre principal */}
            <h2
              className="font-display tracking-[-0.02em] text-[#050505] mb-6 md:mb-8"
              style={{
                fontSize: "clamp(32px, 4.2vw, 62px)",
                lineHeight: 1.05,
                fontWeight: 400,
              }}
            >
              Impliqués dans les
              <br />
              détails.
              <br />
              Alignés sur l&apos;essentiel.
            </h2>

            {/* Paragraphe */}
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#050505]/80 mb-8 md:mb-12 max-w-[560px]">
              Nous aimons les idées ambitieuses, mais aussi les plannings clairs, les retours
              précis et les décisions réalistes. Notre créativité reste connectée aux objectifs, aux
              ressources et au quotidien de chaque client.
            </p>

            {/* Pills (tags) */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="font-display text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#050505] border border-[#050505]/40 px-4 py-2.5 md:px-5 md:py-3 transition-colors duration-300 hover:bg-[#050505] hover:text-[#C9A227] cursor-default"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}