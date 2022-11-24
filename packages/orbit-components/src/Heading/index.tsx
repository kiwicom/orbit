import * as React from "react";
import styled, { css } from "styled-components";

import { textAlign } from "../utils/rtl";
import type { Theme } from "../defaultTheme";
import defaultTheme from "../defaultTheme";
import { ELEMENT_OPTIONS, TYPE_OPTIONS, TOKENS, ALIGN } from "./consts";
import getSpacingToken from "../common/getSpacingToken";
import mediaQueries from "../utils/mediaQuery";
import { DEVICES } from "../utils/mediaQuery/consts";
import type { Props, Type } from "./types";

export const getHeadingToken = (name: string, type: Type) => ({ theme }: { theme: Theme }) => {
  const tokens = {
    [TOKENS.weightHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.fontWeightHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.fontWeightHeadingDisplaySubtitle,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.fontWeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.fontWeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.fontWeightHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.fontWeightHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.fontWeightHeadingTitle5,
    },
    [TOKENS.sizeHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.fontSizeHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.fontSizeHeadingDisplaySubtitle,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.fontSizeHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.fontSizeHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.fontSizeHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.fontSizeHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.fontSizeHeadingTitle5,
    },
    [TOKENS.lineHeight]: {
      [TYPE_OPTIONS.DISPLAY]: theme.orbit.lineHeightHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.orbit.lineHeightHeadingDisplaySubtitle,
      [TYPE_OPTIONS.TITLE1]: theme.orbit.lineHeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.orbit.lineHeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.orbit.lineHeightHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.orbit.lineHeightHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.orbit.lineHeightHeadingTitle5,
    },
  };

  return tokens[name][type];
};

export const StyledHeading = styled(
  ({ element: Component, className, children, dataTest, dataA11ySection, id }) => (
    <Component
      className={className}
      data-test={dataTest}
      data-a11y-section={dataA11ySection}
      role={Component === "div" ? "heading" : undefined}
      id={id}
    >
      {children}
    </Component>
  ),
)`
  ${({ theme, inverted, viewports, type, align }) => css`
    font-family: ${theme.orbit.fontFamily};
    text-transform: ${type === TYPE_OPTIONS.TITLE5 && "uppercase"};
    color: ${inverted ? theme.orbit.colorHeadingInverted : theme.orbit.colorHeading};
    margin: 0;
    font-size: ${getHeadingToken(TOKENS.sizeHeading, type)};
    font-weight: ${getHeadingToken(TOKENS.weightHeading, type)};
    text-align: ${textAlign(align)};
    line-height: ${getHeadingToken(TOKENS.lineHeight, type)};
    margin-bottom: ${getSpacingToken};
    ${Object.values(DEVICES)
      .filter(viewport => viewports && viewports[viewport])
      .map(viewport => {
        const { type: value, spaceAfter, align: txtAlign } = viewports[viewport];
        return mediaQueries[viewport](css`
          font-size: ${getHeadingToken(TOKENS.sizeHeading, value)};
          font-weight: ${getHeadingToken(TOKENS.weightHeading, value)};
          text-align: ${textAlign(txtAlign)};
          line-height: ${getHeadingToken(TOKENS.lineHeight, value)};
          margin-bottom: ${getSpacingToken({ spaceAfter, theme })};
        `);
      })}
  `}
`;

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
}: Props) => {
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
