import React from "react";

import { StyledDesignTokenColor, StyledDesignTokenOther } from "./DesignTokenColor";
import { TokenValueType } from "..";
/*
  TODO: we can create later more types such as spacing (and size)
 */
const determinateTokenType = (value: TokenValueType) => {
  if (typeof value !== "string") return null;
  if (
    /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(value) ||
    /^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/.test(value)
  ) {
    return "color";
  }
  return null;
};

interface Props {
  size?: "medium" | "large";
  value: TokenValueType;
}

const DesignTokenIcon = ({ size, value }: Props) => {
  if (typeof value !== "string") return <StyledDesignTokenOther size={size} />;

  const type = determinateTokenType(value);
  if (type === "color") return <StyledDesignTokenColor size={size} $color={value} />;

  return <StyledDesignTokenOther />;
};

export default DesignTokenIcon;
