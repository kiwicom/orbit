import { parseToRgba, rgba, guard } from "color2k";

const isHex = (color: string): boolean => color.startsWith("#");
const isRgb = (color: string): boolean => color.startsWith("rgb");

const transparentColor = (color: string, opacity: number): string => {
  // tailwind package is using css variables
  if (color.match(/var\(/)) {
    const regex = /var\(([^,]+),\s*([^)]+)\)/;
    const [, , colorValue] = color.match(regex);
    const value = colorValue as string;
    const isValidColor = isHex(value) || isRgb(value);
    return transparentColor(isValidColor ? value : `rgb(${value})`, opacity);
  }

  const [R, G, B] = parseToRgba(color);
  const A = guard(0, 100, opacity) / 100;
  return rgba(R, G, B, A);
};

export default transparentColor;
