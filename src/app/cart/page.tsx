'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiShoppingBag,
  FiArrowRight,
  FiArrowLeft,
  FiPackage,
} from 'react-icons/fi';
import { useCartStore } from '@/store/cartStore';
import { useT } from '@/store/languageStore';
import { useToastStore } from '@/store/toastStore';
import CartLineImage from '@/components/CartLineImage';

export default function CartPage() {
  const t = useT();
  const hasHydrated = useCartStore((s) => s.hasHydrated);
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const totalQuantity = useCartStore((s) => s.totalQuantity());
  const pushToast = useToastStore((s) => s.push);

  if (!hasHydrated) {
    return (
      <div className="pt-44 pb-20">
        <div className="container text-center">
          <div className="loader mx-auto" />
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-44 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center py-20"
          >
            <div
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: 'var(--green-50)' }}
            >
              <FiShoppingBag className="w-9 h-9" style={{ color: 'var(--green-700)' }} />
            </div>
            <h1 className="text-2xl font-extrabold mb-3" style={{ color: 'var(--ink-900)' }}>
              {t.cart_empty_title}
            </h1>
            <p className="text-sm mb-8" style={{ color: 'var(--ink-500)' }}>
              {t.cart_empty_text}
            </p>
            <Link href="/products" className="btn btn-primary">
              <FiArrowLeft className="w-4 h-4" />
              {t.cart_continueShopping}
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 md:pt-44 pb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="eyebrow mb-3">{t.nav_cart}</span>
          <h1 className="section-title text-left mb-2">{t.cart_title}</h1>
          <p className="text-sm" style={{ color: 'var(--ink-500)' }}>
            {totalQuantity} {t.common_pieces}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Items */}
          <div>
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <motion.div
                  layout
                  key={item.productId}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="card p-4 md:p-5 mb-3 flex gap-4 items-center"
                >
                  <CartLineImage
                    src={item.image}
                    alt={item.name}
                    href={`/products/${item.productId}`}
                  />

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.productId}`}
                      className="font-bold text-base block truncate hover:underline"
                      style={{ color: 'var(--ink-900)' }}
                    >
                      {item.name}
                    </Link>

                    <div className="flex items-center justify-between gap-3 mt-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: 'var(--ink-50)' }}
                        >
                          <FiMinus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: 'var(--ink-50)' }}
                        >
                          <FiPlus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          removeItem(item.productId);
                          pushToast(t.toast_removedFromCart);
                        }}
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ color: '#ef4444' }}
                        aria-label={t.cart_remove}
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="flex justify-between items-center mt-5">
              <Link
                href="/products"
                className="text-sm font-semibold inline-flex items-center gap-2 hover:underline"
                style={{ color: 'var(--green-700)' }}
              >
                <FiArrowLeft className="w-4 h-4" />
                {t.cart_continueShopping}
              </Link>
              <button
                onClick={clearCart}
                className="text-sm font-semibold inline-flex items-center gap-2"
                style={{ color: 'var(--ink-500)' }}
              >
                <FiTrash2 className="w-4 h-4" />
                {t.cart_clear}
              </button>
            </div>
          </div>

          {/* Summary */}
          <aside>
            <div className="card-flat p-6 sticky top-28">
              <h2 className="text-lg font-extrabold mb-5" style={{ color: 'var(--ink-900)' }}>
                {t.cart_summary}
              </h2>
              <ul className="space-y-3 mb-5 text-sm" style={{ color: 'var(--ink-600)' }}>
                <li className="flex justify-between">
                  <span>{t.cart_summary_items}</span>
                  <span className="font-semibold">{items.length}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.cart_summary_quantity}</span>
                  <span className="font-semibold">{totalQuantity}</span>
                </li>
              </ul>
              <div className="hr-soft mb-5" />
              <Link href="/checkout" className="btn btn-primary btn-block btn-lg">
                {t.cart_checkout}
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs mt-3 text-center" style={{ color: 'var(--ink-500)' }}>
                <FiPackage className="inline w-3.5 h-3.5 mr-1" />
                {t.checkout_terms}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
