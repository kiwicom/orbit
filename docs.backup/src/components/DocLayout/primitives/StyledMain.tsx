import styled from "styled-components";

import { MAX_CONTENT_WIDTH } from "../../../consts";

const StyledMain = styled.main`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: ${MAX_CONTENT_WIDTH};
  font-family: ${({ theme }) => theme.orbit.fontFamily};

  > *:last-child {
    flex: 1;
  }
`;

export default StyledMain;
