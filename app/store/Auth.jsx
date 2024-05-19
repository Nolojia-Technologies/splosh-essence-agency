import { create } from 'zustand';
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  isAuth: !!localStorage.getItem('token'),
  isAgent: localStorage.getItem('isAgent') === 'true',
  token: localStorage.getItem('token') || null,
  toggleAuth: (token, isAgent) => {
    localStorage.setItem('token', token);
    localStorage.setItem('isAgent', isAgent.toString());
    set({ isAuth: true, token, isAgent });
  },
  logOut: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAgent');
    toast.success("You have logged out")
    set({ isAuth: false, token: null, isAgent: false });
  },
}));