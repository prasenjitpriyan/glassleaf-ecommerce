'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LeafAnimation from './(components)/leaf-animation';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-soft-cream">
      <div className="text-center max-w-2xl px-4 flex flex-col items-center">
        <LeafAnimation />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-bold text-deep-forest mb-6 tracking-tight">
          Welcome to <span className="text-emerald-leaf">Glassleaf</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl text-deep-forest/80 mb-8 max-w-lg mx-auto">
          Discover our premium collection of products. Quality meets style in
          every item.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex gap-4 justify-center">
          <Link
            href="/products"
            className="bg-emerald-leaf text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0b6b4a] transition-colors shadow-lg shadow-emerald-leaf/20">
            Shop Now
          </Link>
          <Link
            href="/about"
            className="bg-white/50 text-deep-forest border border-deep-forest/20 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white transition-colors backdrop-blur-sm">
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
