import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mahsulotlar — Khumic o'g'itlari va biostimulyatorlar",
  description:
    "Ideal Agro Himoya mahsulotlari katalogi: Fulvic Plus, Amino Max 80%, Khumic-100, Ideal-PZN. O'simliklarni himoya qilish vositalari, biostimulyatorlar va kompleks o'g'itlar. Andijon, O'zbekiston bo'ylab yetkazib berish.",
  alternates: { canonical: 'https://www.idealagrohimoya.uz/products' },
  openGraph: {
    title: "Ideal Agro Himoya mahsulotlari — Khumic, Fulvic, Amino Max",
    description: "O'simliklarni himoya vositalari, biostimulyatorlar va o'g'itlar katalogi.",
    url: 'https://www.idealagrohimoya.uz/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
