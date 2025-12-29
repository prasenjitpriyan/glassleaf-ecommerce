'use client';

import { urlFor } from '@/lib/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import AddToCart from './add-to-cart';

export default function ProductPageClient({ product }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animate Image Section
      gsap.from('.product-image-section', {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Animate Content Section
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(
        '.product-content-section',
        {
          opacity: 0,
          x: 50,
          duration: 1,
        },
        '-=0.8'
      )
        .from(
          '.badge',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          '-=0.6'
        )
        .from(
          '.product-title',
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          '-=0.4'
        )
        .from(
          '.product-price',
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
          },
          '-=0.6'
        )
        .from(
          '.product-description',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          '.add-to-cart-btn',
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          '-=0.4'
        )
        .from(
          '.trust-badges > div',
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
          },
          '-=0.2'
        );
    },
    { scope: containerRef }
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-12 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Animated Image Section */}
        <div className="product-image-section relative h-[400px] sm:h-[500px] lg:h-[600px] bg-white rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12">
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-emerald-leaf/5 rounded-full blur-3xl" />

          {product.mainImage && (
            <div className="relative w-full h-full">
              <Image
                src={urlFor(product.mainImage).url()}
                alt={product.title}
                fill
                className="object-contain drop-shadow-xl rounded-3xl"
                priority
              />
            </div>
          )}
        </div>

        {/* Animated Content Section */}
        <div className="product-content-section flex flex-col items-start">
          <span className="badge inline-block px-4 py-1 rounded-full bg-emerald-leaf/10 text-emerald-leaf font-medium text-sm mb-6 tracking-wide uppercase">
            Sourced from Darjeeling
          </span>

          <h1 className="product-title text-4xl sm:text-5xl lg:text-6xl font-bold text-deep-forest mb-6 font-serif leading-tight">
            {product.title}
          </h1>

          <div className="product-price flex items-center gap-6 mb-8">
            <p className="text-3xl font-medium text-deep-forest">
              ₹{product.price}
            </p>
            <span className="text-gray-400 text-sm font-medium">
              Tax included
            </span>
          </div>

          <div className="product-description prose prose-lg prose-emerald text-deep-forest/80 mb-10 leading-relaxed">
            <p>{product.description}</p>
          </div>

          <div className="add-to-cart-btn w-full sm:w-auto">
            <AddToCart product={product} />
          </div>

          {/* Additional Trust Badges */}
          <div className="trust-badges grid grid-cols-3 gap-6 w-full mt-12 pt-12 border-t border-gray-100">
            <div className="text-center">
              <div className="mb-2 text-2xl">🌿</div>
              <p className="text-xs font-semibold text-deep-forest uppercase tracking-wider">
                100% Organic
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl">🇮🇳</div>
              <p className="text-xs font-semibold text-deep-forest uppercase tracking-wider">
                India Origin
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl">⚡️</div>
              <p className="text-xs font-semibold text-deep-forest uppercase tracking-wider">
                Fast Shipping
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
