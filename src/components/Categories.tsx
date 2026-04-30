'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { categoryDefs, CategorySlug } from '@/data/products';
import { useT } from '@/store/languageStore';
import { useProductStore } from '@/store/productStore';
import { categoryDesc, categoryName } from '@/lib/categories';

const CAT_STYLES: Record<string, { bg: string; border: string; iconBg: string; accentColor: string }> = {
  insektitsidlar:    { bg: 'linear-gradient(160deg, #fff7ed 0%, #fff 100%)', border: '#fed7aa', iconBg: '#ffedd5', accentColor: '#f97316' },
  fungitsidlar:      { bg: 'linear-gradient(160deg, #f0fdf4 0%, #fff 100%)', border: '#bbf7d0', iconBg: '#dcfce7', accentColor: '#16a34a' },
  herbitsidlar:      { bg: 'linear-gradient(160deg, #f0fdf4 0%, #fff 100%)', border: '#86efac', iconBg: '#dcfce7', accentColor: '#15803d' },
  ogitlar:           { bg: 'linear-gradient(160deg, #fefce8 0%, #fff 100%)', border: '#fde047', iconBg: '#fef9c3', accentColor: '#ca8a04' },
  biostimulyatorlar: { bg: 'linear-gradient(160deg, #f0f9ff 0%, #fff 100%)', border: '#bae6fd', iconBg: '#e0f2fe', accentColor: '#0284c7' },
  defoliantlar:      { bg: 'linear-gradient(160deg, #fdf4ff 0%, #fff 100%)', border: '#e9d5ff', iconBg: '#f3e8ff', accentColor: '#9333ea' },
};

const Categories = () => {
  const t = useT();
  const products = useProductStore((s) => s.products);

  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-head-center">
          <span className="eyebrow mb-4">{t.categories_eyebrow}</span>
          <h2 className="section-title">{t.categories_title}</h2>
          <p className="section-subtitle">{t.categories_subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryDefs.map((category, index) => {
            const slug = category.slug as CategorySlug;
            const count = products.filter((p) => p.categorySlug === slug).length;
            const style = CAT_STYLES[slug] ?? CAT_STYLES.fungitsidlar;

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
              >
                <Link href={`/products?category=${slug}`} className="block h-full group">
                  <div
                    className="cat-card p-6 h-full flex flex-col"
                    style={{ background: style.bg, borderColor: style.border }}
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: style.iconBg }}
                    >
                      {category.emoji}
                    </div>

                    <h3
                      className="text-[14.5px] font-bold mb-2 leading-snug transition-colors"
                      style={{ color: 'var(--ink-900)' }}
                    >
                      {categoryName(slug, t)}
                    </h3>
                    <p
                      className="text-[12px] leading-relaxed mb-5 flex-1"
                      style={{ color: 'var(--ink-500)' }}
                    >
                      {categoryDesc(slug, t)}
                    </p>

                    <div className="flex items-center justify-between pt-3.5"
                      style={{ borderTop: `1px solid ${style.border}` }}>
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider"
                        style={{ color: style.accentColor }}
                      >
                        {t.categories_count(count)}
                      </span>
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-all group-hover:translate-x-1 group-hover:scale-110"
                        style={{ background: style.iconBg, color: style.accentColor }}
                      >
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link href="/products" className="btn btn-primary">
            Barcha mahsulotlarni ko&apos;rish
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
