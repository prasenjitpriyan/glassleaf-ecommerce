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
      <div className="relative h-96 bg-soft-cream/50 rounded-lg overflow-hidden border border-emerald-leaf/10">
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
        <h1 className="text-3xl font-bold text-deep-forest mb-4">
          {product.title}
        </h1>
        <p className="text-2xl font-semibold text-deep-forest/90 mb-6">
          ${product.price}
        </p>
        <button className="bg-emerald-leaf text-white px-6 py-3 rounded-lg hover:bg-emerald-leaf/90 transition-colors font-medium shadow-sm hover:shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
