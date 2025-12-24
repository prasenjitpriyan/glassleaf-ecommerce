'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function AnimatedLogo({ className = 'w-24 h-24' }) {
  const logoRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
      }
    );
  });

  return (
    <div className={`overflow-hidden rounded-full ${className}`}>
      <Image
        ref={logoRef}
        src="/images/logo.png"
        alt="GlassLeaf Tea"
        width={200}
        height={200}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
