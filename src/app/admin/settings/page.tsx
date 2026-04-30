'use client';

import { useState } from 'react';
import { FiKey, FiSave } from 'react-icons/fi';
import AdminGuard from '@/components/admin/AdminGuard';
import AdminShell from '@/components/admin/AdminShell';
import { useT } from '@/store/languageStore';
import { useAuthStore } from '@/store/authStore';
import { useToastStore } from '@/store/toastStore';

export default function AdminSettingsPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <Settings />
      </AdminShell>
    </AdminGuard>
  );
}

function Settings() {
  const t = useT();
  const changePassword = useAuthStore((s) => s.changePassword);
  const pushToast = useToastStore((s) => s.push);

  const [currentPassword, setCurrent] = useState('');
  const [newPassword, setNew] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (newPassword !== confirmPassword) {
      setError(t.admin_settings_passwordMismatch);
      return;
    }
    const result = await changePassword(currentPassword, newPassword);
    if (!result.ok) {
      setError(t.admin_login_error);
      return;
    }
    pushToast(t.admin_settings_passwordChanged);
    setCurrent('');
    setNew('');
    setConfirm('');
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-extrabold mb-7"
        style={{ color: 'var(--ink-900)' }}>
        {t.admin_settings_title}
      </h1>

      <div className="admin-card p-6 max-w-xl">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: 'var(--green-50)' }}
          >
            <FiKey className="w-4 h-4" style={{ color: 'var(--green-700)' }} />
          </span>
          <h2 className="text-base font-extrabold" style={{ color: 'var(--ink-900)' }}>
            {t.admin_settings_changePassword}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="field-label">{t.admin_settings_currentPassword}</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrent(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <div>
            <label className="field-label">{t.admin_settings_newPassword}</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNew(e.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>
          <div>
            <label className="field-label">{t.admin_settings_confirmPassword}</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirm(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          {error && (
            <p className="text-sm" style={{ color: '#dc2626' }}>{error}</p>
          )}
          <button type="submit" className="btn btn-primary">
            <FiSave className="w-4 h-4" />
            {t.admin_settings_save}
          </button>
        </form>
      </div>
    </div>
  );
}
