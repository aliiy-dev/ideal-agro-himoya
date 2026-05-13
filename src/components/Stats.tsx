'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiUsers, FiBox, FiAward, FiTrendingUp } from 'react-icons/fi';
import { useT } from '@/store/languageStore';

const Stats = () => {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const items = [
    { icon: FiUsers, value: 1000, suffix: '+', label: t.stats_farmers,    note: t.stats_farmersNote },
    { icon: FiBox,   value: 50,   suffix: '+', label: t.stats_products,   note: t.stats_productsNote },
    { icon: FiAward, value: 6,    suffix: '+', label: t.stats_experience, note: t.stats_experienceNote },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--ink-900)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(22,163,74,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(22,163,74,0.07) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(22,163,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,163,74,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="eyebrow-dark mb-5">
            <FiTrendingUp className="w-3 h-3" />
            {t.stats_eyebrow}
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              color: '#ffffff',
              fontWeight: 800,
            }}
          >
            {t.stats_title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stat-card"
            >
              <div
                className="w-11 h-11 rounded-2xl mb-5 flex items-center justify-center"
                style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.2)' }}
              >
                <item.icon className="w-5 h-5" style={{ color: '#4ade80' }} />
              </div>

              <div
                className="text-4xl md:text-5xl font-black mb-2 leading-none"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {inView ? <CountUp value={item.value} suffix={item.suffix} /> : `0${item.suffix}`}
              </div>

              <p className="text-sm font-semibold mb-1" style={{ color: '#ffffff' }}>{item.label}</p>
              <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.note}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const steps = 60;
    let i = 0;
    const id = setInterval(() => {
      i++;
      const ease = 1 - Math.pow(1 - i / steps, 3);
      setN(Math.floor(value * Math.min(ease, 1)));
      if (i >= steps) clearInterval(id);
    }, duration / steps);
    return () => clearInterval(id);
  }, [value]);

  return <>{n.toLocaleString()}{suffix}</>;
};

export default Stats;
