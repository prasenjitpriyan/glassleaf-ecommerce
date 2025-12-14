import { urlFor } from '@/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug.current}`} className="group block">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {product.mainImage && (
          <div className="relative h-64 w-full bg-gray-100">
            <Image
              src={urlFor(product.mainImage).url()}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.title}
          </h3>
          <p className="text-gray-600 mt-1">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
