
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Help Study Abroad</h1>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

