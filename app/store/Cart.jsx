import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isCartOpen: false,
  token: null,
  toggleCart: () => {
    set((state) => ({ isCartOpen: !state.isCartOpen }));
  },
  setToken: (token) => {
    localStorage.setItem('token', token);
    set({ token });
  },
}));