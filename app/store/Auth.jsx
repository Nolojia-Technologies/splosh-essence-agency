import { create } from 'zustand';
import toast from "react-hot-toast";
import { useLocalStorageValue } from './useLocalStorageValue';

export const useAuthStore = create((set) => {
  const [token, setToken] = useLocalStorageValue('token', null);
  const [isAgent, setIsAgent] = useLocalStorageValue('isAgent', false);

  return {
    isAuth: !!token,
    isAgent,
    token,
    toggleAuth: (newToken, newIsAgent) => {
      setToken(newToken);
      setIsAgent(newIsAgent);
      set({ isAuth: true, token: newToken, isAgent: newIsAgent });
    },
    logOut: () => {
      setToken(null);
      setIsAgent(false);
      toast.success("You have logged out");
      set({ isAuth: false, token: null, isAgent: false });
    },
  };
});