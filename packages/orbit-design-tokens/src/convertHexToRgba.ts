export type ConvertHexToRgba = (color: string, opacity: number) => string;

const convertHexToRgba: ConvertHexToRgba = (color, opacity) => {
  const removeHash = color.replace("#", "");
  const hex = removeHash.length === 3 ? removeHash + removeHash : removeHash;
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`;
};

export default convertHexToRgba;
