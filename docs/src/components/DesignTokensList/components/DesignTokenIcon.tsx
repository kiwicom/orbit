import React from "react";

import { StyledDesignTokenColor, StyledDesignTokenOther } from "./DesignTokenColor";

/*
  TODO: we can create later more types such as spacing (and size)
 */
const determinateTokenType = value => {
  if (
    /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(value) ||
    /^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/.test(value)
  ) {
    return "color";
  }
  return null;
};

const DesignTokenIcon = ({ value }) => {
  const type = determinateTokenType(value);
  if (type === "color") return <StyledDesignTokenColor $color={value} />;
  return <StyledDesignTokenOther />;
};

export default DesignTokenIcon;
