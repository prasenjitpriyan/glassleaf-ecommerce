'use client';

import { urlFor } from '@/lib/image';
import { useCart } from '@/lib/store';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8 text-deep-forest">
          Shopping Cart
        </h1>
        <p className="text-deep-forest/70 mb-4">
          Your cart is currently empty.
        </p>
        <Link
          href="/products"
          className="text-emerald-leaf hover:underline font-medium">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-deep-forest">
        Shopping Cart
      </h1>
      <div className="grid gap-8">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="relative w-24 h-24 shrink-0 bg-soft-cream/30 rounded-md overflow-hidden">
              {item.mainImage && (
                <Image
                  src={urlFor(item.mainImage).url()}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="grow flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-deep-forest">
                  {item.title}
                </h3>
                <p className="font-medium text-deep-forest">
                  ${item.price * item.quantity}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Qty:</span>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item._id, parseInt(e.target.value) || 1)
                    }
                    className="w-16 p-1 border rounded text-center"
                  />
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-soft-cream/20 rounded-lg border border-emerald-leaf/10">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-deep-forest">Total</span>
          <span className="text-2xl font-bold text-deep-forest">${total}</span>
        </div>
        <button className="w-full bg-deep-forest text-white py-3 rounded-lg hover:bg-deep-forest/90 transition-colors font-medium text-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}
