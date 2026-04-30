'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { hashPassword, randomToken } from '@/lib/hash';

/**
 * Admin auth — frontend-only model:
 *
 *  • Default credentials are seeded on first load (admin / IdealAgro2026!).
 *    The plaintext password is hashed with a per-install random salt before
 *    being persisted; we never store the raw password.
 *  • Login compares hashes; success creates an opaque session token + expiry
 *    that the UI checks on every admin route.
 *  • Lockout after 5 failed attempts within 5 minutes.
 *
 * NOTE: this is appropriate for a small admin surface running entirely in the
 * browser. When you add a real backend, replace this with server-side auth and
 * HTTP-only cookies.
 */

const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD = 'IdealAgro2026!';
const SESSION_TTL_MS = 1000 * 60 * 60 * 8; // 8 hours
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 1000 * 60 * 5; // 5 minutes

interface AuthState {
  // Credentials
  username: string;
  passwordHash: string;
  salt: string;

  // Session
  sessionToken: string | null;
  sessionExpires: number | null;

  // Lockout tracking
  failedAttempts: number;
  lockoutUntil: number | null;

  // Internal
  isInitialized: boolean;
  hasHydrated: boolean;
  setHydrated: (b: boolean) => void;

  // Actions
  initialize: () => Promise<void>;
  login: (username: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: () => boolean;
  changePassword: (current: string, next: string) => Promise<{ ok: boolean; error?: string }>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      username: DEFAULT_USERNAME,
      passwordHash: '',
      salt: '',
      sessionToken: null,
      sessionExpires: null,
      failedAttempts: 0,
      lockoutUntil: null,
      isInitialized: false,
      hasHydrated: false,
      setHydrated: (b) => set({ hasHydrated: b }),

      initialize: async () => {
        const state = get();
        if (state.isInitialized && state.passwordHash) return;
        const salt = randomToken(16);
        const passwordHash = await hashPassword(DEFAULT_PASSWORD, salt);
        set({ salt, passwordHash, isInitialized: true });
      },

      login: async (username, password) => {
        const state = get();
        if (!state.isInitialized) await get().initialize();
        const fresh = get();

        const now = Date.now();
        if (fresh.lockoutUntil && fresh.lockoutUntil > now) {
          return { ok: false, error: 'lockout' };
        }

        const submittedHash = await hashPassword(password, fresh.salt);
        const valid = username.trim() === fresh.username && submittedHash === fresh.passwordHash;

        if (!valid) {
          const attempts = fresh.failedAttempts + 1;
          set({
            failedAttempts: attempts,
            lockoutUntil: attempts >= MAX_ATTEMPTS ? now + LOCKOUT_MS : fresh.lockoutUntil,
          });
          return { ok: false, error: 'invalid' };
        }

        set({
          sessionToken: randomToken(),
          sessionExpires: now + SESSION_TTL_MS,
          failedAttempts: 0,
          lockoutUntil: null,
        });
        return { ok: true };
      },

      logout: () => set({ sessionToken: null, sessionExpires: null }),

      isAuthenticated: () => {
        const { sessionToken, sessionExpires } = get();
        if (!sessionToken || !sessionExpires) return false;
        if (Date.now() > sessionExpires) {
          // Auto-expire silently.
          set({ sessionToken: null, sessionExpires: null });
          return false;
        }
        return true;
      },

      changePassword: async (current, next) => {
        const state = get();
        const currentHash = await hashPassword(current, state.salt);
        if (currentHash !== state.passwordHash) return { ok: false, error: 'invalid' };
        if (next.length < 8) return { ok: false, error: 'too-short' };
        const newSalt = randomToken(16);
        const newHash = await hashPassword(next, newSalt);
        set({ salt: newSalt, passwordHash: newHash });
        return { ok: true };
      },
    }),
    {
      name: 'iah-admin-auth',
      version: 2,
      migrate: () => ({} as Partial<AuthState>),
      onRehydrateStorage: () => (state) => state?.setHydrated(true),
    }
  )
);
