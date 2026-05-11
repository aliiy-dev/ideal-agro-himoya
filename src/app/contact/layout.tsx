import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bog'lanish — Ideal Agro Himoya, Andijon",
  description:
    "Ideal Agro Himoya bilan bog'laning. Telefon: +998 95 937 12 12. Telegram: @BAYJO. Email: info@idealagro.uz. Andijon shahri, O'zbekiston.",
  alternates: { canonical: 'https://www.idealagrohimoya.uz/contact' },
  openGraph: {
    title: "Ideal Agro Himoya — bog'lanish",
    description: "Telefon, Telegram, email orqali bog'laning. Andijon, O'zbekiston.",
    url: 'https://www.idealagrohimoya.uz/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
