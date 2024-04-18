import {Dispatch, SetStateAction, useEffect, useState} from "react";

const getStorageValue = <A>(key: string, defaultValue: A) => {
  // getting stored value
  const saved: string | null = localStorage.getItem(key)
  const initial: A = typeof saved === 'string' ? JSON.parse(saved) : false;
  return initial ?? defaultValue as A;
}

export const useLocalStorage = <A>(key: string, defaultValue: A): [A, Dispatch<SetStateAction<A>>] => {
  const [value, setValue] = useState(() => {
    return getStorageValue<A>(key, defaultValue);
  });
  
  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
};
