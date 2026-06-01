'use client';

import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare } from 'react-icons/fi';
import { useT, useLanguage } from '@/store/languageStore';
import { useTestimonialStore, testimonialAvatar } from '@/store/testimonialStore';

const AVATAR_COLORS = [
  { bg: '#dcfce7', color: '#166534' },
  { bg: '#fef3c7', color: '#92400e' },
  { bg: '#dbeafe', color: '#1e40af' },
];

const Testimonials = () => {
  const t = useT();
  const lang = useLanguage();
  const stories = useTestimonialStore((s) => s.testimonials);

  if (stories.length === 0) return null;

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-head-center">
          <span className="eyebrow mb-4">
            <FiMessageSquare className="w-3 h-3" />
            {t.testi_eyebrow}
          </span>
          <h2 className="section-title">{t.testi_title}</h2>
          <p className="section-subtitle">{t.testi_subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => {
            const palette = AVATAR_COLORS[i % AVATAR_COLORS.length];
            const rating = Math.max(1, Math.min(5, story.rating || 5));
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="testi-card flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <FiStar
                      key={j}
                      className="w-4 h-4"
                      style={{
                        color: 'var(--amber-600)',
                        fill: j < rating ? 'var(--amber-600)' : 'transparent',
                        opacity: j < rating ? 1 : 0.35,
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-[15px] leading-relaxed mb-6 flex-1"
                  style={{ color: 'var(--ink-700)' }}
                >
                  &ldquo;{story.body[lang]}&rdquo;
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-3 pt-5"
                  style={{ borderTop: '1px solid var(--border-soft)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: palette.bg, color: palette.color }}
                  >
                    {testimonialAvatar(story.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[14px] leading-tight" style={{ color: 'var(--ink-900)' }}>
                      {story.name}
                    </p>
                    <p className="text-[12px] mt-0.5" style={{ color: 'var(--ink-500)' }}>
                      {story.role[lang]} &middot; <span style={{ color: 'var(--green-700)' }}>📍 {story.region}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="w-5 h-5" style={{ color: 'var(--amber-600)', fill: 'var(--amber-600)' }} />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <span className="font-bold text-lg" style={{ color: 'var(--ink-900)' }}>4.9/5</span>
            <span className="text-sm ml-2" style={{ color: 'var(--ink-500)' }}>
              — 200+ fermer izohiga asoslangan
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
