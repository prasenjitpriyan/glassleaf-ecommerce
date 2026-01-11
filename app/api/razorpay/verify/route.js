import { adminClient } from '@/lib/sanity.admin';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      cartItems,
      shippingDetails,
      amount,
    } = body;

    const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest('hex');

    if (digest !== razorpay_signature) {
      return NextResponse.json({ status: 'failure' }, { status: 400 });
    }

    // 1. Create Payment Document
    const paymentDoc = {
      _type: 'payment',
      transactionId: razorpay_payment_id,
      amount: amount, // Received in rupees
      currency: 'INR',
      status: 'success',
      method: 'razorpay',
      notes: `Order ID: ${razorpay_order_id}`,
      createdAt: new Date().toISOString(),
    };

    const createdPayment = await adminClient.create(paymentDoc);

    // 2. Prepare Order Items
    const orderItems = cartItems.map((item) => ({
      _type: 'object', // Matching the array object type in schema
      _key: item._id, // Important for array lists
      product: {
        _type: 'reference',
        _ref: item._id,
      },
      // Variant handling: if variant is an object, use its _id, else null or handle accordingly
      // Assuming item might have variant info or just be the product
      variant: item.variant
        ? {
            _type: 'reference',
            _ref: item.variant._id,
          }
        : undefined,
      quantity: item.quantity,
      price: item.price,
    }));

    // 3. Create Order Document
    const orderDoc = {
      _type: 'order',
      orderId: razorpay_order_id,
      customerName: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
      customerEmail: shippingDetails.email,
      shippingAddress: `${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.state} - ${shippingDetails.zipCode}. Phone: ${shippingDetails.phone}`,
      items: orderItems,
      totalAmount: amount, // Amount in rupees
      status: 'pending', // Initial status
      payment: {
        _type: 'reference',
        _ref: createdPayment._id,
      },
      createdAt: new Date().toISOString(),
      // Link to user if available (future improvement)
      // user: userId ? { _type: 'reference', _ref: userId } : undefined
    };

    const createdOrder = await adminClient.create(orderDoc);

    // 4. Update Payment with Order Reference
    await adminClient
      .patch(createdPayment._id)
      .set({
        order: {
          _type: 'reference',
          _ref: createdOrder._id,
        },
      })
      .commit();

    return NextResponse.json({
      status: 'success',
      orderId: createdOrder._id,
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
