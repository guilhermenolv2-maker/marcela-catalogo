import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

type ToastProps = {
  message: string;
};

export function Toast({ message }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft"
      role="status"
    >
      <CheckCircle2 className="h-5 w-5 text-gold" aria-hidden="true" />
      {message}
    </motion.div>
  );
}
