'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiPhone, FiArrowRight, FiSend, FiMessageCircle } from 'react-icons/fi';
import { useT } from '@/store/languageStore';

const CtaStrip = () => {
  const t = useT();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden cta-section">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow-dark mb-5">
              Biz bilan aloqa
            </span>
            <h2
              className="font-extrabold text-white mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.028em',
              }}
            >
              {t.cta_title}
            </h2>
            <p className="text-base leading-relaxed mb-0 max-w-md" style={{ color: 'rgba(255,255,255,0.68)' }}>
              {t.cta_subtitle}
            </p>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                '✅ Bepul konsultatsiya',
                '🚚 Tez yetkazib berish',
                '💧 200+ mahsulot, 6 kategoriya',
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Primary CTA */}
            <a
              href="tel:+998959371212"
              className="flex items-center gap-4 p-5 rounded-2xl transition-all group"
              style={{
                background: 'var(--green)',
                boxShadow: 'var(--shadow-green-lg)',
              }}
            >
              <span
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <FiPhone className="w-5 h-5 text-white" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white opacity-75 mb-0.5">
                  Qo&apos;ng&apos;iroq qiling
                </p>
                <p className="text-lg font-bold text-white">+998 95 937 12 12</p>
              </div>
              <FiArrowRight className="w-5 h-5 text-white opacity-60 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl transition-all group"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1.5px solid rgba(255,255,255,0.15)',
              }}
            >
              <span
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <FiSend className="w-5 h-5 text-white" />
              </span>
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white opacity-75 mb-0.5">
                  Telegram
                </p>
                <p className="text-base font-bold text-white">{t.cta_button}</p>
              </div>
              <FiArrowRight className="w-5 h-5 text-white opacity-40 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* View products */}
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 p-4 rounded-2xl text-sm font-semibold transition-all"
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              <FiMessageCircle className="w-4 h-4" />
              Mahsulotlar katalogi
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaStrip;
