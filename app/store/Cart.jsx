import { create } from 'zustand';

const isBrowser = typeof window !== 'undefined';

function getFromLocalStorage(key) {
  return isBrowser ? JSON.parse(window.localStorage.getItem(key)) : null;
}

function setInLocalStorage(key, value) {
  if (isBrowser) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

export const useCartStore = create((set) => ({
  isCartOpen: false,
  token: getFromLocalStorage('token'),
  toggleCart: () => {
    set((state) => ({ isCartOpen: !state.isCartOpen }));
  },
  setToken: (token) => {
    setInLocalStorage('token', token);
    set({ token });
  },
}));