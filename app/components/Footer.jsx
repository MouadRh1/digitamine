import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(201,162,39,0.12)' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Digitamine Agency"
                  fill
                  sizes="80px"
                  className="object-contain"
                  priority={false}
                />
              </div>
              <span
                className="font-display text-[15px] tracking-[0.18em] uppercase text-white"
                style={{ fontWeight: 400 }}
              >
                Digitamine Agency
              </span>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: '#A0A0A0', maxWidth: 240 }}>
              Agence digitale créative spécialisée en contenu, branding, marketing et expériences digitales.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Réalisations', href: '/realisations' },
                { label: 'À propos', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] transition-colors duration-200 hover:text-[#C9A227]"
                    style={{ color: '#A0A0A0' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Réseaux */}
          <div>
            <p className="section-label mb-6">Nous contacter</p>
            <ul className="flex flex-col gap-3">
              {/* Email */}
              <li>
                <a
                  href="mailto:contact@digitamine.com"
                  className="text-[13px] flex items-center gap-2.5 transition-colors duration-200 hover:text-[#C9A227] group"
                  style={{ color: '#A0A0A0' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A227"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  contact@digitamineagency.com
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/212717668246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] flex items-center gap-2.5 transition-colors duration-200 hover:text-[#C9A227] group"
                  style={{ color: '#A0A0A0' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#C9A227"
                    className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/digitamineagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] flex items-center gap-2.5 transition-colors duration-200 hover:text-[#C9A227] group"
                  style={{ color: '#A0A0A0' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A227"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a
                  href="https://web.facebook.com/profile.php?id=61581751289024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] flex items-center gap-2.5 transition-colors duration-200 hover:text-[#C9A227] group"
                  style={{ color: '#A0A0A0' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#C9A227"
                    className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/company/digitamine-agency/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] flex items-center gap-2.5 transition-colors duration-200 hover:text-[#C9A227] group"
                  style={{ color: '#A0A0A0' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#C9A227"
                    className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] tracking-wider" style={{ color: 'rgba(160,160,160,0.5)' }}>
            © 2026 DIGITAMINE AGENCY — TOUS DROITS RÉSERVÉS
          </p>
          <div className="flex items-center gap-6">
            <span
              className="text-[12px] cursor-pointer hover:text-[#C9A227] transition-colors duration-200"
              style={{ color: 'rgba(160,160,160,0.5)' }}
            >
              Politique de confidentialité
            </span>
            <span
              className="text-[12px] cursor-pointer hover:text-[#C9A227] transition-colors duration-200"
              style={{ color: 'rgba(160,160,160,0.5)' }}
            >
              Mentions légales
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}