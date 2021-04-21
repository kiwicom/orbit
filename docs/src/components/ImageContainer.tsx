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
  const getContainerWidth = containerSize => {
    if (containerSize === "small") return "200px";
    if (containerSize === "medium") return "400px";
    return "650px";
  };
  const containerWidth = getContainerWidth(size);

  const getContainerMargin = containerAlignment => {
    if (containerAlignment === "right") return "0 0 0 auto";
    if (containerAlignment === "left") return "0";
    return "0 auto";
  };
  const containerMargin = getContainerMargin(align);
  return (
    <div
      css={css`
        margin: ${containerMargin};
        width: ${containerWidth};
        ${border && `border: 1px solid ${defaultTheme.orbit.borderColorTableCell};`}
      `}
    >
      {children}
    </div>
  );
};

export default ImageContainer;
