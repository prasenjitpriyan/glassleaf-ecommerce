import { urlFor } from '@/lib/image';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import AddToCart from '../../../(components)/add-to-cart';

export const revalidate = 60;

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      "title": name,
      "slug": slug,
      "mainImage": images[0],
      "price": variants[0].price
    }`,
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
        <AddToCart product={product} />
      </div>
    </div>
  );
}
