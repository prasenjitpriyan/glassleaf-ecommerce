import { parseBody } from 'next-sanity/webhook';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { isValidSignature, body } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new Response('Invalid Signature', { status: 401 });
    }

    if (!body?._type) {
      return new Response('Bad Request', { status: 400 });
    }

    revalidateTag(body._type);
    return NextResponse.json({ body });
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
