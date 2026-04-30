'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPackage } from 'react-icons/fi';

interface Props {
  src: string;
  alt: string;
  href: string;
}

const CartLineImage = ({ src, alt, href }: Props) => {
  const [errored, setErrored] = useState(false);
  return (
    <Link
      href={href}
      className="w-20 h-20 md:w-24 md:h-24 rounded-xl relative overflow-hidden flex-shrink-0"
      style={{ background: 'var(--ink-50)' }}
    >
      {errored || !src ? (
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{ color: 'var(--ink-300)' }}
        >
          <FiPackage className="w-7 h-7" />
        </span>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-2"
          onError={() => setErrored(true)}
        />
      )}
    </Link>
  );
};

export default CartLineImage;
