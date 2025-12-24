'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavbarAnimator from './navbar-animator';

export default function NavbarContent({ session, signOutAction }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  };

  const navLinks = [
    { name: 'Store', href: '/products' },
    { name: 'Cart', href: '/cart' },
  ];

  return (
    <>
      <NavbarAnimator
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-dark border-b border-white/10 shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-50">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-leaf/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/images/logo.png"
                  alt="GlassLeaf Tea"
                  width={40}
                  height={40}
                  className="h-10 rounded-full w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              <span
                className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-soft-cream' : 'text-deep-forest'
                }`}>
                GlassLeaf Tea
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`relative font-medium text-sm tracking-wide transition-colors duration-300 hover:text-emerald-leaf ${
                    pathname === link.href
                      ? 'text-emerald-leaf'
                      : isScrolled
                        ? 'text-soft-cream/90'
                        : 'text-deep-forest/80'
                  }`}>
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-emerald-leaf"
                    />
                  )}
                </Link>
              ))}

              {/* Auth Section */}
              {session ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                      isScrolled
                        ? 'border-white/20 hover:bg-white/10 text-soft-cream'
                        : 'border-deep-forest/10 hover:bg-deep-forest/5 text-deep-forest'
                    }`}>
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-emerald-leaf to-deep-forest flex items-center justify-center text-xs text-white font-medium">
                      {session.user?.name?.[0] || 'U'}
                    </div>
                    <span className="text-sm font-medium pr-1">
                      {session.user?.name?.split(' ')[0] || 'User'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden">
                        <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                          <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                            Signed in as
                          </p>
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {session.user?.email}
                          </p>
                        </div>
                        <div className="p-1">
                          <button
                            onClick={() => signOutAction()}
                            className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-crimson-berry hover:bg-red-50 rounded-lg transition-colors">
                            Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href="/sign-in"
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'bg-soft-cream text-deep-forest hover:bg-white'
                      : 'bg-deep-forest text-soft-cream hover:bg-deep-forest/90'
                  }`}>
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-soft-cream hover:bg-white/10'
                  : 'text-deep-forest hover:bg-black/5'
              }`}>
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 rounded-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                />
                <span
                  className={`w-full h-0.5 rounded-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`w-full h-0.5 rounded-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </NavbarAnimator>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-soft-cream shadow-2xl p-6 flex flex-col">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-deep-forest hover:bg-black/5 rounded-full transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                      pathname === link.href
                        ? 'bg-emerald-leaf/10 text-emerald-leaf'
                        : 'text-deep-forest hover:bg-black/5'
                    }`}>
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-black/5">
                {session ? (
                  <div className="space-y-4">
                    <div className="px-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-leaf to-deep-forest flex items-center justify-center text-white font-medium">
                        {session.user?.name?.[0] || 'U'}
                      </div>
                      <div>
                        <p className="font-medium text-deep-forest">
                          {session.user?.name}
                        </p>
                        <p className="text-xs text-deep-forest/60">
                          {session.user?.email}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => signOutAction()}
                      className="w-full text-left px-4 py-3 text-crimson-berry hover:bg-red-50 rounded-xl transition-colors font-medium">
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/sign-in"
                    className="block w-full text-center bg-deep-forest text-soft-cream py-3 rounded-xl font-medium shadow-lg shadow-deep-forest/20 active:scale-95 transition-all">
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
