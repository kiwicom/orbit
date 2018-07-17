// @flow
import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";
import createComponentFromTagProp from "react-create-component-from-tag-prop";

import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from "./consts";
import type { Props } from "./Text";

const TextElement = createComponentFromTagProp({
  prop: "element",
  propsToOmit: ["tokens", "theme", "type", "size", "weight", "align", "uppercase", "italic"],
});

const StyledText = styled(TextElement)`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ tokens, size }) => tokens.sizeText[size]};
  font-weight: ${({ tokens, weight }) => tokens.weightText[weight]};
  color: ${({ tokens, type }) => tokens.colorText[type]};
  line-height: ${({ theme }) => theme.lineHeightText};
  text-align: ${({ align }) => align};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  font-style: ${({ italic }) => italic && `italic`};
  margin: 0;
`;

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
      [TYPE_OPTIONS.PRIMARY]: theme.colorTextPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.colorTextSecondary,
      [TYPE_OPTIONS.ATTENTION]: theme.colorTextAttention,
      [TYPE_OPTIONS.INFO]: theme.paletteBlueNormal,
      [TYPE_OPTIONS.SUCCESS]: theme.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING]: theme.paletteOrangeNormal,
      [TYPE_OPTIONS.CRITICAL]: theme.colorTextError,
      [TYPE_OPTIONS.WHITE]: theme.paletteWhite,
    },
    weightText: {
      [WEIGHT_OPTIONS.NORMAL]: theme.fontWeightNormal,
      [WEIGHT_OPTIONS.BOLD]: theme.fontWeightBold,
    },
    sizeText: {
      [SIZE_OPTIONS.LARGE]: theme.fontSizeTextLarge,
      [SIZE_OPTIONS.NORMAL]: theme.fontSizeTextNormal,
      [SIZE_OPTIONS.SMALL]: theme.fontSizeTextSmall,
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
      theme={theme}
    >
      {children}
    </StyledText>
  );
};

export default Text;
