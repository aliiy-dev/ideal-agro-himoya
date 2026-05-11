'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCreditCard,
  FiDollarSign,
  FiFileText,
  FiUser,
  FiPhone,
  FiMail,
  FiMessageSquare,
} from 'react-icons/fi';
import { useCartStore } from '@/store/cartStore';
import { useOrderStore, PaymentMethod, Order } from '@/store/orderStore';
import { useT } from '@/store/languageStore';
import { useToastStore } from '@/store/toastStore';

export default function CheckoutPage() {
  const t = useT();

  const cartHydrated = useCartStore((s) => s.hasHydrated);
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const addOrder = useOrderStore((s) => s.addOrder);
  const pushToast = useToastStore((s) => s.push);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    note: '',
  });
  const [payment, setPayment] = useState<PaymentMethod>('cash');
  const [order, setOrder] = useState<Order | null>(null);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!items.length) return;

    const created = addOrder({
      customer: { name: form.name, phone: form.phone, email: form.email || undefined, note: form.note || undefined },
      items,
      total: 0,
      payment,
    });
    setOrder(created);
    clearCart();
    pushToast(t.toast_orderPlaced);
  };

  if (order) {
    return (
      <div className="pt-44 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center py-16"
          >
            <div
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: 'var(--green-50)' }}
            >
              <FiCheck className="w-10 h-10" style={{ color: 'var(--green-700)' }} />
            </div>
            <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--ink-900)' }}>
              {t.checkout_success_title}
            </h1>
            <p className="text-base mb-2" style={{ color: 'var(--ink-500)' }}>
              {t.checkout_success_text}
            </p>
            <div
              className="rounded-xl px-5 py-4 mt-6 mb-8"
              style={{ background: 'var(--green-50)', border: '1px solid var(--green-200)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: 'var(--green-700)' }}>
                {t.checkout_success_orderId}
              </p>
              <p className="text-2xl font-extrabold tracking-wider"
                style={{ color: 'var(--ink-900)' }}>
                {order.id}
              </p>
            </div>
            <Link href="/products" className="btn btn-primary">
              {t.cart_continueShopping}
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  if (!cartHydrated) {
    return (
      <div className="pt-44 pb-20">
        <div className="container text-center">
          <div className="loader mx-auto" />
        </div>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="pt-44 pb-20">
        <div className="container text-center">
          <h1 className="text-2xl font-extrabold mb-4" style={{ color: 'var(--ink-900)' }}>
            {t.cart_empty_title}
          </h1>
          <Link href="/products" className="btn btn-primary mt-4 inline-flex">
            <FiArrowLeft className="w-4 h-4" />
            {t.cart_continueShopping}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 md:pt-44 pb-20">
      <div className="container">
        <Link
          href="/cart"
          className="text-sm font-semibold inline-flex items-center gap-2 mb-6 hover:underline"
          style={{ color: 'var(--green-700)' }}
        >
          <FiArrowLeft className="w-4 h-4" />
          {t.cart_title}
        </Link>

        <div className="mb-8">
          <h1 className="section-title text-left mb-2">{t.checkout_title}</h1>
          <p className="text-base" style={{ color: 'var(--ink-500)' }}>
            {t.checkout_subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-6">
            {/* Contact */}
            <section className="card p-6 md:p-7">
              <h2 className="text-lg font-extrabold mb-5" style={{ color: 'var(--ink-900)' }}>
                {t.checkout_section_contact}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field icon={FiUser} label={t.checkout_field_name} required>
                  <input value={form.name} onChange={update('name')} required />
                </Field>
                <Field icon={FiPhone} label={t.checkout_field_phone} required>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+998 95 937 12 12"
                    required
                  />
                </Field>
                <Field icon={FiMail} label={t.checkout_field_email}>
                  <input type="email" value={form.email} onChange={update('email')} placeholder="email@example.com" />
                </Field>
              </div>
              <div className="mt-4">
                <Field icon={FiMessageSquare} label={t.checkout_field_note}>
                  <textarea value={form.note} onChange={update('note')} rows={3} />
                </Field>
              </div>
            </section>

            {/* Payment */}
            <section className="card p-6 md:p-7">
              <h2 className="text-lg font-extrabold mb-5" style={{ color: 'var(--ink-900)' }}>
                {t.checkout_section_payment}
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                <PaymentOption
                  icon={FiDollarSign}
                  title={t.checkout_payment_cash}
                  desc={t.checkout_payment_cash_desc}
                  selected={payment === 'cash'}
                  onClick={() => setPayment('cash')}
                />
                <PaymentOption
                  icon={FiCreditCard}
                  title={t.checkout_payment_card}
                  desc={t.checkout_payment_card_desc}
                  selected={payment === 'card'}
                  onClick={() => setPayment('card')}
                />
                <PaymentOption
                  icon={FiFileText}
                  title={t.checkout_payment_invoice}
                  desc={t.checkout_payment_invoice_desc}
                  selected={payment === 'invoice'}
                  onClick={() => setPayment('invoice')}
                />
              </div>
            </section>
          </div>

          {/* Sidebar summary */}
          <aside>
            <div className="card-flat p-6 sticky top-44">
              <h2 className="text-lg font-extrabold mb-5" style={{ color: 'var(--ink-900)' }}>
                {t.cart_summary}
              </h2>
              <ul className="space-y-3 mb-4 max-h-64 overflow-y-auto pr-1">
                {items.map((item) => (
                  <li
                    key={item.productId}
                    className="flex justify-between gap-3 text-sm"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate" style={{ color: 'var(--ink-900)' }}>
                        {item.name}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                        × {item.quantity}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hr-soft mb-4" />
              <button type="submit" className="btn btn-primary btn-block btn-lg">
                {t.checkout_submit}
                <FiArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs mt-3" style={{ color: 'var(--ink-500)' }}>
                {t.checkout_terms}
              </p>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Field = ({
  icon: Icon,
  label,
  required,
  children,
}: {
  icon: IconType;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div>
    <label className="field-label flex items-center gap-1.5">
      <Icon className="w-3.5 h-3.5" />
      {label}
      {required && <span style={{ color: 'var(--green-700)' }}>*</span>}
    </label>
    {children}
  </div>
);

const PaymentOption = ({
  icon: Icon,
  title,
  desc,
  selected,
  onClick,
}: {
  icon: IconType;
  title: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="text-left p-4 rounded-xl border transition-all"
    style={{
      borderColor: selected ? 'var(--green)' : 'var(--border-soft)',
      background: selected ? 'var(--green-50)' : 'var(--white)',
      boxShadow: selected ? 'var(--shadow-sm)' : undefined,
    }}
  >
    <div className="flex items-center gap-2 mb-2">
      <Icon className="w-4 h-4" style={{ color: 'var(--green-700)' }} />
      <span className="text-sm font-bold" style={{ color: 'var(--ink-900)' }}>{title}</span>
    </div>
    <p className="text-xs" style={{ color: 'var(--ink-500)' }}>{desc}</p>
  </button>
);
