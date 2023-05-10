export const available = () =>
  typeof window !== "undefined" && "localStorage" in window && window.localStorage;

export const load = (key: string): string | null =>
  available() ? window.localStorage.getItem(key) : null;

export const save = (key: string, value: string) => {
  if (available()) window.localStorage.setItem(key, value);
};

export const update = (key: string, value: string, max?: number) => {
  if (available()) {
    const oldValue = window.localStorage.getItem(key);
    if (oldValue) {
      const parsedOldValue = JSON.parse(oldValue);
      const newValue = [...new Set([value, ...parsedOldValue])];
      window.localStorage.setItem(key, JSON.stringify(max ? newValue.slice(0, max) : newValue));
    } else {
      window.localStorage.setItem(key, JSON.stringify([value]));
    }
  }
};
