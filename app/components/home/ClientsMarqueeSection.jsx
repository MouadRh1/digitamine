"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const clients = [
  { name: "Client 1", logo: "/images/logo/agpa.jfif" },
  { name: "Client 2", logo: "/images/logo/caes.png" },
  { name: "Client 3", logo: "/images/logo/cmedmaroc.org.jpg" },
  { name: "Client 4", logo: "/images/logo/conquete.png" },
  { name: "Client 5", logo: "/images/logo/credit_agriculture.jpg" },
  { name: "Client 6", logo: "/images/logo/eiestp.png" },
  { name: "Client 7", logo: "/images/logo/essebar.png" },
  { name: "Client 8", logo: "/images/logo/ifdce.png" },
  { name: "Client 9", logo: "/images/logo/khder.png" },
  { name: "Client 10", logo: "/images/logo/maison_ensemble.png" },
  { name: "Client 11", logo: "/images/logo/maison-paramed.png" },
  { name: "Client 12", logo: "/images/logo/nelga.jpg" },
  { name: "Client 13", logo: "/images/logo/onigt.jpg" },
  { name: "Client 14", logo: "/images/logo/opic.png" },
  { name: "Client 15", logo: "/images/logo/qhwi.png" },
  { name: "Client 16", logo: "/images/logo/saada_smila.jfif" },
  { name: "Client 17", logo: "/images/logo/sup_universal.jfif" },
  { name: "Client 18", logo: "/images/logo/udis.png" },
  { name: "Client 19", logo: "/images/logo/workaura.png" },
];

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
    <section className="clients-marquee relative overflow-hidden border-t gold-divider bg-black py-16 md:py-20">
      <div className="mx-auto mb-10 max-w-[1240px] px-8 md:mb-14">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-gold" />
          <span className="font-display text-[11px] uppercase tracking-[0.22em] text-gold">
            Ils nous ont fait confiance
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black to-transparent md:w-40" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={60}
          loop
          freeMode={{ enabled: true, momentum: false }}
          speed={6000}
          autoplay={
            reducedMotion
              ? false
              : { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }
          }
          allowTouchMove={false}
          className="clients-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={`${client.name}-${index}`} className="!w-auto">
              <div className="group flex items-center justify-center">
                {/* Carte neutre derrière chaque logo : absorbe les fonds
                    blancs/opaques des .jpg/.jfif sans flash ni rectangle brut */}
                <div className="relative flex h-16 w-[140px] items-center justify-center rounded-sm border border-gold/10 bg-cream/[0.04] p-3 opacity-60  transition-all duration-500 group-hover:border-gold/30 group-hover:opacity-100 group-hover:grayscale-0 md:h-18 md:w-[160px]">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="160px"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .clients-marquee .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}