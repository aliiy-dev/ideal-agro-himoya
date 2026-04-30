'use client';

import { use } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import AdminGuard from '@/components/admin/AdminGuard';
import AdminShell from '@/components/admin/AdminShell';
import ProductForm from '@/components/admin/ProductForm';
import { useProductStore } from '@/store/productStore';
import { useT } from '@/store/languageStore';

interface Props {
  params: Promise<{ id: string }>;
}

export default function AdminProductEditPage({ params }: Props) {
  const { id } = use(params);
  return (
    <AdminGuard>
      <AdminShell>
        <Editor id={id} />
      </AdminShell>
    </AdminGuard>
  );
}

function Editor({ id }: { id: string }) {
  const t = useT();
  const hasHydrated = useProductStore((s) => s.hasHydrated);
  const product = useProductStore((s) => s.products.find((p) => p.id === id));

  if (!hasHydrated) {
    return (
      <div className="py-20 text-center">
        <div className="loader mx-auto" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-12">
        <Link
          href="/admin/products"
          className="text-sm font-semibold inline-flex items-center gap-2 mb-5 hover:underline"
          style={{ color: 'var(--green-700)' }}
        >
          <FiArrowLeft className="w-4 h-4" />
          {t.admin_nav_products}
        </Link>
        <h1 className="text-2xl font-extrabold" style={{ color: 'var(--ink-900)' }}>
          {t.products_empty_title}
        </h1>
      </div>
    );
  }

  return <ProductForm initial={product} />;
}
