'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiSave, FiUpload, FiX, FiImage } from 'react-icons/fi';
import { useT } from '@/store/languageStore';
import { useProductStore } from '@/store/productStore';
import { useToastStore } from '@/store/toastStore';
import { categoryDefs, CategorySlug, Product } from '@/data/products';
import { categoryName } from '@/lib/categories';

interface Props {
  initial?: Product;
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/['"`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const ProductForm = ({ initial }: Props) => {
  const t = useT();
  const router = useRouter();
  const upsert = useProductStore((s) => s.upsertProduct);
  const pushToast = useToastStore((s) => s.push);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    id: initial?.id ?? '',
    name: initial?.name ?? '',
    categorySlug: initial?.categorySlug ?? ('insektitsidlar' as CategorySlug),
    image: initial?.image ?? '',
    price: initial?.price ?? 0,
    stock: initial?.stock ?? 0,
    featured: initial?.featured ?? false,
    activeIngredient: initial?.activeIngredient ?? '',
    packaging: initial?.packaging ?? '',
    description_uz: initial?.description.uz ?? '',
    description_kr: initial?.description.kr ?? '',
    description_ru: initial?.description.ru ?? '',
    description_en: initial?.description.en ?? '',
    dosage_uz: initial?.dosage?.uz ?? '',
    dosage_kr: initial?.dosage?.kr ?? '',
    dosage_ru: initial?.dosage?.ru ?? '',
    dosage_en: initial?.dosage?.en ?? '',
  });

  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string>(initial?.image ?? '');

  const handleImageFile = async (file: File) => {
    if (!file) return;
    setUploading(true);

    // Show local preview immediately
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);

    const productId = initial?.id || form.id || slugify(form.name) || 'product-' + Date.now();
    const fd = new FormData();
    fd.append('file', file);
    fd.append('productId', productId);

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.path) {
        setForm((f) => ({ ...f, image: data.path }));
        setPreview(data.path);
        URL.revokeObjectURL(localUrl);
      }
    } catch {
      // keep local preview, user can still save with original path
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = initial?.id || form.id || slugify(form.name);
    const product: Product = {
      id,
      name: form.name,
      categorySlug: form.categorySlug,
      image: form.image,
      price: Number(form.price) || 0,
      stock: Number(form.stock) || 0,
      featured: form.featured,
      createdAt: initial?.createdAt ?? Date.now(),
      activeIngredient: form.activeIngredient || undefined,
      packaging: form.packaging || undefined,
      description: {
        uz: form.description_uz,
        kr: form.description_kr,
        ru: form.description_ru,
        en: form.description_en,
      },
      dosage:
        form.dosage_uz || form.dosage_kr || form.dosage_ru || form.dosage_en
          ? {
              uz: form.dosage_uz,
              kr: form.dosage_kr,
              ru: form.dosage_ru,
              en: form.dosage_en,
            }
          : undefined,
    };
    upsert(product);
    pushToast(initial ? t.common_save : t.common_add);
    router.push('/admin/products');
  };

  return (
    <div>
      <Link
        href="/admin/products"
        className="text-sm font-semibold inline-flex items-center gap-2 mb-5 hover:underline"
        style={{ color: 'var(--green-700)' }}
      >
        <FiArrowLeft className="w-4 h-4" />
        {t.admin_nav_products}
      </Link>

      <h1 className="text-2xl md:text-3xl font-extrabold mb-7"
        style={{ color: 'var(--ink-900)' }}>
        {initial ? t.admin_products_form_edit : t.admin_products_form_new}
      </h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_320px] gap-5">
        <div className="space-y-5">
          <div className="admin-card p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="field-label">{t.admin_products_form_name}</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="field-label">{t.admin_products_form_category}</label>
                <select
                  value={form.categorySlug}
                  onChange={(e) =>
                    setForm({ ...form, categorySlug: e.target.value as CategorySlug })
                  }
                >
                  {categoryDefs.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {categoryName(c.slug, t)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="field-label">{t.admin_products_form_activeIngredient}</label>
                <input
                  value={form.activeIngredient}
                  onChange={(e) =>
                    setForm({ ...form, activeIngredient: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="field-label">{t.admin_products_form_packaging}</label>
                <input
                  value={form.packaging}
                  onChange={(e) => setForm({ ...form, packaging: e.target.value })}
                />
              </div>
              <div>
                <label className="field-label">{t.admin_products_form_price}</label>
                <input
                  type="number"
                  min={0}
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: Number(e.target.value) || 0 })
                  }
                />
              </div>
              <div>
                <label className="field-label">{t.admin_products_form_stock}</label>
                <input
                  type="number"
                  min={0}
                  value={form.stock}
                  onChange={(e) =>
                    setForm({ ...form, stock: Number(e.target.value) || 0 })
                  }
                />
              </div>

              {/* ── Image upload ── */}
              <div className="sm:col-span-2">
                <label className="field-label">{t.admin_products_form_image}</label>

                {/* Drop zone */}
                <div
                  className="relative rounded-xl border-2 border-dashed transition-all cursor-pointer"
                  style={{ borderColor: 'var(--ink-200)' }}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const f = e.dataTransfer.files[0];
                    if (f) handleImageFile(f);
                  }}
                >
                  {preview ? (
                    <div className="relative">
                      <div className="relative w-full h-48 rounded-xl overflow-hidden"
                        style={{ background: 'var(--ink-50)' }}>
                        <Image
                          src={preview}
                          alt="preview"
                          fill
                          className="object-contain p-2"
                          unoptimized={preview.startsWith('blob:')}
                        />
                        {uploading && (
                          <div className="absolute inset-0 flex items-center justify-center"
                            style={{ background: 'rgba(255,255,255,0.75)' }}>
                            <div className="loader" />
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreview('');
                          setForm((f) => ({ ...f, image: '' }));
                        }}
                        className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(15,26,20,0.55)', color: 'white' }}
                      >
                        <FiX className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-10 gap-3">
                      {uploading ? (
                        <div className="loader" />
                      ) : (
                        <>
                          <span className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: 'var(--green-50)' }}>
                            <FiImage className="w-5 h-5" style={{ color: 'var(--green-700)' }} />
                          </span>
                          <div className="text-center">
                            <p className="text-sm font-semibold" style={{ color: 'var(--ink-700)' }}>
                              Rasm yuklash uchun bosing
                            </p>
                            <p className="text-xs mt-1" style={{ color: 'var(--ink-400)' }}>
                              PNG, JPG, WebP — maks. 5 MB
                            </p>
                          </div>
                          <span className="btn btn-ghost btn-sm">
                            <FiUpload className="w-3.5 h-3.5" />
                            Fayl tanlash
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleImageFile(f);
                    e.target.value = '';
                  }}
                />

                {/* Current path (readonly info) */}
                {form.image && (
                  <p className="mt-2 text-xs font-mono truncate"
                    style={{ color: 'var(--ink-400)' }}>
                    {form.image}
                  </p>
                )}
              </div>

              <label className="sm:col-span-2 flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                  style={{ width: 16, height: 16 }}
                />
                <span className="text-sm" style={{ color: 'var(--ink-700)' }}>
                  {t.featured_eyebrow}
                </span>
              </label>
            </div>
          </div>

          <div className="admin-card p-6">
            <h2 className="text-base font-bold mb-4" style={{ color: 'var(--ink-900)' }}>
              {t.admin_products_form_description}
            </h2>
            <div className="space-y-4">
              {[
                { lang: 'uz', label: "O'zbekcha" },
                { lang: 'kr', label: 'Ўзбекча (Кирилл)' },
                { lang: 'ru', label: 'Русский' },
                { lang: 'en', label: 'English' },
              ].map((row) => (
                <div key={row.lang}>
                  <label className="field-label">{row.label}</label>
                  <textarea
                    value={form[`description_${row.lang}` as keyof typeof form] as string}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        [`description_${row.lang}`]: e.target.value,
                      })
                    }
                    rows={2}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card p-6">
            <h2 className="text-base font-bold mb-4" style={{ color: 'var(--ink-900)' }}>
              {t.admin_products_form_dosage}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { lang: 'uz', label: 'UZ' },
                { lang: 'kr', label: 'ЎЗ' },
                { lang: 'ru', label: 'RU' },
                { lang: 'en', label: 'EN' },
              ].map((row) => (
                <div key={row.lang}>
                  <label className="field-label">{row.label}</label>
                  <input
                    value={form[`dosage_${row.lang}` as keyof typeof form] as string}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        [`dosage_${row.lang}`]: e.target.value,
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside>
          <div className="admin-card p-5 sticky top-6">
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              <FiSave className="w-4 h-4" />
              {t.common_save}
            </button>
            <Link
              href="/admin/products"
              className="btn btn-ghost btn-block mt-3"
            >
              {t.common_cancel}
            </Link>
          </div>
        </aside>
      </form>
    </div>
  );
};

export default ProductForm;
