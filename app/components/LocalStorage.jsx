import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      toast.error(`Error getting value from localStorage for key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore = value instanceof Function ? value(state) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setState(valueToStore);
      } catch (error) {
        toast.error(`Error setting value in localStorage for key "${key}":`, error);
      }
    },
    [key, state]
  );

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key && event.newValue !== JSON.stringify(state)) {
        setValue(JSON.parse(event.newValue || ''));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, state, setValue]);

  return [state, setValue];
};