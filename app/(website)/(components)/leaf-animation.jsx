'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function LeafAnimation() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const leaves = gsap.utils.toArray('.tea-leaf');

      leaves.forEach((leaf) => {
        // Randomize initial position
        gsap.set(leaf, {
          x: gsap.utils.random(0, window.innerWidth),
          y: -100,
          rotation: gsap.utils.random(0, 360),
          scale: gsap.utils.random(0.5, 1.2),
          opacity: gsap.utils.random(0.3, 0.7),
        });

        // Animate falling
        gsap.to(leaf, {
          y: window.innerHeight + 100,
          x: `+=${gsap.utils.random(-100, 100)}`,
          rotation: `+=${gsap.utils.random(180, 360)}`,
          duration: gsap.utils.random(10, 20),
          repeat: -1,
          ease: 'none',
          delay: gsap.utils.random(0, 10),
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <svg
          key={i}
          className="tea-leaf absolute text-emerald-leaf/10"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M12 2C12 2 11 8 5 12C11 14 12 22 12 22C12 22 13 14 19 12C13 8 12 2 12 2Z" />
        </svg>
      ))}
    </div>
  );
}
