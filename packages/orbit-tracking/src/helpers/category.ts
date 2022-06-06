import { CATEGORIES } from "../consts";

export const getCategory = (name: string) => {
  for (const [cat, components] of Object.entries(CATEGORIES)) {
    if (components.includes(name)) {
      return cat.toLowerCase();
    }
  }

  return "unknown";
};
