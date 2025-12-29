'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function PageTransition({ children }) {
  const containerRef = useRef(null);
  const pathname = usePathname();

  useGSAP(() => {
    // Animate in when pathname changes
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, [pathname]); // Re-run when pathname changes

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
}
