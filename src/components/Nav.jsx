'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Nav() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Help Study Abroad
        </Link>
        <div className="flex gap-4 items-center">
          {session ? (
            <>
              <span className="text-sm">Welcome, {session?.user?.name || session?.user?.email}</span>
              <Link href="/dashboard" className="hover:underline text-sm">
                Dashboard
              </Link>
              <Link href="/users" className="hover:underline text-sm">
                Users
              </Link>
              <Link href="/products" className="hover:underline text-sm">
                Products
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 text-sm"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:underline">
                Sign In
              </Link>
              <Link href="/signup" className="hover:underline">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
