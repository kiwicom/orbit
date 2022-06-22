// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import media from "../utils/mediaQuery";
import { DEVICES as DEVICES_CONSTS } from "../utils/mediaQuery/consts";
import normalize from "./normalize";

import type { Props } from ".";

const StyledBox = styled(({ className, asComponent: Element, children, dataTest, id }) => (
  <Element className={className} data-test={dataTest} id={id}>
    {children}
  </Element>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  box-sizing: border-box;
  ${({ viewports }) => {
    return Object.entries(viewports).map(([query, value]: any) => {
      if (query !== DEVICES_CONSTS[0] && typeof value !== "undefined") {
        return media[query](css`
          ${normalize(value)}
        `);
      }
      return normalize(value);
    });
  }}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBox.defaultProps = {
  theme: defaultTheme,
};

const Box = ({
  as = "div",
  id,
  mediumMobile,
  largeMobile,
  tablet,
  desktop,
  largeDesktop,
  children,
  dataTest,
  className,
  ...smallMobile
}: Props): React.Node => {
  const viewports = { smallMobile, mediumMobile, largeMobile, tablet, desktop, largeDesktop };

  return (
    <StyledBox
      asComponent={as}
      id={id}
      dataTest={dataTest}
      className={className}
      viewports={viewports}
    >
      {children}
    </StyledBox>
  );
};
export default Box;
