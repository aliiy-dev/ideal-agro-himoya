import type { Metadata } from 'next';
import { seedProducts } from '@/data/products';

interface Props {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

const SITE_URL = 'https://www.idealagrohimoya.uz';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = seedProducts.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Mahsulot topilmadi',
      description: 'Ideal Agro Himoya mahsulotlar katalogi.',
    };
  }

  const url = `${SITE_URL}/products/${product.id}`;
  const img = product.image.startsWith('http') ? product.image : `${SITE_URL}${product.image}`;

  return {
    title: `${product.name} — Ideal Agro Himoya`,
    description: `${product.name}. ${product.description.uz.slice(0, 155)}`,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} — Ideal Agro Himoya`,
      description: product.description.uz.slice(0, 200),
      url,
      images: [{ url: img, alt: product.name }],
    },
  };
}

export async function generateStaticParams() {
  return seedProducts.map((p) => ({ id: p.id }));
}

export default async function ProductLayout({ params, children }: Props) {
  const { id } = await params;
  const product = seedProducts.find((p) => p.id === id);

  if (!product) return <>{children}</>;

  const url = `${SITE_URL}/products/${product.id}`;
  const img = product.image.startsWith('http') ? product.image : `${SITE_URL}${product.image}`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description.uz,
    image: [img],
    brand: { '@type': 'Brand', name: 'Ideal Agro Himoya' },
    sku: product.id,
    url,
    offers: {
      '@type': 'Offer',
      url,
      availability:
        product.stock > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      priceCurrency: 'UZS',
      price: product.price > 0 ? product.price : 0,
      seller: { '@type': 'Organization', name: 'Ideal Agro Himoya' },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}
