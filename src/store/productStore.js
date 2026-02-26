
import { create } from "zustand";
import { api } from "@/utils/api";

export const useProductStore = create((set) => ({
  products: [],
  categories: [],
  total: 0,
  fetchProducts: async (limit=10, skip=0) => {
    const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
    set({ products: res.data.products, total: res.data.total });
  },
  searchProducts: async (q) => {
    const res = await api.get(`/products/search?q=${q}`);
    set({ products: res.data.products });
  },
  fetchCategories: async () => {
    const res = await api.get(`/products/categories`);
    set({ categories: res.data });
  },
  filterByCategory: async (cat) => {
    const res = await api.get(`/products/category/${cat}`);
    set({ products: res.data.products });
  }
}));
