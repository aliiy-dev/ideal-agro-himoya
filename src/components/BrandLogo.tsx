'use client';

import Image from 'next/image';

interface Props {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

const BrandLogo = ({ size = 'md' }: Props) => {
  const h = size === 'sm' ? 96 : 150;

  return (
    <Image
      src="/images/logo.png"
      alt="Ideal Agro Himoya"
      width={600}
      height={400}
      style={{ height: h, width: 'auto', maxWidth: 'none' }}
      className="object-contain"
      sizes="(max-width: 768px) 160px, 200px"
      priority
    />
  );
};

export default BrandLogo;
