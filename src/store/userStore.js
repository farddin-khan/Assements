
import { create } from "zustand";
import { api } from "@/utils/api";

export const useUserStore = create((set) => ({
  users: [],
  total: 0,
  fetchUsers: async (limit=10, skip=0) => {
    const res = await api.get(`/users?limit=${limit}&skip=${skip}`);
    set({ users: res.data.users, total: res.data.total });
  },
  searchUsers: async (q) => {
    const res = await api.get(`/users/search?q=${q}`);
    set({ users: res.data.users });
  }
}));
