'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheck,
  FiClock,
} from 'react-icons/fi';
import { useT } from '@/store/languageStore';
import { useToastStore } from '@/store/toastStore';

export default function ContactPage() {
  const t = useT();
  const pushToast = useToastStore((s) => s.push);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    pushToast(t.toast_messageSent);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', message: '' });
    }, 3500);
  };

  const info = [
    {
      icon: FiPhone,
      title: t.contactPage_info_phone,
      value: '+998 95 937 12 12',
      href: 'tel:+998959371212',
    },
    {
      icon: FiMail,
      title: t.contactPage_info_email,
      value: 'info@idealagro.uz',
      href: 'mailto:info@idealagro.uz',
    },
    {
      icon: FiMapPin,
      title: t.contactPage_info_address,
      value: t.contactPage_info_addressValue,
      href: 'https://yandex.uz/maps/-/CPGw6JJL',
    },
  ];

  return (
    <div className="pt-40 md:pt-44 pb-0">
      <div className="container pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-12"
        >
          <span className="eyebrow mb-4">{t.contactPage_eyebrow}</span>
          <h1 className="section-title text-left mb-4">{t.contactPage_title}</h1>
          <p className="text-base leading-relaxed" style={{ color: 'var(--ink-600)' }}>
            {t.contactPage_lead}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="card p-7 md:p-8">
              <h2 className="text-xl font-extrabold mb-5" style={{ color: 'var(--ink-900)' }}>
                {t.contactPage_form_title}
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'var(--green-50)' }}
                  >
                    <FiCheck className="w-8 h-8" style={{ color: 'var(--green-700)' }} />
                  </div>
                  <h3 className="text-lg font-bold mb-1.5" style={{ color: 'var(--ink-900)' }}>
                    {t.contactPage_form_success_title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--ink-500)' }}>
                    {t.contactPage_form_success_text}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="field-label">{t.contactPage_form_name}</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="field-label">{t.contactPage_form_phone}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      placeholder="+998 95 937 12 12"
                    />
                  </div>
                  <div>
                    <label className="field-label">{t.contactPage_form_message}</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder={t.contactPage_form_messagePlaceholder}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    <FiSend className="w-4 h-4" />
                    {t.contactPage_form_submit}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info cards + hours */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 }}
            className="space-y-4"
          >
            {info.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card p-5 flex items-start gap-4 hover:translate-x-1 transition-transform"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--green-50)' }}
                >
                  <item.icon className="w-5 h-5" style={{ color: 'var(--green-700)' }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: 'var(--ink-400)' }}
                  >
                    {item.title}
                  </p>
                  <p className="text-base font-bold" style={{ color: 'var(--ink-900)' }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Hours */}
            <div
              className="card-flat p-5"
              style={{ background: 'var(--green-50)', borderColor: 'var(--green-200)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <FiClock className="w-4 h-4" style={{ color: 'var(--green-700)' }} />
                <h3 className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: 'var(--ink-900)' }}>
                  {t.contactPage_hours_title}
                </h3>
              </div>
              <ul className="space-y-1.5 text-sm" style={{ color: 'var(--ink-700)' }}>
                <li>{t.contactPage_hours_weekdays}</li>
                <li>{t.contactPage_hours_saturday}</li>
                <li>{t.contactPage_hours_sunday}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Full-width large Yandex Map ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ borderTop: '1px solid var(--border-soft)' }}
      >
        <iframe
          src="https://yandex.uz/map-widget/v1/-/CPGw6JJL"
          width="100%"
          height="480"
          frameBorder="0"
          allowFullScreen
          title="Ideal Agro Himoya manzili — Andijon"
          style={{ display: 'block' }}
        />
      </motion.div>
    </div>
  );
}
