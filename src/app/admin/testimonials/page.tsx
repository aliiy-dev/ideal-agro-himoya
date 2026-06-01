'use client';

import { useMemo, useState } from 'react';
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiSearch,
  FiStar,
  FiSave,
  FiX,
} from 'react-icons/fi';
import AdminGuard from '@/components/admin/AdminGuard';
import AdminShell from '@/components/admin/AdminShell';
import { useT } from '@/store/languageStore';
import { useToastStore } from '@/store/toastStore';
import {
  useTestimonialStore,
  testimonialAvatar,
  Testimonial,
} from '@/store/testimonialStore';

export default function AdminTestimonialsPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <TestimonialsManager />
      </AdminShell>
    </AdminGuard>
  );
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/['"`]/g, '')
    .replace(/[^a-z0-9Ѐ-ӿ]+/g, '-')
    .replace(/^-+|-+$/g, '');

const LANGS = [
  { lang: 'uz', label: "O'zbekcha" },
  { lang: 'kr', label: 'Ўзбекча (Кирилл)' },
  { lang: 'ru', label: 'Русский' },
  { lang: 'en', label: 'English' },
] as const;

type FormState = {
  id: string;
  name: string;
  region: string;
  rating: number;
  role_uz: string; role_kr: string; role_ru: string; role_en: string;
  body_uz: string; body_kr: string; body_ru: string; body_en: string;
};

const emptyForm = (): FormState => ({
  id: '',
  name: '',
  region: '',
  rating: 5,
  role_uz: '', role_kr: '', role_ru: '', role_en: '',
  body_uz: '', body_kr: '', body_ru: '', body_en: '',
});

const toForm = (x: Testimonial): FormState => ({
  id: x.id,
  name: x.name,
  region: x.region,
  rating: x.rating,
  role_uz: x.role.uz, role_kr: x.role.kr, role_ru: x.role.ru, role_en: x.role.en,
  body_uz: x.body.uz, body_kr: x.body.kr, body_ru: x.body.ru, body_en: x.body.en,
});

function TestimonialsManager() {
  const t = useT();
  const testimonials = useTestimonialStore((s) => s.testimonials);
  const upsert = useTestimonialStore((s) => s.upsertTestimonial);
  const remove = useTestimonialStore((s) => s.deleteTestimonial);
  const pushToast = useToastStore((s) => s.push);

  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<FormState | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return testimonials;
    const q = query.toLowerCase();
    return testimonials.filter(
      (x) =>
        x.name.toLowerCase().includes(q) ||
        x.region.toLowerCase().includes(q) ||
        Object.values(x.body).some((b) => b.toLowerCase().includes(q)),
    );
  }, [testimonials, query]);

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`${t.admin_testi_deleteConfirm}\n\n${name}`)) {
      remove(id);
      pushToast(t.common_delete);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    const id = editing.id || slugify(editing.name) || 'review-' + testimonials.length;
    const existing = testimonials.find((x) => x.id === id);
    const item: Testimonial = {
      id,
      name: editing.name.trim(),
      region: editing.region.trim(),
      rating: Math.max(1, Math.min(5, Number(editing.rating) || 5)),
      role: {
        uz: editing.role_uz, kr: editing.role_kr, ru: editing.role_ru, en: editing.role_en,
      },
      body: {
        uz: editing.body_uz, kr: editing.body_kr, ru: editing.body_ru, en: editing.body_en,
      },
      createdAt: existing?.createdAt ?? Date.now(),
    };
    upsert(item);
    pushToast(existing ? t.common_save : t.common_add);
    setEditing(null);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--ink-900)' }}>
            {t.admin_testi_title}
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--ink-500)' }}>
            {testimonials.length} {t.common_pieces}
          </p>
        </div>
        {!editing && (
          <button className="btn btn-primary" onClick={() => setEditing(emptyForm())}>
            <FiPlus className="w-4 h-4" />
            {t.admin_testi_new}
          </button>
        )}
      </div>

      {editing ? (
        <form onSubmit={handleSave} className="admin-card p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold" style={{ color: 'var(--ink-900)' }}>
              {editing.id ? t.admin_testi_form_edit : t.admin_testi_form_new}
            </h2>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--ink-50)', color: 'var(--ink-700)' }}
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="field-label">{t.admin_testi_form_name}</label>
              <input
                value={editing.name}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="field-label">{t.admin_testi_form_region}</label>
              <input
                value={editing.region}
                onChange={(e) => setEditing({ ...editing, region: e.target.value })}
              />
            </div>
            <div>
              <label className="field-label">{t.admin_testi_form_rating}</label>
              <select
                value={editing.rating}
                onChange={(e) => setEditing({ ...editing, rating: Number(e.target.value) })}
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {n} ★
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--ink-700)' }}>
              {t.admin_testi_form_role}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {LANGS.map((row) => (
                <div key={`role-${row.lang}`}>
                  <label className="field-label">{row.label}</label>
                  <input
                    value={editing[`role_${row.lang}` as keyof FormState] as string}
                    onChange={(e) =>
                      setEditing({ ...editing, [`role_${row.lang}`]: e.target.value })
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--ink-700)' }}>
              {t.admin_testi_form_body}
            </h3>
            <div className="space-y-3">
              {LANGS.map((row) => (
                <div key={`body-${row.lang}`}>
                  <label className="field-label">{row.label}</label>
                  <textarea
                    rows={2}
                    value={editing[`body_${row.lang}` as keyof FormState] as string}
                    onChange={(e) =>
                      setEditing({ ...editing, [`body_${row.lang}`]: e.target.value })
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button type="submit" className="btn btn-primary">
              <FiSave className="w-4 h-4" />
              {t.common_save}
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setEditing(null)}>
              {t.common_cancel}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="admin-card p-4 mb-5">
            <div className="relative">
              <FiSearch
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'var(--ink-400)' }}
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.admin_testi_search}
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="admin-card p-10 text-center">
              <p className="text-sm" style={{ color: 'var(--ink-500)' }}>
                {t.admin_testi_empty}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((x) => (
                <div key={x.id} className="admin-card p-5 flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: 'var(--green-50)', color: 'var(--green-700)' }}
                  >
                    {testimonialAvatar(x.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-sm" style={{ color: 'var(--ink-900)' }}>
                        {x.name}
                      </p>
                      <span className="flex items-center gap-0.5">
                        {[...Array(Math.max(1, Math.min(5, x.rating)))].map((_, j) => (
                          <FiStar
                            key={j}
                            className="w-3 h-3"
                            style={{ color: 'var(--amber-600)', fill: 'var(--amber-600)' }}
                          />
                        ))}
                      </span>
                    </div>
                    <p className="text-xs mb-1" style={{ color: 'var(--ink-500)' }}>
                      {x.role.uz} · 📍 {x.region}
                    </p>
                    <p className="text-sm line-clamp-2" style={{ color: 'var(--ink-700)' }}>
                      {x.body.uz}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => setEditing(toForm(x))}
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: 'var(--ink-50)', color: 'var(--ink-700)' }}
                      aria-label="Edit"
                    >
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(x.id, x.name)}
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(239,68,68,0.08)', color: '#dc2626' }}
                      aria-label="Delete"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
