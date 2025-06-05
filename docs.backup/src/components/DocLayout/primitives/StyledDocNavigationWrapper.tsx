import styled from "styled-components";

import { CONTENT_PADDING } from "../../../consts";

const StyledDocNavigationWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: ${CONTENT_PADDING};
  overflow-y: auto;
  scrollbar-gutter: stable;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
`;

export default StyledDocNavigationWrapper;
