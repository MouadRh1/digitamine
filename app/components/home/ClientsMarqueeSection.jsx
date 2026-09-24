"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
    <section className="clients-marquee relative overflow-hidden border-t border-b border-[rgba(201,162,39,0.1)] bg-black py-20 md:py-28 lg:py-32">
      {/* Label supérieur — même style que "Le point de départ" */}
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

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={60}
          loop
          loopAdditionalSlides={clients.length}
          speed={14000}
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
                {/* Conteneur agrandi : logos 320px / 380px */}
                <div className="relative flex h-36 w-[300px] items-center justify-center opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 md:h-44 md:w-[360px]">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="360px"
                    className="object-contain"
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