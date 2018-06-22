// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";
import createComponentFromTagProp from "react-create-component-from-tag-prop";

export const TYPE_OPTIONS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ATTENTION: "attention",
};

export const SIZE_OPTIONS = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large",
};

export const WEIGHT_OPTIONS = {
  NORMAL: "normal",
  BOLD: "bold",
};

export const ALIGN_OPTIONS = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
};

export const ELEMENT_OPTIONS = {
  P: "p",
  SPAN: "span",
  DIV: "div",
};

type Props = {|
  type: $Values<typeof TYPE_OPTIONS>,
  size: $Values<typeof SIZE_OPTIONS>,
  weight: $Values<typeof WEIGHT_OPTIONS>,
  align: $Values<typeof ALIGN_OPTIONS>,
  italic: boolean,
  uppercase: boolean,
  element: $Values<typeof ELEMENT_OPTIONS>,
  children: React.Node,
  theme: typeof defaultTokens,
|};

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

const Text = (props: Props) => {
  const { children, theme } = props;
  const tokens = {
    colorText: {
      [TYPE_OPTIONS.PRIMARY]: theme.colorTextPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.colorTextSecondary,
      [TYPE_OPTIONS.ATTENTION]: theme.colorTextAttention,
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
    <StyledText tokens={tokens} {...props}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  type: "primary",
  size: "normal",
  weight: "normal",
  align: "left",
  element: "p",
  uppercase: false,
  italic: false,
  theme: defaultTokens,
};

export default Text;
