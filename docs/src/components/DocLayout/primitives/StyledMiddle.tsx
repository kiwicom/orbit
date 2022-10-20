import styled, { css } from "styled-components";
import { mediaQueries } from "@kiwicom/orbit-components";

import { CONTENT_PADDING, MAX_CONTENT_WIDTH } from "../../../consts";

const StyledMiddle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: ${MAX_CONTENT_WIDTH};
    box-sizing: content-box;
    ${mediaQueries.largeDesktop(css`
      padding-left: ${CONTENT_PADDING};
      flex-direction: row;
      > * + * {
        margin-left: ${theme.orbit.spaceLarge};
      }
    `)};
  `}
`;

export default StyledMiddle;
