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

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname?.startsWith(href + '/');
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(201,162,39,0.1)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          {/* ─── Logo + Nom ─── */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Digitamine Agency — Accueil"
          >
            {/* Logo image */}
            <Image
              src="/images/logo_dg.jpg"
              alt="Digitamine"
              width={140}
              height={40}
              priority
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Séparateur vertical doré (visible sur sm+) */}
            <div className="hidden sm:block w-[1px] h-6 bg-[rgba(201,162,39,0.3)]" />

            {/* Texte : Digitamine (blanc) + Agency (doré) */}
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-[14px] md:text-[15px] tracking-[0.18em] uppercase text-white font-bold">
                Digitamine
              </span>
              <span className="font-display text-[11px] md:text-[12px] tracking-[0.35em] uppercase text-[#C9A227] font-bold mt-[3px]">
                Agency
              </span>
            </div>
          </Link>

          {/* ─── Desktop nav ─── */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
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
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
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
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          background: 'rgba(5,5,5,0.98)',
          pointerEvents: mobileOpen ? 'all' : 'none',
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-[72px]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-3xl md:text-4xl font-black tracking-wider uppercase text-white hover:text-[#C9A227] transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Démarrer un projet
          </Link>
        </div>
      </div>
    </>
  );
}