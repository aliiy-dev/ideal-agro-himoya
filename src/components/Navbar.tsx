'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiPhone,
  FiChevronDown,
  FiSearch,
  FiGlobe,
} from 'react-icons/fi';
import { useCartStore } from '@/store/cartStore';
import { useLanguageStore, useT, LANGUAGES, Language } from '@/store/languageStore';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const t = useT();
  const pathname = usePathname();
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const cartHydrated = useCartStore((s) => s.hasHydrated);
  const cartItems = useCartStore((s) => s.items);
  const cartQty = cartHydrated ? cartItems.length : 0;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-lang-trigger]')) setLangOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav_home },
    { href: '/products', label: t.nav_products },
    { href: '/about', label: t.nav_about },
    { href: '/contact', label: t.nav_contact },
  ];

  const currentLang = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <div className="fixed top-0 left-0 right-0 z-50" suppressHydrationWarning>
      {/* Main navbar */}
      <motion.nav
        className={`navbar py-1 ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0.32, 1] }}
      >
        <div className="container" suppressHydrationWarning>
          <div className="flex items-center gap-4" suppressHydrationWarning>
            <Link href="/" className="flex-shrink-0">
              <BrandLogo />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5 ml-8" suppressHydrationWarning>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive(link.href) ? 'var(--green-700)' : 'var(--ink-700)',
                    background: isActive(link.href) ? 'var(--green-50)' : 'transparent',
                    fontWeight: isActive(link.href) ? 600 : 500,
                  }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: 'var(--green)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right cluster */}
            <div className="flex items-center gap-1 ml-auto" suppressHydrationWarning>
              <a
                href="tel:+998959371212"
                className="hidden xl:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-green-50"
                style={{ color: 'var(--green-700)' }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center animate-pulse-dot"
                  style={{ background: 'var(--green-100)' }}
                >
                  <FiPhone className="w-3 h-3" style={{ color: 'var(--green-700)' }} />
                </span>
                <span>+998 95 937 12 12</span>
              </a>

              <Link
                href="/products"
                className="hidden md:inline-flex w-10 h-10 rounded-xl items-center justify-center transition-all duration-200 hover:bg-black/5 hover:scale-105"
                aria-label={t.common_search}
                style={{ color: 'var(--ink-600)' }}
              >
                <FiSearch className="w-[18px] h-[18px]" />
              </Link>

              {/* Language switcher */}
              <div className="relative" suppressHydrationWarning>
                <button
                  data-lang-trigger
                  onClick={(e) => { e.stopPropagation(); setLangOpen((v) => !v); }}
                  className="flex items-center gap-1.5 px-2.5 h-10 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-black/5"
                  style={{ color: 'var(--ink-700)' }}
                  aria-haspopup="menu"
                  aria-expanded={isLangOpen}
                >
                  <FiGlobe className="w-3.5 h-3.5 hidden sm:block" style={{ color: 'var(--green)' }} />
                  <span>{currentLang.short}</span>
                  <FiChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-48 rounded-2xl overflow-hidden z-50"
                      style={{
                        background: 'white',
                        border: '1px solid var(--border-soft)',
                        boxShadow: 'var(--shadow-lg)',
                      }}
                    >
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { setLanguage(lang.code as Language); setLangOpen(false); }}
                          className="w-full px-4 py-3 text-left text-sm flex items-center gap-3 transition-colors hover:bg-green-50"
                          style={{
                            background: language === lang.code ? 'var(--green-50)' : undefined,
                            color: language === lang.code ? 'var(--green-700)' : 'var(--ink-700)',
                            fontWeight: language === lang.code ? 600 : 400,
                          }}
                        >
                          <span>{lang.flag}</span>
                          <span className="flex-1">{lang.label}</span>
                          {language === lang.code && (
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-black/5 hover:scale-105"
                aria-label={t.nav_cart}
                style={{ color: 'var(--ink-700)' }}
              >
                <FiShoppingCart className="w-[18px] h-[18px]" />
                <AnimatePresence>
                  {cartQty > 0 && (
                    <motion.span
                      key="badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 text-[10px] font-bold rounded-full flex items-center justify-center"
                      style={{ background: 'var(--green)', color: 'white' }}
                    >
                      {cartQty}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-black/5"
                aria-label="Menu"
                style={{ color: 'var(--ink-700)' }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMenuOpen ? (
                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <FiX className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <FiMenu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0.32, 1] }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'var(--white)',
              borderBottom: '1px solid var(--border-soft)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
                    style={{
                      background: isActive(link.href) ? 'var(--green-50)' : 'transparent',
                      color: isActive(link.href) ? 'var(--green-700)' : 'var(--ink-700)',
                      fontWeight: isActive(link.href) ? 600 : 500,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 mt-3 border-t border-gray-100">
                <a
                  href="tel:+998959371212"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold"
                  style={{ color: 'var(--green-700)', background: 'var(--green-50)' }}
                >
                  <FiPhone className="w-4 h-4" />
                  +998 95 937 12 12
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
