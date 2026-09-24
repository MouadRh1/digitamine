'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Réalisation', href: '/realisations' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Bloque le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname?.startsWith(href + '/');
  };

  // Le header doit rester opaque dès que le menu mobile est ouvert,
  // même si la page n'a pas encore été scrollée.
  const solidHeader = scrolled || mobileOpen;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: solidHeader ? 'rgba(5,5,5,0.95)' : 'transparent',
          borderBottom: solidHeader ? '1px solid rgba(201,162,39,0.1)' : 'none',
          backdropFilter: solidHeader ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          {/* ─── Logo + Nom ─── */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Digitamine Agency — Accueil"
          >
            {/* Logo image — agrandi */}
            <Image
              src="/images/logo.png"
              alt="Digitamine"
              width={180}
              height={52}
              priority
              className="h-11 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Séparateur vertical doré (visible sur sm+) */}
            <div className="hidden sm:block w-[1px] h-8 bg-[rgba(201,162,39,0.3)]" />

            {/* Texte : Digitamine (blanc) + Agency (doré) */}
            <div className="hidden sm:flex flex-col leading-none">
              <span
                className="font-display text-[16px] md:text-[18px] tracking-[0.18em] uppercase text-white"
                style={{ fontWeight: 400 }}
              >
                Digitamine
              </span>
              <span
                className="font-display text-[12px] md:text-[13px] tracking-[0.35em] uppercase text-[#C9A227] mt-[4px]"
                style={{ fontWeight: 400 }}
              >
                Agency
              </span>
            </div>
          </Link>

          {/* ─── Desktop nav ─── */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative font-sans text-[13px] lg:text-[14px] tracking-tight text-white/70 hover:text-white transition-colors duration-300 group py-2"
                  style={{ fontWeight: 500 }}
                >
                  <span className={`relative z-10 ${active ? 'text-white' : ''}`}>
                    {item.label}
                  </span>

                  {/* Soulignement doré (visible seulement si actif) */}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-[1px] bg-[#C9A227] origin-left transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ─── CTA desktop ─── */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary text-[12px]">
              Démarrer un projet
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M7 3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* ─── Mobile hamburger ─── */}
          <button
            className="md:hidden relative z-50 flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-200 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* ─── Mobile menu ─── */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-40 md:hidden transition-opacity duration-500 flex flex-col"
        style={{
          background: 'rgba(5,5,5,0.98)',
          backdropFilter: 'blur(8px)',
          pointerEvents: mobileOpen ? 'all' : 'none',
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        {/* Espace réservé à la hauteur du header pour ne pas chevaucher logo/burger */}
        <div className="h-[72px] shrink-0" />

        <div className="flex flex-1 flex-col items-center justify-center gap-7">
          {navItems.map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-display text-[26px] tracking-[0.05em] uppercase transition-all duration-300"
                style={{
                  fontWeight: 400,
                  color: active ? '#C9A227' : 'rgba(255,255,255,0.85)',
                  transitionDelay: mobileOpen ? `${index * 40}ms` : '0ms',
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)',
                  opacity: mobileOpen ? 1 : 0,
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                {active && (
                  <span className="absolute left-1/2 -bottom-2 h-[2px] w-6 -translate-x-1/2 bg-[#C9A227]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="btn-primary mt-6 text-[12px]"
            onClick={() => setMobileOpen(false)}
          >
            Démarrer un projet
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M7 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}