import styled from "styled-components";

const StyledDocNavigationWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  scrollbar-gutter: stable;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
`;

export default StyledDocNavigationWrapper;
