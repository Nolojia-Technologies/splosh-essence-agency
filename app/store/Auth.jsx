import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isAuth: false,
  role: null,
  token: null,
  toggleAuth: (token, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);

    set({ isAuth: true, token, role });
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    set({ isAuth: false, token: null, role: 'user' });
  },
}));