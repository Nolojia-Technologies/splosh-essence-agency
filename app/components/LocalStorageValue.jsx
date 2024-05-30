import { useLocalStorage } from '../components/LocalStorage';

export const useLocalStorageValue = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  return [value, setValue];
}; 