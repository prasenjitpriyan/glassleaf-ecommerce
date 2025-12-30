import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-forest text-soft-cream py-12 border-t border-emerald-leaf/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-emerald-leaf transition-colors">
                GlassLeaf Tea
              </span>
            </Link>
            <p className="text-soft-cream/70 text-sm leading-relaxed">
              Premium organic tea, transparently sourced and crafted for purity.
              Experience the clarity of nature in every cup.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-soft-cream/80">
              <li>
                <Link
                  href="/products"
                  className="hover:text-emerald-leaf transition-colors">
                  All Teas
                </Link>
              </li>
              <li>
                <Link
                  href="products/green-tea"
                  className="hover:text-emerald-leaf transition-colors">
                  Green Tea
                </Link>
              </li>
              <li>
                <Link
                  href="products/black-tea"
                  className="hover:text-emerald-leaf transition-colors">
                  Black Tea
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-emerald-leaf transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-soft-cream/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-leaf transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-leaf transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-emerald-leaf transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-emerald-leaf transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <p className="text-soft-cream/70 text-sm mb-4">
              Join our community for exclusive offers and tea tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-deep-forest/50 border border-emerald-leaf/30 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-leaf w-full"
              />
              <button
                type="button"
                className="bg-emerald-leaf text-white px-4 py-2 rounded text-sm hover:bg-emerald-leaf/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-emerald-leaf/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-soft-cream/60">
          <p>&copy; {currentYear} GlassLeaf Tea. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
