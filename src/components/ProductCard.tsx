'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiCheck, FiPackage, FiEye } from 'react-icons/fi';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { useT, useLanguage } from '@/store/languageStore';
import { useToastStore } from '@/store/toastStore';
import { categoryName } from '@/lib/categories';

interface Props {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: Props) => {
  const t = useT();
  const lang = useLanguage();
  const cartHydrated = useCartStore((s) => s.hasHydrated);
  const items = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);
  const pushToast = useToastStore((s) => s.push);
  const [imgError, setImgError] = useState(false);

  const inCart = cartHydrated && items.some((i) => i.productId === product.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inCart || product.stock === 0) return;
    addItem(product);
    pushToast(t.toast_addedToCart);
  };

  const isSoldOut = product.stock === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.38, delay: Math.min(index * 0.05, 0.35) }}
      className="h-full"
    >
      <Link href={`/products/${product.id}`} className="block h-full group">
        <article
          className="h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            background: 'var(--white)',
            border: '1px solid var(--border-soft)',
            boxShadow: 'var(--shadow-sm)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--green-200)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-soft)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          {/* Image area */}
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, var(--green-50) 0%, var(--ink-50) 100%)',
            }}
          >
            {imgError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'var(--green-100)' }}
                >
                  <FiPackage className="w-7 h-7" style={{ color: 'var(--green-600)' }} />
                </div>
                <span
                  className="text-xs font-semibold px-4 text-center leading-snug"
                  style={{ color: 'var(--ink-500)' }}
                >
                  {product.name}
                </span>
              </div>
            ) : (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 280px"
                onError={() => setImgError(true)}
              />
            )}

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                style={{
                  background: 'rgba(22, 163, 74, 0.12)',
                  color: 'var(--green-700)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {categoryName(product.categorySlug, t)}
              </span>
            </div>

            {isSoldOut && (
              <span
                className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#dc2626',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {t.common_outOfStock}
              </span>
            )}

            {/* Hover overlay with view link */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(15, 26, 20, 0.04)' }}
            >
              <span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(15, 26, 20, 0.75)',
                  color: 'white',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <FiEye className="w-3.5 h-3.5" />
                Ko&apos;rish
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            {/* Active ingredient pill */}
            {product.activeIngredient && (
              <span
                className="inline-block mb-2 text-[10.5px] font-semibold tracking-wide truncate"
                style={{ color: 'var(--ink-400)' }}
              >
                {product.activeIngredient}
              </span>
            )}

            <h3
              className="font-bold text-[14.5px] leading-snug line-clamp-2 mb-2"
              style={{ color: 'var(--ink-900)' }}
            >
              {product.name}
            </h3>
            <p
              className="text-[12.5px] leading-relaxed line-clamp-2 mb-4"
              style={{ color: 'var(--ink-500)' }}
            >
              {product.description[lang]}
            </p>

            {/* CTA */}
            <div className="mt-auto flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleAdd}
                disabled={inCart || isSoldOut}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12.5px] font-semibold transition-all duration-200 flex-shrink-0"
                style={
                  inCart
                    ? {
                        background: 'var(--green-50)',
                        border: '1px solid var(--green-200)',
                        color: 'var(--green-700)',
                      }
                    : isSoldOut
                    ? {
                        background: 'var(--ink-100)',
                        border: '1px solid var(--ink-200)',
                        color: 'var(--ink-400)',
                        cursor: 'not-allowed',
                      }
                    : {
                        background: 'var(--green)',
                        border: '1px solid var(--green)',
                        color: 'white',
                        boxShadow: 'var(--shadow-green)',
                      }
                }
              >
                {inCart ? (
                  <>
                    <FiCheck className="w-3.5 h-3.5" />
                    {t.products_inCart}
                  </>
                ) : isSoldOut ? (
                  t.common_outOfStock
                ) : (
                  <>
                    <FiShoppingCart className="w-3.5 h-3.5" />
                    {t.products_addToCart}
                  </>
                )}
              </button>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
