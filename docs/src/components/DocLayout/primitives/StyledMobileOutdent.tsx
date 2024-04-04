import styled, { css } from "styled-components";

import mediaQueries from "../../MediaQueries";
import { CONTENT_PADDING } from "../../../consts";

const StyledMobileOutdent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -${CONTENT_PADDING};
  padding: 0 ${CONTENT_PADDING};
  position: relative;
  height: 100%;

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
`;

export default StyledMobileOutdent;
