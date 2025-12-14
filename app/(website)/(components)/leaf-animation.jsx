'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function LeafAnimation() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      // Ensure path exists before trying to get length
      if (!path) return;

      const length = path.getTotalLength();

      // Reset initial state
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
        fill: 'transparent',
      });

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Draw the leaf
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 2.5,
      })
        // Fade in fill color
        .to(
          path,
          {
            fill: '#0f8a5f', // emerald-leaf
            duration: 1,
            opacity: 0.9,
            stroke: '#0f4c3a', // deep-forest
          },
          '-=1'
        )
        // Float animation
        .to(containerRef.current, {
          y: -15,
          rotation: 5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-32 h-32 mx-auto mb-2 relative z-10">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-lg">
        <path
          ref={pathRef}
          d="M12 22C12 22 17 17 19 12C21 7 18 3 15 2C12 1 8 4 6 9C5 12 7 17 12 22Z M12 22C12 22 11 15 13 8"
          stroke="#0f8a5f"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-0"
        />
      </svg>
    </div>
  );
}
