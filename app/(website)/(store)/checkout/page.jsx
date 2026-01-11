'use client';

import { useCart } from '@/lib/store';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
    }
  }, [cart, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createOrder = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
          currency: 'INR',
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order. Please try again.');
      setLoading(false);
      return null;
    }
  };

  const processPayment = async (orderData) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'GlassLeaf Tea',
      description: 'Order Payment',
      // image: '/images/icon.png', // Add logo url if available
      order_id: orderData.id,
      handler: async function (response) {
        try {
          const verifyRes = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              cartItems: cart,
              shippingDetails: formData,
              amount: total,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.status === 'success') {
            clearCart();
            router.push('/success');
          } else {
            alert('Payment verification failed.');
          }
        } catch (error) {
          console.error('Error verification:', error);
          alert('Payment verification failed error.');
        } finally {
          setLoading(false);
        }
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: '#2D4A3E', // deep-forest color
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = await createOrder();
    if (orderData) {
      processPayment(orderData);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-deep-forest">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-deep-forest">
              Shipping & Contact Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-leaf focus:border-emerald-leaf"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-leaf focus:border-emerald-leaf"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-leaf focus:border-emerald-leaf"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-leaf focus:border-emerald-leaf"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-leaf focus:border-emerald-leaf"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-leaf focus:border-emerald-leaf"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-leaf focus:border-emerald-leaf"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP / Postal Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-leaf focus:border-emerald-leaf"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-deep-forest text-white py-3 rounded-lg hover:bg-deep-forest/90 transition-colors font-medium text-lg mt-6 disabled:opacity-50">
                {loading ? 'Processing...' : 'Pay Now'}
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="bg-soft-cream/30 p-6 rounded-lg h-fit border border-emerald-leaf/10">
            <h2 className="text-xl font-semibold mb-6 text-deep-forest">
              Order Summary
            </h2>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-deep-forest">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-deep-forest">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-deep-forest">Total</span>
              <span className="text-2xl font-bold text-deep-forest">
                ₹{total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
