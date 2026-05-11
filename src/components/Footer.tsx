'use client';

import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiSend, FiArrowRight } from 'react-icons/fi';
import { useT } from '@/store/languageStore';
import BrandLogo from './BrandLogo';

const Footer = () => {
  const t = useT();

  const quickLinks = [
    { href: '/', label: t.nav_home },
    { href: '/products', label: t.nav_products },
    { href: '/about', label: t.nav_about },
    { href: '/contact', label: t.nav_contact },
  ];

  const categories = [
    { href: '/products?category=biostimulyatorlar', label: 'Biostimulyatorlar 💧' },
    { href: "/products?category=ogitlar", label: "O'g'itlar 🌱" },
  ];

  const socialLinks = [
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram', color: '#e1306c' },
    { icon: FiFacebook,  href: 'https://facebook.com',  label: 'Facebook',  color: '#1877f2' },
    { icon: FiSend,      href: 'https://t.me',          label: 'Telegram',  color: '#0088cc' },
  ];

  return (
    <footer className="footer pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <BrandLogo variant="light" />
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '240px' }}>
              {t.footer_about}
            </p>
            <p
              className="text-sm font-bold"
              style={{
                background: 'linear-gradient(135deg, #4ade80, #22c55e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.brandTagline}
            </p>

            {/* Social */}
            <div className="flex gap-2.5 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold mb-5 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
              {t.footer_quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm flex items-center gap-2 transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <FiArrowRight
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                      style={{ color: 'var(--green-300)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold mb-5 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
              Kategoriyalar
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="group text-sm flex items-center gap-2 transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <FiArrowRight
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                      style={{ color: 'var(--green-300)' }}
                    />
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-5 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
              {t.footer_contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(22,163,74,0.12)' }}
                >
                  <FiMapPin className="w-3.5 h-3.5" style={{ color: '#4ade80' }} />
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {t.contactPage_info_addressValue}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(22,163,74,0.12)' }}
                >
                  <FiPhone className="w-3.5 h-3.5" style={{ color: '#4ade80' }} />
                </span>
                <a
                  href="tel:+998959371212"
                  className="text-sm font-semibold transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  +998 95 937 12 12
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(22,163,74,0.12)' }}
                >
                  <FiMail className="w-3.5 h-3.5" style={{ color: '#4ade80' }} />
                </span>
                <a
                  href="mailto:info@idealagro.uz"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  info@idealagro.uz
                </a>
              </li>
            </ul>

            {/* Call box */}
            <div
              className="mt-6 p-4 rounded-xl"
              style={{ background: 'rgba(22,163,74,0.09)', border: '1px solid rgba(22,163,74,0.2)' }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {t.common_callUs}
              </p>
              <a href="tel:+998959371212" className="text-base font-bold text-white">
                +998 95 937 12 12
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} {t.brandName}. {t.footer_rights}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {t.footer_madeIn}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
