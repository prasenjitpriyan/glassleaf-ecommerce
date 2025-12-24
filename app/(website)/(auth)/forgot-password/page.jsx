'use client';

import Link from 'next/link';
import { useState } from 'react';
import AnimatedLogo from '../../(components)/animated-logo';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setMessage(data.message);
    } catch (err) {
      setError(err.message);
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
            Forgot Password
          </h2>
          <p className="mt-2 text-center text-sm text-deep-forest/80">
            Enter your email to receive a reset link.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              className="relative block w-full rounded-md border-0 py-1.5 text-deep-forest ring-1 ring-inset ring-emerald-leaf/30 placeholder:text-deep-forest/40 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-emerald-leaf sm:text-sm sm:leading-6 px-3 bg-white"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-crimson-berry text-sm text-center font-medium bg-crimson-berry/5 py-2 rounded-md border border-crimson-berry/10">
              {error}
            </div>
          )}

          {message && (
            <div className="text-emerald-leaf text-sm text-center font-medium bg-emerald-leaf/5 py-2 rounded-md border border-emerald-leaf/10">
              {message}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md bg-emerald-leaf px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-leaf/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-leaf disabled:opacity-50 transition-all shadow-sm hover:shadow-md">
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </div>

          <div className="text-sm text-center">
            <Link
              href="/sign-in"
              className="font-medium text-emerald-leaf hover:text-emerald-leaf/80 transition-colors">
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
