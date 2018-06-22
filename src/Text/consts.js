// @flow
import * as tokens from "@kiwicom/orbit-design-tokens";

export const TYPE_OPTIONS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ATTENTION: "attention",
};

export const SIZE_OPTIONS = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large",
};

export const WEIGHT_OPTIONS = {
  NORMAL: "normal",
  BOLD: "bold",
};

export const ALIGN_OPTIONS = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
};

export const ELEMENT_OPTIONS = {
  P: "p",
  SPAN: "span",
  DIV: "div",
};

export const colorText = {
  primary: tokens.colorTextPrimary,
  secondary: tokens.colorTextSecondary,
  attention: tokens.colorTextAttention,
};

export const weightText = {
  regular: tokens.fontWeightNormal,
  bold: tokens.fontWeightBold,
};

export const sizeText = {
  large: tokens.fontSizeTextLarge,
  normal: tokens.fontSizeTextNormal,
  small: tokens.fontSizeTextSmall,
};
