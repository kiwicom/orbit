import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import { CONTENT_PADDING } from "../../../consts";

const StyledMobileOutdent = styled.div`
  margin: 0 -${CONTENT_PADDING};
  ${mediaQueries.tablet(css`
    margin: 0;
  `)};
`;

export default StyledMobileOutdent;
