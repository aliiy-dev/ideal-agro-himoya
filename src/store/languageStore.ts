'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { dictionaries, Language, Dictionary, LANGUAGES } from '@/i18n/dictionaries';

export type { Language } from '@/i18n/dictionaries';
export { LANGUAGES } from '@/i18n/dictionaries';

interface LanguageStore {
  language: Language;
  hasHydrated: boolean;
  setLanguage: (lang: Language) => void;
  setHydrated: (b: boolean) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'uz',
      hasHydrated: false,
      setLanguage: (lang) => set({ language: lang }),
      setHydrated: (b) => set({ hasHydrated: b }),
    }),
    {
      name: 'iah-language',
      version: 3,
      migrate: () => ({ language: 'uz' as Language, hasHydrated: false }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          if (!['uz', 'kr', 'ru', 'en'].includes(state.language)) {
            state.language = 'uz';
          }
          state.setHydrated(true);
        }
      },
    }
  )
);

/**
 * Always returns 'uz' until the language store has hydrated from localStorage.
 * This guarantees identical SSR + first-CSR render and avoids hydration errors.
 */
export const useLanguage = (): Language => {
  const language = useLanguageStore((s) => s.language);
  const hasHydrated = useLanguageStore((s) => s.hasHydrated);
  return hasHydrated ? language : 'uz';
};

export const useT = (): Dictionary => {
  const lang = useLanguage();
  return dictionaries[lang];
};

// Backwards compatibility alias used in older imports.
export const useTranslation = useT;
