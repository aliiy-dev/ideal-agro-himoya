'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  categorySlug: string;
}

interface CartStore {
  items: CartItem[];
  hasHydrated: boolean;
  setHydrated: (b: boolean) => void;

  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalQuantity: () => number;
  totalPrice: () => number;
  isInCart: (productId: string) => boolean;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      hasHydrated: false,
      setHydrated: (b) => set({ hasHydrated: b }),

      addItem: (product, qty = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.productId === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === product.id ? { ...i, quantity: i.quantity + qty } : i
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                name: product.name,
                image: product.image,
                price: product.price ?? 0,
                quantity: qty,
                categorySlug: product.categorySlug,
              },
            ],
          };
        });
      },

      removeItem: (productId) =>
        set((state) => ({ items: state.items.filter((i) => i.productId !== productId) })),

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.length,
      totalQuantity: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
      totalPrice: () => get().items.reduce((acc, i) => acc + i.price * i.quantity, 0),
      isInCart: (id) => get().items.some((i) => i.productId === id),
    }),
    {
      name: 'iah-cart',
      version: 3,
      migrate: () => ({ items: [], hasHydrated: false } as Partial<CartStore>),
      onRehydrateStorage: () => (state) => {
        // Defensive: drop any malformed legacy cart entries.
        if (state) {
          state.items = (state.items ?? []).filter(
            (i) => i && typeof i === 'object' && 'productId' in i && 'name' in i
          );
          state.setHydrated(true);
        }
      },
    }
  )
);
