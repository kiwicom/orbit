import styled from "styled-components";
import React from "react";

import { StyledText } from "../../Text";
import defaultTheme from "../../defaultTheme";
import type { Props as TextProps } from "../../Text/types";
import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from "../../Text/consts";

const getColorType = ({ type }: { type: TextProps["type"] }) => ({ theme }) => {
  if (type === "secondary") return theme.orbit.colorTextSecondary;
  if (type === "info") return theme.orbit.paletteBlueDark;
  if (type === "success") return theme.orbit.paletteGreenDark;
  if (type === "warning") return theme.orbit.paletteOrangeDark;
  if (type === "critical") return theme.orbit.paletteRedDark;

  return theme.orbit.colorTextPrimary;
};

const StyledTemporaryText = styled(StyledText)<TextProps>`
  color: ${getColorType};
`;

const TemporaryText = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.LEFT,
  as = ELEMENT_OPTIONS.P,
  uppercase,
  italic,
  strikeThrough,
  spaceAfter,
  children,
  withBackground,
}: TextProps) => {
  return (
    <StyledTemporaryText
      type={type}
      size={size}
      weight={weight}
      align={align}
      as={as}
      uppercase={uppercase}
      italic={italic}
      strikeThrough={strikeThrough}
      spaceAfter={spaceAfter}
      withBackground={withBackground}
    >
      {children}
    </StyledTemporaryText>
  );
};

StyledTemporaryText.defaultProps = {
  theme: defaultTheme,
};

export default TemporaryText;
