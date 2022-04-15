// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { textAlign } from "../utils/rtl";
import defaultTheme from "../defaultTheme";
import { ELEMENT_OPTIONS, TYPE_OPTIONS, TOKENS, ALIGN } from "./consts";
import getSpacingToken from "../common/getSpacingToken";
import mediaQueries from "../utils/mediaQuery";
import { DEVICES } from "../utils/mediaQuery/consts";

import type { GetHeadingToken, Props } from ".";

export const getHeadingToken: GetHeadingToken = (name, type) => ({ theme }) => {
  const tokens = {
    [TOKENS.weightHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.headingDisplayFontWeight,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.headingDisplaySubtitleFontWeight,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.headingTitle1FontWeight,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.headingTitle2FontWeight,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.headingTitle3FontWeight,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.headingTitle4FontWeight,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.headingTitle5FontWeight,
    },
    [TOKENS.sizeHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.headingDisplayFontSize,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.headingDisplaySubtitleFontSize,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.headingTitle1FontSize,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.headingTitle2FontSize,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.headingTitle3FontSize,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.headingTitle4FontSize,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.headingTitle5FontSize,
    },
    [TOKENS.lineHeight]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.headingDisplayLineHeight,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.headingDisplaySubtitleLineHeight,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.headingTitle1LineHeight,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.headingTitle2LineHeight,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.headingTitle3LineHeight,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.headingTitle4LineHeight,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.headingTitle5LineHeight,
    },
  };

  return tokens[name][type];
};

export const StyledHeading: any = styled(
  ({ element: Component, className, children, dataTest, dataA11ySection, id }) => (
    <Component
      className={className}
      data-test={dataTest}
      data-a11y-section={dataA11ySection}
      id={id}
    >
      {children}
    </Component>
  ),
)`
  ${({ theme, inverted, viewports, type, align }) => css`
    font-family: ${theme.orbit.fontFamily};
    text-transform: ${type === TYPE_OPTIONS.TITLE5 && "uppercase"};
    color: ${inverted ? theme.orbit.headingForegroundInverted : theme.orbit.headingForeground};
    margin: 0;
    text-align: ${textAlign(align)};
    font-size: ${getHeadingToken(TOKENS.sizeHeading, type)};
    font-weight: ${getHeadingToken(TOKENS.weightHeading, type)};
    line-height: ${getHeadingToken(TOKENS.lineHeight, type)};
    margin-bottom: ${getSpacingToken};
    ${
      // temporary fix until we figure out how come `viewports` ended up being `undefined`
      DEVICES.filter(viewport => viewports && viewports[viewport]).map(viewport => {
        const { type: value, spaceAfter, align: txtAlign } = viewports[viewport];
        return mediaQueries[viewport](css`
          font-size: ${getHeadingToken(TOKENS.sizeHeading, value)};
          text-align: ${textAlign(txtAlign)};
          font-weight: ${getHeadingToken(TOKENS.weightHeading, value)};
          line-height: ${getHeadingToken(TOKENS.lineHeight, value)};
          margin-bottom: ${getSpacingToken({ spaceAfter, theme })};
        `);
      })
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledHeading.defaultProps = {
  theme: defaultTheme,
};

const Heading = ({
  children,
  type = TYPE_OPTIONS.TITLE1,
  align = ALIGN.START,
  as = ELEMENT_OPTIONS.DIV,
  dataTest,
  inverted = false,
  spaceAfter,
  dataA11ySection,
  id,
  mediumMobile,
  largeMobile,
  tablet,
  desktop,
  largeDesktop,
}: Props): React.Node => {
  const viewports = { mediumMobile, largeMobile, tablet, desktop, largeDesktop };
  return (
    <StyledHeading
      id={id}
      align={align}
      type={type}
      element={as}
      inverted={inverted}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
      dataA11ySection={dataA11ySection}
      viewports={viewports}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
