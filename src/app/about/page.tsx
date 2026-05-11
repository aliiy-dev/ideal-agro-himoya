'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiAward,
  FiUsers,
  FiMapPin,
  FiBox,
  FiArrowRight,
  FiCheck,
} from 'react-icons/fi';
import { useT } from '@/store/languageStore';

export default function AboutPage() {
  const t = useT();

  const values = [
    { icon: FiAward,  title: t.aboutPage_value_quality_title,    text: t.aboutPage_value_quality_text },
    { icon: FiUsers,  title: t.aboutPage_value_service_title,    text: t.aboutPage_value_service_text },
    { icon: FiMapPin, title: t.aboutPage_value_reach_title,      text: t.aboutPage_value_reach_text },
    { icon: FiBox,    title: t.aboutPage_value_assortment_title, text: t.aboutPage_value_assortment_text },
  ];

  const bullets = [t.about_bullet_1, t.about_bullet_2, t.about_bullet_3, t.about_bullet_4];

  return (
    <div className="pt-28 md:pt-32 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-14"
        >
          <span className="eyebrow mb-4">{t.aboutPage_eyebrow}</span>
          <h1 className="section-title text-left mb-5">{t.aboutPage_title}</h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--ink-600)' }}>
            {t.aboutPage_lead}
          </p>
        </motion.div>

        {/* Mission + history */}
        <div className="grid lg:grid-cols-2 gap-7 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-7 md:p-8"
          >
            <h2 className="text-xl font-extrabold mb-3" style={{ color: 'var(--ink-900)' }}>
              {t.aboutPage_mission_title}
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--ink-600)' }}>
              {t.aboutPage_mission_text}
            </p>
            <ul className="space-y-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm"
                  style={{ color: 'var(--ink-700)' }}>
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--green-50)' }}
                  >
                    <FiCheck className="w-3 h-3" style={{ color: 'var(--green-700)' }} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="card p-7 md:p-8"
            style={{
              background: 'linear-gradient(150deg, #f0fdf4 0%, #ffffff 70%)',
              borderColor: 'var(--green-100)',
            }}
          >
            <h2 className="text-xl font-extrabold mb-3" style={{ color: 'var(--ink-900)' }}>
              {t.aboutPage_history_title}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--ink-600)' }}>
              {t.aboutPage_history_text}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '6+',   label: t.stats_experience },
                { value: '50+',  label: t.stats_products },
                { value: '1K+',  label: t.stats_farmers },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl p-4"
                  style={{ border: '1px solid var(--border-soft)' }}
                >
                  <p className="text-2xl font-extrabold" style={{ color: 'var(--green-700)' }}>
                    {s.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--ink-500)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ color: 'var(--ink-900)' }}>
            {t.aboutPage_values_title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card p-6"
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: 'var(--green-50)' }}
                >
                  <v.icon className="w-5 h-5" style={{ color: 'var(--green-700)' }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--ink-900)' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-500)' }}>
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 md:p-14 text-center"
          style={{ background: 'var(--ink-900)', color: 'white' }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">{t.cta_title}</h2>
          <p className="max-w-xl mx-auto mb-7"
            style={{ color: 'rgba(255,255,255,0.7)' }}>
            {t.cta_subtitle}
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            {t.cta_button}
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
