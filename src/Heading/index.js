// @flow
import * as React from "react";
import styled from "styled-components";
import createComponentFromTagProp from "react-create-component-from-tag-prop";

import defaultTokens from "../defaultTokens";
import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "./consts";

import type { Props } from "./index";

const HeadingElement = createComponentFromTagProp({
  prop: "element",
  propsToOmit: ["type", "tokens", "theme"],
});

const StyledHeading = styled(HeadingElement)`
  font-family: ${props => props.theme.orbit.fontFamily};
  font-size: ${props => props.tokens.sizeHeading[props.type]};
  font-weight: ${props => props.tokens.weightHeading[props.type]};
  color: ${props => props.theme.orbit.colorHeading};
  line-height: ${props => props.theme.orbit.lineHeightHeading};
  margin: 0;
`;

StyledHeading.defaultProps = {
  theme: defaultTokens,
};

const Heading = (props: Props) => {
  const {
    children,
    theme = defaultTokens,
    type = TYPE_OPTIONS.TITLE1,
    element = ELEMENT_OPTIONS.H1,
  } = props;
  const tokens = {
    weightHeading: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.fontWeightHeadingDisplay,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.fontWeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.fontWeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.fontWeightHeadingTitle3,
    },
    sizeHeading: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.fontSizeHeadingDisplay,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.fontSizeHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.fontSizeHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.fontSizeHeadingTitle3,
    },
  };
  return (
    <StyledHeading tokens={tokens} type={type} element={element}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
