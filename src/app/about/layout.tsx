import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biz haqimizda — Ideal Agro Himoya",
  description:
    "Ideal Agro Himoya — O'zbekistonda ko'p yillardan beri fermerlar va xususiy uy xo'jaliklariga o'simliklarni himoya qilish vositalari va o'g'itlar yetkazib beruvchi kompaniya. Andijon shahri.",
  alternates: { canonical: 'https://www.idealagrohimoya.uz/about' },
  openGraph: {
    title: "Ideal Agro Himoya haqida",
    description: "O'simliklarni himoya va o'g'itlar yetkazib berishda tajribali kompaniya.",
    url: 'https://www.idealagrohimoya.uz/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
