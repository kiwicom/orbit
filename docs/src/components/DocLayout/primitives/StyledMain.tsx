import styled from "styled-components";

import { MAX_CONTENT_WIDTH } from "../../../consts";

const StyledMain = styled.main`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: calc(${MAX_CONTENT_WIDTH} - 22ch);
  font-family: ${({ theme }) => theme.orbit.fontFamily};

  > *:last-child {
    flex: 1;
  }
`;

export default StyledMain;
