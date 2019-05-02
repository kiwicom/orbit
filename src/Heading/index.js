// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { ELEMENT_OPTIONS, TYPE_OPTIONS, TOKENS } from "./consts";
import getSpacingToken from "../common/getSpacingToken";

import type { GetHeadingToken, Props } from "./index";

export const getHeadingToken: GetHeadingToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.weightHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.fontWeightHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.fontWeightNormal, // TODO: create token fontWeightHeadingSubDisplay
      [TYPE_OPTIONS.TITLE1]: theme.orbit.fontWeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.fontWeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.fontWeightHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.fontWeightHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.fontWeightHeadingTitle5,
    },
    [TOKENS.sizeHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.fontSizeHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.fontSizeHeadingTitle2, // TODO: create token fontSizeHeadingSubDisplay
      [TYPE_OPTIONS.TITLE1]: theme.orbit.fontSizeHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.fontSizeHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.fontSizeHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.fontSizeHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.fontSizeHeadingTitle5,
    },
  };

  return tokens[name][type];
};

export const StyledHeading = styled(
  ({ element: Component, className, children, dataTest, dataA11ySection }) => (
    <Component className={className} data-test={dataTest} data-a11y-section={dataA11ySection}>
      {children}
    </Component>
  ),
)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${getHeadingToken(TOKENS.sizeHeading)};
  font-weight: ${getHeadingToken(TOKENS.weightHeading)};
  color: ${({ theme, inverted }) =>
    inverted ? theme.orbit.colorHeadingInverted : theme.orbit.colorHeading};
  line-height: ${({ theme }) => theme.orbit.lineHeightHeading};
  text-transform: ${({ type }) => type === TYPE_OPTIONS.TITLE5 && "uppercase"};
  margin: 0;
  margin-bottom: ${getSpacingToken};
`;

StyledHeading.defaultProps = {
  theme: defaultTheme,
};

const Heading = ({
  children,
  type = TYPE_OPTIONS.TITLE1,
  element = ELEMENT_OPTIONS.H1,
  dataTest,
  inverted = false,
  spaceAfter,
  dataA11ySection,
}: Props) => (
  <StyledHeading
    type={type}
    element={element}
    inverted={inverted}
    dataTest={dataTest}
    spaceAfter={spaceAfter}
    dataA11ySection={dataA11ySection}
  >
    {children}
  </StyledHeading>
);

export default Heading;
