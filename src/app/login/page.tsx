'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      const from = searchParams.get('from') || '/profiles';
      router.push(from);
    } else {
      setError('Incorrect password');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-75">
      <h2 className='text-center mb-8 text-2xl'>Access Protected Page</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="p-2 text-base mb-4"
      />
      {error && <p className="text-red-500 m-0">{error}</p>}
      <button type="submit" disabled={loading} className="p-2 text-base text-black cursor-pointer bg-teal-200">
        {loading ? 'Checking...' : 'Enter'}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="flex justify-center mt-[20vh]">
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}