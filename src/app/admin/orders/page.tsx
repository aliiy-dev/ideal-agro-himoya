'use client';

import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import AdminGuard from '@/components/admin/AdminGuard';
import AdminShell from '@/components/admin/AdminShell';
import { useT, useLanguage } from '@/store/languageStore';
import { useOrderStore, OrderStatus } from '@/store/orderStore';
import { fmtPrice } from '@/data/products';

export default function AdminOrdersPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <OrdersList />
      </AdminShell>
    </AdminGuard>
  );
}

const statusColors: Record<OrderStatus, { bg: string; color: string }> = {
  new:        { bg: 'rgba(22,163,74,0.1)',  color: '#15803d' },
  processing: { bg: 'rgba(15,26,20,0.08)',  color: '#2b3b32' },
  completed:  { bg: 'rgba(15,26,20,0.85)',  color: '#fff'    },
  cancelled:  { bg: 'rgba(239,68,68,0.1)',  color: '#dc2626' },
};

function OrdersList() {
  const t = useT();
  const lang = useLanguage();
  const orders = useOrderStore((s) => s.orders);
  const updateStatus = useOrderStore((s) => s.updateStatus);
  const [query, setQuery] = useState('');

  const statusLabel: Record<OrderStatus, string> = {
    new: t.admin_orders_status_new,
    processing: t.admin_orders_status_processing,
    completed: t.admin_orders_status_completed,
    cancelled: t.admin_orders_status_cancelled,
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return orders;
    const q = query.toLowerCase();
    return orders.filter(
      (o) =>
        o.id.toLowerCase().includes(q) ||
        o.customer.name.toLowerCase().includes(q) ||
        o.customer.phone.includes(q),
    );
  }, [orders, query]);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-extrabold mb-1"
        style={{ color: 'var(--ink-900)' }}>
        {t.admin_orders_title}
      </h1>
      <p className="text-sm mb-6" style={{ color: 'var(--ink-500)' }}>
        {orders.length}
      </p>

      <div className="admin-card p-4 mb-5">
        <div className="relative">
          <FiSearch
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{ color: 'var(--ink-400)' }}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.common_search}
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="admin-card p-10 text-center">
          <p className="text-sm" style={{ color: 'var(--ink-500)' }}>
            {t.admin_orders_empty}
          </p>
        </div>
      ) : (
        <div className="admin-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>{t.admin_orders_col_id}</th>
                  <th>{t.admin_orders_col_customer}</th>
                  <th>{t.admin_orders_col_phone}</th>
                  <th className="text-right">{t.admin_orders_col_total}</th>
                  <th>{t.admin_orders_col_date}</th>
                  <th>{t.admin_orders_col_status}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((o) => (
                  <tr key={o.id}>
                    <td className="font-bold" style={{ color: 'var(--ink-900)' }}>{o.id}</td>
                    <td>
                      <p className="font-semibold">{o.customer.name}</p>
                      <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                        {o.customer.region}, {o.customer.address}
                      </p>
                    </td>
                    <td>{o.customer.phone}</td>
                    <td className="text-right font-bold" style={{ color: 'var(--green-700)' }}>
                      {fmtPrice(o.total, lang)}
                    </td>
                    <td>{new Date(o.createdAt).toLocaleString()}</td>
                    <td>
                      <select
                        value={o.status}
                        onChange={(e) => updateStatus(o.id, e.target.value as OrderStatus)}
                        style={{
                          background: statusColors[o.status].bg,
                          color: statusColors[o.status].color,
                          border: 'none',
                          width: 'auto',
                          padding: '6px 10px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          borderRadius: '9999px',
                        }}
                      >
                        {(['new','processing','completed','cancelled'] as OrderStatus[]).map((s) => (
                          <option key={s} value={s}>{statusLabel[s]}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
