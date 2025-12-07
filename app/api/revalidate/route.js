import { revalidateTag } from 'next/cache';

export async function POST(req) {
  const signature = req.headers.get('x-sanity-signature');
  const secret = process.env.SANITY_WEBHOOK_SECRET;

  if (signature !== secret) {
    return new Response('Invalid signature', { status: 401 });
  }

  try {
    revalidateTag('products');

    return new Response(JSON.stringify({ revalidated: true }), { status: 200 });
  } catch (err) {
    return new Response('Revalidation error', { status: 500 });
  }
}
