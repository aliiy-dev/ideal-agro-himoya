'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck, FiAlertCircle } from 'react-icons/fi';
import { useToastStore } from '@/store/toastStore';

const ToastHost = () => {
  const toasts = useToastStore((s) => s.toasts);

  return (
    <div className="toast-stack">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className={`toast ${toast.variant === 'error' ? 'toast-error' : ''}`}
          >
            {toast.variant === 'error' ? (
              <FiAlertCircle className="w-4 h-4" style={{ color: '#ef4444' }} />
            ) : (
              <FiCheck className="w-4 h-4" style={{ color: '#16a34a' }} />
            )}
            <span>{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastHost;
