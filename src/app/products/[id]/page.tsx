'use client';

import { use, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiPackage,
  FiPhone,
  FiSend,
  FiShield,
  FiActivity,
  FiBox,
  FiMessageCircle,
} from 'react-icons/fi';
import { useProductStore } from '@/store/productStore';
import { useT, useLanguage } from '@/store/languageStore';
import ProductCard from '@/components/ProductCard';
import { categoryName } from '@/lib/categories';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const t = useT();
  const lang = useLanguage();

  const productsHydrated = useProductStore((s) => s.hasHydrated);
  const allProducts = useProductStore((s) => s.products);
  const product = useMemo(() => allProducts.find((p) => p.id === id), [allProducts, id]);
  const [imgError, setImgError] = useState(false);
  const gallery = product?.images?.length ? product.images : product ? [product.image] : [];
  const [activeImg, setActiveImg] = useState(0);

  if (!productsHydrated) {
    return (
      <div className="pt-32 pb-20">
        <div className="container text-center">
          <div className="loader mx-auto" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-28 pb-20">
        <div className="container text-center py-20">
          <h1 className="text-2xl font-extrabold mb-3" style={{ color: 'var(--ink-900)' }}>
            {t.products_empty_title}
          </h1>
          <Link href="/products" className="btn btn-primary mt-4 inline-flex">
            <FiArrowLeft className="w-4 h-4" />
            {t.pd_back}
          </Link>
        </div>
      </div>
    );
  }

  const related = allProducts
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const telegramMsg = encodeURIComponent(
    `Assalomu alaykum! "${product.name}" mahsuloti haqida ma'lumot olmoqchiman.`
  );

  return (
    <div className="pt-28 md:pt-32 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--ink-500)' }}>
          <Link href="/" className="hover:underline">{t.nav_home}</Link>
          <span>/</span>
          <Link href="/products" className="hover:underline">{t.nav_products}</Link>
          <span>/</span>
          <Link href={`/products?category=${product.categorySlug}`} className="hover:underline">
            {categoryName(product.categorySlug, t)}
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--ink-900)' }}>{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mb-16">
          {/* Image gallery */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}>
            <div
              className="relative aspect-[4/3] rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, var(--ink-50), var(--white))',
                border: '1px solid var(--border-soft)',
              }}
            >
              {imgError ? (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  style={{ color: 'var(--ink-300)' }}
                >
                  <FiPackage className="w-16 h-16" />
                  <span className="text-base font-semibold">{product.name}</span>
                </div>
              ) : (
                <Image
                  src={gallery[activeImg] ?? product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-12"
                  priority
                  onError={() => setImgError(true)}
                />
              )}
              <span className="absolute top-4 left-4 badge badge-green">
                {categoryName(product.categorySlug, t)}
              </span>
            </div>
            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex gap-2 mt-3 justify-center">
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all"
                    style={{
                      border: `2px solid ${i === activeImg ? 'var(--green)' : 'var(--border-soft)'}`,
                      background: 'var(--ink-50)',
                    }}
                  >
                    <Image src={src} alt={`${product.name} ${i + 1}`} fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1
              className="text-3xl md:text-4xl font-extrabold leading-tight mb-3"
              style={{ color: 'var(--ink-900)' }}
            >
              {product.name}
            </h1>
            <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--ink-600)' }}>
              {product.description[lang]}
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {[
                { icon: FiActivity, label: t.pd_activeIngredient, value: product.activeIngredient ?? '—' },
                { icon: FiBox,      label: t.pd_packaging,        value: product.packaging ?? '—' },
                { icon: FiPackage,  label: t.pd_dosage,           value: product.dosage?.[lang] ?? '—' },
                { icon: FiShield,   label: t.common_inStock,
                  value: product.stock === 0 ? t.common_outOfStock : t.common_inStock },
              ].map((spec, i) => (
                <div key={i} className="card-flat p-4" style={{ background: 'var(--ink-50)' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <spec.icon className="w-3.5 h-3.5" style={{ color: 'var(--green-700)' }} />
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: 'var(--ink-500)' }}
                    >
                      {spec.label}
                    </span>
                  </div>
                  <p className="text-sm font-bold" style={{ color: 'var(--ink-900)' }}>
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Order CTA */}
            <div
              className="rounded-2xl p-5 mb-5"
              style={{ background: 'var(--green-50)', border: '1px solid var(--green-200)' }}
            >
              <p className="text-sm font-bold mb-1" style={{ color: 'var(--ink-900)' }}>
                {t.pd_buyNow}
              </p>
              <p className="text-xs mb-4" style={{ color: 'var(--ink-500)' }}>
                {t.pd_contactToOrder}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+998959371212"
                  className="btn btn-primary btn-lg flex-1 justify-center"
                >
                  <FiPhone className="w-4 h-4" />
                  +998 95 937 12 12
                </a>
                <a
                  href={`https://t.me/+998959371212?text=${telegramMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-lg flex-1 justify-center"
                >
                  <FiSend className="w-4 h-4" />
                  Telegram
                </a>
              </div>
            </div>

            {/* Safety note */}
            <div className="card-flat p-4 flex gap-3 items-start" style={{ background: 'var(--ink-50)' }}>
              <FiShield className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--green-700)' }} />
              <div>
                <p className="text-xs font-bold mb-0.5" style={{ color: 'var(--ink-900)' }}>
                  {t.pd_safety}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-500)' }}>
                  {t.pd_safetyNote}
                </p>
              </div>
            </div>

            {/* Share */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--ink-500)' }}>
                {t.pd_share}:
              </span>
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.href : ''
                )}&text=${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'var(--ink-50)', color: 'var(--ink-700)' }}
                aria-label="Telegram"
              >
                <FiMessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Usage */}
        {product.usage?.[lang] && (
          <section className="card p-7 mb-14">
            <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--ink-900)' }}>
              {t.pd_usage}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-600)' }}>
              {product.usage[lang]}
            </p>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-extrabold mb-7" style={{ color: 'var(--ink-900)' }}>
              {t.pd_related}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
