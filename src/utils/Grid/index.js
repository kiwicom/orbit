// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import mediaQueries from "../mediaQuery";
import { DEVICES } from "../mediaQuery/consts";
import getViewportGridStyles from "./helpers/getViewportGridStyles";
import isDefined from "../../Stack/helpers/isDefined";

import type { Props } from ".";

const StyledGrid = styled(({ className, children, dataTest }) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
))`
  /*
    Just apply all mediaQueries (from devices map)
    smallMobile - default values are not mediaQuery and needs to be rendered differently
   */
  ${props =>
    DEVICES.map((viewport, index, devices) =>
      viewport in mediaQueries
        ? mediaQueries[viewport](css`
            ${isDefined(props[viewport]) && getViewportGridStyles({ viewport, index, devices })};
          `)
        : viewport === "smallMobile" &&
          css`
            ${getViewportGridStyles({ viewport, index, devices })};
          `,
    )};
`;

StyledGrid.defaultProps = {
  theme: defaultTheme,
};

const Grid = ({
  inline,
  rows = "auto",
  columns = "auto",
  gap,
  rowGap,
  columnGap,
  maxWidth,
  children,
  dataTest,
  element = "div",
  ...props
}: Props) => {
  const smallMobile = { inline, rows, columns, gap, rowGap, columnGap, maxWidth };
  return (
    <StyledGrid smallMobile={smallMobile} data-test={dataTest} as={element} {...props}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
