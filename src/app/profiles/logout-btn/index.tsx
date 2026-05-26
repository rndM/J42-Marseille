'use client'

import { useRouter } from 'next/navigation';

interface LogoutbuttonProps {
    className?: string;
}

export default function Logoutbutton({className = ''}: LogoutbuttonProps) {
	const router = useRouter();
	async function handleLogout() {
		await fetch('/api/logout', { method: 'POST' });
		router.replace('/login');
	}
	return <button onClick={handleLogout} className={className}>Log out</button>
}