import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import mediaQueries from "../mediaQuery";
import { DEVICES } from "../mediaQuery/consts";
import getViewportGridStyles from "./helpers/getViewportGridStyles";
import { isDefined } from "../layout";
import { Props } from "./index.d";

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
    Object.values(DEVICES).map(viewport =>
      viewport in mediaQueries
        ? mediaQueries[viewport](css`
            ${isDefined(props[viewport]) &&
            getViewportGridStyles({
              viewport,
              spaceAfter,
              theme,
            })};
          `)
        : viewport === "smallMobile" &&
          css`
            ${getViewportGridStyles({ viewport, theme, spaceAfter })};
          `,
    )};
`;

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
}: Props) => {
  const smallMobile = { inline, rows, columns, gap, rowGap, columnGap, maxWidth, width };
  return (
    <StyledGrid {...props} smallMobile={smallMobile} data-test={dataTest} as={as}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
