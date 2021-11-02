// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import mediaQueries from "../mediaQuery";
import { DEVICES } from "../mediaQuery/consts";
import getViewportGridStyles from "./helpers/getViewportGridStyles";
import { isDefined } from "../layout";

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
  ${({ theme, spaceAfter, ...props }) =>
    DEVICES.map(viewport =>
      viewport in mediaQueries
        ? mediaQueries[viewport](css`
            ${isDefined(props[viewport]) &&
            getViewportGridStyles({
              viewport,
              theme,
            })};
          `)
        : viewport === "smallMobile" &&
          css`
            ${getViewportGridStyles({ viewport, theme })};
          `,
    )};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledGrid.defaultProps = {
  theme: defaultTheme,
};

const Grid = ({
  inline,
  rows = "1fr",
  columns = "1fr",
  gap,
  rowGap,
  columnGap,
  maxWidth,
  width,
  children,
  dataTest,
  as = "div",
  ...props
}: Props): React.Node => {
  const smallMobile = { inline, rows, columns, gap, rowGap, columnGap, maxWidth, width };
  return (
    <StyledGrid {...props} smallMobile={smallMobile} data-test={dataTest} as={as}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
