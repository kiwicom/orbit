import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import { CONTENT_PADDING } from "../../../consts";

const StyledMobileOutdent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -${CONTENT_PADDING};
  ${mediaQueries.tablet(css`
    margin: 0;
  `)};

  > *:last-child {
    flex: 1;
    margin-bottom: 3rem;
  }
`;

export default StyledMobileOutdent;
