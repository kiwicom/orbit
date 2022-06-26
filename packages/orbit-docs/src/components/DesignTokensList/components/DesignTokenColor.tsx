import styled from "styled-components";

interface ColorProps {
  size?: "medium" | "large";
  $color: string;
}

function getDimensions(size: ColorProps["size"]) {
  switch (size) {
    case "large":
      return `
        width: 32px;
        height: 32px;
      `;
    default:
      return `
        width: 16px;
        height: 16px;
      `;
  }
}

export const StyledDesignTokenColor = styled.span<ColorProps>`
  ${({ size = "medium", $color }) => `
    display: inline-block;
    ${getDimensions(size)};
    background: ${$color};
    border-radius: 100%;
    ${
      $color === "rgb(255, 255, 255)" &&
      `
        border: 1px solid #E8EDF1;
      `
    }
  `}
`;

export const StyledDesignTokenOther = styled.span<{ size?: "medium" | "large" }>`
  ${({ size = "medium" }) => `
    display: inline-block;
    ${getDimensions(size)};
  `};
`;
