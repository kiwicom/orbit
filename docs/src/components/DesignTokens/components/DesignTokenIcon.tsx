import React from "react";

import {
  StyledDesignTokenColor,
  StyledDesignTokenBase,
  StyledDesignTokenSize,
  StyledDesignTokenElevation,
  StyledDesignTokenTypography,
  StyledDesignTokenBreakpoint,
  StyledDesignTokenBorderRadius,
  StyledDesignTokenSpacing,
  StyledDesignTokenZIndex,
  StyledDesignTokenDuration,
  StyledDesignTokenOpacity,
} from "./DesignTokenColor";

interface Props {
  size?: "small" | "medium" | "large";
  value: string | number;
  type: string;
}

const isTypographyToken = type => {
  return [
    "typography",
    "font-family",
    "font-size",
    "line-height",
    "font-weight",
    "text-decoration",
  ].includes(type);
};

const isColor = type => {
  return ["color", "palette", "border-color", "foreground"].includes(type);
};

const DesignTokenIcon = ({ size = "small", value, type }: Props) => {
  if (isTypographyToken(type)) return <StyledDesignTokenTypography size={size} />;

  if (isColor(type)) return <StyledDesignTokenColor size={size} color={value} />;

  if (type === "size") return <StyledDesignTokenSize size={size} />;

  if (type === "duration") return <StyledDesignTokenDuration size={size} />;

  if (type === "space" || type === "spacing") return <StyledDesignTokenSpacing size={size} />;

  if (type === "elevation" || type === "box-shadow")
    return <StyledDesignTokenElevation size={size} />;

  if (type === "breakpoint") return <StyledDesignTokenBreakpoint size={size} />;

  if (type === "border-radius") return <StyledDesignTokenBorderRadius size={size} />;

  if (type === "z-index") return <StyledDesignTokenZIndex size={size} />;

  if (type === "opacity") return <StyledDesignTokenOpacity size={size} />;

  if (typeof value !== "string") return <StyledDesignTokenBase size={size} />;

  return <StyledDesignTokenBase size={size} />;
};

export default DesignTokenIcon;
