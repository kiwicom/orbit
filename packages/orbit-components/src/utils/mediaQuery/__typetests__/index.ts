import styled, { css } from "styled-components";

import Theme from "../../../defaultTheme";
import mediaQuery, { getBreakpointWidth } from "..";

export const StyledComponent = styled.div`
  ${mediaQuery.desktop(css`
    color: red;
  `)};
`;

export const shouldBeNumber = getBreakpointWidth("desktop", Theme, true);
export const shouldBeString = getBreakpointWidth("desktop", Theme, false);
export const shouldAlsoBeString = getBreakpointWidth("desktop", Theme);
