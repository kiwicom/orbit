import styled, { css } from "styled-components";

import { Size } from "..";

const StyledWrapper = styled.div<{ size: Size }>`
  position: relative;
  max-width: 24em; /* so that the placeholder fits in */
  ${({ size }) =>
    size === Size.Large &&
    css`
      height: 64px; /* to match the height of the large ButtonLink on the landing page */
    `}
`;

export default StyledWrapper;
