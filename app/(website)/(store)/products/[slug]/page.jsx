import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import ProductPageClient from '../../../(components)/product-page-client';

export const revalidate = 60;

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      "title": name,
      "slug": slug,
      "mainImage": images[0],
      "price": variants[0].price,
      "description": description
    }`,
    { slug }
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-serif text-deep-forest">
          Product not found
        </h1>
      </div>
    );
  }

  return <ProductPageClient product={product} />;
}
