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

const SITE_URL = 'https://www.idealagrohimoya.uz';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ideal Agro Himoya — Ifoda agro himoya mahsulotlari, O\'zbekiston',
    template: '%s | Ideal Agro Himoya',
  },
  description:
    "Ideal Agro Himoya — O'zbekistonda Ifoda brendi himoya vositalari, biostimulyatorlar, o'g'itlar va Khumic mahsulotlari rasmiy yetkazib beruvchisi. Fulvic Plus, Amino Max 80%, Khumic-100, Ideal-PZN. Andijon, +998 95 937 12 12.",
  keywords: [
    'Ideal',
    'Ideal Agro',
    'Ideal Agro Himoya',
    'Ideal agro',
    'ideal agro himoya',
    'agro himoya',
    'agrohimoya',
    'Ifoda',
    'ifoda',
    'ifoda uz',
    'ifoda.uz',
    "o'simlik himoyasi",
    "o'simliklarni himoya qilish",
    'biostimulyator',
    "o'g'it",
    'fulvic plus',
    'amino max',
    'khumic',
    'humik kislota',
    'qishloq xo\'jaligi',
    'Andijon agro',
    'Uzbekistan agro',
    "g'o'za o'g'iti",
    'paxta himoyasi',
    'fungitsid',
    'insektitsid',
    'gerbitsid',
    'defoliant',
  ],
  authors: [{ name: 'Ideal Agro Himoya', url: SITE_URL }],
  creator: 'Ideal Agro Himoya',
  publisher: 'Ideal Agro Himoya',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: SITE_URL,
    siteName: 'Ideal Agro Himoya',
    title: 'Ideal Agro Himoya — Ifoda agro himoya, O\'g\'it va Biostimulyatorlar',
    description:
      "Ideal Agro Himoya — Khumic brendi humik o'g'itlari, aminokislotali biostimulyatorlar va Ifoda agro himoya mahsulotlari. O'zbekiston bo'ylab yetkazib berish.",
    images: [
      {
        url: '/images/logo.png',
        width: 600,
        height: 400,
        alt: 'Ideal Agro Himoya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideal Agro Himoya',
    description: "Ifoda agro himoya, biostimulyatorlar va o'g'itlar — O'zbekiston",
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/icon.png',
  },
  category: 'Agriculture',
  verification: {
    google: 'apLtb65LzJbn8xfYUI4nRp7QM_HxRCkqbncPwLcr12k',
  },
};

export const viewport: Viewport = {
  themeColor: '#16a34a',
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD structured data — helps Google show "rich snippets"
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ideal Agro Himoya',
  alternateName: ['Ideal Agro', 'Ideal', 'Ifoda Agro Himoya'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  description:
    "O'zbekistonda Khumic brendi humik o'g'itlari, aminokislotali biostimulyatorlar va Ifoda agro himoya mahsulotlari rasmiy yetkazib beruvchisi.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Andijon',
    addressCountry: 'UZ',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+998-95-937-12-12',
    contactType: 'customer service',
    areaServed: 'UZ',
    availableLanguage: ['uz', 'ru', 'en'],
  },
  email: 'idealagrohimoya@gmail.com',
  sameAs: [
    'https://t.me/BAYJO',
    'https://www.instagram.com/ideal_agro_himoya',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ideal Agro Himoya',
  alternateName: ['Ideal Agro', 'Ifoda agro himoya'],
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/products?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  inLanguage: ['uz', 'ru', 'en'],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastHost />
      </body>
    </html>
  );
}
