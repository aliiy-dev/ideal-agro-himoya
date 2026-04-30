'use client';

import AdminGuard from '@/components/admin/AdminGuard';
import AdminShell from '@/components/admin/AdminShell';
import ProductForm from '@/components/admin/ProductForm';

export default function AdminProductNewPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <ProductForm />
      </AdminShell>
    </AdminGuard>
  );
}
