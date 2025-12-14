import { auth, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="sticky top-0 z-50 p-4 border-b border-white/20 flex justify-between items-center glass shadow-sm bg-white/80 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/images/logo.png"
          alt="GlassLeaf Tea"
          width={40}
          height={40}
          className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
        />
        <span className="text-2xl font-bold text-deep-forest tracking-tight">
          GlassLeaf Tea
        </span>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/products"
          className="text-gray-600 hover:text-emerald-leaf transition-colors font-medium">
          Store
        </Link>
        <Link
          href="/cart"
          className="text-gray-600 hover:text-emerald-leaf transition-colors font-medium">
          Cart
        </Link>
        {session ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">
              Hi, {session.user?.name || 'User'}
            </span>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}>
              <button
                type="submit"
                className="text-gray-600 hover:text-red-600 transition-colors font-medium text-sm">
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <Link
            href="/sign-in"
            className="text-gray-600 hover:text-emerald-leaf transition-colors font-medium">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
