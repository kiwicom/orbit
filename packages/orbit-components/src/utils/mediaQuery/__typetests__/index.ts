import styled, { css } from "styled-components";

import mediaQuery from "..";

export const StyledComponent = styled.div`
  ${mediaQuery.desktop(css`
    color: red;
  `)};
`;
