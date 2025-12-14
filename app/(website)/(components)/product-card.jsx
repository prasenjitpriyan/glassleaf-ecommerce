'use client';

import { urlFor } from '@/lib/image';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug.current}`} className="group block">
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="border border-emerald-leaf/10 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white pb-2 h-full flex flex-col">
        {product.mainImage && (
          <div className="relative h-64 w-full bg-soft-cream/30">
            <Image
              src={urlFor(product.mainImage).url()}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-4 grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-deep-forest group-hover:text-emerald-leaf transition-colors">
              {product.title}
            </h3>
            <p className="text-deep-forest/70 mt-1 font-medium">
              ${product.price}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
