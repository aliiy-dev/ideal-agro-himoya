'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  FiHome,
  FiBox,
  FiClipboard,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { useAuthStore } from '@/store/authStore';
import { useT } from '@/store/languageStore';

const AdminShell = ({ children }: { children: ReactNode }) => {
  const t = useT();
  const pathname = usePathname();
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/admin',          label: t.admin_nav_dashboard, icon: FiHome },
    { href: '/admin/products', label: t.admin_nav_products,  icon: FiBox },
    { href: '/admin/orders',   label: t.admin_nav_orders,    icon: FiClipboard },
    { href: '/admin/settings', label: t.admin_nav_settings,  icon: FiSettings },
  ];

  const handleLogout = () => {
    logout();
    router.replace('/admin/login');
  };

  return (
    <div className="admin-shell">
      {/* Top bar (mobile) */}
      <div
        className="lg:hidden sticky top-0 z-40 bg-white px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: '1px solid var(--border-soft)' }}
      >
        <Link href="/admin" className="flex items-center gap-2">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'var(--green)' }}
          >
            <span className="text-white font-bold text-sm">IA</span>
          </span>
          <span className="font-bold text-sm" style={{ color: 'var(--ink-900)' }}>
            {t.brandName}
          </span>
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-9 h-9 rounded-lg flex items-center justify-center"
        >
          {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-0 left-0 h-screen w-72 z-30 lg:z-0 transition-transform lg:translate-x-0 ${
            open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
          style={{ background: 'var(--white)', borderRight: '1px solid var(--border-soft)' }}
        >
          <div className="p-6 hidden lg:block">
            <Link href="/admin" className="flex items-center gap-3 mb-1">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--green)' }}
              >
                <span className="text-white font-extrabold">IA</span>
              </span>
              <div>
                <p className="font-extrabold text-sm" style={{ color: 'var(--ink-900)' }}>
                  IDEAL AGRO
                </p>
                <p className="text-[10px] font-bold tracking-widest"
                  style={{ color: 'var(--green-700)' }}>
                  HIMOYA · ADMIN
                </p>
              </div>
            </Link>
          </div>

          <nav className="px-4 pt-4 lg:pt-2 pb-6 space-y-1">
            {links.map((link) => {
              const isActive =
                link.href === '/admin'
                  ? pathname === '/admin'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  style={{
                    background: isActive ? 'var(--green-50)' : 'transparent',
                    color: isActive ? 'var(--green-700)' : 'var(--ink-700)',
                  }}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Link
              href="/"
              className="block text-xs mb-3 hover:underline px-3"
              style={{ color: 'var(--ink-500)' }}
            >
              ← {t.nav_home}
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold"
              style={{ color: '#ef4444', background: 'rgba(239,68,68,0.06)' }}
            >
              <FiLogOut className="w-4 h-4" />
              {t.admin_logout}
            </button>
          </div>
        </aside>

        {open && (
          <div
            className="lg:hidden fixed inset-0 z-20 bg-black/40"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Content */}
        <main className="flex-1 min-w-0 lg:ml-0 ml-0">
          <div className="px-4 md:px-8 py-6 md:py-8 max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminShell;
