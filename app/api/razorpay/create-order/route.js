import { razorpay } from '@/lib/razorpay';
import { orderSchema } from '@/lib/validators';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Create Order Request Body:', body); // Debug log

    const { amount, currency } = orderSchema.parse(body);

    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency,
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    console.log('Razorpay Order Created:', order); // Debug log

    return NextResponse.json(order);
  } catch (error) {
    console.error('Create Order Error:', error); // Debug log
    return NextResponse.json(
      { error: error?.error?.description || error.message },
      { status: 500 }
    );
  }
}
