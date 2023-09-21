import type { Size } from "./types";

export const sizeStyles: Record<Size, string> = {
  small: "h-button-small text-small [&_svg]:h-icon-small [&_svg]:w-icon-small",
  normal: "h-button-normal text-normal [&_svg]:h-icon-medium [&_svg]:w-icon-medium",
  large: "h-button-large text-large [&_svg]:h-icon-large [&_svg]:w-icon-large",
};

export const paddingNoIconsStyles: Record<Size, string> = {
  small: "px-button-padding-sm",
  normal: "px-button-padding-md",
  large: "px-button-padding-lg",
};

export const paddingLeftIconStyles: Record<Size, string> = {
  small: "ps-button-padding-xs pe-button-padding-sm",
  normal: "ps-button-padding-sm pe-button-padding-md",
  large: "ps-button-padding-md pe-button-padding-lg",
};

export const paddingRightIconStyles: Record<Size, string> = {
  small: "ps-button-padding-sm pe-button-padding-xs",
  normal: "ps-button-padding-md pe-button-padding-sm",
  large: "ps-button-padding-lg pe-button-padding-md",
};

export const paddingBothIconsStyles: Record<Size, string> = {
  small: "px-button-padding-xs",
  normal: "px-button-padding-sm",
  large: "px-button-padding-md",
};

export const circledStyles: Record<Size, string> = {
  small: "rounded-button-circled-small",
  normal: "rounded-button-circled-normal",
  large: "rounded-button-circled-large",
};

export const iconOnlyStyles: Record<Size, string> = {
  small: "w-button-small",
  normal: "w-button-normal",
  large: "w-button-large",
};
