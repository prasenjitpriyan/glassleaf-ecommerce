'use client';

import { urlFor } from '@/lib/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FeaturedProductList({ products }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('.product-card');

      cards.forEach((card, i) => {
        // Image reveal animation
        gsap.fromTo(
          card.querySelector('.product-image-container'),
          { opacity: 0, scale: 0.9, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Text reveal animation
        gsap.fromTo(
          card.querySelector('.product-content'),
          { opacity: 0, x: i % 2 === 0 ? 50 : -50 },
          {
            opacity: 1,
            x: 0,
            delay: 0.2, // slight delay after image
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col gap-12 sm:gap-24">
      {products.map((product, index) => (
        <div
          key={product._id}
          className={`product-card flex flex-col ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500`}>
          {/* Image Section */}
          <div className="product-image-container w-full lg:w-1/2 relative aspect-square sm:aspect-4/3 lg:h-[450px] bg-white overflow-hidden group p-8 sm:p-12">
            {product.mainImage && (
              <Image
                src={urlFor(product.mainImage).url()}
                alt={product.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </div>

          {/* Content Section */}
          <div className="product-content w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center items-start relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-forest mb-4 font-serif">
              {product.title}
            </h2>
            <p className="text-xl font-medium text-emerald-leaf mb-6">
              Starts at ₹{product.price}
            </p>
            <p className="text-deep-forest/80 mb-8 leading-relaxed line-clamp-3">
              {product.description ||
                'Experience the finest quality tea, sourced directly from the gardens of India.'}
            </p>
            <Link
              href={`/products/${product.slug.current}`}
              className="inline-block bg-deep-forest text-white px-8 py-3 rounded-full hover:bg-emerald-leaf transition-colors text-lg font-medium shadow-md hover:shadow-lg">
              Shop Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
