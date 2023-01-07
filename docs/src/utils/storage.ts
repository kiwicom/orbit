export const available = () =>
  typeof window !== "undefined" && "localStorage" in window && window.localStorage;

export const load = (key: string): string | null =>
  available() ? window.localStorage.getItem(key) : null;

export const save = (key: string, value: string) => {
  if (available()) window.localStorage.setItem(key, value);
};
