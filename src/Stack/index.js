// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import mediaQueries from "../utils/mediaQuery";
import { ALIGNS, JUSTIFY, DIRECTIONS, SPACINGS } from "./consts";
import { DEVICES } from "../utils/mediaQuery/consts";
import isDefined from "./helpers/isDefined";
import shouldUseFlex from "./helpers/shouldUseFlex";
import getViewportFlexStyles from "./helpers/getViewportFlexStyles";
import getChildrenMargin from "./helpers/getChildrenMargin";

import type { Props } from "./index";

const StyledStack = styled(({ className, element: Element, children, dataTest }) => (
  <Element className={className} data-test={dataTest}>
    {children}
  </Element>
))`
  // just apply all mediaQueries
  // smallMobile - default values are not mediaQuery and needs to be rendered differently
  ${props =>
    DEVICES.map((viewport, index, devices) =>
      viewport in mediaQueries
        ? mediaQueries[viewport](css`
            ${isDefined(props[viewport]) && getViewportFlexStyles(viewport)};
            ${getChildrenMargin({ viewport, index, devices })}
          `)
        : viewport === "smallMobile" &&
          css`
            ${getViewportFlexStyles(viewport)};
            ${getChildrenMargin({ viewport, index, devices })}
          `,
    )};
`;

StyledStack.defaultProps = {
  theme: defaultTheme,
};

const Stack = (props: Props) => {
  const {
    dataTest,
    inline = false,
    spacing = SPACINGS.NATURAL,
    align = ALIGNS.START,
    justify = JUSTIFY.START,
    grow = true,
    wrap = false,
    shrink = false,
    basis,
    spaceAfter,
    children,
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
    element = "div",
  } = props;

  // turn on FLEX automatically or manually with prop flex
  const flex = shouldUseFlex(props);

  // when flex - use direction, otherwise column because it's block element
  const direction = props.direction || (flex ? DIRECTIONS.ROW : DIRECTIONS.COLUMN);

  const smallMobile = {
    direction,
    align,
    justify,
    wrap,
    grow,
    basis,
    inline,
    shrink,
    spacing,
    spaceAfter,
  };

  return (
    <StyledStack
      dataTest={dataTest}
      flex={flex}
      smallMobile={smallMobile}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
      element={element}
    >
      {children}
    </StyledStack>
  );
};
export default Stack;
