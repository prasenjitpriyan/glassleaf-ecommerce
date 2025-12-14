'use client';

import { motion } from 'framer-motion';

export default function NavbarAnimator({ children, className }) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.nav>
  );
}
