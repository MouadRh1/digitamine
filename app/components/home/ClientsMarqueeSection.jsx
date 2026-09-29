"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const clients = [
  { name: "Client 1", logo: "/images/logo/1.png" },
  { name: "Client 2", logo: "/images/logo/2.png" },
  { name: "Client 3", logo: "/images/logo/3.png" },
  { name: "Client 4", logo: "/images/logo/4.png" },
  { name: "Client 5", logo: "/images/logo/5.png" },
  { name: "Client 6", logo: "/images/logo/6.png" },
  { name: "Client 7", logo: "/images/logo/7.png" },
  { name: "Client 8", logo: "/images/logo/8.png" },
  { name: "Client 9", logo: "/images/logo/9.png" },
  { name: "Client 10", logo: "/images/logo/10.png" },
  { name: "Client 11", logo: "/images/logo/11.png" },
  { name: "Client 12", logo: "/images/logo/12.png" },
  { name: "Client 13", logo: "/images/logo/13.png" },
  { name: "Client 14", logo: "/images/logo/14.png" },
  { name: "Client 15", logo: "/images/logo/15.png" },
  { name: "Client 16", logo: "/images/logo/16.png" },
  { name: "Client 17", logo: "/images/logo/17.png" },
  { name: "Client 18", logo: "/images/logo/18.png" },
  { name: "Client 19", logo: "/images/logo/19.png" },
];

// Deux copies identiques mises bout à bout : quand la première sort de
// l'écran par la gauche, la seconde prend exactement sa place — boucle
// invisible garantie, sans calcul de largeur ni dépendance externe.
const track = [...clients, ...clients];

export default function ClientsMarqueeSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = (e) => setReducedMotion(e.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return (
    <section className="clients-marquee relative overflow-hidden border-t border-b border-[rgba(201,162,39,0.1)] bg-black py-10 md:py-18 lg:py-22">
      {/* Label supérieur */}
      <div className="mx-auto mb-10 max-w-[1400px] px-6 md:px-10 md:mb-14">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-10 h-[1px] bg-[#C9A227]" />
          <p className="font-display text-[14px] md:text-[16px] tracking-[0.22em] uppercase text-[#C9A227]">
            Ils nous ont fait confiance
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Dégradés latéraux */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black to-transparent md:w-40" />

        <div className="marquee-viewport overflow-hidden">
          <div
            className={`marquee-track flex w-max items-center py-4 ${
              reducedMotion ? "" : "animate-marquee"
            }`}
          >
            {track.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group shrink-0 px-3 md:px-4"
              >
                {/* Carte "partenaire" : fond blanc, ombre, effet hover subtil */}
                <div className="relative bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,162,39,0.25)]">
                  {/* Coins dorés décoratifs */}
                  <span className="absolute top-2 left-2 w-3 h-[1px] bg-[#C9A227]/40 transition-all duration-500 group-hover:w-4 group-hover:bg-[#C9A227]" />
                  <span className="absolute top-2 left-2 w-[1px] h-3 bg-[#C9A227]/40 transition-all duration-500 group-hover:h-4 group-hover:bg-[#C9A227]" />
                  <span className="absolute bottom-2 right-2 w-3 h-[1px] bg-[#C9A227]/40 transition-all duration-500 group-hover:w-4 group-hover:bg-[#C9A227]" />
                  <span className="absolute bottom-2 right-2 w-[1px] h-3 bg-[#C9A227]/40 transition-all duration-500 group-hover:h-4 group-hover:bg-[#C9A227]" />

                  {/* Conteneur du logo */}
                  <div className="relative w-28 h-28 md:w-32 md:h-32 p-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="(max-width: 768px) 112px, 128px"
                      className="object-contain p-3 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animate-marquee {
          animation: clients-marquee-scroll 40s linear infinite;
        }

        /* Pause au survol global (facultatif mais agréable) */
        {/* .clients-marquee:hover .animate-marquee {
          animation-play-state: paused;
        } */}

        @keyframes clients-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            /* La liste est dupliquée x2 : décaler exactement de la moitié
               fait boucler sans à-coup ni saut visible. */
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}