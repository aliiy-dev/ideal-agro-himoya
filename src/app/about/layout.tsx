import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biz haqimizda — Ideal Agro Himoya, Ifoda agro yetkazib beruvchisi",
  description:
    "Ideal Agro Himoya — O'zbekistonda Khumic brendi humik o'g'itlari va Ifoda agro himoya mahsulotlari rasmiy distribyutori. 6+ yillik tajriba, 1000+ fermer mijoz, Andijon shahri.",
  alternates: { canonical: 'https://www.idealagrohimoya.uz/about' },
  openGraph: {
    title: "Ideal Agro Himoya haqida",
    description: "O'zbekistonda agrohimoya va o'g'itlar yetkazib berish bo'yicha tajribali kompaniya.",
    url: 'https://www.idealagrohimoya.uz/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
