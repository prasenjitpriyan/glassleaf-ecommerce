import Image from 'next/image';

export const metadata = {
  title: 'About Us | Glassleaf',
  description:
    'Crafting Purity, Preserving Tradition, Celebrating Taste. Learn about the Glassleaf journey, our mission, and our promise to you.',
};

export default function AboutPage() {
  return (
    <main className="bg-soft-cream text-stone-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 lg:py-40 text-center overflow-hidden">
        {/* <div className="absolute inset-0 bg-[#E8E4D9] opacity-30 -z-10"></div> */}
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="block text-sm md:text-base tracking-[0.2em] text-stone-500 uppercase font-light animate-fade-in-up">
            🌿 About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 leading-tight animate-fade-in-up delay-100">
            Crafting Purity,
            <br />
            Preserving Tradition,
            <br />
            Celebrating Taste
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Welcome to Glassleaf, where tea isn’t just a product — it’s a story.
            Born from a passion for authenticity and a belief in mindful living.
          </p>
        </div>
      </section>

      {/* Intro Content */}
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-center">
        <p className="text-xl md:text-2xl font-serif text-stone-700 leading-relaxed max-w-3xl mx-auto">
          &quot;What started as a small idea — a jar of tea packed with honesty
          — quickly grew into a promise: to offer tea the way it’s meant to be
          enjoyed, with character, care, and respect for its roots.&quot;
        </p>
      </section>

      {/* Our Journey */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              🌄 Our Journey
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Glassleaf began with a simple realization: great tea is more than
              a beverage. It’s a connection. A connection between the people who
              grow it, the hands that craft it, and those who savor it.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We spent time with small tea growers, visited gardens, understood
              harvesting practices, and traced leaves back to the soil they came
              from. Every jar and every blend tells that story — from
              mist-covered estates in Darjeeling to your home, fresh, aromatic,
              and unaltered.
            </p>
          </div>
          <div className="h-96 bg-stone-100 rounded-2xl overflow-hidden relative">
            <Image
              src="/images/journey-tea-estate.png"
              alt="Tea Estate Journey"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-6 py-16 md:py-24 bg-[#F5F2EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
              🍃 What Makes Us Different
            </h2>
            <p className="text-stone-600">
              We don’t chase shortcuts. We focus on what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Ethically Sourced',
                desc: 'We support responsible growers and small tea gardens, valuing fair work and fair pay.',
                icon: '✔',
              },
              {
                title: 'Pure & Unblended',
                desc: 'No additives. No artificial flavors. No fillers. Only real tea leaves with their natural identity.',
                icon: '✔',
              },
              {
                title: 'Glass Jar Packaging',
                desc: 'We pack in reusable glass jars — a conscious step toward freshness, sustainability, and elegance.',
                icon: '✔',
              },
              {
                title: 'Small Batch Production',
                desc: 'Every batch is curated, checked, and packed with attention — not mass-produced or rushed.',
                icon: '✔',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-2xl text-green-700 mb-4 block">
                  {item.icon}
                </span>
                <h3 className="text-xl font-medium text-stone-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Philosophy */}
      <section className="px-6 py-16 md:py-24 bg-stone-900 text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="mx-auto w-16 h-px bg-[#FAF9F6] opacity-30 mb-8"></div>
          <h2 className="text-3xl md:text-5xl font-serif">
            ⚱️ Our Packaging Philosophy
          </h2>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed font-light">
            &quot;Our name —{' '}
            <span className="text-white font-normal">Glassleaf</span> — reflects
            our identity.&quot;
          </p>
          <div className="grid md:grid-cols-2 gap-12 text-left mt-12">
            <div>
              <p className="text-stone-400 leading-relaxed">
                We believe packaging is not just a container but an experience.
                Glass jars preserve aroma, retain flavor, and add a premium
                finish that plastic or pouches simply can’t offer.
              </p>
            </div>
            <div>
              <p className="text-stone-400 leading-relaxed">
                They can be reused, repurposed, and proudly displayed —
                extending the life of the product beyond the last cup of tea. At
                Glassleaf, style meets sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest text-stone-400 uppercase">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              🌟 Our Mission
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              To bring authentic Darjeeling tea to the world with honesty,
              purity, and respect — honoring the craft of small growers,
              elevating everyday tea moments, and inspiring mindful living
              through taste, quality, and thoughtful design.
            </p>
            <blockquote className="border-l-4 border-green-800 pl-6 italic text-stone-500 py-2">
              We aim to make every jar a bridge: from the hands that harvest it
              to the hearts that savor it.
            </blockquote>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-widest text-stone-400 uppercase">
              The Future
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              🔮 Our Vision
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              To redefine how tea is experienced — not as a routine, but as a
              ritual. We envision a world where conscious consumption becomes
              the norm.
            </p>
            <ul className="space-y-3 mt-4 text-stone-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0"></span>
                <span>
                  Glassleaf on shelves in homes that value wellness and
                  intention.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0"></span>
                <span>
                  A community built on trust, transparency, and taste.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0"></span>
                <span>A brand that grows not by volume, but by loyalty.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-16 md:py-24 bg-soft-cream border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              🧭 Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity',
                desc: 'We stay true to our sources, our growers, and the leaves we share. No shortcuts, no compromises.',
              },
              {
                title: 'Quality First',
                desc: 'From plucking to packaging, every step is guided by excellence and care.',
              },
              {
                title: 'Sustainability',
                desc: 'Reusable glass, minimal waste, conscious choices. A better planet cup by cup.',
              },
              {
                title: 'Respect for Craft',
                desc: 'We honor the heritage of Darjeeling tea and the people who bring it to life.',
              },
              {
                title: 'Mindfulness',
                desc: 'Tea is more than a drink — it’s a pause, a moment, a lifestyle. We protect that.',
              },
              {
                title: 'Community',
                desc: 'Customers, growers, partners — every connection matters. Everyone is part of the journey.',
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-100 p-8 rounded-lg hover:border-stone-300 transition-colors duration-300">
                <h3 className="text-xl font-serif text-stone-800 mb-3">
                  {val.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise & Glassleaf Way */}
      <section className="px-6 py-20 md:py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              ☕ Our Promise to You
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base font-medium text-stone-700">
              <div className="p-4 bg-white rounded shadow-sm">
                Freshness in every sip
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                Honesty in every ingredient
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                Beauty in every detail
              </div>
              <div className="p-4 bg-white rounded shadow-sm">
                Value in every jar
              </div>
            </div>
            <p className="text-stone-500 italic">
              &quot;Not because it sounds good — but because it’s how we work,
              every single day.&quot;
            </p>
          </div>

          <div className="w-24 h-px bg-stone-300 mx-auto"></div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900">
              🌱 The Glassleaf Way
            </h2>
            <div className="space-y-2 text-stone-600">
              <p>We do not mass-produce.</p>
              <p>We do not compromise quality for quantity.</p>
              <p>We do not hide behind fancy labels or artificial flavor.</p>
            </div>
            <p className="text-stone-800 font-medium pt-4">
              We believe real tea speaks for itself. <br />
              We just give it the right home — a jar worthy of its story.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead & Note */}
      <section className="px-6 py-20 md:py-24 bg-stone-900 text-[#FAF9F6]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              🌱 Looking Ahead
            </h2>
            <p className="text-stone-400 leading-relaxed">
              Glassleaf is growing — not to be bigger, but to be better. In the
              coming months, we aim to introduce:
            </p>
            <ul className="space-y-2 text-stone-300">
              <li>• Limited-estate seasonal teas</li>
              <li>• Organic & wellness-based blends</li>
              <li>• Gift sets & lifestyle accessories</li>
              <li>• Sustainable packaging upgrades</li>
            </ul>
            <p className="text-sm text-stone-500 mt-4 uppercase tracking-wider">
              Better tea for better moments.
            </p>
          </div>

          <div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50">
            <h2 className="text-2xl font-serif mb-6">💬 A Note From Us</h2>
            <p className="text-stone-300 leading-relaxed mb-6">
              Thank you for choosing Glassleaf. With every jar you bring home,
              you support farmers, craftsmanship, and a more sustainable
              tomorrow. Our growth begins with your cup — and ends with your
              satisfaction.
            </p>
            <div className="space-y-1">
              <p className="font-serif text-xl text-white">Glassleaf</p>
              <p className="text-sm text-stone-500 italic">
                Crafted with care. Delivered with honesty. Sipped with love.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
