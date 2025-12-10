import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
      .update(body)
      .digest('hex');

    if (expectedSignature === signature) {
      // Process the webhook event here
      const event = JSON.parse(body);
      console.log('Razorpay Webhook Event:', event);
      return NextResponse.json({ status: 'ok' });
    } else {
      return NextResponse.json(
        { status: 'invalid signature' },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
