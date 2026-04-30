'use client';

import { useT } from '@/store/languageStore';

interface Props {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

const BrandLogo = ({ variant = 'dark', size = 'md' }: Props) => {
  const t = useT();
  const isLight = variant === 'light';
  const h = size === 'sm' ? 36 : 44;
  const w = Math.round(h * 2.6); // wider to fit the full logo

  return (
    <div className="flex items-center flex-shrink-0">
      <svg
        width={w}
        height={h}
        viewBox="0 0 260 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={t.brandName}
      >
        {/* ── Yellow wheat stalks (left) ── */}
        <g>
          {/* Stem */}
          <path d="M 42 88 Q 40 60 44 30" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          {/* Grains – left side of stem */}
          <ellipse cx="32" cy="28" rx="6" ry="11" transform="rotate(-35 32 28)" fill="#F5C518"/>
          <ellipse cx="26" cy="44" rx="6" ry="11" transform="rotate(-20 26 44)" fill="#F5C518"/>
          <ellipse cx="25" cy="61" rx="6" ry="11" transform="rotate(-8 25 61)" fill="#F5C518"/>
          <ellipse cx="29" cy="76" rx="5.5" ry="10" transform="rotate(10 29 76)" fill="#F5C518"/>
          {/* Grains – right side of stem */}
          <ellipse cx="54" cy="32" rx="6" ry="11" transform="rotate(30 54 32)" fill="#F5C518"/>
          <ellipse cx="58" cy="47" rx="6" ry="11" transform="rotate(18 58 47)" fill="#F5C518"/>
          <ellipse cx="57" cy="63" rx="5.5" ry="10" transform="rotate(8 57 63)" fill="#F5C518"/>
        </g>

        {/* ── Green swirl arc (right of wheat) ── */}
        {/* Outer large arc */}
        <path
          d="M 68 82 C 60 50 72 18 105 12 C 118 10 128 14 128 14"
          stroke="#2D8B2D"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* Middle arc */}
        <path
          d="M 74 82 C 68 54 80 26 110 20 C 122 17 130 20 130 20"
          stroke="#3AAA3A"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner arc */}
        <path
          d="M 80 82 C 76 58 86 34 114 28 C 124 25 132 28 132 28"
          stroke="#52C252"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── "IDEAL AGRO" text ── */}
        <text
          x="88"
          y="60"
          fontFamily="Arial Black, Arial, sans-serif"
          fontSize="28"
          fontWeight="900"
          fill={isLight ? '#ffffff' : '#1A6B1A'}
          letterSpacing="0.5"
        >
          IDEAL AGRO
        </text>

        {/* ── Green banner for HIMOYA ── */}
        {/* Banner body */}
        <path
          d="M 86 68 L 218 68 Q 224 68 224 74 L 224 86 Q 224 92 218 92 L 86 92 Q 80 92 80 86 L 80 74 Q 80 68 86 68 Z"
          fill="#2D8B2D"
        />
        {/* Left leaf tip of banner */}
        <path d="M 80 74 L 72 80 L 80 86 Z" fill="#1A6B1A"/>
        {/* Right leaf tip of banner */}
        <path d="M 224 74 L 232 80 L 224 86 Z" fill="#1A6B1A"/>
        {/* HIMOYA text */}
        <text
          x="152"
          y="85"
          fontFamily="Arial Black, Arial, sans-serif"
          fontSize="18"
          fontWeight="900"
          fill="#F5C518"
          letterSpacing="2"
          textAnchor="middle"
        >
          HIMOYA
        </text>
      </svg>
    </div>
  );
};

export default BrandLogo;

