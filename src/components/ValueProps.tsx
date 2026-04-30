'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiTruck, FiTag, FiArrowRight } from 'react-icons/fi';
import { useT } from '@/store/languageStore';
import Link from 'next/link';

const ICON_CONFIGS = [
  { bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', iconColor: 'var(--green-700)' },
  { bg: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)', iconColor: 'var(--amber-700)' },
  { bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', iconColor: 'var(--green-700)' },
  { bg: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)', iconColor: 'var(--amber-600)' },
];

const ValueProps = () => {
  const t = useT();

  const items = [
    { icon: FiAward,    title: t.value_quality_title,    text: t.value_quality_text,    num: '100%' },
    { icon: FiBookOpen, title: t.value_advice_title,     text: t.value_advice_text,     num: 'Free' },
    { icon: FiTruck,    title: t.value_logistics_title,  text: t.value_logistics_text,  num: '24/7' },
    { icon: FiTag,      title: t.value_pricing_title,    text: t.value_pricing_text,    num: 'Best' },
  ];

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-head-center">
          <span className="eyebrow mb-4">{t.value_eyebrow}</span>
          <h2 className="section-title">{t.value_title}</h2>
          <p className="section-subtitle">{t.value_subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="card p-7 group h-full flex flex-col"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, var(--green-300), var(--green))' }}
              />

              <div className="flex items-start justify-between mb-6">
                <div
                  className="icon-ring w-14 h-14"
                  style={{ background: ICON_CONFIGS[i].bg }}
                >
                  <item.icon className="w-6 h-6" style={{ color: ICON_CONFIGS[i].iconColor }} />
                </div>
                <span
                  className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: i % 2 === 0 ? 'var(--green-50)' : 'var(--amber-50)',
                    color: i % 2 === 0 ? 'var(--green-700)' : 'var(--amber-700)',
                    border: `1px solid ${i % 2 === 0 ? 'var(--green-100)' : 'var(--amber-100)'}`,
                  }}
                >
                  {item.num}
                </span>
              </div>

              <h3
                className="text-[16px] font-bold mb-2.5 leading-snug"
                style={{ color: 'var(--ink-900)' }}
              >
                {item.title}
              </h3>
              <p
                className="text-[13.5px] leading-relaxed flex-1"
                style={{ color: 'var(--ink-500)' }}
              >
                {item.text}
              </p>

              <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--border-soft)' }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-colors group-hover:gap-2.5"
                  style={{ color: 'var(--green-700)' }}
                >
                  Batafsil
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
