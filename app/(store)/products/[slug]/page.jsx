import { urlFor } from '@/lib/image';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import Image from 'next/image';

export const revalidate = 60;

export default async function ProductPage({ params }) {
  const { slug } = params;
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]`,
    { slug }
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
        {product.mainImage && (
          <Image
            src={urlFor(product.mainImage).url()}
            alt={product.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {product.title}
        </h1>
        <p className="text-2xl font-semibold text-gray-900 mb-6">
          ${product.price}
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
