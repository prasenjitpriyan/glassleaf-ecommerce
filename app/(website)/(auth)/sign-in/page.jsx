'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AnimatedLogo from '../../(components)/animated-logo';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        // Force a hard reload to ensure server components update with the new session
        window.location.href = '/';
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-soft-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg border border-emerald-leaf/10">
        <div className="flex flex-col items-center">
          <AnimatedLogo className="w-24 h-24 mb-4" />
          <h2 className="mt-2 text-center text-3xl font-extrabold text-deep-forest">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-deep-forest/80">
            Or{' '}
            <Link
              href="/sign-up"
              className="font-medium text-emerald-leaf hover:text-emerald-leaf/80 transition-colors">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-deep-forest ring-1 ring-inset ring-emerald-leaf/30 placeholder:text-deep-forest/40 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-emerald-leaf sm:text-sm sm:leading-6 px-3 bg-white"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-b-md border-0 py-1.5 text-deep-forest ring-1 ring-inset ring-emerald-leaf/30 placeholder:text-deep-forest/40 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-emerald-leaf sm:text-sm sm:leading-6 px-3 bg-white"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-emerald-leaf hover:text-emerald-leaf/80 transition-colors">
                Forgot your password?
              </Link>
            </div>
          </div>

          {error && (
            <div className="text-crimson-berry text-sm text-center font-medium bg-crimson-berry/5 py-2 rounded-md border border-crimson-berry/10">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md bg-emerald-leaf px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-leaf/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-leaf disabled:opacity-50 transition-all shadow-sm hover:shadow-md">
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
