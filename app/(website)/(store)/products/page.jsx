import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import ProductCard from '../../(components)/product-card';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProductsPage() {
  const products = await client.fetch(groq`*[_type == "product"]`);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-deep-forest">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
