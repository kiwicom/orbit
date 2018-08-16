// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "./consts";

import type { Props } from "./index";

const getToken = (theme, type, name) => {
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

  return tokens[name][type];
};

const StyledHeading = styled(({ element: Component, className, children }) => (
  <Component className={className}>{children}</Component>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme, type }) => getToken(theme, type, "sizeHeading")};
  font-weight: ${({ theme, type }) => getToken(theme, type, "weightHeading")};
  color: ${({ theme, inverted }) =>
    inverted ? theme.orbit.colorHeadingInverted : theme.orbit.colorHeading};
  line-height: ${({ theme }) => theme.orbit.lineHeightHeading};
  margin: 0;
`;

StyledHeading.defaultProps = {
  theme: defaultTokens,
};

const Heading = (props: Props) => {
  const {
    children,
    type = TYPE_OPTIONS.TITLE1,
    element = ELEMENT_OPTIONS.H1,
    inverted = false,
  } = props;

  return (
    <StyledHeading type={type} element={element} inverted={inverted}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
