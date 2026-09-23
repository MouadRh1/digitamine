const membres = [
  {
    num: "01",
    name: "Mohamed Amine",
    role: "DIRECTION & STRATÉGIE",
    desc: "Relier la vision business aux décisions créatives.",
  },
  {
    num: "02",
    name: "Asmae",
    role: "GESTION DE PROJET",
    desc: "Faire avancer les projets avec clarté et continuité.",
  },
  {
    num: "03",
    name: "Oumayma",
    role: "PLANNING & STRATÉGIE",
    desc: "Transformer les objectifs en plans d'action structurés.",
  },
  {
    num: "04",
    name: "Nabil",
    role: "DÉVELOPPEMENT WEB",
    desc: "Construire des expériences digitales solides et utiles.",
  },
  {
    num: "05",
    name: "Pôle créatif",
    role: "DESIGN & CONTENU",
    desc: "Donner aux idées une forme claire et reconnaissable.",
  },
  {
    num: "06",
    name: "Pôle audiovisuel",
    role: "PRODUCTION & MONTAGE",
    desc: "Mettre les personnes, les gestes et le terrain en mouvement.",
  },
];

export default function EquipeSection() {
  return (
    <section className="relative bg-[#050505] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ─── Header : label gauche + titre droite ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-12 md:mb-16">
          {/* Label à gauche */}
          <div className="lg:col-span-2 flex items-start gap-3">
            <div className="w-8 h-[1px] bg-[#C9A227] mt-2" />
            <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
              L&apos;équipe
            </span>
          </div>

          {/* Titre + description à droite */}
          <div className="lg:col-span-10">
            <h2
              className="font-display tracking-[-0.02em] text-white mb-6 md:mb-8"
              style={{
                fontSize: "clamp(32px, 4.8vw, 76px)",
                lineHeight: 1.05,
                fontWeight: 400,
              }}
            >
              Des expertises différentes.
              <br />
              Une responsabilité partagée.
            </h2>

            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#A0A0A0] max-w-[720px]">
              Digitamine fonctionne comme une équipe connectée : la stratégie informe la création, la
              création dialogue avec la production, et la technologie soutient l&apos;expérience.
            </p>
          </div>
        </div>

        {/* ─── Liste des membres ─── */}
        <div className="border-t border-[rgba(201,162,39,0.12)]">
          {membres.map((membre) => (
            <div
              key={membre.num}
              className="group grid grid-cols-12 gap-4 md:gap-8 items-start py-7 md:py-9 border-b border-[rgba(201,162,39,0.12)] transition-colors duration-300 hover:bg-[rgba(201,162,39,0.02)]"
            >
              {/* Numéro */}
              <div className="col-span-2 md:col-span-1">
                <span className="font-display text-[11px] md:text-[12px] tracking-widest text-[#C9A227]">
                  {membre.num}
                </span>
              </div>

              {/* Nom + rôle */}
              <div className="col-span-10 md:col-span-5">
                <h3
                  className="font-display tracking-tight text-white mb-2 group-hover:text-[#C9A227] transition-colors duration-300"
                  style={{
                    fontSize: "clamp(18px, 1.6vw, 24px)",
                    fontWeight: 500,
                    lineHeight: 1.15,
                  }}
                >
                  {membre.name}
                </h3>
                <p className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
                  {membre.role}
                </p>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-6 md:pt-1">
                <p className="text-[13px] md:text-[14px] leading-relaxed text-[#A0A0A0]">
                  {membre.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}