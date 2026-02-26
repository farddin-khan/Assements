'use client';
import { useEffect } from 'react';
import { useProductStore } from '@/store/productStore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Products() {
  const {
    products,
    fetchProducts,
    searchProducts,
    categories,
    fetchCategories,
    filterByCategory
  } = useProductStore();

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
  }, [status]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchProducts();
      fetchCategories();
    }
  }, [status]);

  const handleSearch = (e) => {
    searchProducts(e.target.value);
  };

  const handleCategory = (e) => {
    filterByCategory(e.target.value);
  };

  if (status === 'loading') return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="mb-4 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          className="p-2 border rounded"
        />
        <select onChange={handleCategory} className="p-2 border rounded">
          <option value="">All Categories</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-white p-4 shadow rounded">
            <h2 className="font-bold">{p.title}</h2>
            <p className="text-sm">{p.description}</p>
            <p className="mt-2 font-semibold">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
