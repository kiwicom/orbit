import React from "react";
import { css } from "styled-components";
import { defaultTheme } from "@kiwicom/orbit-components";

interface Props {
  align?: "left" | "center" | "right";
  border?: boolean;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

const ImageContainer = ({ align = "center", border, size = "large", children }: Props) => {
  const getContainerWidth = () => {
    if (size === "small") return "200px";
    if (size === "medium") return "400px";
    return "650px";
  };

  const getContainerMargin = () => {
    if (align === "right") return "0 0 0 auto";
    if (align === "left") return "0";
    return "0 auto";
  };
  return (
    <div
      css={css`
        margin: ${getContainerMargin()};
        width: ${getContainerWidth()};
        ${border && `border: 1px solid ${defaultTheme.orbit.borderColorTableCell};`}
      `}
    >
      {children}
    </div>
  );
};

export default ImageContainer;
