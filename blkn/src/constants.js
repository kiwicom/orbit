// eslint-disable import/prefer-default-export
// @flow

// colors from styleguide https://marvelapp.com/79c0g9e/screen/36355252
export const colors = {
  white: {
    normal: "#fff",
  },
  cloud: {
    light: "#f5f7f9",
    normal: "#e8edf1",
  },
  teal: {
    light: "#9cdad3",
    normal: "#00a991",
    dark: "#00826f",
  },
  green: {
    light: "#e7f3e8",
    normal: "#127f22",
    dark: "#065d12",
  },
  red: {
    light: "#fae8e8",
    normal: "#d21c1c",
    dark: "#650808",
  },
  ink: {
    lighter: "#bac7d5",
    light: "#7f91a8",
    normal: "#46515e",
    dark: "#171b1e",
  },
  orange: {
    light: "##fcf1cd",
    normal: "#f9971e",
    dark: "#a93610",
  },
  blue: {
    light: "##0f6f9f",
    normal: "#10709f",
    dark: "#07405c",
  },
};

export const fontColors = {
  primary: colors.ink.normal,
  secondary: colors.ink.light,
  attention: colors.ink.dark,
  error: colors.red.normal,
  input: colors.ink.lighter,
  active: colors.teal.normal,
};

export const fontSizes = {
  small: "12px",
  normal: "14px",
  large: "16px",
};
