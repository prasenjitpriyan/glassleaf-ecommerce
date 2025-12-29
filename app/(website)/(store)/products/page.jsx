import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import FeaturedProductList from '../../(components)/featured-product-list';

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await client.fetch(groq`*[_type == "product"]{
    _id,
    "title": name,
    "slug": slug,
    "mainImage": images[0],
    "price": variants[0].price,
    "description": description
  }`);

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-deep-forest font-serif">
          Our Collection
        </h1>
        <p className="text-lg text-deep-forest/70 max-w-2xl mx-auto">
          Hand-picked, premium teas for the discerning palate.
        </p>
      </div>

      <FeaturedProductList products={products} />
    </div>
  );
}
