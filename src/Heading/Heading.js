// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import createComponentFromTagProp from "react-create-component-from-tag-prop";

import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "./consts";
import type { Props } from "./Heading";

const HeadingElement = createComponentFromTagProp({
  prop: "element",
  propsToOmit: ["type", "tokens", "theme"],
});

const StyledHeading = styled(HeadingElement)`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.tokens.sizeHeading[props.type]};
  font-weight: ${props => props.tokens.weightHeading[props.type]};
  color: ${props => props.theme.colorHeading};
  line-height: ${props => props.theme.lineHeightHeading};
  margin: 0;
`;

const Heading = (props: Props) => {
  const {
    children,
    theme = defaultTokens,
    type = TYPE_OPTIONS.TITLE1,
    element = ELEMENT_OPTIONS.H1,
  } = props;
  const tokens = {
    weightHeading: {
      [TYPE_OPTIONS.DISPLAY]: theme.fontWeightHeadingDisplay,
      [TYPE_OPTIONS.TITLE1]: theme.fontWeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.fontWeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.fontWeightHeadingTitle3,
    },
    sizeHeading: {
      [TYPE_OPTIONS.DISPLAY]: theme.fontSizeHeadingDisplay,
      [TYPE_OPTIONS.TITLE1]: theme.fontSizeHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.fontSizeHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.fontSizeHeadingTitle3,
    },
  };
  return (
    <StyledHeading theme={theme} tokens={tokens} type={type} element={element}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
