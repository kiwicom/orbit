export const kebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

export const firstToUpper = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const camelCase = (str: string) => str.replace(/-([a-z])/g, g => g[1].toUpperCase());

export const toPx = (n: number) => `${n}px`;
