export default function ReassuranceSection() {
  return (
    <section className="relative bg-[#C9A227] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        {/* Label supérieur */}
        <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#050505] mb-6 md:mb-8">
          Vous n&apos;avez pas encore un brief clair ?
        </p>

        {/* Titre principal — taille réduite */}
        <h2
          className="font-display tracking-[-0.02em] text-[#050505] mx-auto max-w-[1000px]"
          style={{
            fontSize: "clamp(28px, 3.8vw, 62px)",
            lineHeight: 1.08,
            fontWeight: 400,
          }}
        >
          C&apos;est justement le rôle du
          <br />
          premier échange.
        </h2>
      </div>
    </section>
  );
}