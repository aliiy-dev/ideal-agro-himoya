'use client';

import { useMemo } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, seedProducts, CategorySlug } from '@/data/products';
import { Language } from '@/i18n/dictionaries';

interface ProductStore {
  /**
   * Working list of products. Seeded once from `seedProducts`. Admin actions
   * update this list directly so they take effect site-wide.
   */
  products: Product[];

  hasHydrated: boolean;
  setHydrated: (b: boolean) => void;

  upsertProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  resetToSeed: () => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: seedProducts,
      hasHydrated: false,
      setHydrated: (b) => set({ hasHydrated: b }),

      upsertProduct: (product) =>
        set((state) => {
          const idx = state.products.findIndex((p) => p.id === product.id);
          if (idx >= 0) {
            const next = [...state.products];
            next[idx] = product;
            return { products: next };
          }
          return { products: [product, ...state.products] };
        }),

      deleteProduct: (id) =>
        set((state) => ({ products: state.products.filter((p) => p.id !== id) })),

      resetToSeed: () => set({ products: seedProducts }),
    }),
    {
      name: 'iah-products',
      version: 2,
      migrate: () => ({ products: seedProducts, hasHydrated: false } as Partial<ProductStore>),
      onRehydrateStorage: () => (state) => {
        if (state) {
          if (!Array.isArray(state.products) || state.products.length === 0) {
            state.products = seedProducts;
          }
          state.setHydrated(true);
        }
      },
    }
  )
);

// ---- Convenience selectors ----
//
// IMPORTANT: every hook must select a STABLE reference (the products array
// itself) and then derive the filtered/sorted view via `useMemo`. Returning a
// freshly built array directly from the selector breaks the
// `useSyncExternalStore` snapshot contract and triggers React's
// "The result of getServerSnapshot should be cached to avoid an infinite loop"
// console error.

export const useProducts = (): Product[] =>
  useProductStore((s) => s.products);

export const useProduct = (id: string | undefined): Product | undefined => {
  const products = useProducts();
  return useMemo(
    () => (id ? products.find((p) => p.id === id) : undefined),
    [products, id]
  );
};

export const useFeatured = (): Product[] => {
  const products = useProducts();
  return useMemo(() => {
    const featured = products.filter((p) => p.featured);
    return featured.length >= 4 ? featured.slice(0, 8) : products.slice(0, 8);
  }, [products]);
};

export const useByCategory = (slug: CategorySlug | null): Product[] => {
  const products = useProducts();
  return useMemo(
    () => (slug ? products.filter((p) => p.categorySlug === slug) : products),
    [products, slug]
  );
};

export const useCategoryCount = (slug: CategorySlug): number => {
  const products = useProducts();
  return useMemo(
    () => products.filter((p) => p.categorySlug === slug).length,
    [products, slug]
  );
};

// Pure helpers (when no React hook context is available)
export const getProductById = (id: string): Product | undefined =>
  useProductStore.getState().products.find((p) => p.id === id);

export const getProductsByCategory = (slug: CategorySlug) =>
  useProductStore.getState().products.filter((p) => p.categorySlug === slug);

export const localeProductDescription = (p: Product, lang: Language): string =>
  p.description?.[lang] ?? p.description?.uz ?? '';
