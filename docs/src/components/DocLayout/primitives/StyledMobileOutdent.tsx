import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import { CONTENT_PADDING } from "../../../consts";

const StyledMobileOutdent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 -${CONTENT_PADDING};
    padding: 0 ${CONTENT_PADDING};
    position: absolute;
    height: 100%;
    top: 190px;

    ${mediaQueries.tablet(css`
      margin: 0;
      padding-right: ${CONTENT_PADDING};
    `)};

    > *:last-child {
      flex: 1;
      ${mediaQueries.tablet(css`
        margin-bottom: 3rem;
      `)}
    }

    ${mediaQueries.largeDesktop(css`
      padding: 0;
    `)}
  `}
`;

export default StyledMobileOutdent;
