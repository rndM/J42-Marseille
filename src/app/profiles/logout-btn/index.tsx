'use client'

import { useRouter } from 'next/navigation';

export default function Logoutbutton() {
	const router = useRouter();
	async function handleLogout() {
		await fetch('/api/logout', { method: 'POST' });
		router.replace('/login');
	}
	return <button onClick={handleLogout}>Log out</button>
}