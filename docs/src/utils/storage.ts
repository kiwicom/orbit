export const available = () =>
  typeof window !== "undefined" && "localStorage" in window && window.localStorage;

type Storage = "bookmarks" | "devMode" | "googleUser" | "viewport";

export const load = (key: Storage): string | null =>
  available() ? window.localStorage.getItem(key) : null;

export const save = (key: Storage, value: string) => {
  if (available()) window.localStorage.setItem(key, value);
};
