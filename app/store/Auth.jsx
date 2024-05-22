import { create } from 'zustand';
import toast from "react-hot-toast";

const isBrowser = typeof window !== 'undefined';

function getFromLocalStorage(key) {
  return isBrowser ? window.localStorage.getItem(key) : null;
}

function setInLocalStorage(key, value) {
  if (isBrowser) {
    window.localStorage.setItem(key, value);
  }
}

function removeFromLocalStorage(key) {
  if (isBrowser) {
    window.localStorage.removeItem(key);
  }
}

export const useAuthStore = create((set) => ({
  isAuth: !!getFromLocalStorage('token'),
  isAgent: getFromLocalStorage('isAgent') === 'true',
  token: getFromLocalStorage('token') || null,
  toggleAuth: (token, isAgent) => {
    setInLocalStorage('token', token);
    setInLocalStorage('isAgent', isAgent.toString());
    set({ isAuth: true, token, isAgent });
  },
  logOut: () => {
    removeFromLocalStorage('token');
    removeFromLocalStorage('isAgent');
    toast.success("You have logged out");
    set({ isAuth: false, token: null, isAgent: false });
  },
}));

// ------ booom ----
// ---- booom ------
// -------- booom --
// --- booom -------
// -------- booom --
// ------ booom ----

