'use client';

import { useCart } from '@/lib/store';
import { useState } from 'react';

export default function AddToCart({ product }) {
  const addToCart = useCart((state) => state.addToCart);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`px-6 py-3 rounded-lg transition-colors font-medium shadow-sm hover:shadow-md ${
        isAdded
          ? 'bg-deep-forest text-white'
          : 'bg-emerald-leaf text-white hover:bg-emerald-leaf/90'
      }`}>
      {isAdded ? 'Added to Cart!' : 'Add to Cart'}
    </button>
  );
}
