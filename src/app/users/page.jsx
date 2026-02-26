'use client';
import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Users() {
  const { users, fetchUsers, searchUsers } = useUserStore();
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
  }, [status]);

  useEffect(() => {
    if (status === 'authenticated') fetchUsers();
  }, [status]);

  const handleSearch = (e) => {
    searchUsers(e.target.value);
  };

  if (status === 'loading') return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="mb-3 p-2 border rounded"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td className="border px-4 py-2">{u.id}</td>
              <td className="border px-4 py-2">{u.firstName} {u.lastName}</td>
              <td className="border px-4 py-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
