// @flow

export const SIZE_OPTIONS = {
  SMALL: "small",
  MEDIUM: "medium",
};

// order of positions or aligns is important, the first possible value will be applied
export const POSITIONS = {
  RIGHT: "right",
  LEFT: "left",
  TOP: "top",
  BOTTOM: "bottom",
};

// the default order on RTL needs to be changed
export const RTL_POSITIONS = {
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
};

export const ALIGNS = {
  CENTER: "center",
  START: "start",
  END: "end",
};

export const POSITION_DIRECTIONS = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal",
};

export const TOOLTIP_PADDING = 12;

export const TOOLTIP_ARROW_SIZE = 7;

export const TOOLTIP_TOTAL_PADDING: number = TOOLTIP_PADDING + TOOLTIP_ARROW_SIZE;
