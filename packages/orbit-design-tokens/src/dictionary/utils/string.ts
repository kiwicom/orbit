/*
  Returns string if condition is met.
 */
export const falsyString = (condition: boolean, string: string): string | undefined =>
  condition ? string : undefined;

export const stringify = (value: string | number): string => `"${value}"`;

export const pixelized = (value: string | number): string => stringify(`${value}px`);
