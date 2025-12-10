import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 p-4 border-b border-white/20 flex justify-between items-center glass shadow-sm">
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
      <div className="space-x-6">
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
      </div>
    </nav>
  );
}
