'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';
import LeafAnimation from './(components)/leaf-animation';

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Manual SVG line drawing (No DrawSVGPlugin needed)
      const path = document.querySelector('.hero-svg-path');
      if (path) {
        const length = path.getTotalLength();
        // Set initial state
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });

        // Animate stroke
        tl.to(path, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: 'power2.inOut',
        });
      }

      // 2. Staggered Text & Button Entrance
      tl.from(
        '.hero-title',
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        '-=2.0'
      ) // Start overlapping with drawing
        .from(
          '.hero-subtitle',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6'
        )
        .from(
          '.hero-cta',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            clearProps: 'opacity,transform', // Ensure CSS hover works after animation
          },
          '-=0.4'
        );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-soft-cream relative overflow-hidden">
      {/* Background Leaves */}
      <LeafAnimation />

      <div className="text-center max-w-3xl px-4 flex flex-col items-center relative z-10">
        {/* Hero SVG: Stylized Tea Leaf/Cup Outline */}
        <div className="mb-8 w-32 h-32 sm:w-48 sm:h-48 text-emerald-leaf opacity-80">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full">
            {/* A stylized tea leaf shape */}
            <path
              className="hero-svg-path opacity-0"
              d="M50 5 C50 5 20 20 10 50 C0 80 30 95 50 95 C70 95 100 80 90 50 C80 20 50 5 50 5 Z M50 5 C50 35 50 95 50 95 M10 50 C10 50 35 60 50 50 M90 50 C90 50 65 60 50 50"
            />
          </svg>
        </div>

        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-bold text-deep-forest mb-6 tracking-tight font-serif">
          Welcome to <span className="text-emerald-leaf">Glassleaf</span>
        </h1>

        <p className="hero-subtitle text-xl sm:text-2xl text-deep-forest/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Discover our premium collection of products. Quality meets style in
          every item.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <Link
            href="/products"
            className="hero-cta bg-emerald-leaf text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0b6b4a] transition-colors shadow-lg shadow-emerald-leaf/20 hover:scale-105 active:scale-95">
            Shop Now
          </Link>
          <Link
            href="/about"
            className="hero-cta bg-white/60 text-deep-forest border border-deep-forest/10 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-colors backdrop-blur-sm hover:shadow-md hover:scale-105 active:scale-95">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
