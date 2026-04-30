'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

interface Props {
  children: React.ReactNode;
}

const AdminGuard = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const hasHydrated = useAuthStore((s) => s.hasHydrated);
  const initialize = useAuthStore((s) => s.initialize);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!hasHydrated) return;
    (async () => {
      await initialize();
      if (!isAuthenticated()) {
        router.replace('/admin/login');
      } else {
        setReady(true);
      }
    })();
  }, [hasHydrated, initialize, isAuthenticated, pathname, router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--ink-50)' }}>
        <div className="loader" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminGuard;
