import Link from 'next/link';

export const metadata = {
  title: 'FAQ | Glassleaf',
  description:
    'Frequently Asked Questions about Glassleaf products, shipping, packaging, and more.',
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: 'About Glassleaf & Our Products',
      questions: [
        {
          q: 'Q1. What is Glassleaf?',
          a: 'Glassleaf is a premium tea brand offering authentic Darjeeling teas packed in reusable glass jars. We focus on purity, freshness, and sustainable packaging to bring a better tea experience to your home.',
        },
        {
          q: 'Q2. Where do your teas come from?',
          a: 'All our teas are sourced from trusted small growers and tea gardens in Darjeeling, India. We prioritize ethical and responsible sourcing.',
        },
        {
          q: 'Q3. Are your teas pure and natural?',
          a: 'Yes. Our teas contain no artificial flavors, no colors, and no additives—only real, loose-leaf Darjeeling tea.',
        },
      ],
    },
    {
      title: 'Orders & Shipping',
      questions: [
        {
          q: 'Q4. Do you ship across India?',
          a: 'Yes! We deliver pan-India through reliable courier partners.',
        },
        {
          q: 'Q5. How long does delivery take?',
          a: 'Orders are usually shipped within 1–3 days and delivered in 5–7 business days, depending on location.',
        },
        {
          q: 'Q6. How can I track my order?',
          a: 'Once your order is shipped, you will receive a tracking link via email or WhatsApp.',
        },
        {
          q: 'Q7. Do you offer COD (Cash on Delivery)?',
          a: 'COD availability may depend on your location. Contact us to confirm before placing the order.',
        },
      ],
    },
    {
      title: 'Packaging & Storage',
      questions: [
        {
          q: 'Q8. Why glass jars instead of pouches or plastic?',
          a: 'Glass jars preserve freshness better, protect aroma, and can be reused. It’s a cleaner and more sustainable choice compared to plastic.',
        },
        {
          q: 'Q9. How should I store my tea?',
          a: 'Keep the jar tightly closed and stored in a cool, dry place away from sunlight. This maintains freshness and flavor.',
        },
      ],
    },
    {
      title: 'Product Information',
      questions: [
        {
          q: 'Q10. How many cups can I make from one jar?',
          a: (
            <span>
              <strong>50g Jar:</strong> ~20–25 cups
              <br />
              <strong>100g Jar:</strong> ~40–50 cups
              <br />
              <span className="text-sm italic">
                (Depends on usage and steeping strength)
              </span>
            </span>
          ),
        },
        {
          q: 'Q11. Are your products safe for gifting?',
          a: 'Yes! Our jars are premium quality and make excellent gifts for tea lovers.',
        },
        {
          q: 'Q12. Do you offer bulk/wholesale orders?',
          a: (
            <span>
              Yes — contact us at{' '}
              <a
                href="mailto:partners@glassleaf.in"
                className="text-emerald-800 hover:underline">
                partners@glassleaf.in
              </a>{' '}
              for wholesale, café, gifting, or corporate inquiries.
            </span>
          ),
        },
      ],
    },
    {
      title: 'Customer Support',
      questions: [
        {
          q: 'Q13. How can I reach customer support?',
          a: (
            <span>
              📧 <strong>Email:</strong>{' '}
              <a
                href="mailto:support@glassleaf.in"
                className="text-emerald-800 hover:underline">
                support@glassleaf.in
              </a>
              <br />
              📱 <strong>WhatsApp:</strong> +91 XXXXX XXXXX (replace with your
              number)
              <br />
              <span className="text-sm italic">
                We usually reply within 24 hours.
              </span>
            </span>
          ),
        },
        {
          q: 'Q14. Can I return or replace an item?',
          a: 'If your product arrives damaged or incorrect, contact us within 48 hours with pictures. We’ll resolve it promptly.',
        },
      ],
    },
  ];

  return (
    <main className="bg-soft-cream text-stone-800 min-h-screen">
      {/* Header */}
      <section className="relative px-6 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="block text-sm md:text-base tracking-[0.2em] text-stone-500 uppercase font-light animate-fade-in-up">
            ❓ Support
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 leading-tight animate-fade-in-up delay-100">
            Frequently Asked Questions
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto animate-fade-in-up delay-200">
            Everything you need to know about our products and services.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-6 pb-24 max-w-4xl mx-auto space-y-16">
        {faqCategories.map((category, idx) => (
          <div
            key={idx}
            className="space-y-6 animate-fade-in-up"
            style={{ animationDelay: `${300 + idx * 100}ms` }}>
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 border-b border-stone-300 pb-2">
              {category.title}
            </h2>
            <div className="space-y-8">
              {category.questions.map((item, qIdx) => (
                <div
                  key={qIdx}
                  className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-lg md:text-xl font-medium text-stone-800 mb-3 playfair-display">
                    {item.q}
                  </h3>
                  <div className="text-stone-600 leading-relaxed">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer / Still have questions */}
      <section className="px-6 py-20 bg-stone-900 text-[#FAF9F6] text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif">🌿 Still have questions?</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            We’d love to help! Message us anytime — we’re just one brew away.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-stone-900 px-8 py-3 rounded-full font-medium hover:bg-stone-200 transition-colors shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
