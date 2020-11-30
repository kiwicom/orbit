import transparentColor from "./transparentColor";

const convertHexToRgba = (color: string, opacity: number): string =>
  transparentColor(color, opacity);

export default convertHexToRgba;
