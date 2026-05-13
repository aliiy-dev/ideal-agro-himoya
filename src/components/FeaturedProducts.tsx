'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGrid } from 'react-icons/fi';
import ProductCard from './ProductCard';
import { useFeatured } from '@/store/productStore';
import { useT } from '@/store/languageStore';

const FeaturedProducts = () => {
  const t = useT();
  const products = useFeatured();

  return (
    <section
      className="section"
      style={{ background: 'linear-gradient(180deg, var(--ink-50) 0%, var(--white) 100%)' }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">
              <FiGrid className="w-3 h-3" />
              {t.featured_eyebrow}
            </span>
            <h2
              className="section-title text-left mb-3"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}
            >
              {t.featured_title}
            </h2>
            <p className="text-[15px]" style={{ color: 'var(--ink-500)' }}>
              {t.featured_subtitle}
            </p>
          </div>
          <Link
            href="/products"
            className="btn btn-ghost self-start md:self-auto flex-shrink-0"
          >
            {t.featured_cta}
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:hidden"
        >
          <Link href="/products" className="btn btn-primary">
            {t.featured_cta}
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:flex items-center justify-center gap-8 mt-14 pt-10"
          style={{ borderTop: '1px solid var(--border-soft)' }}
        >
          {[
            { emoji: '🚚', text: t.featured_trust_delivery },
            { emoji: '✅', text: t.featured_trustBadge },
            { emoji: '📞', text: t.featured_trust_advice },
            { emoji: '💳', text: t.featured_trust_payment },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-lg">{item.emoji}</span>
              <span className="text-[13px] font-medium" style={{ color: 'var(--ink-600)' }}>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
