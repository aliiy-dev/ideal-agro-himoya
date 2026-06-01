'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Testimonial {
  id: string;
  name: string;
  role: { uz: string; kr: string; ru: string; en: string };
  body: { uz: string; kr: string; ru: string; en: string };
  region: string;
  rating: number; // 1–5
  createdAt: number;
}

/**
 * Seed reviews — these used to live hard-coded inside the Testimonials
 * component. They are now editable from the admin panel; this list only seeds
 * the store on first load (or after a reset).
 */
export const seedTestimonials: Testimonial[] = [
  {
    id: 'baxtiyor-raimov',
    name: 'Bахтиёр Раимов',
    role: {
      uz: 'Fermer xo’jaligi rahbari',
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
    region: 'Andijon',
    rating: 5,
    createdAt: 1,
  },
  {
    id: 'zilola-kamalova',
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
    region: 'Toshkent viloyati',
    rating: 5,
    createdAt: 2,
  },
  {
    id: 'husan-yuldoshev',
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
    region: 'Buxoro',
    rating: 5,
    createdAt: 3,
  },
];

/** Build avatar initials from a name (first letters of up to two words). */
export const testimonialAvatar = (name: string): string =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join('') || '★';

interface TestimonialStore {
  testimonials: Testimonial[];
  hasHydrated: boolean;
  setHydrated: (b: boolean) => void;

  upsertTestimonial: (t: Testimonial) => void;
  deleteTestimonial: (id: string) => void;
  resetToSeed: () => void;
}

export const useTestimonialStore = create<TestimonialStore>()(
  persist(
    (set) => ({
      testimonials: seedTestimonials,
      hasHydrated: false,
      setHydrated: (b) => set({ hasHydrated: b }),

      upsertTestimonial: (item) =>
        set((state) => {
          const idx = state.testimonials.findIndex((x) => x.id === item.id);
          if (idx >= 0) {
            const next = [...state.testimonials];
            next[idx] = item;
            return { testimonials: next };
          }
          return { testimonials: [item, ...state.testimonials] };
        }),

      deleteTestimonial: (id) =>
        set((state) => ({
          testimonials: state.testimonials.filter((x) => x.id !== id),
        })),

      resetToSeed: () => set({ testimonials: seedTestimonials }),
    }),
    {
      name: 'iah-testimonials',
      version: 1,
      onRehydrateStorage: () => (state) => {
        if (state) {
          if (!Array.isArray(state.testimonials)) {
            state.testimonials = seedTestimonials;
          }
          state.setHydrated(true);
        }
      },
    }
  )
);
