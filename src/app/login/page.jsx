
'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const TEST_USERNAME = 'kminchelle';
const TEST_PASSWORD = '0lelplR';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/products",
      redirect: true
    });
    setLoading(false);
  };

  const fillTestCredentials = () => {
    setUsername(TEST_USERNAME);
    setPassword(TEST_PASSWORD);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error === 'CredentialsSignin' 
              ? `Invalid username or password. Please use: ${TEST_USERNAME} / ${TEST_PASSWORD}` 
              : 'Something went wrong. Please try again.'}
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          disabled={loading}
          className="w-full mb-3 px-3 py-2 border rounded disabled:bg-gray-100"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
          className="w-full mb-3 px-3 py-2 border rounded disabled:bg-gray-100"
        />

        <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded text-xs text-gray-600">
          <strong>Test Credentials:</strong><br/>
          <code className="bg-white p-1 rounded block text-gray-800">
            Username: {TEST_USERNAME}
          </code>
          <code className="bg-white p-1 rounded block text-gray-800 mt-1">
            Password: {TEST_PASSWORD}
          </code>
          <button
            type="button"
            onClick={fillTestCredentials}
            className="mt-2 text-blue-600 hover:underline text-xs"
          >
            Auto-fill test credentials
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-3 disabled:bg-gray-400"
        >
          {loading ? 'Signing in...' : 'Login'}
        </button>

        <p className="text-center text-sm">
          New user?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
