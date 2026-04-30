'use client';

import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare } from 'react-icons/fi';
import { useT, useLanguage } from '@/store/languageStore';

interface Story {
  name: string;
  role: { uz: string; kr: string; ru: string; en: string };
  body: { uz: string; kr: string; ru: string; en: string };
  avatar: string;
  region: string;
}

const stories: Story[] = [
  {
    name: 'Bахтиёр Раимов',
    role: {
      uz: 'Fermer xo\u2019jaligi rahbari',
      kr: 'Фермер хўжалиги раҳбари',
      ru: 'Руководитель фермерского хозяйства',
      en: 'Farm manager',
    },
    body: {
      uz: "Olma bog'imda kanaga qarshi PROMAYT bilan ishladim — bir hafta ichida natija ko'rindi. Agronom maslahati uchun alohida rahmat.",
      kr: "Олма боғимда канага қарши PROMAYT билан ишладим — бир ҳафта ичида натижа кўринди. Агроном маслаҳати учун алоҳида раҳмат.",
      ru: 'Обработал яблоневый сад от клеща с PROMAYT — результат уже через неделю. Отдельное спасибо за консультацию агронома.',
      en: 'Treated my apple orchard against mites with PROMAYT — results within a week. Special thanks for the agronomist support.',
    },
    avatar: 'БР',
    region: 'Andijon',
  },
  {
    name: 'Зилола Камалова',
    role: {
      uz: 'Issiqxona egasi',
      kr: 'Иссиқхона эгаси',
      ru: 'Владелица теплицы',
      en: 'Greenhouse owner',
    },
    body: {
      uz: "Pomidorlarda fitoftora bilan kurashish uchun FOSETAL ajoyib chiqdi. Tez yetkazib berishlari ham hayron qoldirdi.",
      kr: "Помидорларда фитофтора билан курашиш учун FOSETAL ажойиб чиқди. Тез етказиб беришлари ҳам ҳайрон қолдирди.",
      ru: 'Против фитофторы на томатах FOSETAL отлично сработал. Быстрая доставка приятно удивила.',
      en: 'FOSETAL worked great against late blight on my tomatoes. Their fast delivery was a pleasant surprise.',
    },
    avatar: 'ЗК',
    region: 'Toshkent viloyati',
  },
  {
    name: 'Ҳусан Йўлдошев',
    role: {
      uz: 'Paxta yetishtiruvchi',
      kr: 'Пахта етиштирувчи',
      ru: 'Хлопковод',
      en: 'Cotton grower',
    },
    body: {
      uz: "Paxtazorda begona o'tlarga qarshi YOKOZUNA effektli bo'ldi, narxi ham mos. Hosil sifatim sezilarli oshdi.",
      kr: "Пахтазорда бегона ўтларга қарши YOKOZUNA эффектли бўлди, нархи ҳам мос. Ҳосил сифатим сезиларли ошди.",
      ru: 'YOKOZUNA против сорняков в хлопке отлично подошёл по цене и эффективности. Качество урожая заметно выросло.',
      en: 'YOKOZUNA controlled weeds in my cotton perfectly, with a fair price. Yield quality improved noticeably.',
    },
    avatar: 'ҲЙ',
    region: 'Buxoro',
  },
];

const AVATAR_COLORS = [
  { bg: '#dcfce7', color: '#166534' },
  { bg: '#fef3c7', color: '#92400e' },
  { bg: '#dbeafe', color: '#1e40af' },
];

const Testimonials = () => {
  const t = useT();
  const lang = useLanguage();

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-head-center">
          <span className="eyebrow mb-4">
            <FiMessageSquare className="w-3 h-3" />
            {t.testi_eyebrow}
          </span>
          <h2 className="section-title">{t.testi_title}</h2>
          <p className="section-subtitle">{t.testi_subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="testi-card flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <FiStar
                    key={j}
                    className="w-4 h-4"
                    style={{ color: 'var(--amber-600)', fill: 'var(--amber-600)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[15px] leading-relaxed mb-6 flex-1"
                style={{ color: 'var(--ink-700)' }}
              >
                &ldquo;{story.body[lang]}&rdquo;
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: '1px solid var(--border-soft)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: AVATAR_COLORS[i].bg, color: AVATAR_COLORS[i].color }}
                >
                  {story.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[14px] leading-tight" style={{ color: 'var(--ink-900)' }}>
                    {story.name}
                  </p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--ink-500)' }}>
                    {story.role[lang]} &middot; <span style={{ color: 'var(--green-700)' }}>📍 {story.region}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="w-5 h-5" style={{ color: 'var(--amber-600)', fill: 'var(--amber-600)' }} />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <span className="font-bold text-lg" style={{ color: 'var(--ink-900)' }}>4.9/5</span>
            <span className="text-sm ml-2" style={{ color: 'var(--ink-500)' }}>
              — 200+ fermer izohiga asoslangan
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
