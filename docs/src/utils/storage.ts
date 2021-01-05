export const available = () => "localStorage" in window && window.localStorage;

type Storage = "bookmarks" | "devMode";

export const load = (key: Storage): string | null =>
  available() ? window.localStorage.getItem(key) : null;

export const save = (key: Storage, value: string) => {
  if (available()) window.localStorage.setItem(key, value);
};
