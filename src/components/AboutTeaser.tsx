'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiFeather, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi';import { useT } from '@/store/languageStore';

const STAT_ICONS = [FiShield, FiFeather, FiUsers, FiTrendingUp];
const STAT_COLORS = [
  { bg: '#f0fdf4', border: '#bbf7d0', icon: 'var(--green-700)', text: 'var(--green-800)' },
  { bg: '#fffbeb', border: '#fde68a', icon: 'var(--amber-700)', text: 'var(--amber-800)' },
  { bg: '#f0fdf4', border: '#86efac', icon: 'var(--green-700)', text: 'var(--green-800)' },
  { bg: '#fefce8', border: '#fde047', icon: '#92400e',          text: '#78350f' },
];

const AboutTeaser = () => {
  const t = useT();
  const bullets = [t.about_bullet_1, t.about_bullet_2, t.about_bullet_3, t.about_bullet_4];

  const stats = [
    { value: '6+',  label: t.stats_experience, icon: STAT_ICONS[0] },
    { value: '50+', label: t.stats_products,   icon: STAT_ICONS[1] },
    { value: '1K+', label: t.stats_farmers,    icon: STAT_ICONS[2] },
  ];

  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--white) 0%, var(--ink-50) 100%)',
      }}
    >
      {/* Decorative circle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(22,163,74,0.05) 0%, transparent 70%)' }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow mb-5">{t.about_eyebrow}</span>
            <h2
              className="section-title text-left mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              {t.about_title}
            </h2>
            <p
              className="text-[1.02rem] leading-relaxed mb-8"
              style={{ color: 'var(--ink-600)', maxWidth: '480px' }}
            >
              {t.about_lead}
            </p>

            <ul className="space-y-3.5 mb-9">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3.5"
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: 'linear-gradient(135deg, var(--green), var(--green-700))',
                      boxShadow: '0 2px 8px rgba(22,163,74,0.3)',
                    }}
                  >
                    <FiCheck className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-[14.5px] leading-relaxed" style={{ color: 'var(--ink-700)' }}>
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-primary">
                {t.common_learnMore}
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Bog&apos;lanish
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {/* Outer rounded container */}
            <div
              className="relative rounded-3xl p-6"
              style={{
                background: 'linear-gradient(135deg, var(--green-50) 0%, var(--white) 60%)',
                border: '1px solid var(--green-100)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              {/* Decorative badge top-right */}
              <div
                className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: 'white',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--border-soft)',
                }}
              >
                🌿
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => {
                  const col = STAT_COLORS[i];
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                      className="rounded-2xl p-5 flex flex-col"
                      style={{
                        background: col.bg,
                        border: `1px solid ${col.border}`,
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                        style={{ background: 'white', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
                      >
                        <Icon className="w-4 h-4" style={{ color: col.icon }} />
                      </div>
                      <p
                        className="text-3xl font-black leading-none mb-1.5"
                        style={{ color: col.text }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs font-medium leading-snug" style={{ color: 'var(--ink-500)' }}>
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom tagline */}
              <div
                className="mt-5 pt-5 flex items-center gap-3"
                style={{ borderTop: '1px solid var(--green-100)' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--green)', boxShadow: 'var(--shadow-green)' }}
                >
                  <FiCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="text-[13px] font-medium" style={{ color: 'var(--ink-600)' }}>
                  <strong style={{ color: 'var(--green-700)' }}>Ideal Agro Himoya</strong> — O&apos;zbekiston bo&apos;ylab yetkazib beramiz
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
