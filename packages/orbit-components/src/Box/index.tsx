import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import media from "../utils/mediaQuery";
import { DEVICES as DEVICES_CONSTS } from "../utils/mediaQuery/consts";
import normalize from "./normalize";
import { Props } from "./index.d";

const StyledBox = styled(({ className, asComponent: Element, children, dataTest, id }) => (
  <Element className={className} data-test={dataTest} id={id}>
    {children}
  </Element>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  box-sizing: border-box;
  ${({ viewports }) => {
    return Object.entries(viewports).map(([query, value]) => {
      if (query !== DEVICES_CONSTS[0] && typeof value !== "undefined") {
        return media[query](css`
          ${normalize(value)}
        `);
      }
      return normalize(value);
    });
  }}
`;

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
}: Props) => {
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
