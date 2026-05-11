'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiPhone,
  FiShield,
  FiTruck,
  FiAward,
  FiStar,
  FiCheckCircle,
  FiDroplet,
  FiSun,
  FiWind,
} from 'react-icons/fi';
import { useT } from '@/store/languageStore';

const CATEGORY_PILLS = [
  { label: 'Biostimulyatorlar', emoji: '💧', color: '#f0f9ff', border: '#bae6fd', text: '#0284c7', slug: 'biostimulyatorlar' },
  { label: "O'g'itlar",         emoji: '🌱', color: '#f0fdf4', border: '#4ade80', text: '#166534', slug: 'ogitlar' },
  { label: 'Fulvic Plus',       emoji: '🌿', color: '#ecfdf5', border: '#86efac', text: '#15803d', slug: 'biostimulyatorlar' },
  { label: 'Amino Max 80%',     emoji: '⚡', color: '#fffbeb', border: '#fde68a', text: '#92400e', slug: 'biostimulyatorlar' },
  { label: 'Khumic-100',        emoji: '🏆', color: '#fefce8', border: '#fde047', text: '#854d0e', slug: 'ogitlar' },
];

const Hero = () => {
  const t = useT();

  return (
    <section
      className="relative overflow-hidden hero-bg"
      style={{ paddingTop: 'clamp(168px, 16vw, 200px)', paddingBottom: 'clamp(64px, 8vw, 108px)' }}
    >
      {/* ── Background orbs ── */}
      <div className="absolute inset-0 hero-dots pointer-events-none opacity-50" />
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(22,163,74,0.10) 0%, transparent 65%)', transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 65%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ══════ LEFT: Copy ══════ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0.32, 1] }}
          >
            {/* Eyebrow row */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-7"
            >
              <span className="eyebrow">
                <FiStar style={{ width: 11, height: 11 }} />
                {t.hero_eyebrow}
              </span>
              <span
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                style={{ color: 'var(--amber-700)', background: 'var(--amber-50)', border: '1px solid var(--amber-200)' }}
              >
                <FiAward style={{ width: 12, height: 12 }} />
                ISO 9001 Sertifikatlangan
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              className="font-extrabold mb-6"
              style={{ fontSize: 'clamp(2.1rem, 5vw, 3.6rem)', lineHeight: 1.1, color: 'var(--ink-900)' }}
            >
              {t.hero_titleLead}{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #15803d 0%, #22c55e 60%, #86efac 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t.hero_titleAccent}
              </span>
            </h1>

            <p
              className="max-w-[520px] mb-9"
              style={{ color: 'var(--ink-600)', fontSize: 'clamp(0.97rem, 1.1vw, 1.08rem)', lineHeight: 1.8 }}
            >
              {t.hero_description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link href="/products" className="btn btn-primary btn-lg">
                {t.hero_cta_browse}
                <FiArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <a href="tel:+998959371212" className="btn btn-ghost btn-lg">
                <FiPhone style={{ width: 16, height: 16, color: 'var(--green-700)' }} />
                {t.hero_cta_call}
              </a>
            </div>

            {/* Trust strip */}
            <div
              className="flex flex-wrap items-center gap-6 pt-8"
              style={{ borderTop: '1px solid var(--border-soft)' }}
            >
              {[
                { icon: FiShield,       label: t.hero_badge_quality,  note: t.hero_badge_qualityNote,   color: 'var(--green)' },
                { icon: FiTruck,        label: t.hero_badge_delivery, note: t.hero_badge_deliveryNote,  color: 'var(--green)' },
                { icon: FiCheckCircle,  label: '100%',                note: 'Sertifikatlangan',          color: 'var(--amber-600)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 min-w-0">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--green-50)' }}
                  >
                    <item.icon style={{ width: 16, height: 16, color: item.color }} />
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-tight" style={{ color: 'var(--ink-900)' }}>{item.label}</p>
                    <p className="text-xs leading-tight" style={{ color: 'var(--ink-500)' }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ══════ RIGHT: Animated Visual (no images) ══════ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0.32, 1] }}
            className="relative"
          >
            <HeroVisual t={t} />
          </motion.div>
        </div>

        {/* ── Category pills row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-16 pt-8"
          style={{ borderTop: '1px solid var(--border-soft)' }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--ink-400)' }}
          >
            Mahsulot kategoriyalari
          </p>
          <div className="flex flex-wrap gap-2.5">
            {CATEGORY_PILLS.map((cat) => (
              <Link
                key={cat.label}
                href={`/products?category=${cat.slug}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-md"
                style={{ background: cat.color, border: `1.5px solid ${cat.border}`, color: cat.text }}
              >
                <span role="img" aria-hidden>{cat.emoji}</span>
                {cat.label}
              </Link>
            ))}
            <Link
              href="/products"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'var(--green)', color: 'white', boxShadow: 'var(--shadow-green)' }}
            >
              Barchasi
              <FiArrowRight style={{ width: 13, height: 13 }} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────────
   HeroVisual — pure CSS/SVG animated panel, zero images needed
───────────────────────────────────────────────────────────────── */
const HeroVisual = ({ t }: { t: ReturnType<typeof useT> }) => {
  const categories = [
    { emoji: '🕷️', label: 'Akaritsidlar',   bg: '#fef2f2', border: '#fecaca', color: '#991b1b' },
    { emoji: '🦟', label: 'Insektitsidlar', bg: '#fff7ed', border: '#fed7aa', color: '#9a3412' },
    { emoji: '🍄', label: 'Fungitsidlar',   bg: '#f0fdf4', border: '#bbf7d0', color: '#166534' },
    { emoji: '🌿', label: 'Herbitsidlar',   bg: '#ecfdf5', border: '#86efac', color: '#15803d' },
    { emoji: '🌱', label: "O'g'itlar",      bg: '#f7fee7', border: '#bef264', color: '#3f6212' },
    { emoji: '💧', label: 'Mikroelementlar',bg: '#eff6ff', border: '#bfdbfe', color: '#1d4ed8' },
  ];

  return (
    <div className="relative w-full max-w-[520px] mx-auto" style={{ aspectRatio: '1 / 1.02' }}>

      {/* Glow blobs */}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(22,163,74,0.18)', inset: '10%', zIndex: 0 }}
      />
      <div
        className="absolute w-40 h-40 -top-8 -right-8 rounded-full blur-2xl pointer-events-none"
        style={{ background: 'rgba(22,163,74,0.12)' }}
      />

      {/* ─ Main center card ─ */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-[8%] rounded-3xl z-10 flex flex-col items-center justify-center gap-5 p-8"
        style={{
          background: 'linear-gradient(155deg, #f0fdf4 0%, #ffffff 50%, #fafff8 100%)',
          border: '1.5px solid var(--green-100)',
          boxShadow: '0 32px 80px rgba(22,163,74,0.18), 0 8px 32px rgba(15,26,20,0.06)',
        }}
      >
        {/* Brand logo area */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-1"
          style={{ background: 'linear-gradient(135deg, var(--green) 0%, #15803d 100%)', boxShadow: '0 8px 24px rgba(22,163,74,0.40)' }}
        >
          <FiSun style={{ width: 40, height: 40, color: 'white' }} />
        </div>
        <p className="text-lg font-extrabold text-center" style={{ color: 'var(--ink-900)', letterSpacing: '-0.01em' }}>
          Ideal Agro Himoya
        </p>
        <p className="text-sm text-center" style={{ color: 'var(--ink-500)', lineHeight: 1.6 }}>
          {t.brandTagline}
        </p>

        {/* Mini stats row */}
        <div className="grid grid-cols-3 gap-3 w-full mt-2">
          {[
            { v: '1000+', l: 'Fermer' },
            { v: '50+',   l: 'Mahsulot' },
            { v: '5+',    l: 'Yillik' },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-xl py-2.5 text-center"
              style={{ background: 'var(--green-50)', border: '1px solid var(--green-100)' }}
            >
              <p className="text-base font-extrabold leading-none" style={{ color: 'var(--green-700)' }}>{s.v}</p>
              <p className="text-[10px] mt-0.5 font-medium" style={{ color: 'var(--ink-500)' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ─ Category pills orbiting around ─ */}
      {categories.map((cat, i) => {
        const angle = (i / categories.length) * 2 * Math.PI - Math.PI / 2;
        const rx = 47, ry = 44;
        const cx = 50 + rx * Math.cos(angle);
        const cy = 50 + ry * Math.sin(angle);
        return (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.35, ease: 'backOut' }}
            className="absolute z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm cursor-default select-none"
            style={{
              left: `${cx}%`,
              top:  `${cy}%`,
              transform: 'translate(-50%, -50%)',
              background: cat.bg,
              border: `1.5px solid ${cat.border}`,
              color: cat.color,
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(15,26,20,0.08)',
            }}
          >
            <span role="img" aria-hidden style={{ fontSize: '14px' }}>{cat.emoji}</span>
            <span className="hidden sm:inline">{cat.label}</span>
          </motion.div>
        );
      })}

      {/* ─ Floating stat badge — top left ─ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="absolute -top-3 -left-3 glass rounded-2xl px-4 py-3 flex items-center gap-3 z-30"
        style={{ boxShadow: 'var(--shadow-lg)' }}
      >
        <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#fef2f2' }}>
          <FiShield style={{ width: 16, height: 16, color: '#dc2626' }} />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink-500)' }}>Sifat</p>
          <p className="text-xs font-bold" style={{ color: 'var(--ink-900)' }}>{t.hero_badge_qualityNote}</p>
        </div>
      </motion.div>

      {/* ─ Floating stat badge — bottom right ─ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="absolute -bottom-3 -right-3 glass rounded-2xl px-4 py-3 flex items-center gap-3 z-30"
        style={{ boxShadow: 'var(--shadow-lg)' }}
      >
        <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--amber-50)' }}>
          <FiDroplet style={{ width: 16, height: 16, color: 'var(--amber-600)' }} />
        </span>
        <div>
          <p className="text-sm font-extrabold leading-none mb-0.5" style={{ color: 'var(--ink-900)' }}>5+ yil</p>
          <p className="text-[11px]" style={{ color: 'var(--ink-500)' }}>Tajriba</p>
        </div>
      </motion.div>

      {/* ─ Floating badge — right middle ─ */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="absolute top-1/2 -right-6 -translate-y-1/2 glass rounded-2xl px-3 py-2.5 flex items-center gap-2 z-30"
        style={{ boxShadow: 'var(--shadow-lg)' }}
      >
        <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'var(--green-50)' }}>
          <FiWind style={{ width: 13, height: 13, color: 'var(--green-700)' }} />
        </span>
        <div>
          <p className="text-xs font-bold leading-none" style={{ color: 'var(--ink-900)' }}>{t.hero_badge_delivery}</p>
          <p className="text-[10px] leading-tight" style={{ color: 'var(--ink-500)' }}>{t.hero_badge_deliveryNote}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
