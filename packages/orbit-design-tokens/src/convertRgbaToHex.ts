export type RgbaToHex = (rgba: string) => string;

const convertRgbaToHex: RgbaToHex = (rgba: string) => {
  const rgbaRegex = new RegExp("rgba?\\((\\d+), (\\d+), (\\d+),? ?(.*)?\\)");
  const [_, r, g, b, a] = rgba.match(rgbaRegex) ?? [];

  const red = parseInt(r, 10).toString(16).padStart(2, "0");
  const green = parseInt(g, 10).toString(16).padStart(2, "0");
  const blue = parseInt(b, 10).toString(16).padStart(2, "0");
  const alpha = a
    ? Math.floor(Number(a) * 255)
        .toString(16)
        .padStart(2, "0")
    : "";

  return `#${red}${green}${blue}${alpha && alpha !== "ff" ? alpha : ""}`;
};

export default convertRgbaToHex;
