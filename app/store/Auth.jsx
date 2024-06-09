import { create } from 'zustand';
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
 isAuth: false,
 isAgent: false,
 token: null,
 toggleAuth: (newToken, newIsAgent) => {
   set({ isAuth: true, token: newToken, isAgent: newIsAgent });
 },
 logOut: () => {
   toast.success("You have logged out");
   set({ isAuth: false, token: null, isAgent: false });
 },
}));