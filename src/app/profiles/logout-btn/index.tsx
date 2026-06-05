'use client'
import { LogOut } from 'lucide-react';
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
	return (
        <button
            onClick={handleLogout}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition-colors duration-200 ${className}`}
                // text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${className}`}
            >
            <LogOut className="w-4 h-4" />
            Log out
        </button>
    )
}