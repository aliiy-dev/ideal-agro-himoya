'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiPackage } from 'react-icons/fi';
import AdminGuard from '@/components/admin/AdminGuard';
import AdminShell from '@/components/admin/AdminShell';
import { useT, useLanguage } from '@/store/languageStore';
import { useProductStore } from '@/store/productStore';
import { fmtPrice } from '@/data/products';
import { categoryName } from '@/lib/categories';
import { useToastStore } from '@/store/toastStore';

export default function AdminProductsPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <ProductList />
      </AdminShell>
    </AdminGuard>
  );
}

function ProductList() {
  const t = useT();
  const lang = useLanguage();
  const products = useProductStore((s) => s.products);
  const deleteProduct = useProductStore((s) => s.deleteProduct);
  const pushToast = useToastStore((s) => s.push);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return products;
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.activeIngredient ?? '').toLowerCase().includes(q),
    );
  }, [products, query]);

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`${t.admin_products_deleteConfirm}\n\n${name}`)) {
      deleteProduct(id);
      pushToast(t.common_delete);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'var(--ink-900)' }}>
            {t.admin_products_title}
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--ink-500)' }}>
            {products.length} {t.common_pieces}
          </p>
        </div>
        <Link href="/admin/products/new" className="btn btn-primary">
          <FiPlus className="w-4 h-4" />
          {t.admin_products_new}
        </Link>
      </div>

      <div className="admin-card p-4 mb-5">
        <div className="relative">
          <FiSearch
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{ color: 'var(--ink-400)' }}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.admin_products_search}
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>
      </div>

      <div className="admin-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t.admin_products_col_image}</th>
                <th>{t.admin_products_col_name}</th>
                <th>{t.admin_products_col_category}</th>
                <th className="text-right">{t.admin_products_col_price}</th>
                <th className="text-right">{t.admin_products_col_stock}</th>
                <th className="text-right">{t.admin_products_col_actions}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div
                      className="w-12 h-12 rounded-lg relative overflow-hidden flex items-center justify-center"
                      style={{ background: 'var(--ink-50)' }}
                    >
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-contain p-1.5"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <FiPackage className="w-5 h-5" style={{ color: 'var(--ink-400)' }} />
                      )}
                    </div>
                  </td>
                  <td>
                    <p className="font-bold text-sm" style={{ color: 'var(--ink-900)' }}>
                      {p.name}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                      {p.activeIngredient ?? p.packaging}
                    </p>
                  </td>
                  <td>
                    <span className="badge badge-green">
                      {categoryName(p.categorySlug, t)}
                    </span>
                  </td>
                  <td className="text-right font-semibold">
                    {fmtPrice(p.price, lang) ?? '—'}
                  </td>
                  <td className="text-right">
                    <span
                      className="font-bold"
                      style={{ color: p.stock <= 30 ? '#dc2626' : 'var(--ink-700)' }}
                    >
                      {p.stock}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/products/${p.id}`}
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: 'var(--ink-50)', color: 'var(--ink-700)' }}
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id, p.name)}
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: 'rgba(239,68,68,0.08)', color: '#dc2626' }}
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
