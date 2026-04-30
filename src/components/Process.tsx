'use client';

import { motion } from 'framer-motion';
import { useT } from '@/store/languageStore';
import { FiSearch, FiMessageSquare, FiPackage, FiCheckCircle } from 'react-icons/fi';

const STEP_ICONS = [FiSearch, FiMessageSquare, FiPackage, FiCheckCircle];
const STEP_COLORS = [
  { bg: '#f0fdf4', border: '#bbf7d0', icon: 'var(--green-700)', num: 'var(--green-200)' },
  { bg: '#fffbeb', border: '#fde68a', icon: 'var(--amber-700)', num: 'var(--amber-200)' },
  { bg: '#f0fdf4', border: '#86efac', icon: 'var(--green-700)', num: 'var(--green-100)' },
  { bg: '#fefce8', border: '#fde047', icon: '#ca8a04',          num: '#fef9c3' },
];

const Process = () => {
  const t = useT();

  const steps = [
    { n: '01', title: t.process_step_1_title, text: t.process_step_1_text },
    { n: '02', title: t.process_step_2_title, text: t.process_step_2_text },
    { n: '03', title: t.process_step_3_title, text: t.process_step_3_text },
    { n: '04', title: t.process_step_4_title, text: t.process_step_4_text },
  ];

  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-head-center">
          <span className="eyebrow mb-4">{t.process_eyebrow}</span>
          <h2 className="section-title">{t.process_title}</h2>
          <p className="section-subtitle">{t.process_subtitle}</p>
        </div>

        {/* Connector line (desktop only) */}
        <div className="relative">
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, var(--green-200), transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              const col = STEP_COLORS[i];

              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.09, duration: 0.45 }}
                  className="process-card"
                >
                  {/* Step number */}
                  <span className="process-num">{step.n}</span>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: col.bg, border: `1px solid ${col.border}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: col.icon }} />
                  </div>

                  <h3
                    className="text-[15.5px] font-bold mb-2.5 leading-snug"
                    style={{ color: 'var(--ink-900)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: 'var(--ink-500)' }}
                  >
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
