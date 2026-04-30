'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from './cartStore';

export type OrderStatus = 'new' | 'processing' | 'completed' | 'cancelled';
export type PaymentMethod = 'cash' | 'card' | 'invoice';

export interface OrderCustomer {
  name: string;
  phone: string;
  email?: string;
  region?: string;
  address?: string;
  note?: string;
}

export interface Order {
  id: string;
  createdAt: number;
  customer: OrderCustomer;
  items: CartItem[];
  total: number;
  payment: PaymentMethod;
  status: OrderStatus;
}

interface OrderStore {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'createdAt' | 'status'>) => Order;
  updateStatus: (id: string, status: OrderStatus) => void;
  removeOrder: (id: string) => void;
}

const makeId = () => {
  // 6-character order id, prefixed
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = '';
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return `IAH-${id}`;
};

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      orders: [],

      addOrder: (input) => {
        const order: Order = {
          ...input,
          id: makeId(),
          createdAt: Date.now(),
          status: 'new',
        };
        set((state) => ({ orders: [order, ...state.orders] }));
        return order;
      },

      updateStatus: (id, status) =>
        set((state) => ({
          orders: state.orders.map((o) => (o.id === id ? { ...o, status } : o)),
        })),

      removeOrder: (id) =>
        set((state) => ({ orders: state.orders.filter((o) => o.id !== id) })),
    }),
    {
      name: 'iah-orders',
      version: 2,
      migrate: () => ({ orders: [] }),
    }
  )
);
