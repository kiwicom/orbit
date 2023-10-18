import { parseToRgba, rgba, guard } from "color2k";

const transparentColor = (color: string, opacity: number): string => {
  // tailwind package is using css variables
  if (color.match(/var\(/)) {
    const regex = /var\(([^,]+),\s*([^)]+)\)/;
    const [, , colorValue] = color.match(regex);
    return transparentColor(colorValue, opacity);
  }

  const [R, G, B] = parseToRgba(color);
  const A = guard(0, 100, opacity) / 100;
  return rgba(R, G, B, A);
};

export default transparentColor;
