import Link from 'next/link';
import '../globals.css';
import FallingLeaves from './(components)/falling-leaves';
import NotFoundAnimation from './(components)/not-found-animation';

export default function NotFound() {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
      {/* Decorative background */}
      <FallingLeaves />

      <section
        aria-labelledby="not-found-title"
        className="glass relative z-10 w-full max-w-lg rounded-2xl border border-white/20 p-12 text-center shadow-2xl backdrop-blur-md">
        <NotFoundAnimation />

        <h1
          id="not-found-title"
          className="mb-2 text-8xl font-extrabold tracking-tight text-deep-forest opacity-90">
          404
        </h1>

        <h2 className="mb-6 text-2xl font-semibold text-emerald-leaf">
          Page Not Found
        </h2>

        <p className="mb-10 leading-relaxed text-foreground/80">
          You’ve wandered a little off the trail. The page you’re looking for
          may have withered away — or never existed.
        </p>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full bg-deep-forest px-8 py-4 font-medium text-soft-cream shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-leaf hover:shadow-emerald-leaf/30 focus:outline-none focus:ring-2 focus:ring-emerald-leaf focus:ring-offset-2 motion-reduce:transform-none">
          Return to Garden
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
