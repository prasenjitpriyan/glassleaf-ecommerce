import Link from 'next/link';

export const metadata = {
  title: 'Shipping & Returns | Glassleaf',
  description:
    'Shipping, delivery, returns, and refund policies for Glassleaf teas.',
};

export default function ShippingPage() {
  return (
    <main className="bg-soft-cream text-stone-800 min-h-screen">
      {/* Header */}
      <section className="relative px-6 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="block text-sm md:text-base tracking-[0.2em] text-stone-500 uppercase font-light animate-fade-in-up">
            🚚 Policy
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 leading-tight animate-fade-in-up delay-100">
            Shipping & Returns Policy
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto animate-fade-in-up delay-200">
            For Glassleaf – Premium Darjeeling Tea in Glass Jars
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="px-6 pb-24 max-w-4xl mx-auto space-y-16 animate-fade-in-up delay-300">
        {/* Shipping Policy */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">
            📦 Shipping Policy
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                Where We Ship
              </h3>
              <p className="text-stone-600">
                We currently ship across India through trusted courier partners.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                Order Processing Time
              </h3>
              <ul className="list-disc list-inside text-stone-600 space-y-1">
                <li>
                  Orders are processed within 1–3 business days after payment
                  confirmation.
                </li>
                <li>
                  You will receive an SMS/email/WhatsApp confirmation once your
                  order is booked.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                Estimated Delivery Time
              </h3>
              <ul className="list-disc list-inside text-stone-600 space-y-1">
                <li>
                  <strong>Metro Cities:</strong> 4–6 business days
                </li>
                <li>
                  <strong>Non-Metro & Remote Areas:</strong> 6–9 business days
                </li>
              </ul>
              <p className="text-sm italic text-stone-500 mt-2">
                (Delivery time may vary based on location, courier delays,
                holidays or unforeseen circumstances.)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                Shipping Charges
              </h3>
              <ul className="list-disc list-inside text-stone-600 space-y-1">
                <li>
                  Shipping fee is calculated at checkout based on location and
                  order weight.
                </li>
                <li>
                  Free shipping offers may apply during promotional periods.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                Cash on Delivery (COD)
              </h3>
              <ul className="list-disc list-inside text-stone-600 space-y-1">
                <li>COD availability depends on your pin code.</li>
                <li>A small handling fee may apply for COD orders.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                Order Tracking
              </h3>
              <p className="text-stone-600 mb-2">
                Once your order is dispatched, a tracking link will be shared
                via:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-1">
                <li>Email</li>
                <li>WhatsApp / SMS (if applicable)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Returns & Refund Policy */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">
            🔄 Returns, Replacement & Refund Policy
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                Eligibility for Return / Replacement
              </h3>
              <p className="text-stone-600 mb-2">
                We accept returns or replacements only if:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-1">
                <li>The product arrives damaged, broken, or leaked.</li>
                <li>You received the wrong item.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                To request a return or replacement:
              </h3>
              <ul className="list-disc list-inside text-stone-600 space-y-1">
                <li>Contact us within 48 hours of delivery</li>
                <li>Share your order ID + photos/video of the issue</li>
                <li>Our team will assist you immediately</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                Non-Returnable Items
              </h3>
              <p className="text-stone-600 mb-2">
                For hygiene and product safety reasons, the following cannot be
                returned:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-1">
                <li>Opened tea jars</li>
                <li>Used or partially consumed items</li>
                <li>Products without original packaging</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">
                Refunds
              </h3>
              <p className="text-stone-600">
                If a refund is approved, it will be processed to your original
                payment method within 5–7 business days.
              </p>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="bg-stone-800 text-stone-100 p-8 rounded-2xl space-y-6 text-center">
          <h2 className="text-2xl font-serif">📩 How to Contact for Support</h2>
          <p className="text-stone-300">
            For shipping questions, returns, or damaged deliveries, reach out:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center text-lg font-medium">
            <a
              href="mailto:support@glassleaf.in"
              className="hover:text-emerald-400 transition-colors">
              📧 support@glassleaf.in
            </a>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">
              📱 +91 XXXXX XXXXX
            </span>
          </div>
          <p className="text-sm text-stone-400">
            We aim to respond within 24 hours.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-stone-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-stone-200 transition-colors shadow">
              Contact Page
            </Link>
          </div>
        </section>
      </div>

      {/* Customer Satisfaction Promise */}
      <section className="px-6 py-16 bg-stone-100 text-center border-t border-stone-200">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-xl md:text-2xl font-serif text-stone-800">
            🛡️ Customer Satisfaction Promise
          </h2>
          <p className="text-stone-600">
            At Glassleaf, your trust matters. If something isn’t right, we’ll do
            our best to make it right.
          </p>
          <p className="text-stone-500 font-medium italic">
            Thank you for choosing to sip with us. 💛
          </p>
        </div>
      </section>
    </main>
  );
}
