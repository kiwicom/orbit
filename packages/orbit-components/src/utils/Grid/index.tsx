import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import mediaQueries from "../mediaQuery";
import { DEVICES } from "../mediaQuery/consts";
import getViewportGridStyles from "./helpers/getViewportGridStyles";
import { isDefined } from "../layout";
import type { Props } from "./types";

const StyledGrid = styled.div<Props>`
  ${({ theme, ...props }) =>
    Object.values(DEVICES).map(viewport =>
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
    // @ts-expect-error As prop
    <StyledGrid {...props} smallMobile={smallMobile} data-test={dataTest} as={as}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
