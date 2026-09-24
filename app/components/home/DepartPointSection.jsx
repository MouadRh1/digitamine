export default function DepartPointSection() {
  return (
    <section className="relative bg-[#EDEAE3] min-h-[70vh] max-h-[90vh] flex items-center py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* Label supérieur */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-10 h-[1px] bg-[#C9A227]" />
          <p className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
            Le point de départ
          </p>
        </div>

        {/* Titre principal — taille réduite */}
        <h2
          className="font-display tracking-[-0.02em] mb-10 md:mb-14 max-w-[1300px]"
          style={{
            fontSize: "clamp(36px, 5.2vw, 78px)",
            lineHeight: 1.04,
            fontWeight: 400,
            color: "#0a0a0a",
          }}
        >
          Votre entreprise n&apos;a pas besoin de faire{" "}
          <span className="text-[#9c9c9c]">plus de digital.</span>
          <br />
          Elle a besoin de mieux le structurer.
        </h2>

        {/* Grille des deux paragraphes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-[1200px]">
          <p className="text-[14px] md:text-[15px] leading-relaxed text-[#1a1a1a]">
            Publier, créer un site ou lancer une campagne ne suffit pas lorsque
            chaque action avance dans une direction différente.
          </p>

          <p className="text-[14px] md:text-[15px] leading-relaxed text-[#1a1a1a]">
            Nous commençons par comprendre votre entreprise. Ensuite, nous
            connectons les bons leviers dans un système clair.
          </p>
        </div>
      </div>
    </section>
  );
}
