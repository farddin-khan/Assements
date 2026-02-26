
'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  if (status === "loading") return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {session?.user && (
        <p className="mb-4">Logged in as <strong>{session.user.name || session.user.email}</strong></p>
      )}
      <div className="space-x-4">
        <Link href="/users" className="text-blue-600 hover:underline">
          Users
        </Link>
        <Link href="/products" className="text-blue-600 hover:underline">
          Products
        </Link>
      </div>
    </div>
  );
}
