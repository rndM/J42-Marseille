'use client';

import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function SecretPage() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/logout', { method: 'POST' });
    router.replace('/login');
  }

  return (
    <main>
      <h1>Secret Page</h1>
      <p>Only accessible with the correct password.</p>
      <button onClick={handleLogout}>Log out</button>
    </main>
  );
}