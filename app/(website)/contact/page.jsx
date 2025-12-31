export const metadata = {
  title: 'Contact Us | Glassleaf',
  description:
    'Get in touch with Glassleaf. Whether you have a question about our teas, need support, or want to say hello.',
};

export default function ContactPage() {
  return (
    <main className="bg-soft-cream text-stone-800 min-h-screen">
      {/* Header Section */}
      <section className="relative px-6 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="block text-sm md:text-base tracking-[0.2em] text-stone-500 uppercase font-light animate-fade-in-up">
            📞 Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 leading-tight animate-fade-in-up delay-100">
            We’re here to help.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Whether you have a question about our teas, need support with an
            order, or simply want to say hello — the Glassleaf team is just a
            message away.
          </p>
        </div>
      </section>

      {/* Contact Details Grid */}
      <section className="px-6 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address & Business Name */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <span className="text-3xl mb-4 block">🏠</span>
            <h3 className="text-xl font-serif text-stone-900 mb-2">Visit Us</h3>
            <p className="font-bold text-stone-800">Glassleaf</p>
            <p className="text-stone-600 leading-relaxed">
              Darjeeling, West Bengal, India
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <span className="text-3xl mb-4 block">📬</span>
            <h3 className="text-xl font-serif text-stone-900 mb-2">
              Email Support
            </h3>
            <p className="text-stone-600 mb-2">
              For general inquiries & support:
            </p>
            <a
              href="mailto:support@glassleaf.in"
              className="text-green-800 font-medium hover:underline text-lg">
              support@glassleaf.in
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <span className="text-3xl mb-4 block">📱</span>
            <h3 className="text-xl font-serif text-stone-900 mb-2">
              Call or WhatsApp
            </h3>
            <p className="text-stone-600 mb-2">Mon-Sat, 10am - 7pm IST</p>
            <a
              href="tel:+910000000000"
              className="text-green-800 font-medium hover:underline text-lg">
              +91 00000 00000
            </a>
          </div>
        </div>
      </section>

      {/* How Can We Help & Hours */}
      <section className="px-6 py-16 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-stone-900">
              🎯 How Can We Help?
            </h2>
            <p className="text-stone-600 leading-relaxed">
              For orders, product information, wholesale inquiries, or
              collaborations, feel free to reach us anytime through:
            </p>
            <ul className="space-y-3 text-stone-700 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-green-700">📧</span> Email
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-700">📱</span> WhatsApp
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-700">📩</span> Website Contact Form
              </li>
            </ul>
            <p className="text-sm text-stone-500 italic mt-4">
              We typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-stone-900">
              🕒 Customer Support Hours
            </h2>
            <div className="space-y-2 text-stone-600 text-lg">
              <p className="font-semibold text-stone-800">Monday – Saturday</p>
              <p>10:00 AM – 7:00 PM (IST)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale & Socials */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Wholesale */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900">
              🤝 Wholesale & Partnerships
            </h2>
            <p className="text-stone-600">
              Interested in bulk orders, cafés, gifting, or retail
              collaborations?
            </p>
            <a
              href="mailto:partners@glassleaf.in"
              className="inline-block bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-colors">
              Write to partners@glassleaf.in
            </a>
          </div>

          <div className="w-24 h-px bg-stone-300 mx-auto"></div>

          {/* Socials */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900">
              💬 Stay Connected
            </h2>
            <p className="text-stone-600">
              Follow us for product updates, offers & tea stories:
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="flex items-center gap-2 text-stone-700 hover:text-green-800 transition-colors font-medium">
                <span>📸</span> Instagram: @glassleaf.in
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-stone-700 hover:text-green-800 transition-colors font-medium">
                <span>📘</span> Facebook: /glassleaf
              </a>
              <div className="flex items-center gap-2 text-stone-700">
                <span>📢</span> WhatsApp Broadcast: Available on request
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="px-6 py-16 bg-stone-100 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-serif text-stone-800">
            🌿 We’re here for you.
          </h2>
          <p className="text-stone-600 italic">
            &quot;Thank you for choosing Glassleaf. Your trust means everything
            to us — and we’re always one message away.&quot;
          </p>
        </div>
      </section>
    </main>
  );
}
