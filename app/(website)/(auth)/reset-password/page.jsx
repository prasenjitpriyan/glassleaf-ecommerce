'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

function ResetPasswordFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!token) {
      setError('Invalid or missing token');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setMessage(data.message);
      setTimeout(() => {
        router.push('/sign-in');
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-soft-cream px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center text-crimson-berry bg-crimson-berry/5 p-4 rounded-md border border-crimson-berry/10">
          Invalid or missing reset token.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg border border-emerald-leaf/10">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-deep-forest">
          Reset Password
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="password" className="sr-only">
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="relative block w-full rounded-t-md border-0 py-1.5 text-deep-forest ring-1 ring-inset ring-emerald-leaf/30 placeholder:text-deep-forest/40 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-emerald-leaf sm:text-sm sm:leading-6 px-3 bg-white"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-deep-forest ring-1 ring-inset ring-emerald-leaf/30 placeholder:text-deep-forest/40 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-emerald-leaf sm:text-sm sm:leading-6 px-3 bg-white"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
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
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-soft-cream px-4 py-12 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="text-deep-forest">Loading...</div>}>
        <ResetPasswordFlow />
      </Suspense>
    </div>
  );
}
