import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-emerald-leaf/10 p-4 rounded-full mb-6">
        <CheckCircle className="w-16 h-16 text-emerald-leaf" />
      </div>
      <h1 className="text-4xl font-bold text-deep-forest mb-4">
        Order Placed Successfully!
      </h1>
      <p className="text-xl text-deep-forest/70 mb-8 max-w-md">
        Thank you for your purchase. We have received your order and will begin
        processing it immediately.
      </p>
      <div className="flex gap-4">
        <Link
          href="/products"
          className="bg-deep-forest text-white px-8 py-3 rounded-lg hover:bg-deep-forest/90 transition-colors font-medium">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
