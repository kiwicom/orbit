// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { DEVICES as DEVICES_CONSTS } from "../utils/mediaQuery/consts";
import media from "../utils/mediaQuery";
import { normalize } from "./helpers";

import type { Props } from "./index";

const StyledInline = styled(({ asComponent: Element, children, className, dataTest }) => (
  <Element className={className} data-test={dataTest}>
    {children}
  </Element>
))`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ viewportSizes }) => {
    return Object.entries(viewportSizes).map(([query, value]: any) => {
      if (query !== DEVICES_CONSTS[0] && typeof value !== "undefined") {
        return media[query](css`
          ${normalize(value)}
        `);
      }
      return normalize(value);
    });
  }}
`;

StyledInline.defaultProps = {
  theme: defaultTheme,
};

const Inline = ({
  as = "div",
  mediumMobile,
  largeMobile,
  className,
  tablet,
  desktop,
  largeDesktop,
  children,
  dataTest,
  ...smallMobile
}: Props) => {
  const viewportSizes = { smallMobile, mediumMobile, largeMobile, tablet, desktop };

  return (
    <StyledInline
      asComponent={as}
      className={className}
      dataTest={dataTest}
      viewportSizes={viewportSizes}
    >
      {children}
    </StyledInline>
  );
};

export default Inline;
