'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function FallingLeaves() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.offsetWidth;
      const height = container.offsetHeight;

      // Create 15 leaves
      for (let i = 0; i < 15; i++) {
        const leaf = document.createElement('div');

        // Randomly choose between emerald-leaf and amber-brew for variety
        // Using your specific theme colors
        const colorClass =
          Math.random() > 0.8 ? 'bg-amber-brew/30' : 'bg-emerald-leaf/30';

        leaf.className = `absolute w-3 h-3 md:w-4 md:h-4 ${colorClass} rounded-tr-[100%] rounded-bl-[100%] pointer-events-none`;

        container.appendChild(leaf);

        // Randomize initial position
        gsap.set(leaf, {
          x: Math.random() * width,
          y: -20,
          rotation: Math.random() * 360,
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });

        // Falling animation
        gsap.to(leaf, {
          y: height + 50,
          x: `+=${Math.random() * 150 - 75}`,
          rotation: `+=${Math.random() * 360}`,
          duration: Math.random() * 8 + 6, // Slow, gentle fall
          repeat: -1,
          delay: Math.random() * 5,
          ease: 'none',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
