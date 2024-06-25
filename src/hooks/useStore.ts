import { useCallback } from "react";

export default function useStore() {
  const store = useCallback(<T>(data: T, key: string) => {
    localStorage.setItem(key, JSON.stringify(data));
  }, []);

  const retrieve = useCallback(<T>(key: string): T | undefined => {
    const getData = localStorage.getItem(key);
    try {
      return JSON.parse(getData!) as T;
    } catch (err) {
      return undefined;
    }
  }, []);

  return { store, retrieve };
}
