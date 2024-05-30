import { create } from 'zustand';
import { useLocalStorageValue } from './useLocalStorageValue';

export const useCartStore = create((set) => {
  const [token, setToken] = useLocalStorageValue('token', null);

  return {
    isCartOpen: false,
    token,
    toggleCart: () => {
      set((state) => ({ isCartOpen: !state.isCartOpen }));
    },
    setToken: (newToken) => {
      setToken(newToken);
      set({ token: newToken });
    },
  };
});