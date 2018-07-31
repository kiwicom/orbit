// @flow
import * as React from "react";
import styled from "styled-components";
import createComponentFromTagProp from "react-create-component-from-tag-prop";

import defaultTokens from "../defaultTokens";
import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from "./consts";

import type { Props } from "./index";

const TextElement = createComponentFromTagProp({
  prop: "element",
  propsToOmit: ["tokens", "theme", "type", "size", "weight", "align", "uppercase", "italic"],
});

const StyledText = styled(TextElement)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ tokens, size }) => tokens.sizeText[size]};
  font-weight: ${({ tokens, weight }) => tokens.weightText[weight]};
  color: ${({ tokens, type }) => tokens.colorText[type]};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  text-align: ${({ align }) => align};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  font-style: ${({ italic }) => italic && `italic`};
  margin: 0;
`;

StyledText.defaultProps = {
  theme: defaultTokens,
};

const Text = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.LEFT,
  element = ELEMENT_OPTIONS.P,
  uppercase = false,
  italic = false,
  theme = defaultTokens,
  children,
}: Props) => {
  const tokens = {
    colorText: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextSecondary,
      [TYPE_OPTIONS.ATTENTION]: theme.orbit.colorTextAttention,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueNormal,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeNormal,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextError,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite,
    },
    weightText: {
      [WEIGHT_OPTIONS.NORMAL]: theme.orbit.fontWeightNormal,
      [WEIGHT_OPTIONS.BOLD]: theme.orbit.fontWeightBold,
    },
    sizeText: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeTextLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeTextNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeTextSmall,
    },
  };
  return (
    <StyledText
      tokens={tokens}
      type={type}
      size={size}
      weight={weight}
      align={align}
      element={element}
      uppercase={uppercase}
      italic={italic}
    >
      {children}
    </StyledText>
  );
};

export default Text;
