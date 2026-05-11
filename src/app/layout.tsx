import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToastHost from '@/components/ToastHost';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ideal Agro Himoya',
  description:
    "Akaritsidlar, insektitsidlar, fungitsidlar, herbitsidlar va o'g'itlarning sertifikatlangan agro-himoya tizimi. Sifat foydadan ustun.",
  keywords: [
    'agro',
    'himoya',
    "o'simliklar",
    'fungitsid',
    'insektitsid',
    'herbitsid',
    'akaritsid',
    "o'g'it",
    'qishloq xo\'jaligi',
    'Uzbekistan',
    'ifoda.uz',
  ],
  authors: [{ name: 'Ideal Agro Himoya' }],
  openGraph: {
    title: 'Ideal Agro Himoya',
    description: "O'simliklarni himoya qilish va o'g'itlar — sifat foydadan ustun.",
    type: 'website',
    locale: 'uz_UZ',
  },
};

export const viewport: Viewport = {
  themeColor: '#16a34a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastHost />
      </body>
    </html>
  );
}
