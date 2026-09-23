import Image from "next/image";

const clients = [
  { name: "Client 1", logo: "/clients/client-1.png" },
  { name: "Client 2", logo: "/clients/client-2.png" },
  { name: "Client 3", logo: "/clients/client-3.png" },
  { name: "Client 4", logo: "/clients/client-4.png" },
  { name: "Client 5", logo: "/clients/client-5.png" },
  { name: "Client 6", logo: "/clients/client-6.png" },
  { name: "Client 7", logo: "/clients/client-7.png" },
  { name: "Client 8", logo: "/clients/client-8.png" },
];

export default function ClientsMarqueeSection() {
  // On duplique la liste pour créer un défilement infini sans coupure
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative bg-[#050505] py-16 md:py-20 lg:py-24 border-t border-[rgba(201,162,39,0.08)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-10 md:mb-14">
        {/* Label supérieur */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-[#C9A227]" />
          <span className="font-display text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#C9A227]">
            Ils nous ont fait confiance
          </span>
        </div>
      </div>

      {/* ─── Marquee : logos qui défilent ─── */}
      <div className="relative">
        {/* Dégradés sur les côtés pour un fondu doux */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#050505] to-transparent" />

        {/* Piste qui défile */}
        <div className="flex items-center gap-12 md:gap-16 lg:gap-20 animate-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group shrink-0 flex items-center justify-center"
            >
              <div className="relative h-10 md:h-12 lg:h-14 w-[120px] md:w-[140px] lg:w-[160px] opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="160px"
                  className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Animations CSS ─── */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        @media (hover: hover) {
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}