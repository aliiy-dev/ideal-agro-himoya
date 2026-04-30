'use client';

import Link from 'next/link';
import {
  FiBox,
  FiClipboard,
  FiUsers,
  FiTrendingUp,
  FiAlertTriangle,
  FiArrowRight,
} from 'react-icons/fi';
import AdminGuard from '@/components/admin/AdminGuard';
import AdminShell from '@/components/admin/AdminShell';
import { useT, useLanguage } from '@/store/languageStore';
import { useProductStore } from '@/store/productStore';
import { useOrderStore } from '@/store/orderStore';
import { fmtPrice } from '@/data/products';

export default function AdminDashboardPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <Dashboard />
      </AdminShell>
    </AdminGuard>
  );
}

function Dashboard() {
  const t = useT();
  const lang = useLanguage();
  const products = useProductStore((s) => s.products);
  const orders = useOrderStore((s) => s.orders);

  const revenue = orders
    .filter((o) => o.status !== 'cancelled')
    .reduce((sum, o) => sum + o.total, 0);

  const customerSet = new Set(orders.map((o) => o.customer.phone));

  const stats = [
    {
      icon: FiTrendingUp,
      label: t.admin_dash_revenue,
      value: fmtPrice(revenue, lang) ?? '0',
    },
    { icon: FiClipboard, label: t.admin_dash_orders,    value: orders.length.toString() },
    { icon: FiBox,       label: t.admin_dash_products,  value: products.length.toString() },
    { icon: FiUsers,     label: t.admin_dash_customers, value: customerSet.size.toString() },
  ];

  const recentOrders = orders.slice(0, 5);
  const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 30).slice(0, 5);

  return (
    <div suppressHydrationWarning>
      <h1 className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: 'var(--ink-900)' }}>
        {t.admin_dash_title}
      </h1>
      <p className="text-sm mb-7" style={{ color: 'var(--ink-500)' }}>
        {t.brandTagline}
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="admin-card p-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{ background: 'var(--green-50)' }}
            >
              <s.icon className="w-4 h-4" style={{ color: 'var(--green-700)' }} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--ink-500)' }}>
              {s.label}
            </p>
            <p className="text-xl md:text-2xl font-extrabold mt-1"
              style={{ color: 'var(--ink-900)' }}>
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Recent orders */}
        <div className="admin-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-extrabold" style={{ color: 'var(--ink-900)' }}>
              {t.admin_dash_recentOrders}
            </h2>
            <Link
              href="/admin/orders"
              className="text-xs font-semibold inline-flex items-center gap-1"
              style={{ color: 'var(--green-700)' }}
            >
              {t.common_viewAll}
              <FiArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {recentOrders.length === 0 ? (
            <p className="text-sm py-8 text-center" style={{ color: 'var(--ink-500)' }}>
              {t.admin_orders_empty}
            </p>
          ) : (
            <ul className="space-y-3">
              {recentOrders.map((o) => (
                <li
                  key={o.id}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                  style={{ borderColor: 'var(--border-soft)' }}
                >
                  <div>
                    <p className="text-sm font-bold" style={{ color: 'var(--ink-900)' }}>
                      {o.id}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                      {o.customer.name} · {o.customer.phone}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold" style={{ color: 'var(--green-700)' }}>
                      {fmtPrice(o.total, lang)}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                      {new Date(o.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Low stock */}
        <div className="admin-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-extrabold" style={{ color: 'var(--ink-900)' }}>
              {t.admin_dash_lowStock}
            </h2>
            <Link
              href="/admin/products"
              className="text-xs font-semibold inline-flex items-center gap-1"
              style={{ color: 'var(--green-700)' }}
            >
              {t.common_viewAll}
              <FiArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {lowStock.length === 0 ? (
            <p className="text-sm py-8 text-center" style={{ color: 'var(--ink-500)' }}>
              ✓
            </p>
          ) : (
            <ul className="space-y-3">
              {lowStock.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                  style={{ borderColor: 'var(--border-soft)' }}
                >
                  <div>
                    <p className="text-sm font-bold" style={{ color: 'var(--ink-900)' }}>
                      {p.name}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                      {p.activeIngredient ?? p.packaging}
                    </p>
                  </div>
                  <div
                    className="text-xs font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1"
                    style={{
                      background: 'rgba(239,68,68,0.08)',
                      color: '#dc2626',
                    }}
                  >
                    <FiAlertTriangle className="w-3 h-3" />
                    {p.stock} {t.common_pieces}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
