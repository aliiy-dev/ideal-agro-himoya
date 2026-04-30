import { ReactNode } from 'react';

export const metadata = {
  title: 'Admin · Ideal Agro Himoya',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
