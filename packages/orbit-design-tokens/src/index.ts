import createTheme from "./js/createTheme";

export const defaultTokens = createTheme();
export const defaultTheme = createTheme();

export { default as fromPlainObject } from "./fromPlainObject";
export { default as transparentColor } from "./js/transparentColor";
export type { Tokens as paletteColors } from "./js/paletteColors";
export { default as getTokens } from "./getTokens";
export { default as defaultFoundation } from "./js/defaultFoundation";
export { default as convertHexToRgba } from "./js/convertHexToRgba";
export { default as convertRgbaToHex } from "./js/convertRgbaToHex";
export { createTheme };
