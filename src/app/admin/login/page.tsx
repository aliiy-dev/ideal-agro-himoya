'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiLock, FiUser, FiArrowRight, FiAlertCircle, FiArrowLeft } from 'react-icons/fi';
import { useAuthStore } from '@/store/authStore';
import { useT } from '@/store/languageStore';

export default function AdminLoginPage() {
  const t = useT();
  const router = useRouter();
  const initialize = useAuthStore((s) => s.initialize);
  const login = useAuthStore((s) => s.login);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const lockoutUntil = useAuthStore((s) => s.lockoutUntil);
  const hasHydrated = useAuthStore((s) => s.hasHydrated);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hasHydrated) return;
    initialize().then(() => {
      if (isAuthenticated()) router.replace('/admin');
    });
  }, [hasHydrated, initialize, isAuthenticated, router]);

  const isLocked = (lockoutUntil ?? 0) > Date.now();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await login(username, password);
    setLoading(false);
    if (!result.ok) {
      setError(t.admin_login_error);
      return;
    }
    router.replace('/admin');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background:
          'radial-gradient(800px 500px at 80% -10%, rgba(22,163,74,0.18), transparent 60%), radial-gradient(700px 500px at 0% 110%, rgba(22,163,74,0.12), transparent 60%), var(--ink-50)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-7"
          style={{ color: 'var(--ink-700)' }}
        >
          <FiArrowLeft className="w-4 h-4" />
          {t.nav_home}
        </Link>

        <div
          className="bg-white rounded-3xl p-8 md:p-10"
          style={{ boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-soft)' }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--green)' }}
            >
              <FiLock className="w-5 h-5 text-white" />
            </span>
            <div>
              <h1 className="text-xl font-extrabold" style={{ color: 'var(--ink-900)' }}>
                {t.admin_login_title}
              </h1>
              <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                {t.admin_login_subtitle}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="field-label flex items-center gap-1.5">
                <FiUser className="w-3.5 h-3.5" />
                {t.admin_login_username}
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                disabled={isLocked}
              />
            </div>
            <div>
              <label className="field-label flex items-center gap-1.5">
                <FiLock className="w-3.5 h-3.5" />
                {t.admin_login_password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                disabled={isLocked}
              />
            </div>

            {error && (
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                style={{ background: 'rgba(239,68,68,0.08)', color: '#dc2626' }}
              >
                <FiAlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={loading || isLocked}
            >
              {t.admin_login_submit}
              <FiArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
