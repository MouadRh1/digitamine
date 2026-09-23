import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(201,162,39,0.12)' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 flex items-center justify-center border border-[rgba(201,162,39,0.4)]"
                style={{ background: 'rgba(201,162,39,0.07)' }}
              >
                <span className="font-display text-[15px] font-800 tracking-widest" style={{ color: '#C9A227', fontWeight: 800 }}>DG</span>
              </div>
              <span className="font-display text-[15px] font-700 tracking-[0.18em] uppercase text-white" style={{ fontWeight: 700 }}>
                Digitamine Agency
              </span>
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: '#A0A0A0', maxWidth: 240 }}>
              Creative digital agency focused on content, branding, marketing and digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {['Home', 'Services', 'Realisations', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-[13px] transition-colors duration-200 hover:text-[#C9A227]"
                    style={{ color: '#A0A0A0' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="section-label mb-6">Services</p>
            <ul className="flex flex-col gap-3">
              {['Social Media', 'Video Production', 'Photography', 'Web Development', 'Branding', 'Advertising'].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-[13px] transition-colors duration-200 hover:text-[#C9A227]"
                    style={{ color: '#A0A0A0' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Connect</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'contact@digitamine.com', icon: '✉' },
                { label: 'WhatsApp', icon: '◎' },
                { label: 'Instagram', icon: '◈' },
                { label: 'LinkedIn', icon: '◆' },
              ].map((item) => (
                <li key={item.label}>
                  <span
                    className="text-[13px] flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-[#C9A227]"
                    style={{ color: '#A0A0A0' }}
                  >
                    <span style={{ color: '#C9A227', fontSize: 10 }}>{item.icon}</span>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] tracking-wider" style={{ color: 'rgba(160,160,160,0.5)' }}>
            © 2026 DIGITAMINE AGENCY — ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[12px] cursor-pointer hover:text-[#C9A227] transition-colors duration-200" style={{ color: 'rgba(160,160,160,0.5)' }}>
              Privacy Policy
            </span>
            <span className="text-[12px] cursor-pointer hover:text-[#C9A227] transition-colors duration-200" style={{ color: 'rgba(160,160,160,0.5)' }}>
              Legal Notice
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}