import styled from "styled-components";

import { CONTENT_PADDING, MAX_CONTENT_WIDTH } from "../../../consts";

const StyledMiddle = styled.div`
  padding: ${CONTENT_PADDING} ${CONTENT_PADDING} 0;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
  box-sizing: content-box;
`;

export default StyledMiddle;
