import Image from "next/image";

const photos = [
  {
    num: "01",
    label: "DIRECTION",
    img: "/images/direction.jpg",
  },
  {
    num: "02",
    label: "PRÉPARATION",
    img: "/images/preparation.jpg",
  },
  {
    num: "03",
    label: "PRODUCTION",
    img: "/images/production.jpg",
  },
];

export default function ConvictionSection() {
  return (
    <section className="relative bg-[#EDEAE3]">
      {/* ─── Partie haute : texte ─── */}
      <div className="py-20 md:py-28 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* ─── Colonne gauche : label + titre ─── */}
            <div className="lg:col-span-6">
              {/* Label supérieur */}
              <div className="flex items-center gap-3 mb-8 md:mb-12">
                <div className="w-8 h-[1px] bg-[#C9A227]" />
                <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                  Notre conviction
                </span>
              </div>

              {/* Titre principal */}
              <h2
                className="font-display tracking-[-0.02em] text-[#0a0a0a]"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 92px)",
                  lineHeight: 1.02,
                  fontWeight: 400,
                }}
              >
                Le digital ne
                <br />
                fonctionne pas en
                <br />
                pièces détachées.
              </h2>
            </div>

            {/* ─── Colonne droite : texte + citation ─── */}
            <div className="lg:col-span-6 lg:pt-20">
              {/* Paragraphes */}
              <div className="space-y-6 mb-10 md:mb-14">
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#0a0a0a]/75 max-w-[560px]">
                  Un bon contenu ne compense pas un positionnement flou. Une campagne ne transforme pas un
                  parcours mal pensé. Un beau site ne sert pas l&apos;entreprise si son message reste difficile à
                  comprendre.
                </p>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#0a0a0a]/75 max-w-[560px]">
                  C&apos;est pour cela que Digitamine pense en système. Nous commençons par comprendre l&apos;entreprise,
                  puis nous alignons les messages, les contenus, les supports et la diffusion autour d&apos;une direction
                  commune.
                </p>
              </div>

              {/* Séparateur + citation */}
              <div className="border-t border-[rgba(10,10,10,0.15)] pt-10 md:pt-12">
                <blockquote
                  className="font-display tracking-[-0.01em] text-[#0a0a0a]"
                  style={{
                    fontSize: "clamp(20px, 2.2vw, 34px)",
                    lineHeight: 1.15,
                    fontWeight: 400,
                  }}
                >
                  « Nous ne cherchons pas à occuper
                  <br />
                  l&apos;espace. Nous construisons une présence
                  <br />
                  qui a du sens. »
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Partie basse : frise de 3 photos ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {photos.map((photo) => (
          <div
            key={photo.num}
            className="relative w-full aspect-[4/3] md:aspect-[16/14] overflow-hidden group"
          >
            <Image
              src={photo.img}
              alt={photo.label}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay sombre subtil */}
            <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-[#050505]/10 transition-colors duration-500" />

            {/* Numéro (en bas à gauche) */}
            <span className="absolute bottom-5 left-5 md:bottom-7 md:left-7 font-display text-[11px] md:text-[12px] tracking-widest text-[#C9A227]">
              {photo.num}
            </span>

            {/* Label (en bas à droite) */}
            <span className="absolute bottom-5 right-5 md:bottom-7 md:right-7 font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-white">
              {photo.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}