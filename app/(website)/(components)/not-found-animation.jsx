'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function NotFoundAnimation() {
  const containerRef = useRef(null);
  const leafRef = useRef(null);
  const shadowRef = useRef(null);

  useGSAP(
    () => {
      // Floating animation
      gsap.to(leafRef.current, {
        y: -15,
        rotation: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Shadow scaling
      gsap.to(shadowRef.current, {
        scale: 0.8,
        opacity: 0.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-48 h-48 md:w-64 md:h-64 mx-auto relative mb-6">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible">
        {/* Abstract Leaf Shape */}
        {/* Using stroke-deep-forest to match your brand variable */}
        <path
          ref={leafRef}
          d="M50 85C50 85 80 60 85 40C90 20 70 5 50 15C30 5 10 20 15 40C20 60 50 85 50 85Z"
          className="stroke-deep-forest fill-deep-forest/5 dark:stroke-emerald-leaf dark:fill-emerald-leaf/10 drop-shadow-lg"
          strokeWidth="1.5"
        />
        {/* Center vein */}
        <path
          ref={leafRef}
          d="M50 85C50 85 45 55 50 30"
          className="stroke-deep-forest dark:stroke-emerald-leaf"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* Shadow */}
        <ellipse
          ref={shadowRef}
          cx="50"
          cy="95"
          rx="30"
          ry="5"
          className="fill-deep-forest/20 dark:fill-black/40"
        />
      </svg>
    </div>
  );
}
